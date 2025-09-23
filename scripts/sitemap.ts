import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

class PublicPage {
	HOME = "/";
	TRANSPARTIROVKA = "/transportirovka-sanaviatsiya";
	MEROPRIATI = "/soprovozhdenie-meropriyatiya";
	DOMU = "/kapelnici-na-domu";
	SPESIAL = "/vysov-uzkih-specialistov";
	SROCHNO = "/srochnie-vizovi";
}

const PAGE = new PublicPage();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const links = [
		{ url: PAGE.HOME, changefreq: "daily", priority: 1.0 },
		{ url: PAGE.TRANSPARTIROVKA, changefreq: "monthly", priority: 0.8 },
		{ url: PAGE.MEROPRIATI, changefreq: "monthly", priority: 0.8 },
		{ url: PAGE.DOMU, changefreq: "monthly", priority: 0.6 },
		{ url: PAGE.SPESIAL, changefreq: "monthly", priority: 0.6 },
		{ url: PAGE.SROCHNO, changefreq: "monthly", priority: 0.6 },
	];

	const stream = new SitemapStream({
		hostname: "https://medskill.com.kg/",
	});

	res.writeHead(200, { "Content-Type": "application/xml" });
	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		res.end(data.toString())
	);
}
