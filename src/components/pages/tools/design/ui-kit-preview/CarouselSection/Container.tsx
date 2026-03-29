/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { motion, AnimatePresence } from "framer-motion";
import WindowDecoration from "./WindowDecoration";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface IProps {
	page: number;
	direction: number;
	mode: "light" | "dark";
	bgCustom?: string;
	children: React.ReactNode;
}


/* ----- COMPONENT ----- */
function Container({ page, direction, mode, bgCustom, children }: IProps) {
	return (
		<div
			style={bgCustom ? { backgroundColor: bgCustom } : {}}
			className={cn(
				"relative w-full rounded-[4rem] shadow-2xl overflow-hidden flex flex-col p-6 md:p-16 transition-colors duration-500 border",
				"min-h-125 h-auto",
				!bgCustom && (mode === "dark" ? "bg-zinc-950 border-zinc-800" : "bg-zinc-50 border-zinc-200")
			)}
		>
			<WindowDecoration />

			<AnimatePresence initial={false} custom={direction} mode="popLayout">
				<motion.div
					key={page}
					custom={direction}
					variants={{
						enter: (direction: number) => ({
							x: direction > 0 ? 800 : -800,
							opacity: 0,
							scale: 0.9,
						}),
						center: {
							zIndex: 1,
							x: 0,
							opacity: 1,
							scale: 1,
						},
						exit: (direction: number) => ({
							zIndex: 0,
							x: direction < 0 ? 800 : -800,
							opacity: 0,
							scale: 0.9,
						}),
					}}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className="w-full h-full flex items-center justify-center"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}


/* ----- EXPORT ----- */
export default Container;
