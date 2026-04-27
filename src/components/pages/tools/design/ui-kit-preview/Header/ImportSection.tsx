/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ColorRole, IColorToken } from "@/types/tools/design/UIKitPreview";
import { getRoleLabels } from "@/config/tools/design/UIKitPreview";
import { useState } from "react";


/* ----- PROPS ----- */
interface IProps {
	setTokens: React.Dispatch<React.SetStateAction<IColorToken[]>>;
}


/* ----- COMPONENT ----- */
function ImportSection({ setTokens }: IProps) {
	const [importValue, setImportValue] = useState("");

	const handleImport = (val: string) => {
		setImportValue(val);
		try {
			let detected: Record<string, string> = {};
			if (val.trim().startsWith("{")) {
				detected = JSON.parse(val);
			} else if (val.includes("--")) {
				const matches = val.matchAll(/--([\w-]+):\s*(#[a-fA-F0-9]{3,6})/g);
				for (const match of matches) detected[match[1].replace(/-/g, "_")] = match[2];
			} else if (val.includes(",")) {
				val.split("\n").forEach(line => {
					const [k, v] = line.split(",");
					if (k && v && v.trim().startsWith("#")) detected[k.trim()] = v.trim();
				});
			}

			if (Object.keys(detected).length > 0) {
				const newTokens: IColorToken[] = Object.entries(detected).map(([k, v]) => ({
					id: crypto.randomUUID(),
					role: getRoleLabels()[k as ColorRole] ? (k as ColorRole) : "other",
					hex: v
				}));
				setTokens(newTokens);
				toast.success(`${newTokens.length} couleurs détectées.`);
			}
		} catch (e) { }
	};

	return (
		<div className="lg:col-span-4 p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-4 shadow-2xl">
			<div className="flex items-center gap-2 mb-2">
				<Upload size={16} className="text-blue-500" />
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Import intelligent</span>
			</div>
			<Textarea
				placeholder="Collez JSON, CSS ou CSV..."
				className="min-h-48 bg-zinc-900/30 border-zinc-800 text-[10px] font-mono scrollbar-hide focus-visible:ring-blue-500/20"
				value={importValue}
				onChange={(e) => handleImport(e.target.value)}
			/>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ImportSection;
