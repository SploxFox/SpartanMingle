<script lang="ts">
    import type { User } from 'firebase/auth';
    import CloseThick from 'svelte-material-icons/CloseThick.svelte';
    import { get } from 'svelte/store';
    import type { NewPhotoUpload, PhotoUploadPhoto } from '../types'
    import { user } from '../user';
    import PhotoComp from './PhotoComp.svelte';
    import Plus from 'svelte-material-icons/Plus.svelte';
    import { theme } from '../theme';
    import { uploadBytesResumable, type UploadTask } from 'firebase/storage';
    import { storage, userImageRef } from '../fb';

    $: fbUser = get(user).fbUser as User;

    export let photoOrder: number[];
    export let photos: PhotoUploadPhoto[];

    const handleDelete = (i: number) => {
        photos[i] = {
            type: 'nothing'
        }
        photoOrder = photoOrder.filter(v => v === i + 1);
    }

    const handleFilesChanged = (e: Event & { currentTarget: HTMLInputElement }) => {
        for (const file of e.currentTarget.files) {
            if (photos.length < 6) {
                startUpload(photos.length + 1, file);
            }
        }
    }

    const startUpload = (slot: number, f: File) => {
        const task = uploadBytesResumable(userImageRef(fbUser.uid, slot), f);
        const i = slot - 1;

        photos[i] = {
            type: 'upload',
            progress: 0,
            done: false,
            error: false,
            task
        }

        task.on("state_changed", 
                s => (photos[i] as NewPhotoUpload).progress = s.bytesTransferred / s.totalBytes,
                () => (photos[i] as NewPhotoUpload).error = true,
                () => (photos[i] as NewPhotoUpload).done = true);
    }
</script>

<div class="container">
    {#each photos as photo, i}
        {#if (photo.type === "upload" && photo.done) || photo.type === "old"}
            <div class="imageContainer">
                <PhotoComp uid={fbUser.uid} slot={i + 1} alt={"photo of you"} />
                <button class="close" on:click={() => handleDelete(i)}>
                    <CloseThick color="white"/>
                </button>
            </div>
        {:else if photo.type === "upload"}
            <div class="imageContainer">
                <div class="fakeImage">
                    Uploading... ({Math.floor(photo.progress * 100)}%)
                </div>
            </div>
        {/if}
    {/each}
    {#if photos.length < 6}
        <label class="uploadBox">
            <Plus color={theme.accentColor} size={64} />
            <input type="file" accept="image/*" multiple on:change={handleFilesChanged}/>
        </label>
    {/if}
</div>

<style>
    .container :global(img), .fakeImage {
        width: 200px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 0 20px -10px rgb(104, 78, 152);
    }
    .container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .imageContainer {
        position: relative;
        display: flex;
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
    label {
        border: 4px dashed var(--accentColor);
        width: 192px;
        border-radius: 10px;
        aspect-ratio: 3 / 4;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>