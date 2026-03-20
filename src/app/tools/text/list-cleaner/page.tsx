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
import ListCleanerContent from "./content";


/* ----- COMPONENT ----- */
function WordCounterPage() {
	const toolConfig = GetToolByPath("/tools/text/list-cleaner");
	if (!toolConfig) return null;

	const categoryConfig = GetCategoryByTool(toolConfig);
	if (!categoryConfig) return null;

	return (
		<ToolLayout tool={toolConfig} category={ReduceCategory(categoryConfig)}>
			<ListCleanerContent />
		</ToolLayout >
	);
}


/* ----- EXPORT ----- */
export default WordCounterPage;
