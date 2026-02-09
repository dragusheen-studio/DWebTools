/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import type { LucideIcon } from "lucide-react";


/* ----- INTERFACES ----- */
type ToolSize = "small" | "medium" | "large";

interface IToolConfig {
	name: string;
	path: string;
	description: string;
	icon: LucideIcon;
	size: ToolSize;
}


/* ----- EXPORTS ----- */
export type {
	ToolSize,
	IToolConfig,
};
