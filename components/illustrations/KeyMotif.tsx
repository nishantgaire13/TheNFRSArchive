export interface KeyMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function KeyMotif({
	className = "text-accent",
	"aria-label": ariaLabel,
}: KeyMotifProps) {
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
			{/* Building — isometric block */}
			<path d="M60,60 L100,40 L140,60 L140,130 L100,150 L60,130 Z" />
			<line x1="100" y1="40" x2="100" y2="150" opacity="0.3" />
			{/* Windows left face */}
			<rect x="68" y="72" width="10" height="8" rx="1" opacity="0.4" transform="skewY(-30) translate(0,62)" />
			<rect x="68" y="92" width="10" height="8" rx="1" opacity="0.4" transform="skewY(-30) translate(0,62)" />
			<rect x="82" y="72" width="10" height="8" rx="1" opacity="0.4" transform="skewY(-30) translate(0,62)" />
			<rect x="82" y="92" width="10" height="8" rx="1" opacity="0.4" transform="skewY(-30) translate(0,62)" />
			{/* Windows right face */}
			<path d="M108,88 L118,83 L118,91 L108,96 Z" opacity="0.4" />
			<path d="M108,102 L118,97 L118,105 L108,110 Z" opacity="0.4" />
			<path d="M124,82 L134,77 L134,85 L124,90 Z" opacity="0.4" />
			<path d="M124,96 L134,91 L134,99 L124,104 Z" opacity="0.4" />
			{/* Door */}
			<path d="M90,130 L100,135 L100,150 L90,145 Z" opacity="0.5" />
			{/* Roof line */}
			<path d="M56,58 L100,36 L144,58" opacity="0.4" />
			{/* Key — large, overlapping building */}
			<g transform="translate(70,120)">
				{/* Key head — circle */}
				<circle cx="20" cy="30" r="18" />
				<circle cx="20" cy="30" r="10" opacity="0.4" />
				{/* Key shaft */}
				<line x1="38" y1="30" x2="100" y2="30" strokeWidth="1.5" />
				{/* Key teeth */}
				<line x1="80" y1="30" x2="80" y2="40" />
				<line x1="90" y1="30" x2="90" y2="38" />
				<line x1="100" y1="30" x2="100" y2="42" />
			</g>
			{/* Ground shadow */}
			<ellipse cx="100" cy="175" rx="50" ry="8" opacity="0.1" />
		</svg>
	);
}
