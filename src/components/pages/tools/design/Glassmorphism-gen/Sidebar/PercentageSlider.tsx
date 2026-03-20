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
function PercentageSlider({ label, value, setValue, max = 1, min = 0, step = 0.01 }: Props) {
	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center px-1">
				<Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</Label>
				<div className="flex items-center gap-1 font-mono text-xs text-blue-400">
					<input
						type="number"
						value={Math.round(value * 100)}
						onChange={(e) => setValue(Number(e.target.value) / 100)}
						className="w-12 bg-transparent text-right outline-none focus:text-white"
					/> %
				</div>
			</div>
			<Slider value={[value]} onValueChange={(v) => setValue(v[0])} max={max} min={min} step={step} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default PercentageSlider;
