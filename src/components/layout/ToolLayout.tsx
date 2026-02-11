/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { IToolConfig } from "@/types/Tool";
import { ISmallCategoryConfig } from "@/types/Category";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/layout/FadeIn";
import { GetDotColor, GetGlowClass } from "@/config/Bento";


/* ----- PROPS ----- */
interface ToolLayoutProps {
	tool: IToolConfig;
	category: ISmallCategoryConfig;
	children: React.ReactNode;
}


/* ----- COMPONENT ----- */
function ToolLayout({ tool, category, children }: ToolLayoutProps) {
	return (
		<div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
			<header className="flex flex-col gap-8">
				<FadeIn direction="left" delay={0.2} once={true}>
					<div className="flex items-center justify-between w-full">
						<Link
							href="/"
							className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-xs font-black uppercase tracking-widest"
						>
							<div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-all">
								<ArrowLeft size={16} />
							</div>
							Accueil
						</Link>

						<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 shadow-xl">
							<div className={cn("w-2 h-2 rounded-full animate-pulse", GetDotColor(category.color))} />
							<span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
								{category.name}
							</span>
						</div>
					</div>
				</FadeIn>

				<FadeIn direction="left" delay={0.4} once={true}>
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-4">
								<div className={cn(
									"p-4 rounded-3xl bg-zinc-900 border border-zinc-800",
									GetGlowClass(category.color)
								)}>
									<tool.icon size={32} className="text-zinc-200" />
								</div>
								<h1 className="text-5xl font-black tracking-tighter italic text-zinc-100">
									{tool.name}
								</h1>
							</div>
							<p className="text-zinc-500 text-lg italic font-medium max-w-2xl ml-2">
								{tool.description}
							</p>
						</div>
					</div>
				</FadeIn>
			</header>

			<FadeIn direction="left" delay={0.6} once={true}>
				<main className="w-full p-8 rounded-4xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md shadow-2xl min-h-100">
					{children}
				</main>
			</FadeIn>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ToolLayout;
