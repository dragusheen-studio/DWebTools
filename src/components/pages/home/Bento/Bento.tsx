/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { GetAllTools } from "@/config/PageData";
import BentoCard from "@/components/pages/home/Bento/BentoCard";
import { useMemo } from "react";


/* ----- PROPS ----- */
interface HomePageBentoProps {
	searchQuery: string;
	setSearchQuery: (value: string) => void;
}


/* ----- COMPONENT ----- */
function HomePageBento({ searchQuery, setSearchQuery }: HomePageBentoProps) {
	const allTools = useMemo(() => GetAllTools(), []);
	const filteredTools = useMemo(() => {
		return allTools.filter((tool) => {
			const search = searchQuery.toLowerCase();
			return (
				tool.name.toLowerCase().includes(search) ||
				tool.description.toLowerCase().includes(search)
			);
		});
	}, [searchQuery, allTools]);

	return (
		<section className="w-full max-w-6xl px-4 pb-40 mx-auto" id="bento-section">
			{filteredTools.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
					{filteredTools.map((tool) => (
						<BentoCard key={tool.name} {...tool} />
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
					<p className="text-zinc-500 text-xl italic font-medium">
						Oups ! Aucun outil ne correspond à "<span className="text-zinc-300">{searchQuery}</span>"
					</p>
					<button
						onClick={() => setSearchQuery("")}
						className="mt-4 text-zinc-500 hover:text-zinc-300 transition-colors duration underline font-bold uppercase text-xs tracking-widest"
					>
						Réinitialiser la recherche
					</button>
				</div>
			)}
		</section>
	);
}


/* ----- EXPORT ----- */
export default HomePageBento;
