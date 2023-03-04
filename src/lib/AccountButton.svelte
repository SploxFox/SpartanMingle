<script lang="ts">
    import AccountOutline from 'svelte-material-icons/AccountOutline.svelte'
</script>

<button on:click={() => window.location.hash = '#profile'}>
    <AccountOutline size=25 />
</button>

<style>
    button {
        all: unset;
        cursor: pointer;
        padding: 20px;
        color: blue;
    }
</style>