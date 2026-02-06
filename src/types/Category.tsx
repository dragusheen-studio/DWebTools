/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { LucideIcon } from "lucide-react";
import { IPageConfig } from "@/types/PageData";


/* ----- INTERFACES ----- */
interface ICategoryConfig {
	name: string;
	icon: LucideIcon;
	tools: IPageConfig[];
}


/* ----- EXPORTS ----- */
export type { ICategoryConfig };
