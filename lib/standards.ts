import indexData from "@/content/standards-index.json";

export interface StandardEntry {
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
	summary: string;
	heroMotif?: string;
	relatedStandards?: string[];
	lastReviewed?: string;
}

export const standards: StandardEntry[] = indexData as StandardEntry[];

export function getStandard(slug: string): StandardEntry | undefined {
	return standards.find((s) => s.slug === slug);
}

export function getStandardsByTopic(topic: string): StandardEntry[] {
	return standards.filter((s) => s.topic === topic);
}

export function getAllSlugs(): string[] {
	return standards.map((s) => s.slug);
}

export function getRelatedStandards(slugs: string[]): StandardEntry[] {
	return slugs
		.map((s) => standards.find((entry) => entry.slug === s))
		.filter((s): s is StandardEntry => s !== undefined);
}

export interface CarveOutRow {
	slug: string;
	nfrsNumber: string;
	title: string;
	status: StandardEntry["status"];
	detail: string;
	effectiveDate: string;
	impact: "HIGH" | "MEDIUM" | "LOW";
}

export interface ResolvedCarveOutRow {
	slug: string;
	nfrsNumber: string;
	title: string;
	status: "resolved";
	detail: string;
	effectiveDate: string;
	impact: "HIGH" | "MEDIUM" | "LOW";
}

// Active carve-outs (currently in force)
export const activeCarveOutRows: CarveOutRow[] = [
	{
		slug: "nfrs-9",
		nfrsNumber: "NFRS 9",
		title: "Financial Instruments",
		status: "carve-out",
		detail:
			"Effective interest rate method (Para 5.4) deferred for banks and financial institutions (BFIs)",
		effectiveDate: "2022-07-15",
		impact: "HIGH",
	},
	{
		slug: "nfrs-9",
		nfrsNumber: "NFRS 9",
		title: "Financial Instruments",
		status: "carve-out",
		detail:
			"Expected credit loss model (Para 5.5) — incurred loss model permitted for BFIs; deferral extended by ASB Nepal 172nd Board Meeting, August 2025",
		effectiveDate: "2022-07-15",
		impact: "HIGH",
	},
];

// Resolved carve-outs (expired — shown in historical section)
export const resolvedCarveOutRows: ResolvedCarveOutRow[] = [
	{
		slug: "nfrs-17",
		nfrsNumber: "NFRS 17",
		title: "Insurance Contracts",
		status: "resolved",
		detail:
			"Effective date deferred from 16 July 2023 to 16 July 2024 — resolved, NFRS 17 now mandatory from 17 July 2024",
		effectiveDate: "2024-07-16",
		impact: "MEDIUM",
	},
	{
		slug: "nfrs-3",
		nfrsNumber: "NFRS 3",
		title: "Business Combinations",
		status: "resolved",
		detail:
			"Board explanatory note on accounting for difference arising from swap ratios in BFI mergers — permitted alternative treatment",
		effectiveDate: "2022-07-15",
		impact: "MEDIUM",
	},
];

// Historical carve-outs (superseded by NFRS 2018)
export const historicalCarveOutRows: ResolvedCarveOutRow[] = [
	{
		slug: "nfrs-10",
		nfrsNumber: "NFRS 10 / NAS 28 / NAS 34",
		title: "Consolidated Financial Statements",
		status: "resolved",
		detail:
			"Early carve-outs (2018–2022) for uniform accounting policies in consolidation, equity method, and interim reporting — all superseded by NFRS 2018",
		effectiveDate: "",
		impact: "LOW",
	},
];

export function getCarveOutRows(): CarveOutRow[] {
	return activeCarveOutRows;
}

export function getResolvedCarveOutRows(): ResolvedCarveOutRow[] {
	return resolvedCarveOutRows;
}

export function getHistoricalCarveOutRows(): ResolvedCarveOutRow[] {
	return historicalCarveOutRows;
}

export const topics = [
	{ slug: "revenue", label: "Revenue" },
	{ slug: "leases", label: "Leases" },
	{ slug: "assets", label: "Assets" },
	{ slug: "financial-instruments", label: "Financial instruments" },
	{ slug: "insurance", label: "Insurance" },
	{ slug: "taxes", label: "Income taxes" },
	{ slug: "liabilities", label: "Liabilities" },
	{ slug: "presentation", label: "Presentation & disclosure" },
	{ slug: "group-accounts", label: "Group accounts" },
	{ slug: "employee-benefits", label: "Employee benefits" },
] as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nfrs-archive.vercel.app";
