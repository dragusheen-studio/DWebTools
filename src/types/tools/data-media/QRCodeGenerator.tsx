/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- TYPES ----- */
type ContentType = "text" | "wifi" | "vcard";
type DotStyle = 'square' | 'square-sm' | 'pinched-square' | 'rounded' | 'leaf' | 'vertical-line' | 'horizontal-line' | 'circle' | 'diamond' | 'star' | 'heart' | 'hashtag'

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

interface IDotModuleSettings {
	color: string;
	style: DotStyle;
}

interface IQRCodeGeneratorConfig {
	content: IContent;
	fgColor: string | IGradient | "transparent";
	bgColor: string | IGradient | "transparent";
	level: "L" | "M" | "Q" | "H";
	margin: number;
	dotStyle: DotStyle;
}

/* ----- EXPORTS ----- */
export type {
	ContentType,
	DotStyle,
	IContentWifi,
	IContentVCard,
	IGradient,
	IDotModuleSettings,
	IQRCodeGeneratorConfig
};
