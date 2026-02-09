/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface GhostSearchBarProps {
	visible: boolean;
	onChange: (value: string) => void;
	searchQuery: string;
}


/* ----- COMPONENT ----- */
function GhostSearchBar({ visible, onChange, searchQuery }: GhostSearchBarProps) {
	return (
		<div className={cn(
			"fixed top-0 left-0 right-0 z-100 flex justify-center p-4 transition-all duration-500 ease-in-out",
			visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
		)}>
			<div className="w-full max-w-2xl relative group">
				<div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors duration-300 pointer-events-none">
					<Search size={20} strokeWidth={2.5} />
				</div>

				<Input
					type="search"
					placeholder="Rechercher un outil..."
					className="w-full h-16 pl-14 pr-6 bg-zinc-900/50 border-zinc-800 rounded-full text-lg font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:ring-offset-0 focus:border-blue-500/50 focus:bg-zinc-900 shadow-2xl placeholder:text-zinc-600"
					value={searchQuery}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default GhostSearchBar;
