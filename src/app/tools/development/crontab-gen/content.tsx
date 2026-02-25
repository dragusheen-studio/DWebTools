/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { ICronDatas } from "@/types/tools/development/CronTabGen";
import CronTabGenSidebar from "@/components/pages/tools/development/crontab-gen/Sidebar/Sidebar";
import CronTabGenConfiguration from "@/components/pages/tools/development/crontab-gen/Configuration/Configuration";


/* ----- COMPONENT ----- */
function CronTabGenContent() {
	const [cronData, setCronData] = useState<ICronDatas>({ minutes: "*", hours: "*", days: "*", months: "*", weekDays: "*" });
	const [command, setCommand] = useState("echo \"Hello World\"");
	const [error, setError] = useState<string | null>(null);

	const cronExpression = `${cronData.minutes} ${cronData.hours} ${cronData.days} ${cronData.months} ${cronData.weekDays}`;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full pb-20">
			<CronTabGenConfiguration cronData={cronData} setCronData={setCronData} command={command} setCommand={setCommand} error={error} cronExpression={cronExpression} />
			<CronTabGenSidebar cronExpression={cronExpression} setCronData={setCronData} setError={setError} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default CronTabGenContent;
