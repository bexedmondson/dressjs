<script>
    import '$lib/collars.js';
    import { getCollarFlat, getCollarRound } from '$lib/collars.js';

    export let type = "round";
    export let left = [40, 10];
    export let right = [60, 10];
</script>

{#if (type === "round")}
<path
    d= {getCollarRound(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{:else}
<path
    d= {getCollarFlat(left, right)}
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{/if}
