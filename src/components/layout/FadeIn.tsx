/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { motion } from "framer-motion";
import { ReactNode } from "react";


/* ----- PROPS ----- */
interface FadeInProps {
	children: ReactNode;
	direction?: "up" | "down" | "left" | "right";
	offset?: number;
	delay?: number;
	once?: boolean;
}


/* ----- COMPONENT ----- */
function FadeIn({ children, direction = "left", offset = 40, delay = 0.2, once = false }: FadeInProps) {
	const animation = {
		"up": { y: -offset },
		"down": { y: offset },
		"left": { x: -offset },
		"right": { x: offset }
	}[direction] || {};

	return (
		<motion.div
			initial={{ ...animation, opacity: 0 }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: once, amount: 0.2 }}
			transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
			className="w-full"
		>
			{children}
		</motion.div>
	);
}


/* ----- EXPORT ----- */
export default FadeIn;
