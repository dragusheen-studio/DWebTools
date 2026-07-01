/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo, useRef } from "react";
import { Download, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import { DataModulesSettings, FinderPatternInnerSettings, FinderPatternOuterSettings, GradientSettings, ReactQRCode, ReactQRCodeRef } from '@lglab/react-qr-code'

/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
}

/* ----- COMPONENT ----- */
function QrGeneratorWorkspace({ config }: Props) {
	const QRCodeRef = useRef<ReactQRCodeRef>(null)

	const qrValue = useMemo(() => {
		switch (config.content.mode) {
			case "wifi": return `WIFI:S:${config.content.wifi.ssid};T:${config.content.wifi.enc};P:${config.content.wifi.pass};;`;
			case "vcard": return `BEGIN:VCARD\nVERSION:3.0\nN:${config.content.vcard.name}\nTEL:${config.content.vcard.tel}\nEMAIL:${config.content.vcard.email}\nEND:VCARD`;
			default: return config.content.text || " ";
		}
	}, [config.content.mode, config.content.text, config.content.wifi, config.content.vcard]);

	const downloadQR = () => {
		QRCodeRef.current?.download({
			name: 'qrcode-dwebtools',
			format: 'png',
			size: 1000,
		})
		toast.success("QR Code téléchargé !");
	};

	const getQRCodeGradient = useMemo((): GradientSettings => {
		if (typeof config.fgColor === "string") {
			return {
				type: "linear",
				rotation: 0,
				stops: [
					{ offset: '0%', color: config.fgColor },
					{ offset: '100%', color: config.fgColor }
				],
			};
		}

		return {
			type: config.fgColor.type,
			rotation: config.fgColor.rotation,
			stops: [
				{ offset: '0%', color: config.fgColor.from },
				{ offset: '100%', color: config.fgColor.to }
			],
		};
	}, [config.fgColor]);

	const getBackgroundSettings = useMemo(() => {
		if (config.bgColor === "transparent") return "transparent";
		if (typeof config.bgColor === "string") return config.bgColor;

		return {
			type: config.bgColor.type,
			rotation: config.bgColor.rotation,
			stops: [
				{ offset: '0%', color: config.bgColor.from },
				{ offset: '100%', color: config.bgColor.to }
			]
		};
	}, [config.bgColor]);

	return (
		<div className="flex-1 min-h-150 p-10 rounded-[3.5rem] bg-zinc-950 border border-zinc-800 shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
			<div className="flex flex-row justify-between items-center w-full">
				<div className="flex items-center gap-3 opacity-30 pointer-events-none text-zinc-400">
					<Settings2 size={16} />
					<span className="text-[10px] font-black uppercase tracking-widest italic">Aperçu en direct</span>
				</div>
				<Button onClick={downloadQR} className="h-14 aspect-square rounded-2xl bg-blue-600 hover:bg-blue-500 font-black uppercase tracking-widest gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all group">
					<Download size={18} className="group-hover:animate-bounce transition-all duration-300" />
				</Button>
			</div>
			<div className="flex grow justify-center items-center">
				<ReactQRCode
					ref={QRCodeRef}
					gradient={getQRCodeGradient}
					background={getBackgroundSettings}
					marginSize={config.margin}
					size={280}
					level={config.level}
					value={qrValue}
					dataModulesSettings={{ style: config.dotStyle as DataModulesSettings["style"] }}
					finderPatternInnerSettings={{ style: config.finderStyle.inner as FinderPatternInnerSettings["style"] }}
					finderPatternOuterSettings={{ style: config.finderStyle.outer as FinderPatternOuterSettings["style"] }}
				/>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default QrGeneratorWorkspace;
