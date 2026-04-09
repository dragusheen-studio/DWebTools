/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Button } from "@/components/ui/button";
import { ISpriteCoord, ISpriteSheetCuterConfig } from "@/types/tools/design/SpriteSheetCuter";
import UploadImage from "./UploadImage";
import DisplayImageView from "./DisplayImageView";


/* ----- PROPS ----- */
interface Props {
	config: ISpriteSheetCuterConfig;
	setConfig: React.Dispatch<React.SetStateAction<ISpriteSheetCuterConfig>>;
	sprites: ISpriteCoord[];
}


/* ----- COMPONENT ----- */
function ImageSide({ config, setConfig, sprites }: Props) {
	const removeImage = () => {
		setConfig(prev => ({ ...prev, image: null, selectedIndices: new Set() }));
	};

	return (
		<div className="flex-1 min-h-175 p-10 rounded-[3.5rem] bg-zinc-950 border border-zinc-800 shadow-inner flex items-center justify-center relative overflow-hidden">
			{!config.image ? (
				<UploadImage setImage={(img: HTMLImageElement | null) => setConfig({ ...config, image: img })} />
			) : (
				<DisplayImageView config={config} setConfig={setConfig} sprites={sprites} />
			)}
			{config.image && (
				<Button onClick={removeImage} variant="ghost" className="absolute top-8 right-12 text-zinc-600 hover:text-red-400 h-10 rounded-xl text-[10px] font-bold uppercase transition-colors">
					Changer d'image
				</Button>
			)}
		</div>
	);
}


/* ----- EXPORT ----- */
export default ImageSide;
