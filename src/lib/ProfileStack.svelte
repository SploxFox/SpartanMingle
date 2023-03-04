<script lang='ts'>
    import { getUserDoc } from "../fb";
    import type { UserData } from "../types";
    import Loading from "./Loading.svelte";
    import ProfileSwipe from "./ProfileSwipe.svelte";

    const profilePromise = getUserDoc("iNMO411c1VUpruI4fxMaLcuyA2k2").then(doc => {
        if (doc.exists()) {
            return doc.data() as UserData
        } else {
            alert('Couldnt find profile');
        }
    });
</script>

{#await profilePromise}
    <Loading/>
{:then profile}
    <div class="container">
        <ProfileSwipe index={0} { profile }/>
    </div>
{/await}

<style>
    .container {
        width: 300px;
        position: relative;
    }
</style>