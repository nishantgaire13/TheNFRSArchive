import { Eyebrow } from "./Eyebrow";

export type CalloutVariant = "info" | "warning" | "example" | "exam" | "legal";

export interface CalloutProps {
	variant: CalloutVariant;
	title?: string;
	children: React.ReactNode;
	className?: string;
}

const config: Record<CalloutVariant, { eyebrow: string; borderColor: string }> = {
	info: { eyebrow: "NOTE", borderColor: "border-l-accent" },
	warning: { eyebrow: "WATCH OUT FOR", borderColor: "border-l-carveout" },
	example: { eyebrow: "EXAMPLE —", borderColor: "border-l-aligned" },
	exam: { eyebrow: "FOR STUDENTS", borderColor: "border-l-accent-soft" },
	legal: { eyebrow: "DISCLAIMER", borderColor: "border-l-text-muted" },
};

export function Callout({ variant, title, children, className = "" }: CalloutProps) {
	const { eyebrow, borderColor } = config[variant];

	return (
		<div
			className={`rounded-lg bg-bg-elevated shadow-clay-md border border-transparent border-l-[3px] ${borderColor} p-6 ${className}`}
		>
			<Eyebrow className="mb-1 text-xs">{eyebrow}</Eyebrow>
			{title && (
				<p className="font-serif text-base font-semibold text-text mb-2">{title}</p>
			)}
			<div className="font-serif text-base text-text-muted leading-relaxed [&>p+p]:mt-3">
				{children}
			</div>
		</div>
	);
}
