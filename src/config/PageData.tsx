/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { ICategoryConfig } from "@/types/Category";
import { IPageConfig } from "@/types/PageData";
import { IToolConfig } from "@/types/Tool";
import {
	Home, Info, TextCursorInput, ShieldCheck, Code2, ImageIcon, Zap, FileJson, Hash, Database,
	Terminal, Cpu, Search, Lock, List, SortAsc, Fingerprint, TextInitial, Link, Layout,
	Palette, QrCode, Maximize, Scaling, FileCode, Languages, Key, Globe, Network, FileSearch,
	Activity, FileOutput, File
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";


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
			{ name: "Compteur de mots", path: "/tools/word-counter", description: "Stats détaillées : mots, signes et temps de lecture.", icon: TextCursorInput, size: "medium", comingSoon: false },
			{ name: "Case Converter", path: "/tools/case-converter", description: "Transformez vos textes en camel, snake ou kebab case.", icon: Zap, size: "small", comingSoon: true },
			{ name: "Lorem Ipsum", path: "/tools/lorem-ipsum", description: "Générateur de texte de remplissage modulable.", icon: FileCode, size: "small", comingSoon: true },
			{ name: "Text Diff Checker", path: "/tools/text-diff", description: "Comparez deux textes pour voir les différences.", icon: FileJson, size: "medium", comingSoon: true },
			{ name: "Remove Duplicates", path: "/tools/remove-duplicates", description: "Nettoyeur de listes pour supprimer les doublons.", icon: List, size: "small", comingSoon: true },
			{ name: "Alphabetical Order", path: "/tools/alphabetical-order", description: "Organise une liste en ordre alphabétique (A-Z / Z-A).", icon: SortAsc, size: "small", comingSoon: true },
		]
	},
	{
		name: "Sécurité",
		icon: ShieldCheck,
		color: "green",
		tools: [
			{ name: "Password Generator", path: "/tools/password-gen", description: "Générateur ultra-personnalisable et sécurisé.", icon: Lock, size: "small", comingSoon: true },
			{ name: "Password Checker", path: "/tools/password-check", description: "Vérifie la complexité d'un password.", icon: Fingerprint, size: "small", comingSoon: true },
			{ name: "Bcrypt Tester", path: "/tools/bcrypt-tester", description: "Hashage et comparaison de mots de passe Bcrypt.", icon: ShieldCheck, size: "small", comingSoon: true },
		]
	},
	{
		name: "Développement",
		icon: Code2,
		color: "purple",
		tools: [
			{ name: "Regex Tester", path: "/tools/regex-tester", description: "Testez et expliquez vos expressions régulières.", icon: Search, size: "medium", comingSoon: true },
			{ name: "Base64 Converter", path: "/tools/base64", description: "Encodez et décodez vos textes en Base64.", icon: Languages, size: "large", comingSoon: true },
			{ name: "JSON ↔ YAML", path: "/tools/json-yaml", description: "Convertissez vos fichiers de config instantanément.", icon: File, size: "small", comingSoon: true },
			{ name: "Hash Generator", path: "/tools/hash-generator", description: "SHA-256, MD5 et plus pour vos données.", icon: Hash, size: "small", comingSoon: true },
			{ name: "RSA Key Pair Gen", path: "/tools/rsa-gen", description: "Génère des paires de clés publiques et privées.", icon: Key, size: "small", comingSoon: true },
			{ name: "Unit Converter", path: "/tools/unit-converter", description: "Pixels ↔ REM / Bytes ↔ MB / HEX ↔ RGB.", icon: Cpu, size: "medium", comingSoon: true },
			{ name: "Crontab Generator", path: "/tools/crontab-gen", description: "Aide visuelle pour la syntaxe Cron.", icon: Terminal, size: "small", comingSoon: true },
		]
	},
	{
		name: "Web Utils",
		icon: Globe,
		color: "yellow",
		tools: [
			{ name: "URL Encoder", path: "/tools/url-encoder", description: "Sécurisez vos paramètres d'URL.", icon: Link, size: "small", comingSoon: true },
			{ name: "Markdown to HTML", path: "/tools/md-html", description: "Convertit le Markdown en code HTML propre.", icon: FileOutput, size: "medium", comingSoon: true },
			{ name: "HTML Entities", path: "/tools/html-entities", description: "Encodez les caractères spéciaux HTML.", icon: Code2, size: "small", comingSoon: true },
		]
	},
	{
		name: "Réseau",
		icon: Network,
		color: "cyan",
		tools: [
			{ name: "IP Lookup", path: "/tools/ip-lookup", description: "Infos de géolocalisation et détails sur votre IP.", icon: Globe, size: "medium", comingSoon: true },
			{ name: "DNS Checker", path: "/tools/dns-checker", description: "Consultez les records A, MX, CNAME d'un domaine.", icon: Activity, size: "small", comingSoon: true },
			{ name: "Whois", path: "/tools/whois", description: "Récupérez les infos de propriété d'un domaine.", icon: FileSearch, size: "small", comingSoon: true },
		]
	},
	{
		name: "Data & Media",
		icon: ImageIcon,
		color: "orange",
		tools: [
			{ name: "Fake Data Gen", path: "/tools/fake-data", description: "Générez des CSV de données factices.", icon: Database, size: "medium", comingSoon: true },
			{ name: "Youtube Downloader", path: "/tools/yt-download", description: "Téléchargement YouTube en MP3 / MP4.", icon: FaYoutube, size: "large", comingSoon: true },
			{ name: "Image Resize", path: "/tools/image-resize", description: "Redimensionnez vos images en ligne.", icon: Maximize, size: "small", comingSoon: true },
			{ name: "Image Rescale", path: "/tools/image-rescale", description: "Changement d'échelle (Ratio) d'image.", icon: Scaling, size: "small", comingSoon: true },
			{ name: "QR Code Generator", path: "/tools/qr-gen", description: "Générateur de codes QR personnalisables.", icon: QrCode, size: "large", comingSoon: true },
		]
	},
	{
		name: "Design",
		icon: Palette,
		color: "pink",
		tools: [
			{ name: "CSS Glassmorphism", path: "/tools/glassmorphism-gen", description: "Générateur de code CSS pour effets de flou.", icon: Layout, size: "small", comingSoon: true },
			{ name: "Color Palette", path: "/tools/color-palette", description: "Créez des palettes de couleurs harmonieuses.", icon: Palette, size: "medium", comingSoon: true },
			{ name: "Visual Identity", path: "/tools/visual-identity", description: "Visualisez vos choix de polices et couleurs.", icon: TextInitial, size: "large", comingSoon: true }
		]
	}
];


/* ----- FUNCTIONS ----- */
function GetMainPages() {
	return MainPages;
}

function GetCategoriesPages() {
	return AllCategories.filter(category => category.tools.length > 0 && !category.tools.every(tool => tool.comingSoon));
}

function GetAllBentoTools() {
	return AllCategories.flatMap(category => category.tools.map(tool => ({ ...tool, color: category.color })));
}

function GetActiveBentoTools(comingSoon: boolean) {
	const tools = GetAllBentoTools();
	return tools.filter(tool => tool.comingSoon === comingSoon);
}

function GetActiveToolsInCategory(category: ICategoryConfig, comingSoon: boolean) {
	const tools = category.tools;
	return tools.filter(tool => tool.comingSoon === comingSoon);
}

function GetToolByPath(path: string) {
	return GetAllBentoTools().find(tool => tool.path === path);
}

function GetCategoryByTool(tool: IToolConfig) {
	return AllCategories.find(category => category.tools.some(t => t.path === tool.path));
}


/* ----- EXPORTS ----- */
export {
	GetMainPages,
	GetCategoriesPages,
	GetAllBentoTools,
	GetActiveBentoTools,
	GetActiveToolsInCategory,
	GetToolByPath,
	GetCategoryByTool
};
