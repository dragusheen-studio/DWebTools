/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { BoxSelect, LayoutGrid } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
}


/* ----- COMPONENT ----- */
function ConfigMethod({ config, setConfig }: Props) {
	return (
		<div className="space-y-3">
			<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">Méthode</Label>
			<div className="flex p-1 bg-zinc-900/50 rounded-xl border border-zinc-800">
				<button onClick={() => setConfig({ ...config, cutMode: "pixel" })} className={cn("flex-1 flex gap-1.5 py-1.5 items-center justify-center rounded-lg text-[9px] font-bold uppercase transition-all", config.cutMode === "pixel" ? "bg-blue-600 text-white" : "text-zinc-500")}>
					<BoxSelect size={12} /> Dimensions
				</button>
				<button onClick={() => setConfig({ ...config, cutMode: "ratio" })} className={cn("flex-1 flex gap-1.5 py-1.5 items-center justify-center rounded-lg text-[9px] font-bold uppercase transition-all", config.cutMode === "ratio" ? "bg-blue-600 text-white" : "text-zinc-500")}>
					<LayoutGrid size={12} /> Division
				</button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ConfigMethod;
