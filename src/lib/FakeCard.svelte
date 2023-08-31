<script lang="ts">
    import { theme } from "../theme";
    import Heart from "svelte-material-icons/Heart.svelte";

    export let style = '';
</script>

<div class={'container '} style={style}>
    <div class='card' style={`background: ${theme.accent}`}>
        <Heart color="white" size={"48%"} />
    </div>
</div>


<style>
    .container {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        height: 100%;
        aspect-ratio: 3 / 4;
        border-radius: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>