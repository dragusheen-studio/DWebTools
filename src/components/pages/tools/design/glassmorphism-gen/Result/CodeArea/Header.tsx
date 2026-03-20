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


/* ----- PROPS ----- */
interface Props {
	exportFormat: "css" | "tailwind" | "react";
	setExportFormat: (v: "css" | "tailwind" | "react") => void;
}


/* ----- COMPONENT ----- */
function Header({ exportFormat, setExportFormat }: Props) {
	return (
		<div className="flex items-center gap-6">
			<div className="flex items-center gap-2">
				<Code size={16} className="text-blue-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Exportation</span>
			</div>

			<Select value={exportFormat} onValueChange={(v: any) => setExportFormat(v)}>
				<SelectTrigger className="w-32 bg-zinc-950/50 border-zinc-800 h-8 rounded-lg text-[10px] font-bold uppercase tracking-widest">
					<SelectValue />
				</SelectTrigger>
				<SelectContent className="bg-zinc-900 border-zinc-800">
					<SelectItem value="css" className="text-xs">CSS RAW</SelectItem>
					<SelectItem value="tailwind" className="text-xs">TAILWIND</SelectItem>
					<SelectItem value="react" className="text-xs">REACT OBJ</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Header;
