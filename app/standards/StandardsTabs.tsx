"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { StandardEntry } from "@/lib/standards";
import { StandardIconSvg } from "@/components/ui/StandardIcon";
import { ClayCard } from "@/components/ui/ClayCard";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";

const statusToBadge: Record<string, BadgeVariant> = {
	aligned: "aligned",
	"carve-out": "carveout",
	deferred: "deferred",
	"not-adopted": "not-adopted",
};

function StandardCard({ s }: { s: StandardEntry }) {
	return (
		<Link href={`/standards/${s.slug}`}>
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
					{s.heroMotif && (
						<StandardIconSvg
							motif={s.heroMotif}
							className="text-accent w-10 h-10 flex-shrink-0"
						/>
					)}
				</div>
				<div className="flex items-center gap-2 mt-3">
					<Badge variant={statusToBadge[s.status] ?? "neutral"}>
						{s.status === "carve-out"
							? "Carve-out"
							: s.status === "not-adopted"
								? "Not adopted"
								: s.status.charAt(0).toUpperCase() + s.status.slice(1)}
					</Badge>
					<span className="font-sans text-xs text-text-subtle">
						≅ {s.ifrsEquivalent}
					</span>
				</div>
			</ClayCard>
		</Link>
	);
}

type Tab = "nas" | "nfrs";

export function StandardsTabs({
	nasStandards,
	nfrsStandards,
}: {
	nasStandards: StandardEntry[];
	nfrsStandards: StandardEntry[];
}) {
	const [active, setActive] = useState<Tab>("nas");

	const tabs: { key: Tab; label: string; count: number }[] = [
		{ key: "nas", label: "NAS (IAS)", count: nasStandards.length },
		{ key: "nfrs", label: "NFRS (IFRS)", count: nfrsStandards.length },
	];

	const current = active === "nas" ? nasStandards : nfrsStandards;

	return (
		<>
			<div className="flex gap-1 mb-8 border-b border-border" role="tablist">
				{tabs.map((tab) => (
					<button
						key={tab.key}
						role="tab"
						aria-selected={active === tab.key}
						onClick={() => setActive(tab.key)}
						className={`relative px-5 py-3 font-display text-sm tracking-wide transition-colors cursor-pointer ${
							active === tab.key
								? "text-accent"
								: "text-text-muted hover:text-text-default"
						}`}
					>
						{tab.label}
						<span
							className={`ml-2 text-xs font-sans ${
								active === tab.key ? "text-accent/70" : "text-text-subtle"
							}`}
						>
							{tab.count}
						</span>
						{active === tab.key && (
							<motion.div
								layoutId="standards-tab-indicator"
								className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
								transition={{ type: "spring", stiffness: 400, damping: 30 }}
							/>
						)}
					</button>
				))}
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					key={active}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.2, ease: "easeOut" as const }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
				>
					{current.map((s, i) => (
						<motion.div
							key={s.slug}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" as const }}
							whileHover={{ y: -2, transition: { duration: 0.15 } }}
						>
							<StandardCard s={s} />
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
