import type { Metadata } from "next";
import {
	getCarveOutRows,
	getResolvedCarveOutRows,
	getHistoricalCarveOutRows,
	SITE_URL,
} from "@/lib/standards";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatCard } from "@/components/ui/StatCard";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { CarveOutsCollage } from "@/components/illustrations/CarveOutsCollage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CarveOutFilters } from "./CarveOutFilters";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
	title: "Every NFRS carve-out from IFRS (2026) | The NFRS Archive",
	description:
		"A comprehensive registry of every NFRS deviation from IFRS, with source citations and effective dates. For Nepali auditors and CA/ACCA students.",
	alternates: { canonical: `${SITE_URL}/carve-outs` },
	openGraph: {
		title: "Every NFRS carve-out from IFRS (2026) | The NFRS Archive",
		description:
			"Complete registry of NFRS carve-outs, deferrals, and non-adoptions from IFRS.",
		type: "website",
		url: `${SITE_URL}/carve-outs`,
	},
	twitter: { card: "summary_large_image" },
};

export default function CarveOutsPage() {
	const activeRows = getCarveOutRows();
	const resolvedRows = getResolvedCarveOutRows();
	const historicalRows = getHistoricalCarveOutRows();

	const totalStandards = 42;
	const activeCarveOuts = activeRows.length;
	const deferredCount = 0;
	const alignedCount = totalStandards - 1;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: activeRows.slice(0, 10).map((row) => ({
			"@type": "Question",
			name: `What are the differences between ${row.nfrsNumber} and its IFRS equivalent?`,
			acceptedAnswer: {
				"@type": "Answer",
				text: row.detail,
			},
		})),
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-6">
				<Breadcrumbs
					items={[
						{ label: "Home", href: "/" },
						{ label: "Carve-outs", href: "/carve-outs" },
					]}
				/>
			</div>

			{/* Hero */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-14">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
					<div className="md:col-span-8">
						<Eyebrow className="mb-3">Regulatory Registry</Eyebrow>
						<h1 className="font-display text-[clamp(36px,8vw,56px)] leading-[1.05] font-light tracking-tight">
							Carve-outs
							<br />
							<em className="italic">Index 2026</em>
						</h1>
						<p className="font-serif text-lg text-text-muted mt-5 max-w-[540px] leading-relaxed">
							A comprehensive registry of every NFRS deviation from IFRS, with
							source citations and effective dates.
						</p>
					</div>
					<div className="md:col-span-4 flex items-center">
						<IllustrationFrame size="wide" alt="Carve-outs registry illustration">
							<CarveOutsCollage className="text-accent w-full h-full" />
						</IllustrationFrame>
					</div>
				</div>
			</section>

			{/* Stats row */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-8">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					<StatCard label="Total standards" value={String(totalStandards)} />
					<StatCard
						label="Active carve-outs"
						value={String(activeCarveOuts)}
						deltaDirection="up"
					/>
					<StatCard label="Deferred" value={String(deferredCount)} />
					<StatCard label="Fully aligned" value={String(alignedCount)} />
				</div>
			</section>

			{/* Source note */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-6">
				<Callout variant="info">
					<p className="font-sans text-sm text-text-muted">
						Carve-out data sourced directly from ASB Nepal (asbnepal.gov.np).
						Last verified: May 2026. Source:{" "}
						<a
							href="https://asbnepal.gov.np"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:underline"
						>
							143rd Board Meeting
						</a>{" "}
						(2079-03-31) and{" "}
						<a
							href="https://asbnepal.gov.np"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:underline"
						>
							172nd Board Meeting
						</a>{" "}
						(2082-04-30).
					</p>
				</Callout>
			</section>

			{/* Registry table */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-16">
				<CarveOutFilters
					rows={activeRows}
					resolvedRows={resolvedRows}
					historicalRows={historicalRows}
				/>
			</section>
		</>
	);
}
