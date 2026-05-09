"use client";

import { useEffect, useRef } from "react";

export interface ArchiveMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function ArchiveMotif({
	className = "text-accent",
	"aria-label": ariaLabel = "Isometric illustration of a searchable reference archive",
}: ArchiveMotifProps) {
	const orbitRef = useRef<SVGCircleElement>(null);
	const innerOrbitRef = useRef<SVGCircleElement>(null);
	const particleRef = useRef<SVGCircleElement>(null);
	const particleRef2 = useRef<SVGCircleElement>(null);
	const orbitDashRef = useRef<SVGPathElement>(null);
	const groupRefs = useRef<(SVGGElement | null)[]>([]);

	const setRef = (i: number) => (el: SVGGElement | null) => {
		groupRefs.current[i] = el;
	};

	useEffect(() => {
		// Read base positions from data-origin on each group
		const bases: Array<{ x: number; y: number }> = groupRefs.current.map((g) => {
			if (!g) return { x: 0, y: 0 };
			const raw = g.getAttribute("data-origin") || "";
			const m = raw.match(/translate\(([-\d.]+),\s*([-\d.]+)\)/);
			return { x: m ? parseFloat(m[1]) : 0, y: m ? parseFloat(m[2]) : 0 };
		});

		let rafId: number;
		let startTs: number | null = null;

		const durations = [4.2, 5.5, 3.8, 6.1, 4.7, 5.0, 3.5, 6.8, 4.4, 5.2, 6.0, 4.9];
		const phases = [0, 1.2, 2.4, 3.6, 0.8, 2.0, 3.2, 1.6, 4.0, 0.5, 2.8, 1.0];
		const amplitudes = [3, 4, 2.5, 5, 3.5, 2, 4.5, 3, 2.5, 3.2, 2.8, 4.0];

		function frame(ts: number) {
			if (!startTs) startTs = ts;
			const t = (ts - startTs) / 1000;

			if (particleRef.current) {
				const a = (t * 0.5) % (2 * Math.PI);
				particleRef.current.setAttribute("cx", String(200 + 160 * Math.cos(a)));
				particleRef.current.setAttribute("cy", String(190 + 160 * Math.sin(a)));
			}
			if (particleRef2.current) {
				const a = (t * 0.8 + Math.PI) % (2 * Math.PI);
				particleRef2.current.setAttribute("cx", String(200 + 120 * Math.cos(a)));
				particleRef2.current.setAttribute("cy", String(190 + 120 * Math.sin(a)));
			}
			if (orbitRef.current) {
				const d = 2 * Math.PI * 160;
				orbitRef.current.setAttribute("stroke-dashoffset", String(-((t * 25) % d)));
			}
			if (innerOrbitRef.current) {
				const d = 2 * Math.PI * 120;
				innerOrbitRef.current.setAttribute("stroke-dashoffset", String((t * 16) % d));
			}
			if (orbitDashRef.current) {
				const d = 2 * Math.PI * 160;
				orbitDashRef.current.setAttribute("stroke-dashoffset", String(-((t * 20) % d)));
			}

			groupRefs.current.forEach((g, i) => {
				if (!g) return;
				const offset = amplitudes[i % amplitudes.length] *
					Math.sin((t + phases[i % phases.length]) * (2 * Math.PI / durations[i % durations.length]));
				g.setAttribute("transform", `translate(${bases[i].x}, ${bases[i].y + offset})`);
			});

			rafId = requestAnimationFrame(frame);
		}

		rafId = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<svg
			viewBox="0 0 400 380"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label={ariaLabel}
			className={className}
		>
			<defs>
				<style>{`
					.magnifier-group { transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
					.magnifier-group:hover .mag-ring { opacity: 0.95; }
					.magnifier-group:hover .mag-inner { opacity: 0.35; }
					.arrows-group:hover { opacity: 0.6; }
					.arrows-group:hover .arrow-right { transform: translateX(5px); }
					.arrows-group:hover .arrow-left { transform: translateX(-5px); }
					.arrow-right, .arrow-left { transition: transform 0.3s ease; }
					.cube-group:hover { transform: rotate(10deg); }
					.book-group { transition: transform 0.3s ease; }
					.cabinet-group { transition: transform 0.3s ease; }
				`}</style>
			</defs>

			{/* === ORBITAL RINGS === */}
			<path
				ref={orbitDashRef}
				d="M 200,30 A 160,160 0 1,1 199.9,30"
				opacity="0.1"
				strokeWidth="1"
				strokeDasharray="40 960"
				style={{ transition: "none" }}
			/>
			<circle ref={orbitRef} cx="200" cy="190" r="160" opacity="0.08" strokeWidth="0.8" strokeDasharray="30 970" style={{ transition: "none" }} />
			<circle ref={innerOrbitRef} cx="200" cy="190" r="120" opacity="0.05" strokeWidth="0.7" strokeDasharray="20 734" style={{ transition: "none" }} />

			{/* === ORBITING PARTICLES === */}
			<circle ref={particleRef} cx="360" cy="190" r="4" fill="currentColor" opacity="0.2" style={{ transition: "none" }} />
			<circle ref={particleRef2} cx="80" cy="190" r="3" fill="currentColor" opacity="0.15" style={{ transition: "none" }} />

			{/* === FILE CABINET === */}
			<g ref={setRef(0)} data-origin="translate(20,80)" transform="translate(20,80)" className="cabinet-group">
				<polygon points="50,10 100,0 150,20 100,30" fill="currentColor" opacity="0.04" />
				<path d="M50,10 L100,0 L150,20 L100,30 Z" />
				<path d="M50,10 L50,150 L100,170 L100,30 Z" />
				<path d="M150,20 L150,160 L100,170 L100,30 Z" />
				<path d="M56,30 L100,18 L144,30" opacity="0.3" />
				<path d="M56,30 L56,60 L100,72 L144,60 L144,30" opacity="0.4" />
				<polygon points="70,18 90,12 110,18 90,24" fill="currentColor" opacity="0.12" />
				<polygon points="75,12 95,6 115,12 95,18" fill="currentColor" opacity="0.08" />
				<line x1="92" y1="48" x2="108" y2="42" opacity="0.4" strokeWidth="1.5" />
				<path d="M56,70 L100,58 L144,70 L144,100 L100,112 L56,100 Z" opacity="0.3" />
				<line x1="92" y1="88" x2="108" y2="82" opacity="0.4" strokeWidth="1.5" />
				<path d="M56,110 L100,98 L144,110 L144,140 L100,152 L56,140 Z" opacity="0.3" />
				<line x1="92" y1="128" x2="108" y2="122" opacity="0.4" strokeWidth="1.5" />
				<rect x="88" y="43" width="16" height="8" rx="1" fill="currentColor" opacity="0.06" transform="skewY(-12)" />
				<rect x="88" y="83" width="16" height="8" rx="1" fill="currentColor" opacity="0.06" transform="skewY(-12)" />
			</g>

			{/* === OPEN BOOK === */}
			<g ref={setRef(1)} data-origin="translate(120,210)" transform="translate(120,210)" className="book-group">
				<polygon points="0,55 0,8 90,0 90,47" fill="currentColor" opacity="0.03" />
				<polygon points="180,55 180,8 90,0 90,47" fill="currentColor" opacity="0.03" />
				<path d="M0,55 L0,8 L90,0 L90,47 Z" />
				<path d="M180,55 L180,8 L90,0 L90,47 Z" />
				<line x1="90" y1="0" x2="90" y2="47" strokeWidth="1.6" />
				<polyline points="10,40 22,32 34,36 50,22 66,26 80,16" opacity="0.3" />
				<path d="M10,40 L10,46 L80,30 L80,16" opacity="0.08" fill="currentColor" />
				<line x1="96" y1="6" x2="172" y2="14" opacity="0.2" />
				<line x1="96" y1="14" x2="172" y2="22" opacity="0.2" />
				<line x1="96" y1="22" x2="172" y2="30" opacity="0.2" />
				<line x1="96" y1="30" x2="150" y2="38" opacity="0.2" />
				<line x1="140" y1="8" x2="148" y2="36" opacity="0.15" />
				<polyline points="165,12 168,16 174,8" opacity="0.3" strokeWidth="1" />
				<polyline points="165,20 168,24 174,16" opacity="0.3" strokeWidth="1" />
				<path d="M2,57 L90,49 L178,57" opacity="0.25" />
				<path d="M4,60 L90,52 L176,60" opacity="0.15" />
			</g>

			{/* === MAGNIFYING GLASS === */}
			<g ref={setRef(2)} data-origin="translate(255,195)" transform="translate(255,195)" className="magnifier-group">
				<circle cx="28" cy="28" r="28" opacity="0.8" className="mag-ring" />
				<circle cx="28" cy="28" r="24" opacity="0.15" className="mag-inner" />
				<path d="M16,18 Q22,12 30,16" opacity="0.25" />
				<line x1="50" y1="48" x2="78" y2="76" strokeWidth="3" />
				<line x1="76" y1="74" x2="82" y2="80" strokeWidth="5" opacity="0.4" />
				<line x1="16" y1="28" x2="40" y2="28" opacity="0.2" strokeWidth="1.5" />
				<line x1="16" y1="34" x2="36" y2="34" opacity="0.15" strokeWidth="1.5" />
			</g>

			{/* === COMPARISON ARROWS === */}
			<g ref={setRef(3)} data-origin="translate(160,170)" transform="translate(160,170)" opacity="0.3" className="arrows-group">
				<line x1="0" y1="6" x2="50" y2="6" strokeWidth="1.2" className="arrow-right" />
				<polyline points="42,2 50,6 42,10" />
				<line x1="50" y1="14" x2="0" y2="14" strokeWidth="1.2" className="arrow-left" />
				<polyline points="8,10 0,14 8,18" />
			</g>

			{/* === DIGITAL INTERFACE === */}
			<g ref={setRef(4)} data-origin="translate(270,50)" transform="translate(270,50)">
				<polygon points="0,30 50,8 110,35 60,57" fill="currentColor" opacity="0.04" />
				<path d="M0,30 L50,8 L110,35 L60,57 Z" />
				<rect x="18" y="24" width="6" height="18" fill="currentColor" opacity="0.12" transform="skewY(-25)" />
				<rect x="28" y="24" width="6" height="26" fill="currentColor" opacity="0.15" transform="skewY(-25)" />
				<rect x="38" y="24" width="6" height="14" fill="currentColor" opacity="0.1" transform="skewY(-25)" />
				<rect x="48" y="24" width="6" height="22" fill="currentColor" opacity="0.13" transform="skewY(-25)" />
				<line x1="55" y1="57" x2="55" y2="68" opacity="0.3" />
				<line x1="45" y1="72" x2="65" y2="64" opacity="0.3" />
			</g>

			{/* === BOOKMARK TABS === */}
			<g ref={setRef(5)} data-origin="translate(240,30)" transform="translate(240,30)" opacity="0.3">
				<polygon points="0,0 14,-6 14,10 0,16" fill="currentColor" opacity="0.2" />
				<path d="M0,0 L14,-6 L14,10 L0,16 Z" />
				<polygon points="18,16 32,10 32,26 18,32" fill="currentColor" opacity="0.12" />
				<path d="M18,16 L32,10 L32,26 L18,32 Z" opacity="0.5" />
			</g>

			{/* === ISOMETRIC CUBES === */}
			<g ref={setRef(6)} data-origin="translate(30,290)" transform="translate(30,290)" className="cube-group">
				<polygon points="20,15 30,10 40,15 30,20" fill="currentColor" opacity="0.2" />
				<path d="M20,15 L20,27 L30,32 L30,20 Z" fill="currentColor" opacity="0.15" />
				<path d="M40,15 L40,27 L30,32 L30,20 Z" fill="currentColor" opacity="0.1" />
				<polygon points="25,4 35,-1 45,4 35,9" fill="currentColor" opacity="0.22" />
				<path d="M25,4 L25,16 L35,21 L35,9 Z" fill="currentColor" opacity="0.16" />
				<path d="M45,4 L45,16 L35,21 L35,9 Z" fill="currentColor" opacity="0.11" />
			</g>

			{/* === CALCULATOR === */}
			<g ref={setRef(7)} data-origin="translate(280,200)" transform="translate(280,200)">
				<rect x="0" y="0" width="52" height="68" rx="3" fill="currentColor" opacity="0.06" />
				<rect x="0" y="0" width="52" height="68" rx="3" />
				<rect x="4" y="5" width="44" height="14" rx="2" fill="currentColor" opacity="0.12" />
				<text x="46" y="14" textAnchor="end" fontFamily="monospace" fontSize="6" opacity="0.45">12500</text>
				<rect x="4" y="24" width="16" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="23" y="24" width="16" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="4" y="36" width="16" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="23" y="36" width="16" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="4" y="48" width="16" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="23" y="48" width="16" height="10" rx="1.5" fill="currentColor" opacity="0.08" />
			</g>

			{/* === STACKED LEDGERS === */}
			<g ref={setRef(8)} data-origin="translate(290,90)" transform="translate(290,90)">
				<rect x="0" y="0" width="48" height="62" rx="2" fill="currentColor" opacity="0.04" />
				<rect x="0" y="0" width="48" height="62" rx="2" />
				<line x1="6" y1="12" x2="40" y2="12" opacity="0.2" strokeWidth="0.7" />
				<line x1="6" y1="20" x2="38" y2="20" opacity="0.2" strokeWidth="0.7" />
				<line x1="6" y1="28" x2="42" y2="28" opacity="0.2" strokeWidth="0.7" />
				<line x1="6" y1="36" x2="36" y2="36" opacity="0.2" strokeWidth="0.7" />
				<line x1="6" y1="44" x2="40" y2="44" opacity="0.2" strokeWidth="0.7" />
				<rect x="4" y="4" width="48" height="62" rx="2" fill="currentColor" opacity="0.03" />
				<rect x="4" y="4" width="40" height="54" rx="1.5" opacity="0.4" />
				<rect x="8" y="8" width="36" height="46" rx="1" opacity="0.3" />
			</g>

			{/* === SCATTER DOTS — floating === */}
			<g ref={setRef(9)} data-origin="translate(200,0)" transform="translate(200,0)" opacity="0.12">
				<circle cx="0" cy="30" r="2.5" fill="currentColor" />
			</g>
			<g ref={setRef(10)} data-origin="translate(60,0)" transform="translate(60,0)" opacity="0.08">
				<circle cx="0" cy="30" r="20" />
				<circle cx="0" cy="30" r="12" />
				<circle cx="0" cy="30" r="4" fill="currentColor" opacity="0.3" />
			</g>
			<g ref={setRef(11)} data-origin="translate(340,0)" transform="translate(340,0)" opacity="0.1">
				<text fontSize="28" fill="currentColor" stroke="none" fontFamily="serif" fontWeight="700" x="0" y="260">रु</text>
			</g>

			{/* === STATIC SCATTER === */}
			<circle cx="90" cy="60" r="2" fill="currentColor" opacity="0.1" />
			<circle cx="350" cy="280" r="2" fill="currentColor" opacity="0.08" />
			<circle cx="50" cy="250" r="2.5" fill="currentColor" opacity="0.1" />
			<circle cx="380" cy="50" r="1.5" fill="currentColor" opacity="0.12" />
			<circle cx="320" cy="340" r="2" fill="currentColor" opacity="0.08" />
			<circle cx="40" cy="190" r="3" fill="currentColor" opacity="0.12" />
			<circle cx="200" cy="350" r="2.5" fill="currentColor" opacity="0.1" />

			{/* === CONNECTING LINES === */}
			<line x1="170" y1="80" x2="130" y2="120" opacity="0.08" strokeDasharray="3 5" />
			<line x1="340" y1="100" x2="300" y2="160" opacity="0.08" strokeDasharray="3 5" />
			<line x1="80" y1="260" x2="140" y2="230" opacity="0.07" strokeDasharray="3 5" />
		</svg>
	);
}