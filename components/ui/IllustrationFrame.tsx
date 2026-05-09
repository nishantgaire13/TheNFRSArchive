export interface IllustrationFrameProps {
	children: React.ReactNode;
	alt?: string;
	className?: string;
	size?: "sm" | "md" | "lg" | "wide";
}

const sizeClasses = {
	sm: "w-20 h-20",
	md: "w-[200px] h-[200px]",
	lg: "w-full max-w-[600px] aspect-square",
	wide: "w-full max-w-[540px] h-[200px]",
};

export function IllustrationFrame({
	children,
	alt,
	className = "",
	size = "md",
}: IllustrationFrameProps) {
	return (
		<div
			role={alt ? "img" : "presentation"}
			aria-label={alt}
			aria-hidden={!alt}
			className={`inline-flex items-center justify-center bg-bg rounded-lg shadow-clay-md ${sizeClasses[size]} ${className}`}
		>
			{children}
		</div>
	);
}
