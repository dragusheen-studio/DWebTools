/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import AuthorCard from "./AuthorCard";


/* ----- COMPONENT ----- */
function AuthorSection() {
	return (
		<section id="author" className="min-h-screen w-full flex flex-col items-center justify-center px-6">
			<div className="flex flex-col items-center justify-center w-full max-w-4xl gap-12">
				<div className="flex flex-col gap-4 text-center">
					<h2 className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
						Le Créateur
					</h2>
					<p className="text-4xl md:text-5xl font-black tracking-tighter italic text-zinc-200">
						Derrière le code.
					</p>
				</div>
				<AuthorCard />
				<p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] mt-10">
					Propulsé par la curiosité & le café
				</p>
			</div>
		</section>
	);
}


/* ----- EXPORT ----- */
export default AuthorSection;
