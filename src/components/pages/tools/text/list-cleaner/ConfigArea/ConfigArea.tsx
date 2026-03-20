/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import CleanConfig from "./CleanConfig";
import TransformationConfig from "./TransformationConfig";
import OrganisationConfig from "./OrganisationConfig";
import CustomConfig from "./CustomConfig";


/* ----- PROPS ----- */
interface Props {
	input: string;
	setOutput: (value: string) => void;
	setCount: (value: number) => void;
	setRemoved: (value: number) => void;
}


/* ----- COMPONENT ----- */
function ConfigArea({ input, setOutput, setCount, setRemoved }: Props) {
	const [removeDuplicates, setRemoveDuplicates] = useState(true);
	const [removeEmptyLines, setRemoveEmptyLines] = useState(true);
	const [trimLines, setTrimLines] = useState(true);

	const [textCase, setTextCase] = useState<"original" | "upper" | "lower" | "capitalize">("original");
	const [caseSensitive, setCaseSensitive] = useState(false);

	const [sortOrder, setSortOrder] = useState<"original" | "asc" | "desc">("asc");
	const [reverse, setReverse] = useState(false);
	const [addNumbers, setAddNumbers] = useState(false);

	const [prefix, setPrefix] = useState("");
	const [suffix, setSuffix] = useState("");

	useEffect(() => {
		if (!input.trim()) {
			setOutput("");
			setCount(0);
			setRemoved(0);
			return;
		}

		let lines = input.split("\n");
		const initialCount = lines.length;

		if (trimLines) lines = lines.map(l => l.trim());

		if (textCase === "lower") lines = lines.map(l => l.toLowerCase());
		else if (textCase === "upper") lines = lines.map(l => l.toUpperCase());
		else if (textCase === "capitalize") lines = lines.map(l => l.charAt(0).toUpperCase() + l.slice(1).toLowerCase());

		if (removeEmptyLines) lines = lines.filter(l => l.length > 0);

		if (removeDuplicates) {
			if (caseSensitive) {
				lines = Array.from(new Set(lines));
			} else {
				const seen = new Set();
				lines = lines.filter(line => {
					const lower = line.toLowerCase();
					return seen.has(lower) ? false : seen.add(lower);
				});
			}
		}

		if (sortOrder === "asc")
			lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
		else if (sortOrder === "desc")
			lines.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));

		lines = lines.map((l, i) => {
			let line = l;
			if (prefix) line = prefix + line;
			if (suffix) line = line + suffix;
			if (addNumbers) line = `${i + 1}. ${line}`;
			return line;
		});

		if (reverse) lines.reverse();

		setOutput(lines.join("\n"));
		setCount(lines.length);
		setRemoved(initialCount - lines.length);
	}, [input, removeDuplicates, removeEmptyLines, trimLines, textCase, caseSensitive, sortOrder, reverse, addNumbers, prefix, suffix]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<CleanConfig removeDuplicates={removeDuplicates} setRemoveDuplicates={setRemoveDuplicates} removeEmptyLines={removeEmptyLines} setRemoveEmptyLines={setRemoveEmptyLines} trimLines={trimLines} setTrimLines={setTrimLines} />
			<TransformationConfig textCase={textCase} setTextCase={setTextCase} caseSensitive={caseSensitive} setCaseSensitive={setCaseSensitive} />
			<OrganisationConfig sortOrder={sortOrder} setSortOrder={setSortOrder} reverse={reverse} setReverse={setReverse} addNumbers={addNumbers} setAddNumbers={setAddNumbers} />
			<CustomConfig prefix={prefix} setPrefix={setPrefix} suffix={suffix} setSuffix={setSuffix} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default ConfigArea;
