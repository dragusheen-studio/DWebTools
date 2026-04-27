/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- INTERFACES ----- */
interface ISpriteSheetMakerConfig {
	cols: number;
	rows: number;
	tileWidth: number;
	tileHeight: number;
	gapX: number;
	gapY: number;
	allowTrim: boolean,
	autoSize: boolean,
	compactHorizontal: boolean,
	removeVerticalGaps: boolean,
}


/* ----- EXPORTS ----- */
export type {
	ISpriteSheetMakerConfig
};
