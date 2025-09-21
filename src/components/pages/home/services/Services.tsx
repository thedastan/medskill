"use client";
"use client";
import React, { useState } from "react";
import fone from "@/assets/img/fone.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import Svg1 from "@/assets/svg/svg";
import Svg2 from "@/assets/svg/svg2";
import Svg3 from "@/assets/svg/svg3";
import Svg4 from "@/assets/svg/svg4";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Срочный вызов",
      descriptions: [
        "Скорая медицинская помощь взрослым и детям. Профессиональная бригада с врачом прибудет в течение 20 минут.",
        "Квалифицированный врач проведет осмотр на месте, снимет симптомы, облегчит самочувствие и назначит правильное лечение.",
        "Врач останется рядом, дождавшись стабилизации состояния. По состоянию здоровья будет предложено сопровождение в клинику для дальнейшей диагностики.",
      ],
    },
    {
      id: 2,
      title: "Транспортировка",
      descriptions: [
        "Все машины оборудованы гидравлическими системами FERNO, которые позволяют с комфортом, без тряски доставить пациентов до медицинского учреждения.",
        "Перевозка пациентов проводится на всей территории КР и за её пределами.",
        "В случае резкого ухудшения состояния, все реанимобили оснащены необходимым оборудованием и медикаментами для стабилизации состояния организма.",
      ],
    },
    {
      id: 3,
      title: "Санавиация",
      descriptions: [
        "Благодаря регулярным или чартерным рейсам осуществляем быструю и комфортабельную транспортировку пациента в медицинское учреждение.",
        "Вся авиация оборудована средствами для ухода и поддержания нужного уровня жизнедеятельности организма.",
      ],
    },
    {
      id: 4,
      title: "Дежурство на мероприятиях",
      descriptions: [
        "Постоянное присутствие квалифицированной и подготовленной бригады неотложной медицинской помощи на мероприятиях скопления людей, вне зависимости от продолжительности.",
        "Концерты · корпоративы · свадьбы · похороны · спортивные мероприятия · тренинги · выставки · детские мероприятия.",
      ],
    },
    {
      id: 5,
      title: "Вызов узких специалистов",
      descriptions: [
        "Уролог · Хирург · Невропатолог · Психиатр · Травматолог · Нефролог · Кардиолог · Реаниматолог · Педиатр · Семейный врач.",
      ],
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);
  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const dataSvg = [
		{
			img:  <Svg1/>,
			title: "Работаем день и ночь",
		},
		{
			img: <Svg2/>,
			title: "Профессиональная команда",
		},
		{
			img: <Svg3/>,
			title: "Гарантия на качество сделанной работы",
		},
		{
			img: <Svg4/>,
			title: "Мы любим пунктуальность",
		},
	];

  return (
    <section className="w-full relative py-10">
      {/* ✅ Десктоп с фоном */}
      <div
        className="container hidden md:block"
        style={{
          backgroundImage: `url(${fone.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[#16aec0] font-[600] text-[54px] mb-6">
          Наши услуги
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((el) => (
            <div
              key={el.id}
              className="w-full bg-white h-[330px] shadow-[0_4px_19px_-3px_rgba(0,0,0,0.25)] rounded-[50px] p-[20px]"
            >
              <h2 className="text-[#16aec0] text-[30px] font-[600]">
                {el.title}
              </h2>
              <div className="h-[240px] flex flex-col gap-[10px] justify-start mt-4">
                {el.descriptions.map((desc, index) => (
                  <p className="text-gray-600" key={index}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Мобильный без фона */}
      <div className="container block md:hidden">
        <div className="w-full flex justify-center text-center">
          <h1 className=" text-[#00a1b4] w-full font-[600] text-[34px]">
            Наши контакты
          </h1>
        </div>
        <div className="space-y-0 flex flex-col items-center">
          {data.map((el) => (
            <div
              key={el.id}
              className="bg-white shadow-md w-[95%] rounded-[5px] overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(el.id)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <h2 className="text-[#16aec0] text-lg font-semibold">
                  {el.title}
                </h2>
                <span className="text-xl text-gray-500">
                  {openId === el.id ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openId === el.id ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="p-4 border-t border-gray-200 space-y-2">
                  {el.descriptions.map((desc, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
