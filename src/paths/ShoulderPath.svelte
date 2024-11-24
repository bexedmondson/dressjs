<script>
    import {collarPoints, shoulderPoints} from "$lib/choices";
    import {getShoulderPathDefault} from "$lib/shoulders";

    let left = collarPoints.left;
    let right = collarPoints.right;

</script>

<path
    d={getShoulderPathDefault(collarPoints, shoulderPoints)}
    fill="none"
    stroke="black"
    stroke-width="1px"
    stroke-linecap="round"
/>