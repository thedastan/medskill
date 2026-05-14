"use client";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button/Button";
import { RiCheckFill } from "react-icons/ri";
import { services } from "@/lib/services";
import { SlArrowLeft } from "react-icons/sl";
import { useEffect } from "react";
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
    <section className="pt-6">
      <div className="container relative">
        {/* Кнопка "назад" */}
        <div className="absolute left-8 top-6 z-20">
          <Link href={"/"}>
            <Button className="text-white !rounded-full flex justify-center items-center w-[50px] h-[50px]">
              <SlArrowLeft className="text-[20px]" />
            </Button>
          </Link>
        </div>

        <div className="flex md:flex-row flex-col gap-8 items-center">
          {/* Фото */}
          <div className="w-full relative overflow-hidden max-w-[900px] md:h-[500px] h-[400px] rounded-[20px]">
            <Image
              src={service.image}
              fill
              style={{ objectFit: "cover" }}
              alt={service.title}
            />
          </div>

          {/* Текст */}
          <div className="w-full max-w-[500px]">
            <Title className="pb-6">{service.title}</Title>

            {service.descriptions.map((el) => (
              <div key={el.description}>
                <Description className="flex mt-4 items-start gap-2 text-gray-600 !text-[16px]">
                  <span className="bg-[#16AEC0] text-white flex rounded-[50px] p-1">
                    <RiCheckFill className="font-normal" />
                  </span>
                  {el.description}
                </Description>
              </div>
            ))}

            <div className="flex flex-wrap items-start gap-3 mt-8">
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
                    className="flex items-center gap-2 bg-[#16AEC0] text-white rounded-[10px] p-3 shadow transition">
                    <FaPhoneAlt />
                    <Description className="text-white">{el.phone}</Description>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8">
              <LeadForm source={`detail/${slug}`} className="!shadow-md" />
            </div>
          </div>
        </div>

        {/* Другие услуги */}
        <Title className="text-start pb-10 mt-20">Другие услуги</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full pb-10">
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
    </section>
  );
};

export default Detail;