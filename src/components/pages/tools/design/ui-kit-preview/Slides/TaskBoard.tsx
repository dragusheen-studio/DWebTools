/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { CheckCircle2, Circle, Clock, MessageSquare, Paperclip, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	colors: Record<string, string>;
	mode: "light" | "dark";
}


/* ----- COMPONENT ----- */
function TaskBoard({ colors, mode }: Props) {
	const primary = colors.primary || "#3b82f6";
	const text = (mode === "light") ? colors.textLight || "#18181b" : colors.textDark || "#fafafa";
	const acc1 = colors.accent_1 || primary;
	const acc2 = colors.accent_2 || "#f59e0b";

	const borderColor = mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";
	const cardBg = mode === "light" ? "#ffffff" : "rgba(255,255,255,0.03)";

	const tasks = [
		{ id: 1, title: "Refonte de l'identité", tag: "Design", color: primary, done: true, members: 3 },
		{ id: 2, title: "Optimisation des performances", tag: "Tech", color: acc1, done: false, members: 2 },
		{ id: 3, title: "Rédaction de la documentation", tag: "Admin", color: acc2, done: false, members: 1 },
	];

	return (
		<div className="w-full max-w-2xl flex flex-col gap-8 text-left">
			<div className="flex justify-between items-end px-2">
				<div className="space-y-1">
					<h3 className="text-3xl font-black tracking-tighter italic" style={{ color: text }}>Projets Actifs</h3>
					<p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40" style={{ color: text }}>Gestion des tâches hebdomadaires</p>
				</div>
				<div className="flex -space-x-3">
					{[1, 2, 3, 4].map((i) => (
						<div
							key={i}
							className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold"
							style={{ backgroundColor: i === 4 ? primary : '', color: i === 4 ? '#fff' : '' }}
						>
							{i === 4 ? "+2" : `U${i}`}
						</div>
					))}
				</div>
			</div>

			<div className="space-y-4">
				{tasks.map((task) => (
					<div
						key={task.id}
						className="group p-6 rounded-[2rem] border transition-all duration-300 hover:shadow-xl hover:translate-x-2"
						style={{ backgroundColor: cardBg, borderColor: borderColor }}
					>
						<div className="flex items-start justify-between gap-6">
							<div className="flex items-start gap-4">
								<button className="mt-1 transition-transform active:scale-75">
									{task.done ?
										<CheckCircle2 size={22} style={{ color: primary }} /> :
										<Circle size={22} className="opacity-20" style={{ color: text }} />
									}
								</button>
								<div className="space-y-2">
									<div
										className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest w-fit"
										style={{ backgroundColor: `${task.color}15`, color: task.color }}
									>
										{task.tag}
									</div>
									<h4 className={cn(
										"text-lg font-bold tracking-tight transition-all",
										task.done && "opacity-30 line-through"
									)} style={{ color: text }}>
										{task.title}
									</h4>
								</div>
							</div>
							<button className="opacity-20 hover:opacity-100 transition-opacity" style={{ color: text }}>
								<MoreHorizontal size={20} />
							</button>
						</div>

						<div className="mt-6 pt-6 border-t flex justify-between items-center" style={{ borderColor: borderColor }}>
							<div className="flex gap-4 opacity-40">
								<div className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: text }}>
									<MessageSquare size={14} /> 4
								</div>
								<div className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: text }}>
									<Paperclip size={14} /> 2
								</div>
							</div>
							<div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-500/5 border" style={{ borderColor: borderColor }}>
								<Clock size={12} className="opacity-40" style={{ color: text }} />
								<span className="text-[10px] font-bold opacity-60" style={{ color: text }}>24 Mar.</span>
							</div>
						</div>
					</div>
				))}
			</div>

			<button
				className="w-full py-4 rounded-2xl border-2 border-dashed font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-zinc-500/5 active:scale-[0.98]"
				style={{ borderColor: borderColor, color: text, opacity: 0.5 }}
			>
				+ Ajouter une nouvelle tâche
			</button>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TaskBoard;
