export interface PagodaMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function PagodaMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Pagoda illustration",
}: PagodaMotifProps) {
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
			{/* Spire */}
			<line x1="100" y1="12" x2="100" y2="28" />
			<circle cx="100" cy="10" r="2.5" />
			{/* Top tier roof */}
			<polyline points="100,28 124,40 100,52 76,40 100,28" />
			<line x1="76" y1="40" x2="76" y2="44" />
			<line x1="124" y1="40" x2="124" y2="44" />
			<line x1="100" y1="52" x2="100" y2="56" />
			{/* Top tier body */}
			<polyline points="84,44 84,56 100,64 116,56 116,44" />
			<line x1="92" y1="48" x2="92" y2="60" />
			<line x1="108" y1="48" x2="108" y2="60" />
			{/* Mid tier roof — wider */}
			<polyline points="100,56 132,72 100,88 68,72 100,56" />
			<line x1="68" y1="72" x2="68" y2="77" />
			<line x1="132" y1="72" x2="132" y2="77" />
			<line x1="100" y1="88" x2="100" y2="93" />
			{/* Strut lines on mid roof */}
			<line x1="84" y1="64" x2="78" y2="74" />
			<line x1="116" y1="64" x2="122" y2="74" />
			{/* Mid tier body */}
			<polyline points="76,77 76,93 100,105 124,93 124,77" />
			<line x1="88" y1="82" x2="88" y2="99" />
			<line x1="100" y1="87" x2="100" y2="105" />
			<line x1="112" y1="82" x2="112" y2="99" />
			{/* Bottom tier roof — widest */}
			<polyline points="100,93 140,113 100,133 60,113 100,93" />
			<line x1="60" y1="113" x2="60" y2="119" />
			<line x1="140" y1="113" x2="140" y2="119" />
			<line x1="100" y1="133" x2="100" y2="139" />
			{/* Strut lines on bottom roof */}
			<line x1="76" y1="100" x2="68" y2="114" />
			<line x1="124" y1="100" x2="132" y2="114" />
			{/* Bottom tier body */}
			<polyline points="68,119 68,139 100,155 132,139 132,119" />
			<line x1="80" y1="124" x2="80" y2="147" />
			<line x1="92" y1="128" x2="92" y2="151" />
			<line x1="108" y1="128" x2="108" y2="147" />
			<line x1="120" y1="124" x2="120" y2="143" />
			{/* Door archway on front face */}
			<path d="M94,155 L94,143 Q100,136 106,143 L106,155" />
			{/* Platform / base — isometric rectangle */}
			<polyline points="100,155 144,133 144,139 100,161 56,139 56,133 100,155" />
			<line x1="100" y1="155" x2="100" y2="161" />
			{/* Base step */}
			<polyline points="100,161 148,137 148,141 100,165 52,141 52,137 100,161" />
			{/* Ground hatching */}
			<line x1="60" y1="168" x2="140" y2="168" strokeDasharray="2 4" opacity="0.4" />
			<line x1="64" y1="172" x2="136" y2="172" strokeDasharray="2 4" opacity="0.3" />
		</svg>
	);
}
