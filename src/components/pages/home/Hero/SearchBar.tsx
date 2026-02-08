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


/* ----- PROPS ----- */
interface SearchBarProps {
	searchQuery: string;
	onChangeSearchQuery: (value: string) => void;
}

/* ----- COMPONENT ----- */
function SearchBar({ searchQuery, onChangeSearchQuery }: SearchBarProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				inputRef.current?.focus();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div className="relative w-full max-w-3xl group">
			<div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors duration-300 pointer-events-none">
				<Search size={20} strokeWidth={2.5} />
			</div>

			<Input
				ref={inputRef}
				type="search"
				placeholder="Rechercher un outil (ex: password, json...)"
				className="w-full h-16 pl-14 pr-20 bg-zinc-900/50 border-zinc-800 rounded-full text-lg font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:ring-offset-0 focus:border-blue-500/50 focus:bg-zinc-900 shadow-2xl placeholder:text-zinc-600"
				value={searchQuery}
				onChange={(e) => onChangeSearchQuery(e.target.value)}
			/>

			<div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-[10px] font-black text-zinc-500 uppercase tracking-widest pointer-events-none">
				<span className="text-xs">Ctrl</span>
				<span>K</span>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default SearchBar;
