// app/(home)/[slug]/page.tsx

import { Metadata } from "next";
import Detail from "@/components/pages/detail/Detail";
import { services } from "@/lib/services";
import StructuredData from "@/lib/StructuredData";

// Тип для параметров
interface Params {
  slug: string;
}

// Генерация структурированных данных (Schema.org) — опционально
const generateServiceStructuredData = (service: (typeof services)[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": service.title,
    "description": service.descriptions.map(d => d.description).join(" "),
    "provider": {
      "@type": "Organization",
      "name": "MedSkill",
      "telephone": service.contact[0]?.phone,
      "url": "https://www.medskill.com.kg"
    },
    "image": service.image.src,
    "url": `https://www.medskill.com.kg/${service.slug}`
  };
};

// Генерация метаданных
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
	const { slug } = await params; // Распаковываем Promise

	const service = services.find((el) => el.slug === slug);

	if (!service) {
		return {
			title: "Услуга не найдена | MedSkill",
			description: "Запрашиваемая услуга не существует.",
			alternates: {
				canonical: "https://www.medskill.com.kg/404",
			},
		};
	}

	const title = `${service.title} | MedSkill`;
	const description = `Скорая медицинская помощь ${service.title.toLowerCase()}. ${service.descriptions[0]?.description || ""} Вызов врача на дом или срочная транспортировка. Свяжитесь с нами: ${service.contact[0]?.phone}.`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://www.medskill.com.kg/${service.slug}`, // ✅ Без пробелов!
			images: [
				{
					url: service.image.src,
					width: 1200,
					height: 630,
					alt: service.title,
				},
			],
			siteName: "MedSkill",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [service.image.src],
		},
		alternates: {
			canonical: `https://www.medskill.com.kg/${service.slug}`, // ✅ Без пробелов!
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

// Генерация статических путей для SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return services.map((service) => ({
		slug: service.slug,
	}));
}

// Компонент страницы
const Page = async ({ params }: { params: Promise<Params> }) => {
	const { slug } = await params;
	const service = services.find((s) => s.slug === slug);

	if (!service) {
		return <p>Услуга не найдена</p>;
	}

	return (
		<>
			<StructuredData
				data={generateServiceStructuredData(service)}
				id={`service-${slug}`}
			/>
			<Detail slug={slug} />
		</>
	);
};

export default Page;