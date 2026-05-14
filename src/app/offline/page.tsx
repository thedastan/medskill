import Link from "next/link";
import type { Metadata } from "next";
import { PHONE_PRIMARY, TEL_HREF, formatPhone } from "@/config/contacts";

export const metadata: Metadata = {
	title: "Нет соединения",
	robots: { index: false, follow: false },
};

const Offline = () => (
	<section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#f3feff] to-white px-5 py-16">
		<div className="text-center max-w-[480px]">
			<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#16AEC0]/15 text-[#16AEC0] mb-6">
				<svg
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true">
					<line x1="1" y1="1" x2="23" y2="23" />
					<path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
					<path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
					<path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
					<path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
					<path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
					<line x1="12" y1="20" x2="12.01" y2="20" />
				</svg>
			</div>

			<h1 className="text-[#0a9bb4] font-[700] text-[26px] md:text-[32px] leading-tight mb-3">
				Нет соединения
			</h1>
			<p className="text-[#444] text-[15px] md:text-[17px] leading-snug mb-8">
				Похоже, интернет пропал. Когда сеть появится — страница откроется
				автоматически. А если нужна срочная помощь — звоните прямо сейчас.
			</p>

			<Link
				href={TEL_HREF(PHONE_PRIMARY)}
				className="inline-flex items-center justify-center gap-2 bg-[#16AEC0] hover:bg-[#0a9bb4] text-white text-[17px] font-[600] rounded-[12px] h-[56px] px-7 shadow-[0_6px_18px_-4px_rgba(22,174,192,0.5)] active:scale-[0.98] transition-all">
				📞 {formatPhone(PHONE_PRIMARY)}
			</Link>
		</div>
	</section>
);

export default Offline;
