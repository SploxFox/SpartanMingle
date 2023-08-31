<script lang="ts">
    import AspectRatioFit from "./AspectRatioFit.svelte";
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
<AspectRatioFit ratio='9/16'>
    <ProfileStack on:match-verdict={({ detail: { matchVerdict, uid, pid } }) => {
        if (matchVerdict.matched) {
            handleMatch(uid, pid);
        }
    }}/>
</AspectRatioFit>
{#if currentMatch}
    {#key currentMatch.uid}
        <MatchGet {...currentMatch} on:done={handleMatchDone} />
    {/key}
{/if}