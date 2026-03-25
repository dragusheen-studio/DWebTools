/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useMemo } from "react";
import { Harmony, INeutral, IOption } from "@/types/tools/design/ColorPalette";
import { createNeutrals, createOptions } from "@/services/tools/design/color-palette/colorGenerator";
import Warning from "@/components/pages/tools/design/color-palette/Warning";
import ExportSection from "@/components/pages/tools/design/color-palette/ExportSection/ExportSection";
import NeutralsSection from "@/components/pages/tools/design/color-palette/NeutralsSection";
import AccentsSection from "@/components/pages/tools/design/color-palette/AccentsSection";
import Header from "@/components/pages/tools/design/color-palette/Header";


/* ----- COMPONENT ----- */
function Content() {
	const [mode, setMode] = useState<Harmony>("complementary");
	const [baseColor, setBaseColor] = useState("#3b82f6");
	const [activeAccents, setActiveAccents] = useState<string[]>(["acc-1"]);

	const options: IOption[] = useMemo((): IOption[] => {
		return createOptions(baseColor, mode);
	}, [baseColor, mode]);

	const neutrals = useMemo((): INeutral => {
		return createNeutrals(baseColor);
	}, [baseColor]);

	const handleToggleAccent = (id: string) => {
		setActiveAccents(prev => {
			if (prev.includes(id)) {
				return prev.length > 1 ? prev.filter(a => a !== id) : prev;
			}
			return prev.length < 2 ? [...prev, id] : [prev[1], id];
		});
	};

	return (
		<div className="flex flex-col gap-12 max-w-6xl mx-auto w-full pb-20 px-4">
			<Header baseColor={baseColor} setBaseColor={setBaseColor} mode={mode} setMode={(v: Harmony) => { setMode(v); setActiveAccents(["acc-1"]); }} />
			<AccentsSection baseColor={baseColor} options={options} activeAccents={activeAccents} handleToggleAccent={handleToggleAccent} />
			<NeutralsSection neutrals={neutrals} />
			<ExportSection baseColor={baseColor} options={options} activeAccents={activeAccents} neutrals={neutrals} />
			<Warning />
		</div>
	);
}

/* ----- EXPORT ----- */
export default Content;
