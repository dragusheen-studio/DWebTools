/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect, useCallback } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


/* ----- DATA ----- */
const LOREM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


/* ----- PROPS ----- */
interface Props {
	setTextChunks: (textChunks: string[]) => void;
	asHtml: boolean;
	setAsHtml: (asHtml: boolean) => void;
}


/* ----- COMPONENT ----- */
function ParamsSidebar({ setTextChunks, asHtml, setAsHtml }: Props) {
	const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
	const [count, setCount] = useState(3);
	const [startWithLorem, setStartWithLorem] = useState(true);

	const generateChunks = useCallback(() => {
		let chunks: string[] = [];
		const sentencesPool = LOREM_TEXT.split(". ");

		if (type === "paragraphs") {
			for (let i = 0; i < count; i++) {
				let p = "";
				const pLength = Math.floor(Math.random() * 3) + 3;
				for (let j = 0; j < pLength; j++) {
					p += sentencesPool[Math.floor(Math.random() * sentencesPool.length)] + ". ";
				}
				chunks.push(p.trim());
			}
		} else if (type === "sentences") {
			let s = "";
			for (let i = 0; i < count; i++) {
				s += sentencesPool[Math.floor(Math.random() * sentencesPool.length)] + ". ";
			}
			chunks = [s.trim()];
		} else {
			const wordsPool = LOREM_TEXT.replace(/[.,]/g, "").split(" ");
			let w = "";
			for (let i = 0; i < count; i++) {
				w += wordsPool[Math.floor(Math.random() * wordsPool.length)] + " ";
			}
			chunks = [w.trim() + "."];
		}

		if (startWithLorem && chunks.length > 0) {
			const loremPrefix = "Lorem ipsum dolor sit amet. ";
			if (!chunks[0].toLowerCase().startsWith("lorem")) {
				chunks[0] = loremPrefix + chunks[0];
			}
		}

		setTextChunks(chunks);
	}, [type, count, startWithLorem]);

	useEffect(() => {
		generateChunks();
	}, [generateChunks]);

	function handleTypeChange(newType: "paragraphs" | "sentences" | "words") {
		if (newType === type) return;
		if (newType === "words") setStartWithLorem(false);

		setType(newType);
		setCount(3);
	}

	return (
		<div className="lg:col-span-1 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-8 shadow-2xl">
				<div className="flex flex-col gap-1 text-left">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Paramètres</span>
					<h3 className="text-xl font-bold text-zinc-200">Générateur</h3>
				</div>

				<div className="flex flex-col gap-3">
					<Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Générer par</Label>
					<Select value={type} onValueChange={(v: any) => handleTypeChange(v)}>
						<SelectTrigger className="w-full bg-zinc-900/50 border-zinc-800 h-12 rounded-2xl">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="bg-zinc-900 border-zinc-800">
							<SelectItem value="paragraphs">Paragraphes</SelectItem>
							<SelectItem value="sentences">Phrases</SelectItem>
							<SelectItem value="words">Mots</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-6">
					<div className="flex justify-between items-end">
						<Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Quantité</Label>
						<span className="text-xl font-mono font-black text-blue-500">{count}</span>
					</div>
					<Slider
						value={[count]}
						onValueChange={(v) => setCount(v[0])}
						max={type === "words" ? 200 : 20}
						min={1}
						step={1}
					/>
				</div>

				<div className="h-px bg-zinc-800/50" />

				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
						<Label htmlFor="start-lorem" className="text-xs font-bold text-zinc-400">Commencer par "Lorem ipsum"</Label>
						<Switch id="start-lorem" checked={startWithLorem} onCheckedChange={setStartWithLorem} disabled={type === "words"} />
					</div>
					<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
						<Label htmlFor="as-html" className="text-xs font-bold text-zinc-400">Formatage HTML (&lt;p&gt;)</Label>
						<Switch id="as-html" checked={asHtml} onCheckedChange={setAsHtml} />
					</div>
				</div>

				<Button
					onClick={generateChunks}
					className="w-full h-14 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-widest gap-3 transition-all active:scale-95"
				>
					<RefreshCw size={18} /> Régénérer
				</Button>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ParamsSidebar;
