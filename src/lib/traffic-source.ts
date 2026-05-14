// Определяем человекочитаемый источник трафика для заявки —
// по URL страницы (с UTM/gclid метками) и по document.referrer (откуда зашёл).

const KNOWN_SEARCH = ["google.", "yandex.", "bing.", "duckduckgo.", "yahoo."];
const KNOWN_SOCIAL: Record<string, string> = {
	"instagram.com": "Instagram",
	"facebook.com": "Facebook",
	"fb.com": "Facebook",
	"t.me": "Telegram",
	"telegram.me": "Telegram",
	"vk.com": "VK",
	"twitter.com": "Twitter / X",
	"x.com": "Twitter / X",
	"tiktok.com": "TikTok",
	"youtube.com": "YouTube",
	"whatsapp.com": "WhatsApp",
	"linkedin.com": "LinkedIn",
};

const safeHostname = (raw?: string | null): string | null => {
	if (!raw) return null;
	try {
		return new URL(raw).hostname.toLowerCase().replace(/^www\./, "");
	} catch {
		return null;
	}
};

const safeParams = (raw?: string | null): URLSearchParams | null => {
	if (!raw) return null;
	try {
		return new URL(raw).searchParams;
	} catch {
		return null;
	}
};

export interface TrafficSourceInput {
	pageUrl?: string | null; // URL страницы, с которой отправили форму (содержит gclid и т.п.)
	referrer?: string | null; // document.referrer — откуда зашли на сайт
}

export const detectTrafficSource = ({
	pageUrl,
	referrer,
}: TrafficSourceInput): string => {
	const params = safeParams(pageUrl);
	const refHost = safeHostname(referrer);

	if (params) {
		// Google Ads
		if (
			params.get("gclid") ||
			params.get("gbraid") ||
			params.get("gad_source")
		) {
			const campaign = params.get("gad_campaignid");
			return campaign
				? `Google Ads (кампания ${campaign})`
				: "Google Ads";
		}

		// Yandex Direct
		if (params.get("yclid") || params.get("ymclid")) {
			return "Yandex Direct";
		}

		// Facebook / Meta Ads
		if (params.get("fbclid")) {
			return "Facebook / Instagram Ads";
		}

		// TikTok Ads
		if (params.get("ttclid")) {
			return "TikTok Ads";
		}

		// Произвольные UTM-метки
		const utmSource = params.get("utm_source");
		const utmMedium = params.get("utm_medium");
		const utmCampaign = params.get("utm_campaign");
		if (utmSource || utmMedium || utmCampaign) {
			const parts = [utmSource, utmMedium, utmCampaign].filter(Boolean);
			return `UTM: ${parts.join(" / ")}`;
		}
	}

	if (refHost) {
		// Поисковики
		if (KNOWN_SEARCH.some((s) => refHost.includes(s))) {
			const engine = refHost.includes("google")
				? "Google"
				: refHost.includes("yandex")
					? "Yandex"
					: refHost.includes("bing")
						? "Bing"
						: refHost;
			return `Поиск ${engine}`;
		}

		// Соцсети
		for (const [host, name] of Object.entries(KNOWN_SOCIAL)) {
			if (refHost === host || refHost.endsWith(`.${host}`)) {
				return `Соцсеть: ${name}`;
			}
		}

		// Свой же домен — внутренний переход
		if (refHost.includes("medskill.com.kg")) {
			return "Внутренний переход";
		}

		// Любой другой реферал
		return `Реферал: ${refHost}`;
	}

	return "Прямой заход";
};
