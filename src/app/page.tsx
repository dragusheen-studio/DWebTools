/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import SearchBar from "@/components/shared/SearchBar";


/* ----- COMPONENT ----- */
function HomePage() {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-4xl font-bold tracking-tight">DWebTools</h1>
			<p className="text-zinc-400 text-lg">
				La boîte à outils centralisée pour ton quotidien de développeur.
			</p>
			<SearchBar />
		</div>
	);
}


/* ----- EXPORT ----- */
export default HomePage;
