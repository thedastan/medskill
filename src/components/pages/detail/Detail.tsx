"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Button } from "@/components/ui/button/Button";
import { RiCheckFill } from "react-icons/ri";
import { services } from "@/lib/services";
import { SlArrowLeft } from "react-icons/sl";

const Detail = () => {
	const { slug } = useParams();

	const service = services.find((el) => el.slug === String(slug));
	if (!service) return <p>Услуга не найдена</p>;
	return (
		<section className="pt-6">
			<div className="container">
				<div className="w-full pb-10  absolute top-10 md:-right-32 -right-6 z-20">
					<Link href={"/"} >
						<Button className="text-white !rounded-full flex justify-center items-center w-[50px] h-[50px]">
							<SlArrowLeft className="text-[20px]  " />
						</Button>
					</Link>
				</div>
				<div className="flex md:flex-row flex-col gap-8 items-center">
					<div className="w-full relative overflow-hidden max-w-[900px] md:h-[500px] h-[400px] rounded-[20px]">
						<Image
							src={service.image}
							fill
							style={{ objectFit: "cover" }}
							alt={service.title}
						/>
					</div>

					<div className="w-full max-w-[500px]">
						<Title className="pb-6">{service.title}</Title>
						{service.descriptions.map((el, index) => (
							<div className="" key={index}>
								<Description className="flex mt-4 items-start gap-2 text-gray-600 !text-[16px]">
									<h1
										className={`${"bg-[#16AEC0]"} text-white flex rounded-[50px] p-1`}>
										<RiCheckFill className="font-normal" />
									</h1>
									{el.description}
								</Description>
							</div>
						))}
						<Title className=" mt-6 !text-[26px]">{service.price}</Title>

						<div className="flex flex-wrap items-start gap-3 mt-8">
							{service.contact.map((el, index) => (
								<Link
									key={index}
									href={`tel:${el.phone}`}
									className="flex items-center gap-2 bg-[#16AEC0] text-white rounded-[10px] p-3 shadow   transition">
									<FaPhoneAlt />
									<Description className="text-white">{el.phone}</Description>
								</Link>
							))}
						</div>
					</div>
				</div>

				<Title className="text-start pb-10 mt-20">Наши услуги</Title>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full pb-10">
					{services?.map((service, index) => (
						<Link
							href={`/${service.slug}`}
							key={index}
							className="p-3 bg-white flex flex-col justify-between h-full min-h-[330px] rounded-[20px] shadow hover:shadow-lg transition">
							<div>
								<div className="w-full h-[300px] relative overflow-hidden rounded-[16px]">
									<Image fill objectFit="cover" src={service.image} alt="img" />
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
							<div className="flex items-center justify-center gap-2">
								<Button className="mt-4 flex text-white w-full items-center gap-2 justify-center">
									{service.price}
								</Button>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Detail;
