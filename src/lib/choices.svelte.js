//import {get, derived, writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 
import * as restrictions from "$lib/restrictions.json";

let initialFabricType = data.fabricTypes[0];
export const selections = $state({
        fabricType: initialFabricType,
        fabricStyle: data.fabricStyles[initialFabricType][0],
        lining: data.linings[0],
        collar: data.collarOptions[0],
        backNeckline: data.backNecklines[0],
        sleeveLength: data.sleeveLengths[0],
        sleeveShape: data.sleeveShapes[0],
        sleeveAddition: data.sleeveAdditions[0],
        waistline: data.waistlineOptions[0],
        waistCinch: data.waistCinchOptions[0],
        skirtShape: data.skirtShapes[0],
        skirtLength: data.skirtLengths[0],
        skirtExtra: data.skirtExtras[0],
        hemStyles: data.hemStyles[0],
        slits: data.slitOptions[0],
        pockets: data.pocketOptions[0]
    }
);

const map = $derived(
    {
        "fabricTypes": selections.fabricType,
        "fabricStyles": selections.fabricStyle,
        "linings": selections.lining,
        "collarOptions": selections.collar,
        "backNecklines": selections.backNeckline,
        "sleeveLengths": selections.sleeveLength,
        "sleeveShapes": selections.sleeveShape,
        "sleeveAdditions": selections.sleeveAddition,
        "waistlineOptions": selections.waistline,
        "waistCinchOptions": selections.waistCinch,
        "skirtShapes": selections.skirtShape,
        "skirtLengths": selections.skirtLength,
        "skirtExtras": selections.skirtExtra,
        "hemStyles": selections.hemStyle,
        "slitOptions": selections.slits,
        "pocketOptions": selections.pockets
    }
);

let maxWidth = 150.0;
let maxHeight = 200.0;
export const maxDiagramWidth = $state(maxWidth);
export const maxDiagramHeight = $state(maxHeight);

//got to add .0 to make the maths work
export function collarPoints() {
    const collarPts = $derived({ left: [maxWidth * 0.35, 0.0], right: [maxWidth * 0.65, 0.0] });
    return collarPts;
}

//TODO: get this from sleeve selection in case of sleeveless
export function shoulderPoints() {
    const shoulderPts = $derived({ left: [maxWidth * 0.2, 7.5], right: [maxWidth * 0.8, 7.5] });
    return shoulderPts;
}

export function isDisabled(category, selection)
{
    let lmap = map; //TODO fix
    //console.log(selection);
    Object.entries(lmap).forEach(choiceCategory => {
        if (choiceCategory[0] in restrictions[category][selection])
        {
            //console.log("checking choiceCategory " + choiceCategory[0]);
            //console.log(restrictions[category][selection][choiceCategory[0]]);
            restrictions[category][selection][choiceCategory[0]].forEach(restriction => {
                //console.log("comparing " + lmap[choiceCategory[0]] + " and " + restriction);
                //console.log(lmap[choiceCategory[0]] === restriction);
                if (lmap[choiceCategory[0]] === restriction)
                {
                    console.log("returning true");
                    return true;
                }
            });
        }
    });

    return false;
}