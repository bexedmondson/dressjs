export function getWaistCinchThinElastic(maxX, maxY, waistline, waistCinch)
{
    let w = getWaistPoints(maxX, maxY, waistline, waistCinch);
    return `M ${w.x0},${w.y0} L ${w.x1},${w.y1}`;
}

export function getWaistCinchDrawstring(maxX, maxY, waistline, waistCinch)
{
    let s = getWaistCinchThinElastic(maxX, maxY, waistline, waistCinch);

    let w = getWaistPoints(maxX, maxY, waistline, waistCinch);
    let lx = w.x0;
    let ly = w.y0;
    let rx = w.x1;
    let ry = w.y1;
    let d = rx - lx;

    let mx = (rx + lx) / 2;
    let my = (ry + ly) / 2;

    let l1 = d * 0.3;
    let l2 = d * 0.4;
    let xdiff = d * 0.02;

    return `${s} 
    M ${mx},${my} 
    L ${mx - xdiff},${my + l1}
    M ${mx},${my} 
    L ${mx + xdiff},${my + l2}`;
}

export function getWaistCinchWideElastic(maxX, maxY, waistline, waistCinch)
{
    let w = getWaistPoints(maxX, maxY, waistline, waistCinch);
    return `M ${w.x0},${w.y0} 
    L ${w.x1},${w.y0}
    L ${w.x1},${w.y1}
    L ${w.x0},${w.y1}
    L ${w.x0},${w.y0}`;
}

export function getWaistCinchShirring(maxX, maxY, waistline, waistCinch)
{
    let w = getWaistPoints(maxX, maxY, waistline, waistCinch);

    let xdiff = (w.x1 - w.x0) / 10.0;

    let s = `M ${w.x0},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 2},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 3},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 4},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 5},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 6},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 7},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 8},${w.y0} 
    V ${w.y1}
    M ${w.x0 + xdiff * 9},${w.y0} 
    V ${w.y1}
    M ${w.x1},${w.y0} 
    V ${w.y1}
    `;

    console.log(s)
    return s;
}

/* separate sash",
"sewn in sash (1 piece)",
"sewn in sash (2 pieces)",
"sewn in sash (4 pieces)",
"lacing" */

function getWaistYRatio(waistline)
{
    switch (waistline)
    {
        case "empire":
            return 0.3;
        case "high":
            return 0.4;
        case "low":
            return 0.5;
        default:
            return 0.45;
    }
}

export function getWaistPoints(maxX, maxY, waistline, waistCinch)
{
    if (waistline === "none") {
        return {
            "x0": maxX * 0.25, 
            "y0": maxY * 0.5,
            "x1": maxX * 0.75,
            "y1": maxY * 0.5
        }
    }

    let y = maxY * getWaistYRatio(waistline);
    let l = maxX * 0.35;
    let r = maxX * 0.65;

    let h = 0;

    switch (waistCinch)
    {
        case "wide elastic":
        case "separate sash":
        case "sewn in sash (1 piece)":
        case "sewn in sash (2 pieces)":
        case "sewn in sash (4 pieces)":
        case "lacing":
            h = maxY * 0.01;
            break;        
        case "shirring":
            h = maxY * 0.03;
    }

    return {
        "x0": l, 
        "y0": y - h,
        "x1": r,
        "y1": y + h
    }
}