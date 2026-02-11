/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { GetCategoryByTool, GetToolByPath } from "@/config/PageData";
import { ReduceCategory } from "@/types/Category";
import ToolLayout from "@/components/layout/ToolLayout";


/* ----- COMPONENT ----- */
function WordCounterPage() {
	const toolConfig = GetToolByPath("/tools/word-counter");
	if (!toolConfig) return null;

	const categoryConfig = GetCategoryByTool(toolConfig);
	if (!categoryConfig) return null;

	return (
		<ToolLayout tool={toolConfig} category={ReduceCategory(categoryConfig)}>
			<div className="flex flex-col gap-6 text-zinc-400 italic">
				Interface du compteur de mots en cours...
			</div>
		</ToolLayout >
	);
}


/* ----- EXPORT ----- */
export default WordCounterPage;
