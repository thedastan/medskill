"use client";
import fone from "@/assets/img/fone.png";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Description } from "@/components/ui/text/Description";
import Image from "next/image";
import Link from "next/link";
import { RiCheckFill } from "react-icons/ri";
import { services } from "@/lib/services";

 

import Svg1 from "@/assets/svg/svg";
import Svg2 from "@/assets/svg/svg2";
import Svg3 from "@/assets/svg/svg3";
import Svg4 from "@/assets/svg/svg4";

const Services = () => {
	 

	 
	const dataSvg = [
		{
			img: <Svg1 />,
			title: "Работаем круглосуточно 24/7",
		},
		{
			img: <Svg2 />,
			title: "Профессиональная команда",
		},
		{
			img: <Svg3 />,
			title: "Гарантированный сервис качества",
		},
		{
			img: <Svg4 />,
			title: "Мы ценим пунктуальность",
		},
	];

	return (
		<section className="w-full relative py-10">
			{/* ✅ Десктоп с фоном */}
			<div
				className="container "
				style={{
					backgroundImage: `url(${fone.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<h1 className="text-[#16aec0] font-[600] text-[54px] mb-6">
					Наши услуги
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
					{services?.map((service, index) => (
						<Link
							href={`/${service.slug}`}
							key={index}
							className="p-3 bg-white flex flex-col justify-between h-full min-h-[330px] rounded-[20px] shadow hover:shadow-lg transition">
							<div>
								<div className="w-full h-[300px] relative overflow-hidden rounded-[16px]">
									<Image fill style={{ objectFit: "cover" }} src={service.image} alt="img" />
								</div>
								<div className="flex flex-col gap-2">
									<TitleComponent className="!text-[20px] mt-4 pb-4">
										{service.title}
									</TitleComponent>
									{service.descriptions.map((el, index) => (
										<div key={index}>
											<Description className="flex items-start gap-2 text-gray-600 !text-[16px]">
												<span
													className={`${"bg-[#16AEC0]"} flex text-white rounded-[50px] p-1`}>
													<RiCheckFill className="font-normal" />
												</span>
												{el.description}
											</Description>
										</div>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* ✅ Мобильный без фона */}

			<div className=" grid grid-cols-2 mt-10 md:hidden">
				{dataSvg.map((el, index) => (
					<div
						key={index}
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
