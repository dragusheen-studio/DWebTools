/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Sun, Moon } from "lucide-react";
import { INeutral } from "@/types/tools/design/ColorPalette";
import ColorBlock from "./ColorBlock";


/* ----- PROPS ----- */
interface IProps {
	neutrals: INeutral;
}


/* ----- COMPONENT ----- */
function NeutralsSection({ neutrals }: IProps) {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4 px-2">
				<span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 whitespace-nowrap">Structure & Lisibilité</span>
				<div className="h-px flex-1 bg-zinc-800/50" />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2 px-4 text-zinc-500">
						<Sun size={14} />
						<span className="text-[10px] font-bold uppercase tracking-widest">Light Mode</span>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<ColorBlock hex={neutrals.textLight} label="Texte" />
						<ColorBlock hex={neutrals.bgLight} label="Background" />
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2 px-4 text-zinc-500">
						<Moon size={14} />
						<span className="text-[10px] font-bold uppercase tracking-widest">Dark Mode</span>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<ColorBlock hex={neutrals.textDark} label="Texte" />
						<ColorBlock hex={neutrals.bgDark} label="Background" />
					</div>
				</div>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default NeutralsSection;
