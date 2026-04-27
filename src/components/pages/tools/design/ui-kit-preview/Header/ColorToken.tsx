/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Trash2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ColorRole, IColorToken } from "@/types/tools/design/UIKitPreview";
import { getRoleLabels } from "@/config/tools/design/UIKitPreview";


/* ----- PROPS ----- */
interface IProps {
	token: IColorToken;
	tokens: IColorToken[];
	setTokens: React.Dispatch<React.SetStateAction<IColorToken[]>>;
	usedRoles: ColorRole[];
}


/* ----- COMPONENT ----- */
function ColorToken({ token, tokens, setTokens, usedRoles }: IProps) {
	const removeToken = (id: string) => {
		setTokens(tokens.filter(t => t.id !== id));
	};

	const updateToken = (id: string, field: keyof IColorToken, value: string) => {
		setTokens(tokens.map(t => t.id === id ? { ...t, [field]: value } : t));
	};

	return (
		<div className={cn(
			"flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300",
			token.role === "other" ? "bg-zinc-900/40 border-zinc-800/50" : "bg-zinc-900 border-zinc-800 shadow-lg"
		)}>
			<input
				type="color"
				value={token.hex}
				onChange={(e) => updateToken(token.id, "hex", e.target.value)}
				className="w-10 h-10 rounded-xl bg-transparent border-none cursor-pointer shrink-0 transition-transform active:scale-90"
			/>

			<div className="flex-1 flex flex-col gap-1">
				<Select value={token.role} onValueChange={(v: ColorRole) => updateToken(token.id, "role", v)}>
					<SelectTrigger className="bg-transparent border-none h-6 p-0 text-[11px] font-bold uppercase tracking-tighter focus:ring-0">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="bg-zinc-900 border-zinc-800 text-xs">
						{Object.entries(getRoleLabels()).map(([val, label]) => (
							<SelectItem
								key={val}
								value={val}
								disabled={val !== "other" && usedRoles.includes(val as ColorRole) && token.role !== val}
							>
								{label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				{token.role === "other" ? (
					<div className="flex items-center gap-1.5 text-orange-500/60">
						<AlertCircle size={10} />
						<span className="text-[8px] font-black uppercase">Non assigné à la preview</span>
					</div>
				) : (
					<div className="flex items-center gap-1.5 text-emerald-500/60">
						<CheckCircle2 size={10} />
						<span className="text-[8px] font-black uppercase tracking-tighter italic">Connecté au rendu</span>
					</div>
				)}
			</div>

			<Button
				variant="ghost" size="icon"
				onClick={() => removeToken(token.id)}
				className="w-8 h-8 rounded-lg text-zinc-700 hover:text-red-400 transition-colors"
			>
				<Trash2 size={14} />
			</Button>
		</div>
	);
}


/* ----- EXPORT ----- */
export default ColorToken;
