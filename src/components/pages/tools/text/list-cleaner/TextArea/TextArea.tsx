/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import InputArea from "./InputArea";
import FooterStat from "./FooterStat";
import CopyButton from "./CopyButton";


/* ----- PROPS ----- */
interface Props {
	input: string;
	setInput: (value: string) => void;
	output: string;
	count: number;
	removed: number;
}


/* ----- COMPONENT ----- */
function TextArea({ input, setInput, output, count, removed }: Props) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
			<InputArea input={input} setInput={setInput} />

			<div className="h-150 p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
				<CopyButton result={output} />
				<div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 font-mono text-xs text-zinc-400 overflow-y-auto scrollbar-hide">
					{output ? (
						<pre className="whitespace-pre-wrap">{output}</pre>
					) : (
						<span className="opacity-20 italic text-[10px]">Résultat...</span>
					)}
				</div>
				<FooterStat count={count} removed={removed} />
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TextArea;
