/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IGlassmorphismConfig } from "@/types/tools/design/GlassmorphismGen";
import ColorPicker from "./ColorPicker";
import NumericalSlider from "./NumericalSlider";
import PercentageSlider from "./PercentageSlider";


/* ----- PROPS ----- */
interface Props {
	config: IGlassmorphismConfig;
	setConfig: (config: IGlassmorphismConfig) => void;
	reset: () => void;
}


/* ----- COMPONENT ----- */
function Sidebar({ config, setConfig, reset }: Props) {
	return (
		<div className="lg:col-span-1 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-8 shadow-2xl">
				<div className="flex justify-between items-start">
					<div className="flex flex-col gap-1 text-left">
						<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Configuration</span>
						<h3 className="text-xl font-bold text-zinc-200">Styles du Verre</h3>
					</div>
					<Button variant="ghost" size="icon" onClick={reset} className="text-zinc-600 hover:text-orange-400 transition-colors">
						<RotateCcw size={18} />
					</Button>
				</div>

				<div className="space-y-8">
					<ColorPicker color={config.color} setColor={(color) => setConfig({ ...config, color })} />
					<NumericalSlider label="Flou (Pixels)" value={config.blur} setValue={(value) => setConfig({ ...config, blur: value })} max={40} />
					<PercentageSlider label="Opacité Fond" value={config.opacity} setValue={(value) => setConfig({ ...config, opacity: value })} />
					<PercentageSlider label="Opacité Bordure" value={config.borderOpacity} setValue={(value) => setConfig({ ...config, borderOpacity: value })} />
					<NumericalSlider label="Arrondi (Radius)" value={config.borderRadius} setValue={(value) => setConfig({ ...config, borderRadius: value })} />
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Sidebar;
