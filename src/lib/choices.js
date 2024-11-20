import {writable} from "svelte/store";
import {collarOptions} from "$lib/data.json"; 

export const collar = writable(collarOptions[0]);
