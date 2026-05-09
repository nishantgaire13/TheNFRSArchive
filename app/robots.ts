import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/standards";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: "*", allow: "/" },
			{ userAgent: "*", disallow: ["/api/", "/404", "/500", "/preview"] },
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
