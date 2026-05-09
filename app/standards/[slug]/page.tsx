import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStandardMDX, getAllMDXSlugs } from "@/lib/mdx";
import { getStandard, getRelatedStandards, standards, SITE_URL } from "@/lib/standards";
import { getStandardPageData } from "@/lib/standard-data";
import { StandardBgIllustration } from "@/components/illustrations/StandardBgIllustration";
import { StandardIcon } from "@/components/ui/StandardIcon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { ClayCard } from "@/components/ui/ClayCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";
import { DifficultyProvider } from "@/components/ui/DifficultyProvider";
import { DifficultySelector } from "@/components/ui/DifficultySelector";
import { SummaryMetrics } from "@/components/standards/SummaryMetrics";
import { DifferencesTable } from "@/components/standards/DifferencesTable";
import { TransitionTimeline } from "@/components/standards/TransitionTimeline";
import { StepFlow } from "@/components/standards/StepFlow";
import { RegulatoryOverlaySection } from "@/components/standards/RegulatoryOverlay";
import { ExamTipsSection } from "@/components/standards/ExamTipsSection";
import { PitfallsList } from "@/components/standards/PitfallsList";
import { InlineExample } from "@/components/standards/InlineExample";
import { ProgressTOC } from "@/components/standards/ProgressTOC";
import { AnimatedCode, AnimatedTitle, AnimatedBadge } from "@/components/standards/PageTitleAnimated";

interface Props {
	params: Promise<{ slug: string }>;
}

const statusToBadge: Record<string, BadgeVariant> = {
	aligned: "aligned",
	"carve-out": "carveout",
	deferred: "deferred",
	"not-adopted": "not-adopted",
};

const statusLabel: Record<string, string> = {
	aligned: "Aligned",
	"carve-out": "Carve-out Active",
	deferred: "Deferred",
	"not-adopted": "Not Adopted",
};

const tocItems = [
	{ id: "overview", label: "Overview" },
	{ id: "scope--key-definitions", label: "Scope & definitions" },
	{ id: "recognition", label: "Recognition" },
	{ id: "measurement", label: "Measurement" },
	{ id: "presentation--disclosure", label: "Presentation & disclosure" },
	{ id: "nfrs-vs-ifrs", label: "NFRS vs IFRS" },
	{ id: "recognition-steps", label: "Recognition steps" },
	{ id: "regulatory-overlay", label: "Regulatory overlay" },
	{ id: "practical-examples", label: "Practical examples" },
	{ id: "nepal-pitfalls", label: "Nepal pitfalls" },
	{ id: "exam-tips", label: "Exam tips" },
	{ id: "references", label: "References" },
];

export async function generateStaticParams() {
	return getAllMDXSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const entry = getStandard(slug);
	if (!entry) return {};

	const title = `${entry.nfrsNumber} — ${entry.title} | The NFRS Archive`;
	const description = entry.summary;
	const url = `${SITE_URL}/standards/${slug}`;

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			type: "article",
			url,
		},
		twitter: { card: "summary_large_image" },
	};
}

