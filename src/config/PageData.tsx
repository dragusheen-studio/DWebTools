/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
*/


/* ----- IMPORTS ----- */
import { ICategoryConfig } from "@/types/Category";
import { IPageConfig } from "@/types/PageData";
import { Home, Info, TextCursorInput, ShieldCheck, Code2, ImageIcon, Zap, FileJson, Hash, Database, Terminal, Globe, Cpu, Search, Lock } from "lucide-react";


/* ----- DATAS ----- */
const MainPages: IPageConfig[] = [
	{ name: "Accueil", path: "/", icon: Home },
	{ name: "À propos", path: "/about", icon: Info },
];

const AllCategories: ICategoryConfig[] = [
	{
		name: "Texte",
		icon: TextCursorInput,
		color: "blue",
		tools: [
			{ name: "Compteur de mots", path: "/about", description: "Analyse la longueur et le temps de lecture.", icon: TextCursorInput, size: "small" },
			{ name: "Case Converter", path: "/about", description: "Transformez vos textes en camel, snake ou kebab case.", icon: Zap, size: "medium" },
			{ name: "Lorem Ipsum", path: "/about", description: "Générateur de texte de remplissage modulable.", icon: TextCursorInput, size: "small" },
			{ name: "Markdown Preview", path: "/about", description: "Visualisez vos fichiers .md en temps réel.", icon: FileJson, size: "small" },
		]
	},
	{
		name: "Sécurité",
		icon: ShieldCheck,
		color: "green",
		tools: [
			{ name: "Générateur MDP", path: "/about", description: "Mots de passe ultra-sécurisés et personnalisables.", icon: Lock, size: "large" },
			{ name: "Hash Generator", path: "/about", description: "SHA-256, MD5 et plus pour vos données.", icon: Hash, size: "small" },
			{ name: "Base64 Encoder", path: "/about", description: "Encodez et décodez vos chaînes en Base64.", icon: ShieldCheck, size: "small" },
			{ name: "JWT Debugger", path: "/about", description: "Analysez et vérifiez vos tokens JSON Web.", icon: ShieldCheck, size: "medium" },
		]
	},
	{
		name: "Développement",
		icon: Code2,
		color: "purple",
		tools: [
			{ name: "JSON Formatter", path: "/about", description: "Prettify et validez vos structures JSON.", icon: Code2, size: "medium" },
			{ name: "SQL Formatter", path: "/about", description: "Rendez vos requêtes SQL lisibles.", icon: Database, size: "small" },
			{ name: "Crontab Generator", path: "/about", description: "Créez vos expressions cron sans erreur.", icon: Terminal, size: "small" },
			{ name: "Git Cheatsheet", path: "/about", description: "Toutes les commandes essentielles à portée de main.", icon: Terminal, size: "large" },
			{ name: "Color Picker", path: "/about", description: "Convertissez HEX, RGB, HSL simplement.", icon: ImageIcon, size: "small" },
			{ name: "Port Scanner", path: "/about", description: "Testez la disponibilité de vos ports réseau.", icon: Globe, size: "small" },
		]
	},
	{
		name: "Data & Images",
		icon: ImageIcon,
		color: "orange",
		tools: [
			{ name: "SVG Optimizer", path: "/about", description: "Réduisez la taille de vos fichiers vectoriels.", icon: ImageIcon, size: "medium" },
			{ name: "Unit Converter", path: "/about", description: "Pixels en REM, Bytes en Go, etc.", icon: Cpu, size: "small" },
			{ name: "Regex Tester", path: "/about", description: "Testez vos expressions régulières en live.", icon: Search, size: "small" },
			{ name: "CSV to JSON", path: "/about", description: "Convertissez vos tableaux en données exploitables.", icon: FileJson, size: "small" },
			{ name: "Diff Checker", path: "/about", description: "Comparez deux textes ou fichiers.", icon: Code2, size: "medium" },
			{ name: "Fake Data Gen", path: "/about", description: "Générez des profils utilisateurs pour vos tests.", icon: Database, size: "small" },
		]
	}
];


/* ----- FUNCTIONS ----- */
function GetMainPages() {
	return MainPages;
}

function GetCategoriesPages() {
	return AllCategories.filter(category => category.tools.length > 0);
}

function GetAllTools() {
	return AllCategories.flatMap(category => category.tools.map(tool => ({ ...tool, color: category.color })));
}


/* ----- EXPORTS ----- */
export {
	GetMainPages,
	GetCategoriesPages,
	GetAllTools
};
