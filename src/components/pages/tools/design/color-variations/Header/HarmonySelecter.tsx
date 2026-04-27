/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Harmony } from "@/types/tools/design/ColorVariations";


/* ----- PROPS ----- */
interface Props {
	harmony: "complementary" | "triadic" | "analogous" | "monochromatic"
	setHarmony: (harmony: Harmony) => void;
}


/* ----- COMPONENT ----- */
function HarmonySelecter({ harmony, setHarmony }: Props) {
	return (
		<Select value={harmony} onValueChange={(v: any) => setHarmony(v)}>
			<SelectTrigger className="w-44 bg-zinc-900/50 border-zinc-800 h-14 rounded-2xl text-xs font-bold uppercase tracking-widest">
				<SelectValue />
			</SelectTrigger>
			<SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
				<SelectItem value="complementary">Complémentaire</SelectItem>
				<SelectItem value="triadic">Triadique</SelectItem>
				<SelectItem value="analogous">Analogue</SelectItem>
				<SelectItem value="monochromatic">Monochrome</SelectItem>
			</SelectContent>
		</Select>
	);
}


/* ----- EXPORT ----- */
export default HarmonySelecter;
