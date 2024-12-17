export function getSkirtSidesPath(waistPoints, skirtLength, skirtShape, maxDiagramWidth, maxDiagramHeight)
{
    const yRatio = getSkirtYRatio(skirtLength);
    const originY = yRatio * maxDiagramHeight; //TODO account of asymmetry

    const leftOriginX = waistPoints.x0 * (1 - yRatio);
    const rightOriginX = waistPoints.x1 + (maxDiagramWidth - waistPoints.x1) * yRatio;


    const leftTerminal = [waistPoints.x0, waistPoints.y1];
    const rightTerminal = [waistPoints.x1, waistPoints.y1];

    const xDiff = leftTerminal[0] - leftOriginX;
    const yDiff = leftTerminal[1] - originY;

    const originTangentXOffset = xDiff * 0.2;
    const originTangentYOffset = yDiff * 0.4;
    const terminalTangentXOffset = xDiff * 0.3;
    const terminalTangentYOffset = yDiff * 0.1;


    const path =  `M ${leftOriginX},${originY} 
    C ${leftOriginX + originTangentXOffset},${originY + originTangentYOffset}
    ${leftTerminal[0] - terminalTangentXOffset},${leftTerminal[1] - terminalTangentYOffset}
    ${leftTerminal[0]},${leftTerminal[1]}
    M ${rightOriginX},${originY}
    C ${rightOriginX - originTangentXOffset},${originY + originTangentYOffset}
    ${rightTerminal[0] + terminalTangentXOffset},${rightTerminal[1] - terminalTangentYOffset}
    ${rightTerminal[0]},${rightTerminal[1]}`;

    console.log(path);

    return path;
}


function getSkirtYRatio(skirtLength)
{
    switch (skirtLength)
    {
        case "mini":
            return 0.64;
        case "above knee":
            return 0.67;
        case "knee length":
            return 0.7;
        case "midi":
            return 0.75
        case "tea":
            return 0.85;
        case "maxi":
            return 0.9;
        case "floor":
            return 0.95;
    }
}