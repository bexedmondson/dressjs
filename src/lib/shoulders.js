export function getShoulderPathDefault(collarPoints, shoulderPoints)
{
    let leftOrigin = shoulderPoints.left;
    let leftTerminal = collarPoints.left;
    let rightOrigin = shoulderPoints.right;
    let rightTerminal = collarPoints.right;

    let terminalTangentXOffset = (leftTerminal[0] - leftOrigin[0]) / 2.0;
    let originTangentOffset = (leftOrigin[1] - leftTerminal[1]) * 0.6;


    let path = `M ${leftOrigin[0]},${leftOrigin[1]} 
    C ${leftOrigin[0] + originTangentOffset},${leftOrigin[1] - originTangentOffset}
    ${leftTerminal[0] - terminalTangentXOffset},${leftTerminal[1]}
    ${leftTerminal[0]},${leftTerminal[1]}
    M ${rightOrigin[0]},${rightOrigin[1]}
    C ${rightOrigin[0] - originTangentOffset},${rightOrigin[1] - originTangentOffset}
    ${rightTerminal[0] + terminalTangentXOffset},${rightTerminal[1]}
    ${rightTerminal[0]},${rightTerminal[1]}`;

    console.log("shoulder:\n" + path)

    return path;
}
