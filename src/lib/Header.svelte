<script>

    import AccountButton from "./AccountButton.svelte";

</script>

<header>
    <div class="container" on:click={() => window.location.hash = ''}>
        <h1>spartan mingle</h1>
    </div>
    <AccountButton />
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        align-self: stretch;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 900;
    }
    
    h1 {
        margin: 0;
        padding: 20px;
        line-height: 0;
        cursor: pointer;
    }

    .container {
        flex-grow: 1;
    }
</style>