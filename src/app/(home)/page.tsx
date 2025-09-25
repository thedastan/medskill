import HomeComponents from "@/components/pages/home/HomeComponents";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "Скорая помощь в Бишкеке",
	description: "Приедем в течении 15 минут - Частная-Скорая помощь Бишкек",
	keywords:
		"Скорая помощь, Частная скорая помощь, Медицинская помощь, Экстренная помощь, Бишкек, Скорая медицинская помощь, Скорая помощь в Бишкеке, Медицинская помощь на дому, Экстренная медицинская помощь, Скорая помощь 24",
	openGraph: {
		title: "Скорая помощь в Бишкеке",
		description: "Приедем в течении 15 минут - Частная Скорая помощь Бишкек",
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
};

// 👇 Вынесено сюда
export const viewport: Viewport = {
	themeColor: "#000000",
  };

const Home = () => <HomeComponents />;

export default Home;