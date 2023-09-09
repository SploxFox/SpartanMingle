<script lang="ts">
    import SwipeRight from 'svelte-material-icons/GestureSwipeRight.svelte';
    import SwipeLeft from 'svelte-material-icons/GestureSwipeLeft.svelte';
    import Tap from 'svelte-material-icons/GestureTap.svelte';
    import Cross from 'svelte-material-icons/Close.svelte';
    import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';
    import heartLogo from '../assets/heartLogo.svg';
    import Button from './Button.svelte';

    const HeartLogo = heartLogo as any;

    let stage = 0;

    const next = () => {
        stage++;
    }

    const size = 96;
</script>

<link rel='prefetch' href="/landscape.jpg" />
<div class='wrapper'>
    <div class='container'>
        <div class='top'>
            {#if stage === 0}
                <h1>Welcome to Spartan Mingle!</h1>
            {:else if stage === 1}
                <div class="img">
                    <div class="right">
                        <Tap size={size} color="white"/>
                    </div>
                </div>
                <p>When you want to see the next picture on a profile, tap on the <strong>right</strong> side of the image.</p>
            {:else if stage === 2}
                <div class="img">
                    <div class="left">
                        <Tap size={96} color="white"/>
                    </div>
                </div>
                <p>To go back, tap on the <strong>left</strong> side.</p>
            {:else if stage === 3}
                <div class="icons">
                    <SwipeRight size={size}/>
                    <HeartLogo style='width: 96px'/>
                </div>
                <p>If you like a profile, swipe the card to the <strong>right</strong>!</p>
            {:else}
                <div class="icons">
                    <Cross size={size} />
                    <SwipeLeft size={size}/>
                </div>
                <p>Otherwise, swipe the card to the <strong>left</strong>.</p>
            {/if}
        </div>
        <div class='buttons'>
            {#if stage === 4}
                <Button on:click={() => window.location.hash = ""}>Get started</Button>
            {:else}
                <Button minor on:click={next}>Next</Button>
            {/if}
        </div>
    </div>
</div>

<style>
    .wrapper {
        height: 100%;
    }
    .top {
        min-height: 200px;
        padding: 20px;
        flex-direction: column;
    }
    .buttons {
        justify-content: flex-end;
        align-self: stretch;
        padding: 10px;
    }
    .container {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.162);
        overflow: hidden;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img {
        height: 300px;
        width: 300px;
        border-radius: 5px;
        background-image: url('/landscape.jpg');
        margin: 0 auto;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-size: cover;
        padding: 5px;
    }
    .left, .right {
        background-color: rgba(28, 28, 28, 0.47)    ;
        width: 100%;
        height: 100%;
    }
    .left {
        grid-column: 1;
    }
    .right {
        grid-column: 2;
    }
    
    @keyframes swipeLeft {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }

        100% {
            transform: translate(-100%, 0);
            opacity: 0;
        }
    }
</style>