/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORT ----- */
import { toast } from "sonner";


/* ----- FUNCTIONS ----- */
function copy(stringToCopy: string, toastMessage: string | null) {
	navigator.clipboard.writeText(stringToCopy);
	if (toastMessage) toast.success(toastMessage);
};


/* ----- EXPORTS ----- */
export {
	copy
};
