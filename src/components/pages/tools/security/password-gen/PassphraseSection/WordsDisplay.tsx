/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- PROPS ----- */
interface WordsDisplayProps {
	words: string[];
}

/* ----- COMPONENT ----- */
function WordsDisplay({ words }: WordsDisplayProps) {
	return (
		<div className="flex flex-wrap justify-center gap-3 p-10 bg-zinc-950/60 border border-zinc-800 rounded-[2rem] relative group min-h-35 items-center">
			{words.map((word, i) => (
				<span key={i} className="text-2xl md:text-4xl font-black text-zinc-200 tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-500">
					{word}
					{i < words.length - 1 && <span className="text-zinc-800 mx-4">·</span>}
				</span>
			))}
		</div>
	);
}


/* ----- EXPORT ----- */
export default WordsDisplay;
