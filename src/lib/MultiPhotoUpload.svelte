<script lang="ts">
    import type { User } from 'firebase/auth';
    import CloseThick from 'svelte-material-icons/CloseThick.svelte';
    import { get } from 'svelte/store';
    import type { NewPhotoUpload, PhotoUploadPhoto } from '../types'
    import { client, type ReadyClientData } from '../client';
    import PhotoComp from './PhotoComp.svelte';
    import Plus from 'svelte-material-icons/Plus.svelte';
    import { theme } from '../theme';
    import { uploadBytesResumable, type UploadTask } from 'firebase/storage';
    import { storage, userImageRef } from '../fb';
    import { v4 as uuidv4 } from 'uuid';
    import { onDestroy, onMount } from 'svelte';

    $: fbUser = (get(client) as ReadyClientData).fbUser as User;

    let pointerMoveHandle;
    let pointerUpHandle;
    let touchMoveHandle;
    onMount(() => {
        pointerMoveHandle = window.addEventListener('pointermove', (e) => {
            pointerPos = [e.clientX, e.clientY];

            if (held) {
                e.preventDefault();
            }

            const nearest = getNearestI(heldPos);
            if (held && nearest !== insertI) {
                insertI = nearest;
                const newOrder = photoOrder.filter(id => id !== held);
                newOrder.splice(insertI, 0, held);
                reorder(newOrder);
            }
        });

        pointerUpHandle = window.addEventListener('pointerup', (e) => {
            held = null;
        });
    });

    onDestroy(() => {
        window.removeEventListener('pointermove', pointerMoveHandle);
        window.removeEventListener('pointerup', pointerUpHandle);
    })

    export let photos: { [id: string]: PhotoUploadPhoto } = {};
    $: photoLength = Object.keys(photos).length;
    export let photoOrder: string[];
    let oldPhotoOrder: string[] = photoOrder;

    let pointerPos: [number, number] = [0, 0];
    let startPointerPos: [number, number] = [0, 0];
    $: pointerOffsetPos = [pointerPos[0] - startPointerPos[0], pointerPos[1] - startPointerPos[1]] as [number, number];
    let held: string | null = null;
    let lastHeld: string | null = null;
    let insertI = 0;
    let startHeldPos: [number, number] = [0, 0];
    $: heldPos = addPos(startHeldPos, pointerOffsetPos);

    const addPos = (a: [number, number], b: [number, number]) => {
        return [a[0] + b[0], a[1] + b[1]] as [number, number];
    }

    const imgWidth = 100;
    const imgHight = imgWidth * 4 / 3;
    const gap = 10;
    const containerWidth = imgWidth * 3 + gap * 2;
    const containerHeight = imgHight * 2 + gap;

    const getPos = (i: number) => {
        const x = i % 3;
        const y = Math.floor(i / 3);
        return [x * (imgWidth + gap), y * (imgHight + gap)] as [number, number];
    }

    $: anchorPoints = Array(6).fill(0).map((_, i) => getPos(i));

    const getNearestI = (pos: [number, number]) => {
        let nearestI = 0;
        let nearestDist = Infinity;
        for (let i = 0; i < anchorPoints.length; i++) {
            const dist = Math.sqrt(Math.pow(anchorPoints[i][0] - pos[0], 2) + Math.pow(anchorPoints[i][1] - pos[1], 2));
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestI = i;
            }
        }
        return nearestI;
    }

    const getTranslate = (pos: [number, number]) => {
        return `translate(${pos[0]}px, ${pos[1]}px)`;
    }

    const handleDelete = (id: string) => {
        delete photos[id];
        photoOrder.splice(photoOrder.indexOf(id), 1);
        photoOrder = photoOrder;
        photos = photos;
    }

    const handleFilesChanged = (e: Event & { currentTarget: HTMLInputElement }) => {
        for (const file of e.currentTarget.files) {
            if (photoLength < 6) {
                startUpload(uuidv4(), file);
            }
        }
    }

    const startUpload = (id: string, f: File) => {
        const task = uploadBytesResumable(userImageRef(fbUser.uid, id), f);

        photos[id] = {
            type: 'upload',
            progress: 0,
            done: false,
            error: false,
            task
        }

        photoOrder.push(id);

        task.on("state_changed", 
                s => (photos[id] as NewPhotoUpload).progress = s.bytesTransferred / s.totalBytes,
                () => (photos[id] as NewPhotoUpload).error = true,
                () => (photos[id] as NewPhotoUpload).done = true);
    }

    const reorder = (newOrder: string[]) => {
        photoOrder = newOrder;
        requestAnimationFrame(() => {
            oldPhotoOrder = photoOrder;
        });
    }
</script>

<div 
    class="container"
    style={`width: ${containerWidth}; height: ${containerHeight}`}
>
    {#each photoOrder as id (id)}
        {@const photo = photos[id]}
        {@const i = photoOrder.indexOf(id)}
        {@const oldI = oldPhotoOrder.indexOf(id)}
        {#if (photo.type === "upload" && photo.done) || photo.type === "old"}
            <div 
                class={`imageContainer ${held === id ? "held" : ""} ${lastHeld === id ? "lastHeld" : ""}`}
                on:pointerdown={e => {
                    pointerPos = startPointerPos = [e.clientX, e.clientY];
                    startHeldPos = getPos(i);
                    held = id;
                    lastHeld = id;
                    e.preventDefault();
                }}
                on:touchmove|nonpassive={e => {
                    e.preventDefault();
                }}
                style={`transform: ${held === id ? getTranslate(heldPos) : getTranslate(getPos(oldI))}`}
            >
                <PhotoComp uid={fbUser.uid} {id} alt={"photo of you"} />
                <button class="close" on:click={() => handleDelete(id)}>
                    <CloseThick color="white"/>
                </button>
            </div>
        {:else if photo.type === "upload"}
            <div 
                class="imageContainer" 
                style={`transform: ${held === id ? getTranslate(heldPos) : getTranslate(getPos(oldI))}`}
            >
                <div class="fakeImage">
                    Uploading... ({Math.floor(photo.progress * 100)}%)
                </div>
            </div>
        {/if}
    {/each}
    {#each Array(6) as _, i}
        {#if photoLength == i}
            <label class="uploadBox">
                <Plus color={theme.accentColor} size={32} />
                <input type="file" accept="image/*" multiple on:change={handleFilesChanged}/>
            </label>
        {:else}
            <div class="lightUploadBox" />
        {/if}
    {/each}
</div>

<style>
    .fakeImage {
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .container :global(img), .fakeImage {
        width: 100px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 0 20px -10px rgb(104, 78, 152);
    }

    .container :global(:not(.held) img) {
        cursor: grab;
    }

    .container :global(.held img) {
        cursor: grabbing;
    }

    .container {
        /*display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;*/
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px;
        user-select: none;
    }
    .imageContainer {
        position: absolute;
        display: flex;
    }
    .imageContainer:global(:not(.held)) {
        transition: 0.2s transform;
    }
    .imageContainer:global(.lastHeld) {
        z-index: 1;
    }
    .close {
        all: unset;
        position: absolute;
        display: flex;
        top: -5px;
        right: -5px;
        background-color: red;
        padding: 5px;
        border-radius: 50%;
        cursor: pointer;
    }
    input {
        display: none;
    }
    .uploadBox {
        cursor: pointer;
    }
    .uploadBox, .lightUploadBox {
        width: 100px;
        background-color: rgb(236, 236, 236);
        border-radius: 10px;
        aspect-ratio: 3 / 4;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .lightUploadBox {
        background-color: rgb(247, 247, 247);
    }
</style>