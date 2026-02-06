/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { IPageConfig } from "@/types/PageData";
import { Home, Info } from "lucide-react";

/* ----- DATAS ----- */
const PagesDatas: IPageConfig[] = [
	{
		name: "Home",
		path: "/",
		icon: Home,
		displayInSidebar: true,
	},
	{
		name: "About",
		path: "/about",
		icon: Info,
		displayInSidebar: true,
	},
];

/* ----- FUNCTIONS ----- */
function GetPagesDatas() {
	return PagesDatas;
}

function GetPagesInSidebar() {
	return PagesDatas.filter(p => p.displayInSidebar);
}

/* ----- EXPORTS ----- */
export { GetPagesDatas, GetPagesInSidebar };
