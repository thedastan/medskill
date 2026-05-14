"use client";
import logo from "@/assets/img/image 8.png";
import logo2 from "@/assets/img/Med Skill.png";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { LuPhone, LuMapPin, LuClock } from "react-icons/lu";
import { reportPhoneConversion, trackEvent } from "@/lib/gtag";
import {
	PHONE_PRIMARY,
	TEL_HREF,
	formatPhone,
	WHATSAPP_URL,
	TELEGRAM_LINK,
	INSTAGRAM_LINK,
	ADDRESS_LINE,
	ADDRESS_MAP_URL,
	CITY,
} from "@/config/contacts";
import { services } from "@/lib/services";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gradient-to-b from-[#16AEC0] to-[#0a9bb4] text-white">
			<div className="container py-10 md:py-14">
				<div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-8 md:gap-12 pb-8 border-b border-white/20">
					{/* Бренд + контакты */}
					<div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
						<div className="flex items-center gap-2">
							<Image src={logo} alt="MedSkill" />
							<Image src={logo2} alt="MedSkill" />
						</div>
						<p className="text-white/85 text-[14px] md:text-[15px] leading-snug max-w-[320px]">
							Частная скорая помощь в Бишкеке. Приедем за 15 минут, работаем
							круглосуточно.
						</p>
						<div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5 rounded-full text-[13px] font-[500]">
							<LuClock className="text-[15px]" />
							24/7 без выходных
						</div>
					</div>

					{/* Услуги */}
					<div className="flex flex-col gap-3 items-center md:items-start">
						<h4 className="text-white font-[700] text-[16px] md:text-[17px] uppercase tracking-wider">
							Услуги
						</h4>
						<ul className="flex flex-col gap-2 items-center md:items-start">
							{services.map((srv) => (
								<li key={srv.slug}>
									<Link
										href={`/${srv.slug}`}
										className="text-white/85 hover:text-white text-[14px] md:text-[15px] hover:underline transition-colors">
										{srv.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Контакты */}
					<div className="flex flex-col gap-4 items-center md:items-start">
						<h4 className="text-white font-[700] text-[16px] md:text-[17px] uppercase tracking-wider">
							Контакты
						</h4>
						<Link
							href={TEL_HREF(PHONE_PRIMARY)}
							onClick={(e) => {
								e.preventDefault();
								reportPhoneConversion(TEL_HREF(PHONE_PRIMARY));
							}}
							className="inline-flex items-center gap-2 text-white text-[20px] md:text-[24px] font-[700] hover:text-white/90 transition-colors">
							<LuPhone className="text-[20px]" />
							{formatPhone(PHONE_PRIMARY)}
						</Link>

						<Link
							href={ADDRESS_MAP_URL}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() =>
								trackEvent("contact_click", {
									channel: "location",
									location: "footer",
								})
							}
							className="inline-flex items-start gap-2 text-white/85 hover:text-white text-[14px] md:text-[15px] hover:underline">
							<LuMapPin className="text-[18px] mt-[2px] shrink-0" />
							<span>
								г. {CITY}, {ADDRESS_LINE}
							</span>
						</Link>

						<div className="flex items-center gap-2 mt-1">
							<Link
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() =>
									trackEvent("contact_click", {
										channel: "whatsapp",
										location: "footer",
									})
								}
								aria-label="WhatsApp"
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#25D366] text-[18px] transition-colors">
								<FaWhatsapp />
							</Link>
							<Link
								href={TELEGRAM_LINK}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() =>
									trackEvent("contact_click", {
										channel: "telegram",
										location: "footer",
									})
								}
								aria-label="Telegram"
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#26A5E4] text-[17px] transition-colors">
								<FaTelegramPlane />
							</Link>
							<Link
								href={INSTAGRAM_LINK}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() =>
									trackEvent("contact_click", {
										channel: "instagram",
										location: "footer",
									})
								}
								aria-label="Instagram"
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#E1306C] text-[18px] transition-colors">
								<FaInstagram />
							</Link>
						</div>
					</div>
				</div>

				{/* Низ — юр.инфо + © */}
				<div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between pt-6 text-white/75 text-[13px] md:text-[14px]">
					<div className="text-center md:text-left">
						<p>© {year} ОсОО «МедСкилл» · ИНН 02608202110272</p>
					</div>
					<Link
						href="https://instagram.com/dastan.mukeev"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white hover:underline">
						Разработал: ИП Мукеев Дастан Ракымович
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
