<script>
	import { draw } from 'svelte/transition';
    import '$lib/collars.js';
    import CollarPath from "../CollarPath.svelte";
    import CollarSelect from '../CollarSelect.svelte';
    import {collar} from "$lib/choices.js";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="parent-container">
    <div class="buttoncolumn">
        <CollarSelect></CollarSelect>
    </div>

    <div class="diagram">
        <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <!--{#key collarType}-->
            <CollarPath left={[40, 10]} right={[60, 10]} />
            <!-- type={collarType}  {/key}-->
        </svg>
    </div>
	
</div>

<style>
	svg {
		display: block;
		height: 200;
		width: 100;
	}
    .parent-container{
        display: flex;
        justify-content: center;
	}
	.buttoncolumn{
        width: 30%;
        display: block;
	}
    .diagram{
        width: 60%;
    }
    :global(.optionButton){
        min-width: 50px;
    }
</style>