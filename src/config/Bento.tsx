/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }
*/


/* ----- IMPORTS ----- */
import { CategoryColor } from "@/types/Category";
import { ToolSize } from "@/types/Tool";


/* ----- DATAS ----- */
const sizeClasses: Record<ToolSize, string> = {
	small: "col-span-1 row-span-1",
	medium: "md:col-span-2 row-span-1",
	large: "md:col-span-2 row-span-2",
};

const glowClasses: Record<CategoryColor, string> = {
	blue: "hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] hover:border-blue-500/50",
	green: "hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)] hover:border-green-500/50",
	purple: "hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)] hover:border-purple-500/50",
	orange: "hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)] hover:border-orange-500/50",
	default: "hover:shadow-zinc-500/30",
};

const dotColor: Record<CategoryColor, string> = {
	blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]",
	green: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]",
	purple: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
	orange: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]",
	default: "bg-zinc-500",
};

const bgGradient: Record<CategoryColor, string> = {
	blue: "group-hover:bg-blue-500/5",
	green: "group-hover:bg-green-500/5",
	purple: "group-hover:bg-purple-500/5",
	orange: "group-hover:bg-orange-500/5",
	default: "",
};


/* ----- FUNCTIONS ----- */
function GetSizeClass(size: ToolSize) {
	return sizeClasses[size];
}

function GetGlowClass(color: CategoryColor) {
	return glowClasses[color] || glowClasses.default;
}

function GetDotColor(color: CategoryColor) {
	return dotColor[color] || dotColor.default;
}

function GetBgGradient(color: CategoryColor) {
	return bgGradient[color] || bgGradient.default;
}


/* ----- EXPORTS ----- */
export {
	GetSizeClass,
	GetGlowClass,
	GetDotColor,
	GetBgGradient,
};
