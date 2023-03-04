<script lang="ts">
    import type { User } from 'firebase/auth';
    import CloseThick from 'svelte-material-icons/CloseThick.svelte';
    import { get } from 'svelte/store';
    import type { Photo } from '../types'
    import { user } from '../user';
    import PhotoComp from './PhotoComp.svelte';
    import PlusThick from 'svelte-material-icons/PlusThick.svelte';
    import Plus from 'svelte-material-icons/Plus.svelte';
    import { theme } from '../theme';

    $: fbUser = get(user).fbUser as User;

    export let oldPhotos: Photo[] = [];
    export let newPhotos: Photo[] = [];


    $: photos = [...oldPhotos, ...newPhotos].slice(0, 6);

    const handleFilesChanged = e => {
        for (const file of e.currentTarget.files) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                const photo = {
                    dataUrl: event.target.result as string
                }

                if (newPhotos.filter(val => val.dataUrl === photo.dataUrl).length === 0) {
                    newPhotos.push(photo);
                }

                newPhotos = newPhotos;
            });
            reader.readAsDataURL(file);
        }
    }

    const handleDelete = (i: number) => {
        if (i < oldPhotos.length) {
            oldPhotos.splice(i, 1);
            oldPhotos = oldPhotos;
        } else {
            newPhotos.splice(i - oldPhotos.length, 1);
            newPhotos = newPhotos;
        }
    }
</script>

<div class="container">
    {#each photos as photo, i}
        <div class="imageContainer">
            <PhotoComp {photo} uid={fbUser.uid} alt={"photo of you"} />
            <button class="close" on:click={() => handleDelete(i)}>
                <CloseThick color="white"/>
            </button>
        </div>
    {/each}
    <label class="uploadBox">
        <Plus color={theme.accentColor} size={64} />
        <input type="file" accept="image/*" multiple on:change={handleFilesChanged}/>
    </label>
</div>

<style>
    .container :global(img) {
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