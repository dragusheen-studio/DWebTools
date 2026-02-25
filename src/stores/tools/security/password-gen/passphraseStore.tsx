/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { IPassphrase } from "@/types/tools/security/PasswordGen";


/* ----- STORE ----- */
let passphraseStorage: IPassphrase = {
	number: 4,
	lang: "fr",
	words: ["correct", "cheval", "batterie", "agrafe"],
};


/* ----- FETCH ----- */
async function fetchNewWords(): Promise<IPassphrase> {
	const baseUrl = "https://random-word-api.herokuapp.com/word";

	const params = new URLSearchParams({ number: passphraseStorage.number.toString() });
	if (passphraseStorage.lang !== "en")
		params.append("lang", passphraseStorage.lang);

	try {
		const response = await fetch(`${baseUrl}?${params.toString()}`);
		if (!response.ok) throw new Error("Erreur API");
		const words = await response.json();
		passphraseStorage.words = words;
	} catch (error) {
		console.error("Passphrase API Error:", error);
	}

	return { ...passphraseStorage };
}


/* ----- GETTER ----- */
const getPassphraseSync = (): IPassphrase => ({ ...passphraseStorage });


/* ----- FUNCTIONS ----- */
const updatePassphraseConfig = (lang?: string, number?: number): IPassphrase => {
	if (lang) passphraseStorage.lang = lang;
	if (number) passphraseStorage.number = number;
	return { ...passphraseStorage };
};

const generateNewPassphrase = async (): Promise<IPassphrase> => await fetchNewWords();


/* ----- EXPORT ----- */
export {
	getPassphraseSync,
	updatePassphraseConfig,
	generateNewPassphrase,
};
