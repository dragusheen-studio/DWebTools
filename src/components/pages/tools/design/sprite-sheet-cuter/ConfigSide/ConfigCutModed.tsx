/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ISpriteCoord, ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
	sprites: ISpriteCoord[];
}


/* ----- COMPONENT ----- */
function ConfigCutMode({ config, setConfig, sprites }: Props) {
	const selectAll = (total: number) => {
		setConfig(prev => ({ ...prev, selectedIndices: new Set(Array.from({ length: total }, (_, i) => i)) }));
	};

	const updateByPixel = (w: number, h: number) => {
		if (!config.image) return;
		const safeW = Math.max(1, w);
		const safeH = Math.max(1, h);
		const c = Math.floor(config.image.width / safeW);
		const r = Math.floor(config.image.height / safeH);
		setConfig(prev => ({ ...prev, spriteConfig: { ...prev.spriteConfig, tileWidth: safeW, tileHeight: safeH, cols: c, rows: r } }));
		selectAll(c * r);
	};

	const updateByRatio = (c: number, r: number) => {
		if (!config.image) return;
		const safeC = Math.max(1, c);
		const safeR = Math.max(1, r);
		setConfig(prev => ({ ...prev, spriteConfig: { ...prev.spriteConfig, cols: safeC, rows: safeR, tileWidth: Math.floor(config.image!.width / safeC), tileHeight: Math.floor(config.image!.height / safeR) } }));
		selectAll(safeC * safeR);
	};


	return (
		<div className="grid grid-cols-2 gap-4">
			{config.cutMode === "pixel" ? (
				<>
					<div className="space-y-2">
						<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">L (px)</Label>
						<Input type="number" value={config.spriteConfig.tileWidth} onChange={(e) => updateByPixel(parseInt(e.target.value) || 0, config.spriteConfig.tileHeight)} className="bg-zinc-900 border-zinc-800 rounded-xl" />
					</div>
					<div className="space-y-2">
						<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">H (px)</Label>
						<Input type="number" value={config.spriteConfig.tileHeight} onChange={(e) => updateByPixel(config.spriteConfig.tileWidth, parseInt(e.target.value) || 0)} className="bg-zinc-900 border-zinc-800 rounded-xl" />
					</div>
				</>
			) : (
				<>
					<div className="space-y-2">
						<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">Col (X)</Label>
						<Input type="number" value={config.spriteConfig.cols} onChange={(e) => updateByRatio(parseInt(e.target.value) || 1, config.spriteConfig.rows)} className="bg-zinc-900 border-zinc-800 rounded-xl" />
					</div>
					<div className="space-y-2">
						<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">Lig (Y)</Label>
						<Input type="number" value={config.spriteConfig.rows} onChange={(e) => updateByRatio(config.spriteConfig.cols, parseInt(e.target.value) || 1)} className="bg-zinc-900 border-zinc-800 rounded-xl" />
					</div>
				</>
			)}
		</div>
	);
}


/* ----- EXPORT ----- */
export default ConfigCutMode;
