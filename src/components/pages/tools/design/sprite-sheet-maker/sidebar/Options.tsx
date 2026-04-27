/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { AlignLeft, FoldVertical } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ISpriteSheetMakerConfig } from "@/types/tools/design/SpriteSheetMaker";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetMakerConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetMakerConfig>>;
}


/* ----- COMPONENT ----- */
function SidebarOptions({ config, setConfig }: Props) {
	return (
		<div className="space-y-3 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/50">
			<Label className="text-[10px] font-black uppercase text-zinc-600 mb-2 block">Optimisation</Label>

			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<AlignLeft size={14} className="text-zinc-500" />
					<span className="text-[10px] font-bold text-zinc-400 uppercase">Aligner (X)</span>
				</div>
				<Switch checked={config.compactHorizontal} onCheckedChange={(v) => setConfig({ ...config, compactHorizontal: v })} />
			</div>

			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<FoldVertical size={14} className="text-zinc-500" />
					<span className="text-[10px] font-bold text-zinc-400 uppercase">Remonter (Y)</span>
				</div>
				<Switch checked={config.removeVerticalGaps} onCheckedChange={(v) => setConfig({ ...config, removeVerticalGaps: v })} />
			</div>

			<div className="flex items-center justify-between gap-2 border-t border-zinc-800 mt-2 pt-2">
				<span className="text-[10px] font-bold text-zinc-400 uppercase">Trim Final</span>
				<Switch checked={config.allowTrim} onCheckedChange={(v) => setConfig({ ...config, allowTrim: v })} />
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default SidebarOptions;
