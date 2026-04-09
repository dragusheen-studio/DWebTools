/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import JSZip from "jszip";
import { ISpriteCoord, ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";
import { useState } from "react";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
	sprites: ISpriteCoord[];
}


/* ----- COMPONENT ----- */
function DownloadZip({ config, sprites }: Props) {
	const [isExporting, setIsExporting] = useState<boolean>(false);

	const downloadZip = async () => {
		if (!config.image || config.selectedIndices.size === 0) {
			toast.error("Veuillez sélectionner au moins un sprite.");
			return;
		}

		setIsExporting(true);
		const zip = new JSZip();
		const offscreen = document.createElement("canvas");
		const octx = offscreen.getContext("2d");

		offscreen.width = config.spriteConfig.tileWidth;
		offscreen.height = config.spriteConfig.tileHeight;

		const indices = Array.from(config.selectedIndices).sort((a, b) => a - b);

		try {
			for (let i = 0; i < indices.length; i++) {
				const idx = indices[i];
				const sprite = sprites[idx];
				octx?.clearRect(0, 0, config.spriteConfig.tileWidth, config.spriteConfig.tileHeight);
				octx?.drawImage(config.image, sprite.x, sprite.y, config.spriteConfig.tileWidth, config.spriteConfig.tileHeight, 0, 0, config.spriteConfig.tileWidth, config.spriteConfig.tileHeight);

				const blob = await new Promise<Blob | null>(res => offscreen.toBlob(res, "config.image/png"));
				if (blob) {
					zip.file(`${config.spriteConfig.prefix}_${i}.png`, blob);
				}
			}

			const content = await zip.generateAsync({ type: "blob" });
			const link = document.createElement("a");
			link.href = URL.createObjectURL(content);
			link.download = `${config.spriteConfig.prefix}_export.zip`;
			link.click();
			toast.success(`${config.selectedIndices.size} sprites exportés avec succès !`);
		} catch (err) {
			toast.error("Erreur lors de la création du ZIP.");
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<Button
			disabled={!config.image || config.selectedIndices.size === 0 || isExporting}
			onClick={downloadZip}
			className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 font-black uppercase tracking-widest gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
		>
			<Download size={18} className={isExporting ? "animate-bounce" : ""} />
			{isExporting ? "Création..." : `Export ZIP (${config.selectedIndices.size})`}
		</Button>
	);
}


/* ----- EXPORT ----- */
export default DownloadZip;
