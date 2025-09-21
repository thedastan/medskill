import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "@/styles/globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";

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
	title: "Скорая помощь Бишкек - Работаем 24/7",
	description: "Приедем в течении 15 минут - Частная-Скорая помощь Бишкек",
	keywords:
		"Скорая помощь, Частная скорая помощь, Медицинская помощь, Экстренная помощь, Бишкек, Скорая медицинская помощь, Скорая помощь в Бишкеке, Медицинская помощь на дому, Экстренная медицинская помощь, Скорая помощь 24",
	openGraph: {
		title: "Скорая помощь Бишкек - Работаем 24/7",
		description: "Приедем в течении 15 минут - Частная-Скорая помощь Бишкек",
		url: "https://medskill.com.kg",
		siteName: "Скорая помощь Бишкек",
	},
	robots: {
		index: true,
		follow: true,
	},
	metadataBase: new URL("https://medskill.com.kg"),
	icons: {
		icon: "/favicon.ico",
		apple: "/logo192.png",
	},
	manifest: "/manifest.json",
	themeColor: "#000000",
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

				{/* Conversion Event */}
				<Script id="gtag-conversion" strategy="afterInteractive">
					{`
            gtag('event', 'conversion', {
              'send_to': 'AW-17579366246/uUG_CICGkp0bEOauv75B'
            });
          `}
				</Script>
			</body>
		</html>
	);
}
