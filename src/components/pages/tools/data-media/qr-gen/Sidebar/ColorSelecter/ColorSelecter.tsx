/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IGradient } from "@/types/tools/data-media/QRCodeGenerator";
import GradientSelecter from "./GradientSelecter";
import TabSelecter from "./TabSelecter";

/* ----- PROPS ----- */
interface Props {
	id: string;
	config: string | IGradient | "transparent";
	setConfig: (value: string | IGradient | "transparent") => void;
	label: string;
	allowTransparent?: boolean;
	defaultColor?: string;
}

/* ----- COMPONENT ----- */
function ColorSelecter({ id, config, setConfig, label, allowTransparent = false, defaultColor = "#ffffff" }: Props) {
	const isGradient = config !== null && typeof config === "object";
	const isTransparent = config === "transparent";
	const currentMode = isTransparent ? "transparent" : isGradient ? "gradient" : "single";

	const getTriggerStyle = () => {
		if (isTransparent) return "repeating-conic-gradient(#555 0% 25%, #333 0% 50%) 50% / 8px 8px";
		if (isGradient) return `linear-gradient(135deg, ${(config as IGradient).from}, ${(config as IGradient).to})`;
		return config as string;
	};

	return (
		<AccordionItem value={id}>
			<AccordionTrigger className="flex items-center justify-between px-1 hover:no-underline">
				<Label className="text-[10px] font-black uppercase text-zinc-600">{label}</Label>
				<div
					className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm"
					style={{ background: getTriggerStyle() }}
				/>
			</AccordionTrigger>
			<AccordionContent className="space-y-6 pt-2">

				<TabSelecter currentMode={currentMode} setConfig={setConfig} allowTransparent={allowTransparent} defaultColor={defaultColor} />

				{currentMode === "single" && (
					<div className="flex gap-3 items-center animate-in fade-in duration-300">
						<Input
							type="color"
							value={config as string}
							onChange={(e) => setConfig(e.target.value)}
							className="w-12 h-10 bg-zinc-900 border-zinc-800 p-1 rounded-xl cursor-pointer"
						/>
						<Input
							type="text"
							value={(config as string).toUpperCase()}
							onChange={(e) => setConfig(e.target.value)}
							className="flex-1 bg-zinc-900 border-zinc-800 rounded-xl font-mono text-xs"
						/>
					</div>
				)}

				{currentMode === "gradient" && (
					<GradientSelecter config={config} setConfig={setConfig} />
				)}

				{currentMode === "transparent" && allowTransparent && (
					<p className="text-[11px] text-zinc-500 italic px-1 animate-in fade-in duration-300">
						Le fond sera transparent lors de l'affichage et de l'exportation.
					</p>
				)}

			</AccordionContent>
		</AccordionItem>
	);
}

export default ColorSelecter;
