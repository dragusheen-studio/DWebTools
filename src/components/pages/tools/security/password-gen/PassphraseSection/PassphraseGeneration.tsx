/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { IPassphrase } from "@/types/tools/security/PasswordGen";
import { generateNewPassphrase, getPassphraseSync, updatePassphraseConfig } from "@/stores/tools/security/password-gen/passphraseStore";
import WordsDisplay from "./WordsDisplay";
import PassphraseOptions from "./PassphraseOptions";


/* ----- COMPONENT ----- */
function PassphraseGeneration() {
	const [loading, setLoading] = useState(false);
	const [passphrase, setPassphrase] = useState<IPassphrase>(getPassphraseSync());

	const handleGenerate = async () => {
		setLoading(true);
		const newData = await generateNewPassphrase();
		setPassphrase(newData);
		setLoading(false);
	};

	const onConfigChange = async (lang?: string, num?: number) => {
		const updated = updatePassphraseConfig(lang, num);
		setPassphrase(updated);
		await handleGenerate();
	};

	return (
		<div className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 shadow-sm">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex flex-col gap-1 text-left">
					<h3 className="text-sm font-black uppercase tracking-widest text-zinc-400">Passphrase Generator</h3>
					<a href="https://random-word-api.herokuapp.com/home" target="_blank" className="text-[10px] text-zinc-600 font-bold uppercase hover:text-zinc-500">api random-word</a>
				</div>

				<PassphraseOptions
					loading={loading}
					passphrase={passphrase}
					onConfigChange={onConfigChange}
					handleGenerate={handleGenerate}
				/>
			</div>

			<WordsDisplay words={passphrase.words} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default PassphraseGeneration;
