/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy, Type, AlignLeft, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/services/utils/copy";
import { useMemo } from "react";


/* ----- PROPS ----- */
interface Props {
	textChunks: string[];
	asHtml: boolean;
}


/* ----- COMPONENT ----- */
function TextDisplay({ textChunks, asHtml }: Props) {
	const finalDisplayString = useMemo(() => {
		if (asHtml)
			return textChunks.map(chunk => `<p>${chunk}</p>`).join("\n");
		return textChunks.join("\n\n");
	}, [textChunks, asHtml]);

	const wordCount = finalDisplayString.split(/\s+/).filter(w => w.length > 0).length;

	return (
		<div className="lg:col-span-2 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl h-full">
				<div className="flex justify-between items-center px-2">
					<div className="flex items-center gap-3">
						<Type size={18} className="text-blue-500" />
						<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Aperçu du texte</span>
					</div>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => copy(finalDisplayString, "Lorem Ipsum copié !")}
						className="text-zinc-500 hover:text-blue-400"
					>
						<Copy size={20} />
					</Button>
				</div>

				<div className="flex-1 bg-zinc-900/20 border border-zinc-800 rounded-[2rem] p-8 overflow-y-auto max-h-150 scrollbar-hide">
					<div className="flex flex-col gap-6 font-serif italic text-lg text-zinc-300 leading-relaxed">
						{textChunks.map((chunk, idx) => (
							<p key={idx} className="relative">
								{asHtml && <span className="text-blue-500/50 mr-1 font-mono text-sm">&lt;p&gt;</span>}
								{chunk}
								{asHtml && <span className="text-blue-500/50 ml-1 font-mono text-sm">&lt;/p&gt;</span>}
							</p>
						))}
					</div>
				</div>

				<div className="flex flex-wrap gap-6 px-4">
					<div className="flex items-center gap-2">
						<AlignLeft size={14} className="text-zinc-600" />
						<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{wordCount} Mots</span>
					</div>
					<div className="flex items-center gap-2">
						<Hash size={14} className="text-zinc-600" />
						<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{finalDisplayString.length} Caractères</span>
					</div>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TextDisplay;
