<script>
    import {sleeveLengths} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Sleeve Length</h2>
<div class="buttoncontainer">
    {#each sleeveLengths as sleeveLengthOption}
    <button
        class="optionButton"
        aria-label={sleeveLengthOption}
        style={(selections.sleeveLength === sleeveLengthOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.sleeveLength = sleeveLengthOption}
    >{sleeveLengthOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>