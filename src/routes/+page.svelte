<script>
	import { draw } from 'svelte/transition';
    import '$lib/collars.js';
    import CollarPath from "../CollarPath.svelte";

    let collarType = "round";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="parent-container">
    <div class="buttoncolumn">
        <button onclick={ (clicked) => {
                                if (collarType === "round") 
                                    collarType = "flat";
                                else
                                    collarType = "round";
                                }
                        }>
        {collarType}
        </button>
    </div>

    <div class="diagram">
        <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            {#key collarType}
            <CollarPath left={[40, 10]} right={[60, 10]} type={collarType} />
            {/key}
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
        display: flex grid;
        gap: 1rem;
	}
	.buttoncolumn{ 
        float: left;
        width: 25%;
	}
    .diagram{
        float: left;
        width: 75%;
    }
</style>