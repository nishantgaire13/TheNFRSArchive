import type { DifferencesData } from "@/lib/standard-data/types";

export function SummaryMetrics({ data }: { data: DifferencesData }) {
	const metrics = [
		{ label: "Alignment", value: data.alignmentStatus },
		{ label: "Key Differences", value: String(data.keyDifferencesCount) },
		{ label: "Carve-outs", value: data.carveOutCount === 0 ? "None" : String(data.carveOutCount) },
		{ label: "Last Reviewed", value: data.lastReviewed },
	];

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8 min-w-0">
			{metrics.map((m) => (
				<div
					key={m.label}
					className="rounded-lg border border-border px-4 py-3 text-center min-w-0"
					style={{ background: "var(--glass-bg)", backdropFilter: "var(--glass-backdrop)" }}
				>
					<p className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-subtle mb-1">{m.label}</p>
					<p className="font-display text-lg font-normal text-text">{m.value}</p>
				</div>
			))}
		</div>
	);
}
