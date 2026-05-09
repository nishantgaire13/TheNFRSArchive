export interface GlassCardProps {
	children: React.ReactNode;
	className?: string;
	padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
	sm: "p-4",
	md: "p-6",
	lg: "p-8",
};

export function GlassCard({
	children,
	className = "",
	padding = "md",
}: GlassCardProps) {
	return (
		<div
			className={`rounded-lg shadow-clay-md border border-[var(--glass-border)] ${paddingClasses[padding]} ${className}`}
			style={{
				background: "var(--glass-bg)",
				backdropFilter: "var(--glass-backdrop)",
				WebkitBackdropFilter: "var(--glass-backdrop)",
			}}
		>
			{children}
		</div>
	);
}
