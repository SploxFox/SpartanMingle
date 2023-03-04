<script lang="ts">
    export let minor = false;
</script>

<button on:click class={minor ? 'minor' : ''}>
    <slot/>
</button>

<style>
    button {
        all: unset;
        padding: 5px 15px;
        background: var(--accent);
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    button.minor {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
</style>