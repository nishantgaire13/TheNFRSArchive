export interface DisplayHeadingProps {
	roman: string;
	italic: string;
	size?: "hero" | "page";
	className?: string;
	as?: "h1" | "h2";
}

export function DisplayHeading({
	roman,
	italic,
	size = "page",
	className = "",
	as: Tag = "h1",
}: DisplayHeadingProps) {
	const sizeClasses =
		size === "hero"
			? "text-[clamp(40px,10vw,72px)]"
			: "text-[clamp(32px,8vw,56px)]";

	return (
		<Tag
			className={`font-display leading-[1.05] font-light tracking-tight ${sizeClasses} ${className}`}
		>
			{roman}
			<br />
			<em className="italic">{italic}</em>
		</Tag>
	);
}
