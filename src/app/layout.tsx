import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "@/styles/globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";
import { SITE_URL } from "@/lib/site";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Скорая помощь в Бишкеке — MedSkill",
		template: "%s | MedSkill",
	},
	description:
		"Частная скорая помощь в Бишкеке. Приезжаем в течение 15 минут. Работаем 24/7. Транспортировка, капельницы на дому, вызов узких специалистов.",
	keywords: [
		"скорая помощь Бишкек",
		"частная скорая помощь",
		"медицинская помощь на дому",
		"капельницы на дому",
		"вызов врача Бишкек",
		"санавиация",
		"экстренная помощь Бишкек",
		"транспортировка больных",
		"скорая 24/7",
	],
	openGraph: {
		title: "Скорая помощь в Бишкеке — MedSkill",
		description:
			"Частная скорая помощь в Бишкеке. Приедем в течение 15 минут. Работаем 24/7.",
		url: SITE_URL,
		siteName: "MedSkill",
		locale: "ru_RU",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Скорая помощь в Бишкеке — MedSkill",
		description: "Приезжаем в течение 15 минут. Работаем 24/7.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: SITE_URL,
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/logo192.png",
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	themeColor: "#16AEC0",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<LayoutPage>{children}</LayoutPage>

				{/* Google Tag (gtag.js) */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=AW-17579381903"
					async
					strategy="afterInteractive"
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17579381903');
          `}
				</Script>
			</body>
		</html>
	);
}
