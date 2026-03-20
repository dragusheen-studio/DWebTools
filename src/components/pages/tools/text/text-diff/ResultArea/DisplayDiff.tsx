/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ChangeObject } from "diff";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	diffResult: ChangeObject<string>[];
}


/* ----- COMPONENT ----- */
function DisplayDiff({ diffResult }: Props) {
	return (
		<div className="flex flex-col whitespace-pre-wrap">
			{diffResult.map((part, index) => (
				<div
					key={index}
					className={cn(
						"px-2 py-0.5 rounded-sm border-l-2 my-px",
						part.added ? "bg-emerald-500/10 border-emerald-500 text-emerald-300" :
							part.removed ? "bg-red-500/10 border-red-500 text-red-300 line-through opacity-70" :
								"border-transparent text-zinc-500"
					)}
				>
					{part.value}
				</div>
			))}
		</div>
	);
}


/* ----- EXPORT ----- */
export default DisplayDiff;
