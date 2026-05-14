// Канонический URL сайта.
// Приоритет:
//   1. SITE_URL — явная переменная окружения (рекомендуется для прода)
//   2. VERCEL_PROJECT_PRODUCTION_URL — авто-переменная Vercel с продакшен-доменом
//   3. fallback на medskill.com.kg
//
// Для всех канонических ссылок (sitemap, robots, structured data, OG, /api/call)
// важно отдавать ОДИН и тот же URL по всему сайту.
export const SITE_URL = (() => {
	const explicit = process.env.SITE_URL;
	if (explicit) return explicit.replace(/\/+$/, "");

	const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
	if (vercelProd) return `https://${vercelProd.replace(/\/+$/, "")}`;

	return "https://medskill.com.kg";
})();
