/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- PROPS ----- */
interface Props {
	count: number;
	removed: number;
}


/* ----- COMPONENT ----- */
function FooterStat({ count, removed }: Props) {
	return (
		<div className="flex items-center justify-between px-2 pt-2 border-t border-zinc-800/50">
			<div className="flex gap-6">
				<div className="flex flex-col">
					<span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Lignes Finales</span>
					<span className="text-xs font-bold text-zinc-300">{count}</span>
				</div>
				{removed > 0 && (
					<div className="flex flex-col">
						<span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Nettoyées</span>
						<span className="text-xs font-bold text-emerald-500">-{removed}</span>
					</div>
				)}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default FooterStat;
