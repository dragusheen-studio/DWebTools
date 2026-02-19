/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Progress } from "@/components/ui/progress";
import { ICharsetStat } from "@/types/tools/security/PasswordCheck";


/* ----- PROPS ----- */
interface CharsetStatProps {
	stat: ICharsetStat
}


/* ----- COMPONENT ----- */
function CharsetStat({ stat }: CharsetStatProps) {
	return (
		<div
			className="p-5 rounded-[2rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-3 transition-all hover:border-zinc-700"
		>
			<div className="flex justify-between items-end">
				<div className="flex flex-col">
					<span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-0.5">Catégorie</span>
					<h4 className="text-[11px] font-bold text-zinc-300 uppercase tracking-tighter">{stat.name}</h4>
				</div>
				<div className="flex flex-col items-end">
					<span className="text-lg font-mono font-black text-zinc-200 leading-none">{stat.count}</span>
					<span className="text-[8px] font-bold text-zinc-600 uppercase">Trouvés</span>
				</div>
			</div>

			<Progress
				value={stat.score}
				className="h-1 bg-zinc-800/50"
				indicatorClassName={stat.color}
			/>
		</div>
	);
}

/* ----- EXPORT ----- */
export default CharsetStat;
