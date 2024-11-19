export function getCollarRound(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let radius = (rx - lx) / 2;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius;
    let tgnt = radius / 2;

    return `M ${lx},${ly} C ${lx},${ly+tgnt} ${mx-tgnt},${my} ${mx},${my} C ${mx+tgnt},${my} ${rx},${ry+tgnt} ${rx},${ry}`;
}

export function getCollarFlat(left, right)
{
    return `M ${left[0]},${left[1]} L ${right[0]},${right[1]}`
}