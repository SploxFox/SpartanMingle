<script lang="ts">
    export let message: string;
    export let side: 'self' | 'other';
</script>

<div class={side}>
    { message }
</div>

<style>
    div {
        width: 80%;
        max-width: 80ch;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
    }

    .self {
        align-self: end;
    }

    .other {
        align-self: start;
    }
</style>