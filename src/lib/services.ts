// lib/services.ts

import img1 from "@/assets/img/pereezdy-kvartiri-ofisov.jpg";
import img2 from "@/assets/img/dostavka.webp";
import img3 from "@/assets/img/himchistkamebeli-imatrasov.jpg";
import img4 from "@/assets/img/prochiegruzoperevozki.jpg";

export const services = [
	{
		slug: "pereezdy-kvartiri-ofisov",
		title: "Переезды квартир и офисов",
		descriptions: [
			{
				description: "Организация перевозки «под ключ»",
			},
			{
				description: "Аккуратная упаковка и бережная транспортировка",
			},
			{
				description: "Сборка и расстановка мебели на новом месте",
			},
		],

		contact: [
			{
				phone: "+996 708 771 849",
			},
			{
				phone: "+996 708 771 849",
			},
		],

		image: img1,
		price: "от 2000 сом",
	},


	///


	{
		slug: "dostavkamebeli-sborkarazborka",
		title: "Доставка мебели с сборкой и разборкой в Бишкеке",
		descriptions: [
			{
				description: "Организация перевозки «под ключ»",
			},
			{
				description: "Аккуратная упаковка и бережная транспортировка",
			},
			{
				description: "Сборка и расстановка мебели на новом месте",
			},
		],
		contact: [
			{
				phone: "+996 708 771 849",
			},
			{
				phone: "+996 708 771 849",
			},
		],

		image: img2,
		price: "от 5000 сом",
	},

	///


	{
		slug: "himchistkamebeli-imatrasov",
		title: "Химчистка мягкой мебели и матрасов в Бишкеке",
		descriptions: [
			{
				description: "Профессиональное оборудование и безопасные средства",
			},
			{
				description: "Удаление пятен, запахов и аллергенов",
			},
			{
				description: "Восстановление свежести и продление срока службы мебели",
			},
		],
		contact: [
			{
				phone: "+996 708 771 849",
			},
			{
				phone: "+996 708 771 849",
			},
		],

		image: img3,
		price: "от 5000 сом",
	},

	///

	
	{
		slug: "prochiegruzoperevozki",
		title: "Прочие грузоперевозки",
		descriptions: [
			{
				description: "Грузовой такси по Бишкеку",
			},
			{
				description: "Спринтер такси по Чуйской области",
			},
			{
				description: "Профессиональные грузчики",
			},
		],
		contact: [
			{
				phone: "+996 708 771 849",
			},
			{
				phone: "+996 708 771 849",
			},
		],

		image: img4,
		price: "от 5000 сом",
	},
];
