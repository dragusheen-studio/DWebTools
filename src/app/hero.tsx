/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import Image from "next/image";
import SearchBar from "@/components/shared/SearchBar";
import { scrollToElement } from "@/services/scroll";
import { ChevronDown } from "lucide-react";

/* ----- COMPONENT ----- */
function HomePageHero() {
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
				<SearchBar />
			</div>

			<div
				className="flex items-center justify-around pb-8 cursor-pointer group"
				onClick={() => scrollToElement("bento-section")}
			>
				<div className="h-px w-1/3 bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-400"></div>
				<div className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-400 text-sm font-black uppercase tracking-[0.2em] flex flex-col gap-1 justify-center items-center animate-bounce">
					<div>Explore les outils</div>
					<ChevronDown size={20} />
				</div>
				<div className="h-px w-1/3 bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-400"></div>
			</div>
		</section >
	);
}

/* ----- EXPORT ----- */
export default HomePageHero;
