/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Label } from "@/components/ui/label";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

/* ----- PROPS ----- */
interface Props {
	id: string;
	value: any;
	setValue: (value: any) => void;
	options: { value: any; label: string }[];
	label: string;
}

/* ----- COMPONENT ----- */
function PatternStyleSelecter({ id, value, setValue, options, label }: Props) {
	return (
		<AccordionItem value={id}>
			<AccordionTrigger className="flex items-center justify-between px-1 hover:no-underline">
				<Label className="text-[10px] font-black uppercase text-zinc-600">{label}</Label>
				<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
					{options.find(s => s.value === value)?.label || value}
				</span>
			</AccordionTrigger>
			<AccordionContent className="space-y-4 pt-2">
				<div className="space-y-2">
					<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1">Forme des modules</Label>
					<Select value={value} onValueChange={setValue} >
						<SelectTrigger className="bg-zinc-900 border-zinc-800 rounded-xl h-11 text-xs text-zinc-300">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
							{options.map((option) => (
								<SelectItem key={option.value} value={option.value} className="text-xs focus:bg-zinc-800">
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

/* ----- EXPORT ----- */
export default PatternStyleSelecter;
