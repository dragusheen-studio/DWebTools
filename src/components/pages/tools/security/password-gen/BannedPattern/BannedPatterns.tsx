/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Plus, AlertTriangle, ChevronUp, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { IBannedPattern } from "@/types/tools/security/PasswordGen";
import { useEffect, useState } from "react";
import BannedPattern from "./BannedPattern";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


/* ----- PROPS ----- */
interface BannedPatternsProps {
	password: string;
	patterns: IBannedPattern[];
	setPatterns: (p: IBannedPattern[]) => void;
	compromised: boolean;
	setCompromised: (c: boolean) => void;
}


/* ----- COMPONENT ----- */
function BannedPatterns({ password, patterns, setPatterns, compromised, setCompromised }: BannedPatternsProps) {
	const [showTable, setShowTable] = useState<boolean>(false);
	const SIMILAR_GROUPS = [
		"[aA4@]", "[eE3]", "[iI1!|]", "[oO0]", "[sS5$]", "[tT7]", "[bB8]", "[gG69]", "[lL1|]"
	];

	const VARIANT_MAP: Record<string, string> = {};
	SIMILAR_GROUPS.forEach(group => {
		const chars = group.replace(/[\[\]]/g, "").split("");
		chars.forEach(char => { VARIANT_MAP[char] = group; });
	});

	const createAuditRegex = (input: string, useVariants: boolean): RegExp => {
		if (!input) return /^$/;
		if (!useVariants) return new RegExp(input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');

		const pattern = input
			.split('')
			.map(char => {
				if (/[\/\.\-_\s]/.test(char)) return "[\\/\\.\\-_\\s]";
				return VARIANT_MAP[char] || char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			})
			.join('');

		return new RegExp(pattern, 'gi');
	};

	const updatePattern = (id: string, value: string) => {
		setPatterns(patterns.map(p => p.id === id ? { ...p, value } : p));
	};

	const toggleType = (id: string) => {
		setPatterns(patterns.map(p => p.id === id ? {
			...p,
			type: p.type === "text" ? "date" : "text",
			value: ""
		} : p));
	};

	const deletePattern = (id: string) => {
		setPatterns(patterns.filter(p => p.id !== id));
	};


	useEffect(() => {
		setCompromised(patterns.some(p => {
			if (!p.value || p.value.length < 3) return;
			let searchStr = p.value;
			if (p.type === "date") searchStr = format(new Date(p.value), "ddMMyyyy");

			const regex = createAuditRegex(searchStr, true);
			return regex.test(password);
		}));
	}, [password, patterns]);

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-6">
			<h3 className="text-sm font-black uppercase tracking-widest text-zinc-400">Audit de Sécurité</h3>

			<div className="flex flex-col gap-3 w-full">
				{patterns.map((p) => (
					<BannedPattern key={p.id} pattern={p} updatePattern={updatePattern} toggleType={toggleType} deletePattern={deletePattern} />
				))}
			</div>

			<Button variant="outline" onClick={() => setPatterns([...patterns, { id: crypto.randomUUID(), label: "Pattern", value: "", type: "text" }])} className="border-dashed border-zinc-800 text-zinc-500 rounded-xl h-10">
				<Plus size={16} className="mr-2" /> Ajouter
			</Button>

			{compromised && (
				<div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-3 animate-pulse">
					<AlertTriangle size={18} />
					<span className="text-[10px] font-black uppercase tracking-tight">Mot de passe compromis !</span>
				</div>
			)}

			<Tooltip>
				<TooltipTrigger asChild>
					<div className="mt-2 border-t border-zinc-800/50 pt-4">
						<button
							onClick={() => setShowTable(!showTable)}
							className="flex items-center justify-between w-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors"
						>
							Table des correspondances
							{showTable ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
						</button>

						{showTable && (
							<div className="grid grid-cols-3 gap-2 mt-4 animate-in zoom-in-95 duration-200">
								{SIMILAR_GROUPS.map(g => (
									<div key={g} className="p-2 rounded-lg bg-zinc-950/50 border border-zinc-800 text-[10px] font-mono text-center text-zinc-400 hover:text-blue-500/70 hover:scale-110 scale-100 transition-all duration-100">
										{g.replaceAll(/[\[\]]/g, "")}
									</div>
								))}
								<div className="p-2 rounded-lg bg-zinc-950/50 border border-zinc-800 text-[10px] font-mono text-center col-span-3 text-zinc-400 hover:text-blue-500/70 hover:scale-110 scale-100 transition-all duration-100">
									[ / . - _ ] → Séparateurs
								</div>
							</div>
						)}
					</div>
				</TooltipTrigger>
				<TooltipContent className="text-zinc-900 text-[10px] font-mono">
					Pour un ordinateur "Hello" & "h31l0" sont similaire
				</TooltipContent>
			</Tooltip>
		</div>
	);
}


/* ----- EXPORT ----- */
export default BannedPatterns;
