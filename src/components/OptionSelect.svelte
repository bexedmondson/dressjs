<script>
    import data from "$lib/data.json";
    import text from "$lib/text.json";
    import { setSelection, selections, isDisabled } from "$lib/choices.svelte.js";
    import { OptionState } from "$lib/OptionState.svelte";

    let { selection = $bindable(), optionCategoryName } = $props();

    let options = data[optionCategoryName];

    let buttonStates = [];
    options.forEach(option => {
        buttonStates[option] = new OptionState(option, optionCategoryName);
    });

    $effect(() => {
        selections;
        options.forEach(option => {
            buttonStates[option].updateValue()
        });
    })
</script>

<h2>{text["title-" + optionCategoryName]}</h2>

<div class="buttoncontainer">
    {#each options as option}
        <button
            class="optionButton"
            aria-label={option}
            disabled={buttonStates[option].disabled}
            style={(selection === option) ? 'border-color: deepskyblue' : ''}
            onclick={() => setSelection(option, optionCategoryName)}
        >{option}</button>
    {/each}
</div>

<style>
    .buttoncontainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>