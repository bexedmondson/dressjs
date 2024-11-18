<script>
	import { draw } from 'svelte/transition';
    import '$lib/points.js';
    import CollarPath from "../CollarPath.svelte";

    let collarType = "round";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={ (clicked) => {
                        if (collarType === "round") 
                            collarType = "flat";
                        else
                            collarType = "round";
                        }
                }>
{collarType}
</button>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {#key collarType}
    <CollarPath h={100} w={100} type={collarType} />
    {/key}
</svg>

<style>
	svg {
		display: block;
		height: 50%;
		width: 50%;
	}
</style>