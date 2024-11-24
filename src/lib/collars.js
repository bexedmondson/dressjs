export function getCollarCrew(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let radius = (rx - lx) / 4;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius;
    let tgnt = radius / 2;

    return `M ${lx},${ly} 
    L ${lx+radius},${ly} 
    C ${lx+radius},${ly+tgnt} ${mx-tgnt},${my} ${mx},${my} 
    C ${mx+tgnt},${my} ${rx-radius},${ry+tgnt} ${rx-radius},${ry} 
    L ${rx},${ry}`;
}

export function getCollarScoop(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let radius = (rx - lx) / 2;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius;
    let tgnt = radius / 2;

    return `M ${lx},${ly} 
    C ${lx},${ly+tgnt} ${mx-tgnt},${my} ${mx},${my} 
    C ${mx+tgnt},${my} ${rx},${ry+tgnt} ${rx},${ry}`;
}

export function getCollarFlat(left, right)
{
    return `M ${left[0]},${left[1]} 
    L ${right[0]},${right[1]}`
}

export function getCollarV(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let radius = (rx - lx) / 2;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius;

    return `M ${lx},${ly} 
    L ${mx},${my} 
    L ${rx},${ry}`;
}

export function getCollarBoat(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let radius = (rx - lx) / 2;
    let xtgnt = radius / 2;
    let ytgnt = radius / 5;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + ytgnt;

    return `M ${lx},${ly} 
    C ${lx+xtgnt},${ly+ytgnt} ${mx-ytgnt},${my} ${mx},${my} 
    C ${mx+ytgnt},${my} ${rx-xtgnt},${ry+ytgnt} ${rx},${ry}`;
}