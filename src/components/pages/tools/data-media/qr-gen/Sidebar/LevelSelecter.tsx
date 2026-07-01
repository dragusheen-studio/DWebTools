/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";

/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	setConfig: React.Dispatch<React.SetStateAction<IQRCodeGeneratorConfig>>;
}

/* ----- COMPONENT ----- */
function LevelSelecter({ config, setConfig }: Props) {
	const levelDescriptions: Record<"L" | "M" | "Q" | "H", string> = {
		L: "Faible (L) — Permet de récupérer environ 7% des données en cas de dégradation. Idéal pour un QR épuré.",
		M: "Moyen (M) — Permet de récupérer environ 15% des données. C'est le standard recommandé pour la plupart des usages.",
		Q: "Quartile (Q) — Permet de récupérer environ 25% des données. Recommandé si le QR est imprimé en petit format.",
		H: "Élevé (H) — Permet de récupérer environ 30% des données. Indispensable si vous ajoutez un logo volumineux au centre.",
	};

	return (
		<AccordionItem value="ECCLevel">
			<AccordionTrigger className="flex items-center justify-between px-1 hover:no-underline">
				<Label className="text-[10px] font-black uppercase text-zinc-600">Tolérance aux pannes</Label>
				<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
					Niveau {config.level}
				</span>
			</AccordionTrigger>
			<AccordionContent className="space-y-4 pt-2">
				<div className="space-y-2">
					<div className="flex items-center justify-between px-1">
						<Label className="text-[9px] font-black uppercase text-zinc-500">Correction d'erreur</Label>
						<ShieldCheck size={12} className="text-zinc-500" />
					</div>

					<Tabs
						value={config.level}
						onValueChange={(v: any) => setConfig({ ...config, level: v })}
						className="w-full"
					>
						<TabsList className="grid grid-cols-4 bg-zinc-900 border border-zinc-800 h-10 p-1 rounded-xl">
							{
								Object.keys(levelDescriptions).map((level) => (
									<TabsTrigger key={level} value={level} className="text-[10px] uppercase font-bold rounded-lg data-[state=active]:bg-zinc-800">
										{level}
									</TabsTrigger>
								))
							}
						</TabsList>
					</Tabs>
				</div>

				<div className="min-h-8 px-1 animate-in fade-in duration-300">
					<p className="text-[10px] text-zinc-500 italic leading-normal">
						{levelDescriptions[config.level as "L" | "M" | "Q" | "H"]}
					</p>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

/* ----- EXPORT ----- */
export default LevelSelecter;
