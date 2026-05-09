import type { RegulatoryOverlay as RegulatoryOverlayType } from "@/lib/standard-data/types";

const regulators = [
	{ key: "nrb" as const, label: "Nepal Rastra Bank (NRB)", icon: "🏦", color: "border-l-[#1a4d8b]" },
	{ key: "sebon" as const, label: "Securities Board (SEBON)", icon: "📊", color: "border-l-[#8b6914]" },
	{ key: "ird" as const, label: "Inland Revenue (IRD)", icon: "📋", color: "border-l-[#4a6b3f]" },
];

export function RegulatoryOverlaySection({ data }: { data: RegulatoryOverlayType }) {
	const activeRegulators = regulators.filter((r) => data[r.key]);
	if (activeRegulators.length === 0) return null;

	return (
		<div className="mb-8">
			<p className="font-sans text-xs uppercase tracking-[0.1em] text-text-subtle font-medium mb-4">
				Regulatory Overlay
			</p>
			<div className="space-y-3">
				{activeRegulators.map((reg) => (
					<div
						key={reg.key}
						className={`rounded-lg border border-border border-l-4 ${reg.color} p-4`}
						style={{ background: "var(--glass-bg)", backdropFilter: "var(--glass-backdrop)" }}
					>
						<div className="flex items-center gap-2 mb-2">
							<span className="text-base">{reg.icon}</span>
							<h4 className="font-sans text-sm font-medium text-text">{reg.label}</h4>
						</div>
						<p className="font-serif text-sm text-text-muted leading-relaxed">
							{data[reg.key]}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
