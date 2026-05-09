export interface EyebrowProps {
	children: React.ReactNode;
	className?: string;
	as?: "p" | "span" | "div";
}

export function Eyebrow({ children, className = "", as: Tag = "p" }: EyebrowProps) {
	return (
		<Tag
			className={`font-sans text-sm uppercase tracking-[0.08em] text-text-subtle font-medium [font-feature-settings:"smcp"] ${className}`}
		>
			{children}
		</Tag>
	);
}
