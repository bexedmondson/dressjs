<script>
    import {skirtShapes} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Skirt Shape</h2>
<div class="buttoncontainer">
    {#each skirtShapes as skirtShapeOption}
    <button
        class="optionButton"
        aria-label={skirtShapeOption}
        style={(selections.skirtShape === skirtShapeOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.skirtShape = skirtShapeOption}
    >{skirtShapeOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>