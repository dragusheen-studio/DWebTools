/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { GradientSettings } from "@lglab/react-qr-code";


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

interface IGradient {
	type: "linear" | "radial";
	from: string;
	to: string;
	rotation: number;
}

interface IQRCodeGeneratorConfig {
	content: IContent;
	fgColor: string | IGradient | "transparent";
	bgColor: string | IGradient | "transparent";
	level: "L" | "M" | "Q" | "H";
	margin: number;
}


/* ----- EXPORTS ----- */
export type {
	ContentType,
	IContentWifi,
	IContentVCard,
	IGradient,
	IQRCodeGeneratorConfig
};
