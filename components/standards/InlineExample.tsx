import type { ExampleData } from "@/lib/standard-data/types";

const difficultyLabels: Record<string, string> = {
	beginner: "Beginner",
	medium: "Standard",
	pro: "Advanced",
};

const difficultyColors: Record<string, string> = {
	beginner: "bg-[#4a6b3f]/15 text-[#4a6b3f]",
	medium: "bg-[#c88a2e]/15 text-[#c88a2e]",
	pro: "bg-[#8b1a1a]/15 text-[#8b1a1a]",
};

export function InlineExample({ example }: { example: ExampleData }) {
	return (
		<div
			className="rounded-lg border border-border p-5 mb-6"
			style={{ background: "var(--glass-bg)", backdropFilter: "var(--glass-backdrop)" }}
		>
			<div className="flex items-center gap-2 mb-3">
				<h4 className="font-display text-base font-normal text-text">{example.title}</h4>
				<span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${difficultyColors[example.difficulty] ?? ""}`}>
					{difficultyLabels[example.difficulty] ?? example.difficulty}
				</span>
			</div>

			<p className="font-serif text-sm text-text-muted leading-relaxed mb-4 italic">
				{example.context}
			</p>

			<div className="space-y-2 mb-4">
				{example.steps.map((step, i) => (
					<div key={i} className="flex gap-3">
						<span className="font-mono text-xs text-accent mt-0.5 flex-shrink-0">{i + 1}.</span>
						<p className="font-serif text-sm text-text-muted leading-relaxed">{step}</p>
					</div>
				))}
			</div>

			{example.journalEntries && example.journalEntries.length > 0 && (
				<div className="mt-4 pt-4 border-t border-border">
					<p className="font-sans text-xs uppercase tracking-[0.1em] text-text-subtle font-medium mb-3">
						Journal Entries
					</p>
					<div className="space-y-1.5">
						{example.journalEntries.map((entry, i) => (
							<p key={i} className="font-mono text-xs text-text-muted leading-relaxed pl-3 border-l-2 border-accent/30">
								{entry}
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
