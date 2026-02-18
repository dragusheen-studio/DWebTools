/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import PasswordGenDefault from "@/components/pages/tools/security/password-gen/passwordGenDefault";


/* ----- COMPONENT ----- */
function PasswordGenContent() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
			<PasswordGenDefault />

			<div className="flex flex-col gap-6">
				<div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 h-fit">
					<p className="text-zinc-500 text-xs italic">Partie 2 & 3 en approche...</p>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default PasswordGenContent;
