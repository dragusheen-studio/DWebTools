/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Settings2 } from "lucide-react";
import { toast } from "sonner";
import { ICronDatas } from "@/types/tools/development/CronTabGen";


/* ----- PROPS ----- */
interface Props {
	setCronData: (v: ICronDatas) => void;
}


/* ----- COMPONENT ----- */
function PreConfig({ setCronData }: Props) {
	const globalPresets: { name: string, val: ICronDatas }[] = [
		{ name: "Toutes les minutes", val: { minutes: "*", hours: "*", days: "*", months: "*", weekDays: "*" } },
		{ name: "Chaque heure", val: { minutes: "0", hours: "*", days: "*", months: "*", weekDays: "*" } },
		{ name: "Chaque jour (00:00)", val: { minutes: "0", hours: "0", days: "*", months: "*", weekDays: "*" } },
		{ name: "Semaine (L-V)", val: { minutes: "0", hours: "0", days: "*", months: "*", weekDays: "1-5" } },
		{ name: "Week-end", val: { minutes: "0", hours: "0", days: "*", months: "*", weekDays: "6,0" } },
		{ name: "1er du mois", val: { minutes: "0", hours: "0", days: "1", months: "*", weekDays: "*" } },
	];

	function handlePreConfigSelect(name: string, preConfig: ICronDatas) {
		setCronData(preConfig);
		toast.info(`${name} appliqué`);
	}

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-6">
			<div className="flex items-center gap-2">
				<Settings2 size={18} className="text-zinc-500" />
				<h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 text-left">Préconfigurations</h4>
			</div>
			<div className="grid grid-cols-1 gap-2">
				{globalPresets.map(p => (
					<button
						key={p.name}
						onClick={() => handlePreConfigSelect(p.name, p.val)}
						className="w-full text-left p-3 rounded-xl bg-zinc-950/40 border border-zinc-800 text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-400 hover:border-blue-500/30 transition-all active:translate-x-1"
					>
						{p.name}
					</button>
				))}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default PreConfig;
