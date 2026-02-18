/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Plus, Trash2, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ICaseConverterLine, ICaseType } from "@/types/tools/text/CaseConverter";
import { getCaseTypes } from "@/config/tools/text/CaseConverter";
import CaseSelecter from "@/components/pages/tools/case-converter/CaseSelecter";


interface GlobalActionsProps {
	lines: ICaseConverterLine[];
	updateAllTypes: (type: ICaseType) => void;
	resetLines: () => void;
	addLine: () => void;
}


/* ----- COMPONENT ----- */
function GlobalActions({ lines, updateAllTypes, resetLines, addLine }: GlobalActionsProps) {
	const CaseTypes = getCaseTypes();

	const globalCaseName = useMemo(() => {
		const firstType = lines[0].caseType.name;
		const allSame = lines.every(l => l.caseType.name === firstType);
		return allSame ? firstType : "multiple";
	}, [lines]);

	const updateTypes = (typeName: string) => {
		const newType = CaseTypes.find(t => t.name === typeName);
		if (!newType) return;
		updateAllTypes(newType);
	};

	const copyAll = () => {
		const allOutput = lines
			.map(l => l.output)
			.filter(out => out !== "")
			.join("\n");

		if (!allOutput) return toast.error("Rien à copier !");

		navigator.clipboard.writeText(allOutput);
		toast.success("Toutes les lignes copiées !");
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4">
				<div className="flex flex-wrap items-center justify-center gap-3 bg-zinc-900/40 p-2 rounded-[1.5rem] border border-zinc-800/50">
					<Button
						onClick={() => addLine()}
						variant="outline"
						className="rounded-2xl border-zinc-800 bg-zinc-900/50 hover:bg-blue-500/5 hover:border-blue-500/30 gap-2 h-12 px-6"
					>
						<Plus size={18} />
						<span className="font-bold uppercase text-[10px] tracking-[0.2em]">Ajouter une ligne</span>
					</Button>

					<Button
						onClick={resetLines}
						variant="ghost"
						className="text-zinc-500 hover:text-red-400 font-bold uppercase text-[10px] tracking-[0.2em]"
					>
						<Trash2 size={16} className="mr-2" />
						Reset
					</Button>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-3 bg-zinc-900/40 p-2 rounded-[1.5rem] border border-zinc-800/50">
					<CaseSelecter value={globalCaseName} onValueChange={updateTypes} label="Global" />
					<Button
						onClick={copyAll}
						className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl gap-2 h-10 px-5 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]"
					>
						<Copy size={16} />
						<span className="font-bold uppercase text-[10px] tracking-widest">Copy All</span>
					</Button>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default GlobalActions;
