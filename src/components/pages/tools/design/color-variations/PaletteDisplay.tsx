/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Copy } from "lucide-react";
import { copy } from "@/services/utils/copy";
import { hexToHsl, hslToHex } from "@/services/tools/design/color-variations/colorGenerator";
import { IHSLColor } from "@/types/tools/design/ColorVariations";


/* ----- PROPS ----- */
interface Props {
	baseColor: string;
	harmony: "complementary" | "triadic" | "analogous" | "monochromatic"
}


/* ----- COMPONENT ----- */
function PaletteDisplay({ baseColor, harmony }: Props) {
	const palette = useMemo(() => {
		const { h, s, l } = hexToHsl(baseColor);
		let colors: IHSLColor[] = [];

		switch (harmony) {
			case "complementary":
				colors = [
					{ h, s, l },
					{ h: (h + 180) % 360, s, l }
				];
				break;
			case "triadic":
				colors = [
					{ h, s, l },
					{ h: (h + 120) % 360, s, l },
					{ h: (h + 240) % 360, s, l }
				];
				break;
			case "analogous":
				colors = [
					{ h: (h + 330) % 360, s, l },
					{ h, s, l },
					{ h: (h + 30) % 360, s, l }
				];
				break;
			case "monochromatic":
				colors = [
					{ h, s, l: Math.max(l - 30, 10) },
					{ h, s, l: Math.max(l - 15, 20) },
					{ h, s, l },
					{ h, s, l: Math.min(l + 15, 80) },
					{ h, s, l: Math.min(l + 30, 90) }
				];
				break;
		}
		return colors.map(c => hslToHex(c.h, c.s, c.l));
	}, [baseColor, harmony]);

	return (
		<div className="flex flex-col md:flex-row h-100 w-full rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
			{palette.map((color, index) => (
				<div
					key={index}
					style={{ backgroundColor: color }}
					className="group relative flex-1 flex flex-col items-center justify-end pb-8 transition-all duration-500 hover:flex-[1.5]"
				>
					<button
						onClick={() => copy(color, `Couleur ${color} copiée !`)}
						className="opacity-0 group-hover:opacity-100 flex flex-col items-center gap-2 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
					>
						<div className="p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 text-white shadow-xl">
							<Copy size={20} />
						</div>
						<span className="font-mono font-black text-xs text-white drop-shadow-md bg-black/40 px-3 py-1 rounded-full uppercase tracking-tighter">
							{color}
						</span>
					</button>
				</div>
			))}
		</div>
	);
}


/* ----- EXPORT ----- */
export default PaletteDisplay;
