/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ICronDatas } from "@/types/tools/development/CronTabGen";
import FinalDisplay from "./FinalDisplay";
import CommandAndTraduction from "./CommandAndTraduction";
import CronData from "./CronData";


/* ----- PROPS ----- */
interface Props {
	cronData: ICronDatas;
	setCronData: (v: ICronDatas) => void;
	command: string;
	setCommand: (v: string) => void;
	error: string | null;
	cronExpression: string;
}


/* ----- COMPONENT ----- */
function CronTabGenConfiguration({ cronData, setCronData, command, setCommand, error, cronExpression }: Props) {
	return (
		<div className="lg:col-span-2 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-8 shadow-2xl">
				<div className="flex flex-col gap-1 text-left">
					<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-2">Configuration</span>
					<h3 className="text-xl font-bold text-zinc-200 ml-2">Éditeur de Tâches</h3>
				</div>

				<CronData cronData={cronData} setCronData={setCronData} />
				<CommandAndTraduction command={command} setCommand={setCommand} cronExpression={cronExpression} error={error} />
				<FinalDisplay cronExpression={cronExpression} command={command} />
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CronTabGenConfiguration;
