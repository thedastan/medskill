// lib/services.ts

import img1 from "@/assets/img/transportirovka-sanaviatsiya.png";
import img2 from "@/assets/img/soprovozhdenie-meropriyatiya.png";
import img3 from "@/assets/img/kapelnici-na-domu.png";
import img4 from "@/assets/img/vysov-uzkih-specialistov.png";
import img5 from "@/assets/img/srochnie-vizovi.png";


export const services = [
  {
    slug: "transportirovka-sanaviatsiya",
    title: "Транспортировка и санавиация",
    descriptions: [
      { description: "Быстрая и комфортабельная транспортировка" },
      { description: "По городу" },
      { description: "По регионам" },
      { description: "По всей СНГ" },
    ],
    contact: [
      { phone: "+996 (700) 333 636" }
        ],
    image: img1,
  },

  {
    slug: "soprovozhdenie-meropriyatiya",
    title: "Сопровождение на мероприятиях",
    descriptions: [
      { description: "Сопровождение вне зависимости от продолжительности" },
      { description: "Спортивные мероприятия" },
      { description: "Концерты" },
      { description: "Корпоративы" },
      { description: "Похороны" },
    ],
    contact: [
      { phone: "+996 703 631 592" }
        ],
    image: img2,
  },

  {
    slug: "kapelnici-na-domu",
    title: "Капельницы на дому",
    descriptions: [
      { description: "Осмотр и оценка состояния" },
      { description: "ОРВИ, грипп" },
      { description: "Алкогольная интоксикация" },
      { description: "Выведение из запойного состояния" },
      { description: "Повышение температуры тела" },
      { description: "Аллергические реакции" },
    ],
    contact: [
      { phone: "+996 703 631 592" },
    ],
    image: img3,
  },

  {
    slug: "vysov-uzkih-specialistov",
    title: "Вызов узких специалистов",
    descriptions: [
      { description: "Кардиолог" },
      { description: "Невролог, невропатолог" },
      { description: "Реаниматолог-анестезиолог" },
      { description: "Педиатр" },
      { description: "Терапевт" },
      { description: "Травматолог" },
      { description: "Уролог" },
    ],
    contact: [
      { phone: "+996 703 631 592" },
    ],
    image: img4,
  },

  {
    slug: "srochnie-vizovi",
    title: "Срочные вызовы",
    descriptions: [
      { description: "Кровотечение" },
      { description: "ДТП" },
      { description: "Травмы разной степени" },
      { description: "Сердечные приступы" },
      { description: "Боли в животе различной локализации" },
      { description: "Отравления" },
      { description: "Запоры" },
    ],
    contact: [
      { phone: "+996 703 631 592" },
    ],
    image: img5,
  },
];