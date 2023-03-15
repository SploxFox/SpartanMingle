<script lang='ts'>
    import { getPhotoUrl } from "../photoUtils";

    export let uid: string;
    export let id: string;
    export let alt: string;
    export let style: string = "";
</script>

<img {style} src={getPhotoUrl(uid, id)} {alt}/>