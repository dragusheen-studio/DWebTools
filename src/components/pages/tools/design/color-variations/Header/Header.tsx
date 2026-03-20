/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Palette, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateRandom } from "@/services/tools/design/color-variations/colorGenerator";
import ColorPicker from "@/components/custom-ui/ColorPicker";
import { Harmony } from "@/types/tools/design/ColorVariations";
import HarmonySelecter from "./HarmonySelecter";


/* ----- PROPS ----- */
interface Props {
	baseColor: string;
	setBaseColor: (color: string) => void;
	harmony: "complementary" | "triadic" | "analogous" | "monochromatic"
	setHarmony: (harmony: Harmony) => void;
}


/* ----- COMPONENT ----- */
function Header({ baseColor, setBaseColor, harmony, setHarmony }: Props) {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
			<div className="flex flex-col gap-1 text-left w-full md:w-auto">
				<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Configuration</span>
				<h3 className="text-xl font-bold text-zinc-200 flex items-center gap-2">
					<Palette size={20} className="text-blue-500" /> Palette de Couleurs
				</h3>
			</div>

			<div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
				<ColorPicker color={baseColor} setColor={setBaseColor} />
				<HarmonySelecter harmony={harmony} setHarmony={setHarmony} />
				<Button onClick={() => setBaseColor(generateRandom())} variant="outline" className="h-14 w-14 rounded-2xl border-zinc-800 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/5 transition-all">
					<Shuffle size={20} />
				</Button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Header;
