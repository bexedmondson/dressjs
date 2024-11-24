<script>
    import {shoulderPoints, waistline, waistCinch, maxDiagramHeight, maxDiagramWidth} from "$lib/choices";
    import {getTorsoSidesPath} from "$lib/torso.js";
    import {getWaistPoints} from "$lib/waist.js";
</script>

<path
    d= {getTorsoSidesPath(shoulderPoints, getWaistPoints($maxDiagramWidth, $maxDiagramHeight, $waistline))}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>