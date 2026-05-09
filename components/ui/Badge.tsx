export type BadgeVariant = "aligned" | "carveout" | "deferred" | "not-adopted" | "neutral";

export interface BadgeProps {
	variant: BadgeVariant;
	children: React.ReactNode;
	className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
	aligned: "bg-aligned/15 text-aligned",
	carveout: "bg-carveout/15 text-carveout",
	deferred: "bg-deferred/15 text-deferred",
	"not-adopted": "bg-not-adopted/15 text-not-adopted",
	neutral: "bg-bg-subtle text-text-muted",
};

const labels: Record<BadgeVariant, string> = {
	aligned: "Aligned",
	carveout: "Carve-out",
	deferred: "Deferred",
	"not-adopted": "Not adopted",
	neutral: "",
};

export function Badge({ variant, children, className = "" }: BadgeProps) {
	return (
		<span
			className={`inline-flex items-center rounded-pill px-2.5 py-1 font-sans text-xs font-medium uppercase tracking-[0.08em] [font-feature-settings:"smcp"] ${variantStyles[variant]} ${className}`}
		>
			{children ?? labels[variant]}
		</span>
	);
}
