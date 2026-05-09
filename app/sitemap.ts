import type { MetadataRoute } from "next";
import { standards, topics, SITE_URL } from "@/lib/standards";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages: MetadataRoute.Sitemap = [
		{ url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
		{ url: `${SITE_URL}/carve-outs`, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${SITE_URL}/standards`, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.3 },
		{ url: `${SITE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
		{ url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
	];

	const standardPages: MetadataRoute.Sitemap = standards.map((s) => ({
		url: `${SITE_URL}/standards/${s.slug}`,
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	const topicPages: MetadataRoute.Sitemap = topics.map((t) => ({
		url: `${SITE_URL}/topics/${t.slug}`,
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticPages, ...standardPages, ...topicPages];
}
