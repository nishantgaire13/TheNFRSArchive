interface StandardBgArtProps {
	className?: string;
	motif?: string;
}

function TempleBase() {
	return (
		<g transform="translate(640, 30)">
			<polygon points="50,0 46,14 54,14" stroke="currentColor" strokeWidth="1" fill="none" />
			<line x1="50" y1="14" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
			<path d="M20,32 L50,18 L80,32" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />
			<path d="M15,50 L50,34 L85,50" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />
			<rect x="25" y="50" width="50" height="40" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
			<line x1="40" y1="50" x2="40" y2="90" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
			<line x1="60" y1="50" x2="60" y2="90" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
			<path d="M35,90 Q50,80 65,90" stroke="currentColor" strokeWidth="0.8" fill="none" />
		</g>
	);
}

function MountainRange() {
	return (
		<path
			d="M0,360 L60,290 L120,320 L180,260 L250,290 L340,220 L420,250 L520,200 L600,230 L700,190 L780,240 L860,210 L900,230 L900,400 L0,400"
			stroke="currentColor"
			strokeWidth="0.8"
			fill="currentColor"
			fillOpacity="0.04"
		/>
	);
}

function CircuitTraces({ x, y }: { x: number; y: number }) {
	return (
		<g transform={`translate(${x}, ${y})`} stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6">
			<line x1="0" y1="0" x2="0" y2="-30" />
			<line x1="0" y1="-30" x2="50" y2="-30" />
			<circle cx="0" cy="-30" r="2" fill="currentColor" />
			<circle cx="50" cy="-30" r="2" fill="currentColor" />
		</g>
	);
}

function RevenueMotif() {
	return (
		<>
			{/* Contract document */}
			<g transform="translate(60, 80)">
				<rect x="0" y="0" width="80" height="100" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
				<line x1="12" y1="18" x2="68" y2="18" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				<line x1="12" y1="28" x2="68" y2="28" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				<line x1="12" y1="38" x2="50" y2="38" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				<line x1="12" y1="52" x2="68" y2="52" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
				<line x1="12" y1="62" x2="68" y2="62" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
				<path d="M40,75 Q55,70 65,80" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
				<circle cx="60" cy="82" r="8" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.05" />
			</g>
			{/* Flow arrows — five-step model */}
			<g transform="translate(200, 120)" stroke="currentColor" strokeWidth="1" opacity="0.5">
				{[0, 1, 2, 3, 4].map((i) => (
					<g key={`step-${i}`} transform={`translate(${i * 45}, 0)`}>
						<rect x="0" y="0" width="30" height="20" rx="3" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.8" />
						{i < 4 && <line x1="32" y1="10" x2="43" y2="10" markerEnd="none" />}
						{i < 4 && <polygon points="41,7 45,10 41,13" fill="currentColor" />}
					</g>
				))}
			</g>
			{/* Handshake */}
			<g transform="translate(480, 100)" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5">
				<path d="M0,30 Q10,20 20,25 Q30,15 40,20 Q50,10 60,18" />
				<path d="M60,18 Q50,28 40,24 Q30,32 20,28 Q10,35 0,30" />
			</g>
			{/* Cash register */}
			<g transform="translate(300, 240)">
				<rect x="0" y="20" width="70" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />
				<rect x="10" y="0" width="50" height="20" rx="2" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
				{[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
					<circle key={`k-${r}-${c}`} cx={20 + c * 15} cy={30 + r * 10} r="3" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
				)))}
			</g>
		</>
	);
}

function LeasesMotif() {
	return (
		<>
			{/* Key */}
			<g transform="translate(80, 100)" stroke="currentColor" strokeWidth="1" fill="none">
				<circle cx="20" cy="20" r="18" opacity="0.5" />
				<circle cx="20" cy="20" r="12" opacity="0.3" />
				<line x1="38" y1="20" x2="100" y2="20" opacity="0.5" />
				<line x1="85" y1="20" x2="85" y2="30" opacity="0.4" />
				<line x1="95" y1="20" x2="95" y2="28" opacity="0.4" />
			</g>
			{/* Building with ROU label */}
			<g transform="translate(250, 60)">
				<rect x="0" y="0" width="80" height="120" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
				{[0, 1, 2, 3].map((r) => [0, 1].map((c) => (
					<rect key={`w-${r}-${c}`} x={10 + c * 40} y={15 + r * 25} width="20" height="15" rx="1" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
				)))}
				<rect x="30" y="95" width="20" height="25" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.04" />
			</g>
			{/* Lease timeline */}
			<g transform="translate(400, 160)" stroke="currentColor" strokeWidth="0.8" opacity="0.5">
				<line x1="0" y1="0" x2="160" y2="0" />
				{[0, 40, 80, 120, 160].map((x) => (
					<g key={`t-${x}`}>
						<line x1={x} y1="-5" x2={x} y2="5" />
						<circle cx={x} cy="0" r="2.5" fill="currentColor" fillOpacity="0.3" />
					</g>
				))}
			</g>
			{/* Balance sheet diagram */}
			<g transform="translate(120, 240)" stroke="currentColor" strokeWidth="0.8" opacity="0.4">
				<rect x="0" y="0" width="60" height="80" rx="2" fill="currentColor" fillOpacity="0.03" />
				<line x1="0" y1="20" x2="60" y2="20" />
				<text x="8" y="14" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.5">ROU Asset</text>
				<rect x="80" y="0" width="60" height="80" rx="2" fill="currentColor" fillOpacity="0.03" />
				<line x1="80" y1="20" x2="140" y2="20" />
				<text x="85" y="14" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.5">Lease Liab.</text>
			</g>
		</>
	);
}

