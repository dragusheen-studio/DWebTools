/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { IPasswordOption } from "@/types/tools/security/PasswordGen";


/* ----- PROPS ----- */
interface PasswordOptionWidgetProps {
	option: IPasswordOption;
	selected: IPasswordOption[];
	toggleOption: (option: IPasswordOption) => void;
}


/* ----- COMPONENT ----- */
function PasswordOptionWidget({ option, selected, toggleOption }: PasswordOptionWidgetProps) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors group">
					<div className="flex flex-col gap-0.5">
						<Label
							htmlFor={option.name}
							className="text-xs font-bold text-zinc-400 group-hover:text-zinc-200 cursor-pointer transition-colors"
						>
							{option.name}
						</Label>
					</div>
					<Switch
						id={option.name}
						checked={selected.some(o => o.name === option.name)}
						onCheckedChange={() => toggleOption(option)}
					/>
				</div>
			</TooltipTrigger>
			<TooltipContent className="text-zinc-900 text-[10px] font-mono">
				{option.charsets}
			</TooltipContent>
		</Tooltip>
	);
}


/* ----- EXPORT ----- */
export default PasswordOptionWidget;
