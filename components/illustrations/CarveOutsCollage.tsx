"use client";

import { useEffect, useRef } from "react";

export interface CarveOutsCollageProps {
	className?: string;
	"aria-label"?: string;
}

export function CarveOutsCollage({
	className = "text-accent",
	"aria-label": ariaLabel = "Carve-outs collage illustration",
}: CarveOutsCollageProps) {
	const groupRefs = useRef<(SVGGElement | null)[]>([]);

	const setRef = (i: number) => (el: SVGGElement | null) => {
		groupRefs.current[i] = el;
	};

	useEffect(() => {
		const bases: Array<{ x: number; y: number }> = groupRefs.current.map((g) => {
			if (!g) return { x: 0, y: 0 };
			const raw = g.getAttribute("data-origin") || "";
			const m = raw.match(/translate\(([-\d.]+),\s*([-\d.]+)\)/);
			return { x: m ? parseFloat(m[1]) : 0, y: m ? parseFloat(m[2]) : 0 };
		});

		let rafId: number;
		let startTs: number | null = null;

		const durations = [5.0, 4.2, 6.1, 3.8, 5.5, 4.8, 3.5, 5.2, 6.0, 4.4];
		const phases = [0, 1.4, 2.8, 0.7, 2.1, 3.5, 1.0, 4.2, 0.3, 2.6];
		const amplitudes = [3, 4, 2, 3.5, 2.5, 4, 3, 2.8, 3.2, 4.5];

		function frame(ts: number) {
			if (!startTs) startTs = ts;
			const t = (ts - startTs) / 1000;

			groupRefs.current.forEach((g, i) => {
				if (!g) return;
				const offset =
					amplitudes[i % amplitudes.length] *
					Math.sin(
						(t + phases[i % phases.length]) *
							(2 * Math.PI / durations[i % durations.length]),
					);
				g.setAttribute(
					"transform",
					`translate(${bases[i].x}, ${bases[i].y + offset})`,
				);
			});

			rafId = requestAnimationFrame(frame);
		}

		rafId = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<svg
			viewBox="0 0 720 300"
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
					.cg-pagoda { transition: transform 0.3s ease; }
					.cg-pagoda:hover { transform: translateY(-4px); }
					.cg-stupa { transition: transform 0.3s ease; }
					.cg-stupa:hover { transform: translateY(-3px); }
					.cg-dharahara { transition: transform 0.3s ease; }
					.cg-dharahara:hover { transform: translateY(-5px) rotate(2deg); }
					.cg-note { transition: transform 0.3s ease; }
					.cg-note:hover { transform: translateY(-3px) rotate(1deg); }
					.cg-buddha { transition: transform 0.3s ease; }
					.cg-buddha:hover { transform: scale(1.08); }
					.cg-ledger { transition: transform 0.3s ease; }
					.cg-ledger:hover { transform: translateX(3px); }
				`}</style>
			</defs>

			{/* Multi-tier pagoda — centre */}
			<g ref={setRef(0)} data-origin="translate(338,230)" transform="translate(338,230)" className="cg-pagoda">
				<rect x="0" y="0" width="64" height="12" rx="1" />
				<rect x="6" y="-24" width="52" height="24" />
				<polygon points="2,-24 32,-42 62,-24" />
				<rect x="12" y="-56" width="40" height="32" />
				<polygon points="8,-56 32,-72 56,-56" />
				<rect x="18" y="-88" width="28" height="32" />
				<polygon points="14,-88 32,-102 50,-88" />
				<rect x="24" y="-112" width="16" height="24" />
				<polygon points="20,-112 32,-124 44,-112" />
				<line x1="32" y1="-124" x2="32" y2="-140" />
				<circle cx="32" cy="-143" r="3.5" />
				<rect x="22" y="-16" width="8" height="14" rx="1" opacity="0.5" />
				<rect x="34" y="-16" width="8" height="14" rx="1" opacity="0.5" />
				<circle cx="32" cy="-48" r="4" opacity="0.4" />
				<circle cx="32" cy="-78" r="3" opacity="0.4" />
			</g>

			{/* Boudhanath Stupa — left */}
			<g ref={setRef(1)} data-origin="translate(30,200)" transform="translate(30,200)" className="cg-stupa">
				<rect x="0" y="0" width="90" height="10" rx="1" />
				<path d="M8,0 L8,-20 Q55,-30 82,-20 L82,0" />
				<path d="M18,-20 L18,-40 Q50,-48 82,-40 L82,-20" opacity="0.8" />
				<path d="M28,-40 Q50,-58 72,-40" />
				<line x1="50" y1="-58" x2="50" y2="-78" />
				<polygon points="42,-66 50,-78 58,-66" fill="currentColor" opacity="0.15" />
				<circle cx="44" cy="-45" r="2" fill="currentColor" opacity="0.35" />
				<circle cx="56" cy="-45" r="2" fill="currentColor" opacity="0.35" />
				<polyline points="50,-74 27,-82 15,-78" opacity="0.4" strokeDasharray="2,2" />
				<polyline points="50,-70 73,-78 85,-74" opacity="0.4" strokeDasharray="2,2" />
			</g>

			{/* Nepali currency note — far right */}
			<g ref={setRef(2)} data-origin="translate(580,30)" transform="translate(580,30)" className="cg-note">
				<rect x="0" y="0" width="120" height="60" rx="4" />
				<rect x="0" y="0" width="120" height="60" rx="4" fill="currentColor" opacity="0.06" />
				<circle cx="60" cy="30" r="16" opacity="0.3" />
				<text x="60" y="35" textAnchor="middle" fontFamily="Georgia,serif" fontSize="14" fill="currentColor" opacity="0.5">Rs</text>
				<text x="15" y="15" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.4">NPR</text>
				<line x1="10" y1="20" x2="40" y2="20" opacity="0.3" />
				<text x="105" y="52" textAnchor="end" fontFamily="monospace" fontSize="9" fill="currentColor" opacity="0.4">1000</text>
				<rect x="4" y="4" width="112" height="52" rx="2" opacity="0.2" strokeDasharray="3,2" />
			</g>

			{/* Mountain range — bottom background */}
			<g opacity="0.25">
				<polyline points="0,270 40,210 70,230 110,190 140,220 180,170 220,205 260,160 300,200 340,180 380,215 420,195 460,225 500,190 540,220 580,200 620,230 660,210 700,230 720,220 720,270" fill="currentColor" opacity="0.08" />
				<polyline points="0,270 40,210 70,230 110,190 140,220 180,170 220,205 260,160 300,200 340,180 380,215 420,195 460,225 500,190 540,220 580,200 620,230 660,210 700,230 720,220" />
				<polyline points="100,190 110,190 120,198" opacity="0.6" />
				<polyline points="250,160 260,160 270,170" opacity="0.6" />
				<polyline points="170,172 180,170 190,176" opacity="0.6" />
				<polyline points="530,190 540,190 550,196" opacity="0.6" />
				<polyline points="650,210 660,210 670,218" opacity="0.6" />
			</g>

			{/* Gautam Buddha — right */}
			<g ref={setRef(3)} data-origin="translate(660,170)" transform="translate(660,170)" className="cg-buddha">
				<circle cx="0" cy="-8" r="12" opacity="0.5" />
				<circle cx="0" cy="-16" r="6" />
				<path d="M-6,-10 Q0,-2 6,-10" />
				<path d="M-10,2 L0,-4 L10,2" />
				<path d="M-14,6 Q-7,2 0,6 Q7,2 14,6" />
				<path d="M-16,10 Q-7,6 0,10 Q7,6 16,10" />
				<circle cx="0" cy="-12" r="20" opacity="0.15" strokeDasharray="3,4" />
			</g>

			{/* Dharahara — far right */}
			<g ref={setRef(4)} data-origin="translate(690,120)" transform="translate(690,120)" className="cg-dharahara">
				<rect x="0" y="0" width="16" height="100" rx="2" />
				<polygon points="4,0 8,-12 12,0" />
				<line x1="3" y1="15" x2="13" y2="15" opacity="0.5" />
				<line x1="3" y1="30" x2="13" y2="30" opacity="0.5" />
				<line x1="3" y1="45" x2="13" y2="45" opacity="0.5" />
				<line x1="3" y1="60" x2="13" y2="60" opacity="0.5" />
				<line x1="3" y1="75" x2="13" y2="75" opacity="0.5" />
				<line x1="3" y1="90" x2="13" y2="90" opacity="0.5" />
				<circle cx="8" cy="-15" r="3" />
				<rect x="-4" y="100" width="24" height="6" rx="1" />
			</g>

			{/* Scales of justice — top left */}
			<g ref={setRef(5)} data-origin="translate(190,40)" transform="translate(190,40)" opacity="0.7">
				<line x1="0" y1="0" x2="0" y2="50" />
				<line x1="-20" y1="10" x2="20" y2="10" />
				<line x1="-20" y1="10" x2="-28" y2="30" />
				<line x1="-20" y1="10" x2="-12" y2="30" />
				<path d="M-32,30 Q-20,38 -8,30" />
				<line x1="20" y1="10" x2="12" y2="24" />
				<line x1="20" y1="10" x2="28" y2="24" />
				<path d="M8,24 Q20,32 32,24" />
				<polygon points="-6,50 0,50 6,50 3,56 -3,56" fill="currentColor" opacity="0.2" />
			</g>

			{/* Ledger / document stack — left bottom */}
			<g ref={setRef(6)} data-origin="translate(20,240)" transform="translate(20,240)" className="cg-ledger">
				<rect x="0" y="0" width="65" height="42" rx="2" />
				<rect x="4" y="4" width="65" height="42" rx="2" fill="currentColor" opacity="0.04" />
				<line x1="10" y1="12" x2="52" y2="12" opacity="0.3" />
				<line x1="10" y1="20" x2="48" y2="20" opacity="0.3" />
				<line x1="10" y1="28" x2="44" y2="28" opacity="0.3" />
				<polyline points="6,12 8,14 12,8" opacity="0.5" />
				<polyline points="6,20 8,22 12,16" opacity="0.5" />
			</g>

			{/* Coins / rupee symbols */}
			<g ref={setRef(7)} data-origin="translate(240,260)" transform="translate(240,260)" opacity="0.8">
				<circle cx="0" cy="0" r="10" />
				<text x="0" y="4" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="currentColor" opacity="0.5">₹</text>
				<circle cx="-15" cy="10" r="8" opacity="0.5" />
				<circle cx="18" cy="8" r="7" opacity="0.4" />
			</g>

			{/* Stamp / seal — top centre */}
			<g ref={setRef(8)} data-origin="translate(370,38)" transform="translate(370,38)" opacity="0.8">
				<circle cx="0" cy="0" r="22" opacity="0.3" />
				<circle cx="0" cy="0" r="16" opacity="0.25" />
				<text x="0" y="4" textAnchor="middle" fontFamily="Georgia,serif" fontSize="9" fill="currentColor" opacity="0.4">ICAN</text>
				<line x1="-12" y1="10" x2="12" y2="10" opacity="0.3" />
			</g>

			{/* Bar chart — right bottom */}
			<g ref={setRef(9)} data-origin="translate(490,200)" transform="translate(490,200)" opacity="0.8">
				<rect x="0" y="0" width="14" height="50" rx="1" fill="currentColor" opacity="0.15" />
				<rect x="0" y="0" width="14" height="50" rx="1" />
				<rect x="20" y="-12" width="14" height="62" rx="1" fill="currentColor" opacity="0.12" />
				<rect x="20" y="-12" width="14" height="62" rx="1" />
				<rect x="40" y="8" width="14" height="42" rx="1" fill="currentColor" opacity="0.08" />
				<rect x="40" y="8" width="14" height="42" rx="1" />
				<line x1="-5" y1="50" x2="60" y2="50" opacity="0.3" />
			</g>

			{/* Calculator — right of pagoda */}
			<g opacity="0.7">
				<rect x="490" y="100" width="52" height="68" rx="3" />
				<rect x="490" y="100" width="52" height="68" rx="3" fill="currentColor" opacity="0.06" />
				<rect x="494" y="105" width="44" height="14" rx="2" fill="currentColor" opacity="0.12" />
				<text x="530" y="114" textAnchor="end" fontFamily="monospace" fontSize="6" opacity="0.45">12500</text>
				<rect x="494" y="124" width="18" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="515" y="124" width="18" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="494" y="137" width="18" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="515" y="137" width="18" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="494" y="150" width="18" height="10" rx="1.5" fill="currentColor" opacity="0.05" />
				<rect x="515" y="150" width="18" height="10" rx="1.5" fill="currentColor" opacity="0.08" />
			</g>

			{/* Ledger — between pagoda and stupa */}
			<g opacity="0.6">
				<rect x="220" y="250" width="90" height="52" rx="2" />
				<line x1="230" y1="262" x2="290" y2="262" opacity="0.25" strokeWidth="0.7" />
				<line x1="230" y1="270" x2="287" y2="270" opacity="0.25" strokeWidth="0.7" />
				<line x1="230" y1="278" x2="293" y2="278" opacity="0.25" strokeWidth="0.7" />
				<line x1="230" y1="286" x2="285" y2="286" opacity="0.25" strokeWidth="0.7" />
				<polyline points="226,262 228,264 232,258" opacity="0.5" />
				<polyline points="226,270 228,272 232,266" opacity="0.5" />
				<rect x="224" y="254" width="90" height="52" rx="2" fill="currentColor" opacity="0.03" />
				<rect x="228" y="258" width="82" height="44" rx="1.5" opacity="0.5" />
			</g>

			{/* Isometric cube — far left */}
			<g opacity="0.4">
				<polygon points="10,200 10,186 24,179 24,193" />
				<polygon points="24,179 38,186 38,200 24,193" />
				<polygon points="10,186 24,179 38,186 24,193" fill="currentColor" opacity="0.1" stroke="none" />
			</g>

			{/* Ground dashes */}
			<line x1="10" y1="280" x2="710" y2="280" strokeDasharray="2,6" opacity="0.12" />
		</svg>
	);
}
