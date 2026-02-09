/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

import AuthorSection from "@/components/pages/about/Author/Author";
/* ----- IMPORTS ----- */
import HeroSection from "@/components/pages/about/Hero";
import MissionSection from "@/components/pages/about/Mission";
import StackSection from "@/components/pages/about/Stack";

/* ----- COMPONENT ----- */
function AboutPage() {
	return (
		<div className="flex flex-col w-full gap-20">
			<HeroSection />
			<MissionSection />
			<StackSection />
			<AuthorSection />
		</div>
	);
}

/* ----- EXPORT ----- */
export default AboutPage;
