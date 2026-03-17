/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import yaml from "js-yaml";
import SwitchButton from "@/components/custom-ui/SwitchButton";
import LeftArea from "@/components/pages/tools/development/json-yaml/LeftArea";
import RightArea from "@/components/pages/tools/development/json-yaml/RightArea";


/* ----- COMPONENT ----- */
function JsonYamlContent() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [mode, setMode] = useState<"json-to-yaml" | "yaml-to-json">("json-to-yaml");
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!input.trim()) {
			setOutput("");
			setError(null);
			return;
		}

		try {
			if (mode === "json-to-yaml") {
				const jsonObj = JSON.parse(input);
				const yamlStr = yaml.dump(jsonObj, { indent: 2, noRefs: true });
				setOutput(yamlStr);
			} else {
				const yamlObj = yaml.load(input);
				const jsonStr = JSON.stringify(yamlObj, null, 2);
				setOutput(jsonStr);
			}
			setError(null);
		} catch (e: any) {
			setError(e.message);
			setOutput("");
		}
	}, [input, mode]);

	const handleSwitch = () => {
		if (output && !error) setInput(output);
		setMode(mode === "json-to-yaml" ? "yaml-to-json" : "json-to-yaml");
	};

	const clear = () => {
		setInput("");
		setOutput("");
		setError(null);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full pb-20 px-4 relative">
			<LeftArea mode={mode} clear={clear} input={input} setInput={setInput} />
			<SwitchButton handleSwitch={handleSwitch} mode={mode === "yaml-to-json"} />
			<RightArea mode={mode} output={output} error={error} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default JsonYamlContent;
