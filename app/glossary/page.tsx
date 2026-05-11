import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlossaryClient } from "@/components/glossary/GlossaryClient";

export const metadata: Metadata = {
	title: "Glossary | The NFRS Archive",
	description:
		"Nepal-specific accounting and finance terms — defined in context, linked to standards. Covers NFRS, NAS, NRB directives, ICAN exam terminology, and regulatory context.",
};

export default function GlossaryPage() {
	return (
		<>
			{/* ===== HERO ===== */}
			<section className="relative">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: "linear-gradient(180deg, transparent 0%, var(--site-bg) 85%)",
					}}
				/>
				<div className="relative max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-6 pb-10">
					<Breadcrumbs
						items={[
							{ label: "Home", href: "/" },
							{ label: "Glossary", href: "/glossary" },
						]}
					/>
					<div className="mt-8 max-w-2xl">
						<Eyebrow className="mb-3">Reference</Eyebrow>
						<h1 className="font-display text-[clamp(36px,7vw,60px)] leading-[1.05] font-light tracking-tight">
							Glossary
						</h1>
						<p className="font-serif text-lg text-text-muted leading-relaxed mt-4">
							Nepal-specific accounting and finance terms — defined in context,
							linked to standards. Covers NFRS, NAS, NRB directives, ICAN exam
							terminology, and regulatory context.
						</p>
					</div>
				</div>
			</section>

			{/* ===== CONTENT ===== */}
			<GlossaryClient />

			{/* ===== FOOTER ===== */}
			<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-12">
				<GlassCard padding="sm">
					<p className="font-sans text-xs text-text-subtle">
						Last reviewed against NFRS 2024 and Finance Act 2081. This content is
						original commentary for educational purposes — not an authoritative
						standard. Refer to{" "}
						<a
							href="https://en.ican.org.np"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:underline"
						>
							ICAN Nepal
						</a>{" "}
						and{" "}
						<a
							href="https://www.ifrs.org"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:underline"
						>
							IFRS Foundation
						</a>{" "}
						for authoritative text.
					</p>
				</GlassCard>
			</div>
		</>
	);
}