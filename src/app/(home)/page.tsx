import HomeComponents from "@/components/pages/home/HomeComponents";
import StructuredData from "@/lib/StructuredData";
import type { Metadata } from "next";
import { services } from "@/lib/services";

const SITE_URL = "https://www.medskill.com.kg";

export const metadata: Metadata = {
	title: "Скорая помощь в Бишкеке — приедем за 15 минут, 24/7",
	description:
		"Частная скорая помощь в Бишкеке. Транспортировка, капельницы на дому, вызов узких специалистов, срочные вызовы. Работаем круглосуточно, прибываем за 15 минут.",
	alternates: {
		canonical: SITE_URL,
	},
	openGraph: {
		url: SITE_URL,
		title: "Скорая помощь в Бишкеке — приедем за 15 минут, 24/7",
		description:
			"Частная скорая помощь в Бишкеке. Работаем 24/7. Прибываем за 15 минут.",
	},
};

const businessStructuredData = {
	"@context": "https://schema.org",
	"@type": "MedicalBusiness",
	name: "MedSkill — Частная скорая помощь",
	legalName: 'ОсОО "МедСкилл"',
	url: SITE_URL,
	logo: `${SITE_URL}/logo512.png`,
	image: `${SITE_URL}/logo512.png`,
	telephone: ["+996700333636", "+996552333636", "+996776333636"],
	priceRange: "$$",
	address: {
		"@type": "PostalAddress",
		streetAddress: "ул. Ахунбаева 2/1",
		addressLocality: "Бишкек",
		addressCountry: "KG",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 42.841181,
		longitude: 74.6320145,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday",
			],
			opens: "00:00",
			closes: "23:59",
		},
	],
	sameAs: [
		"https://www.instagram.com/med.skill.kg/",
		"https://wa.me/+996700333636",
		"https://t.me/+996550822451",
	],
	availableService: services.map((s) => ({
		"@type": "MedicalService",
		name: s.title,
		url: `${SITE_URL}/${s.slug}`,
	})),
};

const Home = () => (
	<>
		<StructuredData data={businessStructuredData} id="business-jsonld" />
		<HomeComponents />
	</>
);

export default Home;
