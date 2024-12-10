<script>
    import {backNecklines} from "$lib/data.json";
    import {backNeckline} from "$lib/choices.svelte.js";
</script>

<h2>Back Neckline</h2>
<div class="buttoncontainer">
    {#each backNecklines as backNecklineOption}
    <button
        class="optionButton"
        aria-label={backNecklineOption}
        style={($backNeckline === backNecklineOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $backNeckline = backNecklineOption}
    >{backNecklineOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>