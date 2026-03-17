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
import CronTabGenContent from "./content";


/* ----- COMPONENT ----- */
function CronTabGenPage() {
	const toolConfig = GetToolByPath("/tools/development/crontab-gen");
	if (!toolConfig) return null;

	const categoryConfig = GetCategoryByTool(toolConfig);
	if (!categoryConfig) return null;

	return (
		<ToolLayout tool={toolConfig} category={ReduceCategory(categoryConfig)}>
			<CronTabGenContent />
		</ToolLayout >
	);
}


/* ----- EXPORT ----- */
export default CronTabGenPage;
