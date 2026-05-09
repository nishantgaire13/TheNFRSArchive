export interface CalculatorMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function CalculatorMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Calculator illustration",
}: CalculatorMotifProps) {
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
			{/* Calculator body — isometric box */}
			{/* Top face */}
			<path d="M100,24 L160,54 L100,84 L40,54 Z" />
			{/* Left face */}
			<path d="M40,54 L40,150 L100,180 L100,84 Z" />
			{/* Right face */}
			<path d="M160,54 L160,150 L100,180 L100,84 Z" />
			{/* Display screen — recessed area on top face */}
			<path d="M72,39 L130,61 L110,71 L52,49 Z" opacity="0.6" />
			{/* Display text lines */}
			<line x1="62" y1="47" x2="100" y2="62" opacity="0.4" strokeDasharray="2 3" />
			{/* Button grid — isometric, 3×4 on the top face */}
			{/* Row 1 */}
			<rect x="56" y="51" width="10" height="5" rx="1" transform="skewY(26.57) skewX(0)" opacity="0" />
			<path d="M58,54 L72,60 L78,57 L64,51 Z" />
			<path d="M82,63 L96,69 L102,66 L88,60 Z" />
			<path d="M106,72 L120,78 L126,75 L112,69 Z" />
			{/* Row 2 */}
			<path d="M54,60 L68,66 L74,63 L60,57 Z" />
			<path d="M78,69 L92,75 L98,72 L84,66 Z" />
			<path d="M102,78 L116,84 L122,81 L108,75 Z" />
			{/* Row 3 */}
			<path d="M50,66 L64,72 L70,69 L56,63 Z" />
			<path d="M74,75 L88,81 L94,78 L80,72 Z" />
			<path d="M98,84 L112,90 L118,87 L104,81 Z" />
			{/* Row 4 — bottom row */}
			<path d="M46,72 L60,78 L66,75 L52,69 Z" />
			<path d="M70,81 L84,87 L90,84 L76,78 Z" />
			<path d="M94,90 L108,96 L114,93 L100,87 Z" />
			{/* Paper receipt coming out the top */}
			<path d="M126,44 L138,50 L138,30 Q135,26 132,30 Q129,34 126,28 L126,44" />
			{/* Receipt lines */}
			<line x1="128" y1="36" x2="136" y2="40" opacity="0.4" />
			<line x1="128" y1="40" x2="136" y2="44" opacity="0.4" />
			{/* Edge detail lines on body */}
			<line x1="42" y1="80" x2="100" y2="110" opacity="0.2" />
			<line x1="158" y1="80" x2="100" y2="110" opacity="0.2" />
		</svg>
	);
}
