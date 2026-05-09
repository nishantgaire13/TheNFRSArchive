export interface AbacusMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function AbacusMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Abacus illustration",
}: AbacusMotifProps) {
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
			{/* Frame — isometric rectangle, upright */}
			{/* Top bar */}
			<path d="M40,30 L120,70 L160,50 L80,10 Z" />
			{/* Left post */}
			<line x1="40" y1="30" x2="40" y2="170" />
			<line x1="80" y1="10" x2="80" y2="150" />
			{/* Right post */}
			<line x1="120" y1="70" x2="120" y2="190" />
			<line x1="160" y1="50" x2="160" y2="170" />
			{/* Bottom bar */}
			<path d="M40,170 L120,190 L160,170 L80,150 Z" />
			{/* Horizontal rods with beads — 5 rods */}
			{/* Rod 1 */}
			<line x1="52" y1="50" x2="148" y2="78" opacity="0.4" />
			<ellipse cx="68" cy="54" rx="6" ry="3.5" />
			<ellipse cx="82" cy="58" rx="6" ry="3.5" />
			<ellipse cx="96" cy="62" rx="6" ry="3.5" />
			<ellipse cx="130" cy="72" rx="6" ry="3.5" />
			{/* Rod 2 */}
			<line x1="48" y1="72" x2="144" y2="100" opacity="0.4" />
			<ellipse cx="64" cy="76" rx="6" ry="3.5" />
			<ellipse cx="78" cy="80" rx="6" ry="3.5" />
			<ellipse cx="112" cy="92" rx="6" ry="3.5" />
			<ellipse cx="126" cy="96" rx="6" ry="3.5" />
			<ellipse cx="140" cy="100" rx="6" ry="3.5" />
			{/* Rod 3 */}
			<line x1="44" y1="94" x2="140" y2="122" opacity="0.4" />
			<ellipse cx="60" cy="98" rx="6" ry="3.5" />
			<ellipse cx="94" cy="108" rx="6" ry="3.5" />
			<ellipse cx="108" cy="112" rx="6" ry="3.5" />
			<ellipse cx="122" cy="116" rx="6" ry="3.5" />
			{/* Rod 4 */}
			<line x1="42" y1="116" x2="138" y2="144" opacity="0.4" />
			<ellipse cx="58" cy="120" rx="6" ry="3.5" />
			<ellipse cx="72" cy="124" rx="6" ry="3.5" />
			<ellipse cx="86" cy="128" rx="6" ry="3.5" />
			<ellipse cx="100" cy="132" rx="6" ry="3.5" />
			<ellipse cx="114" cy="136" rx="6" ry="3.5" />
			{/* Rod 5 */}
			<line x1="41" y1="138" x2="136" y2="166" opacity="0.4" />
			<ellipse cx="72" cy="146" rx="6" ry="3.5" />
			<ellipse cx="86" cy="150" rx="6" ry="3.5" />
			<ellipse cx="120" cy="160" rx="6" ry="3.5" />
			{/* Frame depth — side edges */}
			<path d="M80,10 L80,8 L40,28 L40,30" opacity="0.4" />
			<path d="M160,50 L160,48 L120,68 L120,70" opacity="0.4" />
		</svg>
	);
}
