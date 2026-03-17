/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ICaseConverterLine, ICaseType } from "@/types/tools/text/CaseConverter";
import { getCaseTypes } from "@/config/tools/text/CaseConverter";
import { strToWordArray } from "@/services/utils/strToWordArray";
import CaseSelecter from "./CaseSelecter";
import { copy } from "@/services/utils/copy";


/* ----- PROPS ----- */
interface CaseConverterLineProps {
	line: ICaseConverterLine;
	updateLine: (line: ICaseConverterLine) => void;
	deleteLine: (line: ICaseConverterLine) => void;
	handleKeyDown: (e: React.KeyboardEvent, id: string) => void;
	inputRef: (el: HTMLInputElement | null) => void;
}


/* ----- COMPONENT ----- */
function CaseConverterLine({ line, updateLine, deleteLine, handleKeyDown, inputRef }: CaseConverterLineProps) {
	const CaseTypes = getCaseTypes();

	const handleInputUpdate = (input: string, caseType: ICaseType) => {
		const words = strToWordArray(input);
		updateLine({ ...line, input, caseType, output: caseType.transform(words) });
	}

	const handleCaseUpdate = (value: string) => {
		const newCase = CaseTypes.find(t => t.name === value)!;
		handleInputUpdate(line.input, newCase);
	};

	return (
		<div className="group flex flex-col md:flex-row items-center gap-3 w-full bg-zinc-900/20 p-3 rounded-[1.5rem] border border-zinc-800/50 hover:border-zinc-700 transition-all">
			<div className="relative w-full">
				<Input
					ref={inputRef}
					value={line.input}
					onChange={(e) => handleInputUpdate(e.target.value, line.caseType)}
					onKeyDown={(e) => handleKeyDown(e, line.id)}
					placeholder="Entrez du texte..."
					className="bg-zinc-950/40 border-zinc-800 rounded-xl h-12 pl-4 focus-visible:ring-blue-500/20"
				/>
			</div>

			<ArrowRight className="text-zinc-700 hidden md:block shrink-0" size={18} />

			<div className="flex items-center gap-2 w-full">
				<Input
					readOnly
					value={line.output}
					placeholder="Résultat"
					className="bg-zinc-950/60 border-zinc-800 rounded-xl h-12 text-blue-400 font-medium cursor-default"
				/>
				<CaseSelecter value={line.caseType.name} onValueChange={handleCaseUpdate} />

				<Button
					variant="ghost"
					size="icon"
					onClick={() => copy(line.output, `"${line.output}" Copié !`)}
					className="h-12 w-12 rounded-xl hover:bg-blue-500/10 hover:text-blue-500 shrink-0"
				>
					<Copy size={18} />
				</Button>

				<Button
					variant="ghost"
					size="icon"
					onClick={() => deleteLine(line)}
					className="h-12 w-12 rounded-xl hover:bg-red-500/10 hover:text-red-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<X size={18} />
				</Button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CaseConverterLine;
