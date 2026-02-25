/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCaseTypes } from "@/config/tools/text/CaseConverter";


/* ----- PROPS ----- */
interface CaseSelecterProps {
	value: string;
	onValueChange: (value: string) => void;
	label?: string;
}


/* ----- COMPONENT ----- */
function CaseSelecter({ value, onValueChange, label }: CaseSelecterProps) {
	const CaseTypes = getCaseTypes();

	return (
		<div className="flex items-center gap-2 px-3">
			{label && <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{label}</span>}
			<Select
				value={value}
				onValueChange={onValueChange}
			>
				<SelectTrigger className="w-40 bg-zinc-900 border-zinc-800 h-12 rounded-xl text-xs font-bold tracking-wider">
					<SelectValue placeholder="Multiple Cases" />
				</SelectTrigger>
				<SelectContent className="bg-zinc-900 border-zinc-800">
					{value === "multiple" && (
						<SelectItem value="multiple" disabled className="text-xs italic opacity-50">
							Multiple Cases...
						</SelectItem>
					)}
					{CaseTypes.map((t) => (
						<SelectItem key={t.name} value={t.name} className="text-xs font-bold tracking-widest text-blue-400">
							{t.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CaseSelecter;
