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
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import { ReactQRCode } from '@lglab/react-qr-code';
import { cn } from "@/lib/utils";

/* ----- PROPS ----- */
interface Props {
	id: string;
	value: string;
	setValue: (value: any) => void;
	options: { value: any; label: string }[];
	label: string;
	config: IQRCodeGeneratorConfig;
	qrValue: string;
	getGradient: any;
	getBackground: any;
}

/* ----- COMPONENT ----- */
function PatternStyleSelecter({ id, value, setValue, options, label, config, qrValue, getGradient, getBackground }: Props) {
	const getMiniatureSettings = (optValue: string) => {
		const baseSettings = {
			gradient: getGradient,
			background: getBackground,
			marginSize: 1,
			size: 64,
			value: qrValue,
			level: config.level,
			dataModulesSettings: { style: config.dotStyle },
			finderPatternInnerSettings: { style: config.finderStyle.inner },
			finderPatternOuterSettings: { style: config.finderStyle.outer }
		};

		if (id === "DotStyle") baseSettings.dataModulesSettings.style = optValue as any;
		if (id === "FinderInnerStyle") baseSettings.finderPatternInnerSettings.style = optValue as any;
		if (id === "FinderOuterStyle") baseSettings.finderPatternOuterSettings.style = optValue as any;

		return baseSettings;
	};

	const isEyeSelector = id === "FinderInnerStyle" || id === "FinderOuterStyle";

	return (
		<AccordionItem value={id}>
			<AccordionTrigger className="flex items-center justify-between px-1 hover:no-underline">
				<Label className="text-[10px] font-black uppercase text-zinc-600">{label}</Label>
				<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
					{options.find(s => s.value === value)?.label || value}
				</span>
			</AccordionTrigger>
			<AccordionContent className="pt-2">
				<div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-800">
					{options.map((option) => {
						const isSelected = option.value === value;
						return (
							<button
								key={option.value}
								onClick={() => setValue(option.value)}
								className={cn(
									"flex flex-col items-center justify-center p-2 rounded-xl border bg-zinc-950/40 transition-all duration-200 group text-center gap-1.5 cursor-pointer",
									isSelected
										? "border-blue-500 bg-blue-500/5 shadow-md shadow-blue-500/5"
										: "border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
								)}
							>
								<div className="p-1 bg-white rounded-lg shadow-inner overflow-hidden w-18 h-18 flex items-center justify-center relative">
									<div className={cn(
										"transition-transform duration-300 ease-out",
										isEyeSelector && "origin-top-left group-hover:scale-[2.5] group-hover:-translate-x-1 group-hover:-translate-y-1",
										!isEyeSelector && "origin-center group-hover:scale-[2]"
									)}>
										<ReactQRCode {...getMiniatureSettings(option.value)} size={64} />
									</div>
								</div>
								<span className={cn(
									"text-[8px] font-medium tracking-wide line-clamp-1 px-0.5 w-full",
									isSelected ? "text-blue-400 font-bold" : "text-zinc-500 group-hover:text-zinc-400"
								)}>
									{option.label}
								</span>
							</button>
						);
					})}
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

/* ----- EXPORT ----- */
export default PatternStyleSelecter;
