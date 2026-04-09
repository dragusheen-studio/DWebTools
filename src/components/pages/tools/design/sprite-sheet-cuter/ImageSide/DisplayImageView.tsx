/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useRef, useEffect } from "react";
import SpriteTile from "@/components/pages/tools/design/sprite-sheet-cuter/SpriteTile";
import { ISpriteCoord, ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
	sprites: ISpriteCoord[];
}


/* ----- COMPONENT ----- */
function DisplayImageView({ config, setConfig, sprites }: Props) {
	const mainCanvasRef = useRef<HTMLCanvasElement>(null);

	const toggleSprite = (index: number) => {
		const newSelection = new Set(config.selectedIndices);
		if (newSelection.has(index)) newSelection.delete(index);
		else newSelection.add(index);
		setConfig({ ...config, selectedIndices: newSelection });
	};

	useEffect(() => {
		if (!config.image || !mainCanvasRef.current || config.viewMode !== "grid") return;
		const canvas = mainCanvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = config.image.width;
		canvas.height = config.image.height;
		ctx.imageSmoothingEnabled = false;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(config.image, 0, 0);

		ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";
		ctx.lineWidth = 1;

		const gridWidth = config.spriteConfig.cols * config.spriteConfig.tileWidth; const gridHeight = config.spriteConfig.rows * config.spriteConfig.tileHeight;

		for (let x = 0; x <= gridWidth; x += config.spriteConfig.tileWidth) {
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, gridHeight);
			ctx.stroke();
		}

		for (let y = 0; y <= gridHeight; y += config.spriteConfig.tileHeight) {
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(gridWidth, y);
			ctx.stroke();
		}
	}, [config.image, config.spriteConfig, config.viewMode]);

	return (
		<div className="w-full h-full overflow-auto scrollbar-hide flex items-center justify-center">
			<div style={{ transform: `scale(${config.zoom})`, transformOrigin: 'center' }} className="transition-transform duration-200">
				{config.viewMode === "grid" ? (
					<canvas ref={mainCanvasRef} className="shadow-2xl border border-white/5" />
				) : (
					<div className="grid gap-1 p-2 bg-zinc-900/50 border border-zinc-800 rounded-lg" style={{ gridTemplateColumns: `repeat(${config.spriteConfig.cols}, min-content)` }}>
						{sprites.map((s, i) => (
							<SpriteTile
								key={i} image={config.image!} x={s.x} y={s.y}
								width={config.spriteConfig.tileWidth} height={config.spriteConfig.tileHeight}
								isSelected={config.selectedIndices.has(i)}
								onClick={() => toggleSprite(i)}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default DisplayImageView;
