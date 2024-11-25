<script>
    import {slitOptions} from "$lib/data.json";
    import {slits} from "$lib/choices.js";
</script>

<h2>Slits</h2>
<div class="buttoncontainer">
    {#each slitOptions as slitOption}
    <button
        class="optionButton"
        aria-label={slitOption}
        style={($slits === slitOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $slits = slitOption}
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