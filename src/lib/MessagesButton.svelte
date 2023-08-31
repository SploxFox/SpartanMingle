<script lang="ts">
    import ChatOutline from 'svelte-material-icons/ChatOutline.svelte'
    import url from '../url';
    import { client } from '../client';
</script>

{#if $client.ready && $client.privateData}
<button on:click={() => window.location.hash = '#messages'}>
    <ChatOutline size=25 />
    {#if 
        !$url.hash.startsWith('#messages')
        && $client.ready
        && $client.privateData.lastNotiTime > $client.privateData.lastReadTime
    }
        <div class="notiDot" />
    {/if}
</button>
{/if}

<style>
    button {
        all: unset;
        cursor: pointer;
        padding: 0px 10px;
        color: rgb(35, 23, 24);
        display: flex;
        position: relative;
    }

    .notiDot {
        position: absolute;
        right: 5px;
        bottom: 0px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 4px solid white;
        background-color: red;
    }
</style>