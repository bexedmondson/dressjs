<script>
    import {skirtExtras} from "$lib/data.json";
    import {skirtExtra} from "$lib/choices.js";
</script>

<h2>Skirt Extras</h2>
<div class="buttoncontainer">
    {#each skirtExtras as skirtExtraOption}
    <button
        class="optionButton"
        aria-label={skirtExtraOption}
        style={($skirtExtra === skirtExtraOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => $skirtExtra = skirtExtraOption}
    >{skirtExtraOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>