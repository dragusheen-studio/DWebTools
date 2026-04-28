/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Download, Settings2 } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";


/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
}


/* ----- COMPONENT ----- */
function QrGeneratorWorkspace({ config }: Props) {
	const qrValue = useMemo(() => {
		switch (config.mode) {
			case "wifi": return `WIFI:S:${config.wifi.ssid};T:${config.wifi.enc};P:${config.wifi.pass};;`;
			case "vcard": return `BEGIN:VCARD\nVERSION:3.0\nN:${config.vcard.name}\nTEL:${config.vcard.tel}\nEMAIL:${config.vcard.email}\nEND:VCARD`;
			default: return config.text || " ";
		}
	}, [config.mode, config.text, config.wifi, config.vcard]);

	const downloadQR = () => {
		const canvas = document.getElementById("qr-canvas") as HTMLCanvasElement;
		if (!canvas) return;
		const link = document.createElement("a");
		link.download = `qrcode-dwebtools.png`;
		link.href = canvas.toDataURL("image/png");
		link.click();
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
				<QRCodeCanvas
					className="transition-all duration-500"
					id="qr-canvas"
					value={qrValue}
					size={280}
					level={config.level}
					fgColor={config.fgColor}
					bgColor={config.bgColor}
					marginSize={config.margin}
				/>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default QrGeneratorWorkspace;