export default async function StandardPage({ params }: Props) {
	const { slug } = await params;
	const entry = getStandard(slug);
	if (!entry) notFound();

	const mdxResult = await getStandardMDX(slug);
	if (!mdxResult) notFound();

	const { content, frontmatter } = mdxResult;
	const related = entry.relatedStandards ? getRelatedStandards(entry.relatedStandards) : [];
	const pageData = getStandardPageData(slug);

	const currentIdx = standards.findIndex((s) => s.slug === slug);
	const prev = currentIdx > 0 ? standards[currentIdx - 1] : null;
	const next = currentIdx < standards.length - 1 ? standards[currentIdx + 1] : null;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: `${entry.nfrsNumber} — ${entry.title}`,
		description: entry.summary,
		datePublished: frontmatter.lastReviewed ?? entry.effectiveDate,
		dateModified: frontmatter.lastReviewed ?? entry.effectiveDate,
		author: { "@type": "Organization", name: "IFRS vs NFRS" },
		publisher: { "@type": "Organization", name: "IFRS vs NFRS" },
		about: [
			{ "@type": "Thing", name: entry.nfrsNumber },
			{ "@type": "Thing", name: entry.ifrsEquivalent },
		],
		mainEntityOfPage: `${SITE_URL}/standards/${slug}`,
		inLanguage: "en",
		audience: {
			"@type": "Audience",
			audienceType: "Accounting professionals, CA and ACCA students in Nepal",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* ===== HERO ===== */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 pointer-events-none">
					<div className="max-w-[1280px] mx-auto h-full">
						<div className="absolute top-0 right-[max(0px,calc((100vw-1280px)/2*-1))] w-[65%] h-[380px] pointer-events-none select-none z-0 max-md:hidden">
							<StandardBgIllustration slug={slug} number={entry.nfrsNumber} name={entry.title} />
						</div>
					</div>
				</div>
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: "linear-gradient(180deg, transparent 0%, var(--site-bg) 85%)",
					}}
				/>

				<div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-6 pb-12">
					<Breadcrumbs
						items={[
							{ label: "Home", href: "/" },
							{ label: entry.topic.charAt(0).toUpperCase() + entry.topic.slice(1), href: `/topics/${entry.topic}` },
							{ label: entry.nfrsNumber, href: `/standards/${slug}` },
						]}
					/>

					<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
						<div className="lg:col-span-7">
							<GlassCard padding="lg" className="shadow-clay-lg">
								<Eyebrow className="mb-3">
									{entry.topic.charAt(0).toUpperCase() + entry.topic.slice(1)} / {entry.nfrsNumber}
								</Eyebrow>
								<h1 className="font-display text-[clamp(32px,7vw,56px)] leading-[1.05] font-light tracking-tight">
									<AnimatedCode>{entry.nfrsNumber}:</AnimatedCode>
									<br />
									<AnimatedTitle>
										<em className="italic text-accent">{entry.title}</em>
									</AnimatedTitle>
								</h1>
								<div className="flex flex-wrap items-center gap-3 mt-4">
									<span className="font-sans text-sm text-text-muted">
										Corresponds to {entry.ifrsEquivalent}
									</span>
									<span className="font-sans text-sm text-text-subtle">
										· Eff. {new Date(entry.effectiveDate).getFullYear()}
									</span>
								</div>
							</GlassCard>
						</div>

						<div className="lg:col-span-5 flex lg:justify-end">
							<AnimatedBadge>
								<div
									className="rounded-xl shadow-clay-md px-6 py-4 max-w-xs w-full"
									style={{
										background: "var(--site-accent)",
										color: "var(--site-accent-fg)",
									}}
								>
									<p className="font-sans text-[10px] uppercase tracking-[0.14em] opacity-0.8 mb-1">
										Current Status
									</p>
									<p className="font-display text-2xl italic font-light">
										{statusLabel[entry.status] ?? entry.status}
									</p>
									{entry.carveOuts.length > 0 && (
										<p className="font-serif text-xs mt-2 opacity-0.7 leading-snug">
											{entry.carveOuts[0]}
										</p>
									)}
								</div>
							</AnimatedBadge>
						</div>
					</div>
				</div>
			</section>

			{/* ===== CONTENT — three-column layout ===== */}
			<DifficultyProvider>
				<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-16">
					<div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 lg:gap-10 items-start">
						{/* Left sidebar — ProgressTOC */}
						<aside className="hidden lg:block sticky top-24 self-start">
							<GlassCard padding="sm" className="shadow-clay-sm">
								<ProgressTOC items={tocItems} storageKey={slug} />
							</GlassCard>
						</aside>

						{/* Article body */}
						<article className="min-w-0 font-serif text-base leading-relaxed text-text prose-headings:font-display prose-headings:font-light prose-headings:text-text prose-headings:tracking-tight [&>h2]:text-2xl [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:scroll-mt-24 [&>h2]:border-b [&>h2]:border-hairline [&>h2]:pb-2 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1.5 [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-1.5 [&>li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-text [&>div]:mb-6">
							{/* Summary lead */}
							<div className="mb-8">
								<p className="font-serif text-lg text-text-muted leading-relaxed">
									{entry.summary}
								</p>
							</div>

							{/* MDX content (Overview, Scope, Recognition, Measurement, Presentation) */}
							{content}

							{/* ===== NFRS vs IFRS section ===== */}
							<h2 id="nfrs-vs-ifrs" className="scroll-mt-24">NFRS vs IFRS</h2>
							{pageData && (
								<>
									<SummaryMetrics data={pageData.differences} />
									<DifferencesTable rows={pageData.differences.rows} />
									{pageData.timeline.length > 0 && (
										<TransitionTimeline events={pageData.timeline} />
									)}
								</>
							)}

							{/* ===== Recognition Steps ===== */}
							{pageData?.steps && pageData.steps.length > 0 && (
								<>
									<h2 id="recognition-steps" className="scroll-mt-24">Recognition Steps</h2>
									<StepFlow steps={pageData.steps} />
								</>
							)}

							{/* ===== Regulatory Overlay ===== */}
							{pageData?.regulatoryOverlay && (
								<>
									<h2 id="regulatory-overlay" className="scroll-mt-24">Regulatory Overlay</h2>
									<RegulatoryOverlaySection data={pageData.regulatoryOverlay} />
								</>
							)}

							{/* ===== Practical Examples ===== */}
							{pageData?.inlineExamples && Object.keys(pageData.inlineExamples).length > 0 && (
								<>
									<h2 id="practical-examples" className="scroll-mt-24">Practical Examples</h2>
									{Object.values(pageData.inlineExamples).map((example) => (
										<InlineExample key={example.title} example={example} />
									))}
								</>
							)}

							{/* ===== Nepal Pitfalls ===== */}
							{pageData && pageData.pitfalls.length > 0 && (
								<>
									<h2 id="nepal-pitfalls" className="scroll-mt-24">Nepal-Specific Pitfalls</h2>
									<PitfallsList pitfalls={pageData.pitfalls} />
								</>
							)}

							{/* ===== Exam Tips ===== */}
							{pageData && (pageData.examTips.acca.length > 0 || pageData.examTips.ican) && (
								<>
									<h2 id="exam-tips" className="scroll-mt-24">Exam Tips</h2>
									<ExamTipsSection acca={pageData.examTips.acca} ican={pageData.examTips.ican} />
								</>
							)}

							{/* References anchor */}
							<h2 id="references" className="scroll-mt-24">References</h2>

							{/* Disclaimer */}
							<div className="mt-4">
								<Callout variant="legal">
									<p>
										This content is original commentary for educational purposes. It does not
										reproduce text from IFRS or NFRS standards. For authoritative guidance,
										refer to the{" "}
										<a href="https://www.ifrs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
											IFRS Foundation
										</a>{" "}
										and{" "}
										<a href="https://en.ican.org.np" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
											ICAN Nepal
										</a>.
									</p>
								</Callout>
							</div>

							{/* Last reviewed */}
							<div className="mt-6 font-sans text-sm text-text-subtle">
								{frontmatter.lastReviewed && (
									<p>Last reviewed: {frontmatter.lastReviewed}.</p>
								)}
								<p className="mt-1">
									Found an error?{" "}
									<a
										href={`mailto:nishantamish@gmail.com?subject=Correction: ${entry.nfrsNumber}&body=Page: /standards/${slug}%0A%0ACorrection details:`}
										className="text-accent hover:underline"
									>
										Suggest a correction
									</a>
								</p>
							</div>
						</article>

						{/* Right sidebar — independently scrollable */}
						<aside className="hidden lg:flex flex-col gap-6 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 scrollbar-thin">
							{/* Difficulty selector */}
							<GlassCard padding="sm" className="shadow-clay-sm">
								<DifficultySelector />
							</GlassCard>

							{/* Key differences quick link */}
							{pageData && (
								<GlassCard padding="sm" className="shadow-clay-sm">
									<Eyebrow as="span" className="text-[10px] mb-2">
										Quick Stats
									</Eyebrow>
									<a href="#nfrs-vs-ifrs" className="block mt-2">
										<div className="flex items-center justify-between">
											<span className="font-sans text-sm text-text-muted">Key Differences</span>
											<span className="font-display text-lg text-accent">{pageData.differences.keyDifferencesCount}</span>
										</div>
									</a>
									<div className="flex items-center justify-between mt-1">
										<span className="font-sans text-sm text-text-muted">Carve-outs</span>
										<span className="font-display text-lg text-text">{pageData.differences.carveOutCount || "None"}</span>
									</div>
									<div className="mt-3 pt-3 border-t border-border">
										<p className="font-sans text-[10px] text-text-subtle">NFRS Effective</p>
										<p className="font-sans text-sm text-text">{pageData.effectiveDate}</p>
									</div>
									<div className="mt-2">
										<p className="font-sans text-[10px] text-text-subtle">IFRS Effective</p>
										<p className="font-sans text-sm text-text">{pageData.ifrsEffectiveDate}</p>
									</div>
								</GlassCard>
							)}

							{/* Exam relevance */}
							{pageData && pageData.examRelevance.length > 0 && (
								<GlassCard padding="sm" className="shadow-clay-sm">
									<Eyebrow as="span" className="text-[10px] mb-2">
										Exam Relevance
									</Eyebrow>
									<div className="flex flex-wrap gap-1.5 mt-2">
										{pageData.examRelevance.map((exam) => (
											<span
												key={exam}
												className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent/10 text-accent border border-accent/20"
											>
												{exam}
											</span>
										))}
									</div>
								</GlassCard>
							)}

							{/* Related standards with reasons */}
							{pageData && pageData.relatedStandards.length > 0 ? (
								<ClayCard padding="sm">
									<Eyebrow as="span" className="text-[10px] mb-2">
										Related standards
									</Eyebrow>
									<ul className="space-y-3 mt-2">
										{pageData.relatedStandards.map((r) => (
											<li key={r.slug}>
												<Link
													href={`/standards/${r.slug}`}
													className="font-sans text-sm text-accent hover:underline font-medium"
												>
													{r.nfrsNumber} — {r.title}
												</Link>
												<p className="font-serif text-[11px] text-text-subtle mt-0.5 leading-tight">
													{r.reason}
												</p>
											</li>
										))}
									</ul>
								</ClayCard>
							) : related.length > 0 ? (
								<ClayCard padding="sm">
									<Eyebrow as="span" className="text-[10px] mb-2">
										Related standards
									</Eyebrow>
									<ul className="space-y-1.5">
										{related.map((r) => (
											<li key={r.slug}>
												<Link
													href={`/standards/${r.slug}`}
													className="font-sans text-sm text-accent hover:underline"
												>
													{r.nfrsNumber} — {r.title}
												</Link>
											</li>
										))}
									</ul>
								</ClayCard>
							) : null}

							{/* Authoritative sources */}
							<ClayCard padding="sm">
								<Eyebrow as="span" className="text-[10px] mb-2">
									Authoritative sources
								</Eyebrow>
								<ul className="space-y-1 font-sans text-sm">
									<li>
										<a
											href="https://en.ican.org.np/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-accent hover:underline"
										>
											ICAN Nepal
										</a>
									</li>
									<li>
										<a
											href="https://www.ifrs.org/issued-standards/list-of-standards/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-accent hover:underline"
										>
											IFRS Foundation
										</a>
									</li>
								</ul>
							</ClayCard>
						</aside>
					</div>
				</div>
			</DifficultyProvider>

			{/* Prev / Next pager */}
			<nav className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-12">
				<div className="flex justify-between items-center border-t border-hairline pt-6">
					{prev ? (
						<Link
							href={`/standards/${prev.slug}`}
							className="font-sans text-sm text-accent hover:underline"
						>
							&larr; {prev.nfrsNumber}
						</Link>
					) : (
						<span />
					)}
					{next ? (
						<Link
							href={`/standards/${next.slug}`}
							className="font-sans text-sm text-accent hover:underline"
						>
							{next.nfrsNumber} &rarr;
						</Link>
					) : (
						<span />
					)}
				</div>
			</nav>

			{/* Related standards row */}
			{related.length > 0 && (
				<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-16">
					<Eyebrow className="mb-3">Related standards</Eyebrow>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{related.map((r) => (
							<Link key={r.slug} href={`/standards/${r.slug}`}>
								<ClayCard hover padding="md" className="h-full">
									{r.heroMotif && (
										<div className="mb-2">
											<StandardIcon motif={r.heroMotif} />
										</div>
									)}
									<h3 className="font-display text-base font-normal">
										{r.nfrsNumber}
									</h3>
									<p className="font-serif text-sm text-text-muted mt-1">
										{r.title}
									</p>
								</ClayCard>
							</Link>
						))}
					</div>
				</section>
			)}
		</>
	);
}
