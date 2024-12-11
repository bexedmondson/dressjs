<script>
    import {fabricStyles} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Fabric Style</h2>
<div class="buttoncontainer">
    {#each fabricStyles[selections.fabricType] as style}
    <button
        class="optionButton"
        aria-label={style}
        style={(selections.fabricStyle === style) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.fabricStyle = style}
    >{style}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>