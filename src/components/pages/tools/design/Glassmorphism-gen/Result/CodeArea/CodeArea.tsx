/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useMemo } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/services/utils/copy";
import { IGlassmorphismConfig } from "@/types/tools/design/GlassmorphismGen";
import Header from "./Header";


/* ----- PROPS ----- */
interface Props {
	config: IGlassmorphismConfig;
}


/* ----- COMPONENT ----- */
function CodeArea({ config }: Props) {
	const [exportFormat, setExportFormat] = useState<"css" | "tailwind" | "react">("css");

	const exportCode = useMemo(() => {
		const { color, opacity, blur, borderRadius, borderOpacity } = config;

		const r = parseInt(color.slice(1, 3), 16) || 255;
		const g = parseInt(color.slice(3, 5), 16) || 255;
		const b = parseInt(color.slice(5, 7), 16) || 255;

		if (exportFormat === "tailwind")
			return `\nbg-[rgba(${r},${g},${b},${opacity})] backdrop-blur-[${blur}px] border border-white/[${borderOpacity}] rounded-[${borderRadius}px]`;
		if (exportFormat === "react")
			return `const glassStyle = {\n  backgroundColor: "rgba(${r}, ${g}, ${b}, ${opacity})",\n  backdropFilter: "blur(${blur}px)",\n  WebkitBackdropFilter: "blur(${blur}px)",\n  borderRadius: "${borderRadius}px",\n  border: "1px solid rgba(255, 255, 255, ${borderOpacity})"\n};`;
		return `background: rgba(${r}, ${g}, ${b}, ${opacity});\nbackdrop-filter: blur(${blur}px);\n-webkit-backdrop-filter: blur(${blur}px);\nborder-radius: ${borderRadius}px;\nborder: 1px solid rgba(255, 255, 255, ${borderOpacity});`;
	}, [config, exportFormat]);

	return (
		<div className="flex-1 p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 flex flex-col gap-6 shadow-xl">
			<div className="flex justify-between items-center px-2">
				<Header exportFormat={exportFormat} setExportFormat={setExportFormat} />

				<Button
					variant="ghost"
					size="icon"
					onClick={() => copy(exportCode, "Copié dans le presse-papier !")}
					className="text-zinc-500 hover:text-blue-400"
				>
					<Copy size={18} />
				</Button>
			</div>

			<div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 font-mono text-xs text-blue-300/90 leading-relaxed shadow-inner overflow-x-auto scrollbar-hide min-h-32">
				<pre className="whitespace-pre-wrap">{exportCode}</pre>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CodeArea;
