/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { Trash2, Upload, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ISpriteSheetMakerConfig } from "@/types/tools/design/SpriteSheetMaker";


interface Props {
	config: ISpriteSheetMakerConfig;
	gridData: Record<string, HTMLImageElement>;
	setGridData: React.Dispatch<React.SetStateAction<Record<string, HTMLImageElement>>>;
}


/* ----- COMPONENT ----- */
function Workspace({ config, gridData, setGridData }: Props) {
	const [focusedCell, setFocusedCell] = useState<{ x: number, y: number } | null>(null);
	const displaySize = 80;

	const clearCell = (x: number, y: number) => {
		const newGrid = { ...gridData };
		delete newGrid[`${x}-${y}`];
		setGridData(newGrid);
	};

	const handleCellUpload = (x: number, y: number, file: File) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => setGridData(prev => ({ ...prev, [`${x}-${y}`]: img }));
			img.src = e.target?.result as string;
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className="flex-1 min-h-175 h-175 p-10 rounded-[3.5rem] bg-zinc-900 border border-zinc-700 shadow-inner flex items-center justify-center relative overflow-hidden">

			<div className="w-full h-full overflow-auto flex items-center justify-center p-20 scrollbar-hide">
				<div
					className="grid gap-3"
					style={{
						gridTemplateColumns: `repeat(${config.cols}, ${displaySize}px)`,
						width: 'fit-content',
					}}
				>
					{Array.from({ length: config.rows }).map((_, y) => (
						Array.from({ length: config.cols }).map((_, x) => {
							const displayData = gridData;
							const img = displayData[`${x}-${y}`];

							return (
								<motion.div
									layoutId={`cell-${x}-${y}`}
									key={`${x}-${y}`}
									onClick={() => setFocusedCell({ x, y })}
									style={{ width: displaySize, height: displaySize }}
									className={cn(
										"relative group border transition-all duration-300 rounded-xl flex items-center justify-center overflow-hidden cursor-zoom-in",
										img ? "border-blue-400 bg-blue-500/10 shadow-lg" : "border-zinc-600 border-dashed bg-zinc-800/40 hover:bg-zinc-700/60"
									)}
								>
									{img && (
										<img src={img.src} className="max-w-[80%] max-h-[80%] object-contain image-pixelated opacity-100 transition-opacity" />
									)}
									<span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-zinc-500 pointer-events-none uppercase">{x}:{y}</span>
								</motion.div>
							);
						})
					))}
				</div>
			</div>

			{/* --- OVERLAY ZOOM --- */}
			<AnimatePresence>
				{focusedCell && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setFocusedCell(null)}
						className="absolute inset-0 z-50 bg-zinc-900/90 backdrop-blur-md flex items-center justify-center p-10"
					>
						<motion.div
							layoutId={`cell-${focusedCell.x}-${focusedCell.y}`}
							onClick={(e) => e.stopPropagation()}
							className="relative bg-zinc-800 border border-zinc-500 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-12 gap-8"
							style={{ minWidth: 400, minHeight: 400 }}
						>
							<Button variant="ghost" size="icon" onClick={() => setFocusedCell(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
								<X size={20} />
							</Button>

							<div className="flex flex-col items-center gap-2">
								<span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Édition Cellule</span>
								<h4 className="text-xl font-bold text-zinc-100 italic">{focusedCell.x} : {focusedCell.y}</h4>
							</div>

							<div className="relative group border-2 border-dashed border-zinc-500 rounded-3xl flex items-center justify-center overflow-hidden bg-zinc-900" style={{ width: 250, height: 250 }}>
								{gridData[`${focusedCell.x}-${focusedCell.y}`] ? (
									<>
										<img src={gridData[`${focusedCell.x}-${focusedCell.y}`].src} className="max-w-full max-h-full object-contain image-pixelated animate-in zoom-in-50 duration-300" />
										<div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
											<label className="p-3 bg-blue-600 rounded-xl cursor-pointer hover:bg-blue-500 transition-colors">
												<Upload size={18} className="text-white" />
												<input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleCellUpload(focusedCell.x, focusedCell.y, e.target.files[0])} />
											</label>
											<button onClick={() => { clearCell(focusedCell.x, focusedCell.y); setFocusedCell(null); }} className="p-3 bg-red-600 rounded-xl hover:bg-red-500 transition-colors">
												<Trash2 size={18} className="text-white" />
											</button>
										</div>
									</>
								) : (
									<label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-800/50 transition-colors gap-3 text-zinc-500 hover:text-zinc-300">
										<Upload size={32} />
										<span className="text-[10px] font-black uppercase tracking-widest">Importer Sprite</span>
										<input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleCellUpload(focusedCell.x, focusedCell.y, e.target.files[0])} />
									</label>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Workspace;
