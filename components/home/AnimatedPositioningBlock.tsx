"use client";

import { ArchiveMotif } from "@/components/illustrations/ArchiveMotif";
import { Button } from "@/components/ui/Button";
import { useEntranceAnimation } from "./useEntranceAnimation";
import { useRef } from "react";

function AnimatedPositioningBlock() {
	const blockRef = useRef<HTMLDivElement>(null);
	useEntranceAnimation(blockRef, 0.2);

	const words = "static spreadsheet.".split(" ");

	return (
		<div ref={blockRef} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
			{/* Left illustration */}
			<div
				className="md:col-span-5 entrance-block-left"
				data-entrance="left"
			>
				<ArchiveMotif className="text-accent w-full h-auto" />
			</div>

			{/* Right text block */}
			<div className="md:col-span-7 entrance-block-right" data-entrance="right">
				<h2 className="font-display text-[clamp(28px,6vw,48px)] leading-[1.1] font-light mb-6 entrance-heading" data-entrance="heading" data-stagger="0">
					Beyond the
					<br />
					<em className="italic text-accent">
						{words.map((word, i) => (
							<span
								key={i}
								className="entrance-word"
								data-entrance="word"
								data-stagger={String(300 + i * 60)}
							>
								{word}
								{i < words.length - 1 ? " " : ""}
							</span>
						))}
					</em>
				</h2>
				<p className="font-serif text-base text-text-muted leading-relaxed mb-4 max-w-lg">
					Nepali auditors, CA students, and in-house accountants currently
					cross-reference scattered PDFs to understand how NFRS departs from
					IFRS. This site replaces that workflow with a single, searchable,
					always-up-to-date reference.
				</p>
				<p className="font-serif text-base text-text-muted leading-relaxed mb-8 max-w-lg">
					Every standard is explained in original commentary, never
					reproduced text. Paragraph citations let you verify every claim
					against the authoritative source.
				</p>
				<div className="flex flex-wrap gap-4">
					<span className="entrance-cta" data-entrance="cta" data-stagger="0">
						<Button variant="primary" href="/carve-outs">
							See all carve-outs
						</Button>
					</span>
					<span className="entrance-cta" data-entrance="cta" data-stagger="100">
						<Button variant="link" href="/about">
							Our methodology
						</Button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default AnimatedPositioningBlock;