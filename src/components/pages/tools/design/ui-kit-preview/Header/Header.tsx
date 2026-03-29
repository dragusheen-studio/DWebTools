/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { IColorToken } from "@/types/tools/design/UIKitPreview";
import ImportSection from "./ImportSection";
import TokensList from "./TokensList";


/* ----- PROPS ----- */
interface IProps {
	tokens: IColorToken[];
	setTokens: React.Dispatch<React.SetStateAction<IColorToken[]>>;
}


/* ----- COMPONENT ----- */
function Header({ tokens, setTokens }: IProps) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<ImportSection setTokens={setTokens} />
			<TokensList tokens={tokens} setTokens={setTokens} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default Header;
