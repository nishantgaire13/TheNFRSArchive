import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { Callout } from "@/components/ui/Callout";
import { ParaRef } from "@/components/ui/ParaRef";
import { DifficultyContent } from "@/components/ui/DifficultyContent";

const CONTENT_DIR = path.join(process.cwd(), "content", "standards");

export interface MDXFrontmatter {
	slug: string;
	nfrsNumber: string;
	ifrsEquivalent: string;
	title: string;
	titleItalicWord?: string;
	topic: string;
	effectiveDate: string;
	status: "aligned" | "carve-out" | "deferred" | "not-adopted";
	carveOuts: string[];
	keywords: string[];
	lastReviewed?: string;
	summary: string;
	heroMotif?: string;
	relatedStandards?: string[];
}

const components = {
	Callout,
	ParaRef,
	DifficultyContent,
};

export async function getStandardMDX(slug: string) {
	const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return null;

	const source = fs.readFileSync(filePath, "utf-8");

	const { content, frontmatter } = await compileMDX<MDXFrontmatter>({
		source,
		components,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				rehypePlugins: [rehypeSlug],
			},
		},
	});

	return { content, frontmatter };
}

export function getAllMDXSlugs(): string[] {
	if (!fs.existsSync(CONTENT_DIR)) return [];
	return fs
		.readdirSync(CONTENT_DIR)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => f.replace(/\.mdx$/, ""));
}
