/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { ChangeObject } from "diff";
import { Columns, CheckCircle2, AlertCircle } from "lucide-react";


/* ----- PROPS ----- */
interface Props {
	diffResult: ChangeObject<string>[];
}


/* ----- COMPONENT ----- */
function Header({ diffResult }: Props) {
	const stats = useMemo(() => {
		const added = diffResult.filter(c => c.added).length;
		const removed = diffResult.filter(c => c.removed).length;
		return { added, removed };
	}, [diffResult]);

	return (
		<div className="flex justify-between items-center px-2">
			<div className="flex items-center gap-3">
				<Columns size={18} className="text-blue-500" />
				<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Comparaison visuelle</span>
			</div>

			<div className="flex gap-4">
				<div className="flex items-center gap-1.5 text-[9px] font-black uppercase text-red-500/80">
					<AlertCircle size={12} /> {stats.removed} Suppressions
				</div>
				<div className="flex items-center gap-1.5 text-[9px] font-black uppercase text-emerald-500/80">
					<CheckCircle2 size={12} /> {stats.added} Ajouts
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Header;
