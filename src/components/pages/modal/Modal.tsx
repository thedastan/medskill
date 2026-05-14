"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { reportPhoneConversion, trackEvent } from "@/lib/gtag";
import {
	PHONE_SECONDARY,
	TEL_HREF,
	WHATSAPP_URL,
} from "@/config/contacts";

const Modal = () => {
	return (
		<div className="hidden md:flex flex-col gap-3 fixed right-8 bottom-8 z-50">
			<Link
				href={WHATSAPP_URL}
				target="_blank"
				rel="noopener noreferrer"
				onClick={() =>
					trackEvent("contact_click", {
						channel: "whatsapp",
						location: "floating_modal",
					})
				}
				aria-label="Написать в WhatsApp"
				className="bg-[#25D366] w-[54px] h-[54px] flex justify-center items-center text-[28px] rounded-full text-white shadow-[0_4px_14px_-2px_rgba(37,211,102,0.5)] hover:scale-105 transition-transform">
				<FaWhatsapp />
			</Link>

			<Link
				href={TEL_HREF(PHONE_SECONDARY)}
				onClick={(e) => {
					e.preventDefault();
					reportPhoneConversion(TEL_HREF(PHONE_SECONDARY));
				}}
				aria-label="Позвонить"
				className="bg-[#0a9bb4] w-[54px] h-[54px] flex justify-center items-center text-[28px] rounded-full text-white shadow-[0_4px_14px_-2px_rgba(10,155,180,0.5)] hover:scale-105 transition-transform">
				<LuPhone />
			</Link>
		</div>
	);
};

export default Modal;
