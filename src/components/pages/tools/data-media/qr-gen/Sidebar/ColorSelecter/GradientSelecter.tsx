/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IGradient } from "@/types/tools/data-media/QRCodeGenerator";

/* ----- PROPS ----- */
interface Props {
	config: string | IGradient | "transparent";
	setConfig: (value: string | IGradient | "transparent") => void;
}

/* ----- COMPONENT ----- */
function GradientSelecter({ config, setConfig }: Props) {
	const updateGradient = (updates: Partial<IGradient>) => {
		setConfig({
			...(config as IGradient),
			...updates
		});
	};

	return (
		<div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1">Type</Label>
					<Select
						value={(config as IGradient).type}
						onValueChange={(v: any) => updateGradient({ type: v })}
					>
						<SelectTrigger className="bg-zinc-900 border-zinc-800 rounded-xl h-9 text-[10px] font-bold uppercase">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="bg-zinc-900 border-zinc-800">
							<SelectItem value="linear">Linéaire</SelectItem>
							<SelectItem value="radial">Radial</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2 text-left">
					<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1 text-left">Rotation</Label>
					<Input
						type="number"
						value={(config as IGradient).rotation || 0}
						onChange={(e) => updateGradient({ rotation: parseInt(e.target.value) || 0 })}
						className="bg-zinc-900 border-zinc-800 rounded-xl h-9 text-xs"
						disabled={(config as IGradient).type === "radial"}
					/>
				</div>
			</div>

			<div className="space-y-4">
				<div className="flex items-center gap-3">
					<div className="flex-1 space-y-2">
						<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1">Début</Label>
						<div className="flex gap-2">
							<Input type="color" value={(config as IGradient).from} onChange={(e) => updateGradient({ from: e.target.value })} className="w-10 h-9 bg-zinc-900 border-zinc-800 p-1 rounded-lg cursor-pointer" />
							<Input type="text" value={(config as IGradient).from.toUpperCase()} onChange={(e) => updateGradient({ from: e.target.value })} className="flex-1 h-9 bg-zinc-900 border-zinc-800 rounded-lg font-mono text-[10px]" />
						</div>
					</div>
					<MoveRight size={14} className="mt-6 text-zinc-700" />
					<div className="flex-1 space-y-2">
						<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1">Fin</Label>
						<div className="flex gap-2">
							<Input type="color" value={(config as IGradient).to} onChange={(e) => updateGradient({ to: e.target.value })} className="w-10 h-9 bg-zinc-900 border-zinc-800 p-1 rounded-lg cursor-pointer" />
							<Input type="text" value={(config as IGradient).to.toUpperCase()} onChange={(e) => updateGradient({ to: e.target.value })} className="flex-1 h-9 bg-zinc-900 border-zinc-800 rounded-lg font-mono text-[10px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GradientSelecter;
