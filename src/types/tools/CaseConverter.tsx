/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- INTERFACES ----- */
type CaseType = "upper" | "lower" | "pascal" | "camel" | "snake" | "kebab" | "constant" | "title";

interface ICaseConverterLine {
	input: string;
	output: string;
	caseType: CaseType;
}


/* ----- EXPORTS ----- */
export type {
	CaseType,
	ICaseConverterLine,
};
