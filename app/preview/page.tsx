// DEV-ONLY PREVIEW PAGE — do not ship to production.
// Renders every UI primitive once for visual review.

import { Eyebrow } from "@/components/ui/Eyebrow";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Badge } from "@/components/ui/Badge";
import { ClayCard } from "@/components/ui/ClayCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Callout";
import { ParaRef } from "@/components/ui/ParaRef";
import { StatCard } from "@/components/ui/StatCard";
import { QuoteCard } from "@/components/ui/QuoteCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TOC } from "@/components/ui/TOC";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { HeroScene } from "@/components/illustrations/HeroScene";
import { PagodaMotif } from "@/components/illustrations/PagodaMotif";
import { LedgerMotif } from "@/components/illustrations/LedgerMotif";
import { ScaleMotif } from "@/components/illustrations/ScaleMotif";
import { CalculatorMotif } from "@/components/illustrations/CalculatorMotif";
import { AbacusMotif } from "@/components/illustrations/AbacusMotif";
import { CoinsMotif } from "@/components/illustrations/CoinsMotif";
import { PlanMotif } from "@/components/illustrations/PlanMotif";
import { CarveOutsCollage } from "@/components/illustrations/CarveOutsCollage";
import { ClayBarChart } from "@/components/charts/ClayBarChart";
import { ClayLineChart } from "@/components/charts/ClayLineChart";
import { StatRow } from "@/components/charts/StatRow";

function Section({
	title,
	children,
}: { title: string; children: React.ReactNode }) {
	return (
		<section className="py-12 border-b border-hairline">
			<h2 className="font-display text-2xl font-light mb-6 text-text">{title}</h2>
			{children}
		</section>
	);
}

