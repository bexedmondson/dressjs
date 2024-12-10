<script>
    import {collarOptions} from "$lib/data.json";
    import {selections, isDisabled} from "$lib/choices.svelte.js";
    import { derived } from 'svelte/store';

    let indexedCollarOptions = $derived.by(() => {
            let opts = [];
            $selections;
            let i = 0;
            collarOptions.forEach(collarOption => {
                opts.push(
                    {
                        id: i, 
                        name: collarOption,
                        disabled: isDisabled("collarOptions", collarOption)
                    }
                );
                i++;
            });
            console.log(opts);

            return opts;
        }
    );
</script>

<h2>Collar</h2>
<div class="buttoncontainer">
    {#each indexedCollarOptions as indexedCollarOption}
        <button
            class="optionButton"
            aria-label={indexedCollarOption["name"]}
            disabled={indexedCollarOptions[indexedCollarOption.id].disabled}
            style={($selections.collar === indexedCollarOption["name"]) ? 'border-color: deepskyblue' : ''}
            onclick={() => $selections.collar = indexedCollarOption["name"]}
        >{indexedCollarOption.name}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>