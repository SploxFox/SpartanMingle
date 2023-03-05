<script lang='ts'>
    import { getPhotoUrl } from "../photoUtils";
    import type { Photo } from "../types";

    export let uid: string;
    export let slot: number;
    export let alt: string;
</script>

<img src={getPhotoUrl(uid, slot)} {alt}/>