import type { ReactNode } from "react";

type IllustrationContent = () => ReactNode;

function Nas1() {
	return (
		<>
			{/* Pashupatinath temple */}
			<g transform="translate(60,40)">
				<rect x="15" y="100" width="70" height="120" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="50,30 15,70 85,70" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="50,10 25,50 75,50" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<line x1="50" y1="0" x2="50" y2="10" stroke="currentColor" strokeWidth="1.5" />
				<rect x="35" y="160" width="30" height="60" stroke="currentColor" strokeWidth="1" fill="none" />
				<circle cx="50" cy="145" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
				{[30, 70].map(x => <line key={x} x1={x} y1="70" x2={x} y2="100" stroke="currentColor" strokeWidth="0.8" />)}
			</g>
			{/* Multi-column document grid */}
			<g transform="translate(280,50)">
				<rect x="0" y="0" width="200" height="260" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="0" y1="30" x2="200" y2="30" stroke="currentColor" strokeWidth="1" />
				<line x1="66" y1="30" x2="66" y2="260" stroke="currentColor" strokeWidth="0.8" />
				<line x1="133" y1="30" x2="133" y2="260" stroke="currentColor" strokeWidth="0.8" />
				{[60, 90, 120, 150, 180, 210, 240].map(y => (
					<line key={y} x1="0" y1={y} x2="200" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
				))}
				<rect x="10" y="6" width="80" height="16" rx="2" fill="currentColor" opacity="0.15" />
			</g>
			{/* Disclosure checklist */}
			<g transform="translate(600,80)">
				{[0, 1, 2, 3, 4, 5, 6].map(i => (
					<g key={i} transform={`translate(0,${i * 32})`}>
						<rect x="0" y="0" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
						{i < 4 && <polyline points="3,7 6,10 11,4" stroke="currentColor" strokeWidth="1.2" fill="none" />}
						<line x1="22" y1="7" x2={70 + (i % 3) * 15} y2="7" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
					</g>
				))}
			</g>
		</>
	);
}

function Nas2() {
	return (
		<>
			{/* Asan Tole market stalls */}
			<g transform="translate(60,60)">
				{[0, 1, 2].map(i => (
					<g key={i} transform={`translate(${i * 55},0)`}>
						<polygon points="25,0 0,30 50,30" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
						<line x1="0" y1="30" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
						<line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
						<rect x="5" y="45" width="40" height="35" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
					</g>
				))}
			</g>
			{/* Stacked inventory boxes isometric */}
			<g transform="translate(250,100)">
				{[0, 1, 2].map(r => [0, 1].map(c => (
					<g key={`${r}-${c}`} transform={`translate(${c * 45 + r * 10},${r * 35})`}>
						<polygon points="20,0 40,10 20,20 0,10" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
						<polygon points="0,10 0,30 20,40 20,20" stroke="currentColor" strokeWidth="1" fill="none" />
						<polygon points="40,10 40,30 20,40 20,20" stroke="currentColor" strokeWidth="1" fill="none" />
					</g>
				)))}
			</g>
			{/* FIFO arrow flow */}
			<g transform="translate(420,140)">
				<line x1="0" y1="25" x2="180" y2="25" stroke="currentColor" strokeWidth="1.2" />
				<polygon points="178,20 185,25 178,30" fill="currentColor" opacity="0.6" />
				{[0, 1, 2, 3].map(i => (
					<rect key={i} x={i * 42} y="5" width="35" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
				))}
				<text x="90" y="65" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">FIFO</text>
			</g>
			{/* Weighing scale */}
			<g transform="translate(660,100)">
				<line x1="40" y1="0" x2="40" y2="70" stroke="currentColor" strokeWidth="1.2" />
				<line x1="10" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="40,0 35,10 45,10" fill="currentColor" opacity="0.35" />
				<path d="M10,10 L5,35 Q15,45 25,35 L20,10" stroke="currentColor" strokeWidth="1" fill="none" />
				<path d="M60,10 L55,35 Q65,45 75,35 L70,10" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="25" y="70" width="30" height="5" rx="2" fill="currentColor" opacity="0.25" />
			</g>
		</>
	);
}

function Nas7() {
	return (
		<>
			{/* Bagmati river curves */}
			<g transform="translate(0,280)">
				<path d="M0,40 Q100,10 200,50 Q300,80 450,30 Q600,0 750,40 Q850,60 900,45" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M0,55 Q100,25 200,65 Q300,95 450,45 Q600,15 750,55 Q850,75 900,60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
				<path d="M0,70 Q100,40 200,80 Q300,100 450,60 Q600,30 750,70 Q850,85 900,75" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
			</g>
			{/* Waterfall cash flow steps */}
			<g transform="translate(250,60)">
				<text x="0" y="-5" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Operating</text>
				<rect x="0" y="0" width="60" height="140" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.35" />
				<text x="80" y="45" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Investing</text>
				<rect x="80" y="50" width="60" height="90" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.25" />
				<text x="160" y="95" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Financing</text>
				<rect x="160" y="100" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
				<line x1="60" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4,3" />
				<line x1="140" y1="120" x2="160" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4,3" />
			</g>
			{/* Funnel */}
			<g transform="translate(600,60)">
				<polygon points="0,0 120,0 90,160 30,160" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<line x1="15" y1="50" x2="105" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
				<line x1="22" y1="100" x2="98" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
				<polygon points="45,160 75,160 68,200 52,200" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
			</g>
		</>
	);
}

function Nas8() {
	return (
		<>
			{/* Boudhanath Stupa */}
			<g transform="translate(80,40)">
				<path d="M0,120 Q50,20 100,120" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<rect x="40" y="120" width="20" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
				<line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" />
				<rect x="35" y="40" width="30" height="15" stroke="currentColor" strokeWidth="1" fill="none" />
				{[0, 1, 2, 3].map(i => (
					<polygon key={i} points={`${25 + i * 5},${55 + i * 15} 50,${45 + i * 15} ${75 - i * 5},${55 + i * 15}`} stroke="currentColor" strokeWidth="0.8" fill="none" />
				))}
				<circle cx="50" cy="95" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
			</g>
			{/* Concentric rings */}
			<g transform="translate(350,120)">
				{[50, 35, 20].map(r => (
					<circle key={r} cx="0" cy="0" r={r} stroke="currentColor" strokeWidth="1" fill="none" opacity={0.3 + r / 100} />
				))}
				<circle cx="0" cy="0" r="5" fill="currentColor" opacity="0.35" />
			</g>
			{/* Policy pages stacked */}
			<g transform="translate(530,50)">
				{[0, 1, 2].map(i => (
					<rect key={i} x={i * 8} y={i * 8} width="80" height="110" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity={0.8 - i * 0.2} />
				))}
				{[25, 40, 55, 70].map(y => (
					<line key={y} x1="22" y1={y} x2="80" y2={y} stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				))}
			</g>
			{/* Correction strikethrough arrows */}
			<g transform="translate(680,200)">
				<line x1="0" y1="0" x2="80" y2="0" stroke="currentColor" strokeWidth="1.2" />
				<line x1="10" y1="-10" x2="70" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<path d="M40,-30 L40,30" stroke="currentColor" strokeWidth="1" strokeDasharray="4,3" />
				<polygon points="37,28 40,35 43,28" fill="currentColor" opacity="0.5" />
			</g>
		</>
	);
}

function Nas10() {
	return (
		<>
			{/* Dashain calendar grid */}
			<g transform="translate(60,50)">
				<rect x="0" y="0" width="175" height="200" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="0" y="0" width="175" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
				{[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => (
					<rect key={`${r}-${c}`} x={5 + c * 34} y={35 + r * 32} width="28" height="26" rx="2" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.5" />
				)))}
				<rect x="5 + 2 * 34" y="35 + 1 * 32" width="28" height="26" rx="2" fill="currentColor" opacity="0.2" />
			</g>
			{/* Timeline arrow */}
			<g transform="translate(300,170)">
				<line x1="0" y1="0" x2="280" y2="0" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="278,-4 285,0 278,4" fill="currentColor" opacity="0.7" />
				{[0, 70, 140, 210, 280].map(x => (
					<g key={x}>
						<line x1={x} y1="-8" x2={x} y2="8" stroke="currentColor" strokeWidth="1" />
						<circle cx={x} cy="0" r="3" fill="currentColor" opacity="0.3" />
					</g>
				))}
				<text x="140" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Reporting Period</text>
			</g>
			{/* Clock outline */}
			<g transform="translate(680,80)">
				<circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
				<line x1="50" y1="50" x2="50" y2="18" stroke="currentColor" strokeWidth="1.5" />
				<line x1="50" y1="50" x2="72" y2="58" stroke="currentColor" strokeWidth="1.2" />
				<circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
				{[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => {
					const r = 46;
					const rad = (a * Math.PI) / 180;
					return <circle key={a} cx={50 + r * Math.cos(rad - Math.PI / 2)} cy={50 + r * Math.sin(rad - Math.PI / 2)} r="1.5" fill="currentColor" opacity="0.4" />;
				})}
			</g>
		</>
	);
}

