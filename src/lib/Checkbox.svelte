<script lang='ts'>
    export let options: string[];
    export let selected: string[];
</script>

{#each options as option}
    <label>
        <input type=checkbox bind:group={selected} value={option}/>
        {option}
    </label>
{/each}

<style>
    label {
        display: block
    }
</style>