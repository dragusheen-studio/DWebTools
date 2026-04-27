/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { ISpriteSheetMakerConfig } from "@/types/tools/design/SpriteSheetMaker";
import Sidebar from "@/components/pages/tools/design/sprite-sheet-maker/sidebar/Sidebar";
import Workspace from "@/components/pages/tools/design/sprite-sheet-maker/workspace/WorkSpace";


/* ----- COMPONENT ----- */
function Content() {
	const [config, setConfig] = useState<ISpriteSheetMakerConfig>({
		cols: 4,
		rows: 4,
		tileWidth: 64,
		tileHeight: 64,
		gapX: 0,
		gapY: 0,
		allowTrim: true,
		autoSize: true,
		compactHorizontal: false,
		removeVerticalGaps: false,
	});

	const [gridData, setGridData] = useState<Record<string, HTMLImageElement>>({});

	const processedGrid = useMemo(() => {
		let currentGrid = { ...gridData };
		let currentRows = config.rows;
		let currentCols = config.cols;

		if (config.compactHorizontal) {
			const newGrid: Record<string, HTMLImageElement> = {};
			for (let y = 0; y < currentRows; y++) {
				let nextFreeX = 0;
				for (let x = 0; x < currentCols; x++) {
					if (currentGrid[`${x}-${y}`]) {
						newGrid[`${nextFreeX}-${y}`] = currentGrid[`${x}-${y}`];
						nextFreeX++;
					}
				}
			}
			currentGrid = newGrid;
		}

		if (config.removeVerticalGaps) {
			const newGrid: Record<string, HTMLImageElement> = {};
			let nextFreeY = 0;
			for (let y = 0; y < currentRows; y++) {
				let rowHasData = false;
				for (let x = 0; x < currentCols; x++) {
					if (currentGrid[`${x}-${y}`]) {
						rowHasData = true;
						newGrid[`${x}-${nextFreeY}`] = currentGrid[`${x}-${y}`];
					}
				}
				if (rowHasData) nextFreeY++;
			}
			currentGrid = newGrid;
		}

		return currentGrid;
	}, [gridData, config.compactHorizontal, config.removeVerticalGaps, config.rows, config.cols]);

	const autoDimensions = useMemo(() => {
		const imgs = Object.values(gridData);
		if (imgs.length === 0) return { w: 64, h: 64 };
		let maxW = 0; let maxH = 0;
		imgs.forEach(img => {
			maxW = Math.max(maxW, img.width);
			maxH = Math.max(maxH, img.height);
		});
		return { w: maxW, h: maxH };
	}, [gridData]);

	const effectiveTileWidth = config.autoSize ? autoDimensions.w : config.tileWidth;
	const effectiveTileHeight = config.autoSize ? autoDimensions.h : config.tileHeight;

	const finalDimensions = useMemo(() => {
		const dataToUse = (config.compactHorizontal || config.removeVerticalGaps) ? processedGrid : gridData;
		const keys = Object.keys(dataToUse);
		if (keys.length === 0) return { startX: 0, startY: 0, endX: config.cols - 1, endY: config.rows - 1 };

		if (!config.allowTrim) return { startX: 0, startY: 0, endX: config.cols - 1, endY: config.rows - 1 };

		let minX = config.cols, minY = config.rows, maxX = 0, maxY = 0;
		keys.forEach(key => {
			const [x, y] = key.split("-").map(Number);
			minX = Math.min(minX, x); minY = Math.min(minY, y);
			maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
		});
		return { startX: minX, startY: minY, endX: maxX, endY: maxY };
	}, [gridData, processedGrid, config.allowTrim, config.cols, config.rows, config.compactHorizontal, config.removeVerticalGaps]);

	const finalCols = finalDimensions.endX - finalDimensions.startX + 1;
	const finalRows = finalDimensions.endY - finalDimensions.startY + 1;

	const exportSheet = () => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dataToExport = (config.compactHorizontal || config.removeVerticalGaps) ? processedGrid : gridData;
		if (Object.keys(dataToExport).length === 0) return;

		canvas.width = (finalCols * effectiveTileWidth) + ((finalCols - 1) * config.gapX);
		canvas.height = (finalRows * effectiveTileHeight) + ((finalRows - 1) * config.gapY);

		Object.entries(dataToExport).forEach(([key, img]) => {
			const [x, y] = key.split("-").map(Number);
			const targetX = x - finalDimensions.startX;
			const targetY = y - finalDimensions.startY;

			if (targetX >= 0 && targetY >= 0 && targetX < finalCols && targetY < finalRows) {
				const posX = targetX * (effectiveTileWidth + config.gapX);
				const posY = targetY * (effectiveTileHeight + config.gapY);
				const offsetX = (effectiveTileWidth - img.width) / 2;
				const offsetY = (effectiveTileHeight - img.height) / 2;
				ctx.drawImage(img, posX + offsetX, posY + offsetY, img.width, img.height);
			}
		});

		const link = document.createElement("a");
		link.download = "spritesheet.png";
		link.href = canvas.toDataURL("image/png");
		link.click();
		toast.success("Sprite Sheet exportée !");
	};

	return (
		<div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto w-full pb-20 px-4">
			<Sidebar config={config} setConfig={setConfig} exportSheet={exportSheet} gridData={gridData} cellSize={{ w: effectiveTileWidth, h: effectiveTileHeight }} />
			<Workspace config={config} gridData={processedGrid} setGridData={setGridData} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Content;
