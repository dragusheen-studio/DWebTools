/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { IGlassmorphismConfig } from "@/types/tools/design/GlassmorphismGen";
import Sidebar from "@/components/pages/tools/design/Glassmorphism-gen/Sidebar/Sidebar";
import Result from "@/components/pages/tools/design/Glassmorphism-gen/Result/Result";


/* ----- COMPONENT ----- */
function Content() {
	const DEFAULTS: IGlassmorphismConfig = {
		blur: 10,
		opacity: 0.2,
		color: "#ffffff",
		borderRadius: 24,
		borderOpacity: 0.1,
	};

	const [config, setConfig] = useState<IGlassmorphismConfig>(DEFAULTS);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full pb-20 px-4">
			<Sidebar config={config} setConfig={setConfig} reset={() => setConfig(DEFAULTS)} />
			<Result config={config} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Content;
