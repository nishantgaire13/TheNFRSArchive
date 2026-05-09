export interface CoinsMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function CoinsMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Stacked coins illustration",
}: CoinsMotifProps) {
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
			{/* Tall stack — left */}
			{/* Top coin */}
			<ellipse cx="65" cy="40" rx="28" ry="12" />
			{/* Stack edges */}
			<path d="M37,40 L37,100" />
			<path d="M93,40 L93,100" />
			<ellipse cx="65" cy="100" rx="28" ry="12" />
			{/* Intermediate rings */}
			<path d="M37,52 Q65,66 93,52" opacity="0.4" />
			<path d="M37,64 Q65,78 93,64" opacity="0.4" />
			<path d="M37,76 Q65,90 93,76" opacity="0.4" />
			<path d="M37,88 Q65,102 93,88" opacity="0.4" />
			{/* Coin face detail on top */}
			<circle cx="65" cy="38" r="8" opacity="0.4" />
			<text x="61" y="42" fontSize="10" fill="currentColor" stroke="none" opacity="0.5">रु</text>

			{/* Medium stack — right */}
			<ellipse cx="140" cy="70" rx="24" ry="10" />
			<path d="M116,70 L116,118" />
			<path d="M164,70 L164,118" />
			<ellipse cx="140" cy="118" rx="24" ry="10" />
			<path d="M116,82 Q140,94 164,82" opacity="0.4" />
			<path d="M116,94 Q140,106 164,94" opacity="0.4" />
			<path d="M116,106 Q140,118 164,106" opacity="0.4" />
			{/* Coin face */}
			<circle cx="140" cy="68" r="7" opacity="0.4" />

			{/* Short stack — front center */}
			<ellipse cx="90" cy="130" rx="26" ry="11" />
			<path d="M64,130 L64,158" />
			<path d="M116,130 L116,158" />
			<ellipse cx="90" cy="158" rx="26" ry="11" />
			<path d="M64,142 Q90,154 116,142" opacity="0.4" />
			{/* Coin face */}
			<circle cx="90" cy="128" r="7" opacity="0.4" />

			{/* Single loose coin — flat on ground */}
			<ellipse cx="152" cy="152" rx="20" ry="8" />
			<path d="M132,152 L132,156" />
			<path d="M172,152 L172,156" />
			<ellipse cx="152" cy="156" rx="20" ry="8" />

			{/* Ground shadow hints */}
			<line x1="32" y1="175" x2="178" y2="175" strokeDasharray="2 5" opacity="0.2" />
		</svg>
	);
}
