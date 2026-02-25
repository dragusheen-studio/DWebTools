/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- INTERFACES ----- */
interface ICaseType {
	name: string;
	transform: (wordList: string[]) => string;
}

interface ICaseConverterLine {
	id: string;
	input: string;
	output: string;
	caseType: ICaseType;
}


/* ----- EXPORTS ----- */
export type {
	ICaseType,
	ICaseConverterLine,
};
