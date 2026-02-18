/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect, useCallback } from "react";
import { Copy, RefreshCw, ShieldCheck, ShieldAlert, Shield } from "lucide-react";
import { toast } from "sonner";
import { getPasswordOptions } from "@/config/tools/security/PasswordGen";
import { IPasswordOption } from "@/types/tools/security/PasswordGen";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


/* ----- COMPONENT ----- */
function PasswordGenDefault() {
	const passwordsOptions = getPasswordOptions();
	const [length, setLength] = useState(16);
	const [selectedOptions, setSelectedOptions] = useState<IPasswordOption[]>([passwordsOptions[0], passwordsOptions[1], passwordsOptions[2]]);
	const [generatedPassword, setGeneratedPassword] = useState("");

	const generate = useCallback(() => {
		const charset = selectedOptions.map(opt => opt.charsets).join("");
		if (!charset || length === 0) {
			setGeneratedPassword("");
			return;
		}

		const array = new Uint32Array(length);
		window.crypto.getRandomValues(array);

		let result = "";
		for (let i = 0; i < length; i++) {
			result += charset[array[i] % charset.length];
		}
		setGeneratedPassword(result);
	}, [length, selectedOptions]);

	useEffect(() => {
		generate();
	}, [generate]);

	const getStrength = () => {
		if (generatedPassword.length === 0) return { score: 0, label: "Vide", color: "bg-zinc-800" };

		let score = 0;
		if (generatedPassword.length > 8) score += 25;
		if (generatedPassword.length > 15) score += 25;
		if (selectedOptions.length >= 3) score += 25;
		if (selectedOptions.length === 4) score += 25;

		if (score <= 25) return { score, label: "Faible", color: "bg-red-500" };
		if (score <= 50) return { score, label: "Moyen", color: "bg-orange-500" };
		if (score <= 75) return { score, label: "Fort", color: "bg-blue-500" };
		return { score, label: "Très sécurisé", color: "bg-emerald-500" };
	};

	const strength = getStrength();

	const toggleOption = (option: IPasswordOption) => {
		setSelectedOptions(prev =>
			prev.some(o => o.name === option.name)
				? prev.filter(o => o.name !== option.name)
				: [...prev, option]
		);
	};

	const handleCopy = () => {
		if (!generatedPassword) return;
		navigator.clipboard.writeText(generatedPassword);
		toast.success("Mot de passe copié !");
	};

	return (
		<div className="lg:col-span-2 flex flex-col gap-6">
			<div className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800/80 flex flex-col gap-6 shadow-2xl">
				<div className="relative group">
					<Input
						readOnly
						value={generatedPassword}
						className="h-20 bg-zinc-900/50 border-zinc-800 rounded-2xl text-2xl font-mono text-center text-blue-400 tracking-wider pr-14 focus-visible:ring-0"
					/>
					<div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
						<Button size="icon" variant="ghost" onClick={generate} className="text-zinc-500 hover:text-zinc-200">
							<RefreshCw size={20} />
						</Button>
					</div>
				</div>

				<div className="space-y-3">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2 text-zinc-400">
							{strength.score > 75 ? <ShieldCheck size={16} className="text-emerald-500" /> : <Shield size={16} />}
							<span className="text-xs font-bold uppercase tracking-widest">Force : {strength.label}</span>
						</div>
					</div>
					<Progress value={strength.score} className="h-1.5 bg-zinc-800" indicatorClassName={strength.color} />
				</div>

				<Button onClick={handleCopy} className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest gap-3 shadow-lg shadow-blue-500/20">
					<Copy size={18} /> Copier le mot de passe
				</Button>
			</div>

			<div className="p-8 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-800/50 flex flex-col gap-8">
				<div className="space-y-6">
					<div className="flex justify-between">
						<span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Longueur : {length}</span>
					</div>
					<Slider
						value={[length]}
						onValueChange={(val) => setLength(val[0])}
						max={64}
						min={4}
						step={1}
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{passwordsOptions.map((opt) => (
						<Tooltip key={opt.name}>
							<TooltipTrigger asChild>
								<div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950/30 border border-zinc-800/50">
									<Label htmlFor={opt.name} className="text-sm font-medium text-zinc-300 cursor-pointer">{opt.name}</Label>
									<Switch
										id={opt.name}
										checked={selectedOptions.some(o => o.name === opt.name)}
										onCheckedChange={() => toggleOption(opt)}
									/>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>{opt.charsets}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default PasswordGenDefault;
