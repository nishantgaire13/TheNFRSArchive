import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";
import { IllustrationFrame } from "@/components/ui/IllustrationFrame";
import { AboutCollage } from "@/components/illustrations/AboutCollage";
import { SITE_URL } from "@/lib/standards";

export const metadata: Metadata = {
	title: "About | The NFRS Archive",
	description:
		"How The NFRS Archive is built, our methodology, and why this free reference exists for Nepali auditors and CA/ACCA students.",
	alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10">
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: "About", href: "/about" },
				]}
			/>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
				<div className="lg:col-span-7">
					<h1 className="font-display text-[clamp(32px,8vw,48px)] leading-[1.1] font-light tracking-tight mb-6">
						Our methodology
					</h1>

					<div className="font-serif text-base text-text-muted leading-relaxed space-y-5">
						<p>
							The NFRS Archive is a free, searchable reference that compares Nepal
							Financial Reporting Standards (NFRS) with International Financial
							Reporting Standards (IFRS). It is designed for Nepali auditors,
							CA/ACCA students, and in-house accountants who need to understand
							how local standards depart from global ones.
						</p>

						<h2 className="font-display text-xl font-light text-text pt-4">
							How content is written
						</h2>
						<p>
							Every standard page is written from understanding, not reproduction.
							We research each standard from multiple authoritative sources,
							including the actual NFRS/IFRS text, Big-4 commentary, ICAN study
							materials, and ASB Nepal announcements, then close those sources
							and write our explanation in original language.
						</p>
						<p>
							Paragraph numbers (e.g., IFRS 15.31) are cited throughout because
							numbers are factual references, not copyrightable text. These
							citations let you verify every claim against the authoritative
							source.
						</p>

						<h2 className="font-display text-xl font-light text-text pt-4">
							What we cover
						</h2>
						<p>
							Each standard page follows a consistent structure: overview, scope
							and definitions, recognition, measurement, presentation and
							disclosure, NFRS vs IFRS differences, a worked example using a
							fictional Nepali company, common pitfalls, and exam tips for
							CA/ACCA students.
						</p>

						<h2 className="font-display text-xl font-light text-text pt-4">
							Accuracy and updates
						</h2>
						<p>
							Every page shows a "last reviewed" date. We update pages when ASB
							Nepal issues new announcements, when IFRS amendments take effect, or
							when we receive corrections from the community. If you find an
							error, please use the "Suggest a correction" link on any page.
						</p>
					</div>

					<div className="mt-10">
						<Callout variant="legal">
							<p>
								This site provides original educational commentary. It is not
								affiliated with ICAN, ASB Nepal, or the IFRS Foundation. See
								our{" "}
								<a href="/disclaimer" className="text-accent hover:underline">
									full disclaimer
								</a>.
							</p>
						</Callout>
					</div>
				</div>
				<div className="hidden lg:flex lg:col-span-5 justify-center sticky top-24">
					<IllustrationFrame size="lg" alt="About page illustration">
						<AboutCollage className="text-accent w-full h-full" />
					</IllustrationFrame>
				</div>
			</div>
		</div>
	);
}
