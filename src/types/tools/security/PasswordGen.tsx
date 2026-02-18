/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { LucideIcon } from "lucide-react";


/* ----- INTERFACES ----- */
type PatternType = "text" | "date";
type StrengthValue = "faible" | "moyen" | "fort" | "sécurisé" | "vide" | "compromis";

interface IBannedPattern {
	id: string;
	label: string;
	value: string;
	type: PatternType;
	isDefault?: boolean;
}

interface IPasswordGen {
	length: number;
	options: IPasswordOption[];
	charsets: string;
	password: string;
}

interface IPasswordOption {
	name: string;
	charsets: string;
}

interface IPasswordStrength {
	score: number;
	label: string;
	textColor: string;
	rangeColor: string;
	icon: LucideIcon;
}


/* ----- EXPORTS ----- */
export type {
	IBannedPattern,
	IPasswordGen,
	IPasswordOption,
	IPasswordStrength,
	PatternType,
	StrengthValue,
};
