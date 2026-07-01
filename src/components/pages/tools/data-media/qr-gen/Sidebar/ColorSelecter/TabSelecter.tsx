/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Paintbrush, SwatchBook, EyeOff } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IGradient } from "@/types/tools/data-media/QRCodeGenerator";
import { cn } from "@/lib/utils";

/* ----- PROPS ----- */
interface Props {
	currentMode: "transparent" | "gradient" | "single"
	setConfig: (value: string | IGradient | "transparent") => void;
	allowTransparent?: boolean;
	defaultColor?: string;
}

/* ----- COMPONENT ----- */
function TabSelecter({ setConfig, allowTransparent = false, currentMode, defaultColor = "#ffffff" }: Props) {
	const toggleMode = (mode: "single" | "gradient" | "transparent") => {
		if (mode === "transparent") {
			setConfig("transparent");
		} else if (mode === "single") {
			setConfig(defaultColor);
		} else {
			setConfig({
				type: "linear",
				from: "#3b82f6",
				to: "#9333ea",
				rotation: 0,
			});
		}
	};

	return (
		<Tabs value={currentMode} onValueChange={(v: any) => toggleMode(v)} className="w-full">
			<TabsList className={cn(
				"grid bg-zinc-900 border border-zinc-800 h-10 p-1 rounded-xl",
				allowTransparent ? "grid-cols-3" : "grid-cols-2"
			)}>
				<TabsTrigger value="single" className="text-[10px] uppercase font-bold gap-1.5 rounded-lg data-[state=active]:bg-zinc-800">
					<Paintbrush size={12} /> Unique
				</TabsTrigger>
				<TabsTrigger value="gradient" className="text-[10px] uppercase font-bold gap-1.5 rounded-lg data-[state=active]:bg-zinc-800">
					<SwatchBook size={12} /> Dégradé
				</TabsTrigger>
				{allowTransparent && (
					<TabsTrigger value="transparent" className="text-[10px] uppercase font-bold gap-1.5 rounded-lg data-[state=active]:bg-zinc-800">
						<EyeOff size={12} /> Vide
					</TabsTrigger>
				)}
			</TabsList>
		</Tabs>
	);
}

export default TabSelecter;
