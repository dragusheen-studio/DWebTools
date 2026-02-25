/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState, useEffect } from "react";
import { ShieldAlert, ShieldCheck, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { checkPwned } from "@/services/tools/security/password-check/passwordLeak";


/* ----- PROPS ----- */
interface LeakCheckProps {
	password: string;
}


/* ----- COMPONENT ----- */
function LeakCheck({ password }: LeakCheckProps) {
	const [status, setStatus] = useState<"idle" | "loading" | "pwned" | "safe">("idle");
	const [count, setCount] = useState(0);

	useEffect(() => {
		setStatus("idle");
		setCount(0);
	}, [password]);

	const handleCheck = async () => {
		if (!password) return;
		setStatus("loading");
		const result = await checkPwned(password);
		setCount(result);
		setStatus(result > 0 ? "pwned" : "safe");
	};

	return (
		<div className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 flex flex-col gap-6 mt-6 transition-all duration-500">
			<div className="flex flex-col gap-1 text-left">
				<h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Vérification de fuite</h3>
				<p
					className="text-[11px] text-zinc-600 leading-relaxed font-medium"
				>
					Compare anonymement votre mot de passe aux bases de données de piratages connus grâce à l'API de <a
						className="hover:text-zinc-400 transition-colors duration-200"
						href="https://haveibeenpwned.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						HaveIBeenPwned
					</a>.
				</p>
			</div>

			{status === "idle" ? (
				<Button
					onClick={handleCheck}
					disabled={!password}
					className="w-full h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold uppercase text-[10px] tracking-widest gap-2 transition-all active:scale-95"
				>
					<Search size={16} />
					Lancer l'audit de fuite
				</Button>
			) : status === "loading" ? (
				<div className="flex items-center justify-center gap-3 h-12 text-blue-400">
					<Loader2 size={18} className="animate-spin" />
					<span className="text-[10px] font-black uppercase tracking-widest">Requête anonymisée...</span>
				</div>
			) : status === "pwned" ? (
				<div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/20 flex flex-col gap-2 animate-in zoom-in-95">
					<div className="flex items-center gap-2 text-red-500">
						<ShieldAlert size={18} />
						<span className="text-[10px] font-black uppercase tracking-widest">Mot de passe compromis !</span>
					</div>
					<p className="text-[11px] text-zinc-400 text-left leading-relaxed">
						Ce mot de passe a été exposé <span className="text-red-400 font-black">{count.toLocaleString()}</span> fois dans des fuites publiques. Ne l'utilisez jamais.
					</p>
				</div>
			) : (
				<div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3 animate-in zoom-in-95">
					<ShieldCheck size={18} className="text-emerald-500" />
					<span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Aucun leak détecté en ligne</span>
				</div>
			)}
		</div>
	);
}


/* ----- EXPORT ----- */
export default LeakCheck;
