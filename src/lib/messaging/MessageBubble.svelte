<script lang="ts">
    export let text: string;
    export let side: 'self' | 'other';
</script>

<p class={side}>
    { text }
</p>

<style>
    p {
        max-width: min(35ch, 80%);
        padding: 5px 10px;
        border-radius: 8px;
        background-color: white;
        margin: 0;
    }

    .self {
        align-self: end;
        border-bottom-right-radius: 0;
        background: var(--accent);
        color: white;
    }

    .other {
        align-self: start;
        border-bottom-left-radius: 0;
        background: lightgray;
    }
</style>