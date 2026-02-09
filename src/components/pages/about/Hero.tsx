/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Target, Cpu, UserCircle } from "lucide-react";
import { scrollToElement } from "@/services/scroll";
import Teaser from "@/components/layout/Teaser";
import FadeIn from "@/components/layout/FadeIn";


/* ----- COMPONENT ----- */
function HeroSection() {
	const Buttons = [
		{ label: "Problème / Solution", icon: Target, id: "mission" },
		{ label: "Stack Technique", icon: Cpu, id: "stack" },
		{ label: "Crafted By", icon: UserCircle, id: "author" }
	];

	return (
		<FadeIn>
			<section className="flex flex-col min-h-screen w-full items-center justify-center text-center">
				<div className="flex flex-col flex-1 justify-center gap-10">
					<div className="flex flex-col gap-4">
						<h1 className="text-7xl md:text-8xl font-black tracking-tighter italic">
							<span className="text-zinc-200">À propos de </span>
							<span className="text-zinc-500 font-extralight">DWebTools</span>
						</h1>
						<p className="text-zinc-400 text-2xl md:text-3xl font-medium italic">
							"Pourquoi chercher quand tout est là ?"
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 mt-8">
						{Buttons.map((btn) => (
							<button
								key={btn.id}
								onClick={() => scrollToElement(btn.id)}
								className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300 group"
							>
								<btn.icon size={18} className="text-zinc-500 group-hover:text-zinc-500 transition-colors" />
								<span className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200">
									{btn.label}
								</span>
							</button>
						))}
					</div>
				</div>

				<Teaser goTo="mission" text="Découvrir le problème que DWebTools résoud" />
			</section>
		</FadeIn>

	);
}


/* ----- EXPORT ----- */
export default HeroSection;
