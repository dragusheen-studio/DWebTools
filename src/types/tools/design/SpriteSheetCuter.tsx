/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPES ----- */
type SpriteSheetCuterViewMode = "grid" | "cut";
type SpriteSheetCuterCutMode = "pixel" | "ratio";


/* ----- INTERFACES ----- */
interface ISpriteSheetCuterSpriteConfig {
	tileWidth: number;
	tileHeight: number;
	cols: number;
	rows: number;
	prefix: string;
}

interface ISpriteCoord {
	x: number;
	y: number;
}

interface ISpriteSheetCuterConfig {
	image: HTMLImageElement | null;
	viewMode: SpriteSheetCuterViewMode;
	cutMode: SpriteSheetCuterCutMode
	zoom: number;
	selectedIndices: Set<number>;
	spriteConfig: ISpriteSheetCuterSpriteConfig;
}


/* ----- EXPORTS ----- */
export type {
	SpriteSheetCuterViewMode,
	SpriteSheetCuterCutMode,
	ISpriteSheetCuterSpriteConfig,
	ISpriteSheetCuterConfig,
	ISpriteCoord
};
