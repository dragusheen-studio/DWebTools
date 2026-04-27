/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Sparkles } from "lucide-react";
import { IGlassmorphismConfig } from "@/types/tools/design/GlassmorphismGen";


/* ----- PROPS ----- */
interface Props {
	config: IGlassmorphismConfig;
}


/* ----- COMPONENT ----- */
function Card({ config }: Props) {
	const glassStyle = useMemo(() => {
		const { blur, opacity, color, borderRadius, borderOpacity } = config;

		const r = parseInt(color.slice(1, 3), 16) || 255;
		const g = parseInt(color.slice(3, 5), 16) || 255;
		const b = parseInt(color.slice(5, 7), 16) || 255;

		return {
			backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})`,
			backdropFilter: `blur(${blur}px)`,
			WebkitBackdropFilter: `blur(${blur}px)`,
			borderRadius: `${borderRadius}px`,
			border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
		};
	}, [config]);

	return (
		<div style={glassStyle} className="w-3/4 h-2/3 z-10 flex flex-col items-center justify-center p-10 text-center transition-all duration-300 shadow-2xl backdrop-blur-md">
			<Sparkles className="text-white mb-4 opacity-50 drop-shadow-lg" size={40} />
			<h4 className="text-white font-black italic tracking-tighter text-3xl">Glass Preview</h4>
			<p className="text-white/70 text-sm mt-4 max-w-70 font-medium">
				L'étoile et les formes bougent en continu pour tester la réfraction.
			</p>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Card;
