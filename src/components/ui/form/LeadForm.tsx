"use client";
import { useEffect, useRef, useState } from "react";
import { reportPhoneConversion, trackEvent } from "@/lib/gtag";
import {
	PHONE_PRIMARY,
	TEL_HREF,
	formatPhoneSpaces,
} from "@/config/contacts";

type Status = "idle" | "loading" | "success" | "error";

interface LeadFormProps {
	source?: string;
	className?: string;
}

interface Country {
	id: string;
	code: string;
	flag: string;
	name: string;
	digits: number;
	groups: [number, number, number] | [number, number, number, number];
}

const COUNTRIES: Country[] = [
	{
		id: "kg",
		code: "+996",
		flag: "🇰🇬",
		name: "Кыргызстан",
		digits: 9,
		groups: [3, 3, 3],
	},
	{
		id: "ru",
		code: "+7",
		flag: "🇷🇺",
		name: "Россия",
		digits: 10,
		groups: [3, 3, 2, 2],
	},
	{
		id: "kz",
		code: "+7",
		flag: "🇰🇿",
		name: "Казахстан",
		digits: 10,
		groups: [3, 3, 2, 2],
	},
	{
		id: "uz",
		code: "+998",
		flag: "🇺🇿",
		name: "Узбекистан",
		digits: 9,
		groups: [2, 3, 2, 2],
	},
	{
		id: "tj",
		code: "+992",
		flag: "🇹🇯",
		name: "Таджикистан",
		digits: 9,
		groups: [2, 3, 2, 2],
	},
	{
		id: "tr",
		code: "+90",
		flag: "🇹🇷",
		name: "Турция",
		digits: 10,
		groups: [3, 3, 2, 2],
	},
];

const DEFAULT_COUNTRY = COUNTRIES[0];

const formatPhoneByCountry = (raw: string, country: Country) => {
	let digits = raw.replace(/\D/g, "");
	const codeDigits = country.code.replace(/\D/g, "");
	if (digits.startsWith(codeDigits)) digits = digits.slice(codeDigits.length);
	digits = digits.slice(0, country.digits);

	let cursor = 0;
	const chunks: string[] = [];
	for (const g of country.groups) {
		if (cursor >= digits.length) break;
		chunks.push(digits.slice(cursor, cursor + g));
		cursor += g;
	}
	return chunks.join(" ");
};

const placeholderFor = (country: Country) =>
	country.groups.map((g) => "0".repeat(g)).join(" ");

