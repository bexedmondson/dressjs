export function getShoulderPathDefault(collarPoints, shoulderPoints)
{
    const leftOrigin = shoulderPoints().left;
    const leftTerminal = collarPoints().left;
    const rightOrigin = shoulderPoints().right;
    const rightTerminal = collarPoints().right;

    const terminalTangentXOffset = (leftTerminal[0] - leftOrigin[0]) / 2.0;
    const originTangentOffset = (leftOrigin[1] - leftTerminal[1]) * 0.6;


    const path = `M ${leftOrigin[0]},${leftOrigin[1]} 
    C ${leftOrigin[0] + originTangentOffset},${leftOrigin[1] - originTangentOffset}
    ${leftTerminal[0] - terminalTangentXOffset},${leftTerminal[1]}
    ${leftTerminal[0]},${leftTerminal[1]}
    M ${rightOrigin[0]},${rightOrigin[1]}
    C ${rightOrigin[0] - originTangentOffset},${rightOrigin[1] - originTangentOffset}
    ${rightTerminal[0] + terminalTangentXOffset},${rightTerminal[1]}
    ${rightTerminal[0]},${rightTerminal[1]}`;

    //console.log("shoulder:\n" + path)

    return path;
}
