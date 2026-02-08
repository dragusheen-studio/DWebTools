/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import HomePageHero from "@/components/pages/home/Hero/Hero";
import HomePageBento from "@/components/pages/home/Bento/Bento";


/* ----- COMPONENT ----- */
function HomePage() {
	const [searchQuery, setSearchQuery] = useState<string>("");

	return (
		<div className="flex flex-col w-full items-center">
			<HomePageHero searchQuery={searchQuery} onChangeSearchQuery={setSearchQuery} />
			<HomePageBento searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default HomePage;
