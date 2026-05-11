"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PriorityGrid, PriorityGridItem } from "@/components/home/PriorityGrid";
import { ClayCard } from "@/components/ui/ClayCard";
import { StandardIcon } from "@/components/ui/StandardIcon";
import { useEntranceAnimation } from "@/components/home/useEntranceAnimation";
import { useRef } from "react";

interface Standard {
	slug: string;
	nfrsNumber: string;
	title: string;
	heroMotif?: string;
}

export function PriorityStandardsSection({
	standards,
}: {
	standards: (Standard | null | undefined)[] | readonly (Standard | null | undefined)[];
}) {
	const ref = useRef<HTMLDivElement>(null);
	useEntranceAnimation(ref, 0.1);

	return (
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
			<div ref={ref}>
				<PriorityGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{standards.map((s, i) => {
						if (!s) return null;
						return (
							<PriorityGridItem key={s.slug} index={i}>
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
			</div>
		</section>
	);
}