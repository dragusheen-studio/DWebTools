/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


/* ----- PROPS ----- */
interface PasswordInputProps {
	password: string;
	setPassword: (password: string) => void;
}


/* ----- COMPONENT ----- */
function PasswordInput({ password, setPassword }: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex flex-col gap-2">
			<span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-2">Analyseur</span>
			<div className="relative group">
				<Input
					type={showPassword ? "text" : "password"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Tapez un mot de passe pour le tester..."
					className="h-20 bg-zinc-900/50 border-zinc-800 rounded-2xl text-2xl font-mono text-center text-blue-400 tracking-wider pr-14 focus-visible:ring-0 transition-all"
				/>
				<div className="absolute right-4 top-1/2 -translate-y-1/2">
					<Button
						size="icon"
						variant="ghost"
						onClick={() => setShowPassword(!showPassword)}
						className="text-zinc-500 hover:text-zinc-200"
					>
						{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
					</Button>
				</div>
			</div>
		</div>
	);
}

/* ----- EXPORT ----- */
export default PasswordInput;
