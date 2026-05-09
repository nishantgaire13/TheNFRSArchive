import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const indexPath = path.join(ROOT, "content", "standards-index.json");
const mdxDir = path.join(ROOT, "content", "standards");
const outPath = path.join(ROOT, "public", "search-index.json");

const indexData = JSON.parse(fs.readFileSync(indexPath, "utf-8"));

function parseFrontmatter(source) {
	const match = source.match(/^---\n([\s\S]*?)\n---/);
	if (!match) return {};
	const fm = {};
	for (const line of match[1].split("\n")) {
		const colonIdx = line.indexOf(":");
		if (colonIdx === -1) continue;
		const key = line.slice(0, colonIdx).trim();
		let val = line.slice(colonIdx + 1).trim();
		if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
		if (val === "[]") val = [];
		fm[key] = val;
	}
	return fm;
}

const mdxSlugs = new Set();
if (fs.existsSync(mdxDir)) {
	for (const file of fs.readdirSync(mdxDir)) {
		if (file.endsWith(".mdx")) {
			const slug = file.replace(/\.mdx$/, "");
			mdxSlugs.add(slug);
			const source = fs.readFileSync(path.join(mdxDir, file), "utf-8");
			const fm = parseFrontmatter(source);
			const existing = indexData.find((s) => s.slug === slug);
			if (existing && fm.lastReviewed) {
				existing.lastReviewed = fm.lastReviewed;
			}
		}
	}
}

const searchEntries = indexData.map((s) => ({
	slug: s.slug,
	nfrsNumber: s.nfrsNumber,
	ifrsEquivalent: s.ifrsEquivalent,
	title: s.title,
	topic: s.topic,
	keywords: s.keywords,
	summary: s.summary,
	status: s.status,
}));

fs.writeFileSync(outPath, JSON.stringify(searchEntries), "utf-8");
console.log(`search-index.json: ${searchEntries.length} entries written`);
