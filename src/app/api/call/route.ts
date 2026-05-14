import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PHONE_RE = /^\+\d{7,15}$/;

export async function GET(req: NextRequest) {
	const raw = req.nextUrl.searchParams.get("phone") ?? "";
	const cleaned = raw.replace(/[^\d+]/g, "");
	const phone = cleaned.startsWith("+") ? cleaned : `+${cleaned}`;

	if (!PHONE_RE.test(phone)) {
		return new NextResponse("invalid phone", { status: 400 });
	}

	const tel = phone.replace(/[<>"']/g, "");

	const html = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Звоним ${tel}</title>
<meta http-equiv="refresh" content="0;url=tel:${tel}">
<style>
body{font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#16AEC0,#0a9bb4);color:#fff;padding:24px;text-align:center}
.card{max-width:360px}
h1{font-size:24px;margin:0 0 8px}
p{opacity:.9;margin:0 0 24px}
a.btn{display:inline-flex;gap:10px;align-items:center;justify-content:center;padding:18px 28px;background:#fff;color:#0a9bb4;border-radius:14px;text-decoration:none;font-weight:700;font-size:18px;box-shadow:0 8px 24px -8px rgba(0,0,0,.3)}
</style>
</head>
<body>
<div class="card">
<h1>📞 Звоним...</h1>
<p>Если набор не открылся, нажмите кнопку</p>
<a class="btn" href="tel:${tel}">Позвонить ${tel}</a>
</div>
<script>window.location.href="tel:${tel}";</script>
</body>
</html>`;

	return new NextResponse(html, {
		status: 200,
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			"Cache-Control": "no-store",
		},
	});
}
