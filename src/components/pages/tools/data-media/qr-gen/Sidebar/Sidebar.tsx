/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { QrCode } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import ContentTypeSelecter from "./ContentType";
import ColorSelecter from "./ColorSelecter/ColorSelecter";
import PatternStyleSelecter from "./PatternStyleSelecter";
import { getDotOptions, getFinderInnerOptions, getFinderOuterOptions } from "@/config/tools/data-media/QrGen";
import NumericalSlider from "@/components/custom-ui/NumericalSlider";
import { GradientSettings } from "@lglab/react-qr-code";

/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	setConfig: React.Dispatch<React.SetStateAction<IQRCodeGeneratorConfig>>;
	qrValue: string;
	getQRCodeGradient: GradientSettings;
	getBackgroundSettings: string | GradientSettings | "transparent";
}

/* ----- COMPONENT ----- */
function QrGeneratorSidebar({ config, setConfig, qrValue, getQRCodeGradient, getBackgroundSettings }: Props) {
	return (
		<div className="w-full lg:w-80 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 shadow-2xl flex flex-col gap-4 text-left">
				<div className="flex flex-col gap-1">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Configuration</span>
					<h3 className="text-xl font-bold text-zinc-200 flex items-center gap-2 italic">
						<QrCode size={20} className="text-blue-500" /> QR Code Gen
					</h3>
				</div>
				<Accordion type="single" className="w-full" defaultValue={"ContentType"}>
					<ContentTypeSelecter config={config} setConfig={setConfig} />
					<ColorSelecter id="Foreground" config={config.fgColor} setConfig={(value) => setConfig({ ...config, fgColor: value })} label="Couleur du QR" defaultColor="#000000" />
					<ColorSelecter id="Background" config={config.bgColor} setConfig={(value) => setConfig({ ...config, bgColor: value })} label="Couleur du fond" allowTransparent>
						<NumericalSlider label="Marge" value={config.margin} setValue={(value) => setConfig({ ...config, margin: value })} min={0} max={12} step={1} />
					</ColorSelecter><PatternStyleSelecter id="DotStyle" value={config.dotStyle} setValue={(value) => setConfig({ ...config, dotStyle: value })} options={getDotOptions()} label="Style des points" config={config} qrValue={qrValue} getGradient={getQRCodeGradient} getBackground={getBackgroundSettings} />
					<PatternStyleSelecter id="FinderInnerStyle" value={config.finderStyle.inner} setValue={(value) => setConfig({ ...config, finderStyle: { ...config.finderStyle, inner: value } })} options={getFinderInnerOptions()} label="Style des yeux (intérieur)" config={config} qrValue={qrValue} getGradient={getQRCodeGradient} getBackground={getBackgroundSettings} />
					<PatternStyleSelecter id="FinderOuterStyle" value={config.finderStyle.outer} setValue={(value) => setConfig({ ...config, finderStyle: { ...config.finderStyle, outer: value } })} options={getFinderOuterOptions()} label="Style des yeux (extérieur)" config={config} qrValue={qrValue} getGradient={getQRCodeGradient} getBackground={getBackgroundSettings} />
				</Accordion>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default QrGeneratorSidebar;
