<script lang="ts">
    import { getPhotoUrl } from "../photoUtils";
    import type { UserData } from "../types";
    import AspectRatioFit from "./AspectRatioFit.svelte";

    export let profile: UserData;
</script>

<img src={getPhotoUrl(profile.userId, profile.photos[0])} alt='profile pic' />

<style>
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
</style>