/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { LayoutGrid, Download, Maximize2, Info, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ISpriteSheetMakerConfig } from "@/types/tools/design/SpriteSheetMaker";
import SizeSetter from "./SizeSetter";
import SidebarOptions from "./Options";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetMakerConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetMakerConfig>>;
	exportSheet: () => void;
	gridData: Record<string, HTMLImageElement>;
	cellSize: {
		w: number;
		h: number;
	}
}


/* ----- COMPONENT ----- */
function Sidebar({ config, setConfig, exportSheet, gridData, cellSize }: Props) {
	return (
		<div className="w-full lg:w-80 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-2xl flex flex-col gap-8 text-left overflow-y-auto max-h-[85vh] scrollbar-hide">
				<div className="flex flex-col gap-1">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Composition</span>
					<h3 className="text-xl font-bold text-zinc-200 flex items-center gap-2 italic">
						<LayoutGrid size={20} className="text-blue-500" /> Sprite Maker
					</h3>
				</div>

				<div className="space-y-8">
					<div className="space-y-4">
						<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">Stucture Grille</Label>
						<SizeSetter rows={config.rows} setRows={(v) => setConfig({ ...config, rows: v })} cols={config.cols} setCols={(v) => setConfig({ ...config, cols: v })} icon={Grid3X3} />
					</div>
					<SidebarOptions config={config} setConfig={setConfig} />
					<div className="space-y-4">
						<div className="flex items-center justify-between px-1">
							<Label className="text-[10px] font-black uppercase text-zinc-600">Taille Cellules</Label>
							<div className="flex items-center gap-2">
								<span className="text-[9px] font-bold text-zinc-500 uppercase">Auto</span>
								<Switch checked={config.autoSize} onCheckedChange={(v) => setConfig({ ...config, autoSize: v })} />
								<Tooltip>
									<TooltipTrigger><Info size={12} className="text-zinc-600" /></TooltipTrigger>
									<TooltipContent className="text-[10px]">Prend la taille {config.autoSize ? "max des images" : "définie manuellement"}.</TooltipContent>
								</Tooltip>
							</div>
						</div>
						<SizeSetter rows={cellSize.h} setRows={(v) => setConfig({ ...config, tileHeight: v || 1 })} cols={cellSize.w} setCols={(v) => setConfig({ ...config, tileWidth: v | 1 })} icon={Maximize2} border="border-dashed" disabled={config.autoSize} />
					</div>
				</div>

				<Button onClick={exportSheet} disabled={Object.keys(gridData).length === 0} className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 font-black uppercase tracking-widest gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all mt-4">
					<Download size={18} /> Exporter PNG
				</Button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Sidebar;
