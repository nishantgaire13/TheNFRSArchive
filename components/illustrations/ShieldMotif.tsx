export interface ShieldMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function ShieldMotif({
	className = "text-accent",
	"aria-label": ariaLabel,
}: ShieldMotifProps) {
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
			{/* Shield shape — isometric */}
			<path d="M100,18 L155,45 L155,100 Q155,155 100,182 Q45,155 45,100 L45,45 Z" />
			{/* Inner shield border */}
			<path d="M100,32 L145,54 L145,100 Q145,148 100,170 Q55,148 55,100 L55,54 Z" opacity="0.4" />
			{/* Checkmark — protection symbol */}
			<polyline points="78,100 92,118 125,78" strokeWidth="2.5" opacity="0.8" />
			{/* Umbrella above shield — insurance symbol */}
			<g transform="translate(100,8)">
				<path d="M-30,0 Q-30,-20 0,-28 Q30,-20 30,0" opacity="0.4" />
				<line x1="0" y1="-28" x2="0" y2="-6" opacity="0.4" />
				<circle cx="0" cy="-30" r="2" opacity="0.4" />
			</g>
			{/* Document at base */}
			<g transform="translate(52,140)" opacity="0.35">
				<path d="M0,10 L12,4 L30,14 L18,20 Z" />
				<line x1="4" y1="12" x2="24" y2="16" />
				<line x1="6" y1="15" x2="20" y2="19" />
			</g>
		</svg>
	);
}
