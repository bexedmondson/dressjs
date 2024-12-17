<script>
    import {selections, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte";
    import {getSkirtSidesPath} from "$lib/skirt";
    import {getWaistPoints} from "$lib/waist.js";


</script>

<path
    d={getSkirtSidesPath(getWaistPoints(maxDiagramWidth, maxDiagramHeight, selections.waistline, selections.waistCinch), selections.skirtLength, selections.skirtShape, maxDiagramWidth, maxDiagramHeight)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>

<!--path
    d={getSkirtSidesPath(collarPoints, shoulderPoints)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/-->