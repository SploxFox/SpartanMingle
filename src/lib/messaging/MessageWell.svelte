<script lang="ts">
    import type { Message } from "../../types";
    import { client } from "../../client";
    import Loading from "../Loading.svelte";
    import MessageBubble from "./MessageBubble.svelte";

    export let messages: Message[];
    export let messageQueue: {
        nonce: string,
        text: string
    }[];
    export let containerRef: HTMLDivElement = undefined;
</script>

<div class="container" bind:this={containerRef}>
    {#if !$client.ready}
        <Loading />
    {:else}
        {#each messages as msg}
            <MessageBubble
                text={msg.text}
                side={msg.from === $client.uid ? 'self' : 'other'}
            />
        {/each}
        <br />
        {#each messageQueue as msg}
            <MessageBubble
                text={msg.text}
                side={'self'}
            />
        {/each}
    {/if}
</div>

<style>
    .container {
        display: flex;
        gap: 3px;
        flex-direction: column;
        max-width: 100ch;
        position: absolute;
        inset: 0;
        overflow-y: scroll;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    
    .container::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
</style>