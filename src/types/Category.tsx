/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { LucideIcon } from "lucide-react";
import { IToolConfig } from "@/types/Tool";


/* ----- INTERFACES ----- */
type CategoryColor = "blue" | "green" | "purple" | "orange" | "pink" | "cyan" | "yellow" | "default";

interface ICategoryConfig {
	name: string;
	icon: LucideIcon;
	color: CategoryColor;
	tools: IToolConfig[];
}

interface ISmallCategoryConfig {
	name: string;
	icon: LucideIcon;
	color: CategoryColor;
}


/* ----- FUNCTIONS ----- */
function ReduceCategory(category: ICategoryConfig) {
	return {
		name: category.name,
		icon: category.icon,
		color: category.color
	};
}


/* ----- EXPORTS ----- */
export {
	type CategoryColor,
	type ICategoryConfig,
	type ISmallCategoryConfig,
	ReduceCategory,
};
