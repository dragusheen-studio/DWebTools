/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";


/* ----- PROPS ----- */
interface IProps {
	onCopy: () => void;
	onExport: () => void;
}


/* ----- COMPONENT ----- */
function Buttons({ onCopy, onExport }: IProps) {
	return (
		<div className="flex gap-2">
			<Button
				variant="ghost"
				size="icon"
				onClick={onCopy}
				className="text-zinc-500 hover:text-blue-400"
			>
				<Copy size={18} />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				onClick={onExport}
				className="text-zinc-500 hover:text-emerald-400"
			>
				<Download size={18} />
			</Button>
		</div>
	);
}

/* ----- EXPORT ----- */
export default Buttons;
