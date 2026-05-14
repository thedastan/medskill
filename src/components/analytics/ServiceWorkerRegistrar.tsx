"use client";
import { useEffect } from "react";

const ServiceWorkerRegistrar = () => {
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!("serviceWorker" in navigator)) return;
		if (process.env.NODE_ENV !== "production") return;

		const register = () => {
			navigator.serviceWorker
				.register("/sw.js", { scope: "/" })
				.catch((err) => {
					console.warn("SW registration failed:", err);
				});
		};

		// Регистрируем после полной загрузки, чтобы не конкурировать
		// с критическими запросами.
		if (document.readyState === "complete") {
			register();
		} else {
			window.addEventListener("load", register, { once: true });
		}
	}, []);

	return null;
};

export default ServiceWorkerRegistrar;
