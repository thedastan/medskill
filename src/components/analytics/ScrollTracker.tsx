"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

const THRESHOLDS = [25, 50, 75, 100];

const ScrollTracker = () => {
	useEffect(() => {
		const fired = new Set<number>();

		const onScroll = () => {
			const doc = document.documentElement;
			const total = doc.scrollHeight - doc.clientHeight;
			if (total <= 0) return;
			const pct = (doc.scrollTop / total) * 100;
			for (const t of THRESHOLDS) {
				if (pct >= t && !fired.has(t)) {
					fired.add(t);
					trackEvent("scroll_depth", { depth: t });
				}
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return null;
};

export default ScrollTracker;
