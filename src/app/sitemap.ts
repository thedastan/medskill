import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const SITE = "https://www.medskill.com.kg";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return [
		{
			url: `${SITE}/`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		...services.map((s) => ({
			url: `${SITE}/${s.slug}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
