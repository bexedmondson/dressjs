<script>
    import '$lib/waist.js';
    import * as waist from '$lib/waist.js';
    import {waistline, waistCinch, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte";
</script>

{#if ($waistCinch === "thin elastic")}
<path
    d= {waist.getWaistCinchThinElastic($maxDiagramWidth, $maxDiagramHeight, $waistline)}
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
