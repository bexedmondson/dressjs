<script>
    import {hemStyles} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Hem Style</h2>
<div class="buttoncontainer">
    {#each hemStyles as hemStyleOption}
    <button
        class="optionButton"
        aria-label={hemStyleOption}
        style={(selections.hemStyle === hemStyleOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.hemStyle = hemStyleOption}
    >{hemStyleOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>