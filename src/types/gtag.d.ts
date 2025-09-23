// types/gtag.d.ts

interface GtagEventParams {
	send_to: string;
	value?: number;
	currency?: string;
	event_callback?: () => void;
	[key: string]: unknown; // ✅ Заменяем any → unknown (безопасная альтернатива)
}

interface Gtag {
	(command: 'event', action: string, params: GtagEventParams): void;
	(command: 'config', targetId: string, config?: Record<string, unknown>): void;
	(command: 'js', config: Date): void;
	(...args: unknown[]): void; // ✅ Заменяем any[] → unknown[]
}

declare global {
	interface Window {
		gtag?: Gtag;
	}
}

export {};