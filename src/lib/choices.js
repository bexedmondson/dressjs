import {writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 

export const collar = writable(data.collarOptions[0]);
export const waistline = writable(data.waistlineOptions[0]);
export const waistCinch = writable(data.waistCinchOptions[0]);

export const maxDiagramWidth = readable(100);
export const maxDiagramHeight = readable(200);

export const collarPoints = { left: [35, 10], right: [65, 10] };

//TODO: get this from sleeve selection
export const sleevePoints = { topLeft: [20, 12.5], topRight: [80, 12.5], bottomLeft: [32.5, 25], bottomRight: [67.5, 25] };