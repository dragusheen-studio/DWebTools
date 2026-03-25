/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ColorPicker from "@/components/custom-ui/ColorPicker";
import { Harmony } from "@/types/tools/design/ColorPalette";


/* ----- PROPS ----- */
interface IProps {
	baseColor: string,
	setBaseColor: (color: string) => void,
	mode: Harmony,
	setMode: (mode: Harmony) => void,
}


/* ----- COMPONENT ----- */
function Header({ baseColor, setBaseColor, mode, setMode }: IProps) {
	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-2xl flex flex-col md:flex-row items-center gap-8">
			<div className="flex-1 w-full">
				<ColorPicker label="Couleur Dominante (Seed)" color={baseColor} setColor={setBaseColor} />
			</div>
			<div className="flex items-center gap-4">
				<div className="flex flex-col gap-2">
					<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">Mode d'Harmonie</Label>
					<Select value={mode} onValueChange={setMode}>
						<SelectTrigger className="w-48 bg-zinc-900/50 border-zinc-800 h-12 rounded-xl text-xs font-bold uppercase">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="bg-zinc-900 border-zinc-800">
							<SelectItem value="complementary">Complémentaires</SelectItem>
							<SelectItem value="analogous">Analogues</SelectItem>
							<SelectItem value="monochromatic">Monochrome</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default Header;
