/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- INTERFACES ----- */
interface IPasswordOption {
	name: string;
	charsets: string;
}

interface IPasswordGen {
	length: number;
	options: IPasswordOption[];
	charsets: string;
	password: string;
}


/* ----- EXPORTS ----- */
export type {
	IPasswordGen,
	IPasswordOption,
};
