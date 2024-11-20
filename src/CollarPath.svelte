<script>
    import '$lib/collars.js';
    import * as collars from '$lib/collars.js';
    import {collar} from "$lib/choices";

    export let left = [40, 10];
    export let right = [60, 10];
</script>

{#if ($collar === "crew")}
<path
    d= {collars.getCollarCrew(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{:else if ($collar === "V")}
<path
    d= {collars.getCollarV(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{:else if ($collar === "boat")}
<path
    d= {collars.getCollarBoat(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{:else}
<path
    d= {collars.getCollarFlat(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{/if}