export default function PreviewPage() {
	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-12">
			<p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
				Dev-only preview
			</p>
			<h1 className="font-display text-4xl font-light mb-2">UI Primitives</h1>
			<p className="font-serif text-text-muted mb-8">
				All 15 components rendered for visual review. Toggle theme in the
				header to test dark mode.
			</p>

			{/* 1. Eyebrow */}
			<Section title="1. Eyebrow">
				<Eyebrow>DOCUMENTATION SERIES / NFRS 15</Eyebrow>
				<Eyebrow className="mt-2">REGULATORY REGISTRY</Eyebrow>
				<Eyebrow as="span" className="mt-2 block">
					VOLUME I — NEPAL REPORTING
				</Eyebrow>
			</Section>

			{/* 2. DisplayHeading */}
			<Section title="2. DisplayHeading">
				<div className="space-y-8">
					<div>
						<Eyebrow className="mb-2">Hero size</Eyebrow>
						<DisplayHeading
							roman="Decoding NFRS,"
							italic="side by side with IFRS."
							size="hero"
						/>
					</div>
					<div>
						<Eyebrow className="mb-2">Page size</Eyebrow>
						<DisplayHeading
							roman="NFRS 15 —"
							italic="Revenue from Contracts with Customers"
							size="page"
						/>
					</div>
				</div>
			</Section>

			{/* 3. Badge */}
			<Section title="3. Badge">
				<div className="flex flex-wrap gap-3">
					<Badge variant="aligned">Aligned</Badge>
					<Badge variant="carveout">Carve-out</Badge>
					<Badge variant="deferred">Deferred</Badge>
					<Badge variant="not-adopted">Not adopted</Badge>
					<Badge variant="neutral">Neutral</Badge>
				</div>
			</Section>

			{/* 4. ClayCard */}
			<Section title="4. ClayCard">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<ClayCard padding="sm">
						<p className="font-sans text-sm text-text-muted">Small padding</p>
					</ClayCard>
					<ClayCard padding="md">
						<p className="font-sans text-sm text-text-muted">Medium padding (default)</p>
					</ClayCard>
					<ClayCard padding="lg" hover>
						<p className="font-sans text-sm text-text-muted">
							Large padding + hover lift
						</p>
					</ClayCard>
				</div>
			</Section>

			{/* 5. GlassCard */}
			<Section title="5. GlassCard">
				<div className="relative bg-bg-subtle rounded-lg p-8">
					<p className="font-serif text-text-muted mb-4">
						Background content to show the glass effect through…
					</p>
					<GlassCard className="max-w-sm">
						<p className="font-serif text-sm">
							This is a glassmorphic overlay card. Use sparingly — one per page max.
						</p>
					</GlassCard>
				</div>
			</Section>

			{/* 6. Button */}
			<Section title="6. Button">
				<div className="flex flex-wrap gap-4 items-center">
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link" href="#">
						Link variant
					</Button>
				</div>
			</Section>

			{/* 7. Callout */}
			<Section title="7. Callout">
				<div className="space-y-4 max-w-2xl">
					<Callout variant="info" title="Recognition timing">
						<p>Revenue is recognised when the performance obligation is satisfied.</p>
					</Callout>
					<Callout variant="warning" title="Common audit trap">
						<p>
							Don&apos;t confuse the right-of-use asset with a finance lease
							under the old NAS 17.
						</p>
					</Callout>
					<Callout variant="example" title="Himalaya Textiles Pvt. Ltd.">
						<p>
							Himalaya Textiles enters a 3-year contract with Nepal Retail Co. to
							supply uniforms at NPR 2,40,000 per year…
						</p>
					</Callout>
					<Callout variant="exam">
						<p>
							ACCA FR (F7) frequently tests IFRS 15 five-step model in
							scenario questions. Focus on Step 4 — allocating the transaction
							price.
						</p>
					</Callout>
					<Callout variant="legal">
						<p>
							This content is original commentary. For authoritative guidance
							refer to ICAN and the IFRS Foundation.
						</p>
					</Callout>
				</div>
			</Section>

			{/* 8. ParaRef */}
			<Section title="8. ParaRef">
				<p className="font-serif text-base text-text-muted leading-relaxed">
					The five-step model (see <ParaRef std="IFRS 15" para="31" />) requires
					entities to identify performance obligations (
					<ParaRef std="IFRS 15" para="22" />) before allocating the transaction
					price (<ParaRef std="NFRS 15" para="47" />
					).
				</p>
			</Section>

			{/* 9. StatCard */}
			<Section title="9. StatCard">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					<StatCard label="Total standards" value="42" />
					<StatCard
						label="Active carve-outs"
						value="6"
						delta="+2 since 2023"
						deltaDirection="up"
					/>
					<StatCard
						label="Deferred"
						value="3"
						delta="−1 this year"
						deltaDirection="down"
					/>
					<StatCard label="Fully aligned" value="33" delta="No change" />
				</div>
			</Section>

			{/* 10. QuoteCard */}
			<Section title="10. QuoteCard">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<QuoteCard
						quote="The five-step revenue model changed how Nepali listed companies report contract revenue."
						citation="— Nepali Auditor's Digest, 2025"
						variant="bordered"
					/>
					<div className="bg-bg-subtle rounded-lg p-6">
						<QuoteCard
							quote="NFRS alignment with IFRS is the single most impactful change for Nepal's capital markets."
							citation="— ICAN President, Annual Address"
							ornament="§"
							variant="glass"
						/>
					</div>
				</div>
			</Section>

			{/* 11. SearchBar */}
			<Section title="11. SearchBar">
				<div className="max-w-xl">
					<SearchBar placeholder="Search standards…" />
				</div>
			</Section>

			{/* 12. ThemeToggle */}
			<Section title="12. ThemeToggle">
				<div className="flex items-center gap-4">
					<ThemeToggle />
					<span className="font-sans text-sm text-text-muted">
						Click to cycle: light → dark → system
					</span>
				</div>
			</Section>

			{/* 13. Breadcrumbs */}
			<Section title="13. Breadcrumbs">
				<Breadcrumbs
					items={[
						{ label: "Home", href: "/" },
						{ label: "Revenue", href: "/topics/revenue" },
						{ label: "NFRS 15", href: "/standards/nfrs-15" },
					]}
				/>
			</Section>

			{/* 14. TOC */}
			<Section title="14. TOC">
				<div className="max-w-xs">
					<TOC
						items={[
							{ id: "1-eyebrow", label: "Eyebrow" },
							{ id: "2-displayheading", label: "DisplayHeading" },
							{ id: "3-badge", label: "Badge" },
							{ id: "4-claycard", label: "ClayCard" },
							{ id: "5-glasscard", label: "GlassCard" },
						]}
					/>
				</div>
			</Section>

			{/* 15. IllustrationFrame */}
			<Section title="15. IllustrationFrame">
				<div className="flex flex-wrap gap-6 items-end">
					<IllustrationFrame size="sm" alt="Pagoda in frame">
						<PagodaMotif className="text-accent w-14 h-14" />
					</IllustrationFrame>
					<IllustrationFrame size="md" alt="Scale in frame">
						<ScaleMotif className="text-accent w-32 h-32" />
					</IllustrationFrame>
				</div>
			</Section>

			{/* === ILLUSTRATIONS === */}
			<div className="py-16">
				<p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
					Illustration library
				</p>
				<h2 className="font-display text-3xl font-light mb-8">
					Isometric Motifs
				</h2>
			</div>

			<Section title="HeroScene (~600×600)">
				<div className="bg-bg rounded-xl shadow-clay-lg p-4 max-w-[640px]">
					<HeroScene className="text-accent w-full" />
				</div>
			</Section>

			<Section title="Single Motifs (~200×200)">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<PagodaMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">PagodaMotif</p>
					</div>
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<LedgerMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">LedgerMotif</p>
					</div>
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<ScaleMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">ScaleMotif</p>
					</div>
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<CalculatorMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">CalculatorMotif</p>
					</div>
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<AbacusMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">AbacusMotif</p>
					</div>
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<CoinsMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">CoinsMotif</p>
					</div>
					<div className="text-center">
						<div className="bg-bg rounded-lg shadow-clay-md p-4 mb-2">
							<PlanMotif className="text-accent w-full" />
						</div>
						<p className="font-sans text-xs text-text-subtle">PlanMotif</p>
					</div>
				</div>
			</Section>

			<Section title="CarveOutsCollage (mid-size)">
				<div className="bg-bg rounded-xl shadow-clay-md p-4 max-w-lg">
					<CarveOutsCollage className="text-accent w-full" />
				</div>
			</Section>

			{/* === CHARTS === */}
			<div className="py-16">
				<p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
					Chart system
				</p>
				<h2 className="font-display text-3xl font-light mb-8">
					Claymorphic Charts
				</h2>
			</div>

			<Section title="ClayBarChart — Stochastic Volatility">
				<div className="max-w-2xl">
					<ClayBarChart
						title="Stochastic Volatility"
						subtitle="MONTHLY INDEX // 2025"
						peakLabel="PEAK {value}"
						gridlines
						srDescription="Bar chart showing stochastic volatility from January to October 2025. Peak value of 0.94 occurs in May."
						data={[
							{ name: "Jan", value: 0.42 },
							{ name: "Feb", value: 0.58 },
							{ name: "Mar", value: 0.35 },
							{ name: "Apr", value: 0.71 },
							{ name: "May", value: 0.94, highlight: true },
							{ name: "Jun", value: 0.62 },
							{ name: "Jul", value: 0.48 },
							{ name: "Aug", value: 0.55 },
							{ name: "Sep", value: 0.39 },
							{ name: "Oct", value: 0.44 },
						]}
					/>
				</div>
			</Section>

			<Section title="ClayLineChart — ECL Migration">
				<div className="max-w-2xl">
					<ClayLineChart
						title="Loss Allowance Probability"
						subtitle="THREE-STAGE ECL MIGRATION"
						gridlines
						srDescription="Line chart showing three-stage expected credit loss migration from performing to default. Stage 1 at 12-month ECL, transitioning to Lifetime ECL, reaching Default Point."
						data={[
							{ name: "T0", value: 0.5, label: "STAGE 1" },
							{ name: "T1", value: 1.2 },
							{ name: "T2", value: 2.8 },
							{ name: "T3", value: 5.5 },
							{ name: "T4", value: 12, label: "LIFETIME ECL" },
							{ name: "T5", value: 22 },
							{ name: "T6", value: 38 },
							{ name: "T7", value: 58 },
							{ name: "T8", value: 78 },
							{ name: "T9", value: 95, label: "DEFAULT POINT" },
						]}
					/>
				</div>
			</Section>

			<Section title="StatRow — 4-up KPI row">
				<StatRow
					stats={[
						{ label: "Alpha Factor", value: "1.24", delta: "+0.12", deltaDirection: "up" },
						{ label: "Beta Slope", value: "-0.08", delta: "−0.02", deltaDirection: "down" },
						{ label: "Gamma Sync", value: "88%", delta: "Stable" },
						{ label: "Delta Offset", value: "22ms", delta: "−4ms", deltaDirection: "down" },
					]}
				/>
			</Section>
		</div>
	);
}
