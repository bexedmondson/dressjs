<script>
    import {skirtShapes} from "$lib/data.json";
    import {skirtShape} from "$lib/choices.svelte.js";
</script>

<h2>Skirt Shape</h2>
<div class="buttoncontainer">
    {#each skirtShapes as skirtShapeOption}
    <button
        class="optionButton"
        aria-label={skirtShapeOption}
        style={($skirtShape === skirtShapeOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $skirtShape = skirtShapeOption}
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