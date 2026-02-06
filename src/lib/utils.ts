/*
  Authors:
  >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

  („• ֊ •„)❤  <  Have a good day !
  --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


/* ----- FUNCTION ----- */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/* ----- EXPORT ----- */
export { cn };
