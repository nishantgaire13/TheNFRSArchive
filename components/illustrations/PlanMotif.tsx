export interface PlanMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function PlanMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Architectural plan illustration",
}: PlanMotifProps) {
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
			{/* Blueprint sheet — isometric angled */}
			<path d="M20,80 L100,40 L180,80 L100,120 Z" />
			{/* Sheet depth */}
			<path d="M20,80 L20,84 L100,124 L180,84 L180,80" opacity="0.5" />
			<line x1="100" y1="120" x2="100" y2="124" opacity="0.5" />
			{/* Grid lines — horizontal */}
			<line x1="34" y1="80" x2="100" y2="48" opacity="0.25" strokeDasharray="2 3" />
			<line x1="40" y1="86" x2="100" y2="56" opacity="0.25" strokeDasharray="2 3" />
			<line x1="46" y1="92" x2="100" y2="64" opacity="0.25" strokeDasharray="2 3" />
			<line x1="52" y1="98" x2="100" y2="72" opacity="0.25" strokeDasharray="2 3" />
			{/* Grid lines — vertical */}
			<line x1="100" y1="48" x2="166" y2="80" opacity="0.25" strokeDasharray="2 3" />
			<line x1="100" y1="56" x2="160" y2="86" opacity="0.25" strokeDasharray="2 3" />
			<line x1="100" y1="64" x2="154" y2="92" opacity="0.25" strokeDasharray="2 3" />
			<line x1="100" y1="72" x2="148" y2="98" opacity="0.25" strokeDasharray="2 3" />
			{/* Floor plan — room outlines */}
			<path d="M60,80 L80,70 L110,85 L90,95 Z" opacity="0.7" />
			<path d="M110,85 L130,75 L150,85 L130,95 Z" opacity="0.7" />
			<path d="M80,95 L100,85 L110,90 L90,100 Z" opacity="0.7" />
			{/* Door opening */}
			<path d="M95,92 Q98,90 100,88" opacity="0.6" />
			{/* Dimension lines */}
			<line x1="50" y1="72" x2="86" y2="54" opacity="0.4" />
			<line x1="50" y1="70" x2="50" y2="74" opacity="0.4" />
			<line x1="86" y1="52" x2="86" y2="56" opacity="0.4" />
			{/* Scale compass mark — bottom right */}
			<circle cx="148" cy="102" r="8" opacity="0.4" />
			<line x1="148" y1="94" x2="148" y2="98" opacity="0.4" />
			<line x1="148" y1="106" x2="148" y2="110" opacity="0.4" />
			<line x1="140" y1="102" x2="144" y2="102" opacity="0.4" />
			<line x1="152" y1="102" x2="156" y2="102" opacity="0.4" />
			{/* Rolled corner — top right */}
			<path d="M168,76 Q172,74 170,70 Q168,66 164,68" opacity="0.5" />
			{/* Pen / drafting tool resting on sheet */}
			<line x1="38" y1="100" x2="58" y2="108" opacity="0.5" />
			<path d="M36,99 L38,100 L37,102 Z" opacity="0.5" />
			{/* Ground */}
			<line x1="30" y1="135" x2="170" y2="135" strokeDasharray="2 5" opacity="0.2" />
		</svg>
	);
}
