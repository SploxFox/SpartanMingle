<script lang='ts'>
    import { onDestroy, onMount } from "svelte";
    import FakeCard from "./FakeCard.svelte";

    export let stack = false;

    const loadingMessages = [[
        'Loading...',
        'Looking for love...',
        'Finding your soulmate...',
        'Please wait...',
        'Sorting through nerdy profiles...',
    ], [
        'Reticulating splines...',
        'Generating witty loading text...',
        'Activating CWRU goggles...',
        'Traveling the binary walkways of life...',
        'Hopping through steam tunnels...',
        'Activating Bab\'s weather machine...',
        'Getting lost in PBL...',
        'Preaching on Euclid...',
        'Climbing the elephant stairs...',
        'Waiving medical insurance...',
        'Clicker question GO!!!',
        'Making out in the stacks...',
        'Walking to the Den...',
        'Redesigning the logo again...',
        'The odds are good, but the good are odd...',
        'Creating the ultimate love[box]...',
        'Interning at Raytheon...',
        'Perusulating the Athenian...',
        'Cuddling with the roommate...',
        'Eating borger at Leutner...',
        'Selling overpriced clickers...',
    ]];

    function shuffle<T>(array: T[]) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    for (const messages of loadingMessages) {
        shuffle(messages);
    }

    const sleep = (timeMs: number) => new Promise(resolve => setTimeout(resolve, timeMs));

    let loadingMessage;
    let msgStage: 'shown' | 'hidden' = 'hidden';

    let hasBeenDestroyed = false;

    onDestroy(() => hasBeenDestroyed = true);

    onMount(async () => {
        if (!stack) {
            return;
        }

        loadingMessage = loadingMessages[0][0];
        let i = 0;

        await sleep(500);
        while (!hasBeenDestroyed) {
            msgStage = 'shown';
            await sleep(2000);
            msgStage = 'hidden';
            await sleep(1000);
            loadingMessage = loadingMessages[1][++i % loadingMessages[1].length];
        }
    })
</script>

<div class='loading'>
    <FakeCard/>
</div>
{#if loadingMessage}
    <h1 class={`msg ${msgStage}`}>{loadingMessage}</h1>
{/if}

<style>
    .msg {
        transition: opacity 1s ease-in-out;
        position: absolute;
        inset: 15%;
        text-shadow: 
            0px 1px white,
            0px -1px white,
            1px 0px white,
            -1px 0px white
            ;
        line-height: 1;
        text-align: center;
    }
    .msg.shown {
        opacity: 1;
    }
    .msg.hidden {
        opacity: 0;
    }

    .loading {
        animation: 1s loadingFlip infinite;
        position: absolute;
        inset: 35%;
    }

    @keyframes loadingFlip {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(2turn);
        }
    }
</style>