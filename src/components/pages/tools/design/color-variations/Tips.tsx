/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Sparkles, TriangleAlert } from "lucide-react";


/* ----- COMPONENT ----- */
function Tips() {
	return (
		<div className="flex flex-col gap-4">
			<div className="px-6 py-4 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center gap-4">
				<Sparkles className="text-blue-400 shrink-0" size={20} />
				<p className="text-[11px] text-zinc-500 italic leading-relaxed text-left">
					Astuce : Cliquez sur une couleur pour copier son code hexadécimal.
				</p>
			</div>
			<div className="px-6 py-4 rounded-full bg-orange-500/5 border border-orange-500/10 flex items-center gap-4">
				<TriangleAlert className="text-orange-400 shrink-0" size={20} />
				<p className="text-[11px] text-zinc-500 italic leading-relaxed text-left">
					Attention : Les harmonies sont calculées via la roue chromatique HSL pour garantir un équilibre visuel. Il n'est pas question, ici, de créativité mais de mathématiques.
				</p>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Tips;
