<script lang='ts'>
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import { getPhotoUrl } from "../photoUtils";
    import { theme } from "../theme";
    import type { UserData } from "../types";
    import PhotoComp from "./PhotoComp.svelte";
    import Heart from "svelte-material-icons/Heart.svelte";
    import Close from "svelte-material-icons/CloseThick.svelte";

    export let index: number;
    export let profile: UserData;

    const dispatcher = createEventDispatcher();

    let currentPhotoIndex: number = 0;
    let isMouseDown = false;              
    let mouseStartPos: [number, number] = [0, 0];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    let swipePos: [number, number] = [0, 0];
    let transformStyle = '';
    let verdict: 'undecided' | 'like' | 'dislike' = 'undecided';
    let x: number = 0;
    let y: number = 0;
    $: swipeFrac = x / window.innerWidth * 2;
    $: leftSwipeFrac = -Math.min(swipeFrac, 0);
    $: rightSwipeFrac = Math.max(swipeFrac, 0);
    $: transformStyle = `
                transition: ${verdict == 'undecided' ? 'none' : '0.25s'};
                /*transform-origin: left;*/
                transform: perspective(1000px)
                        /*rotate3d(0, 1, ${y / window.innerHeight}, ${-x / window.innerWidth * 45}deg)*/
                        translate(${x}px, ${y}px)
                        rotate3d(1, 0, 0, ${-y / window.innerHeight * 45}deg)
                        ;
            `;

    const tryChangeIndex = (change: number) => {
        const i = currentPhotoIndex + change;
        if (swipePos[0] === 0 && swipePos[1] === 0
                && 0 <= i && i < profile.photos.length) {
            currentPhotoIndex = i;
        }
    }

    const onMouseDown = (e: MouseEvent) => {
        isMouseDown = true;
        mouseStartPos[0] = e.clientX;
        mouseStartPos[1] = e.clientY;
        swipePos[0] = 0;
        swipePos[1] = 0;
    }

    const onMouseMove = (e: MouseEvent) => {
        if (isMouseDown) {
            swipePos[0] = e.clientX - mouseStartPos[0];
            swipePos[1] = e.clientY - mouseStartPos[1];
            [x, y] = swipePos;
            
        }
    }

    const onMouseUp = (e: MouseEvent) => {
        if (swipePos[0] !== 0 || swipePos[1] !== 0) {
            e.preventDefault();
        }
        isMouseDown = false;


        if (Math.abs(swipeFrac) > 0.3) {
            if (swipeFrac > 0) {
                verdict = 'like';
            } else {
                verdict = 'dislike';
            }
            const h = Math.sqrt(x ** 2 + y ** 2);
            x = x / h * window.innerWidth;
            y = y / h * window.innerHeight;
            onSwipe(verdict);
        } else {
            verdict = 'undecided';
            x = y = 0;
        }
    }

    const onSwipe = (verdict: 'like' | 'dislike') => {
        dispatcher('swipe', { verdict });
    }

    onMount(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });

    onDestroy(() => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    });
</script>

<div class="container" on:mousedown={onMouseDown} style={transformStyle}>
    {#each profile.photos as photo}
        <link rel="prefetch" href={getPhotoUrl(profile.userId, photo)} />
    {/each}
    <div class="photoContainer">
        <PhotoComp  photo={profile.photos[currentPhotoIndex]} uid={profile.userId} alt={'photo of ' + profile.nickname}/>
        <div class="leftClickPane" on:mouseup={() => tryChangeIndex(-1)}/>
        <div class="rightClickPane" on:mouseup={() => tryChangeIndex(1)}/>
    </div>
    <div class="photoTabs">
        {#each profile.photos as photo, i}
            <div class={`photoTab ${i === currentPhotoIndex ? 'selected' : ''}`}/>
        {/each}
    </div>
    <div>
        <div class="byline">
            <h1>{ profile.nickname }</h1>
            <h2>{ Math.floor((Date.now() - profile.birthday) / (52 * 7 * 24 * 60 * 60 * 1000)) }</h2>
        </div>
        <p class="description">{ profile.aboutMe }</p>
    </div>
    <div class="overlay" style={`
        background: ${theme.dislikeColor};
        opacity: ${leftSwipeFrac};
    `}>
        <Close color="white" size={96} />
    </div>
    <div class="overlay" style={`
        background: ${theme.accent};
        opacity: ${rightSwipeFrac};
    `}>
        <Heart color="white" size={96} />
    </div>
</div>

<style>
    .wrapper {
        position: relative;
    }

    .container {
        display: flex;
        flex-direction: column;
        user-select: none;
        transition: 0.2s transform;
        padding: 10px;
        border-radius: 10px;
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        /*width: 300px;*/
    }

    .container :global(img) {
        width: 100%;
        /*height: 60vh;*/
        border-radius: 10px;
    }

    .overlay {
        position: absolute;
        inset: 0;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        mix-blend-mode: multiply;
    }

    .byline {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    .byline :first-child {
        flex-grow: 1;
    }

    h1 {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 900;
    }

    h2 {
        font-size: 1rem;
        position: relative;
        top: -1px;
    }

    h1, h2, p {
        margin: 0;
    }

    .photoContainer {
        position: relative;
    }

    .photoTabs {
        gap: 5px;
        display: flex;
        flex-direction: row;
        padding: 0 2px;
    }

    .photoTab {
        background-color: gray;
        border-radius: 2px;
        height: 4px;
        flex-grow: 1;
    }

    .photoTab.selected {
        background-color: black;
    }

    .leftClickPane {
        position: absolute;
        inset: 0;
        right: 50%;
    }

    .rightClickPane {
        position: absolute;
        inset: 0;
        left: 50%;
    }

    .description {
        white-space: break-spaces;
        font-size: 15px;
    }
</style>