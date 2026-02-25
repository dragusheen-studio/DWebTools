/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Clock } from "lucide-react";
import { useMemo } from "react";
import StatCard from "./StatCard";


/* ----- PROPS ----- */
interface TextStatSectionProp {
	text: string;
}


/* ----- COMPONENT ----- */
function TextStatSection({ text }: TextStatSectionProp) {
	const stats = useMemo(() => {
		const trimmedText = text.trim();
		const words = trimmedText ? trimmedText.split(/\s+/).filter(w => w.length > 0) : [];
		const sentences = trimmedText ? trimmedText.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
		const paragraphs = trimmedText ? trimmedText.split(/\n\s*\n/).filter(p => p.trim().length > 0) : [];
		const readTime = Math.ceil(words.length / 200);

		return {
			words: words.length,
			chars: text.length,
			sentences: sentences.length,
			paragraphs: paragraphs.length,
			readTime
		};
	}, [text]);

	return (
		<div className="flex flex-col gap-6">
			<div className="grid grid-cols-2 gap-4">
				<StatCard label="Mots" value={stats.words} />
				<StatCard label="Caractères" value={stats.chars} />
				<StatCard label="Phrases" value={stats.sentences} />
				<StatCard label="Paragraphes" value={stats.paragraphs} />
			</div>

			<div className="p-6 rounded-[2rem] bg-blue-500/5 border border-blue-500/10 flex items-center gap-4 shadow-sm">
				<div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
					<Clock size={24} />
				</div>
				<div>
					<p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/70">Lecture estimée</p>
					<p className="text-xl font-black text-zinc-200">~ {stats.readTime} min</p>
				</div>
			</div>

			<div className="p-6 rounded-[2rem] bg-zinc-900/10 border border-zinc-800/30 border-dashed">
				<p className="text-[10px] text-zinc-600 font-medium italic leading-relaxed">
					L'analyse se fait en temps réel. Le temps de lecture est basé sur une vitesse moyenne de 200 mots par minute.
				</p>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TextStatSection;
