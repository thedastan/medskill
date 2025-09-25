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
			{ description: "Быстрая и комфортная перевозка" },
			{ description: "По городу" },
			{ description: "По регионам" },
			{ description: "По всей СНГ" },
		],
		contact: [{ phone: "+996 (700) 333 636" }],
		image: img1,
	},

	{
		slug: "soprovozhdenie-meropriyatiya",
		title: "Сопровождение мероприятий",
		descriptions: [
			{ description: "Сопровождение на любом формате событий" },
			{ description: "Спортивные мероприятия" },
			{ description: "Концерты" },
			{ description: "Корпоративы" },
			{ description: "Траурные мероприятия" },
		],
		contact: [{ phone: "+996 703 631 592" }],
		image: img2,
	},

	{
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
		contact: [{ phone: "+996 703 631 592" }],
		image: img3,
	},

	{
		slug: "vysov-uzkih-specialistov",
		title: "Вызов специалистов",
		descriptions: [
			{ description: "Кардиолог" },
			{ description: "Невролог" },
			{ description: "Анестезиолог" },
			{ description: "Педиатр" },
			{ description: "Терапевт" },
			{ description: "Травматолог" },
			{ description: "Уролог" },
		],
		contact: [{ phone: "+996 703 631 592" }],
		image: img4,
	},

	{
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
		contact: [{ phone: "+996 703 631 592" }],
		image: img5,
	},
];