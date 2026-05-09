export interface ScaleMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function ScaleMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Balance scale illustration",
}: ScaleMotifProps) {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label={ariaLabel}
			className={className}
		>
			{/* Finial on top */}
			<circle cx="100" cy="18" r="4" />
			{/* Central post */}
			<line x1="100" y1="22" x2="100" y2="140" />
			{/* Post detail bands */}
			<line x1="96" y1="48" x2="104" y2="48" />
			<line x1="96" y1="52" x2="104" y2="52" />
			{/* Beam — slightly tilted for life */}
			<line x1="32" y1="52" x2="168" y2="44" />
			{/* Beam thickness */}
			<line x1="32" y1="55" x2="168" y2="47" />
			{/* Fulcrum triangle */}
			<polygon points="100,42 94,50 106,50" />
			{/* Left pan chains */}
			<line x1="32" y1="55" x2="28" y2="92" />
			<line x1="32" y1="55" x2="62" y2="92" />
			{/* Left pan — isometric ellipse dish */}
			<ellipse cx="45" cy="94" rx="22" ry="8" />
			<path d="M23,94 Q23,102 45,102 Q67,102 67,94" />
			{/* Right pan chains */}
			<line x1="168" y1="47" x2="140" y2="80" />
			<line x1="168" y1="47" x2="170" y2="80" />
			{/* Right pan — isometric ellipse dish */}
			<ellipse cx="155" cy="82" rx="22" ry="8" />
			<path d="M133,82 Q133,90 155,90 Q177,90 177,82" />
			{/* Base — isometric platform */}
			<path d="M100,140 L130,155 L100,170 L70,155 Z" />
			<path d="M70,155 L70,160 L100,175 L130,160 L130,155" />
			<line x1="100" y1="170" x2="100" y2="175" />
			{/* Base step */}
			<path d="M100,175 L136,158 L136,162 L100,179 L64,162 L64,158 Z" />
			{/* Ground marks */}
			<line x1="56" y1="183" x2="144" y2="183" strokeDasharray="2 4" opacity="0.3" />
		</svg>
	);
}