function Nas12() {
	return (
		<>
			{/* Nepal Rastra Bank facade */}
			<g transform="translate(60,60)">
				<rect x="0" y="40" width="140" height="100" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="70,0 0,40 140,40" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
				{[20, 50, 80, 110].map(x => (
					<line key={x} x1={x} y1="40" x2={x} y2="130" stroke="currentColor" strokeWidth="1" opacity="0.6" />
				))}
				<rect x="50" y="100" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="70" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">NRB</text>
			</g>
			{/* Balance scales */}
			<g transform="translate(340,80)">
				<line x1="50" y1="0" x2="50" y2="80" stroke="currentColor" strokeWidth="1.2" />
				<line x1="10" y1="15" x2="90" y2="15" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="50,0 45,15 55,15" fill="currentColor" opacity="0.35" />
				<path d="M10,15 L0,50 Q15,60 30,50 L20,15" stroke="currentColor" strokeWidth="1" fill="none" />
				<path d="M80,15 L70,50 Q85,60 100,50 L90,15" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="35" y="80" width="30" height="5" rx="2" fill="currentColor" opacity="0.2" />
			</g>
			{/* DTL/DTA node boxes */}
			<g transform="translate(580,70)">
				<rect x="40" y="0" width="60" height="30" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="70" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">Temp Diff</text>
				<line x1="50" y1="30" x2="30" y2="60" stroke="currentColor" strokeWidth="1" />
				<line x1="90" y1="30" x2="110" y2="60" stroke="currentColor" strokeWidth="1" />
				<rect x="0" y="60" width="55" height="28" rx="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
				<text x="28" y="78" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">DTL</text>
				<rect x="85" y="60" width="55" height="28" rx="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
				<text x="112" y="78" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">DTA</text>
			</g>
		</>
	);
}

function Nas16() {
	return (
		<>
			{/* Hydropower dam */}
			<g transform="translate(60,60)">
				<path d="M0,120 Q60,20 120,120" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="0" y1="120" x2="120" y2="120" stroke="currentColor" strokeWidth="1.2" />
				<path d="M30,80 L30,120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,3" />
				<path d="M60,50 L60,120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,3" />
				<path d="M90,80 L90,120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,3" />
				<path d="M50,130 Q70,150 90,130" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
			</g>
			{/* Factory silhouette */}
			<g transform="translate(250,80)">
				<rect x="0" y="30" width="100" height="100" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="0,30 50,0 100,30" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="75" y="5" width="14" height="25" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="15" y="55" width="25" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
				<rect x="60" y="55" width="25" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
				<rect x="35" y="95" width="30" height="35" stroke="currentColor" strokeWidth="1" fill="none" />
			</g>
			{/* Depreciation step-down bars */}
			<g transform="translate(450,80)">
				<line x1="0" y1="150" x2="180" y2="150" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1" />
				{[0, 1, 2, 3, 4].map(i => (
					<rect key={i} x={10 + i * 32} y={10 + i * 25} width="28" height={140 - i * 25} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
				))}
			</g>
			{/* Component boxes */}
			<g transform="translate(700,120)">
				{[0, 1, 2].map(i => (
					<rect key={i} x={0} y={i * 40} width="80" height="32" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
				))}
				<text x="40" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Land</text>
				<text x="40" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Building</text>
				<text x="40" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Equipment</text>
			</g>
		</>
	);
}

function Nas19() {
	return (
		<>
			{/* People figures */}
			<g transform="translate(60,80)">
				{[0, 1, 2, 3, 4].map(i => (
					<g key={i} transform={`translate(${i * 40},0)`}>
						<circle cx="15" cy="10" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
						<polygon points="0,55 15,25 30,55" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />
					</g>
				))}
			</g>
			{/* Pension fund bar chart */}
			<g transform="translate(330,60)">
				<line x1="0" y1="200" x2="180" y2="200" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="200" stroke="currentColor" strokeWidth="1" />
				{[{h: 140, l: "DB"}, {h: 100, l: "DC"}, {h: 170, l: "Gratuity"}, {h: 80, l: "Leave"}].map((bar, i) => (
					<g key={i}>
						<rect x={15 + i * 42} y={200 - bar.h} width="32" height={bar.h} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
						<text x={31 + i * 42} y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{bar.l}</text>
					</g>
				))}
			</g>
			{/* Actuarial curve */}
			<g transform="translate(620,80)">
				<line x1="0" y1="150" x2="150" y2="150" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1" />
				<path d="M5,10 Q40,12 70,50 Q100,90 145,140" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M5,30 Q60,35 100,80 Q130,110 145,140" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4,3" opacity="0.5" />
			</g>
		</>
	);
}

function Nas20() {
	return (
		<>
			{/* Singha Durbar palace */}
			<g transform="translate(40,50)">
				<rect x="0" y="50" width="200" height="100" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<path d="M80,20 A30,30 0 0,1 120,20" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<line x1="80" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
				<line x1="120" y1="20" x2="120" y2="50" stroke="currentColor" strokeWidth="1" />
				<rect x="0" y="40" width="200" height="10" fill="currentColor" opacity="0.1" />
				{[30, 60, 90, 130, 160].map(x => (
					<rect key={x} x={x} y="65" width="18" height="30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
				))}
				<rect x="85" y="110" width="30" height="40" stroke="currentColor" strokeWidth="1" fill="none" />
			</g>
			{/* Grant document */}
			<g transform="translate(350,60)">
				<rect x="0" y="0" width="90" height="120" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				{[20, 35, 50, 65].map(y => (
					<line key={y} x1="12" y1={y} x2="78" y2={y} stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				))}
				<circle cx="45" cy="95" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="45" y="99" textAnchor="middle" fontFamily="serif" fontSize="8" fill="currentColor" opacity="0.5">रु</text>
			</g>
			{/* Annotated bar chart */}
			<g transform="translate(560,80)">
				<line x1="0" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="160" stroke="currentColor" strokeWidth="1" />
				{[120, 90, 140, 70].map((h, i) => (
					<rect key={i} x={15 + i * 40} y={160 - h} width="30" height={h} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
				))}
				<line x1="0" y1="40" x2="180" y2="40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="5,3" opacity="0.4" />
			</g>
		</>
	);
}

function Nas21() {
	return (
		<>
			{/* Currency symbols */}
			<g transform="translate(60,30)">
				<text x="0" y="100" fontFamily="serif" fontSize="80" fill="currentColor" opacity="0.25">NPR</text>
				<text x="10" y="180" fontFamily="serif" fontSize="50" fill="currentColor" opacity="0.15">USD</text>
				<text x="100" y="220" fontFamily="serif" fontSize="40" fill="currentColor" opacity="0.12">INR</text>
			</g>
			{/* Exchange rate fluctuation */}
			<g transform="translate(320,60)">
				<line x1="0" y1="150" x2="250" y2="150" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1" />
				<path d="M5,100 Q30,80 60,90 Q90,100 120,70 Q150,40 180,60 Q210,80 245,50" stroke="currentColor" strokeWidth="1.5" fill="none" />
				{[5, 60, 120, 180, 245].map((x, i) => (
					<circle key={i} cx={x} cy={[100, 90, 70, 60, 50][i]} r="3" fill="currentColor" opacity="0.4" />
				))}
			</g>
			{/* Border crossing arrow */}
			<g transform="translate(660,100)">
				<rect x="0" y="0" width="15" height="80" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="0" y="0" width="15" height="15" fill="currentColor" opacity="0.2" />
				<line x1="-30" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="48,35 55,40 48,45" fill="currentColor" opacity="0.5" />
			</g>
		</>
	);
}

