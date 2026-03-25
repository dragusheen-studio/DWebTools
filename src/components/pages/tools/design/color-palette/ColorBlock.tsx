/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { copy } from "@/services/utils/copy";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface IProps {
	hex: string,
	label: string,
	active?: boolean,
	isSelectable?: boolean,
	onClick?: () => void
}


/* ----- COMPONENT ----- */
function ColorBlock({ hex, label, active = false, isSelectable = false, onClick }: IProps) {
	return (
		<div
			onClick={onClick}
			className={cn(
				"relative group flex flex-col gap-3 p-5 rounded-[2rem] border transition-all duration-300",
				isSelectable ? "cursor-pointer" : "cursor-default",
				active ? "bg-blue-500/10 border-blue-500/50 shadow-lg scale-[1.02]" : "bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700"
			)}
		>
			<div className="flex justify-between items-center">
				<Label className="text-[9px] font-black uppercase text-zinc-500 tracking-tighter truncate max-w-[80%]">{label}</Label>
				{active && isSelectable && <div className="bg-blue-500 rounded-full p-0.5"><Check size={10} className="text-white" /></div>}
			</div>
			<div style={{ backgroundColor: hex }} className="w-full h-16 rounded-2xl shadow-inner border border-black/5" />
			<div className="flex items-center justify-between mt-1 px-1">
				<span className="font-mono text-[10px] font-bold text-zinc-400 uppercase">{hex}</span>
				<button onClick={(e) => { e.stopPropagation(); copy(hex, null); }} className="text-zinc-600 hover:text-blue-400"><Copy size={12} /></button>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default ColorBlock;
