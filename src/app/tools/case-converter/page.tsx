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
import CaseConverterContent from "./content";


/* ----- COMPONENT ----- */
function CaseConverterPage() {
	const toolConfig = GetToolByPath("/tools/case-converter");
	if (!toolConfig) return null;

	const categoryConfig = GetCategoryByTool(toolConfig);
	if (!categoryConfig) return null;

	return (
		<ToolLayout tool={toolConfig} category={ReduceCategory(categoryConfig)}>
			<CaseConverterContent />
		</ToolLayout >
	);
}


/* ----- EXPORT ----- */
export default CaseConverterPage;
