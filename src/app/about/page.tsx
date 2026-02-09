/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

import FadeIn from "@/components/layout/FadeIn";
/* ----- IMPORTS ----- */
import HeroSection from "@/components/pages/about/Hero";
import MissionSection from "@/components/pages/about/Mission";
import StackSection from "@/components/pages/about/Stack";

/* ----- COMPONENT ----- */
function AboutPage() {
	return (
		<div className="flex flex-col w-full gap-20">
			<FadeIn><HeroSection /></FadeIn>
			<FadeIn><MissionSection /></FadeIn>
			<FadeIn><StackSection /></FadeIn>

			{/* --- SECTION : STACK --- */}
			<section id="author" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
				<div className="h-96 w-full max-w-4xl bg-zinc-900/20 border border-zinc-800 border-dashed rounded-4xl flex items-center justify-center text-zinc-600 italic">
					author en attente...
				</div>
			</section>

		</div>
	);
}

/* ----- EXPORT ----- */
export default AboutPage;
