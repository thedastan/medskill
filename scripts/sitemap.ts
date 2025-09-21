import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
	const links = [{ url: "/", changefreq: "daily", priority: 1.0 }];

	const stream = new SitemapStream({ hostname: "https://medskill.com.kg/" });
	res.writeHead(200, { "Content-Type": "application/xml" });

	const xml = await streamToPromise(Readable.from(links).pipe(stream));
	res.end(xml.toString());
};

export default sitemap;