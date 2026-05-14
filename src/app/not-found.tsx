import Link from "next/link";
import { services } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Страница не найдена",
	robots: { index: false, follow: false },
};

const NotFound = () => {
	return (
		<section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#f3feff] to-white px-5 py-16">
			<div className="text-center max-w-[560px]">
				<p className="text-[#16AEC0] font-[700] text-[80px] md:text-[120px] leading-none tracking-tight">
					404
				</p>
				<h1 className="text-[#0a9bb4] font-[700] text-[24px] md:text-[32px] leading-tight mt-2 mb-3">
					Страница не найдена
				</h1>
				<p className="text-[#444] text-[15px] md:text-[17px] leading-snug mb-8">
					Адрес неверный или страница была перенесена. Если нужна срочная
					помощь — звоните, мы работаем круглосуточно.
				</p>

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
					<Link
						href="/"
						className="inline-flex items-center justify-center bg-[#16AEC0] hover:bg-[#0a9bb4] text-white text-[16px] font-[600] rounded-[12px] h-[52px] px-6 shadow-[0_6px_16px_-4px_rgba(22,174,192,0.5)] active:scale-[0.98] transition-all">
						На главную
					</Link>
					<Link
						href="tel:+996700333636"
						className="inline-flex items-center justify-center bg-white hover:bg-[#f3feff] text-[#16AEC0] text-[16px] font-[600] border border-[#16AEC0]/25 rounded-[12px] h-[52px] px-6 transition-colors">
						Позвонить нам
					</Link>
				</div>

				<div className="mt-12">
					<p className="text-[#0a9bb4] font-[600] text-[14px] uppercase tracking-wider mb-4">
						Наши услуги
					</p>
					<div className="flex flex-wrap items-center justify-center gap-2">
						{services.map((s) => (
							<Link
								key={s.slug}
								href={`/${s.slug}`}
								className="inline-flex items-center bg-[#e6f9fc] hover:bg-[#16AEC0] hover:text-white text-[#0a7d8c] text-[13px] md:text-[14px] font-[500] px-3 py-1.5 rounded-full border border-[#16AEC0]/15 transition-colors">
								{s.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
