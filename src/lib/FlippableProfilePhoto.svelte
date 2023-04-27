<script>
    import PhotoComp from "./PhotoComp.svelte";
    import Heart from "svelte-material-icons/Heart.svelte";
    import { theme } from "../theme";

    export let id;
    export let uid;
    export let alt;
    export let style = '';
</script>

<div class="container" {style}>
    <PhotoComp {id} {uid} {alt} />
    <div class="backside" style={`background: ${theme.accent}`}>
        <Heart color="white" size={96} />
    </div>
</div>

<style>
    .container :global(img) {
        width: 200px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        backface-visibility: hidden;
        border-radius: 10px;
    }
    .backside {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate3d(0, 1, 0, 180deg);
        backface-visibility: hidden;
        border-radius: 10px;
    }
    .container {
        transform-style: preserve-3d;
        display: inline-flex;
    }
    /*
    @keyframes rotate {
        0% {
            transform: rotate3d(0, 1, 0, 0deg);
        }
        100% {
            transform: rotate3d(0, 1, 0, 360deg);
        }
    }*/
</style>