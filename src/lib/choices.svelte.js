//import {get, derived, writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 
import * as restrictions from "$lib/restrictions.json";

export const selections = $state({
        fabricType: data.fabricTypes[0],
        fabricStyle: data.fabricStyles[0],
        lining: data.linings[0],
        collar: "scoop",
        backNeckline: data.backNecklines[0],
        sleeveLength: data.sleeveLengths[0],
        sleeveShape: data.sleeveShapes[0],
        sleeveAddition: data.sleeveAdditions[0],
        waistline: "natural",
        waistCinch: data.waistCinchOptions[0],
        skirtShape: data.skirtShapes[0],
        skirtLength: "midi",
        skirtExtra: data.skirtExtras[0],
        hemStyle: data.hemStyles[0],
        slits: data.slitOptions[0],
        pockets: data.pocketOptions[0]
    }
);

const map = $derived(
    [
        { categoryName: "fabricTypes",          selection: selections.fabricType,     setter: (val) => selections.fabricType = val      },
        { categoryName: "fabricStyles",         selection: selections.fabricStyle,    setter: (val) => selections.fabricStyle = val     },
        { categoryName: "linings",              selection: selections.lining,         setter: (val) => selections.lining = val          },
        { categoryName: "collarOptions",        selection: selections.collar,         setter: (val) => selections.collar = val          },
        { categoryName: "backNecklines",        selection: selections.backNeckline,   setter: (val) => selections.backNeckline = val    },
        { categoryName: "sleeveLengths",        selection: selections.sleeveLength,   setter: (val) => selections.sleeveLength = val    },
        { categoryName: "sleeveShapes",         selection: selections.sleeveShape,    setter: (val) => selections.sleeveShape = val     },
        { categoryName: "sleeveAdditions",      selection: selections.sleeveAddition, setter: (val) => selections.sleeveAddition = val  },
        { categoryName: "waistlineOptions",     selection: selections.waistline,      setter: (val) => selections.waistline = val       },
        { categoryName: "waistCinchOptions",    selection: selections.waistCinch,     setter: (val) => selections.waistCinch = val      },
        { categoryName: "skirtShapes",          selection: selections.skirtShape,     setter: (val) => selections.skirtShape = val      },
        { categoryName: "skirtLengths",         selection: selections.skirtLength,    setter: (val) => selections.skirtLength = val     },
        { categoryName: "skirtExtras",          selection: selections.skirtExtra,     setter: (val) => selections.skirtExtra = val      },
        { categoryName: "hemStyles",            selection: selections.hemStyle,       setter: (val) => selections.hemStyle = val        },
        { categoryName: "slitOptions",          selection: selections.slits,          setter: (val) => selections.slits = val           },
        { categoryName: "pocketOptions",        selection: selections.pockets,        setter: (val) => selections.pockets = val         }
    ]
);

export function getCategoryNameSelectionMap() {
    return map;
}

export const maxDiagramWidth = $state(150.0);
export const maxDiagramHeight = $state(200.0);

//got to add .0 to make the maths work
export function collarPoints() {
    const collarPts = $derived({ left: [maxDiagramWidth * 0.3, 15.0], right: [maxDiagramWidth * 0.7, 15.0] });
    return collarPts;
}

//TODO: get this from sleeve selection in case of sleeveless
export function shoulderPoints() {
    const shoulderPts = $derived({ left: [maxDiagramWidth * 0.2, 22.5], right: [maxDiagramWidth * 0.8, 22.5] });
    return shoulderPts;
}

export function isDisabled(category, option) {
    const applicableRestrictions = restrictions[category][option];
    
    for (const categorySelectionPair of map) {
        if (typeof applicableRestrictions[categorySelectionPair.categoryName] !== 'undefined') {
            if (applicableRestrictions[categorySelectionPair.categoryName].includes(categorySelectionPair.selection))
            {
                //console.log(`found ${categorySelectionPair.categoryName} ${categorySelectionPair.selection} in restriction set for ${category} ${option}`);
                return true;
            }
        }
    }
    
    return false;
}

export function setSelection(choice, category) {
    map.find((mapping) => mapping.categoryName === category).setter(choice);
}