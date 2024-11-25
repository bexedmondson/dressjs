<script>
    import {fabricTypes} from "$lib/data.json";
    import {fabricType} from "$lib/choices.js";
</script>

<h2>Fabric Type</h2>
<div class="buttoncontainer">
    {#each fabricTypes as fabric}
    <button
        class="optionButton"
        aria-label={fabric}
        style={($fabricType === fabric) ? 'border-color: deepskyblue' : ''}
        onclick={() => $fabricType = fabric}
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