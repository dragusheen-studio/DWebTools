/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { DotStyle, FinderInnerStyle, FinderOuterStyle } from "@/types/tools/data-media/QRCodeGenerator";


/* ----- DATAS ----- */
const dotOptions: { value: DotStyle; label: string }[] = [
	{ value: "circle", label: "Cercles" },
	{ value: "diamond", label: "Losanges" },
	{ value: "hashtag", label: "Croix" },
	{ value: "heart", label: "Cœurs" },
	{ value: "horizontal-line", label: "Lignes horizontales" },
	{ value: "leaf", label: "Feuilles / Organique" },
	{ value: "pinched-square", label: "Carrés pincés" },
	{ value: "rounded", label: "Coins arrondis" },
	{ value: "square", label: "Carrés classiques" },
	{ value: "square-sm", label: "Carrés petits" },
	{ value: "star", label: "Étoiles" },
	{ value: "vertical-line", label: "Lignes verticales" },
];

const finderInnerOptions: { value: FinderInnerStyle; label: string }[] = [
	{ value: "square", label: "Carrés" },
	{ value: "pinched-square", label: "Carrés pincés" },
	{ value: "rounded-sm", label: "Coins arrondis (petits)" },
	{ value: "rounded", label: "Coins arrondis" },
	{ value: "rounded-lg", label: "Coins arrondis (grands)" },
	{ value: "circle", label: "Cercles" },
	{ value: "inpoint-sm", label: "Points internes (petits)" },
	{ value: "inpoint", label: "Points internes" },
	{ value: "inpoint-lg", label: "Points internes (grands)" },
	{ value: "outpoint-sm", label: "Points externes (petits)" },
	{ value: "outpoint", label: "Points externes" },
	{ value: "outpoint-lg", label: "Points externes (grands)" },
	{ value: "leaf-sm", label: "Feuilles (petites)" },
	{ value: "leaf", label: "Feuilles" },
	{ value: "leaf-lg", label: "Feuilles (grandes)" },
	{ value: "diamond", label: "Losanges" },
	{ value: "star", label: "Étoiles" },
	{ value: "heart", label: "Cœurs" },
	{ value: "hashtag", label: "Hashtag" },
];

const finderOuterOptions: { value: FinderOuterStyle; label: string }[] = [
	{ value: "square", label: "Carrés" },
	{ value: "pinched-square", label: "Carrés pincés" },
	{ value: "rounded-sm", label: "Coins arrondis (petits)" },
	{ value: "rounded", label: "Coins arrondis" },
	{ value: "rounded-lg", label: "Coins arrondis (grands)" },
	{ value: "circle", label: "Cercles" },
	{ value: "inpoint-sm", label: "Points internes (petits)" },
	{ value: "inpoint", label: "Points internes" },
	{ value: "inpoint-lg", label: "Points internes (grands)" },
	{ value: "outpoint-sm", label: "Points externes (petits)" },
	{ value: "outpoint", label: "Points externes" },
	{ value: "outpoint-lg", label: "Points externes (grands)" },
	{ value: "leaf-sm", label: "Feuilles (petites)" },
	{ value: "leaf", label: "Feuilles" },
	{ value: "leaf-lg", label: "Feuilles (grandes)" },
];


/* ----- FUNCTIONS ----- */
function getDotOptions() {
	return dotOptions;
}

function getFinderInnerOptions() {
	return finderInnerOptions;
}

function getFinderOuterOptions() {
	return finderOuterOptions;
}

/* ----- EXPORTS ----- */
export {
	getDotOptions,
	getFinderInnerOptions,
	getFinderOuterOptions
};
