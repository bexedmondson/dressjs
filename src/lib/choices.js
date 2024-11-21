import {writable, readable} from "svelte/store";
import * as data from "$lib/data.json"; 

export const collar = writable(data.collarOptions[0]);
export const waistline = writable(data.waistlineOptions[0]);
export const waistCinch = writable(data.waistCinchOptions[0]);

export const maxDiagramWidth = readable(100);
export const maxDiagramHeight = readable(200);