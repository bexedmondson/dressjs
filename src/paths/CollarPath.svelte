<script>
    import '$lib/collars.js';
    import * as collars from '$lib/collars.js';
    import {collar, collarPoints} from "$lib/choices";

    let left = collarPoints.left;
    let right = collarPoints.right;
</script>

{#if ($collar === "crew")}
<path
    d= {collars.getCollarCrew(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>
{:else if ($collar === "V")}
<path
    d= {collars.getCollarV(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>
{:else if ($collar === "scoop")}
<path
    d= {collars.getCollarScoop(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>
{:else if ($collar === "boat")}
<path
    d= {collars.getCollarBoat(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>
{:else if ($collar === "flat")}
<path
    d= {collars.getCollarFlat(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>
{/if}
