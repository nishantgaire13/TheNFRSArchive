export interface LedgerMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function LedgerMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Ledger book illustration",
}: LedgerMotifProps) {
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
			{/* Open book — isometric, pages fanning out */}
			{/* Left cover (back) */}
			<path d="M30,120 L30,60 L100,30 L100,90 Z" />
			{/* Right cover (back) */}
			<path d="M170,120 L170,60 L100,30 L100,90 Z" />
			{/* Spine */}
			<line x1="100" y1="30" x2="100" y2="90" />
			{/* Left pages — ruled lines */}
			<line x1="40" y1="68" x2="95" y2="42" opacity="0.5" />
			<line x1="40" y1="76" x2="95" y2="50" opacity="0.5" />
			<line x1="40" y1="84" x2="95" y2="58" opacity="0.5" />
			<line x1="40" y1="92" x2="95" y2="66" opacity="0.5" />
			<line x1="40" y1="100" x2="95" y2="74" opacity="0.5" />
			<line x1="40" y1="108" x2="95" y2="82" opacity="0.5" />
			{/* Margin line — left page */}
			<line x1="50" y1="63" x2="50" y2="115" opacity="0.35" strokeDasharray="1 2" />
			{/* Right pages — ruled lines */}
			<line x1="105" y1="42" x2="160" y2="68" opacity="0.5" />
			<line x1="105" y1="50" x2="160" y2="76" opacity="0.5" />
			<line x1="105" y1="58" x2="160" y2="84" opacity="0.5" />
			<line x1="105" y1="66" x2="160" y2="92" opacity="0.5" />
			<line x1="105" y1="74" x2="160" y2="100" opacity="0.5" />
			<line x1="105" y1="82" x2="160" y2="108" opacity="0.5" />
			{/* Margin line — right page */}
			<line x1="150" y1="63" x2="150" y2="115" opacity="0.35" strokeDasharray="1 2" />
			{/* Page edges (stacked pages below cover) */}
			<path d="M32,122 L100,92 L168,122" opacity="0.5" />
			<path d="M34,124 L100,94 L166,124" opacity="0.35" />
			{/* Closed book below — stacked */}
			<path d="M36,140 L36,130 L100,100 L164,130 L164,140 L100,170 Z" />
			<line x1="100" y1="100" x2="100" y2="170" />
			{/* Book spine detail */}
			<line x1="36" y1="132" x2="100" y2="162" opacity="0.4" />
			<line x1="164" y1="132" x2="100" y2="162" opacity="0.4" />
			{/* Second closed book — offset below */}
			<path d="M40,148 L40,144 L100,175 L160,144 L160,148 L100,179 Z" opacity="0.5" />
		</svg>
	);
}
