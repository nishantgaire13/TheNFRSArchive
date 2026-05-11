import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/ui/SearchBar";
import { HeroIllustration as HeroSVG } from "@/components/HeroIllustration";
import { HeroTitle, HeroDescription, HeroSearchWrapper, HeroIllustration as HeroFloat } from "@/components/home/HeroAnimated";
import { PriorityStandardsSection } from "@/components/home/PriorityStandardsSection";
import { BrowseByTopicSection } from "@/components/home/BrowseByTopicSection";
import AnimatedPositioningBlock from "@/components/home/AnimatedPositioningBlock";
import { standards, topics, SITE_URL } from "@/lib/standards";

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
			<PriorityStandardsSection standards={priorityStandards} />

			{/* === BROWSE BY TOPIC === */}
			<BrowseByTopicSection topics={topics} />

			{/* === POSITIONING BLOCK === */}
			<section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
				<AnimatedPositioningBlock />
			</section>
		</>
	);
}