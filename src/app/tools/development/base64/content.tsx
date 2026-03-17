/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import SwitchButton from "@/components/custom-ui/SwitchButton";
import LeftArea from "@/components/pages/tools/development/base64/LeftArea";
import RightArea from "@/components/pages/tools/development/base64/RightArea";


/* ----- COMPONENT ----- */
function Base64Content() {
	const [mode, setMode] = useState<"encode" | "decode">("encode");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [error, setError] = useState(false);

	/* ----- LOGIQUE DE CONVERSION ----- */
	useEffect(() => {
		if (!input) {
			setOutput("");
			setError(false);
			return;
		}

		try {
			if (mode === "encode") {
				const bytes = new TextEncoder().encode(input);
				const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
				setOutput(btoa(binString));
				setError(false);
			} else {
				const binString = atob(input.trim());
				const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
				setOutput(new TextDecoder().decode(bytes));
				setError(false);
			}
		} catch (e) {
			setOutput("Format Base64 invalide ou corrompu...");
			setError(true);
		}
	}, [input, mode]);

	const handleSwitch = () => {
		if (output && !error) setInput(output);
		setMode(mode === "encode" ? "decode" : "encode");
	};

	const clear = () => {
		setInput("");
		setOutput("");
		setError(false);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full pb-20 px-4 relative">
			<LeftArea mode={mode} clear={clear} input={input} setInput={setInput} />
			<SwitchButton handleSwitch={handleSwitch} mode={mode == "decode"} />
			<RightArea mode={mode} output={output} error={error} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Base64Content;
