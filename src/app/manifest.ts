import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "MedSkill — Скорая помощь в Бишкеке",
		short_name: "MedSkill",
		description:
			"Частная скорая помощь в Бишкеке. Приезжаем за 15 минут, работаем 24/7.",
		lang: "ru",
		start_url: "/?source=pwa",
		scope: "/",
		display: "standalone",
		orientation: "portrait",
		theme_color: "#16AEC0",
		background_color: "#16AEC0",
		categories: ["medical", "health", "lifestyle"],
		icons: [
			{
				src: "/icon",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icon",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/apple-icon",
				sizes: "180x180",
				type: "image/png",
			},
		],
		shortcuts: [
			{
				name: "Позвонить",
				short_name: "Звонок",
				url: "/?source=pwa-shortcut-call",
				description: "Позвонить в скорую",
			},
			{
				name: "Услуги",
				short_name: "Услуги",
				url: "/#services",
				description: "Список наших услуг",
			},
		],
	};
}
