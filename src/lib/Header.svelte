<script lang='ts'>

    import Heart from 'svelte-material-icons/Heart.svelte';
    import AccountButton from "./AccountButton.svelte";
    import MessagesButton from "./MessagesButton.svelte";
    import heartLogo from '../assets/heartLogo.svg';

    const HeartLogo = heartLogo as any;
</script>

<header>
    <div class="container" on:click={() => window.location.hash = ''}>
        <HeartLogo style='width: 32px' />
        <h1>spartan mingle</h1>
    </div>
    <div class='filler' />
    <MessagesButton />
    <AccountButton />
</header>

<style>
    .container > :global(svg) {
        padding: 5px;
        fill: var(--accentColor);
    }
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: stretch;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 900;
    }
    
    h1 {
        margin: 0;
        padding: 20px 0;
        line-height: 0;
        cursor: pointer;
        font-size: 1.9rem;
        font-weight: 700;
        letter-spacing: -2px;
        margin-top: -5px;
    }

    @media only screen and (max-width: 300px) {
        h1 {
            display: none;
        }
    }

    .container {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .filler {
        flex-grow: 1;

    }
</style>