function Nas23() {
	return (
		<>
			{/* Machhapuchchhre mountain */}
			<g transform="translate(60,20)">
				<polygon points="80,0 0,200 160,200" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<polygon points="80,0 60,40 100,40" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
				<polygon points="120,80 100,200 180,200" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
			</g>
			{/* Construction scaffolding */}
			<g transform="translate(300,60)">
				{[0, 1, 2, 3].map(c => (
					<line key={`v${c}`} x1={c * 40} y1="0" x2={c * 40} y2="180" stroke="currentColor" strokeWidth="1" />
				))}
				{[0, 1, 2, 3, 4, 5].map(r => (
					<line key={`h${r}`} x1="0" y1={r * 36} x2="120" y2={r * 36} stroke="currentColor" strokeWidth="0.8" />
				))}
				{[0, 1, 2].map(i => (
					<line key={`d${i}`} x1={i * 40} y1={i * 36} x2={(i + 1) * 40} y2={(i + 1) * 36} stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
				))}
			</g>
			{/* Interest capitalisation timeline */}
			<g transform="translate(530,100)">
				<line x1="0" y1="50" x2="220" y2="50" stroke="currentColor" strokeWidth="1.2" />
				{[0, 55, 110, 165, 220].map(x => (
					<line key={x} x1={x} y1="42" x2={x} y2="58" stroke="currentColor" strokeWidth="1" />
				))}
				<rect x="55" y="10" width="110" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
				<text x="110" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Capitalise</text>
				<rect x="0" y="65" width="55" height="25" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
				<text x="28" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.4">Expense</text>
			</g>
		</>
	);
}

function Nas24() {
	return (
		<>
			{/* Connected house org-chart */}
			<g transform="translate(150,50)">
				{[0, 200, 400].map((x, i) => (
					<g key={i} transform={`translate(${x},${i === 1 ? 0 : 80})`}>
						<rect x="0" y="20" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
						<polygon points="30,0 0,20 60,20" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />
						<rect x="22" y="45" width="16" height="25" stroke="currentColor" strokeWidth="0.8" fill="none" />
					</g>
				))}
				<line x1="60" y1="125" x2="200" y2="45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5,3" />
				<line x1="260" y1="45" x2="400" y2="125" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5,3" />
			</g>
			{/* Transaction arrows */}
			<g transform="translate(530,120)">
				<line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="98,-4 105,0 98,4" fill="currentColor" opacity="0.6" />
				<line x1="100" y1="20" x2="0" y2="20" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="2,16 -5,20 2,24" fill="currentColor" opacity="0.6" />
				<text x="50" y="-8" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Goods</text>
				<text x="50" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Payment</text>
			</g>
			{/* Overlapping circles */}
			<g transform="translate(700,80)">
				<circle cx="25" cy="40" r="35" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<circle cx="55" cy="40" r="35" stroke="currentColor" strokeWidth="1.2" fill="none" />
			</g>
		</>
	);
}

function Nas26() {
	return (
		<>
			{/* EPF/CIT building */}
			<g transform="translate(60,60)">
				<rect x="0" y="30" width="120" height="90" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="0" y="20" width="120" height="10" fill="currentColor" opacity="0.15" />
				{[20, 50, 80].map(x => (
					<line key={x} x1={x} y1="30" x2={x} y2="110" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
				))}
				<text x="60" y="15" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">EPF/CIT</text>
			</g>
			{/* Member ledger grid */}
			<g transform="translate(320,50)">
				<rect x="0" y="0" width="180" height="160" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="0" y="0" width="180" height="25" fill="currentColor" opacity="0.12" />
				{[25, 55, 85, 115, 145].map(y => (
					<line key={y} x1="0" y1={y} x2="180" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
				))}
				{[45, 90, 135].map(x => (
					<line key={x} x1={x} y1="0" x2={x} y2="160" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
				))}
			</g>
			{/* Fund asset pie */}
			<g transform="translate(650,80)">
				<circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<line x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="1" />
				<line x1="50" y1="50" x2="93" y2="75" stroke="currentColor" strokeWidth="1" />
				<line x1="50" y1="50" x2="7" y2="75" stroke="currentColor" strokeWidth="1" />
				<circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
			</g>
		</>
	);
}

function Nas27() {
	return (
		<>
			{/* Parent company label */}
			<g transform="translate(80,40)">
				<rect x="0" y="0" width="120" height="50" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
				<text x="60" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.6">Nepal Holding Co.</text>
			</g>
			{/* Parent-subsidiary tree */}
			<g transform="translate(250,30)">
				<rect x="70" y="0" width="80" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
				<text x="110" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">Parent</text>
				<line x1="110" y1="40" x2="110" y2="60" stroke="currentColor" strokeWidth="1.2" />
				<line x1="30" y1="60" x2="190" y2="60" stroke="currentColor" strokeWidth="1.2" />
				{[30, 110, 190].map((x, i) => (
					<g key={i}>
						<line x1={x} y1="60" x2={x} y2="80" stroke="currentColor" strokeWidth="1" />
						<rect x={x - 35} y="80" width="70" height="35" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
						<text x={x} y="102" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{["Sub A", "Sub B", "Sub C"][i]}</text>
					</g>
				))}
			</g>
			{/* Elimination arrows */}
			<g transform="translate(600,80)">
				{[0, 1, 2].map(i => (
					<g key={i} transform={`translate(0,${i * 50})`}>
						<line x1="0" y1="15" x2="80" y2="15" stroke="currentColor" strokeWidth="1" />
						<line x1="30" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
						<line x1="50" y1="5" x2="30" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
					</g>
				))}
			</g>
		</>
	);
}

function Nas28() {
	return (
		<>
			{/* Two buildings with bridge */}
			<g transform="translate(100,60)">
				<rect x="0" y="30" width="80" height="120" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="0" y="20" width="80" height="10" fill="currentColor" opacity="0.12" />
				<rect x="200" y="50" width="70" height="100" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="200" y="40" width="70" height="10" fill="currentColor" opacity="0.12" />
				<line x1="80" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,4" />
				<text x="140" y="75" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Equity Method</text>
			</g>
			{/* Equity method % circle */}
			<g transform="translate(440,60)">
				<circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M60,5 A55,55 0 0,1 107,85" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5" />
				<text x="60" y="65" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fill="currentColor" opacity="0.4">25%</text>
			</g>
			{/* Share of profit flow */}
			<g transform="translate(640,100)">
				<rect x="0" y="0" width="70" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="35" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Profit</text>
				<line x1="35" y1="30" x2="35" y2="60" stroke="currentColor" strokeWidth="1" />
				<polygon points="32,58 35,65 38,58" fill="currentColor" opacity="0.5" />
				<rect x="0" y="65" width="70" height="30" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
				<text x="35" y="85" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Share</text>
			</g>
		</>
	);
}

function Nas29() {
	return (
		<>
			{/* Steep escalation curve */}
			<g transform="translate(80,30)">
				<line x1="0" y1="250" x2="200" y2="250" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="250" stroke="currentColor" strokeWidth="1" />
				<path d="M5,240 Q50,235 100,200 Q140,150 170,40 Q180,10 195,5" stroke="currentColor" strokeWidth="1.8" fill="none" />
				<polygon points="193,10 198,2 200,12" fill="currentColor" opacity="0.5" />
			</g>
			{/* Currency note outline */}
			<g transform="translate(380,80)">
				<rect x="0" y="0" width="120" height="70" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<circle cx="60" cy="35" r="22" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
				<text x="60" y="42" textAnchor="middle" fontFamily="serif" fontSize="16" fill="currentColor" opacity="0.4">NRs</text>
			</g>
			{/* Inflation index numbers */}
			<g transform="translate(620,50)">
				{["100", "150", "230", "380", "600"].map((n, i) => (
					<text key={i} x="40" y={i * 40 + 20} textAnchor="end" fontFamily="monospace" fontSize="14" fill="currentColor" opacity={0.15 + i * 0.06}>{n}</text>
				))}
				<line x1="50" y1="0" x2="50" y2="200" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
			</g>
		</>
	);
}

function Nas32() {
	return (
		<>
			{/* NEPSE building */}
			<g transform="translate(60,60)">
				<rect x="0" y="30" width="120" height="100" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="60,0 0,30 120,30" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
				<rect x="15" y="8" width="90" height="16" rx="2" fill="currentColor" opacity="0.12" />
				<text x="60" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">NEPSE</text>
			</g>
			{/* Debt/equity split */}
			<g transform="translate(320,50)">
				<rect x="0" y="0" width="80" height="180" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="0" y1="100" x2="80" y2="100" stroke="currentColor" strokeWidth="1.2" />
				<rect x="0" y="0" width="80" height="100" fill="currentColor" opacity="0.15" />
				<text x="40" y="55" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Debt</text>
				<text x="40" y="145" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Equity</text>
			</g>
			{/* Compound instrument split arrow */}
			<g transform="translate(560,80)">
				<rect x="0" y="20" width="80" height="40" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="40" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Compound</text>
				<line x1="80" y1="30" x2="120" y2="10" stroke="currentColor" strokeWidth="1" />
				<line x1="80" y1="50" x2="120" y2="70" stroke="currentColor" strokeWidth="1" />
				<rect x="120" y="0" width="60" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="120" y="60" width="60" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="150" y="16" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Liability</text>
				<text x="150" y="76" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Equity</text>
			</g>
		</>
	);
}

