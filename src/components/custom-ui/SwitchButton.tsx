/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


/* ----- PROPS ----- */
interface Props {
	handleSwitch: () => void;
	mode: boolean
}


/* ----- COMPONENT ----- */
function SwitchButton({ handleSwitch, mode }: Props) {
	return (
		<div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex justify-center py-4">
			<Button
				onClick={handleSwitch}
				className="h-14 w-14 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/20 active:scale-90 transition-all"
			>
				<ArrowRightLeft size={24} className={cn("transition-transform duration-500", mode && "rotate-180")} />
			</Button>
		</div>
	);
}


/* ----- EXPORT ----- */
export default SwitchButton;
