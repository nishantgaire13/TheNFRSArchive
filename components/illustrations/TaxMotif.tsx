export interface TaxMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function TaxMotif({
	className = "text-accent",
	"aria-label": ariaLabel,
}: TaxMotifProps) {
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
			{/* Tax form — isometric document */}
			<path d="M50,40 L110,10 L160,35 L160,150 L100,180 L50,155 Z" />
			{/* Inner border */}
			<path d="M58,48 L110,22 L152,43 L152,144 L100,170 L58,149 Z" opacity="0.3" />
			{/* Header block */}
			<path d="M65,52 L110,30 L145,47 L100,69 Z" opacity="0.15" fill="currentColor" />
			{/* "TAX" text placeholder */}
			<line x1="78" y1="48" x2="115" y2="38" strokeWidth="1.5" opacity="0.5" />
			{/* Form lines */}
			<line x1="65" y1="80" x2="130" y2="100" opacity="0.35" />
			<line x1="65" y1="90" x2="130" y2="110" opacity="0.35" />
			<line x1="65" y1="100" x2="130" y2="120" opacity="0.35" />
			<line x1="65" y1="110" x2="130" y2="130" opacity="0.35" />
			{/* Checkbox squares */}
			<rect x="62" y="77" width="5" height="5" opacity="0.4" />
			<rect x="62" y="87" width="5" height="5" opacity="0.4" />
			<path d="M63,90 L64,92 L67,88" opacity="0.5" />
			<rect x="62" y="97" width="5" height="5" opacity="0.4" />
			{/* Amount field */}
			<path d="M100,125 L145,140 L145,148 L100,133 Z" opacity="0.25" />
			{/* रु symbol */}
			<text x="105" y="138" fontSize="10" fill="currentColor" stroke="none" fontFamily="serif" opacity="0.5">रु</text>
			{/* Percentage symbol */}
			<g transform="translate(140,55)" opacity="0.4">
				<circle cx="0" cy="0" r="6" />
				<line x1="-6" y1="8" x2="6" y2="-8" strokeWidth="1" />
				<circle cx="6" cy="8" r="6" />
			</g>
			{/* Stamp / seal at bottom */}
			<circle cx="85" cy="155" r="10" opacity="0.25" />
			<circle cx="85" cy="155" r="6" opacity="0.2" />
		</svg>
	);
}
