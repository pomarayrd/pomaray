import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: ["Applebot", "Bingbot", "Googlebot"],
				disallow: ["/admin/*"],
			},
		],
		sitemap: "https://pomaray.edu.do/sitemap.xml",
	};
}
