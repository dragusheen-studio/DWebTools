/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";


/* ----- PROPS ----- */
interface Props {
	label: string;
	value: number;
	setValue: (value: number) => void;
	max?: number;
	min?: number;
	step?: number;
}


/* ----- COMPONENT ----- */
function NumericalSlider({ label, value, setValue, max = 100, min = 0, step = 1 }: Props) {
	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center px-1">
				<Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</Label>
				<input
					type="number"
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
					className="w-12 bg-transparent text-right font-mono text-xs text-blue-400 outline-none focus:text-white transition-colors"
				/>
			</div>
			<Slider value={[value]} onValueChange={(v) => setValue(v[0])} max={max} min={min} step={step} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default NumericalSlider;
