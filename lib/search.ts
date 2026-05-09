import Fuse from "fuse.js";

export interface SearchEntry {
	slug: string;
	nfrsNumber: string;
	ifrsEquivalent: string;
	title: string;
	topic: string;
	keywords: string[];
	summary: string;
	status: "aligned" | "carve-out" | "deferred" | "not-adopted";
}

let fuseInstance: Fuse<SearchEntry> | null = null;
let indexPromise: Promise<Fuse<SearchEntry>> | null = null;

async function loadIndex(): Promise<Fuse<SearchEntry>> {
	if (fuseInstance) return fuseInstance;
	if (indexPromise) return indexPromise;

	indexPromise = fetch("/search-index.json")
		.then((r) => r.json())
		.then((data: SearchEntry[]) => {
			fuseInstance = new Fuse(data, {
				keys: [
					{ name: "nfrsNumber", weight: 3 },
					{ name: "ifrsEquivalent", weight: 2 },
					{ name: "title", weight: 2 },
					{ name: "keywords", weight: 1.5 },
					{ name: "summary", weight: 0.5 },
					{ name: "topic", weight: 0.5 },
				],
				threshold: 0.35,
				includeScore: true,
				minMatchCharLength: 1,
			});
			return fuseInstance;
		});

	return indexPromise;
}

export async function search(query: string, limit = 8): Promise<SearchEntry[]> {
	if (!query || query.length < 1) return [];
	const fuse = await loadIndex();
	return fuse.search(query, { limit }).map((r) => r.item);
}

export function preloadSearchIndex(): void {
	loadIndex();
}
