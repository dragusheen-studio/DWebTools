/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Plus, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IColorToken } from "@/types/tools/design/UIKitPreview";
import ColorToken from "./ColorToken";


/* ----- PROPS ----- */
interface IProps {
	tokens: IColorToken[];
	setTokens: React.Dispatch<React.SetStateAction<IColorToken[]>>;
}


/* ----- COMPONENT ----- */
function TokensList({ tokens, setTokens }: IProps) {
	const usedRoles = useMemo(() => tokens.map(t => t.role), [tokens]);

	const addToken = () => {
		setTokens([...tokens, { id: crypto.randomUUID(), role: "other", hex: "#6366f1" }]);
	};

	return (
		<div className="lg:col-span-8 p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
			<div className="flex justify-between items-center px-2">
				<div className="flex items-center gap-2">
					<Palette size={16} className="text-blue-500" />
					<span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Configuration des Jetons</span>
				</div>
				<Button onClick={addToken} variant="ghost" size="sm" className="h-8 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
					<Plus size={14} className="mr-1" /> Ajouter
				</Button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2 scrollbar-hide">
				{tokens.map((token) =>
					<ColorToken key={token.id} token={token} tokens={tokens} setTokens={setTokens} usedRoles={usedRoles} />
				)}
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default TokensList;
