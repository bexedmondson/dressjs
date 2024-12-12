<script>
    import '$lib/waist.js';
    import * as waist from '$lib/waist.js';
    import {selections, maxDiagramHeight, maxDiagramWidth} from "$lib/choices.svelte";

    function getPath() {
        switch(selections.waistCinch) {
            case "thin elastic":
                return waist.getWaistCinchThinElastic(maxDiagramWidth, maxDiagramHeight, selections.waistline, selections.waistCinch);
            case "wide elastic":
                return waist.getWaistCinchWideElastic(maxDiagramWidth, maxDiagramHeight, selections.waistline, selections.waistCinch);
            case "shirring":
                return waist.getWaistCinchShirring(maxDiagramWidth, maxDiagramHeight, selections.waistline, selections.waistCinch);
            case "drawstring":
                return waist.getWaistCinchDrawstring(maxDiagramWidth, maxDiagramHeight, selections.waistline, selections.waistCinch);
            default:
                return "";
        } 
    }
</script>

<path
    d= {getPath()}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>