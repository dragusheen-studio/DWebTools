/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ICronDatas } from "@/types/tools/development/CronTabGen";


/* ----- PROPS ----- */
interface Props {
	cronData: ICronDatas;
	setCronData: (v: ICronDatas) => void;
}


/* ----- COMPONENT ----- */
function CronData({ cronData, setCronData }: Props) {
	const handleCronDataChange = (key: keyof ICronDatas, value: string) => {
		setCronData({ ...cronData, [key]: value });
	};

	const segments = [
		{ label: "Minutes", value: cronData.minutes, setter: (v: string) => handleCronDataChange("minutes", v) },
		{ label: "Heures", value: cronData.hours, setter: (v: string) => handleCronDataChange("hours", v) },
		{ label: "Jours", value: cronData.days, setter: (v: string) => handleCronDataChange("days", v) },
		{ label: "Mois", value: cronData.months, setter: (v: string) => handleCronDataChange("months", v) },
		{ label: "Semaine", value: cronData.weekDays, setter: (v: string) => handleCronDataChange("weekDays", v) },
	];

	const quickValues = [
		{ label: "Tout (*)", value: "*" },
		{ label: "Début (0)", value: "0" },
		{ label: "Toutes les 5 (*/5)", value: "*/5" },
		{ label: "Toutes les 10 (*/10)", value: "*/10" },
		{ label: "Toutes les 15 (*/15)", value: "*/15" },
		{ label: "Toutes les 30 (*/30)", value: "*/30" },
	];

	return (
		<div className="grid grid-cols-5 gap-3">
			{segments.map((seg) => (
				<span key={`label-${seg.label}`} className="text-[9px] font-bold text-center uppercase tracking-widest text-zinc-600 truncate px-1">
					{seg.label}
				</span>
			))}

			{segments.map((seg) => (
				<Input
					key={`input-${seg.label}`}
					value={seg.value}
					onChange={(e) => { seg.setter(e.target.value) }}
					className="h-12 bg-zinc-900/50 border-zinc-800 rounded-xl text-center font-mono text-base text-blue-400 min-w-0"
				/>
			))}

			{segments.map((seg) => (
				<Select
					key={`select-${seg.label}`}
					value={quickValues.find(q => q.value === seg.value) ? seg.value : "custom"}
					onValueChange={(v) => v !== "custom" && seg.setter(v)}
				>
					<SelectTrigger className="h-8 bg-zinc-900/30 border-zinc-800/50 rounded-lg text-[8px] font-bold uppercase min-w-0 w-full">
						<div className="truncate w-full max-w-full text-left pr-1">
							<SelectValue placeholder="Quick" />
						</div>
					</SelectTrigger>
					<SelectContent className="bg-zinc-900 border-zinc-800">
						<SelectItem value="custom" disabled className="text-[10px] italic">Custom</SelectItem>
						{quickValues.map(q => (
							<SelectItem key={q.value} value={q.value} className="text-[10px] font-bold uppercase">{q.label}</SelectItem>
						))}
					</SelectContent>
				</Select>
			))}
		</div>
	);
}


/* ----- EXPORT ----- */
export default CronData;
