/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Upload } from "lucide-react";


/* ----- PROPS ----- */
interface Props {
	setImage: (img: HTMLImageElement | null) => void;
}


/* ----- COMPONENT ----- */
function UploadImage({ setImage }: Props) {
	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (event) => {
			const img = new Image();
			img.onload = () => {
				setImage(img);
			};
			img.src = event.target?.result as string;
		};
		reader.readAsDataURL(file);
	};

	return (
		<label className="group cursor-pointer flex flex-col items-center gap-6 transition-all hover:scale-105">
			<div className="w-24 h-24 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all shadow-2xl">
				<Upload size={40} />
			</div>
			<p className="text-sm font-black uppercase tracking-widest text-zinc-400">Importer une Sprite Sheet</p>
			<input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
		</label>
	);
}


/* ----- EXPORT ----- */
export default UploadImage;
