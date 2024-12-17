<script>
	import { draw } from 'svelte/transition';
    import {getCategoryNameSelectionMap, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte.js";
    import OptionSelect from '../components/OptionSelect.svelte';
    import CollarPath from "../paths/CollarPath.svelte";
    import ShoulderPath from '../paths/ShoulderPath.svelte';
    import TorsoPath from '../paths/TorsoPath.svelte';
    import WaistPath from "../paths/WaistPath.svelte";
    import SkirtPath from '../paths/SkirtPath.svelte';
</script>

<div class="all">

<h1>build a dress</h1>
<p>web app version of The Stitchery's video found <a href="https://www.youtube.com/watch?v=UGrWTW6buX8">found here</a></p>

<div class="parent-container">
    <div class="buttoncolumn">
        <div class="buttonscroll">
            {#each getCategoryNameSelectionMap() as categoryNameSelectionPair, key}
                <OptionSelect bind:selection={categoryNameSelectionPair.selection} optionCategoryName={categoryNameSelectionPair.categoryName}></OptionSelect>
            {/each}
        </div>
    </div>

    <div class="diagram">
        <svg viewBox="0 0 {maxDiagramWidth} {maxDiagramHeight}" preserveAspectRatio="meet" xmlns="http://www.w3.org/2000/svg">
            <CollarPath />
            <ShoulderPath />
            <TorsoPath />
            <WaistPath />
            <SkirtPath />
        </svg>
    </div>
	
</div>

</div>

<style>
    .all{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 2% 2% 2% 2%;
        width: 90vw;
        height: 94vh;
    }
    .parent-container{
        display: flex;
        flex: 2;
        flex-direction: row;
        justify-content: center;
        align-content:start;
        gap: 1rem;
        height: 100%;
	}
	.buttoncolumn{
        padding: 0% 5%;
        flex:1;
        height: 100%;
        max-height: 100%;
	}
    .buttonscroll{
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        overflow-y: auto;
	}
    .diagram{
        padding: 0% 5%;
        flex:1;
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
    svg{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    @media (orientation: portrait) {
        .parent-container {
            justify-content: inherit;
            align-content: center;
            flex-direction: column;
            height: auto;
        }
        .diagram {
            min-height: 50vh;
        }
    }

    :global(.optionButton){
        min-width: 50px;
    }
    :global(html) {
        height: 100vh;
    }
    :global(body) {
        height: calc(100vh - 16px);
    }
</style>