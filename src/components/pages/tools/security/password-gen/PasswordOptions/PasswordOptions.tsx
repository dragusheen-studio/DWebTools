/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Slider } from "@/components/ui/slider";
import { getPasswordOptions } from "@/config/tools/security/PasswordGen";
import { IPasswordOption } from "@/types/tools/security/PasswordGen";
import PasswordOptionWidget from "./PasswordOption";


/* ----- PROPS ----- */
interface PasswordOptionsWidgetProps {
	length: number;
	setLength: (value: number) => void;
	selected: IPasswordOption[];
	setSelected: (options: IPasswordOption[]) => void;
}


/* ----- COMPONENT ----- */
function PasswordOptionsWidget({ length, setLength, selected, setSelected }: PasswordOptionsWidgetProps) {
	const allOptions = getPasswordOptions();

	const toggleOption = (option: IPasswordOption) => {
		if (selected.some(o => o.name === option.name))
			setSelected(selected.filter(o => o.name !== option.name));
		else
			setSelected([...selected, option]);
	};

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-8 shadow-sm">
			<div className="space-y-6">
				<div className="flex justify-between items-end">
					<div className="flex flex-col gap-1">
						<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Configuration</span>
						<h4 className="text-sm font-bold text-zinc-200">Longueur du mot de passe</h4>
					</div>
					<span className="text-2xl font-mono font-black text-blue-500 bg-blue-500/10 px-3 py-1 rounded-lg">
						{length}
					</span>
				</div>

				<Slider value={[length]} onValueChange={(val) => setLength(val[0])} max={64} min={4} step={1} className="py-4" />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{allOptions.map((o) => (
					<PasswordOptionWidget option={o} selected={selected} toggleOption={toggleOption} key={o.name} />
				))}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default PasswordOptionsWidget;
