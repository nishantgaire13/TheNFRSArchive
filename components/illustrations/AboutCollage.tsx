"use client";

import { useEffect, useRef } from "react";

export function AboutCollage({ className = "text-accent" }: { className?: string }) {
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

		const durations = [4.2, 5.5, 3.8, 6.1, 4.7, 5.0, 3.5, 6.8, 4.4, 5.2];
		const phases = [0, 1.2, 2.4, 3.6, 0.8, 2.0, 3.2, 1.6, 4.0, 0.5];
		const amplitudes = [3, 4, 2.5, 5, 3.5, 2, 4.5, 3, 2.5, 3.2];

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
			viewBox="0 0 380 480"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			style={{ display: "block" }}
		>
			<title>About page illustration</title>
			<desc>
				Compact risograph-style collage with calculator, bar charts, pagoda, Boudhanath stupa, Dharahara tower, ledger, and Nepal cultural elements in dark crimson
			</desc>
			<defs>
				<style>{`
					@keyframes aboutFadeIn {
						from { opacity: 0; transform: translateY(10px); }
						to   { opacity: 1; transform: translateY(0); }
					}
					.about-enter { animation: aboutFadeIn 1.2s ease both; }
					.ab-pagoda { transition: transform 0.3s ease; }
					.ab-pagoda:hover { transform: translateY(-4px); }
					.ab-stupa { transition: transform 0.3s ease; }
					.ab-stupa:hover { transform: translateY(-3px); }
					.ab-dharahara { transition: transform 0.3s ease; }
					.ab-dharahara:hover { transform: translateY(-5px) rotate(2deg); }
					.ab-calc { transition: transform 0.3s ease; }
					.ab-calc:hover { transform: translateY(-3px) scale(1.05); }
					.ab-ledger { transition: transform 0.3s ease; }
					.ab-ledger:hover { transform: translateX(3px); }
					.ab-chart { transition: transform 0.3s ease; }
					.ab-chart:hover { transform: translateY(-2px); }
					.ab-scales { transition: transform 0.3s ease; }
					.ab-scales:hover { transform: rotate(3deg); }
				`}</style>
			</defs>

			<g className="about-enter" fill="currentColor" stroke="currentColor">

				{/* Multi-tier pagoda — centre-left, largest element */}
				<g ref={setRef(0)} data-origin="translate(40,310)" transform="translate(40,310)" className="ab-pagoda">
					<rect x="0" y="0" width="58" height="14" rx="1" />
					<rect x="6" y="-24" width="46" height="24" />
					<polygon points="2,-24 28,-42 54,-24" />
					<rect x="10" y="-54" width="36" height="30" />
					<polygon points="7,-54 28,-68 49,-54" />
					<rect x="14" y="-80" width="28" height="26" />
					<polygon points="10,-80 28,-92 46,-80" />
					<rect x="19" y="-102" width="18" height="22" />
					<polygon points="15,-102 28,-112 41,-102" />
					<line x1="28" y1="-112" x2="28" y2="-125" strokeWidth="1.8" />
					<circle cx="28" cy="-127" r="3" />
					<rect x="10" y="0" width="6" height="10" rx="1" opacity="0.4" />
					<rect x="19" y="0" width="6" height="10" rx="1" opacity="0.4" />
					<rect x="31" y="0" width="6" height="10" rx="1" opacity="0.4" />
					<rect x="40" y="0" width="6" height="10" rx="1" opacity="0.4" />
				</g>

				{/* Calculator — top left */}
				<g ref={setRef(1)} data-origin="translate(28,48)" transform="translate(28,48)" className="ab-calc">
					<rect x="0" y="0" width="72" height="100" rx="4" fill="currentColor" opacity="0.12" />
					<rect x="0" y="0" width="72" height="100" rx="4" fill="none" strokeWidth="1.2" />
					<rect x="6" y="6" width="60" height="18" rx="2" fill="currentColor" opacity="0.18" />
					<text x="58" y="18" textAnchor="end" fontFamily="monospace" fontSize="7" opacity="0.5">123456.00</text>
					<rect x="6" y="30" width="22" height="14" rx="2" fill="currentColor" opacity="0.08" />
					<rect x="32" y="30" width="22" height="14" rx="2" fill="currentColor" opacity="0.08" />
					<rect x="6" y="48" width="22" height="14" rx="2" fill="currentColor" opacity="0.08" />
					<rect x="32" y="48" width="22" height="14" rx="2" fill="currentColor" opacity="0.08" />
					<rect x="6" y="66" width="22" height="14" rx="2" fill="currentColor" opacity="0.08" />
					<rect x="32" y="66" width="22" height="14" rx="2" fill="currentColor" opacity="0.12" />
				</g>

				{/* Boudhanath stupa — right side */}
				<g ref={setRef(2)} data-origin="translate(260,280)" transform="translate(260,280)" className="ab-stupa">
					<rect x="0" y="0" width="70" height="10" rx="1" />
					<path d="M8,0 L8,-20 Q35,-30 62,-20 L62,0" fill="currentColor" opacity="0.12" stroke="none" />
					<path d="M8,0 L8,-20 Q35,-30 62,-20 L62,0" fill="none" strokeWidth="1" />
					<path d="M15,-20 L15,-36 Q35,-44 55,-36 L55,-20" opacity="0.7" />
					<path d="M22,-36 Q35,-50 48,-36" fill="none" strokeWidth="0.9" />
					<line x1="35" y1="-50" x2="35" y2="-68" strokeWidth="1.1" />
					<polygon points="28,-58 35,-68 42,-58" fill="currentColor" opacity="0.2" stroke="none" />
					<circle cx="28" cy="-42" r="2.5" fill="currentColor" opacity="0.4" stroke="none" />
					<circle cx="42" cy="-42" r="2.5" fill="currentColor" opacity="0.4" stroke="none" />
					<polyline points="35,-64 18,-70 8,-66" strokeWidth="0.8" opacity="0.5" strokeDasharray="2,2" />
					<polyline points="35,-60 52,-66 62,-62" strokeWidth="0.8" opacity="0.5" strokeDasharray="2,2" />
				</g>

				{/* Bar charts — bottom left */}
				<g ref={setRef(3)} data-origin="translate(28,160)" transform="translate(28,160)" className="ab-chart">
					<rect x="0" y="0" width="18" height="50" rx="1.5" fill="currentColor" opacity="0.25" />
					<rect x="24" y="-20" width="18" height="70" rx="1.5" fill="currentColor" opacity="0.35" />
					<rect x="48" y="10" width="18" height="40" rx="1.5" fill="currentColor" opacity="0.18" />
					<rect x="72" y="-30" width="18" height="80" rx="1.5" fill="currentColor" opacity="0.3" />
					<line x1="-4" y1="52" x2="96" y2="52" strokeWidth="0.8" opacity="0.3" />
				</g>

				{/* Stacked ledgers / documents — right top */}
				<g ref={setRef(4)} data-origin="translate(200,32)" transform="translate(200,32)" className="ab-ledger">
					<rect x="0" y="0" width="60" height="80" rx="2" />
					<line x1="8" y1="12" x2="50" y2="12" opacity="0.25" strokeWidth="0.7" />
					<line x1="8" y1="22" x2="46" y2="22" opacity="0.25" strokeWidth="0.7" />
					<line x1="8" y1="32" x2="48" y2="32" opacity="0.25" strokeWidth="0.7" />
					<line x1="8" y1="42" x2="42" y2="42" opacity="0.25" strokeWidth="0.7" />
					<line x1="8" y1="52" x2="45" y2="52" opacity="0.25" strokeWidth="0.7" />
					<rect x="4" y="4" width="60" height="80" rx="2" fill="currentColor" opacity="0.04" />
					<rect x="8" y="8" width="52" height="68" rx="1.5" fill="none" strokeWidth="0.8" opacity="0.5" />
					<rect x="12" y="12" width="48" height="60" rx="1" fill="none" strokeWidth="0.7" opacity="0.3" />
				</g>

				{/* Dharahara tower — top right */}
				<g ref={setRef(5)} data-origin="translate(296,150)" transform="translate(296,150)" className="ab-dharahara">
					<rect x="0" y="0" width="14" height="80" rx="2" fill="currentColor" opacity="0.12" />
					<rect x="0" y="0" width="14" height="80" rx="2" fill="none" strokeWidth="1" />
					<polygon points="3,0 7,-10 11,0" />
					<line x1="2" y1="12" x2="12" y2="12" opacity="0.4" strokeWidth="0.7" />
					<line x1="2" y1="24" x2="12" y2="24" opacity="0.4" strokeWidth="0.7" />
					<line x1="2" y1="36" x2="12" y2="36" opacity="0.4" strokeWidth="0.7" />
					<line x1="2" y1="48" x2="12" y2="48" opacity="0.4" strokeWidth="0.7" />
					<line x1="2" y1="60" x2="12" y2="60" opacity="0.4" strokeWidth="0.7" />
					<circle cx="7" cy="-13" r="2.5" fill="currentColor" opacity="0.3" stroke="none" />
					<rect x="-4" y="80" width="22" height="6" rx="1" />
				</g>

				{/* Lollipop chart above calculator */}
				<g ref={setRef(6)} data-origin="translate(50,36)" transform="translate(50,36)" opacity="0.8">
					<line x1="0" y1="12" x2="0" y2="24" strokeWidth="1.2" opacity="0.6" />
					<line x1="8" y1="8" x2="8" y2="24" strokeWidth="1" opacity="0.4" />
					<line x1="16" y1="4" x2="16" y2="24" strokeWidth="1" opacity="0.4" />
					<line x1="24" y1="10" x2="24" y2="24" strokeWidth="1" opacity="0.4" />
					<circle cx="0" cy="10" r="2.5" />
					<circle cx="8" cy="6" r="2" opacity="0.5" />
					<circle cx="16" cy="2" r="2.5" />
					<circle cx="24" cy="8" r="2" opacity="0.5" />
					<line x1="-8" y1="24" x2="32" y2="24" strokeWidth="0.8" opacity="0.3" />
				</g>

				{/* Pie chart — right middle */}
				<g ref={setRef(7)} data-origin="translate(270,140)" transform="translate(270,140)" opacity="0.8">
					<rect x="0" y="0" width="56" height="44" rx="3" />
					<circle cx="18" cy="18" r="12" fill="none" strokeWidth="1" opacity="0.5" />
					<line x1="18" y1="6" x2="18" y2="30" strokeWidth="0.6" opacity="0.3" />
					<line x1="6" y1="18" x2="30" y2="18" strokeWidth="0.6" opacity="0.3" />
					<rect x="34" y="8" width="12" height="6" rx="1" opacity="0.4" strokeWidth="0.7" />
					<rect x="34" y="18" width="12" height="6" rx="1" opacity="0.4" strokeWidth="0.7" />
					<rect x="34" y="28" width="12" height="6" rx="1" opacity="0.4" strokeWidth="0.7" />
				</g>

				{/* Line chart — bottom right */}
				<g ref={setRef(8)} data-origin="translate(200,310)" transform="translate(200,310)" opacity="0.8">
					<rect x="0" y="0" width="70" height="54" rx="3" />
					<polyline points="6,44 20,30 34,36 48,18 62,26 74,6" fill="none" strokeWidth="1.4" />
					<polygon points="74,6 68,14 66,2" fill="currentColor" opacity="0.3" stroke="none" />
					<line x1="6" y1="44" x2="74" y2="44" strokeWidth="0.7" opacity="0.3" />
					<line x1="6" y1="30" x2="74" y2="30" strokeWidth="0.4" strokeDasharray="3,3" opacity="0.2" />
					<line x1="6" y1="16" x2="74" y2="16" strokeWidth="0.4" strokeDasharray="3,3" opacity="0.2" />
				</g>

				{/* Scales of justice — top centre */}
				<g ref={setRef(9)} data-origin="translate(160,18)" transform="translate(160,18)" className="ab-scales">
					<line x1="0" y1="0" x2="0" y2="30" strokeWidth="1.3" />
					<line x1="-16" y1="8" x2="16" y2="8" strokeWidth="1.1" />
					<line x1="-16" y1="8" x2="-22" y2="22" opacity="0.6" strokeWidth="0.9" />
					<line x1="-16" y1="8" x2="-10" y2="22" opacity="0.6" strokeWidth="0.9" />
					<path d="M-26,22 Q-16,28 -6,22" fill="none" strokeWidth="0.9" opacity="0.5" />
					<line x1="16" y1="8" x2="10" y2="18" opacity="0.6" strokeWidth="0.9" />
					<line x1="16" y1="8" x2="22" y2="18" opacity="0.6" strokeWidth="0.9" />
					<path d="M6,18 Q16,24 26,18" fill="none" strokeWidth="0.9" opacity="0.5" />
					<polygon points="-5,30 0,30 5,30 2,36 -2,36" opacity="0.25" />
				</g>

				{/* Arrow connectors — scattered */}
				<g opacity="0.3">
					<path d="M136,58 L165,44" fill="none" strokeWidth="1.5" opacity="0.3" strokeDasharray="4,3" />
					<polygon points="165,44 158,48 160,40" fill="currentColor" opacity="0.2" stroke="none" />
					<path d="M190,360 L220,340" fill="none" strokeWidth="1.5" opacity="0.25" strokeDasharray="4,3" />
				</g>

				{/* IS/BS/LBS label chips */}
				<g opacity="0.8">
					<rect x="30" y="376" width="38" height="16" rx="2" />
					<text x="49" y="387" textAnchor="middle" fontFamily="monospace" fontSize="7" opacity="0.5">IS</text>
					<rect x="76" y="376" width="38" height="16" rx="2" />
					<text x="95" y="387" textAnchor="middle" fontFamily="monospace" fontSize="7" opacity="0.5">BS</text>
					<rect x="122" y="376" width="38" height="16" rx="2" />
					<text x="141" y="387" textAnchor="middle" fontFamily="monospace" fontSize="7" opacity="0.5">CF</text>
				</g>

				{/* Small isometric cube — decorative */}
				<g ref={setRef(10)} data-origin="translate(340,400)" transform="translate(340,400)" opacity="0.4">
					<polygon points="0,0 0,-14 14,-21 14,-7" />
					<polygon points="14,-21 28,-14 28,0 14,-7" />
					<polygon points="0,-14 14,-21 28,-14 14,-7" fill="currentColor" opacity="0.1" stroke="none" />
				</g>

				{/* Ground dashes */}
				<line x1="18" y1="430" x2="362" y2="430" strokeDasharray="3,7" opacity="0.12" />
				<line x1="18" y1="460" x2="362" y2="460" strokeDasharray="3,7" opacity="0.08" />

				{/* Scatter dots */}
				<g stroke="none" opacity="0.25">
					<circle cx="160" cy="130" r="2" />
					<circle cx="300" cy="240" r="2" />
					<circle cx="188" cy="420" r="1.5" />
					<circle cx="350" cy="180" r="1.5" />
					<line x1="160" y1="130" x2="200" y2="100" strokeWidth="0.7" opacity="0.3" strokeDasharray="3,4" />
					<line x1="300" y1="240" x2="270" y2="210" strokeWidth="0.7" opacity="0.3" strokeDasharray="3,4" />
				</g>

			</g>
		</svg>
	);
}
