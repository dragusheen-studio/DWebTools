/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Play, ArrowRight, Sparkles, Star } from "lucide-react";


/* ----- PROPS ----- */
interface Props {
	colors: Record<string, string>;
	mode: "light" | "dark";
}


/* ----- COMPONENT ----- */
function LandingHero({ colors, mode }: Props) {
	const primary = colors.primary || "#3b82f6";
	const text = (mode === "light") ? colors.textLight || "#18181b" : colors.textDark || "#fafafa";
	const acc2 = colors.accent_2 || "#f59e0b";

	return (
		<div className="w-full max-w-4xl flex flex-col items-center text-center gap-8 py-10">
			<div
				className="flex items-center gap-2 px-4 py-2 rounded-full border animate-bounce"
				style={{ backgroundColor: `${primary}10`, borderColor: `${primary}30` }}
			>
				<Sparkles size={14} style={{ color: primary }} />
				<span className="text-[10px] font-black uppercase tracking-widest" style={{ color: primary }}>
					Nouveauté : Version 2.0 disponible
				</span>
			</div>

			<h1
				className="text-5xl md:text-7xl font-black tracking-tighter italic leading-[0.9]"
				style={{ color: text }}
			>
				Propulsez votre <br />
				<span style={{ color: primary }}>Créativité</span> à l'infini.
			</h1>

			<p
				className="text-lg md:text-xl font-medium opacity-60 max-w-xl leading-relaxed"
				style={{ color: text }}
			>
				Une plateforme unifiée pour concevoir, tester et déployer vos interfaces
				en un temps record. La seule limite est votre imagination.
			</p>

			<div className="flex flex-wrap justify-center gap-4 mt-4">
				<button
					className="group px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center gap-2 shadow-2xl"
					style={{
						backgroundColor: primary,
						color: mode === "light" ? colors.bgLight || "#fff" : colors.bgDark || "#000",
						boxShadow: `0 20px 40px -10px ${primary}60`
					}}
				>
					Démarrer gratuitement
					<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
				</button>

				<button
					className="px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] border transition-all hover:bg-zinc-500/10 active:scale-95 flex items-center gap-2"
					style={{ borderColor: `${text}20`, color: text }}
				>
					<Play size={16} fill="currentColor" />
					Voir la démo
				</button>
			</div>

			<div className="flex flex-col items-center gap-4 mt-10">
				<div className="flex -space-x-2">
					{[1, 2, 3, 4, 5].map((i) => (
						<div
							key={i}
							className="w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold overflow-hidden"
							style={{ borderColor: mode === "light" ? colors.bgLight : colors.bgDark }}
						>
							<img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
						</div>
					))}
				</div>
				<div className="flex items-center gap-2">
					<div className="flex gap-0.5">
						{[1, 2, 3, 4, 5].map((i) => (
							<Star key={i} size={14} fill={acc2} stroke="none" />
						))}
					</div>
					<span className="text-[10px] font-bold uppercase tracking-widest opacity-40" style={{ color: text }}>
						Approuvé par +10k utilisateurs
					</span>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default LandingHero;
