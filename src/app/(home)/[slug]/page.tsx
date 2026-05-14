import { Metadata } from "next";
import { notFound } from "next/navigation";
import Detail from "@/components/pages/detail/Detail";
import { services } from "@/lib/services";
import StructuredData from "@/lib/StructuredData";

const SITE_URL = "https://medskill.com.kg";

interface Params {
	slug: string;
}

export const dynamicParams = false;

const buildServiceJsonLd = (service: (typeof services)[0]) => ({
	"@context": "https://schema.org",
	"@type": "MedicalService",
	name: service.title,
	description: service.descriptions.map((d) => d.description).join(" "),
	provider: {
		"@type": "MedicalBusiness",
		name: "MedSkill",
		telephone: service.contact[0]?.phone,
		url: SITE_URL,
		address: {
			"@type": "PostalAddress",
			streetAddress: "ул. Ахунбаева 2/1",
			addressLocality: "Бишкек",
			addressCountry: "KG",
		},
	},
	image: `${SITE_URL}${service.image.src}`,
	url: `${SITE_URL}/${service.slug}`,
});

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const service = services.find((el) => el.slug === slug);

	if (!service) {
		return {
			title: "Услуга не найдена",
			robots: { index: false, follow: false },
		};
	}

	const title = `${service.title} — Скорая помощь Бишкек`;
	const description = `${service.title}. ${
		service.descriptions[0]?.description || ""
	} Звоните: ${service.contact[0]?.phone}. Работаем 24/7.`;
	const canonical = `${SITE_URL}/${service.slug}`;

	return {
		title,
		description,
		alternates: { canonical },
		openGraph: {
			title,
			description,
			type: "website",
			url: canonical,
			images: [
				{
					url: service.image.src,
					width: 1200,
					height: 630,
					alt: service.title,
				},
			],
			siteName: "MedSkill",
			locale: "ru_RU",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [service.image.src],
		},
	};
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return services.map((service) => ({ slug: service.slug }));
}

const Page = async ({ params }: { params: Promise<Params> }) => {
	const { slug } = await params;
	const service = services.find((s) => s.slug === slug);

	if (!service) notFound();

	return (
		<>
			<StructuredData
				data={buildServiceJsonLd(service)}
				id={`service-${slug}`}
			/>
			<Detail slug={slug} />
		</>
	);
};

export default Page;
