/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/services/utils/copy";


/* ----- PROPS ----- */
interface Props {
	result: string;
}


/* ----- COMPONENT ----- */
function CopyButton({ result }: Props) {
	return (
		<div className="flex justify-between items-center">
			<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Output Transformé</span>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => copy(result, "Liste copiée !")}
				disabled={!result}
				className="text-zinc-600 hover:text-blue-400"
			>
				<Copy size={18} />
			</Button>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CopyButton;
