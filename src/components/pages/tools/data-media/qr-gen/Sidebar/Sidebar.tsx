/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { QrCode, Type, Wifi, UserCircle, Dot } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import ContentTypeSelecter from "./ContentType";
import ColorSelecter from "./ColorSelecter/ColorSelecter";
import DotStyleSelecter from "./DotStyleSelecter";


/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	setConfig: React.Dispatch<React.SetStateAction<IQRCodeGeneratorConfig>>;
}


/* ----- COMPONENT ----- */
function QrGeneratorSidebar({ config, setConfig }: Props) {
	return (
		<div className="w-full lg:w-80 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-2xl flex flex-col gap-4 text-left">
				<div className="flex flex-col gap-1">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Configuration</span>
					<h3 className="text-xl font-bold text-zinc-200 flex items-center gap-2 italic">
						<QrCode size={20} className="text-blue-500" /> QR Code Gen
					</h3>
				</div>
				<Accordion type="multiple" className="w-full" defaultValue={["ContentType"]}>
					<ContentTypeSelecter config={config} setConfig={setConfig} />
					<ColorSelecter id="Foreground" config={config.fgColor} setConfig={(value) => setConfig({ ...config, fgColor: value })} label="Couleur du QR" defaultColor="#000000" />
					<ColorSelecter id="Background" config={config.bgColor} setConfig={(value) => setConfig({ ...config, bgColor: value })} label="Couleur du fond" allowTransparent />
					<DotStyleSelecter config={config} setConfig={setConfig} />
				</Accordion>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default QrGeneratorSidebar;
