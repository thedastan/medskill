import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    icon: <BsFillTelephoneFill />,
    text: "+996 (552) 333 636",
    follow: "tel:+996552333636",
  },
  {
    id: 2,
    icon: <BsFillTelephoneFill />,
    text: "+996 (552) 333 636",
    follow: "tel:+996700333636",
  },
  {
    id: 3,
    icon: <BsFillTelephoneFill />,
    text: "+996 (552) 333 636",
    follow: "tel:+996776333636",
  },
  {
    id: 4,
    icon: <FaLocationDot />,
    text: "Кыргызстан, г. Бишкек, ул. Ахунбаева 2/1",
    follow:
      "https://www.google.com/maps/place/2+%D1%83%D0%BB.+%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.841181,74.6298258,17z/data=!3m1!4b1!4m5!3m4!1s0x389eb66691f68657:0xf750797880b0316f!8m2!3d42.841181!4d74.6320145",
  },
  {
    id: 5,
    icon: <RiWhatsappFill />,
    text: "Наш WhatsApp",
    follow: "https://wa.me/+996700333636",
  },
  {
    id: 6,
    icon: <AiFillInstagram />,
    text: "Наш Instagram",
    follow: "https://www.instagram.com/med.skill.kg/",
  },
];

const Contact = () => {
  return (
    <section className="bg-[#f3feff] md:py-[50px] py-[20px]">
      <div className="container">
        <div className="w-full flex md:justify-start justify-center">
          <h1 className=" text-[#00a1b4] font-[600] text-[34px] md:py-[60px] py-8">
            Наши контакты
          </h1>
        </div>
        <div className="flex justify-center w-full flex-col md:justify-center items-start gap-[10px]">
          <div className="flex md:absolute flex-col w-[100%] md:w-[380px] h-[470] gap-[20px] md:gap-[30px] bg-[#e9fdff] p-[50px] rounded-[50px] shadow-[0_4px_19px_-3px_rgba(0,0,0,0.25)]">
            {data.map((el) => (
              <Link
                href={el.follow}
                key={el.id}
                target={"_blank"}
                className="flex items-center gap-[20px]"
              >
                <h1 className="text-[#00a1b4] text-[30px]">{el.icon}</h1>
                <p className="md:text-[20px] text-[18px] text-[#00a1b4]">
                  {el.text}
                </p>
              </Link>
            ))}

            <div className="flex items-center justify-center">
              <Link href={"tel:+996700333636"} target={"_blank"} className="bg-[#f0f0f0] flex justify-center items-center w-[90%] md:w-[70%] h-[70px] text-[20px] text-[#00a1b4] font-[600] rounded-[15px] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_inset_3px_4px_10px_#ffffff] ">
                Вызвать
              </Link>
            </div>
          </div>
          <div className="flex justify-end w-[100%] md:h-[650px] h-[370px]">
            <iframe
              className="w-[100%] md:w-[75%] h-[100%] border border-gray-400"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5850.884516196979!2d74.63003100000002!3d42.842394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6664b49e4d9%3A0x6122b0a162bdd09b!2zMiwgMSDRg9C7LiDQkNGF0YPQvdCx0LDQtdCy0LAsINCR0LjRiNC60LXQuiwg0JrQuNGA0LPQuNC30LjRjw!5e0!3m2!1sru!2sus!4v1660545346749!5m2!1sru!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
