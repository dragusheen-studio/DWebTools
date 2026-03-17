/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Terminal, Copy, Info, AlertCircle } from "lucide-react";
import cronstrue from "cronstrue";
import "cronstrue/locales/fr";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	command: string;
	setCommand: (v: string) => void;
	cronExpression: string;
	error: string | null;
}


/* ----- COMPONENT ----- */
function CommandAndTraduction({ cronExpression, command, setCommand, error }: Props) {
	const humanLabel = useMemo(() => {
		try {
			return cronstrue.toString(cronExpression, { locale: "fr", use24HourTimeFormat: true });
		} catch {
			return "Expression invalide";
		}
	}, [cronExpression]);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-3 text-left">
				<span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2">Script ou Commande</span>
				<div className="relative">
					<Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
					<Input value={command} onChange={(e) => setCommand(e.target.value)} className="h-12 bg-zinc-950/40 border-zinc-800 rounded-xl pl-12 font-mono text-sm" />
				</div>
			</div>

			<div className={cn("flex items-center gap-3 p-4 rounded-2xl transition-all", error ? "bg-red-500/5 border border-red-500/20" : "bg-blue-500/5 border border-blue-500/10")}>
				{error ? <AlertCircle size={18} className="text-red-500 shrink-0" /> : <Info size={18} className="text-blue-400 shrink-0" />}
				<p className={cn("text-xs font-medium italic text-left", error ? "text-red-400" : "text-zinc-300")}>&quot;{humanLabel}&quot;</p>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CommandAndTraduction;
