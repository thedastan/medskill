import HomeComponents from "@/components/pages/home/HomeComponents";
import StructuredData from "@/lib/StructuredData";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import {
	ALL_PHONES,
	ADDRESS_LINE,
	ADDRESS_GEO,
	CITY,
	COUNTRY_CODE_ISO,
	INSTAGRAM_LINK,
	TELEGRAM_LINK,
	WHATSAPP_URL,
} from "@/config/contacts";

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
	telephone: ALL_PHONES,
	priceRange: "$$",
	address: {
		"@type": "PostalAddress",
		streetAddress: ADDRESS_LINE,
		addressLocality: CITY,
		addressCountry: COUNTRY_CODE_ISO,
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: ADDRESS_GEO.latitude,
		longitude: ADDRESS_GEO.longitude,
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
	sameAs: [INSTAGRAM_LINK, WHATSAPP_URL, TELEGRAM_LINK],
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
