/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useMemo } from "react";
import { copy } from "@/services/utils/copy";
import { toast } from "sonner";
import { ExportFormat, INeutral, IOption } from "@/types/tools/design/ColorPalette";
import FormatSelecter from "./FormatSelecter";
import Buttons from "./Buttons";


/* ----- PROPS ----- */
interface IProps {
	baseColor: string;
	options: IOption[];
	activeAccents: string[];
	neutrals: INeutral;
}


/* ----- COMPONENT ----- */
function ExportSection({ baseColor, options, activeAccents, neutrals }: IProps) {
	const [exportFormat, setExportFormat] = useState<ExportFormat>("css");

	const finalExportCode = useMemo(() => {
		const selectedAccents = options.filter(opt => activeAccents.includes(opt.id));
		const data: Record<string, string> = {
			primary: baseColor.toUpperCase(),
			...Object.fromEntries(selectedAccents.map((a, i) => [`accent_${i + 1}`, a.hex])),
			...neutrals
		};

		if (exportFormat === "css") {
			return `:root {\n${Object.entries(data)
				.map(([key, val]) => `  --${key.replace("_", "-")}: ${val};`)
				.join("\n")}\n}`;
		}
		if (exportFormat === "csv") {
			return `Name,Hex\n${Object.entries(data)
				.map(([key, val]) => `${key},${val}`)
				.join("\n")}`;
		}
		return JSON.stringify(data, null, 2);
	}, [baseColor, options, activeAccents, neutrals, exportFormat]);

	const handleDownload = () => {
		const blob = new Blob([finalExportCode], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `dwebtools-palette.${exportFormat}`;
		link.click();
		URL.revokeObjectURL(url);
		toast.success(`Fichier .${exportFormat} téléchargé !`);
	};

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/80 shadow-xl flex flex-col gap-6">
			<div className="flex justify-between items-center px-2">
				<FormatSelecter exportFormat={exportFormat} setExportFormat={setExportFormat} />
				<Buttons
					onCopy={() => copy(finalExportCode, "Palette copiée !")}
					onExport={handleDownload}
				/>
			</div>

			<div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 font-mono text-[11px] text-blue-300/80 shadow-inner overflow-x-auto min-h-32">
				<pre className="whitespace-pre-wrap text-left leading-relaxed">
					{finalExportCode}
				</pre>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default ExportSection;
