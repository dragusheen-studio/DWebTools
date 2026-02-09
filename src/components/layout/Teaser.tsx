/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ChevronDown } from "lucide-react";
import { scrollToElement } from "@/services/scroll";


/* ----- PROPS ----- */
interface TeaserProps {
	goTo: string;
	text: string;
	lines?: boolean;
}


/* ----- COMPONENT ----- */
function Teaser({ goTo, text, lines = false }: TeaserProps) {

	return (
		<div
			className="flex items-center justify-around pb-8 cursor-pointer group"
			onClick={() => scrollToElement(goTo)}
		>
			{lines && <div className="h-px w-1/3 bg-zinc-700 group-hover:bg-zinc-700 transition-colors duration-400"></div>}
			<div className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-400 text-sm font-black uppercase tracking-[0.2em] flex flex-col gap-1 justify-center items-center animate-bounce">
				<span>{text}</span>
				<ChevronDown size={20} />
			</div>
			{lines && <div className="h-px w-1/3 bg-zinc-700 group-hover:bg-zinc-700 transition-colors duration-400"></div>}
		</div>
	);
}


/* ----- EXPORT ----- */
export default Teaser;
