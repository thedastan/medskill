"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { reportPhoneConversion, trackEvent } from "@/lib/gtag";
import { PHONE_PRIMARY, TEL_HREF, WHATSAPP_URL } from "@/config/contacts";

const StickyCta = () => {
	return (
		<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#16AEC0]/20 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.12)]">
			<div className="flex items-stretch gap-2 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
				<Link
					href={TEL_HREF(PHONE_PRIMARY)}
					onClick={(e) => {
						e.preventDefault();
						reportPhoneConversion(TEL_HREF(PHONE_PRIMARY));
					}}
					className="flex-1 flex items-center justify-center gap-2 bg-[#16AEC0] text-white font-[600] text-[16px] rounded-[14px] h-[54px] shadow-[0_4px_12px_-2px_rgba(22,174,192,0.4)] active:scale-[0.98] transition-transform">
					<LuPhone className="text-[20px]" />
					Позвонить
				</Link>

				<Link
					href={WHATSAPP_URL}
					target="_blank"
					rel="noopener noreferrer"
					onClick={() =>
						trackEvent("contact_click", {
							channel: "whatsapp",
							location: "sticky_cta",
						})
					}
					className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-[600] text-[16px] rounded-[14px] h-[54px] shadow-[0_4px_12px_-2px_rgba(37,211,102,0.4)] active:scale-[0.98] transition-transform">
					<FaWhatsapp className="text-[22px]" />
					WhatsApp
				</Link>
			</div>
		</div>
	);
};

export default StickyCta;
