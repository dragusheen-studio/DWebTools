/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
*/

"use client";

/* ----- IMPORTS ----- */
import { Frown, Sparkles } from "lucide-react";
import Teaser from "@/components/layout/Teaser";
import FadeIn from "@/components/layout/FadeIn";


/* ----- COMPONENT ----- */
function MissionSection() {
	return (
		<section id="mission" className="min-h-screen w-full flex flex-col items-center justify-center px-6">
			<div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl gap-16">
				<div className="flex flex-col gap-4 text-center">
					<h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500">
						La Mission
					</h2>
					<p className="text-4xl md:text-5xl font-black tracking-tighter italic text-zinc-200">
						Dompter le chaos numérique.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
					<FadeIn direction="left">
						<div className="group p-10 rounded-4xl bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-6 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(251,44,54,0.5)] hover:border-red-500/50">
							<div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-red-500 transition-colors">
								<Frown size={24} />
							</div>
							<h3 className="text-2xl font-black italic text-zinc-300">Le Problème</h3>
							<p className="text-zinc-500 leading-relaxed font-medium italic">
								Marre d'avoir 50 onglets ouverts pour des tâches simples ? Entre les sites bourrés de pubs, les outils qui traquent vos données et ceux qui demandent un compte pour un simple encodage Base64... le quotidien du dev est inutilement complexe.
							</p>
						</div>
					</FadeIn>

					<FadeIn direction="right">
						<div className="group p-10 rounded-4xl bg-zinc-900/40 border border-zinc-800 flex flex-col gap-6 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)] hover:border-green-500/50">
							<div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-green-500 transition-colors">
								<Sparkles size={24} />
							</div>
							<h3 className="text-2xl font-black italic text-zinc-300">La Solution</h3>
							<p className="text-zinc-400 leading-relaxed font-medium italic">
								DWebTools centralise tout au même endroit. Une interface minimaliste, zéro tracking, et une rapidité d'exécution sans pareille. C'est l'extension de votre cerveau, accessible instantanément.
							</p>
						</div>
					</FadeIn>
				</div>
			</div>

			<Teaser goTo="stack" text="Découvrir les technologies utilisées" />
		</section>
	);
}


/* ----- EXPORT ----- */
export default MissionSection;
