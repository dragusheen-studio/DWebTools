/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo } from "react";
import { getPasswordOptions, getStrengthFromPassword } from "@/config/tools/security/PasswordGen";
import { ICharsetStat } from "@/types/tools/security/PasswordCheck";
import CharsetStat from "./CharsetStat";
import StrengthBar from "./StrengthBar";
import PasswordInput from "./PasswordInput";


/* ----- PROPS ----- */
interface StrengthSectionProps {
	password: string;
	setPassword: (password: string) => void;
}


/* ----- COMPONENT ----- */
function StrengthSection({ password, setPassword }: StrengthSectionProps) {
	const passwordOptions = getPasswordOptions();

	const charsetStats: ICharsetStat[] = useMemo(() => {
		return passwordOptions.map(opt => {
			const regex = new RegExp(`[${opt.charsets.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`, 'g');
			const matches = password.match(regex);
			const count = matches ? matches.length : 0;

			const score = Math.min((count / 5) * 100, 100);
			let color = "bg-zinc-800";
			if (count > 0) color = "bg-red-500";
			if (count >= 2) color = "bg-orange-500";
			if (count >= 4) color = "bg-emerald-500";

			return { ...opt, count, score, color };
		});
	}, [password, passwordOptions]);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full pb-20">
			<div className="lg:col-span-2 flex flex-col gap-6">
				<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-8 shadow-2xl">
					<PasswordInput password={password} setPassword={setPassword} />
					<StrengthBar password={password} charsetStats={charsetStats} />
				</div>
			</div>

			<div className="flex flex-col gap-4">
				{charsetStats.map((stat) => (
					<CharsetStat key={stat.name} stat={stat} />
				))}
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default StrengthSection;
