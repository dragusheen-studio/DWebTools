/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	image: HTMLImageElement;
	x: number;
	y: number;
	width: number;
	height: number;
	isSelected: boolean;
	onClick: () => void;
}


/* ----- COMPONENT ----- */
function SpriteTile({ image, x, y, width, height, isSelected, onClick }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current && width > 0 && height > 0) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			if (ctx) {
				canvas.width = width;
				canvas.height = height;
				ctx.imageSmoothingEnabled = false;
				ctx.clearRect(0, 0, width, height);
				ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
			}
		}
	}, [image, x, y, width, height]);

	return (
		<div
			onClick={onClick}
			className={cn(
				"relative cursor-pointer transition-all duration-200 border",
				isSelected
					? "border-blue-500 ring-2 ring-blue-500/30 z-10 scale-105 opacity-100 shadow-lg shadow-blue-500/20"
					: "border-white/5 opacity-25 grayscale hover:opacity-50 hover:grayscale-0"
			)}
		>
			<canvas
				ref={canvasRef}
				style={{
					width: `${width}px`,
					height: `${height}px`,
					imageRendering: 'pixelated',
					display: 'block'
				}}
			/>
		</div>
	);
}


/* ----- EXPORT ----- */
export default SpriteTile;
