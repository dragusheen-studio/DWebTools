/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { ColorRole } from "@/types/tools/design/UIKitPreview";


/* ----- DATAS ----- */
const RoleLabels: Record<ColorRole, string> = {
	primary: "Principale",
	accent_1: "Accent 1",
	accent_2: "Accent 2",
	textLight: "Texte (Clair)",
	bgLight: "Fond (Clair)",
	textDark: "Texte (Sombre)",
	bgDark: "Fond (Sombre)",
	other: "Autre (Inutilisé)"
};


/* ----- FUNCTIONS ----- */
function getRoleLabels() {
	return RoleLabels;
}


/* ----- EXPORTS ----- */
export {
	getRoleLabels,
};