function Nas33() {
	return (
		<>
			{/* NEPSE ticker board */}
			<g transform="translate(80,50)">
				<rect x="0" y="0" width="140" height="100" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				{[20, 40, 60, 80].map(y => (
					<line key={y} x1="10" y1={y} x2="130" y2={y} stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				))}
				<text x="70" y="95" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">NEPSE</text>
			</g>
			{/* Large ÷ symbol */}
			<g transform="translate(320,60)">
				<circle cx="40" cy="20" r="8" fill="currentColor" opacity="0.25" />
				<line x1="10" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="3" opacity="0.35" />
				<circle cx="40" cy="100" r="8" fill="currentColor" opacity="0.25" />
			</g>
			{/* Share certificate */}
			<g transform="translate(480,40)">
				<rect x="0" y="0" width="120" height="80" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<rect x="5" y="5" width="110" height="70" rx="2" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
				{[25, 40, 55].map(y => (
					<line key={y} x1="15" y1={y} x2="105" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				))}
				<circle cx="90" cy="62" r="10" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" />
			</g>
			{/* Bonus restatement arrows */}
			<g transform="translate(680,100)">
				<rect x="0" y="0" width="50" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<line x1="50" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="1.2" />
				<polygon points="78,8 85,12 78,16" fill="currentColor" opacity="0.5" />
				<rect x="85" y="0" width="50" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
			</g>
		</>
	);
}

function Nas34() {
	return (
		<>
			{/* Bikram Sambat month grid */}
			<g transform="translate(60,40)">
				<rect x="0" y="0" width="180" height="160" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				{[0, 1, 2, 3].map(r => [0, 1, 2].map(c => (
					<rect key={`${r}-${c}`} x={5 + c * 58} y={5 + r * 38} width="52" height="32" rx="2" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.5" />
				)))}
			</g>
			{/* Quarterly bar chart */}
			<g transform="translate(340,60)">
				<line x1="0" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				{[{h: 100, l: "Q1"}, {h: 130, l: "Q2"}, {h: 90, l: "Q3"}, {h: 150, l: "Q4"}].map((b, i) => (
					<g key={i}>
						<rect x={15 + i * 40} y={180 - b.h} width="30" height={b.h} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
						<text x={30 + i * 40} y="195" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{b.l}</text>
					</g>
				))}
			</g>
			{/* Half-year divider */}
			<g transform="translate(620,40)">
				<line x1="40" y1="0" x2="40" y2="240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8,5" />
				<text x="15" y="120" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.4">H1</text>
				<text x="65" y="120" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.4">H2</text>
			</g>
		</>
	);
}

function Nas36() {
	return (
		<>
			{/* Himalaya range */}
			<g transform="translate(0,240)">
				<path d="M0,100 L80,20 L140,60 L220,0 L300,40 L380,10 L460,50 L540,5 L620,30 L700,15 L780,45 L860,25 L900,40 L900,100 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
			</g>
			{/* Impairment curve */}
			<g transform="translate(250,30)">
				<line x1="0" y1="180" x2="200" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				<path d="M5,20 Q60,25 110,70 Q150,110 195,160" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="5" y1="20" x2="195" y2="20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="5,3" opacity="0.4" />
				<text x="200" y="165" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">VIU</text>
				<text x="200" y="23" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Carrying</text>
			</g>
			{/* CGU boxes */}
			<g transform="translate(550,50)">
				<rect x="0" y="0" width="120" height="60" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="60" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">CGU</text>
				<rect x="10" y="70" width="45" height="30" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" />
				<rect x="65" y="70" width="45" height="30" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" />
				<line x1="32" y1="60" x2="32" y2="70" stroke="currentColor" strokeWidth="0.8" />
				<line x1="88" y1="60" x2="88" y2="70" stroke="currentColor" strokeWidth="0.8" />
			</g>
			{/* Comparison arrow */}
			<g transform="translate(720,100)">
				<text x="20" y="0" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Higher of</text>
				<rect x="0" y="10" width="60" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="30" y="27" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">FV-CD</text>
				<rect x="0" y="50" width="60" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="30" y="67" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">VIU</text>
			</g>
		</>
	);
}

function Nas37() {
	return (
		<>
			{/* Scales of justice */}
			<g transform="translate(80,40)">
				<line x1="60" y1="0" x2="60" y2="120" stroke="currentColor" strokeWidth="1.5" />
				<line x1="10" y1="20" x2="110" y2="20" stroke="currentColor" strokeWidth="2" />
				<polygon points="60,0 55,20 65,20" fill="currentColor" opacity="0.35" />
				<path d="M10,20 L0,70 Q15,85 30,70 L20,20" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<path d="M100,20 L90,70 Q105,85 120,70 L110,20" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="40" y="120" width="40" height="8" rx="3" fill="currentColor" opacity="0.2" />
			</g>
			{/* Probability arc */}
			<g transform="translate(360,60)">
				<path d="M0,80 A80,80 0 0,1 160,80" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="80" y1="80" x2="120" y2="20" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="80" cy="80" r="4" fill="currentColor" opacity="0.4" />
				<text x="30" y="100" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.4">Possible</text>
				<text x="80" y="5" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5" textAnchor="middle">Probable</text>
				<text x="130" y="100" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.4">Remote</text>
			</g>
			{/* Contingent bracket notation */}
			<g transform="translate(620,60)">
				<path d="M0,0 Q-15,60 0,120" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M80,0 Q95,60 80,120" stroke="currentColor" strokeWidth="1.5" fill="none" />
				{[20, 45, 70, 95].map(y => (
					<line key={y} x1="10" y1={y} x2="70" y2={y} stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				))}
				<text x="40" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Contingent</text>
			</g>
		</>
	);
}

function Nas38() {
	return (
		<>
			{/* Circuit board traces */}
			<g transform="translate(60,40)" stroke="currentColor" strokeWidth="1" fill="none">
				{[0, 30, 60].map(y => (
					<g key={y}>
						<line x1="0" y1={y} x2={60 + y} y2={y} />
						<line x1={60 + y} y1={y} x2={80 + y} y2={y + 20} />
						<circle cx={80 + y} cy={y + 20} r="3" fill="currentColor" opacity="0.4" />
					</g>
				))}
				<line x1="0" y1="100" x2="120" y2="100" />
				<circle cx="120" cy="100" r="3" fill="currentColor" opacity="0.4" />
				<line x1="80" y1="20" x2="80" y2="80" opacity="0.5" />
			</g>
			{/* Patent document */}
			<g transform="translate(320,40)">
				<rect x="0" y="0" width="100" height="130" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				{[20, 35, 50, 65, 80].map(y => (
					<line key={y} x1="12" y1={y} x2="88" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
				))}
				<circle cx="50" cy="108" r="14" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
				<text x="50" y="112" textAnchor="middle" fontFamily="serif" fontSize="8" fill="currentColor" opacity="0.4">Patent</text>
			</g>
			{/* Amortisation declining bars */}
			<g transform="translate(550,50)">
				<line x1="0" y1="180" x2="210" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				{[0, 1, 2, 3, 4, 5].map(i => (
					<rect key={i} x={10 + i * 32} y={20 + i * 25} width="25" height={160 - i * 25} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
				))}
			</g>
		</>
	);
}

function Nas39() {
	return (
		<>
			{/* Balance scale large */}
			<g transform="translate(60,40)">
				<line x1="70" y1="0" x2="70" y2="120" stroke="currentColor" strokeWidth="1.5" />
				<line x1="10" y1="20" x2="130" y2="20" stroke="currentColor" strokeWidth="2" />
				<polygon points="70,0 64,20 76,20" fill="currentColor" opacity="0.35" />
				<path d="M10,20 L0,70 Q20,85 40,70 L30,20" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<path d="M110,20 L100,70 Q120,85 140,70 L130,20" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<rect x="50" y="120" width="40" height="8" rx="3" fill="currentColor" opacity="0.2" />
			</g>
			{/* Hedge effectiveness chart */}
			<g transform="translate(320,50)">
				<line x1="0" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1" />
				<path d="M10,80 Q50,40 100,75 Q150,110 190,60" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M10,70 Q50,110 100,75 Q150,40 190,90" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5,3" opacity="0.6" />
				<text x="100" y="-5" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Hedge Effectiveness</text>
			</g>
			{/* Derivative flow */}
			<g transform="translate(600,80)">
				{["Forward", "Swap", "Option"].map((label, i) => (
					<g key={i}>
						<rect x={0} y={i * 50} width="70" height="35" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
						<text x="35" y={i * 50 + 22} textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{label}</text>
						{i < 2 && <line x1="35" y1={i * 50 + 35} x2="35" y2={i * 50 + 50} stroke="currentColor" strokeWidth="0.8" />}
					</g>
				))}
			</g>
		</>
	);
}

