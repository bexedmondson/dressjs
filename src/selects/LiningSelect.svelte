<script>
    import {linings} from "$lib/data.json";
    import {lining} from "$lib/choices.js";
</script>

<h2>Lining</h2>
<div class="buttoncontainer">
    {#each linings as liningOption}
    <button
        class="optionButton"
        aria-label={liningOption}
        style={($lining === liningOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $lining = liningOption}
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