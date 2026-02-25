/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

import { copy } from "@/services/utils/copy";
/* ----- IMPORTS ----- */
import { Trash2, Copy } from "lucide-react";


/* ----- PROPS ----- */
interface TextAreaSectionProp {
	text: string;
	setText: (text: string) => void;
}


/* ----- COMPONENT ----- */
function TextAreaSection({ text, setText }: TextAreaSectionProp) {
	return (
		<div className="lg:col-span-2 flex flex-col gap-4">
			<div className="relative group">
				<textarea
					className="w-full p-8 bg-zinc-950/40 border border-zinc-800/80 rounded-[2rem] resize-none focus:outline-none focus:border-blue-500/50 transition-all min-h-112.5 text-zinc-300 font-medium leading-relaxed"
					placeholder="Collez ou tapez votre texte ici..."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>

			<div className="flex flex-wrap gap-3">
				<button
					onClick={() => setText("")}
					className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-500/30 transition-all text-xs font-bold uppercase tracking-widest"
				>
					<Trash2 size={14} /> Effacer
				</button>
				<button
					onClick={() => copy(text, "Texte copié !")}
					className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all text-xs font-bold uppercase tracking-widest"
				>
					<Copy size={14} /> Copier
				</button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TextAreaSection;
