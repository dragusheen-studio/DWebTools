/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import React from "react";
import { ChevronDown, Target, Cpu, UserCircle, LifeBuoy } from "lucide-react";
import { scrollToElement } from "@/services/scroll";

/* ----- COMPONENT ----- */
function AboutPage() {
	return (
		<div className="flex flex-col w-full">

			{/* --- HERO SECTION (FULL PAGE) --- */}
			<section id="hero" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
				<div className="h-96 w-full max-w-4xl bg-zinc-900/20 border border-zinc-800 border-dashed rounded-4xl flex items-center justify-center text-zinc-600 italic">
					Hero
				</div>
			</section>

			{/* --- SECTION : MISSION (Problème / Solution) --- */}
			<section id="mission" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
				<div className="h-96 w-full max-w-4xl bg-zinc-900/20 border border-zinc-800 border-dashed rounded-4xl flex items-center justify-center text-zinc-600 italic">
					Section Problème / Solution en attente...
				</div>
			</section>

			{/* --- SECTION : STACK --- */}
			<section id="stack" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
				<div className="h-96 w-full max-w-4xl bg-zinc-900/20 border border-zinc-800 border-dashed rounded-4xl flex items-center justify-center text-zinc-600 italic">
					Section Stack Technique en attente...
				</div>
			</section>

			{/* --- SECTION : STACK --- */}
			<section id="crafted_by" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
				<div className="h-96 w-full max-w-4xl bg-zinc-900/20 border border-zinc-800 border-dashed rounded-4xl flex items-center justify-center text-zinc-600 italic">
					crafted_by en attente...
				</div>
			</section>

		</div>
	);
}

/* ----- EXPORT ----- */
export default AboutPage;
