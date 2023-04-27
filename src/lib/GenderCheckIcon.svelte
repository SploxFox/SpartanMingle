<script lang='ts'>
    import Icon from 'svelte-material-icons/CheckBold.svelte';

    export let visible: boolean;
    export let isActive: boolean;
</script>

{#if visible}
    <Icon width={null} height={null} color="white" class={`genderSelectorHeartIcon ${isActive ? 'active' : 'inactive'}`} />
{/if}

<style>
    :global(svg.genderSelectorHeartIcon) {
        transition: 0.2s transform;
        background-color: black;
        border-radius: 15px;
    }

    :global(svg.genderSelectorHeartIcon.active) {
        transform: scale(1);
    }

    :global(svg.genderSelectorHeartIcon) {
        transform: scale(0);
    }
</style>