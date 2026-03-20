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
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	text: string;
	setText: (text: string) => void;
	title: string;
	color: string;
	placeholder: string;
}


/* ----- COMPONENT ----- */
function TextArea({ text, setText, title, color, placeholder }: Props) {
	return (
		<div className="flex flex-col gap-4 p-6 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-xl">
			<div className="flex justify-between items-center px-2">
				<div className="flex items-center gap-2">
					<div className={cn("w-2 h-2 rounded-full", color)} />
					<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{title}</span>
				</div>
				<Button variant="ghost" size="icon-xs" onClick={() => setText("")} className="text-zinc-600 hover:text-red-400">
					<Trash2 size={14} />
				</Button>
			</div>
			<Textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder={placeholder}
				className="min-h-60 max-h-150 bg-zinc-900/30 border-zinc-800 rounded-2xl p-4 font-mono text-xs resize-none focus-visible:ring-0"
			/>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TextArea;
