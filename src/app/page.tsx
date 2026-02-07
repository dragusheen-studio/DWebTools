/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import HomePageHero from "./hero";

/* ----- COMPONENT ----- */
function HomePage() {
	return (
		<div className="flex flex-col w-full items-center">
			<HomePageHero />

			{/* --- SECTION BENTO --- */}
			<section className="w-full max-w-6xl px-4 pb-20" id="bento-section">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="h-40 rounded-4xl bg-zinc-900 border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 italic">
						Bento Grid en cours...
					</div>
				</div>
			</section>
		</div>
	);
}

/* ----- EXPORT ----- */
export default HomePage;