const LeadForm = ({ source = "hero", className = "" }: LeadFormProps) => {
	const [name, setName] = useState("");
	const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
	const [phone, setPhone] = useState("");
	const [pickerOpen, setPickerOpen] = useState(false);
	const [status, setStatus] = useState<Status>("idle");
	const [errorMsg, setErrorMsg] = useState("");
	const wrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!pickerOpen) return;
		const onClick = (e: MouseEvent) => {
			if (!wrapRef.current?.contains(e.target as Node)) setPickerOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setPickerOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [pickerOpen]);

	const onCountrySelect = (c: Country) => {
		setCountry(c);
		setPhone(formatPhoneByCountry(phone, c));
		setPickerOpen(false);
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (status === "loading") return;

		if (name.trim().length < 2) {
			setErrorMsg("Введите имя");
			setStatus("error");
			return;
		}

		const digits = phone.replace(/\D/g, "");
		if (digits.length !== country.digits) {
			setErrorMsg("Введите корректный номер телефона");
			setStatus("error");
			return;
		}

		const fullPhone = `${country.code} ${phone}`;

		setStatus("loading");
		setErrorMsg("");

		try {
			const res = await fetch("/api/lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					phone: fullPhone,
					source: `${source}/${country.id}`,
					referrer: typeof document !== "undefined" ? document.referrer : "",
				}),
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				if (data.error === "too_many_requests") {
					setErrorMsg("Уже отправили заявку. Подождите немного.");
				} else {
					setErrorMsg("Не удалось отправить. Позвоните нам напрямую.");
				}
				setStatus("error");
				return;
			}

			trackEvent("form_submit", { source, country: country.id });
			reportPhoneConversion();

			setStatus("success");
			setName("");
			setPhone("");
		} catch {
			setErrorMsg("Сетевая ошибка. Попробуйте позвонить.");
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<div
				className={`bg-white/95 backdrop-blur rounded-[18px] p-5 shadow-xl ${className}`}>
				<div className="flex items-start gap-3">
					<div className="w-10 h-10 rounded-full bg-[#16AEC0] text-white flex items-center justify-center text-[20px] shrink-0">
						✓
					</div>
					<div>
						<p className="text-[#16AEC0] font-[600] text-[18px]">
							Заявка принята
						</p>
						<p className="text-[#555] text-[14px] mt-1 leading-snug">
							Перезвоним в течение 2 минут. Если срочно — звоните:{" "}
							<a
								href={TEL_HREF(PHONE_PRIMARY)}
								onClick={(e) => {
									e.preventDefault();
									reportPhoneConversion(TEL_HREF(PHONE_PRIMARY));
								}}
								className="text-[#0a9bb4] font-[600] underline">
								{formatPhoneSpaces(PHONE_PRIMARY)}
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<form
			onSubmit={onSubmit}
			className={`bg-white/95 backdrop-blur rounded-[18px] p-5 shadow-xl flex flex-col gap-3 w-full max-w-[360px] ${className}`}>
			<div>
				<p className="text-[#16AEC0] font-[600] text-[18px] leading-tight">
					Перезвоним за 2 минуты
				</p>
				<p className="text-[#666] text-[13px] mt-0.5">
					Оставьте номер — врач свяжется с вами
				</p>
			</div>

			<input
				type="text"
				inputMode="text"
				autoComplete="name"
				placeholder="Ваше имя"
				value={name}
				onChange={(e) => setName(e.target.value)}
				maxLength={50}
				disabled={status === "loading"}
				className="w-full h-[48px] px-4 rounded-[12px] bg-[#f3feff] border border-[#16AEC0]/20 focus:border-[#16AEC0] outline-none text-[16px] text-[#222] placeholder:text-[#999] transition-colors"
			/>

			<div
				ref={wrapRef}
				className="relative flex h-[48px] rounded-[12px] bg-[#f3feff] border border-[#16AEC0]/20 focus-within:border-[#16AEC0] transition-colors">
				<button
					type="button"
					onClick={() => setPickerOpen((v) => !v)}
					disabled={status === "loading"}
					aria-haspopup="listbox"
					aria-expanded={pickerOpen}
					className="flex items-center gap-1.5 px-3 border-r border-[#16AEC0]/20 bg-white/70 rounded-l-[12px] hover:bg-white transition-colors shrink-0">
					<span className="text-[18px] leading-none" aria-hidden="true">
						{country.flag}
					</span>
					<span className="text-[#222] font-[500] text-[15px]">
						{country.code}
					</span>
					<svg
						className={`w-3 h-3 text-[#16AEC0] transition-transform ${pickerOpen ? "rotate-180" : ""}`}
						viewBox="0 0 12 12"
						fill="none"
						aria-hidden="true">
						<path
							d="M3 4.5l3 3 3-3"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				<input
					type="tel"
					inputMode="numeric"
					autoComplete="tel-national"
					placeholder={placeholderFor(country)}
					value={phone}
					onChange={(e) =>
						setPhone(formatPhoneByCountry(e.target.value, country))
					}
					disabled={status === "loading"}
					className="flex-1 min-w-0 px-3 bg-transparent outline-none text-[16px] text-[#222] placeholder:text-[#bbb] rounded-r-[12px]"
				/>

				{pickerOpen && (
					<ul
						role="listbox"
						className="absolute top-[calc(100%+4px)] left-0 right-0 max-h-[260px] overflow-y-auto bg-white rounded-[12px] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.2)] border border-[#16AEC0]/20 z-20 py-1">
						{COUNTRIES.map((c) => (
							<li key={c.id}>
								<button
									type="button"
									onClick={() => onCountrySelect(c)}
									className={`w-full flex items-center gap-2 px-3 py-2 text-[15px] text-left hover:bg-[#f3feff] transition-colors ${c.id === country.id ? "bg-[#f3feff]" : ""}`}>
									<span className="text-[18px] leading-none">{c.flag}</span>
									<span className="text-[#222] flex-1">{c.name}</span>
									<span className="text-[#888] text-[14px]">{c.code}</span>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>

			{status === "error" && errorMsg && (
				<p className="text-red-500 text-[13px] -my-1">{errorMsg}</p>
			)}

			<button
				type="submit"
				disabled={status === "loading"}
				className="w-full h-[52px] bg-[#16AEC0] hover:bg-[#0a9bb4] disabled:opacity-60 disabled:cursor-not-allowed text-white font-[600] text-[16px] rounded-[12px] shadow-[0_6px_16px_-4px_rgba(22,174,192,0.5)] active:scale-[0.98] transition-all">
				{status === "loading" ? "Отправляем..." : "Перезвоните мне"}
			</button>

			<p className="text-[#888] text-[11px] leading-snug text-center">
				Нажимая кнопку, вы соглашаетесь на обработку персональных данных
			</p>
		</form>
	);
};

export default LeadForm;
