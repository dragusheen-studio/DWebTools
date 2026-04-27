/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { IOption } from "@/types/tools/design/ColorPalette";
import ColorBlock from "./ColorBlock";


/* ----- PROPS ----- */
interface IProps {
	baseColor: string,
	options: IOption[],
	activeAccents: string[],
	handleToggleAccent: (id: string) => void
}


/* ----- COMPONENT ----- */
function AccentsSection({ baseColor, options, activeAccents, handleToggleAccent }: IProps) {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4 px-2">
				<span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Accents & Identité</span>
				<div className="h-px flex-1 bg-zinc-800/50" />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
				<div className="lg:col-span-1">
					<ColorBlock hex={baseColor} label="Dominante" active={true} />
				</div>

				<div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-zinc-900/10 p-4 rounded-[2.5rem] border border-dashed border-zinc-800/50">
					{options.map((opt) => (
						<ColorBlock
							key={opt.id}
							hex={opt.hex}
							label={opt.label}
							active={activeAccents.includes(opt.id)}
							isSelectable={true}
							onClick={() => handleToggleAccent(opt.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default AccentsSection;
