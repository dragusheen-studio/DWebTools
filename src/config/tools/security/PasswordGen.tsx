/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { IPasswordOption } from "@/types/tools/security/PasswordGen";


/* ----- DATAS ----- */
const PasswordOptions: IPasswordOption[] = [
	{
		name: "Lettres majuscules",
		charsets: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	},
	{
		name: "Lettres minuscules",
		charsets: "abcdefghijklmnopqrstuvwxyz",
	},
	{
		name: "Nombres",
		charsets: "0123456789",
	},
	{
		name: "Symboles",
		charsets: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
	}
];


/* ----- FUNCTIONS ----- */
function getPasswordOptions() {
	return PasswordOptions;
}


/* ----- EXPORTS ----- */
export {
	getPasswordOptions,
};
