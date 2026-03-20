/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


/* ----- PROPS ----- */
interface Props {
	input: string;
	setInput: (value: string) => void;
}


/* ----- COMPONENT ----- */
function InputArea({ input, setInput }: Props) {
	return (
		<div className="h-150 p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
			<div className="flex justify-between items-center">
				<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Input Liste</span>
				<Button variant="ghost" size="icon" onClick={() => setInput("")} className="text-zinc-600 hover:text-red-400">
					<Trash2 size={18} />
				</Button>
			</div>
			<div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden">
				<Textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					spellCheck={false}
					placeholder="Collez vos données ici..."
					className="h-full bg-transparent border-none p-6 font-mono text-xs resize-none focus-visible:ring-0 scrollbar-hide"
				/>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default InputArea;
