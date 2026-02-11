/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- PROPS ----- */
interface StatCardProps {
	label: string;
	value: number | string;
}


/* ----- COMPONENT ----- */
function StatCard({ label, value }: StatCardProps) {
	return (
		<div className="p-4 rounded-2xl bg-zinc-950/40 border border-zinc-800/50 flex flex-col gap-1">
			<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</span>
			<span className="text-2xl font-black text-zinc-100">{value}</span>
		</div>
	);
}


/* ----- EXPORT ----- */
export default StatCard;
