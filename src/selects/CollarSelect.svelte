<script>
    import {collarOptions} from "$lib/data.json";
    import {selections, isDisabled} from "$lib/choices.js";
    import { writable } from 'svelte/store';

    let indexedCollarOptions = writable([]);
    let i = 0;
    collarOptions.forEach(collarOption => {
        $indexedCollarOptions.push(
            {
                id: i, 
                name: collarOption,
                disabled: getIsDisabled(collarOption)
            }
        );
        i++;
    });

    $selections.subscribe((subs) => {
        for (let i = 0; i < $indexedCollarOptions.length; i++) {
            var d = isDisabled("collarOptions", $indexedCollarOptions[i].name);
            console.log($indexedCollarOptions[i].name + " " + d);
            $indexedCollarOptions[i].disabled = d;
        };

        /*$indexedCollarOptions.forEach(indexedOption => {
            indexedOption.disabled = isDisabled("collarOptions", indexedOption.name)
        })*/

        console.log($indexedCollarOptions)
    });

    function getIsDisabled(collarOption){
        let d = isDisabled("collarOptions", collarOption);
        console.log("actually returning " + d);
        return d;
    }
</script>

<h2>Collar</h2>
<div class="buttoncontainer">
    {#key $selections}
        {#each $indexedCollarOptions as collarOption}
            <button
                class="optionButton"
                aria-label={collarOption["name"]}
                disabled={$indexedCollarOptions[collarOption.id].disabled}
                style={($selections.collar === collarOption["name"]) ? 'border-color: deepskyblue' : ''}
                onclick={() => $selections.collar = collarOption["name"]}
            >{collarOption.name}</button>
        {/each}
    {/key}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>