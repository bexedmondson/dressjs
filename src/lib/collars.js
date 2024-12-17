export function getCollarCrew(left, right)
{
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const diameter = (rx - lx) / 2;
    const radius = (rx - lx) / 3.5;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 + radius;
    const tgnt = radius / 2;

    return `M ${lx},${ly} 
    L ${lx+(diameter-radius)},${ly} 
    C ${lx+(diameter-radius)},${ly+tgnt} ${mx-tgnt},${my} ${mx},${my} 
    C ${mx+tgnt},${my} ${rx-(diameter-radius)},${ry+tgnt} ${rx-(diameter-radius)},${ry} 
    L ${rx},${ry}`;
}

export function getCollarScoop(left, right)
{
    const l0x = left[0];
    const r0x = right[0];
    const inset = (r0x - l0x) * 0.1;

    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const radius = (rx - lx) / 2;
    const yOffset = radius * 0.2;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 + radius + yOffset;
    const tgnt = radius / 2;

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
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const radius = (rx - lx) * 0.7;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 + radius;

    return `M ${lx},${ly} 
    L ${mx},${my} 
    L ${rx},${ry}`;
}

export function getCollarVLacing(left, right)
{
    const s = getCollarV(left, right);
    
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];

    const d = rx - lx; 

    const l1x = lx + d * 0.18;
    const y1 = ly + d * 0.35;
    const r1x = rx - d * 0.18;

    const l2x = lx + d * 0.3;
    const y2 = ly + d * 0.6;
    const r2x = rx - d * 0.3;

    return `${s} 
    M ${l2x},${y2} 
    L ${r1x},${y1} 
    L ${l1x},${y1} 
    L ${r2x},${y2}`;
}

export function getCollarBoat(left, right)
{
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const radius = (rx - lx) / 2;
    const xtgnt = radius / 2;
    const ytgnt = radius / 5;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 + ytgnt;

    return `M ${lx},${ly} 
    C ${lx+xtgnt},${ly+ytgnt} ${mx-ytgnt},${my} ${mx},${my} 
    C ${mx+ytgnt},${my} ${rx-xtgnt},${ry+ytgnt} ${rx},${ry}`;
}

export function getCollarSweetheart(left, right)
{
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];

    const c = (rx - lx) / 10;

    const blx = lx + (c/2);
    const brx = rx - (c/2);
    const by = (rx - lx) * 0.7;

    const mx = (rx + lx) / 2;
    const my = (rx - lx) * 0.8;

    return `M ${lx},${ly} 
    L ${blx},${by} 
    C ${blx+c},${by-c} ${mx-c},${my-c} ${mx},${my}
    C ${mx+c},${my-c} ${brx-c},${by-c} ${brx},${by}
    L ${rx},${ry}`;
}

export function getCollarSquare(left, right)
{
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];

    const w = rx - lx;
    const by = w * 0.8;
    const xdiff = w * 0.1

    return `M ${lx},${ly} 
    L ${lx + xdiff},${ly}
    L ${lx + xdiff},${by}
    L ${rx - xdiff},${by}
    L ${rx-xdiff},${ry}
    L ${rx},${ry}`;
}

export function getCollarKeyhole(left, right)
{
    const s = getCollarScoop(left, right);

    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const w = rx - lx;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 + w * 0.6;

    const xdiff = w * 0.2;
    const ydiff = w * 0.3;

    return `${s} 
    M ${mx},${my} 
    C ${mx+xdiff},${my+ydiff} ${mx-xdiff},${my+ydiff} ${mx},${my}`;
}

export function getCollarTurtleneck(left, right)
{
    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const diameter = (rx - lx) / 2;
    const radius = (rx - lx) / 4;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 - radius;
    const tgnt = radius / 2;

    const m1x = mx - radius;
    const m2x = mx + radius;

    return `M ${lx},${ly} 
    C ${lx+tgnt},${ly} ${m1x},${my+tgnt} ${m1x},${my} 
    L ${m2x},${my} 
    C ${m2x},${my+tgnt} ${rx-tgnt},${ry} ${rx},${ry}`;
}

export function getCollarTied(left, right)
{
    const s = getCollarKeyhole(left, right);

    const lx = left[0];
    const ly = left[1];
    const rx = right[0];
    const ry = right[1];
    const w = rx - lx;

    const mx = (rx + lx) / 2;
    const my = (ry + ly) / 2 + w * 0.6;

    const l1 = w * 0.3;
    const l2 = w * 0.4;
    const xdiff = w * 0.02;

    return `${s} 
    M ${mx},${my} 
    L ${mx - xdiff},${my + l1}
    M ${mx},${my} 
    L ${mx + xdiff},${my + l2}`;
}