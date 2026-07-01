/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { UploadCloud, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";
import NumericalSlider from "@/components/custom-ui/NumericalSlider";
import { toast } from "sonner";

/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	setConfig: React.Dispatch<React.SetStateAction<IQRCodeGeneratorConfig>>;
}

/* ----- COMPONENT ----- */
function LogoSelector({ config, setConfig }: Props) {
	const hasLogo = config.logo.src.trim() !== "";

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		if (!file.type.startsWith("image/")) {
			toast.error("Veuillez sélectionner un fichier image valide (PNG, JPG, SVG...).");
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			if (typeof reader.result === "string") {
				setConfig({
					...config,
					logo: { ...config.logo, src: reader.result }
				});
				toast.success("Logo importé avec succès !");
			}
		};
		reader.readAsDataURL(file);
	};

	return (
		<AccordionItem value="LogoSettings">
			<AccordionTrigger className="flex items-center justify-between px-1 hover:no-underline">
				<Label className="text-[10px] font-black uppercase text-zinc-600">Logo central</Label>
				<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
					{hasLogo ? "Actif" : "Aucun"}
				</span>
			</AccordionTrigger>
			<AccordionContent className="space-y-5 pt-2">

				<div className="space-y-2">
					<Label className="text-[9px] font-black uppercase text-zinc-500 ml-1">Fichier du logo</Label>

					{!hasLogo ? (
						<label className="flex flex-col items-center justify-center w-full h-24 border border-dashed border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/60 rounded-xl cursor-pointer transition-all duration-200 group gap-1">
							<UploadCloud size={20} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
							<span className="text-[10px] font-medium text-zinc-400 group-hover:text-zinc-300">
								Cliquez pour importer un logo
							</span>
							<span className="text-[8px] text-zinc-600 font-mono">PNG, JPG, SVG, WEBP</span>
							<input
								type="file"
								accept="image/*"
								onChange={handleFileChange}
								className="hidden"
							/>
						</label>
					) : (
						<div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-3 rounded-xl gap-4 animate-in fade-in duration-300">
							<div className="flex items-center gap-3 min-w-0">
								<div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center shadow-inner shrink-0 overflow-hidden">
									<img
										src={config.logo.src}
										alt="Logo preview"
										className="max-w-full max-h-full object-contain"
									/>
								</div>
								<div className="flex flex-col text-left min-w-0">
									<span className="text-[10px] font-bold text-zinc-300 truncate">Image personnalisée</span>
									<span className="text-[8px] font-mono text-zinc-600 uppercase tracking-wider">Format Base64</span>
								</div>
							</div>
							<button
								onClick={() => setConfig({ ...config, logo: { ...config.logo, src: "" } })}
								className="h-9 w-9 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 hover:text-red-400 hover:border-red-500/20 hover:bg-red-500/5 transition-all cursor-pointer group shrink-0"
							>
								<Trash2 size={14} className="group-hover:scale-105 transition-transform" />
							</button>
						</div>
					)}
				</div>

				{hasLogo && (
					<div className="space-y-5 animate-in slide-in-from-top-2 duration-300">
						<NumericalSlider
							label="Taille du logo (px)"
							value={config.logo.size}
							setValue={(val) => setConfig({ ...config, logo: { ...config.logo, size: val } })}
							min={40}
							max={100}
							step={2}
						/>

						<div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-900 p-3 rounded-xl">
							<div className="flex flex-col gap-0.5 text-left">
								<Label className="text-[10px] font-black uppercase text-zinc-400">Détourer le QR Code</Label>
								<span className="text-[9px] text-zinc-500 font-medium">Masque les points situés sous le logo.</span>
							</div>
							<Switch
								checked={config.logo.excavate}
								onCheckedChange={(checked) => setConfig({ ...config, logo: { ...config.logo, excavate: checked } })}
							/>
						</div>
					</div>
				)}

			</AccordionContent>
		</AccordionItem>
	);
}

/* ----- EXPORT ----- */
export default LogoSelector;
