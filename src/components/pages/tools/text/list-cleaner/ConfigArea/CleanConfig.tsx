/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Eraser } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


/* ----- PROPS ----- */
interface Props {
	removeDuplicates: boolean;
	setRemoveDuplicates: (value: boolean) => void;
	removeEmptyLines: boolean;
	setRemoveEmptyLines: (value: boolean) => void;
	trimLines: boolean;
	setTrimLines: (value: boolean) => void;
}


/* ----- COMPONENT ----- */
function CleanConfig({ removeDuplicates, setRemoveDuplicates, removeEmptyLines, setRemoveEmptyLines, trimLines, setTrimLines }: Props) {
	return (
		<div className="flex flex-col gap-4 p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/50">
			<div className="flex items-center gap-2 mb-2">
				<Eraser size={14} className="text-blue-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Nettoyage</span>
			</div>
			<div className="space-y-3">
				<div className="flex items-center justify-between">
					<Label className="text-xs text-zinc-500">Supprimer doublons</Label>
					<Switch checked={removeDuplicates} onCheckedChange={setRemoveDuplicates} />
				</div>
				<div className="flex items-center justify-between">
					<Label className="text-xs text-zinc-500">Lignes vides</Label>
					<Switch checked={removeEmptyLines} onCheckedChange={setRemoveEmptyLines} />
				</div>
				<div className="flex items-center justify-between">
					<Label className="text-xs text-zinc-500">Trim (espaces)</Label>
					<Switch checked={trimLines} onCheckedChange={setTrimLines} />
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CleanConfig;
