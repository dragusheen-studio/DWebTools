/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { BookOpen, Brain } from "lucide-react";
import Link from "next/link";


/* ----- COMPONENT ----- */
function XKCD() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2.5rem]">
			<div className="flex flex-col gap-4 text-left">
				<Link href="https://xkcd.com/936/" target="_blank" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors w-fit">
					<BookOpen size={20} />
					<h2 className="text-xl font-black uppercase tracking-tighter">La théorie XKCD</h2>
				</Link>
				<p className="text-zinc-400 text-sm leading-relaxed">
					Saviez-vous qu'un mot de passe complexe comme <code className="text-blue-300 bg-blue-500/20 px-1 rounded">Tr0ub4dor&3</code> est facile à deviner pour un ordinateur ?
					<br /><br />
					À l'inverse, 4 mots simples comme <span className="italic text-zinc-200">"correct horse battery staple"</span> offrent une sécurité supérieure car la longueur augmente l'entropie de façon exponentielle.
				</p>
			</div>
			<div className="flex flex-col gap-4 bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800 text-left">
				<div className="flex items-center gap-2 text-emerald-500">
					<Brain size={18} />
					<span className="text-xs font-black uppercase tracking-widest">Conseil Mémo</span>
				</div>
				<p className="text-xs text-zinc-500 leading-relaxed italic">
					"Imaginez une histoire absurde avec ces mots pour les graver dans votre mémoire."
				</p>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default XKCD;
