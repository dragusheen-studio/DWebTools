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


/* ----- EXPORTS ----- */
export type {
	CategoryColor,
	ICategoryConfig,
};
