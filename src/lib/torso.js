export function getTorsoSidesPath(shoulderPoints, waistPoints)
{
    let leftOrigin = shoulderPoints.left;
    let leftTerminal = [waistPoints.x0, waistPoints.y0];
    let rightOrigin = shoulderPoints.right;
    let rightTerminal = [waistPoints.x1, waistPoints.y1];

    let originTangentXOffset = (leftTerminal[1] - leftTerminal[1]) * 0.3;
    let originTangentYOffset = (leftTerminal[1] - leftOrigin[1]) * 0.4;
    let terminalTangentXOffset = (leftTerminal[0] - leftOrigin[0]) * 0.3;
    let terminalTangentYOffset = (leftTerminal[0] - leftOrigin[0]) * 0.4;


    let path =  `M ${leftOrigin[0]},${leftOrigin[1]} 
    C ${leftOrigin[0] + originTangentXOffset},${leftOrigin[1] + originTangentYOffset}
    ${leftTerminal[0] - terminalTangentXOffset},${leftTerminal[1] - terminalTangentYOffset}
    ${leftTerminal[0]},${leftTerminal[1]}
    M ${rightOrigin[0]},${rightOrigin[1]}
    C ${rightOrigin[0] - originTangentXOffset},${rightOrigin[1] + originTangentYOffset}
    ${rightTerminal[0] + terminalTangentXOffset},${rightTerminal[1] - terminalTangentYOffset}
    ${rightTerminal[0]},${rightTerminal[1]}`;

    console.log(path);

    return path;
}