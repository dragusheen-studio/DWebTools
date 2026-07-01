/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Label } from "@/components/ui/label";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DotStyle, IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";

/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	setConfig: React.Dispatch<React.SetStateAction<IQRCodeGeneratorConfig>>;
}

/* ----- COMPONENT ----- */
function DotStyleSelecter({ config, setConfig }: Props) {
	const styles: { value: DotStyle; label: string }[] = [
		{ value: "circle", label: "Cercles" },
		{ value: "diamond", label: "Losanges" },
		{ value: "hashtag", label: "Croix" },
		{ value: "heart", label: "Cœurs" },
		{ value: "horizontal-line", label: "Lignes horizontales" },
		{ value: "leaf", label: "Feuilles / Organique" },
		{ value: "pinched-square", label: "Carrés pincés" },
		{ value: "rounded", label: "Coins arrondis" },
		{ value: "square", label: "Carrés classiques" },
		{ value: "square-sm", label: "Carrés petits" },
		{ value: "star", label: "Étoiles" },
		{ value: "vertical-line", label: "Lignes verticales" },
	];

	return (
		<AccordionItem value="DataModules">
			<AccordionTrigger className="flex items-center justify-between px-1 hover:no-underline">
				<Label className="text-[10px] font-black uppercase text-zinc-600">Style des points</Label>
				<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
					{styles.find(s => s.value === config.dotStyle)?.label || config.dotStyle}
				</span>
			</AccordionTrigger>
			<AccordionContent className="space-y-4 pt-2">
				<div className="space-y-2">
					<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1">Forme des modules</Label>
					<Select
						value={config.dotStyle}
						onValueChange={(v: DotStyle) => setConfig({ ...config, dotStyle: v })}
					>
						<SelectTrigger className="bg-zinc-900 border-zinc-800 rounded-xl h-11 text-xs text-zinc-300">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
							{styles.map((style) => (
								<SelectItem key={style.value} value={style.value} className="text-xs focus:bg-zinc-800">
									{style.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

/* ----- EXPORT ----- */
export default DotStyleSelecter;
