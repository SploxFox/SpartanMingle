<script lang="ts">
    import MatchGet from "./MatchGet.svelte";
    import ProfileStack from "./ProfileStack.svelte";

    let currentMatch = null;
    let pendingMatches = [];

    const handleMatch = (uid: string, pid: string) => {
        if (currentMatch) {
            pendingMatches.push({ uid, pid });
        } else {
            currentMatch = { uid, pid };
        }
    }

    const handleMatchDone = () => {
        if (pendingMatches.length > 0) {
            currentMatch = pendingMatches.shift()
        } else {
            currentMatch = null;
        }
    }
</script>

<ProfileStack on:match-verdict={({ detail: { matchVerdict, uid, pid } }) => {
    if (matchVerdict.matched) {
        handleMatch(uid, pid);
    }
}}/>
{#if currentMatch}
    {#key currentMatch.uid}
        <MatchGet {...currentMatch} on:done={handleMatchDone} />
    {/key}
{/if}