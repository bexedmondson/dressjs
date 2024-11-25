import {writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 
import * as restrictions from "$lib/restrictions.json";

let initialFabricType = data.fabricTypes[0];
export const fabricType = writable(initialFabricType);
export const fabricStyle = writable(data.fabricStyles[initialFabricType][0]);
export const lining = writable(data.linings[0]);
export const collar = writable(data.collarOptions[0]);
export const backNeckline = writable(data.backNecklines[0]);
export const sleeveLength = writable(data.sleeveLengths[0]);
export const sleeveShape = writable(data.sleeveShapes[0]);
export const sleeveAddition = writable(data.sleeveAdditions[0]);
export const waistline = writable(data.waistlineOptions[0]);
export const waistCinch = writable(data.waistCinchOptions[0]);
export const skirtShape = writable(data.skirtShapes[0]);
export const skirtLength = writable(data.skirtLengths[0]);
export const skirtExtra = writable(data.skirtExtras[0]);
export const hemStyle = writable(data.hemStyles[0]);
export const slits = writable(data.slitOptions[0]);
export const pockets = writable(data.pocketOptions[0]);

let map = 
{
    "fabricTypes": "fabricType",
    "fabricStyles": "fabricStyle",
    "linings": "lining",
    "collarOptions": "collar",
    "backNecklines": "backNeckline",
    "sleeveLengths": "sleeveLength",
    "sleeveShapes": "sleeveShape",
    "sleeveAdditions": "sleeveAddition",
    "waistlineOptions": "waistline",
    "waistCinchOptions": "waistCinch",
    "skirtShapes": "skirtShape",
    "skirtLengths": "skirtLength",
    "skirtExtras": "skirtExtra",
    "hemStyles": "hemStyle",
    "slitOptions": "slits",
    "pocketOptions": "pockets"
}

let maxWidth = 150.0;
let maxHeight = 200.0;
export const maxDiagramWidth = readable(maxWidth);
export const maxDiagramHeight = readable(maxHeight);

//got to add .0 to make the maths work
export const collarPoints = { left: [maxWidth * 0.35, 0.0], right: [maxWidth * 0.65, 0.0] };

//TODO: get this from sleeve selection in case of sleeveless
export const shoulderPoints = { left: [maxWidth * 0.2, 7.5], right: [maxWidth * 0.8, 7.5] };


export function isDisabled(category, selection)
{
    Object.entries(map).forEach(choiceCategory => {
        if (choiceCategory in restrictions[category][selection])
        {
            restrictions[category][selection][choiceCategory].forEach(restriction => {
                if (map[choiceCategory] === restriction)
                    return true;
            });
        }
    });

    return false;
}