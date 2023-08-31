<script>
    import Header from "./Header.svelte";

    export let noScroll = false;
</script>
<div class={`container ${noScroll ? 'noScroll' : ''}`}>
    <Header />
    <div class='mainContainer'>
        <main>
            <slot />
        </main>
    </div>
</div>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .mainContainer {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .noScroll {
        overflow: hidden;
    }
    main {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 10px 20px;
        margin-top: 0;
        flex-grow: 1;
        position: relative;
    }
</style>