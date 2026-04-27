/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import Tips from "@/components/pages/tools/design/color-variations/Tips";
import { generateRandom } from "@/services/tools/design/color-variations/colorGenerator";
import PaletteDisplay from "@/components/pages/tools/design/color-variations/PaletteDisplay";
import { Harmony } from "@/types/tools/design/ColorVariations";
import Header from "@/components/pages/tools/design/color-variations/Header/Header";


/* ----- COMPONENT ----- */
function Content() {
	const [baseColor, setBaseColor] = useState(generateRandom());
	const [harmony, setHarmony] = useState<Harmony>("monochromatic");

	return (
		<div className="flex flex-col gap-8 max-w-6xl mx-auto w-full pb-20 px-4">
			<Header baseColor={baseColor} setBaseColor={setBaseColor} harmony={harmony} setHarmony={setHarmony} />
			<PaletteDisplay baseColor={baseColor} harmony={harmony} />
			<Tips />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Content;
