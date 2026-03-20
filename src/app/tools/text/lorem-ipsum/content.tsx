/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import TextDisplay from "@/components/pages/tools/text/lorem-ipsum/TextDisplay";
import ParamsSidebar from "@/components/pages/tools/text/lorem-ipsum/ParamsSidebar";


/* ----- COMPONENT ----- */
function Content() {
	const [asHtml, setAsHtml] = useState(false);
	const [textChunks, setTextChunks] = useState<string[]>([]);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full pb-20">
			<ParamsSidebar setTextChunks={setTextChunks} asHtml={asHtml} setAsHtml={setAsHtml} />
			<TextDisplay textChunks={textChunks} asHtml={asHtml} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Content;
