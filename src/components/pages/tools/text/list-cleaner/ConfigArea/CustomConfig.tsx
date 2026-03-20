/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { MoveHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";


/* ----- PROPS ----- */
interface Props {
	prefix: string;
	setPrefix: (value: string) => void;
	suffix: string;
	setSuffix: (value: string) => void;
}


/* ----- COMPONENT ----- */
function CustomConfig({ prefix, setPrefix, suffix, setSuffix }: Props) {
	return (
		<div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-4 p-4 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 items-center">
			<div className="flex items-center gap-2 px-4 shrink-0">
				<MoveHorizontal size={14} className="text-orange-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Ajouts</span>
			</div>
			<Input
				placeholder="Préfixe (ex: ID_)"
				value={prefix}
				onChange={(e) => setPrefix(e.target.value)}
				className="bg-zinc-950/40 border-zinc-800 h-10 rounded-xl text-xs"
			/>
			<Input
				placeholder="Suffixe (ex: ;)"
				value={suffix}
				onChange={(e) => setSuffix(e.target.value)}
				className="bg-zinc-950/40 border-zinc-800 h-10 rounded-xl text-xs"
			/>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CustomConfig;
