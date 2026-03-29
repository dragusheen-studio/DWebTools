/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { FaGithub, FaChrome } from "react-icons/fa";


/* ----- PROPS ----- */
interface Props {
	colors: Record<string, string>;
	mode: "light" | "dark";
}


/* ----- COMPONENT ----- */
function AuthHub({ colors, mode }: Props) {
	const [isFocused, setIsFocused] = useState<string | null>(null);

	const primary = colors.primary || "#3b82f6";
	const text = (mode === "light") ? colors.textLight || "#18181b" : colors.textDark || "#fafafa";
	const acc1 = colors.accent_1 || primary;

	const borderColor = mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
	const inputBg = mode === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)";

	return (
		<div
			className="w-full max-w-md p-10 rounded-[3rem] border shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-500"
			style={{ backgroundColor: mode === "light" ? "#fff" : "rgba(255,255,255,0.02)", borderColor: borderColor }}
		>
			<div className="text-center space-y-2">
				<div
					className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center mb-4 rotate-3"
					style={{ backgroundColor: primary, boxShadow: `0 10px 20px -5px ${primary}40` }}
				>
					<Lock size={24} style={{ color: mode === "light" ? colors.bgLight : colors.bgDark }} />
				</div>
				<h3 className="text-3xl font-black tracking-tighter italic" style={{ color: text }}>Ravi de vous revoir</h3>
				<p className="text-xs opacity-50 font-bold uppercase tracking-widest" style={{ color: text }}>Connectez-vous à votre espace</p>
			</div>

			<div className="grid grid-cols-2 gap-3">
				{[{ name: "Google", icon: FaChrome }, { name: "Github", icon: FaGithub }].map((social) => (
					<button
						key={social.name}
						className="flex items-center justify-center gap-2 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all hover:bg-zinc-500/5 active:scale-95"
						style={{ borderColor: borderColor, color: text }}
					>
						<social.icon size={14} /> {social.name}
					</button>
				))}
			</div>

			<div className="relative flex items-center py-2">
				<div className="grow border-t" style={{ borderColor: borderColor }}></div>
				<span className="shrink mx-4 text-[9px] font-black uppercase opacity-30" style={{ color: text }}>Ou par email</span>
				<div className="grow border-t" style={{ borderColor: borderColor }}></div>
			</div>

			<div className="space-y-4">
				{[
					{ id: "email", label: "Adresse Email", icon: Mail, type: "email", placeholder: "nom@exemple.com" },
					{ id: "pass", label: "Mot de passe", icon: Lock, type: "password", placeholder: "••••••••" },
				].map((field) => (
					<div key={field.id} className="space-y-1.5 text-left">
						<label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1" style={{ color: text }}>
							{field.label}
						</label>
						<div className="relative group">
							<field.icon
								size={16}
								className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors"
								style={{ color: isFocused === field.id ? primary : `${text}40` }}
							/>
							<input
								type={field.type}
								placeholder={field.placeholder}
								onFocus={() => setIsFocused(field.id)}
								onBlur={() => setIsFocused(null)}
								className="w-full h-14 pl-12 pr-4 rounded-2xl border bg-transparent outline-none text-sm font-medium transition-all"
								style={{
									borderColor: isFocused === field.id ? primary : borderColor,
									backgroundColor: isFocused === field.id ? `${primary}05` : inputBg,
									color: text,
									boxShadow: isFocused === field.id ? `0 0 0 4px ${primary}10` : 'none'
								}}
							/>
						</div>
					</div>
				))}
			</div>

			<div className="space-y-4 pt-2">
				<button
					className="w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-xl"
					style={{
						backgroundColor: primary,
						color: mode === "light" ? colors.bgLight : colors.bgDark,
						boxShadow: `0 15px 30px -10px ${primary}60`
					}}
				>
					Se connecter <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
				</button>

				<div className="flex justify-between px-1">
					<button className="text-[10px] font-bold opacity-50 hover:opacity-100 transition-opacity" style={{ color: text }}>
						Créer un compte
					</button>
					<button className="text-[10px] font-bold" style={{ color: acc1 }}>
						Mot de passe oublié ?
					</button>
				</div>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default AuthHub;
