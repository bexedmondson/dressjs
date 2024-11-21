<script>
	import { draw } from 'svelte/transition';
    import '$lib/collars.js';
    import CollarPath from "../CollarPath.svelte";
    import CollarSelect from '../CollarSelect.svelte';
    import WaistlineSelect from '../WaistlineSelect.svelte';
    import WaistCinchSelect from '../WaistCinchSelect.svelte';
    import WaistPath from "../WaistPath.svelte";
    import {maxDiagramHeight, maxDiagramWidth} from "$lib/choices.js";
</script>

<div class="all">

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

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
            <CollarPath left={[35, 10]} right={[65, 10]} />
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
    }
    svg{
        display: flex;
    }
    :global(.optionButton){
        min-width: 50px;
    }
</style>