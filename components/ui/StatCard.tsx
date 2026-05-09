import { Eyebrow } from "./Eyebrow";

export interface StatCardProps {
	label: string;
	value: string;
	delta?: string;
	deltaDirection?: "up" | "down" | "neutral";
	className?: string;
}

const deltaColors = {
	up: "text-aligned",
	down: "text-deferred",
	neutral: "text-text-muted",
};

export function StatCard({
	label,
	value,
	delta,
	deltaDirection = "neutral",
	className = "",
}: StatCardProps) {
	return (
		<div
			className={`rounded-lg bg-bg-elevated shadow-clay-md border border-transparent p-6 ${className}`}
		>
			<Eyebrow className="text-xs mb-2">{label}</Eyebrow>
			<p className="font-display text-4xl font-light tracking-tight text-text">
				{value}
			</p>
			{delta && (
				<p className={`font-sans text-sm mt-1 ${deltaColors[deltaDirection]}`}>
					{deltaDirection === "up" && "↑ "}
					{deltaDirection === "down" && "↓ "}
					{delta}
				</p>
			)}
		</div>
	);
}
