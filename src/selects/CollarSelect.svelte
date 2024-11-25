<script>
    import {collarOptions} from "$lib/data.json";
    import {collar, isDisabled} from "$lib/choices.js";
</script>

<h2>Collar</h2>
<div class="buttoncontainer">
    {#each collarOptions as collarOption}
    <button
        class="optionButton"
        aria-label={collarOption}
        disabled={isDisabled("collarOptions", collarOption)}
        style={($collar === collarOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $collar = collarOption}
    >{collarOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>