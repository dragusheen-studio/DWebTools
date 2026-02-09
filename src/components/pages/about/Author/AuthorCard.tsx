/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import LinkButton from "./LinkButton";


/* ----- COMPONENT ----- */
function AuthorCard() {
	const socialLinks = [
		{ name: "GitHub", icon: FaGithub, href: "https://github.com/votre-pseudo", color: "hover:text-green-400 hover:border-green-400 hover:shadow-[0_0_50px_-12px_rgba(5,223,114,0.5)]" },
		{ name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com/in/votre-nom", color: "hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_50px_-12px_rgba(81,162,255,0.5)]" },
		{ name: "Contact", icon: Mail, href: "mailto:nathan.tirolf@epitech.eu", color: "hover:text-red-400 hover:border-red-400 hover:shadow-[0_0_50px_-12px_rgba(255,100,103,0.5)]" },
		{ name: "Portfolio", icon: ExternalLink, href: "https://dragusheen.com", color: "hover:text-purple-400 hover:border-purple-400 hover:shadow-[0_0_50px_-12px_rgba(194,122,255,0.5)]" },
	];

	return (
		<div className="group relative w-full p-10 rounded-4xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md flex flex-col md:flex-row items-center gap-12 transition-all duration-500 hover:border-orange-500/60 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.2)]">
			<div className="relative">
				<div className="w-40 h-40 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center relative z-10 overflow-hidden group-hover:border-orange-500/80 transition-colors duration-500">
					<Image src="/img/dragusheen-logo.png" width={1080} height={1080} alt="Photo de Dragusheen" className="object-cover" />
				</div>
				<div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			</div>

			<div className="flex flex-col gap-6 text-center md:text-left flex-1">
				<div className="flex flex-col gap-2">
					<h3 className="text-3xl font-black italic text-zinc-100">Dragusheen</h3>
					<p className="text-orange-500/80 font-bold uppercase text-xs tracking-widest italic">
						Développeur Graphique & Créatif
					</p>
				</div>

				<p className="text-zinc-400 leading-relaxed font-medium italic">
					Passionné par l'UI/UX et le développement Web, j'ai créé DWebTools pour simplifier ma propre routine. Le but est d'offrir une expérience fluide, rapide et surtout respectueuse de la vie privée.
				</p>

				<div className="flex flex-wrap justify-center md:justify-start gap-4">
					{socialLinks.map((link, index) => (
						<LinkButton key={index} {...link} />
					))}
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default AuthorCard;
