/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { GetAllTools } from "@/config/PageData";
import HomePageHero from "./hero";
import BentoCard from "@/components/bento/BentoCard";


/* ----- COMPONENT ----- */
function HomePage() {
	return (
		<div className="flex flex-col w-full items-center">
			<HomePageHero />

			<section className="w-full max-w-6xl px-4 pb-20 mx-auto" id="bento-section">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
					{GetAllTools().map((tool) => (
						<BentoCard
							key={tool.name}
							{...tool}
						/>
					))}
				</div>
			</section>
		</div>
	);
}


/* ----- EXPORT ----- */
export default HomePage;
