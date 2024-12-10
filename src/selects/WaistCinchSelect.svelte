<script>
    import {waistCinchOptions} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Waist Cinch</h2>
<div class="buttoncontainer">
    {#each waistCinchOptions as waistCinchOption}
    <button
        class="optionButton"
        aria-label={waistCinchOption}
        style={(selections.waistCinch === waistCinchOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.waistCinch = waistCinchOption}
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