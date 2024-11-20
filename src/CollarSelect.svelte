<script>
    const collarOptions = ['crew', 'flat', 'V', 'boat'];
	export let selected = collarOptions[0];
</script>

<h2>Collar</h2>
<div class="buttoncontainer">
    {#each collarOptions as collarOption}
    <button
        class="optionButton"
        aria-label={collarOption}
        style={(selected === collarOption) ? 'border-color: deepskyblue' : ''}
        onclick={() => selected = collarOption}
    >{collarOption}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .optionButton{
        min-width: 50px;
    }
</style>