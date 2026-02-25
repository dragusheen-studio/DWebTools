/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- FUNCTIONS ----- */
async function hashSHA1(str: string): Promise<string> {
	const buffer = new TextEncoder().encode(str);
	const hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}

async function checkPwned(password: string): Promise<number> {
	if (!password) return 0;

	const hash = await hashSHA1(password);
	const prefix = hash.substring(0, 5);
	const suffix = hash.substring(5);

	try {
		const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
		if (!response.ok) throw new Error("HIBP API Response Error");

		const text = await response.text();
		const lines = text.split("\n");

		const match = lines.find(line => line.startsWith(suffix));
		return match ? parseInt(match.split(":")[1]) : 0;
	} catch (error) {
		console.error("HIBP API Error:", error);
		return 0;
	}
}


/* ----- EXPORTS ----- */
export {
	checkPwned
};