function Nas40() {
	return (
		<>
			{/* Kathmandu skyline */}
			<g transform="translate(0,200)">
				<path d="M0,140 L0,100 L40,100 L40,70 L80,70 L80,40 L120,40 L120,80 L160,80 L160,50 L200,50 L200,90 L240,90 L240,60 L280,60 L280,100 L320,100 L320,30 L360,30 L360,80 L400,80 L400,140 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
			</g>
			{/* Valuation tag */}
			<g transform="translate(420,60)">
				<path d="M0,20 L20,0 L100,0 L100,50 L20,50 L0,30 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<circle cx="18" cy="25" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="60" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Fair Value</text>
			</g>
			{/* FV vs Cost bars */}
			<g transform="translate(600,60)">
				<line x1="0" y1="160" x2="140" y2="160" stroke="currentColor" strokeWidth="1" />
				<rect x="15" y="30" width="40" height="130" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
				<rect x="75" y="60" width="40" height="100" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="0.6" />
				<text x="35" y="175" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">FV</text>
				<text x="95" y="175" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Cost</text>
			</g>
		</>
	);
}

function Nas41() {
	return (
		<>
			{/* Terai farmland rows */}
			<g transform="translate(60,80)">
				{[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
					<line key={i} x1={0} y1={i * 25} x2={150} y2={i * 25 + 40} stroke="currentColor" strokeWidth="0.8" opacity={0.3 + i * 0.05} />
				))}
			</g>
			{/* Tea estate terracing */}
			<g transform="translate(280,40)">
				{[0, 1, 2, 3, 4, 5].map(i => (
					<g key={i}>
						<line x1={0} y1={i * 35} x2={160 - i * 10} y2={i * 35} stroke="currentColor" strokeWidth="1" />
						<line x1={160 - i * 10} y1={i * 35} x2={155 - i * 10} y2={(i + 1) * 35} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
					</g>
				))}
			</g>
			{/* Harvest yield graph */}
			<g transform="translate(560,60)">
				<line x1="0" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="160" stroke="currentColor" strokeWidth="1" />
				<path d="M5,150 Q30,140 60,100 Q90,60 120,40 Q150,30 175,25" stroke="currentColor" strokeWidth="1.5" fill="none" />
				{[5, 60, 120, 175].map((x, i) => (
					<circle key={i} cx={x} cy={[150, 100, 40, 25][i]} r="3" fill="currentColor" opacity="0.4" />
				))}
				<text x="90" y="-5" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Yield</text>
			</g>
		</>
	);
}

function Nfrs1() {
	return (
		<>
			{/* Starting gate */}
			<g transform="translate(80,40)">
				<rect x="0" y="0" width="8" height="200" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
				<polygon points="8,0 50,15 8,30" fill="currentColor" opacity="0.35" />
				<text x="30" y="55" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">START</text>
			</g>
			{/* Transition arrow */}
			<g transform="translate(200,140)">
				<line x1="0" y1="0" x2="250" y2="0" stroke="currentColor" strokeWidth="2" />
				<polygon points="248,-5 258,0 248,5" fill="currentColor" opacity="0.6" />
				<text x="125" y="-10" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Transition Date</text>
			</g>
			{/* Old GAAP → NFRS boxes */}
			<g transform="translate(520,60)">
				<rect x="0" y="0" width="80" height="45" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="40" y="27" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Old GAAP</text>
				<line x1="80" y1="22" x2="120" y2="22" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="118,18 125,22 118,26" fill="currentColor" opacity="0.5" />
				<rect x="125" y="0" width="80" height="45" rx="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
				<text x="165" y="27" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.6">NFRS</text>
			</g>
		</>
	);
}

function Nfrs2() {
	return (
		<>
			{/* Candlestick chart */}
			<g transform="translate(80,40)">
				<line x1="0" y1="180" x2="200" y2="180" stroke="currentColor" strokeWidth="1" />
				{[{x: 20, o: 80, c: 40, h: 20, l: 100}, {x: 55, o: 50, c: 90, h: 30, l: 110}, {x: 90, o: 100, c: 60, h: 40, l: 120}, {x: 125, o: 70, c: 30, h: 10, l: 90}, {x: 160, o: 40, c: 70, h: 20, l: 100}].map((c, i) => (
					<g key={i}>
						<line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke="currentColor" strokeWidth="1" />
						<rect x={c.x - 8} y={Math.min(c.o, c.c)} width="16" height={Math.abs(c.o - c.c)} fill="currentColor" opacity={c.c < c.o ? 0.35 : 0.15} stroke="currentColor" strokeWidth="0.8" />
					</g>
				))}
			</g>
			{/* Vesting timeline */}
			<g transform="translate(350,120)">
				<line x1="0" y1="0" x2="200" y2="0" stroke="currentColor" strokeWidth="1.5" />
				{[0, 50, 100, 150, 200].map(x => (
					<g key={x}>
						<line x1={x} y1="-6" x2={x} y2="6" stroke="currentColor" strokeWidth="1" />
						<circle cx={x} cy="0" r="3" fill="currentColor" opacity={x <= 100 ? 0.5 : 0.2} />
					</g>
				))}
				<rect x="0" y="-20" width="100" height="12" rx="2" fill="currentColor" opacity="0.15" />
				<text x="50" y="-12" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Vesting Period</text>
			</g>
			{/* Intrinsic value bracket */}
			<g transform="translate(640,60)">
				<line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1.5" />
				<line x1="0" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="1.5" />
				<line x1="0" y1="100" x2="15" y2="100" stroke="currentColor" strokeWidth="1.5" />
				<text x="20" y="55" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Intrinsic Value</text>
			</g>
		</>
	);
}

function Nfrs3() {
	return (
		<>
			{/* Puzzle pieces merging */}
			<g transform="translate(80,60)">
				<path d="M0,0 L50,0 L50,20 Q60,25 60,35 Q60,45 50,50 L50,70 L0,70 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
				<path d="M70,0 L120,0 L120,70 L70,70 L70,50 Q60,45 60,35 Q60,25 70,20 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" />
			</g>
			{/* Acquisition price breakdown */}
			<g transform="translate(350,40)">
				<rect x="0" y="0" width="80" height="200" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
				{[{y: 0, h: 60, l: "Assets"}, {y: 60, h: 50, l: "Liabilities"}, {y: 110, h: 40, l: "NCI"}, {y: 150, h: 50, l: "Goodwill"}].map(s => (
					<g key={s.l}>
						<line x1="0" y1={s.y + s.h} x2="80" y2={s.y + s.h} stroke="currentColor" strokeWidth="0.8" />
						<text x="40" y={s.y + s.h / 2 + 4} textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{s.l}</text>
					</g>
				))}
				<rect x="0" y="150" width="80" height="50" fill="currentColor" opacity="0.15" />
			</g>
			{/* Goodwill box */}
			<g transform="translate(600,80)">
				<rect x="0" y="0" width="100" height="60" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
				<text x="50" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="currentColor" opacity="0.5">Goodwill</text>
				<text x="50" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.3">= Residual</text>
			</g>
		</>
	);
}

function Nfrs4() {
	return (
		<>
			{/* Beema Samiti building */}
			<g transform="translate(60,50)">
				<rect x="0" y="30" width="120" height="100" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="60,0 0,30 120,30" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
				<text x="60" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Beema Samiti</text>
				{[20, 50, 80].map(x => (
					<rect key={x} x={x} y="55" width="18" height="25" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.5" />
				))}
			</g>
			{/* LAT balance scale */}
			<g transform="translate(320,60)">
				<line x1="50" y1="0" x2="50" y2="80" stroke="currentColor" strokeWidth="1.2" />
				<line x1="10" y1="15" x2="90" y2="15" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="50,0 45,15 55,15" fill="currentColor" opacity="0.35" />
				<path d="M10,15 L0,50 Q15,60 30,50 L20,15" stroke="currentColor" strokeWidth="1" fill="none" />
				<path d="M80,15 L70,50 Q85,60 100,50 L90,15" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="50" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">LAT</text>
			</g>
			{/* Superseded diagonal strike */}
			<line x1="50" y1="350" x2="850" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.2" />
			<line x1="55" y1="355" x2="855" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.1" />
		</>
	);
}

