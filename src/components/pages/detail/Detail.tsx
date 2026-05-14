"use client";
import Image from "next/image";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { SlArrowLeft } from "react-icons/sl";
import { useEffect } from "react";

import { services } from "@/lib/services";
import { reportPhoneConversion, trackEvent } from "@/lib/gtag";
import LeadForm from "@/components/ui/form/LeadForm";
import ServiceCard from "@/components/ui/service-card/ServiceCard";

interface DetailProps {
	slug: string;
}

const Detail = ({ slug }: DetailProps) => {
	const service = services.find((el) => el.slug === String(slug));

	useEffect(() => {
		if (service) {
			trackEvent("service_view", { slug: service.slug, title: service.title });
		}
	}, [service]);

	if (!service) return <p>Услуга не найдена</p>;

	return (
		<section className="pt-6 md:pt-10 pb-16 bg-[#f3feff]">
			<div className="container">
				{/* Back link */}
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-[#0a9bb4] hover:text-[#16AEC0] text-[15px] font-[500] mb-6 md:mb-8 transition-colors">
					<SlArrowLeft className="text-[12px]" />
					На главную
				</Link>

				<div className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-10 items-start">
					{/* Левая колонка: фото + заголовок + теги */}
					<div className="flex flex-col gap-6">
						{/* Большое фото с overlay-заголовком */}
						<div className="relative overflow-hidden rounded-[24px] h-[280px] md:h-[440px] shadow-[0_8px_28px_-8px_rgba(0,0,0,0.15)]">
							<Image
								src={service.image}
								fill
								priority
								sizes="(min-width: 768px) 60vw, 100vw"
								style={{ objectFit: "cover" }}
								alt={service.title}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
							<div className="absolute bottom-5 md:bottom-7 left-5 md:left-7 right-5 md:right-7">
								<span className="inline-block bg-[#16AEC0] text-white text-[12px] md:text-[13px] font-[600] uppercase tracking-wider px-3 py-1 rounded-full mb-3">
									Услуга
								</span>
								<h1 className="text-white text-[26px] md:text-[42px] font-[700] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
									{service.title}
								</h1>
							</div>
						</div>

						{/* Что входит / случаи */}
						<div>
							<h2 className="text-[#0a9bb4] text-[18px] md:text-[20px] font-[700] mb-4">
								Что входит
							</h2>
							<div className="flex flex-wrap gap-2">
								{service.descriptions.map((el) => (
									<span
										key={el.description}
										className="inline-flex items-center bg-white text-[#0a7d8c] text-[14px] md:text-[15px] font-[500] px-3.5 py-2 rounded-[10px] border border-[#16AEC0]/20 shadow-sm">
										{el.description}
									</span>
								))}
							</div>
						</div>

						{/* Кнопка звонка */}
						<div className="flex flex-wrap gap-3">
							{service.contact.map((el) => {
								const href = `tel:${el.phone.replace(/[^+\d]/g, "")}`;
								return (
									<Link
										key={el.phone}
										href={href}
										onClick={(e) => {
											e.preventDefault();
											reportPhoneConversion(href);
										}}
										className="inline-flex items-center gap-2.5 bg-[#16AEC0] hover:bg-[#0a9bb4] text-white text-[16px] md:text-[17px] font-[600] rounded-[14px] px-5 py-3.5 shadow-[0_6px_18px_-4px_rgba(22,174,192,0.5)] active:scale-[0.98] transition-all">
										<LuPhone className="text-[18px]" />
										{el.phone}
									</Link>
								);
							})}
						</div>
					</div>

					{/* Правая колонка: форма */}
					<div className="md:sticky md:top-4">
						<LeadForm source={`detail/${slug}`} className="!max-w-none w-full" />
					</div>
				</div>

				{/* Другие услуги */}
				<div className="mt-16 md:mt-24">
					<h2 className="text-[#16AEC0] font-[700] text-[28px] md:text-[40px] leading-tight mb-2">
						Другие услуги
					</h2>
					<p className="text-[#16aec0]/70 text-[15px] md:text-[17px] mb-8 md:mb-10">
						Полный спектр медицинской помощи от MedSkill
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
						{services
							.filter((srv) => srv.slug !== slug)
							.map((srv) => (
								<ServiceCard
									key={srv.slug}
									service={srv}
									location="detail_other_services"
								/>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Detail;
