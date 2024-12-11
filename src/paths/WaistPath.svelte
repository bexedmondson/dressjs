<script>
    import '$lib/waist.js';
    import * as waist from '$lib/waist.js';
    import {selections, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte";
</script>

{#if (selections.waistCinch === "thin elastic")}
<path
    d= {waist.getWaistCinchThinElastic(maxDiagramWidth, maxDiagramHeight, selections.waistline)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>
<!--{:else}
<path
    d= {waist.getWaistCinchThinElastic(maxX, maxY, $waistline)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>-->
{/if}
