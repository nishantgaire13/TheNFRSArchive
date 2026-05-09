import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE_URL } from "@/lib/standards";

export const metadata: Metadata = {
	title: "Privacy Policy | The NFRS Archive",
	description: "Privacy policy for The NFRS Archive.",
	alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10">
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: "Privacy", href: "/privacy" },
				]}
			/>

			<div className="max-w-2xl mt-8">
				<Eyebrow className="mb-3">Legal</Eyebrow>
				<h1 className="font-display text-[clamp(32px,8vw,48px)] leading-[1.1] font-light tracking-tight mb-6">
					Privacy Policy
				</h1>

				<div className="font-serif text-base text-text-muted leading-relaxed space-y-5">
					<p>
						The NFRS Archive (&ldquo;this site&rdquo;) is a static website. We
						do not operate user accounts, collect personal data through forms,
						or process payments.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						Analytics and advertising
					</h2>
					<p>
						This site uses Google AdSense for advertising and may use Google
						Analytics or similar privacy-respecting analytics tools to
						understand traffic patterns. These third-party services may set
						cookies and collect anonymised usage data in accordance with their
						own privacy policies.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						Cookies
					</h2>
					<p>
						This site stores a theme preference (&ldquo;light&rdquo; or
						&ldquo;dark&rdquo;) in your browser&apos;s localStorage. This is
						not a cookie and is never sent to any server. Third-party services
						(AdSense, analytics) may set their own cookies.
					</p>

					<h2 className="font-display text-xl font-light text-text pt-2">
						External links
					</h2>
					<p>
						This site links to external resources including the IFRS Foundation,
						ICAN Nepal, and other professional bodies. We are not responsible
						for the privacy practices of external sites.
					</p>
				</div>
			</div>
		</div>
	);
}
