"use client";

import Link from "next/link";
import { useEntranceAnimation } from "./useEntranceAnimation";
import { useRef } from "react";

interface Topic {
	slug: string;
	label: string;
}

export function BrowseByTopicSection({ topics }: { topics: readonly Topic[] }) {
	const ref = useRef<HTMLDivElement>(null);
	useEntranceAnimation(ref, 0.15);

	return (
		<section
			ref={ref}
			className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16"
		>
			<h2
				className="font-display text-2xl font-light mb-6 entrance-heading"
				data-entrance="heading"
				data-stagger="0"
			>
				Browse by topic
			</h2>
			<div className="flex flex-wrap gap-2.5">
				{topics.map((t, i) => (
					<Link
						key={t.slug}
						href={`/topics/${t.slug}`}
						className="entrance-chip"
						data-entrance="chip"
						data-stagger={String(i * 50)}
					>
						<span className="font-sans text-sm px-4 py-2 rounded-pill border border-border bg-bg-elevated hover:border-accent hover:bg-accent hover:text-accent-fg transition-all duration-150">
							{t.label}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
}