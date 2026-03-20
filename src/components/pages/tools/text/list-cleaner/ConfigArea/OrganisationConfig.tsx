/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { SortAsc, SortDesc, ListOrdered } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";


/* ----- PROPS ----- */
interface Props {
	sortOrder: "original" | "asc" | "desc";
	setSortOrder: (value: "original" | "asc" | "desc") => void;
	reverse: boolean;
	setReverse: (value: boolean) => void;
	addNumbers: boolean;
	setAddNumbers: (value: boolean) => void;
}


/* ----- COMPONENT ----- */
function OrganisationConfig({ sortOrder, setSortOrder, reverse, setReverse, addNumbers, setAddNumbers }: Props) {
	return (
		<div className="flex flex-col gap-4 p-6 rounded-3xl bg-zinc-900/20 border border-zinc-800/50">
			<div className="flex items-center gap-2 mb-2">
				<ListOrdered size={14} className="text-emerald-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Organisation</span>
			</div>

			<div className="flex gap-1 bg-zinc-950/50 p-1 rounded-xl border border-zinc-800">
				<Button variant={sortOrder === "original" ? "secondary" : "ghost"} size="xs" onClick={() => setSortOrder("original")} className="flex-1 text-[9px]">ORIG</Button>
				<Button variant={sortOrder === "asc" ? "secondary" : "ghost"} size="xs" onClick={() => setSortOrder("asc")} className="flex-1 text-[9px]"><SortAsc size={14} /> <span className="text-[10px] font-bold">ASC</span></Button>
				<Button variant={sortOrder === "desc" ? "secondary" : "ghost"} size="xs" onClick={() => setSortOrder("desc")} className="flex-1 text-[9px]"><SortDesc size={14} /> <span className="text-[10px] font-bold">DESC</span></Button>
			</div>

			<div className="grid grid-cols-2 gap-3">
				<div className="flex items-center justify-between p-2 rounded-xl bg-zinc-950/30 border border-zinc-800">
					<span className="text-[9px] font-bold uppercase text-zinc-600">Inverser</span>
					<Switch size="sm" checked={reverse} onCheckedChange={setReverse} />
				</div>
				<div className="flex items-center justify-between p-2 rounded-xl bg-zinc-950/30 border border-zinc-800">
					<span className="text-[9px] font-bold uppercase text-zinc-600">Numéros</span>
					<Switch size="sm" checked={addNumbers} onCheckedChange={setAddNumbers} />
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default OrganisationConfig;
