/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import type { LucideIcon } from "lucide-react";


/* ----- INTERFACES ----- */
interface IPageConfig {
	name: string;
	path: string;
	icon: LucideIcon;
	displayInSidebar: boolean;
	category?: string;
}


/* ----- EXPORTS ----- */
export type { IPageConfig };