function FinancialInstrumentsMotif() {
	return (
		<>
			{/* Balance scale */}
			<g transform="translate(80, 80)" stroke="currentColor" strokeWidth="1" fill="none">
				<line x1="50" y1="0" x2="50" y2="60" opacity="0.5" />
				<line x1="10" y1="10" x2="90" y2="10" opacity="0.5" />
				<polygon points="50,0 45,10 55,10" fill="currentColor" fillOpacity="0.3" />
				<path d="M10,10 L5,40 L25,40 Z" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
				<path d="M90,10 L75,40 L95,40 Z" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
				<rect x="40" y="60" width="20" height="6" rx="2" fill="currentColor" fillOpacity="0.2" />
			</g>
			{/* ECL stage diagram */}
			<g transform="translate(250, 100)" stroke="currentColor" strokeWidth="0.8" opacity="0.5">
				{[0, 1, 2].map((i) => (
					<g key={`ecl-${i}`}>
						<rect x={i * 70} y="0" width="55" height="35" rx="3" fill="currentColor" fillOpacity="0.03" />
						<text x={i * 70 + 10} y="22" fontSize="8" fill="currentColor" fontFamily="sans-serif" opacity="0.5">Stage {i + 1}</text>
						{i < 2 && <line x1={i * 70 + 57} y1="17" x2={i * 70 + 68} y2="17" />}
						{i < 2 && <polygon points={`${i * 70 + 66},14 ${i * 70 + 70},17 ${i * 70 + 66},20`} fill="currentColor" />}
					</g>
				))}
			</g>
			{/* Risk gauge */}
			<g transform="translate(450, 200)" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4">
				<path d="M0,50 A50,50 0 0,1 100,50" />
				<line x1="50" y1="50" x2="70" y2="20" strokeWidth="1.2" />
				<circle cx="50" cy="50" r="3" fill="currentColor" />
			</g>
			{/* Currency symbols */}
			<text x="200" y="280" fontSize="50" fill="currentColor" fontFamily="serif" opacity="0.08" stroke="none">रु</text>
			<text x="350" y="60" fontSize="30" fill="currentColor" fontFamily="serif" opacity="0.06" stroke="none">$</text>
		</>
	);
}

function InsuranceMotif() {
	return (
		<>
			{/* Shield */}
			<g transform="translate(100, 70)">
				<path d="M40,0 L80,15 L80,50 Q80,80 40,100 Q0,80 0,50 L0,15 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
				<path d="M40,20 L40,65 M25,42 L55,42" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
			</g>
			{/* Umbrella */}
			<g transform="translate(280, 80)" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5">
				<path d="M50,0 A50,40 0 0,1 100,40 L0,40 A50,40 0 0,1 50,0" fill="currentColor" fillOpacity="0.03" />
				<line x1="50" y1="0" x2="50" y2="80" />
				<path d="M50,80 Q50,90 40,90" />
			</g>
			{/* CSM bar diagram */}
			<g transform="translate(450, 120)" stroke="currentColor" strokeWidth="0.8" opacity="0.4">
				<rect x="0" y="0" width="30" height="120" rx="2" fill="currentColor" fillOpacity="0.04" />
				<rect x="0" y="80" width="30" height="40" fill="currentColor" fillOpacity="0.08" />
				<text x="3" y="95" fontSize="6" fill="currentColor" fontFamily="sans-serif" opacity="0.5">CSM</text>
				<rect x="40" y="20" width="30" height="100" rx="2" fill="currentColor" fillOpacity="0.04" />
				<rect x="40" y="90" width="30" height="30" fill="currentColor" fillOpacity="0.06" />
			</g>
			{/* Policy document */}
			<g transform="translate(300, 240)">
				<rect x="0" y="0" width="60" height="80" rx="2" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
				<line x1="10" y1="15" x2="50" y2="15" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				<line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				<line x1="10" y1="35" x2="40" y2="35" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				<path d="M15,55 Q30,48 45,55" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
			</g>
		</>
	);
}

