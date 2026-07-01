/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo, useState } from "react";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import QrGeneratorWorkspace from "@/components/pages/tools/data-media/qr-gen/Workspace";
import QrGeneratorSidebar from "@/components/pages/tools/data-media/qr-gen/Sidebar/Sidebar";
import { GradientSettings } from "@lglab/react-qr-code";

/* ----- COMPONENT ----- */
function QrGeneratorContent() {
	const [config, setConfig] = useState<IQRCodeGeneratorConfig>({
		content: {
			mode: "text",
			text: "https://dragusheen.com",
			wifi: { ssid: "", pass: "", enc: "WPA" },
			vcard: { name: "", tel: "", email: "" },
		},
		fgColor: "#000000",
		bgColor: "#ffffff",
		level: "M" as "L" | "M" | "Q" | "H",
		margin: 2,
		dotStyle: "square",
		finderStyle: {
			inner: "square",
			outer: "square"
		},
		logo: {
			src: "",
			size: 70,
			excavate: true
		}
	});

	const qrValue = useMemo((): string => {
		switch (config.content.mode) {
			case "wifi": return `WIFI:S:${config.content.wifi.ssid};T:${config.content.wifi.enc};P:${config.content.wifi.pass};;`;
			case "vcard": return `BEGIN:VCARD\nVERSION:3.0\nN:${config.content.vcard.name}\nTEL:${config.content.vcard.tel}\nEMAIL:${config.content.vcard.email}\nEND:VCARD`;
			default: return config.content.text || " ";
		}
	}, [config.content.mode, config.content.text, config.content.wifi, config.content.vcard]);

	const getQRCodeGradient = useMemo((): GradientSettings => {
		if (typeof config.fgColor === "string") {
			return {
				type: "linear" as const,
				rotation: 0,
				stops: [{ offset: '0%', color: config.fgColor }, { offset: '100%', color: config.fgColor }],
			};
		}
		return {
			type: config.fgColor.type,
			rotation: config.fgColor.rotation,
			stops: [{ offset: '0%', color: config.fgColor.from }, { offset: '100%', color: config.fgColor.to }],
		};
	}, [config.fgColor]);

	const getBackgroundSettings = useMemo((): string | GradientSettings | "transparent" => {
		if (config.bgColor === "transparent") return "transparent";
		if (typeof config.bgColor === "string") return config.bgColor;
		return {
			type: config.bgColor.type,
			rotation: config.bgColor.rotation,
			stops: [{ offset: '0%', color: config.bgColor.from }, { offset: '100%', color: config.bgColor.to }]
		};
	}, [config.bgColor]);

	return (
		<div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto w-full pb-20 px-4">
			<QrGeneratorSidebar config={config} setConfig={setConfig} qrValue={qrValue} getQRCodeGradient={getQRCodeGradient} getBackgroundSettings={getBackgroundSettings} />
			<QrGeneratorWorkspace config={config} qrValue={qrValue} getQRCodeGradient={getQRCodeGradient} getBackgroundSettings={getBackgroundSettings} />
		</div>
	);
}

/* ----- EXPORT ----- */
export default QrGeneratorContent;
