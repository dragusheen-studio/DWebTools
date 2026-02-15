/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useRef, useState } from "react";
import { toast } from "sonner";
import { ICaseConverterLine, ICaseType } from "@/types/tools/CaseConverter";
import { getCaseTypes } from "@/config/tools/CaseConverter";
import { strToWordArray } from "@/services/strToWordArray";
import CaseConverterLine from "@/components/pages/tools/case-converter/Line";
import GlobalActions from "@/components/pages/tools/case-converter/GlobalAction";


/* ----- COMPONENT ----- */
function CaseConverterContent() {
	const CaseTypes = getCaseTypes();
	const defaultLines: ICaseConverterLine[] = [{ id: crypto.randomUUID(), input: "", output: "", caseType: CaseTypes[2] }]
	const [lines, setLines] = useState<(ICaseConverterLine & { id: string })[]>(defaultLines);
	const inputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

	const focusLine = (id: string) => {
		setTimeout(() => {
			const input = inputRefs.current.get(id);
			if (input) input.focus();
		}, 0);
	};

	const handleUpdate = (id: string, input: string, caseType: ICaseType) => {
		const words = strToWordArray(input);
		setLines(prev => prev.map(line =>
			line.id === id
				? { ...line, input, caseType, output: caseType.transform(words) }
				: line
		));
	};

	const addLine = (initialInput = "") => {
		const newId = crypto.randomUUID();
		const lastType = lines[lines.length - 1]?.caseType || CaseTypes[3];
		const words = strToWordArray(initialInput);

		setLines(prev => [...prev, {
			id: newId,
			input: initialInput,
			output: lastType.transform(words),
			caseType: lastType
		}]);

		focusLine(newId);
	};

	const deleteLine = (id: string) => {
		if (lines.length > 1) {
			setLines(prev => prev.filter(l => l.id !== id));
		} else {
			handleUpdate(id, "", lines[0].caseType);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addLine();
		}
	};

	const handlePaste = (e: React.ClipboardEvent) => {
		const pasteData = e.clipboardData.getData('text');
		if (pasteData.includes('\n')) {
			e.preventDefault();
			const rawLines = pasteData.split('\n').filter(l => l.trim() !== "");

			const currentType = lines[lines.length - 1].caseType;
			const newMappedLines = rawLines.map(text => ({
				id: crypto.randomUUID(),
				input: text,
				output: currentType.transform(strToWordArray(text)),
				caseType: currentType
			}));

			if (lines.length === 1 && lines[0].input === "") {
				setLines(newMappedLines);
			} else {
				setLines(prev => [...prev, ...newMappedLines]);
			}
			toast.success(`${rawLines.length} lignes ajoutées`);
		}
	};

	const updateAllTypes = (newType: ICaseType) => {
		setLines(prev => prev.map(line => ({
			...line,
			caseType: newType,
			output: newType.transform(strToWordArray(line.input))
		})));
		toast.success(`Toutes les lignes passées en ${newType.name}`);
	};

	const handleReset = () => {
		setLines(defaultLines);
		toast.success("Toutes les lignes réinitialisées !");
	};


	return (
		<div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
			<div className="flex flex-col gap-3" onPaste={handlePaste}>
				{lines.map((l) => (
					<CaseConverterLine
						key={l.id}
						line={l}
						updateLine={(l) => handleUpdate(l.id, l.input, l.caseType)}
						deleteLine={(l) => deleteLine(l.id)}
						handleKeyDown={(e, id) => handleKeyDown(e, id)}
						inputRef={(el) => {
							if (el) inputRefs.current.set(l.id, el);
							else inputRefs.current.delete(l.id);
						}}
					/>
				))}
			</div>
			<GlobalActions
				lines={lines}
				updateAllTypes={updateAllTypes}
				resetLines={handleReset}
				addLine={addLine}
			/>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CaseConverterContent;