function PPEMotif() {
	return (
		<>
			{/* Factory building */}
			<g transform="translate(60, 60)">
				<rect x="0" y="30" width="100" height="80" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
				<polygon points="0,30 50,0 100,30" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
				<rect x="15" y="50" width="20" height="20" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
				<rect x="65" y="50" width="20" height="20" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
				<rect x="40" y="80" width="20" height="30" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.04" />
				{/* Chimney */}
				<rect x="75" y="5" width="12" height="25" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.04" />
			</g>
			{/* Depreciation curve */}
			<g transform="translate(250, 100)" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5">
				<line x1="0" y1="80" x2="160" y2="80" />
				<line x1="0" y1="0" x2="0" y2="80" />
				<path d="M0,10 Q40,12 80,35 Q120,58 160,70" strokeDasharray="3,3" />
				<path d="M0,10 L160,70" opacity="0.3" />
			</g>
			{/* Gear/machinery */}
			<g transform="translate(480, 140)" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4">
				<circle cx="30" cy="30" r="20" />
				<circle cx="30" cy="30" r="12" />
				{[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
					const r1 = 20;
					const r2 = 26;
					const rad = (a * Math.PI) / 180;
					return <line key={`g-${a}`} x1={30 + r1 * Math.cos(rad)} y1={30 + r1 * Math.sin(rad)} x2={30 + r2 * Math.cos(rad)} y2={30 + r2 * Math.sin(rad)} strokeWidth="3" />;
				})}
			</g>
			{/* Component parts */}
			<g transform="translate(350, 250)" opacity="0.4">
				{[0, 1, 2].map((i) => (
					<rect key={`cp-${i}`} x={i * 50} y={0} width="35" height="25" rx="2" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.03" />
				))}
			</g>
		</>
	);
}

function InventoriesMotif() {
	return (
		<>
			{/* Warehouse shelves */}
			<g transform="translate(60, 70)" stroke="currentColor" strokeWidth="0.8" fill="none">
				<rect x="0" y="0" width="120" height="130" rx="2" opacity="0.4" fill="currentColor" fillOpacity="0.02" />
				{[0, 1, 2].map((r) => (
					<g key={`shelf-${r}`}>
						<line x1="5" y1={30 + r * 40} x2="115" y2={30 + r * 40} opacity="0.5" />
						{[0, 1, 2, 3].map((c) => (
							<rect key={`box-${r}-${c}`} x={10 + c * 26} y={12 + r * 40} width="20" height="16" rx="1" fill="currentColor" fillOpacity="0.04" opacity="0.5" />
						))}
					</g>
				))}
			</g>
			{/* FIFO arrow */}
			<g transform="translate(250, 130)" stroke="currentColor" strokeWidth="1" opacity="0.5">
				<line x1="0" y1="15" x2="120" y2="15" />
				<polygon points="118,10 125,15 118,20" fill="currentColor" />
				{[0, 30, 60, 90].map((x) => (
					<rect key={`fq-${x}`} x={x} y="0" width="22" height="30" rx="2" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="0.6" />
				))}
			</g>
			{/* NRV write-down arrow */}
			<g transform="translate(450, 80)" stroke="currentColor" strokeWidth="0.8" opacity="0.4">
				<rect x="0" y="0" width="50" height="30" rx="2" fill="currentColor" fillOpacity="0.04" />
				<text x="8" y="18" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.5">Cost</text>
				<line x1="25" y1="35" x2="25" y2="55" />
				<polygon points="22,53 25,60 28,53" fill="currentColor" />
				<rect x="0" y="62" width="50" height="30" rx="2" fill="currentColor" fillOpacity="0.04" />
				<text x="10" y="80" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.5">NRV</text>
			</g>
			{/* Stacked boxes */}
			<g transform="translate(350, 250)" opacity="0.35">
				<polygon points="30,0 60,15 30,30 0,15" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.04" />
				<path d="M0,15 L0,35 L30,50 L30,30 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
				<path d="M60,15 L60,35 L30,50 L30,30 Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.02" />
			</g>
		</>
	);
}

