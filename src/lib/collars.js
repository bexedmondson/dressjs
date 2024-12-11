export function getCollarCrew(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let diameter = (rx - lx) / 2;
    let radius = (rx - lx) / 3.5;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius;
    let tgnt = radius / 2;

    return `M ${lx},${ly} 
    L ${lx+(diameter-radius)},${ly} 
    C ${lx+(diameter-radius)},${ly+tgnt} ${mx-tgnt},${my} ${mx},${my} 
    C ${mx+tgnt},${my} ${rx-(diameter-radius)},${ry+tgnt} ${rx-(diameter-radius)},${ry} 
    L ${rx},${ry}`;
}

export function getCollarScoop(left, right)
{
    let l0x = left[0];
    let r0x = right[0];
    let inset = (r0x - l0x) * 0.1;

    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let radius = (rx - lx) / 2;
    let yOffset = radius * 0.2;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius + yOffset;
    let tgnt = radius / 2;

    return `M ${l0x},${ly} 
    L ${lx},${ly}
    L ${lx},${ly + yOffset}
    C ${lx},${ly+yOffset+tgnt} ${mx-tgnt},${my} ${mx},${my} 
    C ${mx+tgnt},${my} ${rx},${ry+yOffset+tgnt} ${rx},${ry+yOffset}
    L ${rx},${ry}
    L ${r0x},${ry}`;
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
    let radius = (rx - lx) * 0.7;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + radius;

    return `M ${lx},${ly} 
    L ${mx},${my} 
    L ${rx},${ry}`;
}

export function getCollarVLacing(left, right)
{
    let s = getCollarV(left, right);
    
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];

    let d = rx - lx; 

    let l1x = lx + d * 0.18;
    let y1 = ly + d * 0.35;
    let r1x = rx - d * 0.18;

    let l2x = lx + d * 0.3;
    let y2 = ly + d * 0.6;
    let r2x = rx - d * 0.3;

    return `${s} 
    M ${l2x},${y2} 
    L ${r1x},${y1} 
    L ${l1x},${y1} 
    L ${r2x},${y2}`;
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

export function getCollarSweetheart(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];

    let c = (rx - lx) / 10;

    let blx = lx + (c/2);
    let brx = rx - (c/2);
    let by = (rx - lx) * 0.7;

    let mx = (rx + lx) / 2;
    let my = (rx - lx) * 0.8;

    return `M ${lx},${ly} 
    L ${blx},${by} 
    C ${blx+c},${by-c} ${mx-c},${my-c} ${mx},${my}
    C ${mx+c},${my-c} ${brx-c},${by-c} ${brx},${by}
    L ${rx},${ry}`;
}

export function getCollarSquare(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];

    let w = rx - lx;
    let by = w * 0.8;
    let xdiff = w * 0.1

    return `M ${lx},${ly} 
    L ${lx + xdiff},${ly}
    L ${lx + xdiff},${by}
    L ${rx - xdiff},${by}
    L ${rx-xdiff},${ry}
    L ${rx},${ry}`;
}

export function getCollarKeyhole(left, right)
{
    let s = getCollarScoop(left, right);

    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let w = rx - lx;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + w * 0.6;

    let xdiff = w * 0.2;
    let ydiff = w * 0.3;

    return `${s} 
    M ${mx},${my} 
    C ${mx+xdiff},${my+ydiff} ${mx-xdiff},${my+ydiff} ${mx},${my}`;
}

export function getCollarTurtleneck(left, right)
{
    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let diameter = (rx - lx) / 2;
    let radius = (rx - lx) / 4;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 - radius;
    let tgnt = radius / 2;

    let m1x = mx - radius;
    let m2x = mx + radius;

    return `M ${lx},${ly} 
    C ${lx+tgnt},${ly} ${m1x},${my+tgnt} ${m1x},${my} 
    L ${m2x},${my} 
    C ${m2x},${my+tgnt} ${rx-tgnt},${ry} ${rx},${ry}`;
}

export function getCollarTied(left, right)
{
    let s = getCollarKeyhole(left, right);

    let lx = left[0];
    let ly = left[1];
    let rx = right[0];
    let ry = right[1];
    let w = rx - lx;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2 + w * 0.6;

    let l1 = w * 0.3;
    let l2 = w * 0.4;
    let xdiff = w * 0.02;

    return `${s} 
    M ${mx},${my} 
    L ${mx - xdiff},${my + l1}
    M ${mx},${my} 
    L ${mx + xdiff},${my + l2}`;
}