/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	colors: Record<string, string>;
	mode: "light" | "dark";
}


/* ----- COMPONENT ----- */
function Dashboard({ colors, mode }: Props) {
	const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

	const primary = colors.primary || "#3b82f6";
	const bg = (mode === "light") ? colors.bgLight || "#ffffff" : colors.bgDark || "#09090b";
	const text = (mode === "light") ? colors.textLight || "#18181b" : colors.textDark || "#fafafa";
	const acc1 = colors.accent_1 || primary;
	const acc2 = colors.accent_2 || "#f59e0b";

	const stats = [
		{ id: 0, label: "Revenus", val: "12,843€", icon: DollarSign, color: primary },
		{ id: 1, label: "Utilisateurs", val: "1,204", icon: Users, color: acc1 },
		{ id: 2, label: "Croissance", val: "+24%", icon: TrendingUp, color: acc2 },
	];

	const borderColor = mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)";
	const cardBg = mode === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.05)";

	return (
		<div
			style={{ backgroundColor: bg, color: text, borderColor: borderColor }}
			className="w-full max-w-4xl rounded-[2.5rem] p-10 border shadow-2xl space-y-10 text-left transition-all duration-500"
		>
			<div className="flex justify-between items-center">
				<div className="space-y-1">
					<h3 className="text-3xl font-black tracking-tighter italic">Analytics Hub</h3>
					<p className="text-xs opacity-50 font-medium uppercase tracking-widest text-zinc-500">Visual Identity Testing</p>
				</div>
				<div
					className="h-12 w-12 rounded-2xl flex items-center justify-center border transition-all hover:rotate-12"
					style={{ backgroundColor: `${primary}15`, borderColor: `${primary}30` }}
				>
					<BarChart3 size={22} style={{ color: primary }} />
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6" onMouseLeave={() => setHoveredGroup(null)}>
				{stats.map((stat) => (
					<div
						key={stat.id}
						onMouseEnter={() => setHoveredGroup(stat.id)}
						className={cn(
							"p-6 rounded-3xl border transition-all duration-300 cursor-default",
							hoveredGroup !== null && hoveredGroup !== stat.id ? "opacity-40 scale-95" : "opacity-100 scale-100 shadow-xl"
						)}
						style={{
							backgroundColor: cardBg,
							borderColor: hoveredGroup === stat.id ? stat.color : borderColor
						}}
					>
						<div className="flex justify-between items-start mb-4">
							<div
								className="p-2 rounded-lg transition-colors"
								style={{ backgroundColor: `${stat.color}${hoveredGroup === stat.id ? '30' : '15'}` }}
							>
								<stat.icon size={18} style={{ color: stat.color }} />
							</div>
							<ArrowUpRight size={16} className="opacity-20" />
						</div>
						<div>
							<p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">{stat.label}</p>
							<p className="text-2xl font-black tracking-tight">{stat.val}</p>
						</div>
					</div>
				))}
			</div>

			<div
				className="h-48 w-full rounded-3xl border flex items-end justify-between p-8 gap-3 transition-all duration-500"
				style={{ backgroundColor: cardBg, borderColor: borderColor }}
			>
				{[40, 70, 45, 90, 65, 80, 50, 95, 60, 75].map((h, i) => {
					const groupId = i % 3; // On associe chaque barre à un groupe de stat
					const isHighlighted = hoveredGroup === null || hoveredGroup === groupId;
					const groupColor = groupId === 0 ? primary : (groupId === 1 ? acc1 : acc2);

					return (
						<div
							key={i}
							onMouseEnter={() => setHoveredGroup(groupId)}
							onMouseLeave={() => setHoveredGroup(null)}
							className="flex-1 rounded-t-xl transition-all duration-300 cursor-pointer"
							style={{
								height: `${h}%`,
								backgroundColor: groupColor,
								opacity: isHighlighted ? 1 : 0.2,
								transform: isHighlighted && hoveredGroup !== null ? 'scaleY(1.05)' : 'scaleY(1)',
								filter: isHighlighted ? 'none' : 'grayscale(0.5)'
							}}
						/>
					);
				})}
			</div>

			<div className="flex justify-end gap-4 pt-4">
				<button
					className={cn(
						"px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all active:scale-95",
						mode === "light" ? "hover:bg-black/5" : "hover:bg-white/5"
					)}
					style={{ borderColor: borderColor }}
				>
					Exporter
				</button>
				<button
					className="px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg hover:brightness-110"
					style={{
						backgroundColor: primary,
						color: mode === "light" ? colors.bgLight || "#fff" : colors.bgDark || "#000",
						boxShadow: `0 10px 30px -10px ${primary}80`
					}}
				>
					Mettre à jour
				</button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Dashboard;
