"use client";

import { type ReactNode, useRef } from "react";
import { useEntranceAnimation } from "./useEntranceAnimation";

export function PriorityGrid({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	useEntranceAnimation(ref, 0.1);

	return (
		<div
			ref={ref}
			className={className}
			data-entrance="container"
		>
			{children}
		</div>
	);
}

export function PriorityGridItem({
	children,
	index,
}: {
	children: ReactNode;
	index: number;
}) {
	const delay = 80 * index;
	return (
		<div
			className="entrance-card"
			data-entrance="card"
			style={
				{
					"--anim-card-stagger": `${delay}ms`,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	);
}