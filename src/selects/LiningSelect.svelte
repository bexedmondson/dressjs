<script>
    import {linings} from "$lib/data.json";
    import {selections} from "$lib/choices.svelte.js";
</script>

<h2>Lining</h2>
<div class="buttoncontainer">
    {#each linings as liningOption}
    <button
        class="optionButton"
        aria-label={liningOption}
        style={(selections.lining === liningOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selections.lining = liningOption}
    >{liningOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>