"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	LabelList,
	type BarProps,
} from "recharts";
import type { Props as LabelProps } from "recharts/types/component/Label";
import { ClayCard } from "@/components/ui/ClayCard";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface ClayBarDatum {
	name: string;
	value: number;
	highlight?: boolean;
}

export interface ClayBarChartProps {
	data: ClayBarDatum[];
	title: string;
	subtitle?: string;
	peakLabel?: string;
	gridlines?: boolean;
	className?: string;
	height?: number;
	srDescription?: string;
}

function PillBar(props: Record<string, unknown>) {
	const { x, y, width, height: h, highlight } = props as {
		x: number;
		y: number;
		width: number;
		height: number;
		highlight: boolean;
	};
	if (!h || h <= 0) return null;

	const rx = Math.min(width / 2, 9999);
	const showBottomRound = width > 20;
	const gradientId = highlight ? "bar-fill-peak" : "bar-fill-default";

	return (
		<g>
			{/* Drop shadow at base */}
			<rect
				x={x}
				y={y + 2}
				width={width}
				height={h}
				rx={showBottomRound ? rx : 0}
				ry={showBottomRound ? rx : 0}
				fill="rgba(90,60,30,0.06)"
				style={{
					clipPath: showBottomRound
						? undefined
						: `inset(0 0 0 0 round ${rx}px ${rx}px 0 0)`,
				}}
			/>
			{/* Main bar */}
			<rect
				x={x}
				y={y}
				width={width}
				height={h}
				rx={showBottomRound ? rx : 0}
				ry={showBottomRound ? rx : 0}
				fill={`url(#${gradientId})`}
				style={{
					clipPath: showBottomRound
						? undefined
						: `inset(0 0 0 0 round ${rx}px ${rx}px 0 0)`,
				}}
			/>
			{/* Inner highlight — thin bright line at top */}
			<rect
				x={x + 2}
				y={y + 1}
				width={width - 4}
				height={1}
				rx={rx}
				fill="rgba(255,255,255,0.5)"
			/>
		</g>
	);
}

function PeakLabelRenderer(props: Record<string, unknown>) {
	const { x, y, width, value, highlight, peakLabel } = props as {
		x: number;
		y: number;
		width: number;
		value: number;
		highlight: boolean;
		peakLabel: string;
	};
	if (!highlight || !peakLabel) return null;

	const cx = x + width / 2;
	const label = peakLabel.replace("{value}", String(value));
	const labelWidth = label.length * 6.5 + 16;

	return (
		<g>
			<rect
				x={cx - labelWidth / 2}
				y={y - 26}
				width={labelWidth}
				height={20}
				rx={10}
				fill="var(--site-accent)"
			/>
			<text
				x={cx}
				y={y - 13}
				textAnchor="middle"
				fill="var(--site-accent-fg)"
				fontSize={10}
				fontFamily="Inter, system-ui, sans-serif"
				fontWeight={600}
				letterSpacing="0.05em"
			>
				{label}
			</text>
		</g>
	);
}

export function ClayBarChart({
	data,
	title,
	subtitle,
	peakLabel = "PEAK {value}",
	gridlines = false,
	className = "",
	height = 280,
	srDescription,
}: ClayBarChartProps) {
	return (
		<ClayCard className={className} padding="lg">
			<div className="mb-4">
				{subtitle && <Eyebrow className="text-xs mb-1">{subtitle}</Eyebrow>}
				<h3 className="font-display text-xl font-light text-text">{title}</h3>
			</div>
			{srDescription && <p className="sr-only">{srDescription}</p>}
			<div role="img" aria-label={srDescription ?? title} tabIndex={0}>
				<ResponsiveContainer width="100%" height={height}>
					<BarChart
						data={data}
						margin={{ top: 32, right: 8, bottom: 4, left: -16 }}
						barCategoryGap="20%"
					>
						<defs>
							<linearGradient id="bar-fill-default" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="var(--site-accent-soft)" stopOpacity={0.55} />
								<stop offset="100%" stopColor="var(--site-accent-soft)" stopOpacity={0.35} />
							</linearGradient>
							<linearGradient id="bar-fill-peak" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="var(--site-accent-soft)" stopOpacity={0.9} />
								<stop offset="100%" stopColor="var(--site-accent)" stopOpacity={1} />
							</linearGradient>
						</defs>
						{gridlines && (
							<CartesianGrid
								strokeDasharray="2 4"
								stroke="var(--site-hairline)"
								vertical={false}
							/>
						)}
						<XAxis
							dataKey="name"
							axisLine={false}
							tickLine={false}
							tick={{
								fontSize: 11,
								fontFamily: "Inter, system-ui, sans-serif",
								fill: "var(--site-text-subtle)",
								fontWeight: 500,
							}}
							dy={4}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{
								fontSize: 10,
								fontFamily: "Inter, system-ui, sans-serif",
								fill: "var(--site-text-subtle)",
							}}
							width={40}
						/>
						<Bar
							dataKey="value"
							shape={((props: BarProps) => {
								const p = props as BarProps & { highlight?: boolean };
								return <PillBar {...(p as Record<string, unknown>)} highlight={!!p.highlight} />;
							}) as BarProps["shape"]}
							isAnimationActive={false}
						>
							{data.map((entry) => (
								<Cell key={entry.name} />
							))}
							<LabelList
								content={((props: LabelProps) => {
									const p = props as LabelProps & { index: number };
									const entry = data[p.index];
									return (
										<PeakLabelRenderer
											{...(p as unknown as Record<string, unknown>)}
											highlight={!!entry?.highlight}
											peakLabel={peakLabel}
										/>
									);
								}) as LabelProps["content"]}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</ClayCard>
	);
}
