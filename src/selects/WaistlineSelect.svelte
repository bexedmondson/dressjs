<script>
    import {waistlineOptions} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Waistline</h2>
<div class="buttoncontainer">
    {#each waistlineOptions as waistlineOption}
    <button
        class="optionButton"
        aria-label={waistlineOption}
        style={(selections.waistline === waistlineOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.waistline = waistlineOption}
    >{waistlineOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>