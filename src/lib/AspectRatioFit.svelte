<script lang='ts'>
    export let ratio: string;
</script>

<style>
    .container {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .outer {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .inner {
        position: relative;
        width: 100%;
    }
</style>

<div class='container'>
    <div class='outer' style={`aspect-ratio: ${ratio}`}>
        <div class='inner' style={`aspect-ratio: ${ratio}`}>
            <slot />
        </div>
    </div>
</div>