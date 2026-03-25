/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Harmony, INeutral, IOption } from "@/types/tools/design/ColorPalette";
import { hexToHsl, hslToHex } from "../color-variations/colorGenerator";


/* ----- FUNCTIONS ----- */
function createComplementaryOptions(h: number, s: number, l: number): IOption[] {
	return [
		{ id: "acc-1", label: "Complémentaire (+180°)", hex: hslToHex((h + 180) % 360, s, l) },
		{ id: "acc-2", label: "Triade A (+120°)", hex: hslToHex((h + 120) % 360, s, l) },
		{ id: "acc-3", label: "Triade B (+240°)", hex: hslToHex((h + 240) % 360, s, l) },
	];
};

function createAnalogousOptions(h: number, s: number, l: number): IOption[] {
	return [
		{ id: "acc-1", label: "Analogue gauche (-60°)", hex: hslToHex((h - 60 + 360) % 360, s, l) },
		{ id: "acc-2", label: "Analogue gauche (-30°)", hex: hslToHex((h - 30 + 360) % 360, s, l) },
		{ id: "acc-3", label: "Analogue droite (+30°)", hex: hslToHex((h + 30) % 360, s, l) },
		{ id: "acc-4", label: "Analogue droite (+60°)", hex: hslToHex((h + 60) % 360, s, l) },
	];
}

function createMonochromaticOptions(h: number, s: number, l: number): IOption[] {
	return [
		{ id: "acc-1", label: "Plus Sombre 2", hex: hslToHex(h, s, Math.max(l - 30, 5)) },
		{ id: "acc-2", label: "Plus Sombre 1", hex: hslToHex(h, s, Math.max(l - 15, 15)) },
		{ id: "acc-3", label: "Plus Clair 1", hex: hslToHex(h, s, Math.min(l + 15, 85)) },
		{ id: "acc-4", label: "Plus Clair 2", hex: hslToHex(h, s, Math.min(l + 30, 95)) },
	];
}

function createOptions(hex: string, mode: Harmony): IOption[] {
	const { h, s, l } = hexToHsl(hex);

	switch (mode) {
		case "complementary": return createComplementaryOptions(h, s, l);
		case "analogous": return createAnalogousOptions(h, s, l);
		case "monochromatic": return createMonochromaticOptions(h, s, l);
	}
}

function createNeutrals(hex: string): INeutral {
	const { h } = hexToHsl(hex);
	return {
		textLight: hslToHex(h, 15, 10),
		bgLight: hslToHex(h, 5, 98),
		textDark: hslToHex(h, 10, 95),
		bgDark: hslToHex(h, 15, 5),
	};
}


/* ----- EXPORTS ----- */
export {
	createOptions,
	createNeutrals,
};
