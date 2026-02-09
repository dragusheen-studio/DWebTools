/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import Image from "next/image";
import SearchBar from "@/components/pages/home/Hero/SearchBar";
import { scrollToElement } from "@/services/scroll";
import { ChevronDown } from "lucide-react";
import Teaser from "@/components/layout/Teaser";


/* ----- PROPS ----- */
interface HomePageHeroProps {
	searchQuery: string;
	onChange: (value: string) => void;
}


/* ----- COMPONENT ----- */
function HomePageHero({ searchQuery, onChange }: HomePageHeroProps) {
	return (
		<section className="flex flex-col min-h-screen w-full h-full">
			<div className="flex flex-1 flex-col items-center justify-center w-full h-full gap-8">
				<div className="flex flex-col gap-6 text-center w-full items-center">
					<div className="flex items-center gap-4">
						<Image src="/svg/icon.svg" alt="Logo DWebTools" width={80} height={80} className="drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
						<h1 className="text-7xl tracking-tighter italic">
							<span className="font-black text-zinc-200">DWeb</span>
							<span className="font-extralight text-zinc-500">Tools</span>
						</h1>
					</div>

					<p className="text-zinc-400 text-xl max-w-lg mx-auto font-medium italic">
						La boîte à outils centralisée pour le quotidien.
					</p>
				</div>
				<SearchBar searchQuery={searchQuery} onChange={onChange} />
			</div>
			<Teaser goTo="bento-section" text="Explore les outils" lines={true} />
		</section >
	);
}

/* ----- EXPORT ----- */
export default HomePageHero;
