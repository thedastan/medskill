const TELEGRAM_API = "https://api.telegram.org";
const SITE_URL = "https://medskill.com.kg";

export interface LeadPayload {
	name: string;
	phone: string;
	source?: string;
	userAgent?: string;
	url?: string;
}

const escapeHtml = (raw: string) =>
	raw
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

// "+996 (700) 123-456" -> "+996700123456" для tel:/wa.me
const telDigits = (phone: string) => {
	const cleaned = phone.replace(/[^\d+]/g, "");
	return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
};

const waNumber = (phone: string) => phone.replace(/\D/g, "");

export async function sendLeadToTelegram(lead: LeadPayload): Promise<void> {
	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	if (!token || !chatId) {
		throw new Error(
			"TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы в окружении"
		);
	}

	const phoneDisplay = escapeHtml(lead.phone);
	const phoneTel = telDigits(lead.phone);
	const phoneWa = waNumber(lead.phone);

	const lines = [
		"🚑 <b>Новая заявка с сайта medskill.com.kg</b>",
		"",
		`👤 <b>Имя:</b> ${escapeHtml(lead.name)}`,
		`📞 <b>Телефон:</b> ${phoneDisplay}`,
	];
	if (lead.source)
		lines.push(`<b>Откуда:</b> ${escapeHtml(lead.source)}`);
	if (lead.url) lines.push(`<b>Страница:</b> ${escapeHtml(lead.url)}`);
	lines.push(
		"",
		`🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Bishkek" })}`
	);

	const replyMarkup = {
		inline_keyboard: [
			[
				{
					text: `📞 Позвонить ${phoneDisplay}`,
					url: `${SITE_URL}/api/call?phone=${encodeURIComponent(phoneTel)}`,
				},
			],
			[
				{
					text: "💬 Написать в WhatsApp",
					url: `https://wa.me/${phoneWa}`,
				},
			],
		],
	};

	const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			chat_id: chatId,
			text: lines.join("\n"),
			parse_mode: "HTML",
			disable_web_page_preview: true,
			reply_markup: replyMarkup,
		}),
	});

	if (!res.ok) {
		const detail = await res.text().catch(() => "");
		throw new Error(`Telegram API error ${res.status}: ${detail}`);
	}
}
