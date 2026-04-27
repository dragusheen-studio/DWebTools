/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Scissors } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ISpriteCoord, ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";
import DownloadZip from "./DownloadZip";
import ConfigViewMode from "./ConfigViewMode";
import ConfigCutMode from "./ConfigCutModed";
import ConfigMethod from "./ConfigMethod";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
	sprites: ISpriteCoord[];
}


/* ----- COMPONENT ----- */
function ConfigSide({ config, setConfig, sprites }: Props) {
	return (
		<div className="w-full lg:w-80 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-2xl flex flex-col gap-8 text-left">
				<div className="flex flex-col gap-1">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Configuration</span>
					<h3 className="text-xl font-bold text-zinc-200 flex items-center gap-2 italic">
						<Scissors size={20} className="text-blue-500" /> Sprite Cutter
					</h3>
				</div>
				<ConfigViewMode config={config} setConfig={setConfig} sprites={sprites} />
				<ConfigMethod config={config} setConfig={setConfig} />
				<div className="space-y-6">
					<ConfigCutMode config={config} setConfig={setConfig} sprites={sprites} />
					<div className="space-y-4">
						<div className="flex justify-between items-center px-1">
							<Label className="text-[10px] font-black uppercase text-zinc-600">Zoom</Label>
							<span className="text-[10px] font-mono text-blue-400 font-bold">{(config.zoom * 100).toFixed(0)}%</span>
						</div>
						<Slider value={[config.zoom]} min={1} max={12} step={1} onValueChange={(v) => setConfig({ ...config, zoom: v[0] })} />
					</div>
					<div className="space-y-2">
						<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">Préfixe</Label>
						<Input value={config.spriteConfig.prefix} onChange={(e) => setConfig({ ...config, spriteConfig: { ...config.spriteConfig, prefix: e.target.value } })} className="bg-zinc-900 border-zinc-800 rounded-xl" />
					</div>
				</div>
				<DownloadZip config={config} setConfig={setConfig} sprites={sprites} />
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ConfigSide;
