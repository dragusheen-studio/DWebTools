/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- TYPES ----- */
type ContentType = "text" | "wifi" | "vcard";
type DotStyle = 'square' | 'square-sm' | 'pinched-square' | 'rounded' | 'leaf' | 'vertical-line' | 'horizontal-line' | 'circle' | 'diamond' | 'star' | 'heart' | 'hashtag';
type FinderInnerStyle = 'square' | 'pinched-square' | 'rounded-sm' | 'rounded' | 'rounded-lg' | 'circle' | 'inpoint-sm' | 'inpoint' | 'inpoint-lg' | 'outpoint-sm' | 'outpoint' | 'outpoint-lg' | 'leaf-sm' | 'leaf' | 'leaf-lg' | 'diamond' | 'star' | 'heart' | 'hashtag';
type FinderOuterStyle = 'square' | 'pinched-square' | 'rounded-sm' | 'rounded' | 'rounded-lg' | 'circle' | 'inpoint-sm' | 'inpoint' | 'inpoint-lg' | 'outpoint-sm' | 'outpoint' | 'outpoint-lg' | 'leaf-sm' | 'leaf' | 'leaf-lg';

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

interface IImageSettings {
	src: string;
	size: number;
	excavate: boolean;
}

interface IQRCodeGeneratorConfig {
	content: IContent;
	fgColor: string | IGradient | "transparent";
	bgColor: string | IGradient | "transparent";
	level: "L" | "M" | "Q" | "H";
	margin: number;
	dotStyle: DotStyle;
	finderStyle: {
		inner: FinderInnerStyle;
		outer: FinderOuterStyle;
	},
	logo: IImageSettings;
}

/* ----- EXPORTS ----- */
export type {
	ContentType,
	DotStyle,
	FinderInnerStyle,
	FinderOuterStyle,
	IContentWifi,
	IContentVCard,
	IGradient,
	IImageSettings,
	IQRCodeGeneratorConfig
};
