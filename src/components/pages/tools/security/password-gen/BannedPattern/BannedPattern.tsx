/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { Trash2, CalendarIcon, Type, EllipsisVertical, RotateCcw } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IBannedPattern } from "@/types/tools/security/PasswordGen";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


/* ----- PROPS ----- */
interface BannedPatternsProps {
	pattern: IBannedPattern;
	updatePattern: (id: string, value: string) => void;
	toggleType: (id: string) => void;
	deletePattern: (id: string) => void;
}


/* ----- COMPONENT ----- */
function BannedPattern({ pattern, updatePattern, toggleType, deletePattern }: BannedPatternsProps) {
	return (
		<div className="flex gap-2 w-full items-center justify-between">
			{pattern.type === "text" ? (
				<Input
					placeholder={pattern.label}
					value={pattern.value}
					onChange={(e) => updatePattern(pattern.id, e.target.value)}
					className="bg-zinc-950/40 border-zinc-800 rounded-xl h-11 flex-1 min-w-0"
				/>
			) : (
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline" className="flex-1 justify-start text-left font-normal bg-zinc-950/40 border-zinc-800 rounded-xl h-11 min-w-0 overflow-hidden">
							<CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
							<span className="truncate">
								{pattern.value ? format(new Date(pattern.value), "P", { locale: fr }) : pattern.label == "Pattern" ? "Choisir une date" : pattern.label}
							</span>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0 bg-zinc-900 border-zinc-800" align="start">
						<Calendar
							mode="single"
							captionLayout="dropdown"
							selected={pattern.value ? new Date(pattern.value) : undefined}
							onSelect={(date) => updatePattern(pattern.id, date ? date.toISOString() : "")}
						/>
					</PopoverContent>
				</Popover>
			)}

			{!pattern.isDefault && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="text-zinc-500">
							<EllipsisVertical size={16} />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={() => toggleType(pattern.id)}>
								{pattern.type === "text" ?
									<>
										<CalendarIcon size={16} />
										Changer pour une date
									</>
									: <>
										<Type size={16} />
										Changer pour un texte
									</>
								}
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => updatePattern(pattern.id, "")}>
								<RotateCcw size={16} />
								Reset
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem variant="destructive" onClick={() => deletePattern(pattern.id)}>
								<Trash2 size={16} />
								Delete
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	);
}


/* ----- EXPORT ----- */
export default BannedPattern;
