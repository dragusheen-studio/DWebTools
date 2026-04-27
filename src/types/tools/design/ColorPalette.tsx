/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPES ----- */
type Harmony = "complementary" | "analogous" | "monochromatic";
type ExportFormat = "json" | "css" | "csv";


/* ----- INTERFACES ----- */
interface IOption {
	id: string;
	label: string;
	hex: string;
}

interface INeutral {
	textLight: string;
	bgLight: string;
	textDark: string;
	bgDark: string;
}


/* ----- EXPORTS ----- */
export type {
	Harmony,
	ExportFormat,
	IOption,
	INeutral,
};
