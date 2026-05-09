export interface StandardPageHeroProps {
	motif: string;
	className?: string;
}

const motifElements: Record<string, React.ReactNode> = {
	receipt: (
		<g filter="url(#spGrain)">
			{/* Receipt/Document — center */}
			<g transform="translate(60, 20)">
				<polygon points="60,0 120,30 60,60 0,30" fill="currentColor" opacity="0.9" />
				<path d="M0,30 L0,130 L60,160 L60,60 Z" fill="currentColor" opacity="0.75" />
				<path d="M120,30 L120,130 L60,160 L60,60 Z" fill="currentColor" opacity="0.6" />
				{/* Lines on doc */}
				<line x1="15" y1="55" x2="50" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
				<line x1="15" y1="68" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
				<line x1="15" y1="81" x2="45" y2="96" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
				<line x1="15" y1="94" x2="40" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
				{/* Checkmarks */}
				<polyline points="43,65 46,70 52,60" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none" />
				<polyline points="43,78 46,83 52,73" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none" />
			</g>
			{/* Coins — bottom left */}
			<g transform="translate(10, 130)">
				<ellipse cx="25" cy="10" rx="22" ry="9" fill="currentColor" opacity="0.85" />
				<path d="M3,10 L3,30" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<path d="M47,10 L47,30" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<ellipse cx="25" cy="30" rx="22" ry="9" fill="currentColor" opacity="0.65" />
				<text x="25" y="15" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.35" fontFamily="serif" fontWeight="700" stroke="none">रु</text>
			</g>
			{/* Arrow up */}
			<g transform="translate(170, 40)">
				<path d="M0,100 L40,20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
				<polygon points="40,20 50,10 35,18 42,35" fill="currentColor" opacity="0.7" />
			</g>
			{/* Bar mini */}
			<g transform="translate(160, 110)">
				<rect x="0" y="20" width="14" height="40" fill="currentColor" opacity="0.5" />
				<rect x="18" y="8" width="14" height="52" fill="currentColor" opacity="0.6" />
				<rect x="36" y="28" width="14" height="32" fill="currentColor" opacity="0.45" />
			</g>
		</g>
	),
	key: (
		<g filter="url(#spGrain)">
			{/* Building — isometric */}
			<g transform="translate(50, 10)">
				<polygon points="50,0 100,25 50,50 0,25" fill="currentColor" opacity="0.9" />
				<path d="M0,25 L0,100 L50,125 L50,50 Z" fill="currentColor" opacity="0.75" />
				<path d="M100,25 L100,100 L50,125 L50,50 Z" fill="currentColor" opacity="0.6" />
				{/* Windows */}
				<rect x="10" y="45" width="12" height="15" fill="currentColor" opacity="0.3" />
				<rect x="28" y="55" width="12" height="15" fill="currentColor" opacity="0.3" />
				<rect x="10" y="70" width="12" height="15" fill="currentColor" opacity="0.25" />
			</g>
			{/* Key */}
			<g transform="translate(140, 50)">
				<circle cx="25" cy="25" r="22" fill="currentColor" opacity="0.85" />
				<circle cx="25" cy="25" r="10" fill="currentColor" opacity="0.2" />
				<rect x="22" y="46" width="6" height="55" fill="currentColor" opacity="0.8" />
				<rect x="28" y="70" width="16" height="5" rx="1" fill="currentColor" opacity="0.65" />
				<rect x="28" y="82" width="12" height="5" rx="1" fill="currentColor" opacity="0.55" />
			</g>
			{/* Contract doc */}
			<g transform="translate(0, 100)">
				<rect x="0" y="0" width="40" height="55" rx="3" fill="currentColor" opacity="0.5" />
				<line x1="8" y1="12" x2="32" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="8" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="8" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
			</g>
		</g>
	),
	scale: (
		<g filter="url(#spGrain)">
			{/* Balance scale — large */}
			<g transform="translate(40, 10)">
				<circle cx="70" cy="10" r="8" fill="currentColor" opacity="0.85" />
				<rect x="67" y="18" width="6" height="110" fill="currentColor" opacity="0.7" />
				<polygon points="70,40 55,55 85,55" fill="currentColor" opacity="0.6" />
				<line x1="10" y1="55" x2="130" y2="55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
				{/* Left pan */}
				<line x1="10" y1="57" x2="0" y2="95" stroke="currentColor" strokeWidth="1.5" />
				<line x1="10" y1="57" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" />
				<ellipse cx="25" cy="97" rx="26" ry="9" fill="currentColor" opacity="0.5" />
				{/* Right pan — higher */}
				<line x1="130" y1="57" x2="110" y2="85" stroke="currentColor" strokeWidth="1.5" />
				<line x1="130" y1="57" x2="150" y2="85" stroke="currentColor" strokeWidth="1.5" />
				<ellipse cx="130" cy="87" rx="22" ry="8" fill="currentColor" opacity="0.45" />
				{/* Base */}
				<polygon points="70,128 100,142 70,156 40,142" fill="currentColor" opacity="0.3" />
			</g>
			{/* Chart line */}
			<g transform="translate(10, 130)">
				<polyline points="0,30 25,18 55,22 80,5 110,12 140,0" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round" />
			</g>
		</g>
	),
	shield: (
		<g filter="url(#spGrain)">
			{/* Shield — large center */}
			<g transform="translate(50, 10)">
				<path d="M60,0 L10,25 L10,75 Q10,130 60,160 Q110,130 110,75 L110,25 Z" fill="currentColor" opacity="0.88" />
				<path d="M60,15 L20,36 L20,75 Q20,122 60,148 Q100,122 100,75 L100,36 Z" fill="currentColor" opacity="0.2" />
				{/* Checkmark */}
				<polyline points="38,75 52,92 82,55" stroke="currentColor" strokeWidth="6" opacity="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
			</g>
			{/* Umbrella accent */}
			<g transform="translate(155, 60)">
				<path d="M25,0 Q-5,25 5,50 L10,50 Q0,28 25,8 Q50,28 40,50 L45,50 Q55,25 25,0" fill="currentColor" opacity="0.55" />
				<rect x="23" y="8" width="4" height="70" fill="currentColor" opacity="0.5" />
			</g>
			{/* Document */}
			<g transform="translate(0, 110)">
				<rect x="0" y="0" width="36" height="48" rx="2" fill="currentColor" opacity="0.45" />
				<line x1="6" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.2" />
				<line x1="6" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.2" />
				<line x1="6" y1="26" x2="24" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.2" />
			</g>
		</g>
	),
	plan: (
		<g filter="url(#spGrain)">
			{/* Building — isometric large */}
			<g transform="translate(30, 10)">
				<polygon points="60,0 120,30 60,60 0,30" fill="currentColor" opacity="0.9" />
				<path d="M0,30 L0,120 L60,150 L60,60 Z" fill="currentColor" opacity="0.78" />
				<path d="M120,30 L120,120 L60,150 L60,60 Z" fill="currentColor" opacity="0.62" />
				{/* Roof ridge */}
				<polygon points="60,0 120,30 60,20 0,30" fill="currentColor" opacity="0.35" />
				{/* Windows grid */}
				{[0,1,2].map((r) => (
					<g key={`bw-${r}`}>
						<rect x="8" y={48 + r * 25} width="14" height="16" fill="currentColor" opacity="0.3" />
						<rect x="28" y={54 + r * 25} width="14" height="16" fill="currentColor" opacity="0.3" />
					</g>
				))}
				{/* Door */}
				<path d="M38,150 L38,130 Q48,120 58,130 L58,150" fill="currentColor" opacity="0.4" />
			</g>
			{/* Blueprint scroll */}
			<g transform="translate(140, 60)">
				<rect x="0" y="0" width="55" height="80" rx="2" fill="currentColor" opacity="0.5" />
				<line x1="8" y1="15" x2="47" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.2" />
				<line x1="8" y1="25" x2="47" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.2" />
				<rect x="8" y="35" width="20" height="15" fill="currentColor" opacity="0.15" />
				<line x1="8" y1="58" x2="40" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.2" />
			</g>
		</g>
	),
	warehouse: (
		<g filter="url(#spGrain)">
			{/* Stacked boxes — isometric */}
			{/* Box 1 — large bottom */}
			<g transform="translate(30, 80)">
				<polygon points="55,0 110,27 55,54 0,27" fill="currentColor" opacity="0.88" />
				<path d="M0,27 L0,62 L55,89 L55,54 Z" fill="currentColor" opacity="0.72" />
				<path d="M110,27 L110,62 L55,89 L55,54 Z" fill="currentColor" opacity="0.58" />
			</g>
			{/* Box 2 — on top */}
			<g transform="translate(50, 40)">
				<polygon points="45,0 90,22 45,44 0,22" fill="currentColor" opacity="0.85" />
				<path d="M0,22 L0,55 L45,77 L45,44 Z" fill="currentColor" opacity="0.7" />
				<path d="M90,22 L90,55 L45,77 L45,44 Z" fill="currentColor" opacity="0.55" />
			</g>
			{/* Box 3 — small, top */}
			<g transform="translate(65, 10)">
				<polygon points="30,0 60,15 30,30 0,15" fill="currentColor" opacity="0.82" />
				<path d="M0,15 L0,38 L30,53 L30,30 Z" fill="currentColor" opacity="0.68" />
				<path d="M60,15 L60,38 L30,53 L30,30 Z" fill="currentColor" opacity="0.52" />
			</g>
			{/* Small box offset right */}
			<g transform="translate(140, 90)">
				<polygon points="25,0 50,12 25,24 0,12" fill="currentColor" opacity="0.7" />
				<path d="M0,12 L0,30 L25,42 L25,24 Z" fill="currentColor" opacity="0.55" />
				<path d="M50,12 L50,30 L25,42 L25,24 Z" fill="currentColor" opacity="0.42" />
			</g>
			{/* Clipboard */}
			<g transform="translate(155, 20)">
				<rect x="0" y="0" width="35" height="50" rx="2" fill="currentColor" opacity="0.5" />
				<rect x="10" y="-4" width="15" height="8" rx="2" fill="currentColor" opacity="0.7" />
				<line x1="6" y1="14" x2="29" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.2" />
				<line x1="6" y1="22" x2="29" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.2" />
				<line x1="6" y1="30" x2="22" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.2" />
			</g>
		</g>
	),
	coins: (
		<g filter="url(#spGrain)">
			{/* Coin stack tall */}
			<g transform="translate(50, 10)">
				<ellipse cx="40" cy="10" rx="36" ry="14" fill="currentColor" opacity="0.9" />
				<path d="M4,10 L4,90" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<path d="M76,10 L76,90" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<ellipse cx="40" cy="90" rx="36" ry="14" fill="currentColor" opacity="0.55" />
				{/* Ring layers */}
				{[30,50,70].map((y) => (
					<path key={`cl-${y}`} d={`M4,${y} Q40,${y+14} 76,${y}`} fill="currentColor" opacity="0.2" stroke="none" />
				))}
				<text x="40" y="16" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.35" fontFamily="serif" fontWeight="700" stroke="none">रु</text>
			</g>
			{/* Coin stack short */}
			<g transform="translate(130, 70)">
				<ellipse cx="30" cy="8" rx="28" ry="10" fill="currentColor" opacity="0.8" />
				<path d="M2,8 L2,45" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
				<path d="M58,8 L58,45" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
				<ellipse cx="30" cy="45" rx="28" ry="10" fill="currentColor" opacity="0.45" />
			</g>
			{/* Down arrow */}
			<g transform="translate(10, 100)">
				<path d="M30,0 L30,50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
				<polygon points="30,50 20,40 40,40" fill="currentColor" opacity="0.5" />
			</g>
		</g>
	),
	tax: (
		<g filter="url(#spGrain)">
			{/* Tax form — large */}
			<g transform="translate(30, 10)">
				<rect x="0" y="0" width="100" height="140" rx="4" fill="currentColor" opacity="0.85" />
				{/* Header bar */}
				<rect x="0" y="0" width="100" height="22" rx="4" fill="currentColor" opacity="0.3" />
				{/* Lines */}
				<line x1="12" y1="35" x2="88" y2="35" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="12" y1="48" x2="88" y2="48" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="12" y1="61" x2="88" y2="61" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="12" y1="74" x2="60" y2="74" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="12" y1="87" x2="88" y2="87" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				<line x1="12" y1="100" x2="75" y2="100" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
				{/* Percentage */}
				<text x="50" y="128" textAnchor="middle" fontSize="28" fill="currentColor" opacity="0.3" fontFamily="sans-serif" fontWeight="800" stroke="none">%</text>
			</g>
			{/* Calculator mini */}
			<g transform="translate(145, 50)">
				<rect x="0" y="0" width="45" height="70" rx="3" fill="currentColor" opacity="0.6" />
				<rect x="6" y="6" width="33" height="14" rx="1" fill="currentColor" opacity="0.2" />
				{/* Buttons */}
				{[0,1,2].map((r) =>
					[0,1,2].map((c) => (
						<rect key={`tb-${r}-${c}`} x={8 + c * 12} y={28 + r * 14} width="8" height="8" rx="1" fill="currentColor" opacity="0.3" />
					))
				)}
			</g>
		</g>
	),
};

export function StandardPageHero({ motif, className = "" }: StandardPageHeroProps) {
	const elements = motifElements[motif];
	if (!elements) return null;

	return (
		<svg
			viewBox="0 0 220 180"
			fill="none"
			role="img"
			aria-hidden="true"
			className={className}
		>
			<defs>
				<filter id="spGrain">
					<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" result="noise" />
					<feColorMatrix in="noise" type="saturate" values="0" result="mono" />
					<feBlend in="SourceGraphic" in2="mono" mode="multiply" />
				</filter>
			</defs>
			{elements}
		</svg>
	);
}
