"use client";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { trackEvent } from "@/lib/gtag";

type Service = (typeof services)[0];

interface ServiceCardProps {
	service: Service;
	location: string;
}

const ServiceCard = ({ service, location }: ServiceCardProps) => {
	const extra = service.descriptions.length - 3;

	return (
		<Link
			href={`/${service.slug}`}
			onClick={() =>
				trackEvent("service_card_click", {
					slug: service.slug,
					location,
				})
			}
			className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white border border-[#16AEC0]/15 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_32px_-8px_rgba(22,174,192,0.3)] hover:border-[#16AEC0]/45 hover:-translate-y-1 transition-all duration-300">
			{/* Image with title overlay */}
			<div className="relative h-[220px] md:h-[240px] overflow-hidden">
				<Image
					fill
					src={service.image}
					alt={service.title}
					sizes="(min-width: 768px) 50vw, 100vw"
					className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
				<h3 className="absolute bottom-4 left-5 right-5 text-white text-[20px] md:text-[22px] font-[700] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
					{service.title}
				</h3>
			</div>

			{/* Description list */}
			<div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
				<ul className="flex flex-col gap-2.5 flex-1">
					{service.descriptions.slice(0, 3).map((el) => (
						<li
							key={el.description}
							className="flex items-start gap-2.5 text-[#444] text-[14px] md:text-[15px] leading-snug">
							<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#16AEC0] shrink-0" />
							{el.description}
						</li>
					))}
					{extra > 0 && (
						<li className="text-[#16AEC0]/80 text-[13px] font-[500] pl-4">
							и ещё {extra}…
						</li>
					)}
				</ul>

				{/* CTA — Подробнее */}
				<div className="flex items-center gap-1.5 text-[#16AEC0] font-[600] text-[15px] group-hover:gap-3 transition-all mt-1">
					Подробнее
					<svg
						viewBox="0 0 24 24"
						width="18"
						height="18"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</div>
			</div>
		</Link>
	);
};

export default ServiceCard;
