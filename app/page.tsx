import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ClayCard } from "@/components/ui/ClayCard";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/ui/SearchBar";
import { HeroIllustration as HeroSVG } from "@/components/HeroIllustration";
import { ArchiveMotif } from "@/components/illustrations/ArchiveMotif";
import { StandardIcon } from "@/components/ui/StandardIcon";
import { standards, topics, SITE_URL } from "@/lib/standards";
import { HeroTitle, HeroDescription, HeroSearchWrapper, HeroIllustration as HeroFloat } from "@/components/home/HeroAnimated";
import { PriorityGrid, PriorityGridItem } from "@/components/home/PriorityGrid";

export const metadata: Metadata = {
	title: "The NFRS Archive",
	description:
		"Free, searchable reference comparing every Nepal Financial Reporting Standard (NFRS) with IFRS. Carve-outs, worked examples, and paragraph citations for auditors, CA/ACCA students, and accountants.",
	alternates: { canonical: SITE_URL },
	openGraph: {
		title: "The NFRS Archive",
		description:
			"Free, searchable reference comparing NFRS with IFRS. For Nepali auditors and CA/ACCA students.",
		type: "website",
		url: SITE_URL,
	},
	twitter: { card: "summary_large_image" },
};

const prioritySlugs = [
	"nfrs-15",
	"nfrs-16",
	"nfrs-9",
	"nfrs-17",
	"nas-16",
	"nas-2",
	"nas-36",
	"nas-12",
];

const priorityStandards = prioritySlugs
	.map((slug) => standards.find((s) => s.slug === slug))
	.filter(Boolean);

export default function HomePage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "The NFRS Archive",
		url: SITE_URL,
		potentialAction: {
			"@type": "SearchAction",
			target: `${SITE_URL}/search?q={search_term_string}`,
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* === HERO === */}
			<section className="relative overflow-hidden">
				<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
						{/* Left: copy */}
						<div className="lg:col-span-5 pt-4">
							<HeroTitle />
							<HeroDescription>
								A free, searchable reference showing, for each Nepali
								financial reporting standard, the IFRS treatment, the NFRS
								treatment, the practical difference, and a worked example.
							</HeroDescription>
							<HeroSearchWrapper>
								<SearchBar placeholder="Search standards…" />
								<p className="font-sans text-xs text-text-subtle mt-2.5 ml-1">
									Try:{" "}
									<Link href="/standards/nfrs-15" className="text-accent hover:underline">
										revenue
									</Link>
									{" · "}
									<Link href="/standards/nfrs-16" className="text-accent hover:underline">
										leases
									</Link>
									{" · "}
									<Link href="/carve-outs" className="text-accent hover:underline">
										carve-outs
									</Link>
								</p>
							</HeroSearchWrapper>
						</div>

						{/* Right: illustration */}
						<div className="lg:col-span-7 flex justify-center lg:justify-end">
							<HeroFloat>
								<HeroSVG className="w-full h-auto" />
							</HeroFloat>
						</div>
					</div>
				</div>
			</section>

			{/* === PRIORITY STANDARDS === */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
				<div className="flex items-baseline justify-between mb-8">
					<div>
						<Eyebrow className="mb-2">Cross-referencing the pillars</Eyebrow>
						<h2 className="font-display text-3xl font-light">
							Priority Standards
						</h2>
					</div>
					<Link
						href="/standards"
						className="font-sans text-sm text-accent hover:text-accent-hover hidden sm:inline"
					>
						View all &rarr;
					</Link>
				</div>
				<PriorityGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{priorityStandards.map((s) => {
						if (!s) return null;
						return (
							<PriorityGridItem key={s.slug}>
								<Link href={`/standards/${s.slug}`}>
									<ClayCard hover padding="md" className="h-full">
										{s.heroMotif && (
											<div className="mb-3">
												<StandardIcon motif={s.heroMotif} />
											</div>
										)}
										<h3 className="font-display text-lg font-normal">
											{s.nfrsNumber}
										</h3>
										<p className="font-serif text-sm text-text-muted mt-1 leading-snug">
											{s.title}
										</p>
									</ClayCard>
								</Link>
							</PriorityGridItem>
						);
					})}
				</PriorityGrid>
			</section>

			{/* === BROWSE BY TOPIC === */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
				<h2 className="font-display text-2xl font-light mb-6">
					Browse by topic
				</h2>
				<div className="flex flex-wrap gap-2.5">
					{topics.map((t) => (
						<Link
							key={t.slug}
							href={`/topics/${t.slug}`}
							className="font-sans text-sm px-4 py-2 rounded-pill border border-border bg-bg-elevated hover:border-accent hover:bg-accent hover:text-accent-fg transition-all duration-150"
						>
							{t.label}
						</Link>
					))}
				</div>
			</section>

			{/* === POSITIONING BLOCK === */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
					<div className="md:col-span-5">
						<ArchiveMotif className="text-accent w-full h-auto" />
					</div>
					<div className="md:col-span-7">
						<h2 className="font-display text-[clamp(28px,6vw,48px)] leading-[1.1] font-light mb-6">
							Beyond the
							<br />
							<em className="italic text-accent">static spreadsheet.</em>
						</h2>
						<p className="font-serif text-base text-text-muted leading-relaxed mb-4 max-w-lg">
							Nepali auditors, CA students, and in-house accountants currently
							cross-reference scattered PDFs to understand how NFRS departs from
							IFRS. This site replaces that workflow with a single, searchable,
							always-up-to-date reference.
						</p>
						<p className="font-serif text-base text-text-muted leading-relaxed mb-8 max-w-lg">
							Every standard is explained in original commentary, never
							reproduced text. Paragraph citations let you verify every claim
							against the authoritative source.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button variant="primary" href="/carve-outs">
								See all carve-outs
							</Button>
							<Button variant="link" href="/about">
								Our methodology
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
