<script lang='ts'>
    import HeartOutline from 'svelte-material-icons/HeartOutline.svelte';

    export let visible: boolean;
    export let isActive: boolean;
</script>

{#if visible}
    <HeartOutline width={null} height={null} color="white" class={`genderSelectorHeartIcon ${isActive ? 'active' : 'inactive'}`} />
{/if}

<style>
    :global(svg.genderSelectorHeartIcon) {
        transition: 0.2s transform;
    }

    :global(svg.genderSelectorHeartIcon.active) {
        transform: scale(1);
    }

    :global(svg.genderSelectorHeartIcon) {
        transform: scale(0);
    }
</style>