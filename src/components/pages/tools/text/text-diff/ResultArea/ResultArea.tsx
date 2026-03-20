/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { diffLines } from "diff";
import Header from "./Header";
import DisplayDiff from "./DisplayDiff";


/* ----- PROPS ----- */
interface Props {
	textA: string;
	textB: string;
}


/* ----- COMPONENT ----- */
function ResultArea({ textA, textB }: Props) {
	const diffResult = useMemo(() => {
		if (!textA && !textB) return [];
		return diffLines(textA, textB);
	}, [textA, textB]);

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-2xl flex flex-col gap-6">
			<Header diffResult={diffResult} />

			<div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 font-mono text-xs overflow-y-auto max-h-150 scrollbar-hide">
				{diffResult.length > 0 ? (
					<DisplayDiff diffResult={diffResult} />
				) : (
					<div className="h-40 flex items-center justify-center text-zinc-600 italic text-sm">
						Entrez du texte dans les deux zones pour comparer...
					</div>
				)}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ResultArea;
