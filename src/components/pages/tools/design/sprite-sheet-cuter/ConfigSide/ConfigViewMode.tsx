/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Grid3X3, Layers, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ISpriteCoord, ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
	sprites: ISpriteCoord[];
}


/* ----- COMPONENT ----- */
function ConfigViewMode({ config, setConfig, sprites }: Props) {
	const selectAll = (total: number) => {
		setConfig(prev => ({ ...prev, selectedIndices: new Set(Array.from({ length: total }, (_, i) => i)) }));
	};

	const unselectAll = () => {
		setConfig(prev => ({ ...prev, selectedIndices: new Set() }));
	};

	return (
		<>
			<div className="flex p-1 bg-zinc-900 rounded-2xl border border-zinc-800">
				<button onClick={() => setConfig({ ...config, viewMode: "grid" })} className={cn("flex-1 flex gap-2 py-2 items-center justify-center rounded-xl text-[10px] font-black uppercase transition-all", config.viewMode === "grid" ? "bg-zinc-800 text-blue-400" : "text-zinc-500 hover:text-zinc-300")}>
					<Grid3X3 size={14} /> Grille
				</button>
				<button onClick={() => setConfig({ ...config, viewMode: "cut" })} className={cn("flex-1 flex gap-2 py-2 items-center justify-center rounded-xl text-[10px] font-black uppercase transition-all", config.viewMode === "cut" ? "bg-zinc-800 text-blue-400" : "text-zinc-500 hover:text-zinc-300")}>
					<Layers size={14} /> Découpe
				</button>
			</div>

			{config.viewMode === "cut" && (
				<div className="flex gap-2">
					<Button variant="outline" size="xs" onClick={() => selectAll(sprites.length)} className="flex-1 rounded-lg text-[9px] uppercase font-bold border-zinc-800">
						<Check className="mr-1" size={10} /> Tout
					</Button>
					<Button variant="outline" size="xs" onClick={unselectAll} className="flex-1 rounded-lg text-[9px] uppercase font-bold border-zinc-800">
						<X className="mr-1" size={10} /> Aucun
					</Button>
				</div>
			)}
		</>
	);
}


/* ----- EXPORT ----- */
export default ConfigViewMode;
