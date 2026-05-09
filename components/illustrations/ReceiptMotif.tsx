export interface ReceiptMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function ReceiptMotif({
	className = "text-accent",
	"aria-label": ariaLabel,
}: ReceiptMotifProps) {
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
			{/* Receipt paper — isometric */}
			<path d="M100,20 L160,50 L160,150 L100,180 L40,150 L40,50 Z" />
			{/* Top zigzag tear */}
			<path d="M40,50 L55,45 L70,52 L85,45 L100,52 L115,45 L130,52 L145,45 L160,50" opacity="0.5" />
			{/* Header line */}
			<line x1="60" y1="65" x2="140" y2="95" opacity="0.6" />
			{/* Divider */}
			<line x1="55" y1="78" x2="145" y2="108" strokeDasharray="2 3" opacity="0.3" />
			{/* Line items */}
			<line x1="55" y1="88" x2="110" y2="110" opacity="0.4" />
			<line x1="125" y1="115" x2="145" y2="122" opacity="0.4" />
			<line x1="55" y1="98" x2="105" y2="118" opacity="0.4" />
			<line x1="125" y1="123" x2="145" y2="130" opacity="0.4" />
			<line x1="55" y1="108" x2="100" y2="126" opacity="0.4" />
			<line x1="125" y1="131" x2="145" y2="138" opacity="0.4" />
			{/* Total divider */}
			<line x1="55" y1="122" x2="145" y2="152" opacity="0.5" />
			<line x1="55" y1="125" x2="145" y2="155" opacity="0.5" />
			{/* Total amount */}
			<line x1="110" y1="142" x2="145" y2="158" opacity="0.6" strokeWidth="1.5" />
			{/* रु symbol */}
			<text x="65" y="142" fontSize="14" fill="currentColor" stroke="none" fontFamily="serif" opacity="0.7">रु</text>
			{/* Coins at base */}
			<ellipse cx="100" cy="188" rx="14" ry="5" opacity="0.3" />
			<ellipse cx="100" cy="184" rx="14" ry="5" opacity="0.4" />
		</svg>
	);
}
