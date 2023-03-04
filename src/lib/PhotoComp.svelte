<script lang='ts'>
    import { getPhotoUrl } from "../photoUtils";
    import type { Photo } from "../types";

    export let photo: Photo;
    export let uid: string;
    export let alt: string;
</script>

<img src={photo.dataUrl ?? getPhotoUrl(uid, photo)} {alt}/>