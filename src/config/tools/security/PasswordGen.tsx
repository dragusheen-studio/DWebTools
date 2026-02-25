/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { IPasswordOption, StrengthValue } from "@/types/tools/security/PasswordGen";
import { LucideIcon, Shield, ShieldCheck, ShieldOff, ShieldX } from "lucide-react";


/* ----- DATAS ----- */
const PasswordOptions: IPasswordOption[] = [
	{
		name: "Lettres majuscules",
		charsets: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	},
	{
		name: "Lettres minuscules",
		charsets: "abcdefghijklmnopqrstuvwxyz",
	},
	{
		name: "Nombres",
		charsets: "0123456789",
	},
	{
		name: "Symboles",
		charsets: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
	}
];

const strengthLabels: Record<StrengthValue, string> = {
	faible: "Faible",
	moyen: "Moyen",
	fort: "Fort",
	sécurisé: "Très sécurisé",
	vide: "Vide",
	compromis: "Compromis",
};

const strengthRangeColors: Record<StrengthValue, string> = {
	faible: "bg-red-500",
	moyen: "bg-orange-500",
	fort: "bg-blue-500",
	sécurisé: "bg-emerald-500",
	vide: "bg-zinc-500",
	compromis: "bg-red-500",
};

const strengthTextColors: Record<StrengthValue, string> = {
	faible: "text-red-500",
	moyen: "text-orange-500",
	fort: "text-blue-500",
	sécurisé: "text-emerald-500",
	vide: "text-zinc-500",
	compromis: "text-red-500",
};

const strengthIcons: Record<StrengthValue, LucideIcon> = {
	faible: ShieldX,
	moyen: Shield,
	fort: ShieldCheck,
	sécurisé: ShieldCheck,
	vide: ShieldOff,
	compromis: ShieldX,
};


/* ----- FUNCTIONS ----- */
function getPasswordOptions() {
	return PasswordOptions;
}

function getStrengthLabel(value: StrengthValue) {
	return strengthLabels[value];
}

function getStrengthRangeColor(value: StrengthValue) {
	return strengthRangeColors[value];
}

function getStrengthTextColor(value: StrengthValue) {
	return strengthTextColors[value];
}

function getStrengthIcon(value: StrengthValue) {
	return strengthIcons[value];
}

function getStrengthFromValue(score: number, value: StrengthValue) {
	return {
		score,
		label: getStrengthLabel(value),
		rangeColor: getStrengthRangeColor(value),
		textColor: getStrengthTextColor(value),
		icon: getStrengthIcon(value)
	}
}

function getStrengthFromPassword(password: string, selectedOptsCount: number, compromised: boolean) {
	if (password.length === 0) return getStrengthFromValue(0, "vide");

	const score = Math.min((password.length / 32) * 70, 70) + (selectedOptsCount - 1) * 10;
	if (compromised) return getStrengthFromValue(score, "compromis");
	if (score <= 25) return getStrengthFromValue(score, "faible");
	if (score <= 50) return getStrengthFromValue(score, "moyen");
	if (score <= 75) return getStrengthFromValue(score, "fort");
	return getStrengthFromValue(score, "sécurisé");
}


/* ----- EXPORTS ----- */
export {
	getPasswordOptions,
	getStrengthLabel,
	getStrengthRangeColor,
	getStrengthTextColor,
	getStrengthIcon,
	getStrengthFromValue,
	getStrengthFromPassword,
};
