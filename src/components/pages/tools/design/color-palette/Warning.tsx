/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { AlertTriangle } from "lucide-react";


/* ----- COMPONENT ----- */
function Warning() {
	return (
		<div className="p-8 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/10 flex gap-6 items-start self-center max-w-2xl">
				<div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 shrink-0">
					<AlertTriangle size={24} />
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-black uppercase text-orange-200">Avertissement</h3>
					<p className="text-[11px] text-zinc-500 italic leading-relaxed text-left">
						Les harmonies de cette palette sont générées via des algorithmes basés sur la roue chromatique HSL. Bien que mathématiquement équilibrées, elles ne remplacent pas la sensibilité d'un designer. Utilisez ces couleurs comme base et ajustez-les pour parfaire votre identité visuelle.
					</p>
				</div>
			</div>
	);
}

/* ----- EXPORT ----- */
export default Warning;
