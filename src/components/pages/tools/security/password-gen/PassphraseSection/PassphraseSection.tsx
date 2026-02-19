/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import XKCD from "./XKCD";
import PassphraseGeneration from "./PassphraseGeneration";


/* ----- COMPONENT ----- */
function PassphraseSection() {
	return (
		<div className="mt-12 flex flex-col gap-8 w-full border-t border-zinc-800 pt-12">
			<XKCD />
			<PassphraseGeneration />
		</div>
	);
}


/* ----- EXPORT ----- */
export default PassphraseSection;
