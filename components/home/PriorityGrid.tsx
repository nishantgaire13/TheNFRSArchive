"use client";

import { type ReactNode } from "react";

export function PriorityGrid({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return <div className={className}>{children}</div>;
}

export function PriorityGridItem({
	children,
	index,
}: {
	children: ReactNode;
	index: number;
}) {
	return (
		<div
			className="entrance-card"
			data-entrance="card"
			data-stagger={String(index * 80)}
		>
			{children}
		</div>
	);
}