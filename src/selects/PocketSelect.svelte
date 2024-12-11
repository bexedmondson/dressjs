<script>
    import {pocketOptions} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Pockets</h2>
<div class="buttoncontainer">
    {#each pocketOptions as pocketOption}
    <button
        class="optionButton"
        aria-label={pocketOption}
        style={(selections.pockets === pocketOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.pockets = pocketOption}
    >{pocketOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>