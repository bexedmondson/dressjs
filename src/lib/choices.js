import {writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 

export const collar = writable(data.collarOptions[0]);
export const waistline = writable(data.waistlineOptions[0]);
export const waistCinch = writable(data.waistCinchOptions[0]);

export const maxDiagramWidth = readable(100.0);
export const maxDiagramHeight = readable(200.0);

//got to add .0 to make the maths work
export const collarPoints = { left: [35.0, 10.0], right: [65.0, 10.0] };

//TODO: get this from sleeve selection in case of sleeveless
export const shoulderPoints = { left: [20.0, 15.0], right: [80.0, 15.0] };