/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Timer, Cpu, Zap } from "lucide-react";


/* ----- PROPS ----- */
interface Props {
	password: string;
}


/* ----- COMPONENT ----- */
function CrackTimeDisplay({ password }: Props) {
	const calculateCrackTime = (password: string) => {
		if (!password) return { entropy: 0, scenarios: [] };

		let poolSize = 0;
		if (/[a-z]/.test(password)) poolSize += 26;
		if (/[A-Z]/.test(password)) poolSize += 26;
		if (/[0-9]/.test(password)) poolSize += 10;
		if (/[^a-zA-Z0-9]/.test(password)) poolSize += 32;

		const entropy = poolSize > 0 ? Math.floor(password.length * Math.log2(poolSize)) : 0;

		const scenarios = [
			{ name: "PC Domestique", speed: 1e8, label: "100 Millions / sec" },
			{ name: "Supercalculateur", speed: 1e12, label: "1 Trillion / sec" }
		];

		const results = scenarios.map(s => {
			const seconds = Math.pow(2, entropy) / s.speed;
			return {
				...s,
				timeDisplay: formatDuration(seconds)
			};
		});

		return { entropy, results };
	};

	function formatDuration(seconds: number) {
		if (seconds < 1) return "Instantané";
		if (seconds < 60) return `${Math.floor(seconds)} secondes`;
		if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes`;
		if (seconds < 86400) return `${Math.floor(seconds / 3600)} heures`;
		if (seconds < 31536000) return `${Math.floor(seconds / 86400)} jours`;
		if (seconds < 3153600000) return `${Math.floor(seconds / 31536000)} ans`;
		return "Des siècles";
	}

	const stats = useMemo(() => calculateCrackTime(password), [password]);

	if (!password) return null;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 animate-in fade-in slide-in-from-top-2">
			{stats.results!.map((res, i) => (
				<div key={res.name} className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 flex flex-col gap-2">
					<div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
						<div className="flex items-center gap-2">
							{i === 0 ? <Cpu size={12} /> : <Zap size={12} className="text-yellow-500" />}
							{res.name}
						</div>
						<span>{res.label}</span>
					</div>
					<div className="flex items-center gap-3">
						<Timer size={16} className="text-blue-400" />
						<span className="text-sm font-bold text-zinc-200">{res.timeDisplay}</span>
					</div>
				</div>
			))}
			<div className="md:col-span-2 text-center text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
				Entropie mesurée : {stats.entropy} bits
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CrackTimeDisplay;
