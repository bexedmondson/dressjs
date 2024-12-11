<script>
    import {slitOptions} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Slits</h2>
<div class="buttoncontainer">
    {#each slitOptions as slitOption}
    <button
        class="optionButton"
        aria-label={slitOption}
        style={(selections.slits === slitOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.slits = slitOption}
    >{slitOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>