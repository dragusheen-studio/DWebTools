/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


/* ----- PROPS ----- */
interface Props {
	textCase: "original" | "upper" | "lower" | "capitalize";
	setTextCase: (value: "original" | "upper" | "lower" | "capitalize") => void;
	caseSensitive: boolean;
	setCaseSensitive: (value: boolean) => void;
}


/* ----- COMPONENT ----- */
function TransformationConfig({ textCase, setTextCase, caseSensitive, setCaseSensitive }: Props) {
	return (
		<div className="flex flex-col gap-4 p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/50">
			<div className="flex items-center gap-2 mb-2">
				<Type size={14} className="text-purple-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Texte & Casse</span>
			</div>
			<div className="flex gap-1 bg-zinc-950/50 p-1 rounded-xl border border-zinc-800">
				<Button variant={textCase === "original" ? "secondary" : "ghost"} size="xs" onClick={() => setTextCase("original")} className="flex-1 text-[9px]">ORIG</Button>
				<Button variant={textCase === "upper" ? "secondary" : "ghost"} size="xs" onClick={() => setTextCase("upper")} className="flex-1 text-[9px]">ABC</Button>
				<Button variant={textCase === "lower" ? "secondary" : "ghost"} size="xs" onClick={() => setTextCase("lower")} className="flex-1 text-[9px]">abc</Button>
				<Button variant={textCase === "capitalize" ? "secondary" : "ghost"} size="xs" onClick={() => setTextCase("capitalize")} className="flex-1 text-[9px]">Abc</Button>
			</div>
			<div className="flex items-center justify-between px-1">
				<Label className="text-xs text-zinc-500">Sensible casse (A≠a)</Label>
				<Switch checked={caseSensitive} onCheckedChange={setCaseSensitive} />
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TransformationConfig;
