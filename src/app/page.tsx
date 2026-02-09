/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useEffect, useRef, useState } from "react";
import HomePageHero from "@/components/pages/home/Hero/Hero";
import HomePageBento from "@/components/pages/home/Bento/Bento";
import GhostSearchBar from "@/components/pages/home/GhostSearchBar";


/* ----- COMPONENT ----- */
function HomePage() {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [isStickyVisible, setIsStickyVisible] = useState(false);
	const heroSearchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsStickyVisible(!entry.isIntersecting);
			},
			{ threshold: 0 }
		);

		if (heroSearchRef.current) observer.observe(heroSearchRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="flex flex-col w-full items-center">
			<GhostSearchBar
				visible={isStickyVisible}
				onChange={setSearchQuery}
				searchQuery={searchQuery}
			/>

			<div ref={heroSearchRef} className="w-full">
				<HomePageHero searchQuery={searchQuery} onChange={setSearchQuery} />
			</div>

			<HomePageBento searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
		</div>
	);
}


/* ----- EXPORT ----- */
export default HomePage;
