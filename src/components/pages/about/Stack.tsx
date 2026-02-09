/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
*/

"use client";

/* ----- IMPORTS ----- */
import { Cpu, Code2, Globe, Layout, ShieldCheck, Zap } from "lucide-react";
import Teaser from "@/components/layout/Teaser";
import FadeIn from "@/components/layout/FadeIn";


/* ----- COMPONENT ----- */
function StackSection() {
	const technologies = [
		{ name: "Next.js 15", desc: "Framework React pour des performances optimales et un SSR ultra-rapide.", icon: Zap, color: "blue" },
		{ name: "TypeScript", desc: "Typage statique pour un code robuste, maintenable et sans bugs stupides.", icon: ShieldCheck, color: "blue" },
		{ name: "Tailwind CSS", desc: "Design atomique et utilitaire pour une interface légère et cohérente.", icon: Layout, color: "blue" },
		{ name: "Shadcn/UI", desc: "Composants accessibles et hautement personnalisables.", icon: Cpu, color: "blue" },
		{ name: "Lucide Icons", desc: "Un set d'icônes vectorielles épuré pour une clarté visuelle totale.", icon: Globe, color: "blue" },
		{ name: "Framer Motion", desc: "Des animations fluides pour une expérience utilisateur premium.", icon: Code2, color: "blue" },
	];

	return (
		<section id="stack" className="min-h-screen w-full flex flex-col items-center justify-center px-6">
			<div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl gap-16">
				<div className="flex flex-col gap-4 text-center">
					<h2 className="text-sm font-black uppercase tracking-[0.3em] text-purple-500">
						La Stack
					</h2>
					<p className="text-4xl md:text-5xl font-black tracking-tighter italic text-zinc-200">
						Bâti pour la performance.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
					{technologies.map((tech, index) => (
						<FadeIn direction="up" key={index} delay={0.2 + index / 10}>
							<div
								className="group p-8 rounded-4xl bg-zinc-900/20 border border-zinc-800/50 transition-all duration-500 hover:border-purple-500/50 hover:bg-zinc-900/40 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.3)]"
							>
								<div className="flex items-center gap-4 mb-4">
									<div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:border-purple-500/50 transition-colors">
										<tech.icon size={20} className="text-zinc-500 group-hover:text-purple-400 transition-colors" />
									</div>
									<h3 className="text-xl font-black italic text-zinc-200">{tech.name}</h3>
								</div>
								<p className="text-zinc-500 text-sm leading-relaxed font-medium italic group-hover:text-zinc-400 transition-colors">
									{tech.desc}
								</p>
							</div>
						</FadeIn>
					))}
				</div>
			</div>

			<Teaser goTo="author" text="Rencontrer le créateur" />
		</section>
	);
}


/* ----- EXPORT ----- */
export default StackSection;
