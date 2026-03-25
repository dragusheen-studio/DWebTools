/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Code } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExportFormat } from "@/types/tools/design/ColorPalette";


/* ----- PROPS ----- */
interface IProps {
	exportFormat: ExportFormat;
	setExportFormat: (v: ExportFormat) => void;
}


/* ----- COMPONENT ----- */
function FormatSelecter({ exportFormat, setExportFormat }: IProps) {
	return (
		<div className="flex items-center gap-6">
			<div className="flex items-center gap-2">
				<Code size={16} className="text-blue-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Exporter la palette</span>
			</div>

			<Select value={exportFormat} onValueChange={(v: any) => setExportFormat(v)}>
				<SelectTrigger className="w-36 bg-zinc-950/50 border-zinc-800 h-9 rounded-lg text-[10px] font-bold uppercase">
					<SelectValue />
				</SelectTrigger>
				<SelectContent className="bg-zinc-900 border-zinc-800">
					<SelectItem value="json" className="text-xs">JSON Object</SelectItem>
					<SelectItem value="css" className="text-xs">CSS Variables</SelectItem>
					<SelectItem value="csv" className="text-xs">CSV Table</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}

/* ----- EXPORT ----- */
export default FormatSelecter;
