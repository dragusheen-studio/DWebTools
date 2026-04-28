/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import QrGeneratorWorkspace from "@/components/pages/tools/data-media/qr-gen/Workspace";
import QrGeneratorSidebar from "@/components/pages/tools/data-media/qr-gen/Sidebar/Sidebar";


/* ----- COMPONENT ----- */
function QrGeneratorContent() {
	const [config, setConfig] = useState<IQRCodeGeneratorConfig>({
		mode: "text",
		text: "https://dragusheen.com",
		wifi: { ssid: "", pass: "", enc: "WPA" },
		vcard: { name: "", tel: "", email: "" },
		fgColor: "#000000",
		bgColor: "#ffffff",
		level: "M" as "L" | "M" | "Q" | "H",
		margin: 2,
	});

	return (
		<div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto w-full pb-20 px-4">
			<QrGeneratorSidebar config={config} setConfig={setConfig} />
			<QrGeneratorWorkspace config={config} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default QrGeneratorContent;
