<script>
    import Header from "./Header.svelte";

    export let noScroll = false;
</script>
<div class={`container ${noScroll ? 'noScroll' : ''}`}>
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .noScroll {
        overflow: hidden;
    }
    main {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 10px 20px;
    }
</style>