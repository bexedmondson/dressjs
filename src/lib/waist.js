export function getWaistCinchThinElastic(maxX, maxY, waistline)
{
    let w = getWaistPoints(maxX, maxY, waistline);
    return `M ${w.x0},${w.y0} L ${w.x1},${w.y1}`
}

export function getWaistPoints(maxX, maxY, waistline)
{
    switch (waistline)
    {
        case "high":
            return {
                "x0": maxX * 0.35, 
                "y0": maxY * 0.30,
                "x1": maxX * 0.65,
                "y1": maxY * 0.30
            }
        case "natural":
            return {
                "x0": maxX * 0.35, 
                "y0": maxY * 0.45,
                "x1": maxX * 0.65,
                "y1": maxY * 0.45
            }
    }
}