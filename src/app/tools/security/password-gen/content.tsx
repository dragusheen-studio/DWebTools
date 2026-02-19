/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { useState, useCallback, useEffect } from "react";
import { getPasswordOptions } from "@/config/tools/security/PasswordGen";
import { IBannedPattern } from "@/types/tools/security/PasswordGen";
import PasswordDisplay from "@/components/pages/tools/security/password-gen/PasswordDisplay";
import PasswordOptionsWidget from "@/components/pages/tools/security/password-gen/PasswordOptions/PasswordOptions";
import BannedPatterns from "@/components/pages/tools/security/password-gen/BannedPattern/BannedPatterns";
import PassphraseSection from "@/components/pages/tools/security/password-gen/PassphraseSection/PassphraseSection";


/* ----- COMPONENT ----- */
function PasswordGenContent() {
	const allOptions = getPasswordOptions();
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(16);
	const [selectedOpts, setSelectedOpts] = useState(allOptions.slice(0, 3));
	const [compromised, setCompromised] = useState(false);
	const [patterns, setPatterns] = useState<IBannedPattern[]>([
		{ id: "1", label: "Pseudo", value: "", type: "text", isDefault: true },
		{ id: "2", label: "Date de naissance", value: "", type: "date", isDefault: true },
	]);

	const generate = useCallback(() => {
		const charset = selectedOpts.map(o => o.charsets).join("");
		if (!charset) return setPassword("");
		const array = new Uint32Array(length);
		window.crypto.getRandomValues(array);
		let res = "";
		for (let i = 0; i < length; i++) res += charset[array[i] % charset.length];
		setPassword(res);
	}, [length, selectedOpts]);

	useEffect(() => { generate(); }, [generate]);

	return (
		<div className="flex flex-col gap-8 max-w-6xl mx-auto pb-20">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
				<div className="lg:col-span-2 flex flex-col gap-6">
					<PasswordDisplay
						password={password}
						onRegenerate={generate}
						compromised={compromised}
						selectedOptsCount={selectedOpts.length}
					/>
					<PasswordOptionsWidget
						length={length}
						setLength={setLength}
						selected={selectedOpts}
						setSelected={setSelectedOpts}
					/>
				</div>
				<BannedPatterns
					password={password}
					patterns={patterns}
					setPatterns={setPatterns}
					compromised={compromised}
					setCompromised={setCompromised}
				/>
			</div>
			<PassphraseSection />
		</div>
	);
}


/* ----- EXPORT ----- */
export default PasswordGenContent;
