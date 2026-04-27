/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ArrowUp, ArrowRight, LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	rows: number;
	setRows: (v: number) => void;
	cols: number;
	setCols: (v: number) => void;
	icon: LucideIcon;
	border?: string;
	disabled?: boolean;
}


/* ----- COMPONENT ----- */
function SizeSetter({ rows, setRows, cols, setCols, icon: Icon, border = "", disabled = false }: Props) {
	return (
		<div className="flex items-center justify-center gap-4 py-2">
			<div className="relative flex flex-col items-center">
				<div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
					<ArrowUp size={10} className="text-zinc-700" />
					<Input disabled={disabled} type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value) || 1)} className="w-14 h-8 text-[10px] text-center bg-zinc-900 border-zinc-800 p-1 focus-visible:ring-blue-500/20" />
					<span className="text-[8px] font-black text-zinc-700 uppercase">Rangs</span>
				</div>
				<div className={cn("w-16 h-16 rounded-lg border-2 border-zinc-800 bg-zinc-900/20 flex items-center justify-center text-zinc-800", border)}>
					<Icon size={20} />
				</div>
				<div className="absolute -bottom-10 flex items-center gap-1">
					<span className="text-[8px] font-black text-zinc-700 uppercase">Cols</span>
					<Input disabled={disabled} type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value) || 1)} className="w-14 h-8 text-[10px] text-center bg-zinc-900 border-zinc-800 p-1 focus-visible:ring-blue-500/20" />
					<ArrowRight size={10} className="text-zinc-700" />
				</div>
			</div>
		</div >
	);
}


/* ----- EXPORT ----- */
export default SizeSetter;
