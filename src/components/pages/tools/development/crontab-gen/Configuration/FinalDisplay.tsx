/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { copy } from "@/services/utils/copy";


/* ----- PROPS ----- */
interface Props {
	cronExpression: string;
	command: string;
}


/* ----- COMPONENT ----- */
function FinalDisplay({ cronExpression, command }: Props) {
	const fullLine = `${cronExpression} ${command}`;

	return (
		<div className="flex flex-col gap-3 text-left">
			<span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Ligne Crontab Générée</span>
			<div className="relative">
				<div className="relative flex items-center">
					<Input
						readOnly
						value={fullLine}
						className="h-14 bg-zinc-950/20 border-zinc-800/50 rounded-xl pl-4 pr-14 font-mono text-[10px] md:text-xs text-zinc-500 truncate"
					/>
					<Button
						onClick={() => copy(fullLine, "Commande Crontab copiée !")}
						size="icon"
						className="absolute right-2 h-10 w-10 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all active:scale-90"
					>
						<Copy size={16} />
					</Button>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default FinalDisplay;
