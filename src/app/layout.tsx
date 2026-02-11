/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Outfit } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar";
import CommandPalette from "@/components/layout/CommandPalette";


/* ----- FONTS ----- */
const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});


/* ----- COMPONENT ----- */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className="dark" suppressHydrationWarning>
			<body className={`${outfit.variable} font-sans`} suppressHydrationWarning>
				<SidebarProvider defaultOpen={false}>
					<AppSidebar />
					<CommandPalette />
					<main className="w-full min-h-screen">
						{children}
					</main>
				</SidebarProvider>
			</body>
		</html>
	);
}
