/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { IColorToken } from "@/types/tools/design/UIKitPreview";
import Header from "@/components/pages/tools/design/ui-kit-preview/Header/Header";
import CarouselSection from "@/components/pages/tools/design/ui-kit-preview/CarouselSection/CarouselSection";


/* ----- COMPONENT ----- */
function UIKitPreviewContent() {
	const [tokens, setTokens] = useState<IColorToken[]>([
		{ id: crypto.randomUUID(), role: "primary", hex: "#3b82f6" },
		{ id: crypto.randomUUID(), role: "bgLight", hex: "#ffffff" },
		{ id: crypto.randomUUID(), role: "textLight", hex: "#18181b" },
	]);

	return (
		<div className="flex flex-col gap-12 max-w-6xl mx-auto w-full pb-20 px-4">
			<Header tokens={tokens} setTokens={setTokens} />
			<CarouselSection tokens={tokens} />
		</div>
	);
}

export default UIKitPreviewContent;
