/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useEffect, useState, useMemo, use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Search, Command } from "lucide-react";
import { GetAllBentoTools } from "@/config/PageData";
import { cn } from "@/lib/utils";
import { GetDotColor } from "@/config/Bento";


/* ----- COMPONENT ----- */
function CommandPalette() {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState("");
	const router = useRouter();
	const pathName = usePathname();
	const allTools = useMemo(() => GetAllBentoTools().filter(t => !t.comingSoon), []);

	useEffect(() => {
		if (pathName === "/") return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				setIsOpen((prev) => !prev);
			}
			if (e.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [pathName]);

	useEffect(() => {
		if (!isOpen) setQuery("");
	}, [isOpen]);

	useEffect(() => {
		if (pathName === "/") setIsOpen(false);
	}, [pathName]);

	const filteredTools = useMemo(() => {
		if (!query) return [];
		return allTools.filter(t =>
			t.name.toLowerCase().includes(query.toLowerCase())
		).slice(0, 5);
	}, [query, allTools]);

	if (!isOpen || pathName === "/") return null;

	return (
		<div className="fixed inset-0 z-200 flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm bg-black/40 animate-in fade-in duration-200">
			<div className="absolute inset-0" onClick={() => setIsOpen(false)} />

			<div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
				<div className="flex items-center px-5 border-b border-zinc-800">
					<Search className="text-zinc-500 mr-3" size={20} />
					<input
						autoFocus
						className="w-full h-14 bg-transparent outline-none text-zinc-200 placeholder:text-zinc-600 font-medium"
						placeholder="Rechercher un outil..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<div className="flex items-center gap-1 px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-[10px] font-black text-zinc-500 uppercase">
						Esc
					</div>
				</div>

				{query && (
					<div className="p-2 max-h-75 overflow-y-auto">
						{filteredTools.length > 0 ? (
							filteredTools.map((tool) => (
								<button
									key={tool.path}
									onClick={() => {
										router.push(tool.path);
										setIsOpen(false);
										setQuery("");
									}}
									className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-800 transition-colors group text-left"
								>
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700">
											<tool.icon size={18} className="text-zinc-400 group-hover:text-zinc-100" />
										</div>
										<div>
											<p className="text-sm font-bold text-zinc-200">{tool.name}</p>
											<p className="text-xs text-zinc-500 italic line-clamp-1">{tool.description}</p>
										</div>
									</div>
									<div className={cn("w-2 h-2 rounded-full", GetDotColor(tool.color))} />
								</button>
							))
						) : (
							<div className="p-8 text-center text-zinc-500 text-sm italic">
								Aucun outil trouvé...
							</div>
						)}
					</div>
				)}

				<div className="p-3 bg-zinc-950/50 border-t border-zinc-800 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
							<Command size={12} /> Search
						</div>
					</div>
					<p className="text-[10px] text-zinc-600 font-black uppercase tracking-tighter">DWebTools Quick Navigation</p>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CommandPalette;
