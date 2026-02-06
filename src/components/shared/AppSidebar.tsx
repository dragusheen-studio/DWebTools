/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	useSidebar
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { GetMainPages, GetCategoriesPages } from "@/config/PageData";


/* ----- COMPONENT ----- */
function AppSidebar() {
	const { setOpen, isMobile } = useSidebar();

	return (
		<Sidebar
			variant="floating"
			collapsible="icon"
			onMouseEnter={() => !isMobile && setOpen(true)}
			onMouseLeave={() => !isMobile && setOpen(false)}
			className="transition-all duration-500 ease-in-out"
		>
			<SidebarHeader className="p-2 group-data-[collapsible=icon]:p-0 transition-all duration-300">
				<Link href="/" className="flex items-center gap-3 p-2 h-12 overflow-hidden">
					<div className="min-w-8 w-8 h-8 flex items-center justify-center">
						<Image
							src="/svg/icon.svg"
							alt="DWebTools Logo"
							width={32}
							height={32}
							className="object-contain transition-all duration-300 group-data-[collapsible=icon]:scale-75"
						/>
					</div>
					<span className="font-bold text-xl tracking-tight whitespace-nowrap opacity-100 transition-opacity group-data-[collapsible=icon]:opacity-0 duration-300">
						DWebTools
					</span>
				</Link>
			</SidebarHeader>

			<SidebarContent className="overflow-hidden">
				<SidebarGroup>
					<SidebarMenu>
						{GetMainPages().map((item) => (
							<SidebarMenuItem key={item.name}>
								<SidebarMenuButton asChild tooltip={item.name} className="h-11 rounded-2xl">
									<Link href={item.path}>
										<item.icon className="w-5 h-5" />
										<span className="font-medium">{item.name}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel className="group-data-[collapsible=icon]:opacity-0 transition-opacity uppercase text-[10px] tracking-widest font-extrabold text-zinc-500 mb-2">
						Outils
					</SidebarGroupLabel>
					<SidebarMenu>
						{GetCategoriesPages().map((category) => (
							<Collapsible key={category.name} asChild className="group/collapsible">
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton tooltip={category.name} className="h-11 rounded-2xl">
											<category.icon className="w-5 h-5" />
											<span className="font-medium">{category.name}</span>
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{category.tools.map((tool) => (
												<SidebarMenuSubItem key={tool.name}>
													<SidebarMenuSubButton asChild className="rounded-xl h-9">
														<Link href={tool.path}>
															<span>{tool.name}</span>
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}


/* ----- EXPORT ----- */
export default AppSidebar;
