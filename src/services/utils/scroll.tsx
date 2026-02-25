/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- FUNCTIONS ----- */
function scrollTo(y: number) {
	window.scrollTo({ top: y, behavior: "smooth" });
}

function scrollToTop() {
	scrollTo(0);
}

function scrollToElement(id: string) {
	const element = document.getElementById(id);
	if (element) {
		const y = element.getBoundingClientRect().top + window.scrollY;
		scrollTo(y);
	}
}


/* ----- EXPORTS ----- */
export {
	scrollTo,
	scrollToTop,
	scrollToElement
};
