/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";
import { ElementType } from "react";


/* ----- PROPS ----- */
interface LinkButtonProps {
	name: string;
	icon: ElementType<LucideProps> | IconType;
	href: string;
	color: string;
}

/* ----- COMPONENT ----- */
function LinkButton({ name, icon: Icon, href, color }: LinkButtonProps) {
	return (
		<Link
			href={href}
			target="_blank"
			className={cn(
				"flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 transition-all duration-300",
				"text-zinc-500 font-black uppercase text-[10px] tracking-widest",
				"hover:scale-110",
				color
			)}
		>
			<Icon size={16} />
			{name}
		</Link>
	);
}


/* ----- EXPORT ----- */
export default LinkButton;
