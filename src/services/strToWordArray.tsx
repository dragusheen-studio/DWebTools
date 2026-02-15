/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- FUNCTIONS ----- */
function strToWordArray(str: string): string[] {
	return str
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(w => w.length > 0);
};


/* ----- EXPORTS ----- */
export {
	strToWordArray
};
