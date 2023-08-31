<script lang="ts">
    import type { User } from 'firebase/auth';
    import CloseThick from 'svelte-material-icons/CloseThick.svelte';
    import { get } from 'svelte/store';
    import type { NewPhotoUpload, PhotoUploadPhoto } from '../types'
    import { client } from '../client';
    import PhotoComp from './PhotoComp.svelte';
    import Plus from 'svelte-material-icons/Plus.svelte';
    import { theme } from '../theme';
    import { uploadBytesResumable, type UploadTask } from 'firebase/storage';
    import { storage, userImageRef } from '../fb';

    $: fbUser = get(client).fbUser as User;

    export let photos: { [id: string]: PhotoUploadPhoto } = {};
    $: photoLength = Object.keys(photos).length;

    const handleDelete = (id: string) => {
        delete photos[id];
        photos = photos;
    }

    const handleFilesChanged = (e: Event & { currentTarget: HTMLInputElement }) => {
        for (const file of e.currentTarget.files) {
            if (photoLength < 6) {
                startUpload(crypto.randomUUID(), file);
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

        task.on("state_changed", 
                s => (photos[id] as NewPhotoUpload).progress = s.bytesTransferred / s.totalBytes,
                () => (photos[id] as NewPhotoUpload).error = true,
                () => (photos[id] as NewPhotoUpload).done = true);
    }
</script>

<div class="container">
    {#each Object.entries(photos) as [id, photo]}
        {#if (photo.type === "upload" && photo.done) || photo.type === "old"}
            <div class="imageContainer">
                <PhotoComp uid={fbUser.uid} {id} alt={"photo of you"} />
                <button class="close" on:click={() => handleDelete(id)}>
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
    {#if photoLength < 6}
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