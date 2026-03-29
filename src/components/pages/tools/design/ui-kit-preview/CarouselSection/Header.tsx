/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ChevronLeft, ChevronRight, Code, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";


/* ----- PROPS ----- */
interface IProps {
	page: number;
	totalSlides: number;
	paginate: (newDirection: number) => void;
	mode: "light" | "dark";
	setMode: (newMode: "light" | "dark") => void;
}


/* ----- COMPONENT ----- */
function Header({ page, totalSlides, paginate, mode, setMode }: IProps) {
	return (
		<div className="flex items-center justify-between mb-6 px-4">
			<div className="flex items-center gap-2 text-zinc-400">
				<Code size={18} className="text-blue-500" />
				<span className="text-xs font-black uppercase tracking-[0.2em]">Rendu UI Kit ({page + 1}/{totalSlides})</span>
			</div>
			<div className="flex gap-1 bg-zinc-950/50 p-1 rounded-xl border border-zinc-800">
				<Button variant={mode === "light" ? "secondary" : "ghost"} size="xs" onClick={() => setMode("light")} className="flex-1 text-[9px]"><Sun size={14} /> <span className="text-[10px] font-bold">Clair</span></Button>
				<Button variant={mode === "dark" ? "secondary" : "ghost"} size="xs" onClick={() => setMode("dark")} className="flex-1 text-[9px]"><Moon size={14} /> <span className="text-[10px] font-bold">Sombre</span></Button>
			</div>
			<div className="flex gap-3">
				<Button onClick={() => paginate(-1)} variant="outline" size="icon" className="rounded-full border-zinc-800 bg-zinc-950/50 hover:bg-zinc-800 shadow-xl">
					<ChevronLeft size={20} />
				</Button>
				<Button onClick={() => paginate(1)} variant="outline" size="icon" className="rounded-full border-zinc-800 bg-zinc-950/50 hover:bg-zinc-800 shadow-xl">
					<ChevronRight size={20} />
				</Button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Header;
