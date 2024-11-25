import {writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 

export const collar = writable(data.collarOptions[0]);
export const waistline = writable(data.waistlineOptions[0]);
export const waistCinch = writable(data.waistCinchOptions[0]);

let maxWidth = 150.0;
let maxHeight = 200.0;
export const maxDiagramWidth = readable(maxWidth);
export const maxDiagramHeight = readable(maxHeight);

//got to add .0 to make the maths work
export const collarPoints = { left: [maxWidth * 0.35, 0.0], right: [maxWidth * 0.65, 0.0] };

//TODO: get this from sleeve selection in case of sleeveless
export const shoulderPoints = { left: [maxWidth * 0.2, 7.5], right: [maxWidth * 0.8, 7.5] };