/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IToolConfig } from "@/types/Tool";
import { GetBgGradient, GetDotColor, GetGlowClass, GetSizeClass } from "@/config/Bento";
import { CategoryColor } from "@/types/Category";


/* ----- INTERFACE ----- */
interface BentoCardProps extends IToolConfig {
	color: CategoryColor;
}


/* ----- COMPONENT ----- */
function BentoCard({ name, description, icon: Icon, path, size, color, comingSoon }: BentoCardProps) {
	const CardWrapper = comingSoon ? "div" : Link;

	return (
		<CardWrapper
			href={path}
			className={cn(
				"group relative flex flex-col justify-between p-8 rounded-4xl transition-all duration-500",
				"bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md h-full w-full",
				GetSizeClass(size),
				comingSoon ? "opacity-40 cursor-not-allowed" : "hover:-translate-y-2 cursor-pointer " + GetGlowClass(color)
			)}
		>
			<div className={cn(
				"absolute inset-0 transition-all duration-500 rounded-4xl opacity-0 group-hover:opacity-100 pointer-events-none",
				GetBgGradient(color)
			)} />

			<div className="flex justify-between items-start w-full relative z-10">
				<div className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800 group-hover:border-zinc-700 transition-colors shadow-inner">
					<Icon className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
				</div>

				{comingSoon ? (
					<span className="text-[8px] font-black uppercase tracking-tighter px-2 py-1 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
						Soon
					</span>
				) : (
					<div className={cn("w-2.5 h-2.5 rounded-full transition-transform duration-500 group-hover:scale-125", GetDotColor(color))} />
				)}

			</div>

			<div className="flex flex-col gap-3 relative z-10">
				<h3 className="text-2xl font-black tracking-tight text-zinc-200">
					{name}
				</h3>
				<p className="text-zinc-500 text-sm italic font-medium leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors">
					{description}
				</p>
			</div>

			<div className="absolute inset-0 border border-white/3 rounded-4xl pointer-events-none group-hover:border-white/8 transition-colors" />
		</CardWrapper>
	);
}


/* ----- EXPORT ----- */
export default BentoCard;
