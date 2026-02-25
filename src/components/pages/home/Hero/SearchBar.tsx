/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { scrollToTop } from "@/services/utils/scroll";


/* ----- PROPS ----- */
interface SearchBarProps {
	searchQuery: string;
	onChange: (value: string) => void;
}


/* ----- COMPONENT ----- */
function SearchBar({ searchQuery, onChange }: SearchBarProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				inputRef.current?.focus();
				scrollToTop();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div className="flex flex-col items-center gap-3 w-full max-w-3xl px-4 md:px-0">
			<div className="relative w-full group">
				<div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors duration-300 pointer-events-none">
					<Search className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
				</div>

				<Input
					ref={inputRef}
					type="search"
					placeholder="Rechercher un outil..."
					className="w-full h-14 md:h-16 pl-12 md:pl-14 pr-6 bg-zinc-900/50 border-zinc-800 rounded-full text-base md:text-lg font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:ring-offset-0 focus:border-blue-500/50 focus:bg-zinc-900 shadow-2xl placeholder:text-zinc-600"
					value={searchQuery}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>

			<p className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 opacity-50 group-focus-within:opacity-100 transition-opacity">
				Appuyez sur <span className="text-zinc-400">Ctrl + K</span> pour focaliser ou faire apparaître la recherche
			</p>
		</div>
	);
}


/* ----- EXPORT ----- */
export default SearchBar;
