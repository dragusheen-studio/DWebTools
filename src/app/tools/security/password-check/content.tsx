/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { useState } from "react";
import StrengthSection from "@/components/pages/tools/security/password-check/StrengthSection/StrengthSection";

/* ----- COMPONENT ----- */
function PasswordCheckContent() {
	const [password, setPassword] = useState("");

	return (
		<div className="w-full flex flex-col">
			<StrengthSection password={password} setPassword={setPassword} />
		</div>
	);
}

/* ----- EXPORT ----- */
export default PasswordCheckContent;
