/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	colors: Record<string, string>;
	mode: "light" | "dark";
}


/* ----- COMPONENT ----- */
function Pricing({ colors, mode }: Props) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const primary = colors.primary || "#3b82f6";
	const bg = (mode === "light") ? colors.bgLight || "#ffffff" : colors.bgDark || "#09090b";
	const text = (mode === "light") ? colors.textLight || "#18181b" : colors.textDark || "#fafafa";
	const acc1 = colors.accent_1 || primary;

	const borderColor = mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
	const cardBg = mode === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)";

	const plans = [
		{
			name: "Starter",
			price: "0",
			icon: Zap,
			features: ["Accès limité", "1 Projet", "Support commu"],
			highlight: false
		},
		{
			name: "Pro",
			price: "29",
			icon: Crown,
			features: ["Projets illimités", "Analytics Avancés", "Support 24/7", "Export HD"],
			highlight: true
		},
		{
			name: "Enterprise",
			price: "99",
			icon: Shield,
			features: ["SLA Garanti", "Custom Branding", "Serveur dédié"],
			highlight: false
		}
	];

	return (
		<div className="w-full max-w-5xl flex flex-col gap-10">
			<div className="text-center space-y-2">
				<h3 className="text-4xl font-black tracking-tighter italic" style={{ color: text }}>Choisissez votre plan</h3>
				<p className="text-sm opacity-50 font-bold uppercase tracking-[0.3em]" style={{ color: text }}>Simple & Transparent</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
				{plans.map((plan, i) => {
					const isHovered = hoveredIndex === i;
					const isOthersHovered = hoveredIndex !== null && hoveredIndex !== i;

					return (
						<div
							key={plan.name}
							onMouseEnter={() => setHoveredIndex(i)}
							onMouseLeave={() => setHoveredIndex(null)}
							className={cn(
								"relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col gap-8",
								plan.highlight ? "py-12 shadow-2xl z-10" : "z-0",
								isOthersHovered ? "opacity-40 scale-95 blur-[1px]" : "opacity-100 scale-100"
							)}
							style={{
								backgroundColor: plan.highlight ? primary : cardBg,
								borderColor: plan.highlight ? primary : (isHovered ? acc1 : borderColor),
								color: plan.highlight ? bg : text,
								boxShadow: plan.highlight ? `0 20px 40px -15px ${primary}50` : 'none'
							}}
						>
							{plan.highlight && (
								<div
									className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
									style={{ backgroundColor: text, color: primary }}
								>
									Recommandé
								</div>
							)}

							<div className="space-y-4">
								<div
									className="w-12 h-12 rounded-2xl flex items-center justify-center border"
									style={{
										backgroundColor: plan.highlight ? "rgba(255,255,255,0.2)" : `${primary}15`,
										borderColor: plan.highlight ? "rgba(255,255,255,0.3)" : `${primary}30`
									}}
								>
									<plan.icon size={24} style={{ color: plan.highlight ? bg : primary }} />
								</div>
								<div className="space-y-1 text-left">
									<h4 className="text-xl font-black uppercase tracking-tighter">{plan.name}</h4>
									<div className="flex items-baseline gap-1">
										<span className="text-4xl font-black">{plan.price}€</span>
										<span className="text-xs opacity-60 font-bold">/mois</span>
									</div>
								</div>
							</div>

							<ul className="space-y-4 flex-1">
								{plan.features.map((feat, j) => (
									<li key={j} className="flex items-center gap-3 text-sm font-medium">
										<div
											className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
											style={{ backgroundColor: plan.highlight ? bg : `${acc1}20` }}
										>
											<Check size={12} style={{ color: plan.highlight ? primary : acc1 }} />
										</div>
										<span className="opacity-80">{feat}</span>
									</li>
								))}
							</ul>

							<button
								className="w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
								style={{
									backgroundColor: plan.highlight ? bg : primary,
									color: plan.highlight ? primary : bg
								}}
							>
								Commencer
								<ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Pricing;