function ImpairmentMotif() {
	return (
		<>
			{/* Declining value chart */}
			<g transform="translate(60, 80)" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5">
				<line x1="0" y1="100" x2="150" y2="100" />
				<line x1="0" y1="0" x2="0" y2="100" />
				<path d="M5,20 Q30,22 60,50 Q90,70 140,85" strokeWidth="1.2" />
				<line x1="5" y1="20" x2="140" y2="20" strokeDasharray="4,4" opacity="0.3" />
				<text x="145" y="88" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.4">Recoverable</text>
				<text x="145" y="23" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.4">Carrying</text>
			</g>
			{/* CGU boxes */}
			<g transform="translate(300, 100)" opacity="0.4">
				<rect x="0" y="0" width="100" height="60" rx="3" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
				<text x="20" y="35" fontSize="8" fill="currentColor" fontFamily="sans-serif" opacity="0.5">CGU</text>
				<rect x="10" y="70" width="35" height="25" rx="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.03" />
				<rect x="55" y="70" width="35" height="25" rx="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.03" />
			</g>
			{/* Cracked value symbol */}
			<g transform="translate(500, 120)" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4">
				<circle cx="30" cy="30" r="28" />
				<path d="M20,15 L25,28 L18,32 L28,45" strokeWidth="1.5" />
			</g>
			{/* Write-down arrow */}
			<g transform="translate(200, 240)" stroke="currentColor" strokeWidth="1" opacity="0.35">
				<line x1="0" y1="0" x2="0" y2="50" />
				<polygon points="-5,48 0,58 5,48" fill="currentColor" />
				<line x1="-15" y1="0" x2="15" y2="0" />
				<line x1="-10" y1="58" x2="10" y2="58" strokeDasharray="3,2" />
			</g>
		</>
	);
}

function TaxesMotif() {
	return (
		<>
			{/* Tax form */}
			<g transform="translate(60, 70)">
				<rect x="0" y="0" width="90" height="120" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
				<line x1="10" y1="15" x2="80" y2="15" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
				<line x1="10" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
				<line x1="10" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				<rect x="55" y="40" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
				<line x1="10" y1="65" x2="50" y2="65" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				<rect x="55" y="60" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
				<line x1="10" y1="90" x2="80" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
				<text x="10" y="108" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.4">Tax Due</text>
				<rect x="55" y="95" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.05" />
			</g>
			{/* Temporary difference T-diagram */}
			<g transform="translate(250, 100)" stroke="currentColor" strokeWidth="0.8" opacity="0.45">
				<rect x="0" y="0" width="140" height="80" rx="2" fill="none" />
				<line x1="70" y1="0" x2="70" y2="80" />
				<line x1="0" y1="20" x2="140" y2="20" />
				<text x="10" y="14" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.6">Carrying</text>
				<text x="82" y="14" fontSize="7" fill="currentColor" fontFamily="sans-serif" opacity="0.6">Tax Base</text>
			</g>
			{/* Calculator */}
			<g transform="translate(480, 130)">
				<rect x="0" y="0" width="60" height="80" rx="3" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.03" />
				<rect x="8" y="8" width="44" height="18" rx="1" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.04" />
				{[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
					<rect key={`tc-${r}-${c}`} x={10 + c * 15} y={34 + r * 14} width="10" height="8" rx="1" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.4" />
				)))}
			</g>
			{/* Government building */}
			<g transform="translate(350, 240)" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.35">
				<polygon points="40,0 80,20 0,20" fill="currentColor" fillOpacity="0.03" />
				<rect x="5" y="20" width="70" height="40" fill="currentColor" fillOpacity="0.02" />
				{[0, 1, 2].map((i) => (
					<line key={`pil-${i}`} x1={15 + i * 20} y1="20" x2={15 + i * 20} y2="60" opacity="0.5" />
				))}
			</g>
		</>
	);
}

const motifMap: Record<string, () => React.ReactNode> = {
	receipt: RevenueMotif,
	ledger: RevenueMotif,
	key: LeasesMotif,
	scale: FinancialInstrumentsMotif,
	shield: InsuranceMotif,
	plan: PPEMotif,
	warehouse: InventoriesMotif,
	coins: ImpairmentMotif,
	tax: TaxesMotif,
};

export function StandardBgArt({ className = "", motif }: StandardBgArtProps) {
	const MotifContent = motif && motifMap[motif] ? motifMap[motif] : RevenueMotif;

	return (
		<svg
			viewBox="0 0 900 400"
			fill="none"
			role="presentation"
			aria-hidden="true"
			className={className}
		>
			<g opacity="0.25">
				<MotifContent />
				<TempleBase />
				<MountainRange />
				<CircuitTraces x={60} y={50} />
				<CircuitTraces x={750} y={300} />
				{/* Scatter dots */}
				<circle cx="400" cy="50" r="2.5" fill="currentColor" opacity="0.2" />
				<circle cx="550" cy="80" r="2" fill="currentColor" opacity="0.15" />
				<circle cx="150" cy="350" r="2.5" fill="currentColor" opacity="0.12" />
				<circle cx="750" cy="320" r="2" fill="currentColor" opacity="0.15" />
				<circle cx="820" cy="100" r="1.5" fill="currentColor" opacity="0.1" />
			</g>
		</svg>
	);
}
