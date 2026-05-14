import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return [
		{
			url: `${SITE_URL}/`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		...services.map((s) => ({
			url: `${SITE_URL}/${s.slug}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
