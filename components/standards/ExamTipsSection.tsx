import type { ExamTip } from "@/lib/standard-data/types";

function TipCard({ tip }: { tip: ExamTip }) {
	return (
		<div className="rounded-lg border border-border p-4 hover:border-accent/30 transition-colors"
			style={{ background: "var(--glass-bg)", backdropFilter: "var(--glass-backdrop)" }}
		>
			<p className="font-mono text-[10px] uppercase tracking-wider text-accent mb-2">
				{tip.source}
			</p>
			<p className="font-serif text-sm text-text-muted leading-relaxed">
				{tip.tip}
			</p>
		</div>
	);
}

interface ExamTipsSectionProps {
	acca: ExamTip[];
	ican: ExamTip[] | null;
}

export function ExamTipsSection({ acca, ican }: ExamTipsSectionProps) {
	const hasAcCA = acca.length > 0;
	const hasICAN = ican && ican.length > 0;

	if (!hasAcCA && !hasICAN) return null;

	return (
		<div className="mb-8">
			<p className="font-sans text-xs uppercase tracking-[0.1em] text-text-subtle font-medium mb-4">
				Exam Tips
			</p>
			{hasAcCA && hasICAN ? (
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* ACCA Column */}
					<div>
						<div className="flex items-center gap-2 mb-3">
							<span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-fg">
								ACCA SBR
							</span>
						</div>
						<div className="space-y-3">
							{acca.map((tip, i) => (
								<TipCard key={i} tip={tip} />
							))}
						</div>
					</div>
					{/* ICAN Column */}
					<div>
						<div className="flex items-center gap-2 mb-3">
							<span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1a4d8b] text-white">
								CA Nepal
							</span>
						</div>
						<div className="space-y-3">
							{ican!.map((tip, i) => (
								<TipCard key={i} tip={tip} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className="flex items-center gap-2 mb-3">
						<span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-fg">
							{hasAcCA ? "ACCA SBR" : "CA Nepal"}
						</span>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						{(hasAcCA ? acca : ican!).map((tip, i) => (
							<TipCard key={i} tip={tip} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}
