import { NextRequest, NextResponse } from "next/server";
import { sendLeadToTelegram } from "@/lib/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PHONE_RE = /^[+\d][\d\s\-()]{6,19}$/;
const NAME_MAX = 50;
const PHONE_MAX = 20;

const ipLastSubmit = new Map<string, number>();
const THROTTLE_MS = 30_000;

const getClientIp = (req: NextRequest): string => {
	const fwd = req.headers.get("x-forwarded-for");
	if (fwd) return fwd.split(",")[0].trim();
	return req.headers.get("x-real-ip") ?? "unknown";
};

export async function POST(req: NextRequest) {
	let body: unknown;
	try {
		body = await req.json();
	} catch {
		return NextResponse.json({ error: "invalid_json" }, { status: 400 });
	}

	if (!body || typeof body !== "object") {
		return NextResponse.json({ error: "invalid_body" }, { status: 400 });
	}

	const { name, phone, source } = body as Record<string, unknown>;

	if (typeof name !== "string" || typeof phone !== "string") {
		return NextResponse.json({ error: "missing_fields" }, { status: 400 });
	}

	const trimmedName = name.trim().slice(0, NAME_MAX);
	const trimmedPhone = phone.trim().slice(0, PHONE_MAX);

	if (trimmedName.length < 2) {
		return NextResponse.json({ error: "name_too_short" }, { status: 400 });
	}
	if (!PHONE_RE.test(trimmedPhone)) {
		return NextResponse.json({ error: "phone_invalid" }, { status: 400 });
	}

	const ip = getClientIp(req);
	const now = Date.now();
	const last = ipLastSubmit.get(ip);
	if (last && now - last < THROTTLE_MS) {
		return NextResponse.json({ error: "too_many_requests" }, { status: 429 });
	}
	ipLastSubmit.set(ip, now);

	try {
		await sendLeadToTelegram({
			name: trimmedName,
			phone: trimmedPhone,
			source: typeof source === "string" ? source.slice(0, 50) : undefined,
			userAgent: req.headers.get("user-agent") ?? undefined,
			url: req.headers.get("referer") ?? undefined,
		});
	} catch (err) {
		console.error("[lead] telegram send failed:", err);
		return NextResponse.json({ error: "telegram_failed" }, { status: 502 });
	}

	return NextResponse.json({ ok: true });
}
