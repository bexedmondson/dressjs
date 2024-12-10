<script>
	import { draw } from 'svelte/transition';
    import '$lib/collars.js';
    import CollarPath from "../paths/CollarPath.svelte";
    import CollarSelect from '../selects/CollarSelect.svelte';
    import ShoulderPath from '../paths/ShoulderPath.svelte';
    import TorsoPath from '../paths/TorsoPath.svelte';
    import WaistlineSelect from '../selects/WaistlineSelect.svelte';
    import WaistCinchSelect from '../selects/WaistCinchSelect.svelte';
    import WaistPath from "../paths/WaistPath.svelte";
    import {selections, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte.js";
    import FabricTypeSelect from '../selects/FabricTypeSelect.svelte';
    import FabricStyleSelect from '../selects/FabricStyleSelect.svelte';
    import LiningSelect from '../selects/LiningSelect.svelte';
    import BackNecklineSelect from '../selects/BackNecklineSelect.svelte';
    import SleeveLengthSelect from '../selects/SleeveLengthSelect.svelte';
    import SleeveShapeSelect from '../selects/SleeveShapeSelect.svelte';
    import SleeveAdditionSelect from '../selects/SleeveAdditionSelect.svelte';
    import SkirtShapeSelect from '../selects/SkirtShapeSelect.svelte';
    import SkirtLengthSelect from '../selects/SkirtLengthSelect.svelte';
    import SkirtExtrasSelect from '../selects/SkirtExtrasSelect.svelte';
    import HemStyleSelect from '../selects/HemStyleSelect.svelte';
    import SlitOptionSelect from '../selects/SlitOptionSelect.svelte';
    import PocketSelect from '../selects/PocketSelect.svelte';
</script>

<div class="all">

<h1>build a dress</h1>
<p>web app version of The Stitchery's video found <a href="https://www.youtube.com/watch?v=UGrWTW6buX8">found here</a></p>

<div class="parent-container">
    <div class="buttoncolumn">
        <div class="buttonscroll">
            <FabricTypeSelect></FabricTypeSelect>
            <FabricStyleSelect></FabricStyleSelect>
            <LiningSelect></LiningSelect>
            <CollarSelect></CollarSelect>
            <BackNecklineSelect></BackNecklineSelect>
            <SleeveLengthSelect></SleeveLengthSelect>
            <SleeveShapeSelect></SleeveShapeSelect>
            <SleeveAdditionSelect></SleeveAdditionSelect>
            <WaistlineSelect></WaistlineSelect>
            <WaistCinchSelect></WaistCinchSelect>
            <SkirtShapeSelect></SkirtShapeSelect>
            <SkirtLengthSelect></SkirtLengthSelect>
            <SkirtExtrasSelect></SkirtExtrasSelect>
            <HemStyleSelect></HemStyleSelect>
            <SlitOptionSelect></SlitOptionSelect>
            <PocketSelect></PocketSelect>
        </div>
    </div>

    <div class="diagram">
        <svg viewBox="0 0 {maxDiagramWidth} {maxDiagramHeight}" preserveAspectRatio="meet" xmlns="http://www.w3.org/2000/svg">
            <!--to establish overall size of diagram-->
            <!--path
                d="M 0,0 L 0,200 L 100,200"
                fill="none"
                stroke="white"
                stroke-width="1px"
            /-->
            <CollarPath />
            <ShoulderPath />
            <TorsoPath />
            <WaistPath />
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