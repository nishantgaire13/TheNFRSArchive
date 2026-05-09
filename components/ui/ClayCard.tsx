export interface ClayCardProps {
	children: React.ReactNode;
	className?: string;
	padding?: "sm" | "md" | "lg";
	hover?: boolean;
	as?: React.ElementType;
}

const paddingClasses = {
	sm: "p-4",
	md: "p-6",
	lg: "p-8",
};

export function ClayCard({
	children,
	className = "",
	padding = "md",
	hover = false,
	as: Tag = "div",
}: ClayCardProps) {
	return (
		<Tag
			className={`rounded-lg bg-bg-elevated shadow-clay-md border border-transparent ${paddingClasses[padding]} ${hover ? "transition-[transform,box-shadow] duration-[180ms] ease-out hover:-translate-y-0.5 hover:shadow-clay-lg" : ""} ${className}`}
		>
			{children}
		</Tag>
	);
}
