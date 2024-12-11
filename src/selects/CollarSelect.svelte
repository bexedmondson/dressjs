<script>
    import {collarOptions} from "$lib/data.json";
    import {selections, isDisabled} from "$lib/choices.svelte.js";
    import { OptionState } from "$lib/OptionState.svelte";

    let collarStates = [];
    collarOptions.forEach(collarOption => {
            collarStates[collarOption] = new OptionState(collarOption, "collarOptions");
        }
    );

    $effect(() => {
        selections;
        collarOptions.forEach(collarOption => {
                collarStates[collarOption].updateValue()
            }
        );
    })
</script>

<h2>Collar</h2>

<div class="buttoncontainer">
    {#each collarOptions as collarOption}
        <button
            class="optionButton"
            aria-label={collarOption}
            disabled={collarStates[collarOption].disabled}
            style={(selections.collar === collarOption) ? 'border-color: deepskyblue' : ''}
            onclick={() => selections.collar = collarOption}
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