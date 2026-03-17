/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy, Download, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/services/utils/copy";
import { cn } from "@/lib/utils";
import { toast } from "sonner";


/* ----- PROPS ----- */
interface Props {
	mode: "encode" | "decode";
	output: string;
	error: boolean;
}


/* ----- COMPONENT ----- */
function RightArea({ mode, output, error }: Props) {
	const handleDownload = () => {
		if (!output || error) return;
		const blob = new Blob([output], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = mode === "encode" ? "encoded_base64.txt" : "decoded_text.txt";
		link.click();
		URL.revokeObjectURL(url);
		toast.success("Fichier texte téléchargé !");
	};

	return (
		<div className="h-125 p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
			<div className="flex justify-between items-center text-left">
				<div className="flex flex-col gap-1">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Résultat</span>
					<h3 className="text-xl font-bold text-zinc-200 uppercase tracking-tighter">
						{mode === "encode" ? "Base64" : "Texte Décodé"}
					</h3>
				</div>
				<div className="flex gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => copy(output, "Résultat copié !")}
						disabled={!output || error}
						className="text-zinc-600 hover:text-blue-400"
					>
						<Copy size={18} />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={handleDownload}
						disabled={!output || error}
						className="text-zinc-600 hover:text-emerald-400"
					>
						<Download size={18} />
					</Button>
				</div>
			</div>

			<div className={cn(
				"flex-1 border rounded-2xl p-6 font-mono text-[10px] break-all overflow-y-auto scrollbar-hide transition-colors",
				error ? "bg-red-500/5 border-red-500/20 text-red-400" : "bg-zinc-900/30 border-zinc-800 text-zinc-400"
			)}>
				{output || <span className="opacity-20 italic">Le résultat s&apos;affichera ici...</span>}
			</div>

			{output && (
				<div className={cn(
					"flex items-center gap-2 px-2 text-[9px] font-black uppercase tracking-widest italic",
					error ? "text-red-500" : "text-emerald-500/80"
				)}>
					{error ? <AlertCircle size={12} /> : <CheckCircle2 size={12} />}
					{error ? "Erreur de format" : "Prêt pour exportation"}
				</div>
			)}
		</div>
	);
}


/* ----- EXPORT ----- */
export default RightArea;
