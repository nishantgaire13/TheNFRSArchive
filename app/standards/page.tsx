import type { Metadata } from "next";
import { standards, SITE_URL } from "@/lib/standards";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StandardsTabs } from "./StandardsTabs";

export const metadata: Metadata = {
	title: "All Standards | The NFRS Archive",
	description:
		"Browse all Nepal Financial Reporting Standards (NFRS) with side-by-side IFRS comparison.",
	alternates: { canonical: `${SITE_URL}/standards` },
};

export default function StandardsIndexPage() {
	const nasStandards = standards.filter((s) =>
		s.nfrsNumber.startsWith("NAS ")
	);
	const nfrsStandards = standards.filter((s) =>
		s.nfrsNumber.startsWith("NFRS ")
	);

	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10">
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: "Standards", href: "/standards" },
				]}
			/>

			<div className="mt-8 mb-10">
				<Eyebrow className="mb-3">Reference Library</Eyebrow>
				<h1 className="font-display text-[clamp(32px,8vw,48px)] leading-[1.1] font-light tracking-tight">
					All Standards
				</h1>
				<p className="font-serif text-lg text-text-muted mt-4 max-w-lg">
					Every Nepal Financial Reporting Standard, cross-referenced with its
					IFRS equivalent.
				</p>
			</div>

			<StandardsTabs
				nasStandards={nasStandards}
				nfrsStandards={nfrsStandards}
			/>
		</div>
	);
}
