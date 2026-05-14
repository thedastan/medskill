"use client";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { reportPhoneConversion, trackEvent } from "@/lib/gtag";
import LeadForm from "@/components/ui/form/LeadForm";
import {
	PHONE_PRIMARY,
	PHONE_SECONDARY,
	PHONE_TERTIARY,
	WHATSAPP_URL,
	TELEGRAM_LINK,
	INSTAGRAM_LINK,
	ADDRESS_LINE,
	ADDRESS_MAP_URL,
	CITY,
	TEL_HREF,
	formatPhone,
} from "@/config/contacts";

const data = [
	{
		id: "p1",
		icon: <BsFillTelephoneFill />,
		text: formatPhone(PHONE_SECONDARY),
		follow: TEL_HREF(PHONE_SECONDARY),
	},
	{
		id: "p2",
		icon: <BsFillTelephoneFill />,
		text: formatPhone(PHONE_PRIMARY),
		follow: TEL_HREF(PHONE_PRIMARY),
	},
	{
		id: "p3",
		icon: <BsFillTelephoneFill />,
		text: formatPhone(PHONE_TERTIARY),
		follow: TEL_HREF(PHONE_TERTIARY),
	},
	{
		id: "loc",
		icon: <FaLocationDot />,
		text: `Кыргызстан, г. ${CITY}, ${ADDRESS_LINE}`,
		follow: ADDRESS_MAP_URL,
	},
	{
		id: "wa",
		icon: <RiWhatsappFill />,
		text: "Наш WhatsApp",
		follow: WHATSAPP_URL,
	},
	{
		id: "tg",
		icon: <FaTelegramPlane />,
		text: "Наш Telegram",
		follow: TELEGRAM_LINK,
	},
	{
		id: "ig",
		icon: <AiFillInstagram />,
		text: "Наш Instagram",
		follow: INSTAGRAM_LINK,
	},
];

type ContactChannel =
	| "phone"
	| "location"
	| "whatsapp"
	| "telegram"
	| "instagram";

const channelFromHref = (follow: string): ContactChannel => {
	if (follow.startsWith("tel:")) return "phone";
	if (follow.includes("wa.me")) return "whatsapp";
	if (follow.includes("t.me")) return "telegram";
	if (follow.includes("instagram")) return "instagram";
	return "location";
};

const Contact = () => {
	return (
		<section className="bg-[#f3feff] md:py-[60px] py-[30px]">
			<div className="container">
				<div className="w-full text-center md:text-left mb-8 md:mb-12">
					<h2 className="text-[#00a1b4] font-[700] text-[28px] md:text-[40px] leading-tight">
						Наши контакты
					</h2>
					<p className="text-[#00a1b4]/70 text-[15px] md:text-[17px] mt-2">
						Звоните, пишите или оставьте заявку — выйдем на связь сразу
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
					{/* Контакты слева */}
					<div className="flex flex-col gap-[18px] bg-[#e9fdff] p-[28px] md:p-[40px] rounded-[28px] md:rounded-[36px] shadow-[0_4px_19px_-3px_rgba(0,0,0,0.1)]">
						{data.map((el) => {
							const channel = channelFromHref(el.follow);
							const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
								if (channel === "phone") {
									e.preventDefault();
									reportPhoneConversion(el.follow);
									return;
								}
								trackEvent("contact_click", {
									channel,
									location: "contact_block",
								});
							};
							return (
								<Link
									href={el.follow}
									key={`${el.id}-${el.follow}`}
									target={"_blank"}
									onClick={onClick}
									className="flex items-center gap-4 group">
									<span className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#00a1b4] text-[20px] shadow-sm group-hover:bg-[#16AEC0] group-hover:text-white transition-colors shrink-0">
										{el.icon}
									</span>
									<p className="md:text-[17px] text-[15px] text-[#00a1b4] font-[500] group-hover:underline">
										{el.text}
									</p>
								</Link>
							);
						})}

						<a
							href={TEL_HREF(PHONE_PRIMARY)}
							onClick={(e) => {
								e.preventDefault();
								reportPhoneConversion(TEL_HREF(PHONE_PRIMARY));
							}}
							className="bg-[#16AEC0] hover:bg-[#0a9bb4] flex justify-center items-center w-full h-[56px] text-[17px] text-white font-[600] rounded-[12px] shadow-[0_4px_14px_-4px_rgba(22,174,192,0.5)] active:scale-[0.98] transition-all mt-2">
							Позвонить сейчас
						</a>
					</div>

					{/* Форма справа */}
					<div className="md:sticky md:top-4">
						<LeadForm source="contacts" className="!max-w-none w-full" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
