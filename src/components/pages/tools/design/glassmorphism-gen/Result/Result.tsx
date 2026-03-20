/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { IGlassmorphismConfig } from "@/types/tools/design/GlassmorphismGen";
import LivePreview from "./LivePreview/LivePreview";
import CodeArea from "./CodeArea/CodeArea";


/* ----- PROPS ----- */
interface Props {
	config: IGlassmorphismConfig;
}


/* ----- COMPONENT ----- */
function Result({ config }: Props) {
	return (
		<div className="lg:col-span-2 flex flex-col gap-6">
			<LivePreview config={config} />
			<CodeArea config={config} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Result;
