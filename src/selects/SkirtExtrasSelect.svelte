<script>
    import {skirtExtras} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Skirt Extras</h2>
<div class="buttoncontainer">
    {#each skirtExtras as skirtExtraOption}
    <button
        class="optionButton"
        aria-label={skirtExtraOption}
        style={(selections.skirtExtra === skirtExtraOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.skirtExtra = skirtExtraOption}
    >{skirtExtraOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>