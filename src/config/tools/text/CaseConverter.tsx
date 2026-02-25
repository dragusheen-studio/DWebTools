/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { ICaseType } from "@/types/tools/text/CaseConverter";


/* ----- DATAS ----- */
const CaseTypes: ICaseType[] = [
	{
		name: "UPPER CASE",
		transform: (words: string[]) => words.map(w => w.toUpperCase()).join(" "),
	},
	{
		name: "lower case",
		transform: (words: string[]) => words.map(w => w.toLowerCase()).join(" "),
	},
	{
		name: "PascalCase",
		transform: (words: string[]) => words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(""),
	},
	{
		name: "camelCase",
		transform: (words: string[]) => words.map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(""),
	},
	{
		name: "snake_case",
		transform: (words: string[]) => words.join("_").toLowerCase(),
	},
	{
		name: "kebab-case",
		transform: (words: string[]) => words.join("-").toLowerCase(),
	},
	{
		name: "CONSTANT_CASE",
		transform: (words: string[]) => words.map(w => w.toUpperCase()).join("_"),
	},
	{
		name: "Title Case",
		transform: (words: string[]) => words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
	}
];


/* ----- FUNCTIONS ----- */
function getCaseTypes() {
	return CaseTypes;
}


/* ----- EXPORTS ----- */
export {
	getCaseTypes,
};
