/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IPasswordStrength } from "@/types/tools/security/PasswordGen";
import { cn } from "@/lib/utils";
import { getStrengthFromPassword } from "@/config/tools/security/PasswordGen";
import { copy } from "@/services/utils/copy";


/* ----- PROPS ----- */
interface PasswordDisplayProps {
	password: string;
	onRegenerate: () => void;
	compromised: boolean;
	selectedOptsCount: number
}


/* ----- COMPONENT ----- */
function PasswordDisplay({ password, onRegenerate, compromised, selectedOptsCount }: PasswordDisplayProps) {
	const [strength, setStrength] = useState<IPasswordStrength>(getStrengthFromPassword(password, selectedOptsCount, compromised));

	useEffect(() => {
		setStrength(getStrengthFromPassword(password, selectedOptsCount, compromised));
	}, [password, compromised, selectedOptsCount]);

	return (
		<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
			<div className="relative group">
				<Input
					readOnly
					value={password}
					className="h-20 bg-zinc-900/50 border-zinc-800 rounded-2xl text-2xl font-mono text-center text-blue-400 tracking-wider pr-14 focus-visible:ring-0"
				/>
				<div className="absolute right-4 top-1/2 -translate-y-1/2">
					<Button size="icon" variant="ghost" onClick={onRegenerate} className="text-zinc-500 hover:text-zinc-200">
						<RefreshCw size={20} />
					</Button>
				</div>
			</div>

			<div className="space-y-3">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2 text-zinc-400">
						<strength.icon size={16} className={strength.textColor} />
						<span className={cn("text-xs font-bold uppercase tracking-widest", strength.textColor)}>Force : {strength.label}</span>
					</div>
				</div>
				<Progress value={strength.score} className="h-1.5 bg-zinc-800" indicatorClassName={strength.rangeColor} />
			</div>

			<Button onClick={() => copy(password, "Mot de passe copié !")} className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest gap-3 shadow-lg shadow-blue-500/20">
				<Copy size={18} /> Copier
			</Button>
		</div>
	);
}


/* ----- EXPORT ----- */
export default PasswordDisplay;
