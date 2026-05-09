import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_URL } from "@/lib/standards";

export const metadata: Metadata = {
	title: "Disclaimer | The NFRS Archive",
	description:
		"Legal disclaimer for The NFRS Archive — original educational commentary, not professional advice.",
	alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10">
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: "Disclaimer", href: "/disclaimer" },
				]}
			/>

			<div className="max-w-2xl mt-8">
				<Eyebrow className="mb-3">Legal</Eyebrow>
				<h1 className="font-display text-[clamp(32px,8vw,48px)] leading-[1.1] font-light tracking-tight mb-6">
					Disclaimer
				</h1>

				<div className="font-serif text-base text-text-muted leading-relaxed space-y-5">
					<h2 className="font-display text-xl font-light text-text pt-2">
						Nature of content
					</h2>
					<p>
						The NFRS Archive (&ldquo;this site&rdquo;) publishes original
						educational commentary comparing Nepal Financial Reporting
						Standards (NFRS) with International Financial Reporting Standards
						(IFRS). All explanations are written in the authors&apos; own
						words, drawing on publicly available knowledge and professional
						understanding.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						Not professional advice
					</h2>
					<p>
						Nothing on this site constitutes professional accounting, auditing,
						tax, or legal advice. The content is intended as a study aid and
						reference tool. Users should consult qualified professionals for
						specific accounting questions or decisions.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						No reproduction of copyrighted text
					</h2>
					<p>
						This site does not reproduce, copy, or closely paraphrase the text
						of IFRS Standards (copyright IFRS Foundation), NFRS (published by
						ICAN/ASB Nepal), or any other copyrighted source. Paragraph numbers
						and standard numbers are cited as factual references — these are
						not copyrightable.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						No affiliation
					</h2>
					<p>
						This site is not affiliated with, endorsed by, or connected to the
						Institute of Chartered Accountants of Nepal (ICAN), the Accounting
						Standards Board of Nepal (ASB Nepal), the IFRS Foundation, the
						International Accounting Standards Board (IASB), ACCA, or any other
						professional body.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						Accuracy
					</h2>
					<p>
						While we strive for accuracy, accounting standards are complex and
						subject to interpretation. We make no warranty that the content is
						error-free. Each page displays a &ldquo;last reviewed&rdquo; date;
						standards and regulations may have changed since that date.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						Authoritative sources
					</h2>
					<p>
						For authoritative guidance, always refer to:
					</p>
					<ul className="list-disc pl-6 space-y-1">
						<li>
							<a
								href="https://en.ican.org.np/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent hover:underline"
							>
								ICAN Nepal
							</a>{" "}
							— for NFRS and NAS standards
						</li>
						<li>
							<a
								href="https://www.ifrs.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent hover:underline"
							>
								IFRS Foundation
							</a>{" "}
							— for IFRS and IAS standards
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
