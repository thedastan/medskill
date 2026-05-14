"use client";
import fone from "@/assets/img/fone.png";
import { services } from "@/lib/services";

import Svg1 from "@/assets/svg/svg";
import Svg2 from "@/assets/svg/svg2";
import Svg3 from "@/assets/svg/svg3";
import Svg4 from "@/assets/svg/svg4";
import ServiceCard from "@/components/ui/service-card/ServiceCard";

const Services = () => {
	const dataSvg = [
		{ img: <Svg1 />, title: "Работаем круглосуточно 24/7" },
		{ img: <Svg2 />, title: "Профессиональная команда" },
		{ img: <Svg3 />, title: "Гарантированный сервис качества" },
		{ img: <Svg4 />, title: "Мы ценим пунктуальность" },
	];

	return (
		<section className="w-full relative py-10 md:py-14">
			<div
				className="container"
				style={{
					backgroundImage: `url(${fone.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="mb-8 md:mb-10">
					<h2 className="text-[#16aec0] font-[700] text-[36px] md:text-[48px] leading-tight">
						Наши услуги
					</h2>
					<p className="text-[#16aec0]/70 text-[15px] md:text-[17px] mt-2 max-w-[600px]">
						Профессиональная медицинская помощь от частной службы скорой в
						Бишкеке
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
					{services.map((service) => (
						<ServiceCard
							key={service.slug}
							service={service}
							location="home_services_grid"
						/>
					))}
				</div>
			</div>

			{/* Trust иконки на мобиле */}
			<div className="grid grid-cols-2 mt-10 md:hidden">
				{dataSvg.map((el) => (
					<div
						key={el.title}
						className="bg-white rounded-[30px] flex flex-col justify-center gap-3 items-center p-4 w-full">
						<h1>{el.img}</h1>
						<p className="text-[#868686] text-[16px] text-center leading-6">
							{el.title}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
