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
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from '@vercel/analytics/next';


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
					<TooltipProvider>
						<AppSidebar />
						<div className="flex md:hidden items-center justify-between p-1 border-b backdrop-blur-md fixed top-2 left-2 z-40 rounded-lg bg-zinc-900 border border-zinc-800">
							<SidebarTrigger />
						</div>

						<Toaster />
						<CommandPalette />
						<main className="w-full min-h-screen">
							{children}
						</main>
					</TooltipProvider>
				</SidebarProvider>
				<Analytics />
			</body>
		</html>
	);
}
