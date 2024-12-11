<script>
    import {sleeveAdditions} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Sleeve Additions</h2>
<div class="buttoncontainer">
    {#each sleeveAdditions as sleeveAdditionOption}
    <button
        class="optionButton"
        aria-label={sleeveAdditionOption}
        style={(selections.sleeveAddition === sleeveAdditionOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.sleeveAddition = sleeveAdditionOption}
    >{sleeveAdditionOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>