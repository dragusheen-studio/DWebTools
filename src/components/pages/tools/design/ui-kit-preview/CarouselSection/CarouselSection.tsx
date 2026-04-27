/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useMemo, useState } from "react";
import { IColorToken } from "@/types/tools/design/UIKitPreview";
import Header from "./Header";
import Container from "./Container";
import Dashboard from "@/components/pages/tools/design/ui-kit-preview/Slides/Dashboard";
import Pricing from "@/components/pages/tools/design/ui-kit-preview/Slides/Pricing"
import AuthHub from "@/components/pages/tools/design/ui-kit-preview/Slides/AuthHub"
import TaskBoard from "@/components/pages/tools/design/ui-kit-preview/Slides/TaskBoard";
import LandingHero from "@/components/pages/tools/design/ui-kit-preview/Slides/LandingHero";


/* ----- PROPS ----- */
interface IProps {
	tokens: IColorToken[];
}


/* ----- COMPONENT ----- */
function CarouselSection({ tokens }: IProps) {
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	const [[page, direction], setPage] = useState([0, 0]);
	const totalSlides = 5;

	const paginate = (newDirection: number) => {
		let newPage = (page + newDirection + totalSlides) % totalSlides;
		setPage([newPage, newDirection]);
	};

	const currentColors = useMemo(() => {
		const map: Record<string, string> = {};
		tokens.forEach(t => {
			if (t.role !== "other") map[t.role] = t.hex;
		});
		return map;
	}, [tokens]);

	return (
		<div className="relative">
			<Header page={page} totalSlides={totalSlides} paginate={paginate} mode={mode} setMode={setMode} />
			<Container page={page} direction={direction} mode={mode}>
				<div className="text-center space-y-6">
					{page === 0 && <Dashboard colors={currentColors} mode={mode} />}
					{page === 1 && <Pricing colors={currentColors} mode={mode} />}
					{page === 2 && <AuthHub colors={currentColors} mode={mode} />}
					{page === 3 && <TaskBoard colors={currentColors} mode={mode} />}
					{page === 4 && <LandingHero colors={currentColors} mode={mode} />}
				</div>
			</Container>
		</div>
	);
}


/* ----- EXPORT ----- */
export default CarouselSection;