function Nfrs5() {
	return (
		<>
			{/* For-sale signboard */}
			<g transform="translate(80,60)">
				<rect x="0" y="0" width="100" height="50" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
				<text x="50" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="currentColor" opacity="0.6">FOR SALE</text>
				<line x1="50" y1="50" x2="50" y2="120" stroke="currentColor" strokeWidth="1.5" />
				<line x1="30" y1="120" x2="70" y2="120" stroke="currentColor" strokeWidth="1.5" />
			</g>
			{/* Asset box with exit arrow */}
			<g transform="translate(320,60)">
				<rect x="0" y="0" width="100" height="80" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="50" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Asset</text>
				<line x1="100" y1="40" x2="160" y2="40" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="158,35 168,40 158,45" fill="currentColor" opacity="0.5" />
			</g>
			{/* Discontinued operations divider */}
			<g transform="translate(580,20)">
				<line x1="0" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="1.8" strokeDasharray="10,6" />
				<text x="10" y="150" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.4">Discontinued</text>
			</g>
		</>
	);
}

function Nfrs6() {
	return (
		<>
			{/* Mountain cross-section */}
			<g transform="translate(60,30)">
				<polygon points="100,0 0,200 200,200" stroke="currentColor" strokeWidth="1.5" fill="none" />
				{[60, 100, 140, 170].map((y, i) => (
					<line key={i} x1={100 - y / 2} y1={y} x2={100 + y / 2} y2={y} stroke="currentColor" strokeWidth="0.8" opacity={0.3 + i * 0.1} />
				))}
				<text x="100" y="120" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.4">Strata</text>
			</g>
			{/* Drill bore holes */}
			<g transform="translate(340,30)">
				{[0, 40, 80].map(x => (
					<g key={x}>
						<line x1={x + 10} y1="0" x2={x + 10} y2="200" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6,4" />
						<circle cx={x + 10} cy="200" r="4" fill="currentColor" opacity="0.35" />
					</g>
				))}
			</g>
			{/* Exploration cost timeline */}
			<g transform="translate(530,80)">
				<line x1="0" y1="50" x2="220" y2="50" stroke="currentColor" strokeWidth="1.2" />
				<polygon points="218,46 225,50 218,54" fill="currentColor" opacity="0.5" />
				{[{x: 0, l: "Explore"}, {x: 75, l: "Evaluate"}, {x: 150, l: "Develop"}].map(s => (
					<g key={s.l}>
						<rect x={s.x} y="20" width="65" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity={0.06} />
						<text x={s.x + 32} y="37" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{s.l}</text>
					</g>
				))}
			</g>
		</>
	);
}

function Nfrs7() {
	return (
		<>
			{/* NRB building */}
			<g transform="translate(60,50)">
				<rect x="0" y="40" width="120" height="90" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<path d="M40,10 A20,20 0 0,1 80,10" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<line x1="40" y1="10" x2="40" y2="40" stroke="currentColor" strokeWidth="1" />
				<line x1="80" y1="10" x2="80" y2="40" stroke="currentColor" strokeWidth="1" />
				<polygon points="60,0 0,40 120,40" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
				<text x="60" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">NRB</text>
			</g>
			{/* Risk matrix 3×3 */}
			<g transform="translate(320,50)">
				{[0, 1, 2].map(r => [0, 1, 2].map(c => (
					<rect key={`${r}-${c}`} x={c * 50} y={r * 50} width="45" height="45" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity={(r + c) * 0.04 + 0.02} />
				)))}
				<text x="75" y="-5" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Impact →</text>
			</g>
			{/* ECL stage funnel */}
			<g transform="translate(600,50)">
				<polygon points="0,0 120,0 90,150 30,150" stroke="currentColor" strokeWidth="1.2" fill="none" />
				{[{y: 0, l: "Stage 1"}, {y: 50, l: "Stage 2"}, {y: 100, l: "Stage 3"}].map(s => (
					<g key={s.l}>
						<line x1={s.y * 0.25 + 5} y1={s.y + 15} x2={120 - s.y * 0.25 - 5} y2={s.y + 15} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
						<text x="60" y={s.y + 38} textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{s.l}</text>
					</g>
				))}
			</g>
		</>
	);
}

function Nfrs8() {
	return (
		<>
			{/* Nepal map simplified */}
			<g transform="translate(60,50)">
				<path d="M0,80 L20,60 L60,70 L100,40 L150,50 L180,30 L200,40 L200,100 Q160,120 120,100 Q80,90 40,110 L0,100 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
				<line x1="80" y1="40" x2="80" y2="110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4" />
				<line x1="140" y1="40" x2="140" y2="110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,3" opacity="0.4" />
			</g>
			{/* Segment revenue bars */}
			<g transform="translate(360,50)">
				<line x1="0" y1="180" x2="160" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				{[{h: 140, l: "Seg A"}, {h: 100, l: "Seg B"}, {h: 160, l: "Seg C"}].map((b, i) => (
					<g key={i}>
						<rect x={15 + i * 48} y={180 - b.h} width="38" height={b.h} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
						<text x={34 + i * 48} y="195" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{b.l}</text>
					</g>
				))}
			</g>
			{/* Inter-segment elimination */}
			<g transform="translate(620,100)">
				<line x1="0" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1.2" />
				<line x1="25" y1="10" x2="55" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<line x1="55" y1="10" x2="25" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
				<text x="40" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Eliminate</text>
			</g>
		</>
	);
}

function Nfrs9() {
	return (
		<>
			{/* ECL funnel large */}
			<g transform="translate(60,30)">
				<polygon points="0,0 160,0 120,220 40,220" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="12" y1="25" x2="148" y2="25" stroke="currentColor" strokeWidth="0.8" />
				<line x1="24" y1="80" x2="136" y2="80" stroke="currentColor" strokeWidth="0.8" />
				<line x1="32" y1="140" x2="128" y2="140" stroke="currentColor" strokeWidth="0.8" />
				<text x="80" y="55" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Stage 1</text>
				<text x="80" y="115" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Stage 2</text>
				<text x="80" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Stage 3</text>
			</g>
			{/* SPPI test flow */}
			<g transform="translate(320,60)">
				<rect x="0" y="0" width="70" height="35" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="35" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">SPPI Test</text>
				<line x1="35" y1="35" x2="35" y2="55" stroke="currentColor" strokeWidth="1" />
				<line x1="10" y1="55" x2="60" y2="55" stroke="currentColor" strokeWidth="1" />
				{[10, 60].map((x, i) => (
					<g key={i}>
						<line x1={x} y1="55" x2={x} y2="70" stroke="currentColor" strokeWidth="1" />
						<rect x={x - 20} y="70" width="40" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
						<text x={x} y="87" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{["Pass", "Fail"][i]}</text>
					</g>
				))}
			</g>
			{/* Classification tree */}
			<g transform="translate(560,40)">
				<rect x="30" y="0" width="60" height="30" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="60" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Classify</text>
				<line x1="60" y1="30" x2="60" y2="50" stroke="currentColor" strokeWidth="1" />
				<line x1="10" y1="50" x2="110" y2="50" stroke="currentColor" strokeWidth="1" />
				{[{x: 10, l: "AC"}, {x: 60, l: "FVOCI"}, {x: 110, l: "FVTPL"}].map(s => (
					<g key={s.l}>
						<line x1={s.x} y1="50" x2={s.x} y2="65" stroke="currentColor" strokeWidth="1" />
						<rect x={s.x - 22} y="65" width="44" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
						<text x={s.x} y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{s.l}</text>
					</g>
				))}
			</g>
		</>
	);
}

function Nfrs10() {
	return (
		<>
			{/* Corporate tree centered */}
			<g transform="translate(250,30)">
				<rect x="80" y="0" width="100" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
				<text x="130" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.6">Nepal Holding</text>
				<line x1="130" y1="40" x2="130" y2="65" stroke="currentColor" strokeWidth="1.2" />
				<line x1="30" y1="65" x2="230" y2="65" stroke="currentColor" strokeWidth="1.2" />
				{[30, 130, 230].map((x, i) => (
					<g key={i}>
						<line x1={x} y1="65" x2={x} y2="85" stroke="currentColor" strokeWidth="1" />
						<rect x={x - 35} y="85" width="70" height="35" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
						<text x={x} y="107" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{[`Sub ${i + 1}`, `Sub ${i + 1}`, `Sub ${i + 1}`][i]}</text>
					</g>
				))}
			</g>
			{/* Consolidation funnel */}
			<g transform="translate(340,160)">
				<polygon points="0,0 120,0 80,80 40,80" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="60" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Consolidate</text>
			</g>
			{/* Elimination lines */}
			<g transform="translate(600,80)">
				{[0, 1, 2].map(i => (
					<g key={i} transform={`translate(0,${i * 45})`}>
						<line x1="0" y1="15" x2="80" y2="15" stroke="currentColor" strokeWidth="1" />
						<line x1="30" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
						<line x1="50" y1="5" x2="30" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
						<text x="95" y="20" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.4">{["IC Sales", "IC Loans", "Dividends"][i]}</text>
					</g>
				))}
			</g>
		</>
	);
}

