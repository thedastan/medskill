// lib/services.ts

import { PHONE_PRIMARY, formatPhone } from "@/config/contacts";
import img1 from "@/assets/img/reanimobile-brand.jpg";
import img2 from "@/assets/img/ambulance-night.jpg";
import img3 from "@/assets/img/ambulance-interior.jpg";
import img4 from "@/assets/img/vysov-uzkih-specialistov.png";
import img5 from "@/assets/img/ambulance-pair.jpg";

export const services = [
	{
    id:1,
		slug: "transportirovka-sanaviatsiya",
		title: "Транспортировка и санавиация",
		descriptions: [
			{ description: "Быстрая и комфортная перевозка" },
			{ description: "По городу" },
			{ description: "По регионам" },
			{ description: "По всей СНГ" },
		],
		contact: [{ phone: formatPhone(PHONE_PRIMARY) }],
		image: img1,
	},

	{
    id:2,
		slug: "soprovozhdenie-meropriyatiya",
		title: "Сопровождение мероприятий",
		descriptions: [
			{ description: "Сопровождение на любом формате событий" },
			{ description: "Спортивные мероприятия" },
			{ description: "Концерты" },
			{ description: "Корпоративы" },
			{ description: "Траурные мероприятия" },
		],
		contact: [{ phone: formatPhone(PHONE_PRIMARY) }],
		image: img2,
	},

	{
    id:3,
		slug: "kapelnici-na-domu",
		title: "Капельницы на дому",
		descriptions: [
			{ description: "Предварительная консультация специалиста" },
			{ description: "Поддержка организма" },
			{ description: "Помощь при недомогании" },
			{ description: "Восстановительные процедуры" },
			{ description: "Снятие дискомфорта" },
			{ description: "Общая поддержка состояния" },
		],
		contact: [{ phone: formatPhone(PHONE_PRIMARY) }],
		image: img3,
	},

	{
		id: 4,
		slug: "vysov-uzkih-specialistov",
		title: "Вызов специалистов",
		descriptions: [
		  { description: "Специалист по сердцу" },
		  { description: "Специалист по нервной системе" },
		  { description: "Анестезиолог" },
		  { description: "Детский специалист" },
		  { description: "Врач общей практики" },
		  { description: "Специалист по травмам" },
		  { description: "Специалист по урологии" },
		],
		contact: [{ phone: formatPhone(PHONE_PRIMARY) }],
		image: img4,
	  },
	{
    id:5,
		slug: "srochnie-vizovi",
		title: "Срочные вызовы",
		descriptions: [
			{ description: "Ситуации, требующие быстрого реагирования" },
			{ description: "Дорожные происшествия" },
			{ description: "Различные травмы" },
			{ description: "Сильный дискомфорт" },
			{ description: "Острая боль" },
			{ description: "Пищевые реакции" },
			{ description: "Неприятные состояния" },
		],
		contact: [{ phone: formatPhone(PHONE_PRIMARY) }],
		image: img5,
	},
];