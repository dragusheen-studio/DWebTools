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
import PasswordCheckContent from "./content";


/* ----- COMPONENT ----- */
function PasswordGenPage() {
	const toolConfig = GetToolByPath("/tools/security/password-check");
	if (!toolConfig) return null;

	const categoryConfig = GetCategoryByTool(toolConfig);
	if (!categoryConfig) return null;

	return (
		<ToolLayout tool={toolConfig} category={ReduceCategory(categoryConfig)}>
			<PasswordCheckContent />
		</ToolLayout >
	);
}


/* ----- EXPORT ----- */
export default PasswordGenPage;
