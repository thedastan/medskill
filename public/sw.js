// Service Worker для medskill.com.kg PWA
// Стратегии:
//  - HTML страницы: NetworkFirst → fallback на /offline при отсутствии сети
//  - Статика (JS/CSS/шрифты/картинки): CacheFirst
//  - API (/api/*): не кэшируется, только network

const CACHE_VERSION = "v1";
const STATIC_CACHE = `medskill-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `medskill-runtime-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline";

const PRECACHE_URLS = ["/", OFFLINE_URL, "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(STATIC_CACHE);
			// addAll bombs if one fails — добавляем по одному с fallback
			await Promise.all(
				PRECACHE_URLS.map((url) =>
					cache.add(url).catch(() => {
						/* ignore individual failures */
					})
				)
			);
			self.skipWaiting();
		})()
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(
				keys
					.filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
					.map((k) => caches.delete(k))
			);
			await self.clients.claim();
		})()
	);
});

self.addEventListener("fetch", (event) => {
	const req = event.request;
	const url = new URL(req.url);

	// Только тот же origin и только GET
	if (url.origin !== location.origin) return;
	if (req.method !== "GET") return;

	// API и Telegram-редирект — всегда сеть, не кэшируем
	if (url.pathname.startsWith("/api/")) return;

	// HTML / навигационные запросы — NetworkFirst с offline-fallback
	const acceptsHtml = req.headers.get("accept")?.includes("text/html");
	if (req.mode === "navigate" || acceptsHtml) {
		event.respondWith(
			(async () => {
				try {
					const fresh = await fetch(req);
					const cache = await caches.open(RUNTIME_CACHE);
					cache.put(req, fresh.clone());
					return fresh;
				} catch {
					const cached = await caches.match(req);
					if (cached) return cached;
					const offline = await caches.match(OFFLINE_URL);
					return (
						offline ||
						new Response("Нет соединения", {
							status: 503,
							headers: { "Content-Type": "text/plain; charset=utf-8" },
						})
					);
				}
			})()
		);
		return;
	}

	// Статика — CacheFirst (Next chunks, шрифты, картинки)
	const isStatic =
		url.pathname.startsWith("/_next/static/") ||
		/\.(js|css|woff2?|ttf|otf|png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);

	if (isStatic) {
		event.respondWith(
			(async () => {
				const cached = await caches.match(req);
				if (cached) return cached;
				try {
					const fresh = await fetch(req);
					if (fresh.ok) {
						const cache = await caches.open(STATIC_CACHE);
						cache.put(req, fresh.clone());
					}
					return fresh;
				} catch {
					return new Response("", { status: 504 });
				}
			})()
		);
	}
});
