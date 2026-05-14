// Единый источник контактных данных. Меняете тут — меняется по всему сайту,
// в Telegram-сообщениях, structured data, sitemap, sticky-CTA и т.д.
// Любую строку можно переопределить переменной окружения с тем же именем.

const env = (key: string, fallback: string): string =>
	process.env[key]?.trim() || fallback;

// Телефоны (международный формат, только цифры с +)
export const PHONE_PRIMARY = env("PHONE_PRIMARY", "+996700333636");
export const PHONE_SECONDARY = env("PHONE_SECONDARY", "+996552333636");
export const PHONE_TERTIARY = env("PHONE_TERTIARY", "+996776333636");

// WhatsApp использует тот же номер что и PRIMARY по умолчанию
export const WHATSAPP_NUMBER = env("WHATSAPP_NUMBER", "996700333636");

// Соцсети
export const TELEGRAM_LINK = env(
	"TELEGRAM_LINK",
	"https://t.me/+996550822451"
);
export const INSTAGRAM_LINK = env(
	"INSTAGRAM_LINK",
	"https://www.instagram.com/med.skill.kg/"
);

// Адрес
export const ADDRESS_LINE = env("ADDRESS_LINE", "ул. Ахунбаева 2/1");
export const CITY = env("CITY", "Бишкек");
export const COUNTRY_CODE_ISO = env("COUNTRY_CODE_ISO", "KG");
export const ADDRESS_MAP_URL = env(
	"ADDRESS_MAP_URL",
	"https://www.google.com/maps/place/2+%D1%83%D0%BB.+%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.841181,74.6298258,17z"
);
export const ADDRESS_GEO = {
	latitude: Number(env("ADDRESS_LAT", "42.841181")),
	longitude: Number(env("ADDRESS_LNG", "74.6320145")),
};

// ───────── Производные форматы (вычисляются автоматически) ─────────

export const ALL_PHONES = [PHONE_PRIMARY, PHONE_SECONDARY, PHONE_TERTIARY];

export const TEL_HREF = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

// "+996700333636" → "+996 (700) 333-636"
export const formatPhone = (phone: string): string => {
	const d = phone.replace(/\D/g, "");
	if (d.length === 12 && d.startsWith("996")) {
		return `+996 (${d.slice(3, 6)}) ${d.slice(6, 9)}-${d.slice(9)}`;
	}
	return phone;
};

// "+996700333636" → "+996 700 333 636"
export const formatPhoneSpaces = (phone: string): string => {
	const d = phone.replace(/\D/g, "");
	if (d.length === 12 && d.startsWith("996")) {
		return `+996 ${d.slice(3, 6)} ${d.slice(6, 9)} ${d.slice(9)}`;
	}
	return phone;
};