function Nfrs11() {
	return (
		<>
			{/* Two mountain peaks */}
			<g transform="translate(80,40)">
				<polygon points="60,0 0,150 120,150" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="160,30 110,150 210,150" stroke="currentColor" strokeWidth="1.2" fill="none" />
			</g>
			{/* Bridge */}
			<g transform="translate(140,120)">
				<path d="M0,0 Q50,-30 100,0" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="25" y1="-15" x2="25" y2="0" stroke="currentColor" strokeWidth="0.8" />
				<line x1="50" y1="-22" x2="50" y2="0" stroke="currentColor" strokeWidth="0.8" />
				<line x1="75" y1="-15" x2="75" y2="0" stroke="currentColor" strokeWidth="0.8" />
			</g>
			{/* JV Venn circles */}
			<g transform="translate(420,60)">
				<circle cx="40" cy="50" r="45" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<circle cx="80" cy="50" r="45" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="60" y="55" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">JV</text>
			</g>
			{/* Proportionate arrows */}
			<g transform="translate(640,80)">
				{[0, 40, 80].map(y => (
					<g key={y}>
						<line x1="0" y1={y} x2="80" y2={y} stroke="currentColor" strokeWidth="1" />
						<polygon points={`78,${y - 3} 85,${y} 78,${y + 3}`} fill="currentColor" opacity="0.5" />
						<text x="95" y={y + 4} fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.4">{["50%", "50%", "50%"][y / 40]}</text>
					</g>
				))}
			</g>
		</>
	);
}

function Nfrs12() {
	return (
		<>
			{/* Network nodes web */}
			<g transform="translate(60,50)">
				{[{x: 60, y: 0}, {x: 0, y: 60}, {x: 120, y: 60}, {x: 30, y: 130}, {x: 90, y: 130}, {x: 60, y: 180}].map((n, i) => (
					<circle key={i} cx={n.x} cy={n.y} r="8" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
				))}
				<line x1="60" y1="8" x2="8" y2="54" stroke="currentColor" strokeWidth="0.8" />
				<line x1="60" y1="8" x2="112" y2="54" stroke="currentColor" strokeWidth="0.8" />
				<line x1="8" y1="66" x2="25" y2="124" stroke="currentColor" strokeWidth="0.8" />
				<line x1="112" y1="66" x2="95" y2="124" stroke="currentColor" strokeWidth="0.8" />
				<line x1="35" y1="136" x2="55" y2="174" stroke="currentColor" strokeWidth="0.8" />
				<line x1="85" y1="136" x2="65" y2="174" stroke="currentColor" strokeWidth="0.8" />
				<line x1="38" y1="130" x2="82" y2="130" stroke="currentColor" strokeWidth="0.8" />
			</g>
			{/* Entity tree */}
			<g transform="translate(360,50)">
				<rect x="40" y="0" width="60" height="30" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<text x="70" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">Parent</text>
				<line x1="70" y1="30" x2="70" y2="50" stroke="currentColor" strokeWidth="1" />
				<line x1="20" y1="50" x2="120" y2="50" stroke="currentColor" strokeWidth="1" />
				{[{x: 20, l: "Sub"}, {x: 70, l: "Assoc"}, {x: 120, l: "JV"}].map(s => (
					<g key={s.l}>
						<line x1={s.x} y1="50" x2={s.x} y2="65" stroke="currentColor" strokeWidth="0.8" />
						<rect x={s.x - 22} y="65" width="44" height="25" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
						<text x={s.x} y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{s.l}</text>
					</g>
				))}
			</g>
			{/* Ownership labels */}
			<g transform="translate(620,70)">
				{[{p: "80%", t: "Control"}, {p: "25%", t: "Influence"}, {p: "50%", t: "Joint"}].map((o, i) => (
					<g key={i} transform={`translate(0,${i * 50})`}>
						<text x="0" y="15" fontFamily="monospace" fontSize="14" fill="currentColor" opacity="0.35">{o.p}</text>
						<text x="50" y="15" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.4">{o.t}</text>
					</g>
				))}
			</g>
		</>
	);
}

function Nfrs13() {
	return (
		<>
			{/* Auction paddle */}
			<g transform="translate(80,50)">
				<circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<text x="40" y="45" textAnchor="middle" fontFamily="serif" fontSize="16" fill="currentColor" opacity="0.4">रु</text>
				<line x1="40" y1="75" x2="40" y2="160" stroke="currentColor" strokeWidth="2" />
			</g>
			{/* Level 1/2/3 pyramid */}
			<g transform="translate(320,30)">
				<polygon points="80,0 0,200 160,200" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="28" y1="70" x2="132" y2="70" stroke="currentColor" strokeWidth="1" />
				<line x1="14" y1="135" x2="146" y2="135" stroke="currentColor" strokeWidth="1" />
				<text x="80" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Level 1</text>
				<text x="80" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Level 2</text>
				<text x="80" y="175" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="currentColor" opacity="0.5">Level 3</text>
			</g>
			{/* Observable vs unobservable */}
			<g transform="translate(580,80)">
				<line x1="0" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1.2" />
				<line x1="90" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="1.2" />
				<text x="45" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Observable</text>
				<text x="135" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">Unobservable</text>
			</g>
		</>
	);
}

function Nfrs14() {
	return (
		<>
			{/* Electricity pylon */}
			<g transform="translate(80,20)">
				<line x1="40" y1="0" x2="20" y2="220" stroke="currentColor" strokeWidth="1.5" />
				<line x1="40" y1="0" x2="60" y2="220" stroke="currentColor" strokeWidth="1.5" />
				{[40, 90, 140, 190].map(y => (
					<line key={y} x1={40 - y * 0.09} y1={y} x2={40 + y * 0.09} y2={y} stroke="currentColor" strokeWidth="1" />
				))}
				<line x1="-20" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.8" />
				<line x1="-20" y1="65" x2="100" y2="65" stroke="currentColor" strokeWidth="0.8" />
				<text x="40" y="240" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">NEA</text>
			</g>
			{/* Tariff recovery timeline */}
			<g transform="translate(300,100)">
				<line x1="0" y1="30" x2="250" y2="30" stroke="currentColor" strokeWidth="1.5" />
				<polygon points="248,26 255,30 248,34" fill="currentColor" opacity="0.5" />
				{[0, 62, 124, 186].map((x, i) => (
					<g key={i}>
						<line x1={x} y1="22" x2={x} y2="38" stroke="currentColor" strokeWidth="1" />
						<rect x={x} y="0" width="55" height="20" rx="2" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity={(i + 1) * 0.05} />
					</g>
				))}
			</g>
			{/* Deferral bars */}
			<g transform="translate(600,50)">
				<line x1="0" y1="180" x2="160" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				{[0, 1, 2, 3, 4].map(i => (
					<rect key={i} x={10 + i * 28} y={180 - (i + 1) * 30} width="22" height={(i + 1) * 30} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
				))}
			</g>
		</>
	);
}

function Nfrs15() {
	return (
		<>
			{/* Contract document */}
			<g transform="translate(40,50)">
				<rect x="0" y="0" width="80" height="110" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
				{[20, 35, 50, 65].map(y => (
					<line key={y} x1="12" y1={y} x2="68" y2={y} stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
				))}
				<path d="M30,80 Q50,72 65,85" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
				<circle cx="55" cy="88" r="8" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.06" />
			</g>
			{/* 5-step flow boxes */}
			<g transform="translate(180,80)">
				{["Identify", "Determine", "Determine", "Allocate", "Recognise"].map((label, i) => (
					<g key={i} transform={`translate(${i * 90},0)`}>
						<rect x="0" y="0" width="75" height="40" rx="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.06" />
						<text x="38" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.5">{label}</text>
						{i < 4 && (
							<>
								<line x1="75" y1="20" x2="88" y2="20" stroke="currentColor" strokeWidth="1" />
								<polygon points={`86,17 92,20 86,23`} fill="currentColor" opacity="0.5" />
							</>
						)}
					</g>
				))}
				<text x="225" y="-10" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">5-Step Model</text>
			</g>
			{/* Revenue curve */}
			<g transform="translate(680,60)">
				<line x1="0" y1="140" x2="0" y2="0" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="140" x2="120" y2="140" stroke="currentColor" strokeWidth="1" />
				<path d="M5,130 Q30,125 50,90 Q70,55 90,30 Q105,15 115,10" stroke="currentColor" strokeWidth="1.5" fill="none" />
			</g>
		</>
	);
}

