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
import TextDiffContent from "./content";


/* ----- COMPONENT ----- */
function TextDiffPage() {
	const toolConfig = GetToolByPath("/tools/text/text-diff");
	if (!toolConfig) return null;

	const categoryConfig = GetCategoryByTool(toolConfig);
	if (!categoryConfig) return null;

	return (
		<ToolLayout tool={toolConfig} category={ReduceCategory(categoryConfig)}>
			<TextDiffContent />
		</ToolLayout >
	);
}


/* ----- EXPORT ----- */
export default TextDiffPage;
