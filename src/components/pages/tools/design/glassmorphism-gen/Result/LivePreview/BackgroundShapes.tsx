/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Star } from "lucide-react";
import { motion } from "framer-motion";


/* ----- COMPONENT ----- */
function BackgroundShapes() {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
			<motion.div
				initial={{ opacity: 0.2 }}
				animate={{ opacity: [0.2, 0.8, 0.2] }}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				className="absolute top-16 left-16 w-24 h-24 bg-blue-600/60 rounded-xl rotate-12"
			/>

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/40 rounded-full blur-sm" />

			<motion.div
				animate={{ y: [-20, 20, -20] }}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				className="absolute bottom-16 right-16 w-32 h-32 bg-orange-500/60 shadow-lg"
				style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
			/>

			<motion.div
				className="absolute text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
				initial={{ x: "0vw", y: "0vh" }}
				animate={{
					x: ["0vw", "30vw", "0vw", "30vw", "0vw"],
					y: ["0vh", "20vh", "35vh", "15vh", "0vh"],
					rotate: 360
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "linear"
				}}
			>
				<Star size={60} fill="currentColor" />
			</motion.div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default BackgroundShapes;
