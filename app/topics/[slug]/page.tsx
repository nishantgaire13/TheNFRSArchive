import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, getStandardsByTopic, SITE_URL } from "@/lib/standards";
import { motifByKey } from "@/components/illustrations";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ClayCard } from "@/components/ui/ClayCard";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface Props {
	params: Promise<{ slug: string }>;
}

const statusToBadge: Record<string, BadgeVariant> = {
	aligned: "aligned",
	"carve-out": "carveout",
	deferred: "deferred",
	"not-adopted": "not-adopted",
};

export function generateStaticParams() {
	return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const topic = topics.find((t) => t.slug === slug);
	if (!topic) return {};

	const title = `${topic.label} standards — The NFRS Archive`;
	return {
		title,
		description: `All Nepal Financial Reporting Standards related to ${topic.label.toLowerCase()}. Side-by-side IFRS comparison.`,
		alternates: { canonical: `${SITE_URL}/topics/${slug}` },
	};
}

export default async function TopicPage({ params }: Props) {
	const { slug } = await params;
	const topic = topics.find((t) => t.slug === slug);
	if (!topic) notFound();

	const topicStandards = getStandardsByTopic(slug);

	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10">
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: topic.label, href: `/topics/${slug}` },
				]}
			/>

			<div className="mt-8 mb-10">
				<Eyebrow className="mb-3">Topic</Eyebrow>
				<h1 className="font-display text-[clamp(32px,8vw,48px)] leading-[1.1] font-light tracking-tight">
					{topic.label}
				</h1>
				<p className="font-serif text-lg text-text-muted mt-4 max-w-lg">
					All Nepal Financial Reporting Standards related to{" "}
					{topic.label.toLowerCase()}.
				</p>
			</div>

			{topicStandards.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{topicStandards.map((s) => {
						const Motif = s.heroMotif ? motifByKey[s.heroMotif] : null;
						return (
							<Link key={s.slug} href={`/standards/${s.slug}`}>
								<ClayCard hover padding="md" className="h-full">
									<div className="flex items-start justify-between gap-3">
										<div className="flex-1">
											<h2 className="font-display text-lg font-normal">
												{s.nfrsNumber}
											</h2>
											<p className="font-serif text-sm text-text-muted mt-1 leading-snug">
												{s.title}
											</p>
										</div>
										{Motif && (
											<Motif
												className="text-accent w-10 h-10 flex-shrink-0"
												aria-hidden="true"
											/>
										)}
									</div>
									<div className="mt-3">
										<Badge variant={statusToBadge[s.status] ?? "neutral"}>
											{s.status === "carve-out"
												? "Carve-out"
												: s.status === "not-adopted"
													? "Not adopted"
													: s.status.charAt(0).toUpperCase() + s.status.slice(1)}
										</Badge>
									</div>
									<p className="font-serif text-sm text-text-muted mt-2 leading-snug">
										{s.summary}
									</p>
								</ClayCard>
							</Link>
						);
					})}
				</div>
			) : (
				<p className="font-serif text-text-muted">
					No standards in this topic yet. Check back soon.
				</p>
			)}
		</div>
	);
}
