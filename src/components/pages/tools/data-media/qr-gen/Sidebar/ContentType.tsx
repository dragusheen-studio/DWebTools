/*
	Authors:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

"use client";

/* ----- IMPORTS ----- */
import { Type, Wifi, UserCircle, LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContentType, IQRCodeGeneratorConfig } from "@/types/tools/data-media/QRCodeGenerator";


/* ----- PROPS ----- */
interface Props {
	config: IQRCodeGeneratorConfig;
	setConfig: React.Dispatch<React.SetStateAction<IQRCodeGeneratorConfig>>;
}


/* ----- COMPONENT ----- */
function ContentTypeSelecter({ config, setConfig }: Props) {
	interface InputConfig {
		label: string;
		type: string;
		placeholder: string;
		value: string;
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	}

	interface TabConfig {
		icon: LucideIcon,
		tabLabel: string;
		content: InputConfig[];
	}

	const tabs: Map<ContentType, TabConfig> = new Map([
		["text",
			{
				icon: Type,
				tabLabel: "Texte / URL",
				content: [
					{
						label: "Texte ou URL",
						type: "text",
						placeholder: "https://example.com",
						value: config.content.text,
						onChange: (e) => setConfig({ ...config, content: { ...config.content, text: e.target.value } }),
					},
				],
			},
		],
		["wifi",
			{
				icon: Wifi,
				tabLabel: "WiFi",
				content: [
					{
						label: "Nom du réseau",
						type: "text",
						placeholder: "SSID",
						value: config.content.wifi.ssid,
						onChange: (e) => setConfig({ ...config, content: { ...config.content, wifi: { ...config.content.wifi, ssid: e.target.value } } }),
					},
					{
						label: "Mot de passe",
						type: "password",
						placeholder: "Password",
						value: config.content.wifi.pass,
						onChange: (e) => setConfig({ ...config, content: { ...config.content, wifi: { ...config.content.wifi, pass: e.target.value } } }),
					},
				]
			},
		],
		["vcard",
			{
				icon: UserCircle,
				tabLabel: "Contact (VCard)",
				content: [
					{
						label: "Nom",
						type: "text",
						placeholder: "Dragusheen",
						value: config.content.vcard.name,
						onChange: (e) => setConfig({ ...config, content: { ...config.content, vcard: { ...config.content.vcard, name: e.target.value } } }),
					},
					{
						label: "Téléphone",
						type: "tel",
						placeholder: "+123 456 789",
						value: config.content.vcard.tel,
						onChange: (e) => setConfig({ ...config, content: { ...config.content, vcard: { ...config.content.vcard, tel: e.target.value } } }),
					},
					{
						label: "Email",
						type: "email",
						placeholder: "dragusheen@email.com",
						value: config.content.vcard.email,
						onChange: (e) => setConfig({ ...config, content: { ...config.content, vcard: { ...config.content.vcard, email: e.target.value } } }),
					},
				]
			}
		],
	]);

	return (
		<AccordionItem value="ContentType">
			<AccordionTrigger className="flex items-center justify-between px-1">
				<Label className="text-[10px] font-black uppercase text-zinc-600">Type de contenu</Label>
				<span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
					{tabs.get(config.content.mode)?.tabLabel}
				</span>
			</AccordionTrigger>
			<AccordionContent className="space-y-4">
				<Tabs value={config.content.mode} onValueChange={(v: any) => setConfig({ ...config, content: { ...config.content, mode: v.value } })} className="w-full">
					<TabsList className="grid grid-cols-3 bg-zinc-900 border border-zinc-800 h-12 p-1 rounded-2xl">
						<TabsTrigger value="text" className="rounded-xl data-[state=active]:bg-zinc-800 data-[state=active]:text-blue-400">
							<Type size={16} />
						</TabsTrigger>
						<TabsTrigger value="wifi" className="rounded-xl data-[state=active]:bg-zinc-900 data-[state=active]:text-blue-400">
							<Wifi size={16} />
						</TabsTrigger>
						<TabsTrigger value="vcard" className="rounded-xl data-[state=active]:bg-zinc-800 data-[state=active]:text-blue-400">
							<UserCircle size={16} />
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
					{
						tabs.get(config.content.mode)?.content.map((input) => (
							<div className="space-y-2" key={input.label}>
								<Label className="text-[10px] font-black uppercase text-zinc-600 ml-1">{input.label}</Label>
								<Input
									type={input.type}
									placeholder={input.placeholder}
									value={input.value}
									onChange={input.onChange}
									className="bg-zinc-900 border-zinc-800 rounded-xl"
								/>
							</div>
						))
					}
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}


/* ----- EXPORT ----- */
export default ContentTypeSelecter;
