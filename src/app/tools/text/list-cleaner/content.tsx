/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import TextArea from "@/components/pages/tools/text/list-cleaner/TextArea/TextArea";
import ConfigArea from "@/components/pages/tools/text/list-cleaner/ConfigArea/ConfigArea";


/* ----- COMPONENT ----- */
function ListCleanerContent() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [count, setCount] = useState(0);
	const [removed, setRemoved] = useState(0);

	return (
		<div className="flex flex-col gap-10 max-w-6xl mx-auto w-full pb-20 px-4">
			<ConfigArea input={input} setOutput={setOutput} setCount={setCount} setRemoved={setRemoved} />
			<TextArea input={input} setInput={setInput} output={output} count={count} removed={removed} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default ListCleanerContent;
