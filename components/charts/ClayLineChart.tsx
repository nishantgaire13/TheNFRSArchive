"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Dot,
} from "recharts";
import { ClayCard } from "@/components/ui/ClayCard";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface ClayLineDatum {
	name: string;
	value: number;
	label?: string;
}

export interface ClayLineChartProps {
	data: ClayLineDatum[];
	title: string;
	subtitle?: string;
	gridlines?: boolean;
	className?: string;
	height?: number;
	srDescription?: string;
}

function LabeledDot(
	props: Record<string, unknown> & { payload?: ClayLineDatum },
) {
	const { cx, cy, payload } = props as {
		cx: number;
		cy: number;
		payload?: ClayLineDatum;
	};
	if (!payload?.label) {
		return <Dot cx={cx} cy={cy} r={0} fill="none" />;
	}

	const labelWidth = payload.label.length * 6 + 14;

	return (
		<g>
			{/* Dot */}
			<circle
				cx={cx}
				cy={cy}
				r={3.5}
				fill="var(--site-accent)"
				stroke="var(--site-bg-elevated)"
				strokeWidth={2}
			/>
			{/* Leader line */}
			<line
				x1={cx}
				y1={cy - 6}
				x2={cx}
				y2={cy - 18}
				stroke="var(--site-accent)"
				strokeWidth={0.75}
				strokeDasharray="1 2"
			/>
			{/* Label chip */}
			<rect
				x={cx - labelWidth / 2}
				y={cy - 34}
				width={labelWidth}
				height={16}
				rx={8}
				fill="var(--site-bg-elevated)"
				stroke="var(--site-border)"
				strokeWidth={0.75}
			/>
			<text
				x={cx}
				y={cy - 23}
				textAnchor="middle"
				fontSize={9}
				fontFamily="Inter, system-ui, sans-serif"
				fontWeight={600}
				letterSpacing="0.06em"
				fill="var(--site-accent)"
			>
				{payload.label}
			</text>
		</g>
	);
}

export function ClayLineChart({
	data,
	title,
	subtitle,
	gridlines = false,
	className = "",
	height = 280,
	srDescription,
}: ClayLineChartProps) {
	return (
		<ClayCard className={className} padding="lg">
			<div className="mb-4">
				{subtitle && <Eyebrow className="text-xs mb-1">{subtitle}</Eyebrow>}
				<h3 className="font-display text-xl font-light text-text">{title}</h3>
			</div>
			{srDescription && <p className="sr-only">{srDescription}</p>}
			<div role="img" aria-label={srDescription ?? title} tabIndex={0}>
				<ResponsiveContainer width="100%" height={height}>
					<LineChart
						data={data}
						margin={{ top: 40, right: 24, bottom: 4, left: -16 }}
					>
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
						<Line
							type="monotone"
							dataKey="value"
							stroke="var(--site-accent)"
							strokeWidth={1.75}
							strokeLinecap="round"
							dot={(props: Record<string, unknown>) => (
								<LabeledDot
									key={`dot-${(props as { index: number }).index}`}
									{...props}
								/>
							)}
							activeDot={false}
							isAnimationActive={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</ClayCard>
	);
}
