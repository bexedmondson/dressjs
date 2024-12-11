<script>
    import {shoulderPoints, selections, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte";
    import {getTorsoSidesPath} from "$lib/torso.js";
    import {getWaistPoints} from "$lib/waist.js";
</script>

<path
    d= {getTorsoSidesPath(shoulderPoints, getWaistPoints(maxDiagramWidth, maxDiagramHeight, selections.waistline))}
    fill="none" 
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>