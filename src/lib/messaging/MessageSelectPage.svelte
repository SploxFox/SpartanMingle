<script>
    import { onMount } from "svelte";
    import MessageSelect from "./MessageSelect.svelte";
    import { getClientData, markAllAsRead } from "../../fb";

    onMount(async () => {
        await getClientData();

        markAllAsRead();
    })
</script>
<MessageSelect />