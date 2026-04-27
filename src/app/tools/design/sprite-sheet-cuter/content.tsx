/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useMemo } from "react";
import ImageSide from "@/components/pages/tools/design/sprite-sheet-cuter/ImageSide/ImageSide";
import { ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";
import ConfigSide from "@/components/pages/tools/design/sprite-sheet-cuter/ConfigSide/ConfigSide";


/* ----- COMPONENT ----- */
function SpriteSheetCutterContent() {
	const [config, setConfig] = useState<ISpriteSheetCuterConfig>({
		image: null,
		viewMode: "grid",
		cutMode: "pixel",
		zoom: 2,
		selectedIndices: new Set(),
		spriteConfig: {
			tileWidth: 32,
			tileHeight: 32,
			cols: 1,
			rows: 1,
			prefix: "sprite"
		}
	})

	const sprites = useMemo(() => {
		if (!config.image || config.spriteConfig.tileWidth <= 0 || config.spriteConfig.tileHeight <= 0) return [];
		const items = [];
		for (let y = 0; y < config.spriteConfig.rows; y++) {
			for (let x = 0; x < config.spriteConfig.cols; x++) {
				items.push({ x: Math.floor(x * config.spriteConfig.tileWidth), y: Math.floor(y * config.spriteConfig.tileHeight) });
			}
		}
		return items;
	}, [config.image, config.spriteConfig]);

	return (
		<div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto w-full pb-20 px-4">
			<ConfigSide config={config} setConfig={setConfig} sprites={sprites} />
			<ImageSide config={config} setConfig={setConfig} sprites={sprites} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default SpriteSheetCutterContent;
