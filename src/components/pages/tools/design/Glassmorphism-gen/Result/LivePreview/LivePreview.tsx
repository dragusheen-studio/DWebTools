/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Layers } from "lucide-react";
import { IGlassmorphismConfig } from "@/types/tools/design/GlassmorphismGen";
import BackgroundShapes from "./BackgroundShapes";
import Card from "./Card";


/* ----- PROPS ----- */
interface Props {
	config: IGlassmorphismConfig;
}


/* ----- COMPONENT ----- */
function LivePreview({ config }: Props) {
	return (
		<div className="relative h-100 rounded-[2.5rem] border border-zinc-800 overflow-hidden bg-zinc-950 flex items-center justify-center group shadow-inner">
			<BackgroundShapes />
			<Card config={config} />
			<div className="absolute top-8 left-8 flex items-center gap-2">
				<Layers size={14} className="text-zinc-500" />
				<span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Viewport de test</span>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default LivePreview;
