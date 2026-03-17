/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { RefreshCw, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IPassphrase } from "@/types/tools/security/PasswordGen";
import { copy } from "@/services/utils/copy";


/* ----- PROPS ----- */
interface PassphraseOptionsProps {
	loading: boolean;
	passphrase: IPassphrase;
	onConfigChange: (lang?: string, num?: number) => void;
	handleGenerate: () => void;
}


/* ----- COMPONENT ----- */
function PassphraseOptions({ loading, passphrase, onConfigChange, handleGenerate }: PassphraseOptionsProps) {
	return (
		<div className="flex flex-wrap gap-4">
			<div className="flex items-center gap-3 bg-zinc-950/40 p-2 px-4 rounded-xl border border-zinc-800">
				<span className="text-[10px] font-black text-zinc-500 uppercase">Mots : {passphrase.number}</span>
				<Slider
					value={[passphrase.number]}
					onValueChange={(v) => onConfigChange(undefined, v[0])}
					min={3} max={8} step={1} className="w-24"
				/>
			</div>

			<Select value={passphrase.lang} onValueChange={(v) => onConfigChange(v)}>
				<SelectTrigger className="w-32 bg-zinc-950/40 border-zinc-800 rounded-xl h-10 text-xs font-bold uppercase">
					<SelectValue />
				</SelectTrigger>
				<SelectContent className="bg-zinc-900 border-zinc-800">
					<SelectItem value="en">Anglais</SelectItem>
					<SelectItem value="fr">Français</SelectItem>
					<SelectItem value="es">Espagnol</SelectItem>
					<SelectItem value="de">Allemand</SelectItem>
					<SelectItem value="it">Italien</SelectItem>
				</SelectContent>
			</Select>

			<Button
				onClick={handleGenerate}
				disabled={loading}
				className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-10 px-6 font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-blue-500/20"
			>
				<RefreshCw size={14} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
				Générer
			</Button>

			<Button
				onClick={() => copy(passphrase.words.join(" "), "Passphrase copiée !")}
				disabled={loading}
				className="bg-zinc-600 hover:bg-zinc-500 text-white rounded-xl h-10 px-6 font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-zinc-500/20"
			>
				<Copy size={14} className="mr-2" />
				Copier
			</Button>
		</div>
	);
}


/* ----- EXPORT ----- */
export default PassphraseOptions;
