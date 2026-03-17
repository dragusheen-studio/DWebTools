/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy, FileJson, FileCode, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/services/utils/copy";
import { cn } from "@/lib/utils";
import { toast } from "sonner";


/* ----- PROPS ----- */
interface Props {
	mode: "json-to-yaml" | "yaml-to-json";
	output: string;
	error: string | null;
}


/* ----- COMPONENT ----- */
function RightArea({ mode, output, error }: Props) {
	const handleDownload = () => {
		if (!output || error) return;
		const extension = mode === "json-to-yaml" ? "yaml" : "json";
		const blob = new Blob([output], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `converted_file.${extension}`;
		link.click();
		URL.revokeObjectURL(url);
		toast.success(`Fichier .${extension} téléchargé !`);
	};

	return (
		<div className="h-150 p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
			<div className="flex justify-between items-center text-left">
				<div className="flex flex-col gap-1">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Résultat</span>
					<h3 className="text-xl font-bold text-zinc-200 uppercase tracking-tighter flex items-center gap-2">
						{mode === "json-to-yaml" ? <FileCode size={20} className="text-purple-500" /> : <FileJson size={20} className="text-yellow-500" />}
						{mode === "json-to-yaml" ? "YAML" : "JSON"}
					</h3>
				</div>
				<div className="flex gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => copy(output, "Code copié !")}
						disabled={!output || !!error}
						className="text-zinc-600 hover:text-blue-400"
					>
						<Copy size={18} />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={handleDownload}
						disabled={!output || !!error}
						className="text-zinc-600 hover:text-emerald-400"
					>
						<Download size={18} />
					</Button>
				</div>
			</div>

			<div className={cn(
				"flex-1 border rounded-2xl p-6 font-mono text-[10px] whitespace-pre overflow-y-auto scrollbar-hide transition-colors",
				error ? "bg-red-500/5 border-red-500/20 text-red-400" : "bg-zinc-900/30 border-zinc-800 text-zinc-400"
			)}>
				{error ? (
					<div className="flex flex-col gap-2">
						<span className="font-bold uppercase tracking-widest text-[9px]">Erreur de parsing :</span>
						<span className="opacity-80">{error}</span>
					</div>
				) : (
					output || <span className="opacity-20 italic">Le résultat converti apparaîtra ici...</span>
				)}
			</div>

			{output && !error && (
				<div className="flex items-center gap-2 px-2 text-[9px] font-black uppercase tracking-widest text-emerald-500/80 italic">
					<CheckCircle2 size={12} />
					Syntaxe valide
				</div>
			)}
		</div>
	);
}


/* ----- EXPORT ----- */
export default RightArea;
