<script>
    import {skirtLengths} from "$lib/data.json";
    import {skirtLength} from "$lib/choices.svelte.js";
</script>

<h2>Skirt Length</h2>
<div class="buttoncontainer">
    {#each skirtLengths as skirtLengthOption}
    <button
        class="optionButton"
        aria-label={skirtLengthOption}
        style={($skirtLength === skirtLengthOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $skirtLength = skirtLengthOption}
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