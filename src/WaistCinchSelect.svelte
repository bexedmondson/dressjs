<script>
    import {waistCinchOptions} from "$lib/data.json";
    import {waistCinch} from "$lib/choices.js";
</script>

<h2>Waist Cinch</h2>
<div class="buttoncontainer">
    {#each waistCinchOptions as waistCinchOption}
    <button
        class="optionButton"
        aria-label={waistCinchOption}
        style={($waistCinch === waistCinchOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $waistCinch = waistCinchOption}
    >{waistCinchOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>