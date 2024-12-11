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
        hemStyle: data.hemStyles[0],
        slits: data.slitOptions[0],
        pockets: data.pocketOptions[0]
    }
);

const map = $derived(
    [
        { categoryName: "fabricTypes",          selection: selections.fabricType     },
        { categoryName: "fabricStyles",         selection: selections.fabricStyle    },
        { categoryName: "linings",              selection: selections.lining         },
        { categoryName: "collarOptions",        selection: selections.collar         },
        { categoryName: "backNecklines",        selection: selections.backNeckline   },
        { categoryName: "sleeveLengths",        selection: selections.sleeveLength   },
        { categoryName: "sleeveShapes",         selection: selections.sleeveShape    },
        { categoryName: "sleeveAdditions",      selection: selections.sleeveAddition },
        { categoryName: "waistlineOptions",     selection: selections.waistline      },
        { categoryName: "waistCinchOptions",    selection: selections.waistCinch     },
        { categoryName: "skirtShapes",          selection: selections.skirtShape     },
        { categoryName: "skirtLengths",         selection: selections.skirtLength    },
        { categoryName: "skirtExtras",          selection: selections.skirtExtra     },
        { categoryName: "hemStyles",            selection: selections.hemStyle       },
        { categoryName: "slitOptions",          selection: selections.slits          },
        { categoryName: "pocketOptions",        selection: selections.pockets        }
    ]
);

export const maxDiagramWidth = $state(150.0);
export const maxDiagramHeight = $state(200.0);

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

export function isDisabled(category, option) {
    const applicableRestrictions = restrictions[category][option];
    
    for (const categorySelectionPair of map) {
        if (typeof applicableRestrictions[categorySelectionPair.categoryName] !== 'undefined') {
            if (applicableRestrictions[categorySelectionPair.categoryName].includes(categorySelectionPair.selection))
            {
                console.log(`found ${categorySelectionPair.categoryName} ${categorySelectionPair.selection} in restriction set for ${category} ${option}`);
                return true;
            }
        }
    }
    
    return false;
}