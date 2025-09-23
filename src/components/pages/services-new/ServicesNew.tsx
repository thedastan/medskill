"use client";
import React from "react";

import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Description } from "@/components/ui/text/Description";
import Image from "next/image";
import Link from "next/link";
import { RiCheckFill } from "react-icons/ri";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button/Button";

 


const ServicesNew = () => {
	return (
		<section id="services" className="py-12 ">
			<div className="container flex flex-col justify-center items-center">
				<Title className="text-center pb-10">Наши услуги</Title>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-[1100px]">
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
								<Button className="mt-4 flex w-full text-white items-center gap-2 justify-center">
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

export default ServicesNew;
