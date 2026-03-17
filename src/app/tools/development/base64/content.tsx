/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useCallback, useEffect, SetStateAction } from "react";
import { Copy, ArrowRightLeft, Upload, FileText, Image as ImageIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { copy } from "@/services/utils/copy";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

/* ----- COMPONENT ----- */
function Base64Content() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [mode, setMode] = useState<"encode" | "decode">("encode");
	const [fileInfo, setFileInfo] = useState<{ name: string; size: string } | null>(null);

	// Encodage UTF-8 safe (gère les accents)
	const encodeBase64 = (str: string) => {
		try {
			const bytes = new TextEncoder().encode(str);
			const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
			return btoa(binString);
		} catch (e) {
			return "Erreur d'encodage...";
		}
	};

	// Décodage UTF-8 safe
	const decodeBase64 = (str: string) => {
		try {
			const binString = atob(str);
			const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
			return new TextDecoder().decode(bytes);
		} catch (e) {
			return "Format Base64 invalide...";
		}
	};

	// Transformation automatique
	useEffect(() => {
		if (!input) {
			setOutput("");
			return;
		}
		if (mode === "encode") setOutput(encodeBase64(input));
		else setOutput(decodeBase64(input));
	}, [input, mode]);

	const handleSwitch = () => {
		setMode(prev => prev === "encode" ? "decode" : "encode");
		setInput(output); // On inverse le contenu pour continuer la chaîne
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		if (file.size > 5 * 1024 * 1024) {
			toast.error("Fichier trop lourd (max 5Mo)");
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result as string;
			setMode("encode");
			setInput(`[Fichier : ${file.name}]`); // Label visuel
			setOutput(result);
			setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) + " KB" });
			toast.success("Fichier converti en Base64 !");
		};
		reader.readAsDataURL(file);
	};

	const clearAll = () => {
		setInput("");
		setOutput("");
		setFileInfo(null);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full pb-20 px-4">

			{/* BLOC INPUT */}
			<div className="flex flex-col gap-6">
				<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl relative min-h-100">
					<div className="flex justify-between items-center">
						<div className="flex flex-col gap-1 text-left">
							<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-2">Entrée</span>
							<h3 className="text-xl font-bold text-zinc-200 ml-2">{mode === "encode" ? "Texte Clair" : "Code Base64"}</h3>
						</div>
						<Button variant="ghost" size="icon" onClick={clearAll} className="text-zinc-500 hover:text-red-400">
							<Trash2 size={18} />
						</Button>
					</div>

					<Textarea
						value={input}
						onChange={(e: { target: { value: SetStateAction<string>; }; }) => setInput(e.target.value)}
						placeholder={mode === "encode" ? "Tapez votre texte ici..." : "Collez votre code Base64 ici..."}
						className="flex-1 bg-zinc-900/30 border-zinc-800 rounded-2xl p-6 font-mono text-sm resize-none focus-visible:ring-blue-500/20"
					/>

					{/* ZONE UPLOAD (Uniquement en mode Encode) */}
					{mode === "encode" && (
						<div className="relative group">
							<input
								type="file"
								onChange={handleFileUpload}
								className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
							/>
							<div className="border-2 border-dashed border-zinc-800 rounded-2xl p-4 flex items-center justify-center gap-3 bg-zinc-900/20 group-hover:border-blue-500/50 transition-all">
								<Upload size={18} className="text-zinc-500" />
								<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Ou glisser un fichier (Img, SVG...)</span>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* BOUTON SWITCH (Mobile: Central / Desktop: Floating) */}
			<div className="lg:absolute lg:left-1/2 lg:top-75 lg:-translate-x-1/2 z-20 flex justify-center">
				<Button
					onClick={handleSwitch}
					className="h-14 w-14 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/20 active:scale-90 transition-all"
				>
					<ArrowRightLeft size={24} className={cn("transition-transform duration-500", mode === "decode" && "rotate-180")} />
				</Button>
			</div>

			{/* BLOC OUTPUT */}
			<div className="flex flex-col gap-6">
				<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl min-h-100 relative">
					<div className="flex justify-between items-center">
						<div className="flex flex-col gap-1 text-left">
							<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-2">Sortie</span>
							<h3 className="text-xl font-bold text-zinc-200 ml-2">{mode === "encode" ? "Base64" : "Texte Décodé"}</h3>
						</div>
						<Button
							onClick={() => copy(output, "Copié dans le presse-papier !")}
							disabled={!output}
							size="icon"
							variant="ghost"
							className="text-zinc-500 hover:text-blue-400"
						>
							<Copy size={18} />
						</Button>
					</div>

					<div className="flex-1 bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 font-mono text-xs text-zinc-400 break-all overflow-y-auto max-h-62.5">
						{output || <span className="italic opacity-30">Le résultat apparaîtra ici...</span>}
					</div>

					{/* PREVIEW SI IMAGE DÉTECTÉE */}
					{output.startsWith("data:image/") && (
						<div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-center gap-4 animate-in fade-in zoom-in-95">
							<div className="h-12 w-12 rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">
								<img src={output} alt="Preview" className="max-h-full max-w-full object-contain" />
							</div>
							<div className="flex flex-col text-left">
								<span className="text-[9px] font-black uppercase text-blue-400">Aperçu de l&apos;image</span>
								<span className="text-[10px] text-zinc-500 truncate max-w-37.5">{fileInfo?.name || "Image détectée"}</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default Base64Content;
