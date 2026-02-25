/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { getStrengthFromPassword } from "@/config/tools/security/PasswordGen";
import { cn } from "@/lib/utils";
import { ICharsetStat } from "@/types/tools/security/PasswordCheck";


/* ----- PROPS ----- */
interface StrengthBarProps {
	password: string;
	charsetStats: ICharsetStat[];
}


/* ----- COMPONENT ----- */
function StrengthBar({ password, charsetStats }: StrengthBarProps) {
	const strength = useMemo(() => {
		const activeOpts = charsetStats.filter(s => s.count > 0).length;
		return getStrengthFromPassword(password, activeOpts, false);
	}, [password, charsetStats]);

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center px-2">
				<div className="flex items-center gap-2">
					<strength.icon size={18} className={strength.textColor} />
					<span className={cn("text-xs font-black uppercase tracking-widest", strength.textColor)}>
						Force : {strength.label}
					</span>
				</div>
				<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
					{password.length} caractères
				</span>
			</div>
			<Progress
				value={strength.score}
				className="h-2 bg-zinc-800"
				indicatorClassName={strength.rangeColor}
			/>
		</div>
	);
}

/* ----- EXPORT ----- */
export default StrengthBar;
