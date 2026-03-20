/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


/* ----- PROPS ----- */
interface Props {
	color: string;
	setColor: (color: string) => void;
}


/* ----- COMPONENT ----- */
function ColorPicker({ color, setColor }: Props) {
	return (
		<div className="flex flex-col gap-3">
			<Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Couleur du fond</Label>
			<div className="flex gap-4 items-center bg-zinc-900/50 p-2 rounded-2xl border border-zinc-800">
				<input
					type="color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
					className="w-10 h-10 rounded-xl bg-transparent border-none cursor-pointer"
				/>
				<Input
					value={color}
					onChange={(e) => setColor(e.target.value)}
					className="bg-transparent border-none font-mono text-xs uppercase text-zinc-400 h-8 p-0 focus-visible:ring-0"
				/>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ColorPicker;
