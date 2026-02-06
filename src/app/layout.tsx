/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";


/* ----- FONTS ----- */
const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});


/* ----- PROPS ----- */
interface RootLayoutProps {
	children: React.ReactNode;
};


/* ----- COMPONENT ----- */
function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="fr" className="dark">
			<body className={`${outfit.variable} font-sans`}>
				{children}
			</body>
		</html>
	);
}


/* ----- EXPORT ----- */
export default RootLayout;
