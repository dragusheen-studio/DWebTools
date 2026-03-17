/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ICronDatas } from "@/types/tools/development/CronTabGen";
import NextDates from "./NextDates";
import PreConfig from "./PreConfig";


/* ----- PROPS ----- */
interface Props {
	cronExpression: string;
	setCronData: (v: ICronDatas) => void;
	setError: (v: string | null) => void;
}


/* ----- COMPONENT ----- */
function CronTabGenSidebar({ cronExpression, setCronData, setError }: Props) {
	return (
		<div className="flex flex-col gap-6">
			<NextDates cronExpression={cronExpression} setError={setError} />
			<PreConfig setCronData={setCronData} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default CronTabGenSidebar;
