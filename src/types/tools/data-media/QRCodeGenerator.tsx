/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- TYPES ----- */
type ContentType = "text" | "wifi" | "vcard";


/* ----- INTERFACES ----- */
interface IContentWifi {
	ssid: string;
	pass: string;
	enc: string;
}

interface IContentVCard {
	name: string;
	tel: string;
	email: string;
}

interface IContent {
	mode: ContentType;
	text: string;
	wifi: IContentWifi;
	vcard: IContentVCard;
}



interface IQRCodeGeneratorConfig {
	content: IContent;
	fgColor: string;
	bgColor: string;
	level: "L" | "M" | "Q" | "H";
	margin: number;
}


/* ----- EXPORTS ----- */
export type {
	ContentType,
	IContentWifi,
	IContentVCard,
	IQRCodeGeneratorConfig
};
