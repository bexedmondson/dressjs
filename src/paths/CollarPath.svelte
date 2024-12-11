<script>
    import '$lib/collars.js';
    import * as collars from '$lib/collars.js';
    import {selections, collarPoints} from "$lib/choices.svelte";

    let left = collarPoints().left;
    let right = collarPoints().right;

    function getPath() {
        switch(selections.collar) {
            case "crew":
                return collars.getCollarCrew(left, right);
            case "V":
                return collars.getCollarV(left, right);
            case "V with lacing":
                return collars.getCollarVLacing(left, right);
            case "boat":
                return collars.getCollarBoat(left, right);
            case "scoop":
                return collars.getCollarScoop(left, right);
            case "square sweetheart":
                return collars.getCollarSweetheart(left, right);
            case "square":
                return collars.getCollarSquare(left, right);
            case "flat":
                return collars.getCollarFlat(left, right);
            case "keyhole":
                return collars.getCollarKeyhole(left, right);
            case "turtleneck":
                return collars.getCollarTurtleneck(left, right);
            case "tied":
                return collars.getCollarTied(left, right);
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
