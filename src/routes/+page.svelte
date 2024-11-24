<script>
	import { draw } from 'svelte/transition';
    import '$lib/collars.js';
    import CollarPath from "../paths/CollarPath.svelte";
    import CollarSelect from '../selects/CollarSelect.svelte';
    import ShoulderPath from '../paths/ShoulderPath.svelte';
    import WaistlineSelect from '../selects/WaistlineSelect.svelte';
    import WaistCinchSelect from '../selects/WaistCinchSelect.svelte';
    import WaistPath from "../paths/WaistPath.svelte";
    import {maxDiagramHeight, maxDiagramWidth} from "$lib/choices.js";
</script>

<div class="all">

<h1>build a dress</h1>
<p>web app version of The Stitchery's video found <a href="https://www.youtube.com/watch?v=UGrWTW6buX8">found here</a></p>

<div class="parent-container">
    <div class="buttoncolumn">
        <CollarSelect></CollarSelect>
        <WaistlineSelect></WaistlineSelect>
        <WaistCinchSelect></WaistCinchSelect>
    </div>

    <div class="diagram">
        <svg viewBox="0 0 {$maxDiagramWidth} {$maxDiagramHeight}" preserveAspectRatio="meet" xmlns="http://www.w3.org/2000/svg">
            <!--to establish overall size of diagram-->
            <path
                d="M 0,0 L 0,200 L 100,200"
                fill="none"
                stroke="none"
                stroke-width="1px"
            />
            <CollarPath />
            <ShoulderPath />
            <WaistPath />
        </svg>
    </div>
	
</div>

</div>

<style>
    .all{
        position: absolute;
        height:100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .parent-container{
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-grow: 4;
	}
	.buttoncolumn{
        width: 40%;
        display: block;
	}
    .diagram{
        width: 40%;
        display: flex;
        padding: 5%;
        position: relative;
    }
    svg{
        position: absolute;
    }
    :global(.optionButton){
        min-width: 50px;
    }
</style>