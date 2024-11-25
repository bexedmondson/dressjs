<script>
    import {sleeveAdditions} from "$lib/data.json";
    import {sleeveAddition} from "$lib/choices.js";
</script>

<h2>Sleeve Additions</h2>
<div class="buttoncontainer">
    {#each sleeveAdditions as sleeveAdditionOption}
    <button
        class="optionButton"
        aria-label={sleeveAdditionOption}
        style={($sleeveAddition === sleeveAdditionOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $sleeveAddition = sleeveAdditionOption}
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