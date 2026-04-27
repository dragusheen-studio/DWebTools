/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPES ----- */
type ColorRole = "primary" | "accent_1" | "accent_2" | "textLight" | "bgLight" | "textDark" | "bgDark" | "other";


/* ----- INTERFACES ----- */
interface IColorToken {
	id: string;
	role: ColorRole;
	hex: string;
}


/* ----- EXPORTS ----- */
export type {
	ColorRole,
	IColorToken
};
