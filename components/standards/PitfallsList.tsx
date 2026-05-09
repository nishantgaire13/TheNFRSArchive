import type { PitfallData } from "@/lib/standard-data/types";

const sectorColors: Record<string, string> = {
	Construction: "bg-[#c88a2e]/15 text-[#c88a2e] dark:bg-[#e0a060]/15 dark:text-[#e0a060]",
	"Real Estate": "bg-[#8b1a1a]/15 text-[#8b1a1a] dark:bg-[#d46a6a]/15 dark:text-[#d46a6a]",
	"Trading & Distribution": "bg-[#1a4d8b]/15 text-[#1a4d8b] dark:bg-[#6a9fd4]/15 dark:text-[#6a9fd4]",
	Technology: "bg-[#6b1a8b]/15 text-[#6b1a8b] dark:bg-[#b46ad4]/15 dark:text-[#b46ad4]",
	"Listed Companies": "bg-[#4a6b3f]/15 text-[#4a6b3f] dark:bg-[#8fbb7c]/15 dark:text-[#8fbb7c]",
};

export function PitfallsList({ pitfalls }: { pitfalls: PitfallData[] }) {
	if (pitfalls.length === 0) return null;

	return (
		<div className="mb-8">
			<p className="font-sans text-xs uppercase tracking-[0.1em] text-text-subtle font-medium mb-4">
				Nepal-Specific Pitfalls
			</p>
			<div className="space-y-3">
				{pitfalls.map((p) => (
					<div
						key={p.title}
						className="rounded-lg border border-border p-4 border-l-4 border-l-[#c88a2e]"
						style={{ background: "var(--glass-bg)", backdropFilter: "var(--glass-backdrop)" }}
					>
						<div className="flex items-start justify-between gap-3 mb-2">
							<h4 className="font-sans text-sm font-medium text-text">{p.title}</h4>
							<span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${sectorColors[p.sector] ?? "bg-border text-text-muted"}`}>
								{p.sector}
							</span>
						</div>
						<p className="font-serif text-sm text-text-muted leading-relaxed">
							{p.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