function Nfrs16() {
	return (
		<>
			{/* Pagoda tower */}
			<g transform="translate(60,30)">
				<rect x="0" y="120" width="5" height="180" fill="currentColor" opacity="0.35" />
				{[{y: 120, w: 33, h: 25}, {y: 150, w: 33, h: 25}, {y: 175, w: 33, h: 25}, {y: 200, w: 33, h: 25}].map((tier, i) => (
					<g key={i}>
						<rect x={-14} y={tier.y + 30} width={tier.w} height={5} stroke="currentColor" strokeWidth="1" fill="none" />
						<rect x={-10} y={tier.y + 35} width={25} height={tier.h} stroke="currentColor" strokeWidth="1" fill="none" />
						<polygon points={`-12,${tier.y + 35} 2.5,${tier.y + 23} 17,${tier.y + 35}`} stroke="currentColor" strokeWidth="1" fill="none" />
					</g>
				))}
				<polygon points="-18,150 2.5,133 23,150" stroke="currentColor" strokeWidth="1" fill="none" />
				<polygon points="-14,135 2.5,120 19,135" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="-1" y="95" width="7" height="25" stroke="currentColor" strokeWidth="1" fill="none" />
				<circle cx="2.5" cy="93" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
			</g>
			{/* Building with FOR LEASE */}
			<g transform="translate(160,60)">
				<rect x="0" y="0" width="200" height="280" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="0" y1="38" x2="200" y2="38" stroke="currentColor" strokeWidth="1" />
				<rect x="20" y="8" width="90" height="20" rx="2" fill="currentColor" opacity="0.25" />
				<text x="65" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="currentColor" opacity="0.9" letterSpacing="1">FOR LEASE</text>
				{[0, 1].map(c => [0, 1].map(r => (
					<g key={`${r}-${c}`}>
						<rect x={14 + c * 64} y={52 + r * 72} width="46" height="58" stroke="currentColor" strokeWidth="1" fill="none" />
						{[0, 1, 2, 3, 4].map(l => (
							<line key={l} x1={30 + c * 64} y1={65 + r * 72 + l * 6} x2={54 + c * 64} y2={65 + r * 72 + l * 6} stroke="currentColor" strokeWidth="0.7" strokeDasharray="5,3" />
						))}
					</g>
				)))}
				<rect x="70" y="196" width="60" height="84" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<circle cx="100" cy="236" r="7" stroke="currentColor" strokeWidth="1" fill="none" />
			</g>
			{/* Key icon */}
			<g transform="translate(390,90)">
				<circle cx="0" cy="0" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M-16,-10 Q0,-22 16,-10 L14,8 Q0,18 -14,8 Z" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="-7" y="8" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<line x1="0" y1="-28" x2="0" y2="-36" stroke="currentColor" strokeWidth="1.5" />
				<line x1="0" y1="-36" x2="18" y2="-36" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="23" cy="-36" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
			</g>
			{/* Bar chart */}
			<g transform="translate(460,160)">
				<line x1="0" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				{[{x: 16, h: 80}, {x: 64, h: 120}, {x: 112, h: 60}, {x: 160, h: 140}, {x: 208, h: 95}].map(b => (
					<rect key={b.x} x={b.x} y={180 - b.h} width="32" height={b.h} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1" />
				))}
			</g>
			{/* Line chart */}
			<g transform="translate(470,30)">
				<polyline points="0,80 30,55 70,68 110,40 150,50 190,22" stroke="currentColor" strokeWidth="1.5" fill="none" />
				{[{x: 0, y: 80}, {x: 30, y: 55}, {x: 70, y: 68}, {x: 110, y: 40}, {x: 150, y: 50}, {x: 190, y: 22}].map(p => (
					<circle key={p.x} cx={p.x} cy={p.y} r="3" fill="currentColor" opacity="0.5" />
				))}
				<line x1="0" y1="84" x2="200" y2="84" stroke="currentColor" strokeWidth="1" />
				<polyline points="190,22 202,10" stroke="currentColor" strokeWidth="2" fill="none" />
				<polygon points="202,10 194,18 206,20" fill="currentColor" opacity="0.5" />
			</g>
			{/* ROU/Liability tree */}
			<g transform="translate(700,60)">
				<circle cx="50" cy="0" r="5" fill="currentColor" opacity="0.5" />
				<line x1="50" y1="5" x2="50" y2="16" stroke="currentColor" strokeWidth="1.5" />
				<line x1="50" y1="16" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" />
				<line x1="50" y1="16" x2="82" y2="32" stroke="currentColor" strokeWidth="1.5" />
				<rect x="4" y="48" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<rect x="68" y="48" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<text x="18" y="62" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor">ROU</text>
				<text x="82" y="62" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor">Liability</text>
				<line x1="18" y1="68" x2="18" y2="80" stroke="currentColor" strokeWidth="1" />
				<line x1="82" y1="68" x2="82" y2="80" stroke="currentColor" strokeWidth="1" />
				<rect x="4" y="80" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<rect x="68" y="80" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
				<text x="18" y="92" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor">EIR</text>
				<text x="82" y="92" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor">IBR</text>
			</g>
		</>
	);
}

function Nfrs17() {
	return (
		<>
			{/* CSM unwind bars */}
			<g transform="translate(60,50)">
				<line x1="0" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="1" />
				<line x1="0" y1="0" x2="0" y2="180" stroke="currentColor" strokeWidth="1" />
				{[0, 1, 2, 3, 4].map(i => (
					<rect key={i} x={10 + i * 32} y={20 + i * 30} width="26" height={160 - i * 30} fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="0.6" />
				))}
				<text x="90" y="-5" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="currentColor" opacity="0.5">CSM Unwind</text>
			</g>
			{/* LRC/LIC split */}
			<g transform="translate(320,50)">
				<rect x="0" y="0" width="100" height="160" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="1.2" />
				<text x="50" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="currentColor" opacity="0.5">LRC</text>
				<text x="50" y="125" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="currentColor" opacity="0.5">LIC</text>
			</g>
			{/* Insurance policy stack */}
			<g transform="translate(520,60)">
				{[0, 1, 2].map(i => (
					<rect key={i} x={i * 8} y={i * 8} width="80" height="100" rx="2" stroke="currentColor" strokeWidth="1" fill="none" opacity={0.8 - i * 0.2} />
				))}
				{[30, 45, 60].map(y => (
					<line key={y} x1="22" y1={y} x2="80" y2={y} stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
				))}
				<text x="50" y="85" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="currentColor" opacity="0.4">Policy</text>
			</g>
			{/* Beema Samiti building */}
			<g transform="translate(680,80)">
				<rect x="0" y="25" width="90" height="70" stroke="currentColor" strokeWidth="1.2" fill="none" />
				<polygon points="45,0 0,25 90,25" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
				{[15, 40, 65].map(x => (
					<rect key={x} x={x} y="40" width="12" height="20" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.5" />
				))}
				<text x="45" y="15" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="currentColor" opacity="0.5">Beema Samiti</text>
			</g>
		</>
	);
}

export const STANDARD_ILLUSTRATIONS: Record<string, IllustrationContent> = {
	"nas-1": Nas1,
	"nas-2": Nas2,
	"nas-7": Nas7,
	"nas-8": Nas8,
	"nas-10": Nas10,
	"nas-12": Nas12,
	"nas-16": Nas16,
	"nas-19": Nas19,
	"nas-20": Nas20,
	"nas-21": Nas21,
	"nas-23": Nas23,
	"nas-24": Nas24,
	"nas-26": Nas26,
	"nas-27": Nas27,
	"nas-28": Nas28,
	"nas-29": Nas29,
	"nas-32": Nas32,
	"nas-33": Nas33,
	"nas-34": Nas34,
	"nas-36": Nas36,
	"nas-37": Nas37,
	"nas-38": Nas38,
	"nas-39": Nas39,
	"nas-40": Nas40,
	"nas-41": Nas41,
	"nfrs-1": Nfrs1,
	"nfrs-2": Nfrs2,
	"nfrs-3": Nfrs3,
	"nfrs-4": Nfrs4,
	"nfrs-5": Nfrs5,
	"nfrs-6": Nfrs6,
	"nfrs-7": Nfrs7,
	"nfrs-8": Nfrs8,
	"nfrs-9": Nfrs9,
	"nfrs-10": Nfrs10,
	"nfrs-11": Nfrs11,
	"nfrs-12": Nfrs12,
	"nfrs-13": Nfrs13,
	"nfrs-14": Nfrs14,
	"nfrs-15": Nfrs15,
	"nfrs-16": Nfrs16,
	"nfrs-17": Nfrs17,
};
