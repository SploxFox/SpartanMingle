<script lang="ts">
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import type { UserData } from "../types";
    import FlippableProfilePhoto from "./FlippableProfilePhoto.svelte";
    import { getAccentWithOpacity, theme } from "../theme";

    export let uid: string;
    export let pid: string;

    const dispatch = createEventDispatcher();

    //export let profile: UserData;

    const charEls: HTMLSpanElement[] = [];

    let charsDisplayed = -1;
    let hasMounted = false;

    let startTime = Date.now();
    let handle: number;
    const runtime = 1_000;

    let zPos: number;
    let turnZ: number;
    let turnY: number;
    let scale: number;

    let goAway = false;

    const update = () => {
        const now = Date.now();
        const unclampedT = (now - startTime)/runtime;
        const t = Math.min(unclampedT, 1);
        const x = (1 - t) ** 2;

        zPos = -1/t;
        turnY = (1 - x) * 3;
        turnZ = Math.exp(-5 * unclampedT) + Math.sin(unclampedT) * 0.5 * 0.01;
        scale = t ** (1/3);

        const toDisplay = Math.floor((unclampedT - 0.4) * 2 * charEls.length);
        if (toDisplay > charsDisplayed) {
            const next = charsDisplayed + 1;
            if (charEls[next]) {
                charEls[next].style.visibility = 'visible';
                charEls[next].style.animation = '0.25s slideIn';
                charsDisplayed++;
            }
        }

        requestAnimationFrame(update);
    }

    const handleDone = () => {
        goAway = true;
        setTimeout(() => dispatch('done'), 500);
    }

    update();

    onMount(() => {
        handle = requestAnimationFrame(update);
        setTimeout(() => {
            hasMounted = true
        }, 200);
    });

    onDestroy(() => {
        cancelAnimationFrame(handle);
    });
</script>
    <div class={`wrapper ${goAway ? 'goAway' : ''}`} style={`${(hasMounted && !goAway) ? `
        backdrop-filter: blur(4px) opacity(1);
    ` : `
        backdrop-filter: blur(4px) opacity(0);
    `}`}
        on:keydown={handleDone}
        on:click={handleDone}>
    <div class={'bg'} style={`${(hasMounted && !goAway) ? 'opacity: 0.25' : 'opacity: 0'}; background: ${theme.accent}`}></div>
    <div class={`container ${goAway ? 'goAway' : ''}`}>
        <div class="imgContainer" style={`transform: scale(${scale}) rotate(${turnZ}turn) rotate3d(0, 1, 0, ${turnY}turn)`}>
            <FlippableProfilePhoto
                uid={uid} id={pid} alt='text'/>
        </div>
        <div class="callout">
            {#each "match!" as char, i}
                <span bind:this={charEls[i]}>{char}</span>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        pointer-events: none;
    }
    .imgContainer {
        perspective: 1000px;
        transform-style: preserve-3d;
    }
    .wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        overflow: hidden;
        transition: all 0.5s;
    }
    .callout {
        text-align: center;
        margin-top: -48px;
        transform: translateZ(0);
    }
    .callout > span {
        display: inline-block;
        visibility: hidden;
        text-transform: uppercase;
        font-weight: 900;
        font-family: 'Titillium Web', sans-serif;
        font-size: 48px;
        text-shadow:
            -1px -1px white,
             1px -1px white,
            -1px 1px white,
             1px  1px white,
            1px 2px white,
            2px 3px white,
            3px 4px white,
            2px 1px white,
            3px 2px white,
            4px 3px white
            ;
    }
    .container.goAway {
        transform: scale(0);
        transition: transform 0.5s cubic-bezier(0.430, -0.470, 0.730, 0.515);
    }
    .wrapper.goAway {
        pointer-events: none;
    }
    .bg {
        position: fixed;
        inset: 0;
        transition: all 0.5s;
    }
</style>