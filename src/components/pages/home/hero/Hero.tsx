"use client";
import logo from "@/assets/img/image 8.png";
import logo2 from "@/assets/img/Med Skill.png";
import circle from "@/assets/img/Frame 1 (2).png";
import ambulance from "@/assets/img/sjebrohbfui 1.png";
import fone from "@/assets/img/bg.png";
import Image from "next/image";

import Svg1 from "@/assets/svg/svg";
import Svg2 from "@/assets/svg/svg2";
import Svg3 from "@/assets/svg/svg3";
import Svg4 from "@/assets/svg/svg4";

import LeadForm from "@/components/ui/form/LeadForm";
import { reportPhoneConversion } from "@/lib/gtag";
import { LuPhone } from "react-icons/lu";
import { PHONE_PRIMARY, TEL_HREF, formatPhone } from "@/config/contacts";

const trustCards = [
	{ icon: <Svg1 />, title: "Работаем круглосуточно 24/7" },
	{ icon: <Svg2 />, title: "Профессиональная команда" },
	{ icon: <Svg3 />, title: "Гарантированный сервис качества" },
	{ icon: <Svg4 />, title: "Мы ценим пунктуальность" },
];

const Hero = () => {
	return (
		<section
			style={{
				backgroundImage: `url(${fone.src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="relative bg-[#00BCD4] md:py-[40px] py-[20px] min-h-[100vh] w-full overflow-hidden">
			{/* Тёплый bottom-overlay для глубины и читаемости */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00657a]/30" />

			<div className="container relative z-10">
				<div className="flex md:flex-row flex-col justify-between items-center md:items-stretch gap-8 md:gap-4">
					{/* ЛЕВАЯ КОЛОНКА */}
					<div className="flex flex-col gap-5 md:gap-6 pt-2 md:pt-4 w-full md:max-w-[560px] items-center md:items-start">
						{/* Логотип */}
						<div className="flex items-center md:flex-row flex-col">
							<Image src={logo} alt="Логотип MedSkill" priority />
							<Image
								src={logo2}
								alt="MedSkill — частная скорая помощь"
								priority
							/>
						</div>

						{/* Trust бейджи */}
						<div className="flex flex-wrap gap-2 justify-center md:justify-start">
							<span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[13px] font-[500] px-3 py-1.5 rounded-full">
								<span className="w-2 h-2 rounded-full bg-[#3fdf17] shadow-[0_0_8px_#3fdf17] animate-pulse" />
								Работаем сейчас
							</span>
							<span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[13px] font-[500] px-3 py-1.5 rounded-full">
								24/7
							</span>
							<span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[13px] font-[500] px-3 py-1.5 rounded-full">
								Приезжаем за 15 минут
							</span>
						</div>

						{/* H1 */}
						<h1 className="text-white font-[700] tracking-tight text-center md:text-start text-[36px] md:text-[60px] leading-[1.05]">
							Скорая помощь
							<br />
							<span className="text-white/90">в Бишкеке</span>
						</h1>

						<p className="text-white/85 text-[16px] md:text-[18px] leading-snug text-center md:text-start max-w-[460px]">
							Помощь дома, на работе или в дороге.
						</p>

						{/* Форма заявки */}
						<LeadForm source="hero" className="w-full md:max-w-[420px]" />

						{/* Альтернативный CTA — звонок, только десктоп */}
						<a
							href={TEL_HREF(PHONE_PRIMARY)}
							onClick={(e) => {
								e.preventDefault();
								reportPhoneConversion(TEL_HREF(PHONE_PRIMARY));
							}}
							className="hidden md:inline-flex items-center gap-2 text-white/95 hover:text-white text-[15px] font-[500] underline-offset-4 hover:underline transition-colors">
							<LuPhone className="text-[18px]" />
							или позвоните: {formatPhone(PHONE_PRIMARY)}
						</a>
					</div>

					{/* ПРАВАЯ КОЛОНКА — машина */}
					<div className="w-full md:mt-0 mt-10 relative flex items-center overflow-hidden">
						<Image
							src={circle}
							alt=""
							aria-hidden="true"
							priority
							className="animate-spin-right z-1"
						/>
						<div className="absolute flex justify-center">
							<div className="flex gap-[30px] absolute mr-[50px]">
								<div className="md:w-[80px] w-[60px] md:h-[30px] h-[20px] rounded-xl bg-[#0044ff] shadow-[0_0_20px_8px_#0044ff] animate-blink" />
								<div className="md:w-[80px] w-[60px] md:h-[30px] h-[20px] rounded-xl bg-[#0044ff] shadow-[0_0_20px_8px_#0044ff] animate-blink" />
							</div>
							<Image
								src={ambulance}
								alt="Машина скорой помощи MedSkill"
								priority
								className="drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
							/>
						</div>
					</div>
				</div>

				{/* Trust-cards снизу — только десктоп */}
				<div className="md:flex hidden flex-row gap-4 mt-12">
					{trustCards.map((el) => (
						<div
							key={el.title}
							className="bg-white/95 backdrop-blur-sm rounded-[24px] flex flex-col justify-center gap-2 items-center p-5 w-full border border-white/40 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] transition-transform">
							<div className="w-14 h-14 flex items-center justify-center">
								{el.icon}
							</div>
							<p className="text-[#16aec0] text-[15px] font-[500] text-center leading-snug">
								{el.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
