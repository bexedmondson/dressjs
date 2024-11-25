<script>
    import {sleeveShapes} from "$lib/data.json";
    import {sleeveShape} from "$lib/choices.js";
</script>

<h2>Sleeve Shape</h2>
<div class="buttoncontainer">
    {#each sleeveShapes as sleeveShapeOption}
    <button
        class="optionButton"
        aria-label={sleeveShapeOption}
        style={($sleeveShape === sleeveShapeOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $sleeveShape = sleeveShapeOption}
    >{sleeveShapeOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>