export interface QuoteCardProps {
	quote: string;
	citation?: string;
	ornament?: "§" | "“";
	variant?: "glass" | "bordered";
	className?: string;
}

export function QuoteCard({
	quote,
	citation,
	ornament = "“",
	variant = "bordered",
	className = "",
}: QuoteCardProps) {
	if (variant === "glass") {
		return (
			<figure
				className={`rounded-lg shadow-clay-md border border-[var(--glass-border)] p-6 ${className}`}
				style={{
					background: "var(--glass-bg)",
					backdropFilter: "var(--glass-backdrop)",
					WebkitBackdropFilter: "var(--glass-backdrop)",
				}}
			>
				<span className="block font-display text-4xl text-accent/30 leading-none mb-2" aria-hidden="true">
					{ornament}
				</span>
				<blockquote className="font-serif text-lg text-text italic leading-relaxed">
					{quote}
				</blockquote>
				{citation && (
					<figcaption className="font-sans text-sm text-text-muted mt-3">
						{citation}
					</figcaption>
				)}
			</figure>
		);
	}

	return (
		<figure
			className={`border-l-[3px] border-l-accent pl-6 py-2 ${className}`}
		>
			<span className="block font-display text-4xl text-accent/30 leading-none mb-2" aria-hidden="true">
				{ornament}
			</span>
			<blockquote className="font-serif text-lg text-text italic leading-relaxed">
				{quote}
			</blockquote>
			{citation && (
				<figcaption className="font-sans text-sm text-text-muted mt-3">
					{citation}
				</figcaption>
			)}
		</figure>
	);
}
