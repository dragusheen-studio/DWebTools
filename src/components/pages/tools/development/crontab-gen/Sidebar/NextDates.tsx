/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";
import cronParser from "cron-parser";


/* ----- PROPS ----- */
interface Props {
	cronExpression: string;
	setError: (v: string | null) => void;
}


/* ----- COMPONENT ----- */
function NextDates({ cronExpression, setError }: Props) {
	const [nextDates, setNextDates] = useState<string[]>([]);

	useEffect(() => {
		try {
			const interval = cronParser.parse(cronExpression);
			const dates = [];
			for (let i = 0; i < 5; i++) dates.push(interval.next().toString());
			setNextDates(dates);
			setError(null);
		} catch (err) {
			setError("Erreur de syntaxe");
			setNextDates([]);
		}
	}, [cronExpression]);

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-6">
			<div className="flex items-center gap-2">
				<Calendar size={18} className="text-zinc-500" />
				<h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 text-left">Occurrences</h4>
			</div>
			<div className="flex flex-col gap-3">
				{nextDates.length > 0 ? nextDates.map((date, i) => (
					<div key={i} className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/50 animate-in fade-in slide-in-from-right duration-300" style={{ animationDelay: `${i * 50}ms` }}>
						<span className="text-[10px] font-mono text-zinc-400">
							{new Date(date).toLocaleString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
						</span>
						<Clock size={12} className="text-zinc-700" />
					</div>
				)) : <p className="text-[10px] text-zinc-600 italic">Configuration requise</p>}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default NextDates;
