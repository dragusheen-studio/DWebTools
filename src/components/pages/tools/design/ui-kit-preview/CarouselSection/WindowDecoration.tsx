/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- COMPONENT ----- */
function WindowDecoration() {
	return (
		<div className="absolute top-10 left-14 flex gap-2.5 z-20">
			<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/10" />
			<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/10" />
			<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/10" />
		</div>
	);
}


/* ----- EXPORT ----- */
export default WindowDecoration;
