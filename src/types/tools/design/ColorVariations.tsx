/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPES ----- */
type Harmony = "complementary" | "triadic" | "analogous" | "monochromatic";


/* ----- INTERFACES ----- */
interface IHSLColor {
	h: number;
	s: number;
	l: number;
}


/* ----- EXPORTS ----- */
export type {
	Harmony,
	IHSLColor,
};
