"use client";

import { useRef, useEffect, useState } from "react";

const CYCLE = 4000;
const PA = 2000, PB = 3000;
const W = 48, H = 52, CX = W / 2;

const TIERS = [
	{ y: 43, w: 22, h: 6, roofW: 30, roofH: 5 },
	{ y: 34, w: 17, h: 6, roofW: 24, roofH: 4 },
	{ y: 25, w: 11, h: 7, roofW: 18, roofH: 4 },
	{ y: 17, w: 7, h: 6, roofW: 13, roofH: 3 },
];

const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
const easeOut = (t: number) => 1 - (1 - t) * (1 - t);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const norm = (v: number, a: number, b: number) => clamp((v - a) / (b - a), 0, 1);

function drawTier(ctx: CanvasRenderingContext2D, t: (typeof TIERS)[0], alpha: number, yo: number, crimson: string) {
	if (alpha <= 0) return;
	const { y, w, h, roofW, roofH } = t;
	const ay = y + yo;
	ctx.save();
	ctx.globalAlpha = alpha;
	ctx.fillStyle = crimson;
	ctx.fillRect(CX - w / 2, ay - h, w, h);
	ctx.beginPath();
	ctx.moveTo(CX - roofW / 2, ay - h - roofH);
	ctx.lineTo(CX + roofW / 2, ay - h - roofH);
	ctx.lineTo(CX + w / 2, ay - h);
	ctx.lineTo(CX - w / 2, ay - h);
	ctx.closePath();
	ctx.globalAlpha = alpha * 0.6;
	ctx.fill();
	ctx.restore();
}

function drawSpire(ctx: CanvasRenderingContext2D, alpha: number, yo: number, crimson: string) {
	if (alpha <= 0) return;
	ctx.save();
	ctx.globalAlpha = alpha;
	ctx.strokeStyle = crimson;
	ctx.lineWidth = 1.7;
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(CX, 12 + yo);
	ctx.lineTo(CX, 5 + yo);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(CX, 3.5 + yo, 2.6, 0, Math.PI * 2);
	ctx.fillStyle = crimson;
	ctx.fill();
	ctx.restore();
}

function drawBase(ctx: CanvasRenderingContext2D, alpha: number, crimson: string) {
	if (alpha <= 0) return;
	ctx.save();
	ctx.globalAlpha = alpha * 0.35;
	ctx.fillStyle = crimson;
	ctx.fillRect(CX - 18, 47, 36, 2);
	ctx.restore();
}

function drawPagoda(ctx: CanvasRenderingContext2D, progress: number, alpha: number, yo: number, crimson: string) {
	if (alpha <= 0) return;
	const n = TIERS.length;
	for (let i = 0; i < n; i++) {
		const tp = ease(norm(progress, i / (n + 1), (i + 1) / (n + 1)));
		if (tp > 0) drawTier(ctx, TIERS[i], alpha * tp, yo + lerp(13, 0, ease(tp)), crimson);
	}
	const sp = ease(norm(progress, n / (n + 1), 1));
	if (sp > 0) drawSpire(ctx, alpha * sp, yo + lerp(9, 0, sp), crimson);
	drawBase(ctx, alpha * ease(clamp(progress * 4, 0, 1)), crimson);
}

export function NavLogo() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isDark, setIsDark] = useState(false);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		const check = () => {
			setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
		};
		check();
		const observer = new MutationObserver(check);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const cv = canvasRef.current;
		if (!cv) return;
		const ctx = cv.getContext("2d")!;
		let startTs: number | null = null;
		let rafId: number;

		function frame(ts: number) {
			if (!startTs) startTs = ts;
			const t = (ts - startTs) % CYCLE;
			const dark = document.documentElement.getAttribute("data-theme") === "dark";
			const crimson = dark ? "#c06161" : "#8b1a1a";

			ctx.clearRect(0, 0, W, H);

			if (t < PA) {
				const pagP = easeOut(norm(t, 0, PA));
				drawPagoda(ctx, pagP, 1, 0, crimson);
			} else if (t < PB) {
				drawPagoda(ctx, 1, 1, 0, crimson);
			} else {
				const blend = norm(t, PB, CYCLE);
				const alpha = 1 - ease(blend);
				const yo = lerp(0, -8, ease(blend));
				drawPagoda(ctx, 1, alpha, yo, crimson);
			}

			rafId = requestAnimationFrame(frame);
		}

		rafId = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<div
			className="flex items-center"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<canvas
				ref={canvasRef}
				width={48}
				height={52}
				style={{ display: "block", flexShrink: 0 }}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					paddingLeft: 14,
					borderLeft: isDark
						? "0.5px solid rgba(192,97,97,0.22)"
						: "0.5px solid rgba(139,26,26,0.25)",
				}}
			>
				<span
					style={{
						fontFamily: "'Fraunces', Georgia, serif",
						fontSize: 18,
						fontWeight: 600,
						letterSpacing: hovered ? 1.5 : 0.3,
						lineHeight: 1,
						whiteSpace: "nowrap",
						color: hovered
							? (isDark ? "#e8a0a0" : "#8b1a1a")
							: (isDark ? "#ede8e3" : "#180808"),
						transition: "letter-spacing 0.35s ease, color 0.35s ease",
					}}
				>
					The NFRS Archive
				</span>
			</div>
		</div>
	);
}
