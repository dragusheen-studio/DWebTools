/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useMemo } from "react";
import TextArea from "@/components/pages/tools/text/text-diff/TextArea";
import ResultArea from "@/components/pages/tools/text/text-diff/ResultArea/ResultArea";


/* ----- COMPONENT ----- */
function Content() {
	const [textA, setTextA] = useState("");
	const [textB, setTextB] = useState("");

	return (
		<div className="flex flex-col gap-8 max-w-6xl mx-auto w-full pb-20 px-4">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<TextArea text={textA} setText={setTextA} title="Texte Original (A)" color="bg-red-500/50" placeholder="Collez la version originale..." />
				<TextArea text={textB} setText={setTextB} title="Texte Modifié (B)" color="bg-emerald-500/50" placeholder="Collez la nouvelle version..." />
			</div>
			<ResultArea textA={textA} textB={textB} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Content;
