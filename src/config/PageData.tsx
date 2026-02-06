/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
*/


/* ----- IMPORTS ----- */
import { ICategoryConfig } from "@/types/Category";
import { IPageConfig } from "@/types/PageData";
import { Home, Info, TextCursorInput, ShieldCheck, Code2 } from "lucide-react";


/* ----- DATAS ----- */
const MainPages: IPageConfig[] = [
	{ name: "Accueil", path: "/", icon: Home },
	{ name: "Parcours", path: "/about", icon: Info },
];

const ToolCategories: ICategoryConfig[] = [
	{
		name: "Texte",
		icon: TextCursorInput,
		tools: [
		]
	},
	{
		name: "Sécurité",
		icon: ShieldCheck,
		tools: [
		]
	},
	{
		name: "Développement",
		icon: Code2,
		tools: [
		]
	}
];


/* ----- FUNCTIONS ----- */
function GetMainPages() {
	return MainPages;
}

function GetCategoriesPages() {
	return ToolCategories;
}


/* ----- EXPORTS ----- */
export { GetMainPages, GetCategoriesPages };
