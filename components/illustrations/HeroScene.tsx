export interface HeroSceneProps {
	className?: string;
	"aria-label"?: string;
}

export function HeroScene({
	className = "text-accent",
	"aria-label": ariaLabel = "Isometric collage of Nepali financial reporting — pagoda, calculator, balance scale, documents, and Himalayan motifs",
}: HeroSceneProps) {
	return (
		<svg
			viewBox="0 0 580 560"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label={ariaLabel}
			className={className}
		>
			{/* ============================================================
			    LINE ART + ISOMETRIC — editorial magazine collage
			    Sparse ink lines, light tonal fills, crimson on cream
			    ============================================================ */}

			{/* === PAGODA TEMPLE — center-right, dominant element === */}
			<g transform="translate(300, 40)">
				{/* Spire */}
				<line x1="70" y1="0" x2="70" y2="30" strokeWidth="1.5" />
				<circle cx="70" cy="0" r="3" fill="currentColor" opacity="0.6" />

				{/* Tier 1 roof */}
				<polygon points="70,30 110,50 70,70 30,50" fill="currentColor" opacity="0.06" />
				<path d="M70,30 L110,50 L70,70 L30,50 Z" />
				{/* Eave curves */}
				<path d="M34,48 Q30,52 26,50" fill="none" />
				<path d="M106,48 Q110,52 114,50" fill="none" />
				{/* Body 1 */}
				<path d="M36,52 L36,78 L70,94 L104,78 L104,52" fill="currentColor" opacity="0.03" />
				<path d="M36,52 L36,78 L70,94 L104,78 L104,52" fill="none" />
				{/* Pillars */}
				<line x1="46" y1="56" x2="46" y2="88" opacity="0.3" />
				<line x1="58" y1="60" x2="58" y2="92" opacity="0.25" />
				<line x1="82" y1="60" x2="82" y2="92" opacity="0.25" />
				<line x1="94" y1="56" x2="94" y2="88" opacity="0.3" />

				{/* Tier 2 roof */}
				<polygon points="70,74 118,98 70,122 22,98" fill="currentColor" opacity="0.05" />
				<path d="M70,74 L118,98 L70,122 L22,98 Z" />
				<path d="M26,96 Q20,102 16,98" fill="none" />
				<path d="M114,96 Q120,102 124,98" fill="none" />
				{/* Body 2 */}
				<path d="M28,100 L28,138 L70,158 L112,138 L112,100" fill="currentColor" opacity="0.03" />
				<path d="M28,100 L28,138 L70,158 L112,138 L112,100" fill="none" />
				{/* Windows — arched */}
				<path d="M40,112 Q48,104 56,112 L56,132 L40,140 Z" fill="currentColor" opacity="0.08" />
				<path d="M62,114 Q70,106 78,114 L78,140 L62,148 Z" fill="currentColor" opacity="0.08" />
				<path d="M84,112 Q92,104 100,112 L100,132 L84,140 Z" fill="currentColor" opacity="0.06" />

				{/* Tier 3 roof — largest */}
				<polygon points="70,126 126,154 70,182 14,154" fill="currentColor" opacity="0.04" />
				<path d="M70,126 L126,154 L70,182 L14,154 Z" />
				<path d="M18,152 Q12,158 8,154" fill="none" />
				<path d="M122,152 Q128,158 132,154" fill="none" />
				{/* Body 3 */}
				<path d="M20,156 L20,200 L70,224 L120,200 L120,156" fill="currentColor" opacity="0.02" />
				<path d="M20,156 L20,200 L70,224 L120,200 L120,156" fill="none" />
				{/* Door */}
				<path d="M58,224 L58,206 Q70,196 82,206 L82,224" fill="currentColor" opacity="0.08" />
				<path d="M58,224 L58,206 Q70,196 82,206 L82,224" fill="none" />
				{/* Platform */}
				<polygon points="70,224 128,198 128,206 70,232 12,206 12,198" fill="currentColor" opacity="0.04" />
				<path d="M70,224 L128,198 L128,206 L70,232 L12,206 L12,198 Z" />
			</g>

			{/* === DHARAHARA TOWER — far right === */}
			<g transform="translate(490, 50)">
				<polygon points="18,0 14,14 22,14" fill="currentColor" opacity="0.15" />
				<circle cx="18" cy="3" r="2.5" fill="currentColor" opacity="0.2" />
				<rect x="13" y="14" width="10" height="140" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="1" />
				{/* Bands */}
				{[30, 55, 80, 105, 130].map((y) => (
					<line key={`dh-${y}`} x1="10" y1={y} x2="26" y2={y} strokeWidth="1" opacity="0.3" />
				))}
				{/* Windows */}
				{[42, 67, 92, 117].map((y) => (
					<rect key={`dw-${y}`} x="15" y={y} width="6" height="8" rx="1" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="0.6" />
				))}
				{/* Base */}
				<polygon points="18,154 32,146 32,152 18,160 4,152 4,146" fill="currentColor" opacity="0.06" />
				<path d="M18,154 L32,146 L32,152 L18,160 L4,152 L4,146 Z" />
			</g>

			{/* === CALCULATOR — left side === */}
			<g transform="translate(30, 160)">
				{/* Body — isometric */}
				<polygon points="0,50 90,10 180,50 90,90" fill="currentColor" opacity="0.04" />
				<path d="M0,50 L90,10 L180,50 L90,90 Z" />
				<path d="M0,50 L0,170 L90,210 L90,90 Z" fill="currentColor" opacity="0.03" />
				<path d="M0,50 L0,170 L90,210 L90,90 Z" />
				<path d="M180,50 L180,170 L90,210 L90,90 Z" fill="currentColor" opacity="0.02" />
				<path d="M180,50 L180,170 L90,210 L90,90 Z" />

				{/* Display */}
				<polygon points="16,50 90,18 164,50 90,82" fill="currentColor" opacity="0.05" />
				<path d="M16,50 L90,18 L164,50 L90,82 Z" opacity="0.4" />

				{/* Button grid — 4×4, line-art */}
				{[0, 1, 2, 3].map((r) =>
					[0, 1, 2, 3].map((c) => (
						<g key={`btn-${r}-${c}`} transform={`translate(${24 + c * 32}, ${68 + r * 22})`}>
							<polygon points="0,12 14,6 28,12 14,18" fill="currentColor" opacity="0.04" />
							<path d="M0,12 L14,6 L28,12 L14,18 Z" opacity="0.35" />
						</g>
					))
				)}

				{/* Receipt tape — curling out */}
				<path d="M168,44 L176,48 L176,20 Q173,10 170,18 Q167,26 164,14 L164,44" fill="currentColor" opacity="0.06" />
				<path d="M168,44 L176,48 L176,20 Q173,10 170,18 Q167,26 164,14 L164,44" fill="none" />
			</g>

			{/* === BALANCE SCALE — top left === */}
			<g transform="translate(40, 30)">
				<circle cx="70" cy="8" r="4" fill="currentColor" opacity="0.1" stroke="currentColor" />
				<line x1="70" y1="12" x2="70" y2="100" strokeWidth="1.5" />
				{/* Fulcrum */}
				<polygon points="70,28 62,38 78,38" fill="currentColor" opacity="0.06" />
				<path d="M70,28 L62,38 L78,38 Z" />
				{/* Beam */}
				<line x1="14" y1="38" x2="126" y2="34" strokeWidth="1.5" />
				{/* Left pan + chains */}
				<line x1="14" y1="40" x2="4" y2="70" opacity="0.5" />
				<line x1="14" y1="40" x2="44" y2="70" opacity="0.5" />
				<ellipse cx="24" cy="72" rx="22" ry="8" fill="currentColor" opacity="0.04" />
				<path d="M2,72 Q2,82 24,82 Q46,82 46,72" fill="currentColor" opacity="0.03" />
				<ellipse cx="24" cy="72" rx="22" ry="8" fill="none" />
				<path d="M2,72 Q2,82 24,82 Q46,82 46,72" fill="none" />
				{/* Right pan + chains */}
				<line x1="126" y1="36" x2="110" y2="62" opacity="0.5" />
				<line x1="126" y1="36" x2="142" y2="62" opacity="0.5" />
				<ellipse cx="126" cy="64" rx="18" ry="7" fill="currentColor" opacity="0.04" />
				<path d="M108,64 Q108,73 126,73 Q144,73 144,64" fill="currentColor" opacity="0.03" />
				<ellipse cx="126" cy="64" rx="18" ry="7" fill="none" />
				<path d="M108,64 Q108,73 126,73 Q144,73 144,64" fill="none" />
				{/* Base */}
				<polygon points="70,100 90,112 70,124 50,112" fill="currentColor" opacity="0.04" />
				<path d="M70,100 L90,112 L70,124 L50,112 Z" />
			</g>

			{/* === OPEN LEDGER BOOK — bottom center === */}
			<g transform="translate(160, 400)">
				{/* Left page */}
				<polygon points="0,50 0,6 110,0 110,44" fill="currentColor" opacity="0.03" />
				<path d="M0,50 L0,6 L110,0 L110,44 Z" />
				{/* Right page */}
				<polygon points="220,50 220,6 110,0 110,44" fill="currentColor" opacity="0.03" />
				<path d="M220,50 L220,6 L110,0 L110,44 Z" />
				{/* Spine */}
				<line x1="110" y1="0" x2="110" y2="44" strokeWidth="1.8" />
				{/* Left — mini chart */}
				<polyline points="12,38 28,28 44,32 60,18 76,22 96,12" fill="none" opacity="0.3" strokeWidth="1.2" />
				<polygon points="12,38 28,28 44,32 60,18 76,22 96,12 96,38" fill="currentColor" opacity="0.04" />
				{/* Right — text lines */}
				<line x1="118" y1="8" x2="208" y2="14" opacity="0.2" />
				<line x1="118" y1="16" x2="208" y2="22" opacity="0.2" />
				<line x1="118" y1="24" x2="208" y2="30" opacity="0.2" />
				<line x1="118" y1="32" x2="180" y2="38" opacity="0.2" />
				{/* Checkmarks */}
				<polyline points="196,12 200,18 208,8" opacity="0.3" strokeWidth="1" fill="none" />
				<polyline points="196,20 200,26 208,16" opacity="0.3" strokeWidth="1" fill="none" />
				{/* Book depth */}
				<path d="M2,52 L110,46 L218,52" opacity="0.25" />
				<path d="M4,55 L110,49 L216,55" opacity="0.15" />
			</g>

			{/* === BAR CHART — right of center === */}
			<g transform="translate(340, 290)">
				{/* Bar 1 */}
				<polygon points="0,100 20,90 40,100 20,110" fill="currentColor" opacity="0.04" />
				<path d="M0,100 L0,50 L20,40 L20,90 Z" fill="currentColor" opacity="0.06" />
				<path d="M40,100 L40,50 L20,40 L20,90 Z" fill="currentColor" opacity="0.04" />
				<path d="M0,100 L0,50 L20,40 L40,50 L40,100 L20,110 Z" />
				{/* Bar 2 — tallest */}
				<polygon points="30,100 50,90 70,100 50,110" fill="currentColor" opacity="0.04" />
				<path d="M30,100 L30,20 L50,10 L50,90 Z" fill="currentColor" opacity="0.08" />
				<path d="M70,100 L70,20 L50,10 L50,90 Z" fill="currentColor" opacity="0.05" />
				<path d="M30,100 L30,20 L50,10 L70,20 L70,100 L50,110 Z" />
				{/* Bar 3 */}
				<polygon points="60,100 80,90 100,100 80,110" fill="currentColor" opacity="0.04" />
				<path d="M60,100 L60,65 L80,55 L80,90 Z" fill="currentColor" opacity="0.06" />
				<path d="M100,100 L100,65 L80,55 L80,90 Z" fill="currentColor" opacity="0.04" />
				<path d="M60,100 L60,65 L80,55 L100,65 L100,100 L80,110 Z" />
				{/* Bar 4 */}
				<polygon points="90,100 110,90 130,100 110,110" fill="currentColor" opacity="0.04" />
				<path d="M90,100 L90,35 L110,25 L110,90 Z" fill="currentColor" opacity="0.07" />
				<path d="M130,100 L130,35 L110,25 L110,90 Z" fill="currentColor" opacity="0.04" />
				<path d="M90,100 L90,35 L110,25 L130,35 L130,100 L110,110 Z" />
			</g>

			{/* === DOCUMENT STACK — left mid === */}
			<g transform="translate(10, 380)">
				{/* Doc 1 — back */}
				<rect x="4" y="4" width="70" height="90" rx="2" fill="currentColor" opacity="0.03" />
				<rect x="4" y="4" width="70" height="90" rx="2" fill="none" opacity="0.3" />
				{/* Doc 2 — front */}
				<rect x="0" y="0" width="70" height="90" rx="2" fill="currentColor" opacity="0.04" />
				<rect x="0" y="0" width="70" height="90" rx="2" fill="none" />
				{/* Lines */}
				<line x1="10" y1="16" x2="60" y2="16" opacity="0.2" />
				<line x1="10" y1="24" x2="60" y2="24" opacity="0.2" />
				<line x1="10" y1="32" x2="50" y2="32" opacity="0.2" />
				<line x1="10" y1="40" x2="60" y2="40" opacity="0.2" />
				<line x1="10" y1="48" x2="45" y2="48" opacity="0.2" />
				{/* Stamp / seal circle */}
				<circle cx="50" cy="70" r="12" fill="currentColor" opacity="0.06" />
				<circle cx="50" cy="70" r="12" fill="none" opacity="0.25" />
				<circle cx="50" cy="70" r="7" fill="none" opacity="0.15" />
			</g>

			{/* === HIMALAYA SILHOUETTE — background, very subtle === */}
			<polygon
				points="0,440 30,380 55,400 90,340 120,360 160,300 200,320 250,280 300,300 340,260 380,290 420,270 460,310 500,280 540,320 580,300 580,480 0,480"
				fill="currentColor"
				opacity="0.035"
				stroke="none"
			/>
			{/* Snow caps — tiny accent */}
			<polygon points="250,280 270,290 290,300 268,288" fill="currentColor" opacity="0.06" stroke="none" />
			<polygon points="340,260 358,275 380,290 356,273" fill="currentColor" opacity="0.07" stroke="none" />
			<polygon points="160,300 178,312 200,320 176,310" fill="currentColor" opacity="0.05" stroke="none" />

			{/* === CIRCUIT / TECH TRACES === */}
			<g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2">
				<line x1="220" y1="60" x2="220" y2="20" />
				<line x1="220" y1="20" x2="280" y2="20" />
				<line x1="280" y1="20" x2="280" y2="50" />
				<line x1="240" y1="60" x2="240" y2="40" />
				<line x1="240" y1="40" x2="290" y2="40" />
				<circle cx="220" cy="20" r="2" fill="currentColor" opacity="0.5" />
				<circle cx="280" cy="20" r="2" fill="currentColor" opacity="0.5" />
				<circle cx="280" cy="50" r="2" fill="currentColor" opacity="0.5" />
				<circle cx="240" cy="40" r="2" fill="currentColor" opacity="0.5" />
			</g>

			{/* === RUPEE SYMBOL — subtle watermark === */}
			<text x="200" y="340" fontSize="72" fill="currentColor" stroke="none" fontWeight="800" fontFamily="serif" opacity="0.05">रु</text>

			{/* === SPREADSHEET GRID — top area === */}
			<g transform="translate(440, 20)" opacity="0.25">
				<rect x="0" y="0" width="90" height="60" rx="2" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="0.8" />
				<rect x="0" y="0" width="90" height="10" rx="2" fill="currentColor" opacity="0.08" stroke="none" />
				<line x1="22" y1="10" x2="22" y2="60" strokeWidth="0.5" />
				<line x1="45" y1="10" x2="45" y2="60" strokeWidth="0.5" />
				<line x1="67" y1="10" x2="67" y2="60" strokeWidth="0.5" />
				<line x1="0" y1="22" x2="90" y2="22" strokeWidth="0.4" />
				<line x1="0" y1="34" x2="90" y2="34" strokeWidth="0.4" />
				<line x1="0" y1="46" x2="90" y2="46" strokeWidth="0.4" />
			</g>

			{/* === RISING ARROW — line art === */}
			<g transform="translate(480, 220)">
				<polyline points="0,80 30,55 50,60 80,20" fill="none" strokeWidth="2" opacity="0.3" />
				<polygon points="80,20 88,14 76,22 82,34" fill="currentColor" opacity="0.15" stroke="currentColor" />
			</g>

			{/* === ISOMETRIC CUBES — scattered, line art === */}
			<g transform="translate(260, 380)">
				<polygon points="16,0 32,8 16,16 0,8" fill="currentColor" opacity="0.04" />
				<path d="M0,8 L0,20 L16,28 L16,16 Z" fill="currentColor" opacity="0.06" />
				<path d="M32,8 L32,20 L16,28 L16,16 Z" fill="currentColor" opacity="0.03" />
				<path d="M0,8 L0,20 L16,28 L32,20 L32,8 L16,16 Z" />
				<polygon points="16,0 L32,8 L16,16 L0,8 Z" />
			</g>
			<g transform="translate(290, 370)">
				<polygon points="12,0 24,6 12,12 0,6" fill="currentColor" opacity="0.04" />
				<path d="M0,6 L0,16 L12,22 L12,12 Z" fill="currentColor" opacity="0.05" />
				<path d="M24,6 L24,16 L12,22 L12,12 Z" fill="currentColor" opacity="0.03" />
				<path d="M0,6 L0,16 L12,22 L24,16 L24,6 L12,12 Z" />
				<polygon points="12,0 L24,6 L12,12 L0,6 Z" />
			</g>

			{/* === COIN — small detail === */}
			<g transform="translate(120, 360)">
				<ellipse cx="16" cy="6" rx="16" ry="6" fill="currentColor" opacity="0.05" />
				<ellipse cx="16" cy="6" rx="16" ry="6" fill="none" />
				<path d="M0,6 L0,14" opacity="0.3" />
				<path d="M32,6 L32,14" opacity="0.3" />
				<ellipse cx="16" cy="14" rx="16" ry="6" fill="currentColor" opacity="0.03" />
				<ellipse cx="16" cy="14" rx="16" ry="6" fill="none" opacity="0.4" />
				<text x="16" y="10" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.2" fontFamily="serif" fontWeight="700" stroke="none">रु</text>
			</g>

			{/* === ORBITAL ARC — structure === */}
			<circle cx="290" cy="270" r="220" opacity="0.04" strokeWidth="0.6" fill="none" />
			<circle cx="290" cy="270" r="170" opacity="0.03" strokeWidth="0.5" fill="none" />

			{/* === CONNECTING DASHES === */}
			<line x1="180" y1="150" x2="280" y2="60" opacity="0.06" strokeDasharray="4 6" />
			<line x1="200" y1="360" x2="260" y2="310" opacity="0.05" strokeDasharray="3 5" />
			<line x1="470" y1="250" x2="430" y2="300" opacity="0.05" strokeDasharray="3 5" />

			{/* === SCATTER DOTS === */}
			<circle cx="250" cy="10" r="2" fill="currentColor" opacity="0.08" />
			<circle cx="530" cy="300" r="2.5" fill="currentColor" opacity="0.06" />
			<circle cx="20" cy="300" r="2" fill="currentColor" opacity="0.07" />
			<circle cx="560" cy="450" r="2" fill="currentColor" opacity="0.05" />
			<circle cx="100" cy="520" r="2.5" fill="currentColor" opacity="0.06" />
			<circle cx="450" cy="500" r="2" fill="currentColor" opacity="0.05" />

			{/* === MANDALA HINT — top left corner === */}
			<g transform="translate(10, 10)" opacity="0.06">
				<circle cx="0" cy="0" r="18" fill="none" />
				<circle cx="0" cy="0" r="10" fill="none" />
				<circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.3" />
			</g>

			{/* === PERCENTAGE — subtle === */}
			<text x="500" y="170" fontSize="36" fill="currentColor" stroke="none" fontWeight="700" fontFamily="sans-serif" opacity="0.05">%</text>
		</svg>
	);
}
