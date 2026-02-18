/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import TextAreaSection from "@/components/pages/tools/word-counter/TextAreaSection";
import TextStatSection from "@/components/pages/tools/word-counter/TextStatSection";


/* ----- COMPONENT ----- */
function WordCounterContent() {
	const [text, setText] = useState("");

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<TextAreaSection text={text} setText={setText} />
			<TextStatSection text={text} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default WordCounterContent;
