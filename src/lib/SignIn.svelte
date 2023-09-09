<script>

    import { signIn } from "../fb";

</script>
<button on:click={signIn}>Sign in with CWRU</button>

<style>
    button {
        all: unset;
        border-radius: 5px;
        cursor: pointer;
        background-color: #0a304e;
        color: white;
        padding: 10px 20px;
    }
</style>