<script>
    import {sleeveLengths} from "$lib/data.json";
    import {sleeveLength} from "$lib/choices.js";
</script>

<h2>Sleeve Length</h2>
<div class="buttoncontainer">
    {#each sleeveLengths as sleeveLengthOption}
    <button
        class="optionButton"
        aria-label={sleeveLengthOption}
        style={($sleeveLength === sleeveLengthOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $sleeveLength = sleeveLengthOption}
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