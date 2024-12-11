<script>
    import {skirtLengths} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Skirt Length</h2>
<div class="buttoncontainer">
    {#each skirtLengths as skirtLengthOption}
    <button
        class="optionButton"
        aria-label={skirtLengthOption}
        style={(selections.skirtLength === skirtLengthOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.skirtLength = skirtLengthOption}
    >{skirtLengthOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>