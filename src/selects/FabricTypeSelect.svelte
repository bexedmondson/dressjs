<script>
    import {fabricTypes} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Fabric Type</h2>
<div class="buttoncontainer">
    {#each fabricTypes as fabric}
    <button
        class="optionButton"
        aria-label={fabric}
        style={(selections.fabricType === fabric) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.fabricType = fabric}
    >{fabric}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>