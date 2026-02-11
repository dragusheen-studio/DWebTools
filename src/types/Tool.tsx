/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import type { LucideProps } from "lucide-react";
import { ElementType } from "react";
import { IconType } from "react-icons";


/* ----- INTERFACES ----- */
type ToolSize = "small" | "medium" | "large";

interface IToolConfig {
	name: string;
	path: string;
	description: string;
	icon: ElementType<LucideProps> | IconType;
	size: ToolSize;
	comingSoon: boolean;
}


/* ----- EXPORTS ----- */
export type {
	ToolSize,
	IToolConfig,
};
