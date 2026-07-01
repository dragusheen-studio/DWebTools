/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useRef, useState } from "react";
import { Download, Settings2, FileImage, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
	const QRCodeRef = useRef<ReactQRCodeRef>(null);
	const [downloadFormat, setDownloadFormat] = useState<"png" | "svg">("png");

	const downloadQR = () => {
		QRCodeRef.current?.download({
			name: 'qrcode-dwebtools',
			format: downloadFormat,
			size: downloadFormat === "png" ? 1000 : undefined,
		});
		toast.success(`QR Code téléchargé au format ${downloadFormat.toUpperCase()} !`);
	};

	return (
		<div className="flex-1 min-h-150 p-10 rounded-[3.5rem] bg-zinc-950 border border-zinc-800 shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
			<div className="flex flex-row justify-between items-center w-full">
				<div className="flex items-center gap-3 opacity-30 pointer-events-none text-zinc-400">
					<Settings2 size={16} />
					<span className="text-[10px] font-black uppercase tracking-widest italic">Aperçu en direct</span>
				</div>

				<div className="flex items-center gap-3 bg-zinc-900/50 p-1.5 border border-zinc-800/60 rounded-2xl">
					<Tabs value={downloadFormat} onValueChange={(v: any) => setDownloadFormat(v)} className="h-9">
						<TabsList className="bg-zinc-950 border border-zinc-900 h-9 p-0.5 rounded-xl">
							<TabsTrigger value="png" className="text-[9px] uppercase font-bold gap-1 rounded-lg px-3 data-[state=active]:bg-zinc-800">
								<FileImage size={11} /> PNG
							</TabsTrigger>
							<TabsTrigger value="svg" className="text-[9px] uppercase font-bold gap-1 rounded-lg px-3 data-[state=active]:bg-zinc-800">
								<FileCode size={11} /> SVG
							</TabsTrigger>
						</TabsList>
					</Tabs>

					<Button
						onClick={downloadQR}
						className="h-9 gap-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-[10px] font-black uppercase tracking-widest shadow-md shadow-blue-500/10 active:scale-95 transition-all group cursor-pointer"
					>
						<Download size={14} className="group-hover:animate-bounce" /> Export
					</Button>
				</div>
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
