/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useRef } from "react";
import { Download, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import { DataModulesSettings, FinderPatternInnerSettings, FinderPatternOuterSettings, GradientSettings, ReactQRCode, ReactQRCodeRef } from '@lglab/react-qr-code'

/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	qrValue: string;
	getQRCodeGradient: GradientSettings;
	getBackgroundSettings: string | GradientSettings | "transparent";
}

/* ----- COMPONENT ----- */
function QrGeneratorWorkspace({ config, qrValue, getQRCodeGradient, getBackgroundSettings }: Props) {
	const QRCodeRef = useRef<ReactQRCodeRef>(null)

	const downloadQR = () => {
		QRCodeRef.current?.download({
			name: 'qrcode-dwebtools',
			format: 'png',
			size: 1000,
		})
		toast.success("QR Code téléchargé !");
	};

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
					imageSettings={config.logo.src.trim() !== "" ? {
						src: config.logo.src,
						height: config.logo.size,
						width: config.logo.size,
						excavate: config.logo.excavate,
					} : undefined}
				/>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default QrGeneratorWorkspace;
