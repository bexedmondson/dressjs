<script>
    export let h = 100;
    export let w = 100;
    export let type = "round";
</script>

{#if (type === "round")}
<path
    d= "M {w/2-w/8},{h/8} 
        C {w/2-w/8},{h/4-h/16} {w/2-w/16},{h/4} {w/2},{h/4}
        C {w/2+w/16},{h/4} {w/2+w/8},{h/4-h/16} {w/2+w/8},{h/8}
       "
    fill="none"
    stroke="black"
    stroke-width="1px"
/>
{:else}
<path
    d= "M {w/2-w/8},{h/8} 
        C {w/2-w/8},{h/4-h/16} {w/2-w/16},{h/4} {w/2},{h/4}
        C {w/2+w/16},{h/4} {w/2+w/8},{h/4-h/16} {w/2+w/8},{h/8}
       "
    fill="none"
    stroke="red"
    stroke-width="1px"
/>
{/if}
