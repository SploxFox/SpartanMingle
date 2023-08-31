<script>
    import { client } from "../../client";
    import ProfilePic from "../ProfilePic.svelte";
</script>

{#if $client.ready}
    <div class='container'>
        {#each Object.values($client.privateData.matches).sort((a, b) => b.lastMessageTime - a.lastMessageTime) as match}
            <a class='match' href={`/#messages/${match.userId}`}>
                <div class='pic'>
                    <ProfilePic profile={match} />
                </div>
                <h1 class='name'>{match.nickname}</h1>
                <div class='lastMessageContainer'>
                    <p class='lastMessage'>{match.lastMessageText}</p>
                </div>
            </a>
        {:else}
            <p>You have no matches to message yet. Go get swiping!</p>
        {/each}
    </div>
{/if}

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .match {
        all: unset;
        cursor: pointer;
        display: grid;
        grid-template-columns: 1fr 10px 5fr;
        grid-template-rows: auto auto;
        padding: 10px;
    }

    .pic {
        position: relative;
        grid-area: 1 / 1 / 3 / 2;
        aspect-ratio: 1 / 1;
    }

    .name {
        grid-area: 1 / 3 / 2 / 4;
    }

    .lastMessageContainer {
        grid-area: 2 / 3 / 3 / 4;
        height: 3em;
    }

    .lastMessage {
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 100%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }

    h1 {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 900;
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>