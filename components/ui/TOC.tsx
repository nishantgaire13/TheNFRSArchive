"use client";

import { useEffect, useState } from "react";

export interface TOCItem {
	id: string;
	label: string;
}

export interface TOCProps {
	items: TOCItem[];
	className?: string;
}

export function TOC({ items, className = "" }: TOCProps) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{ rootMargin: "-80px 0px -60% 0px", threshold: 0 },
		);

		for (const item of items) {
			const el = document.getElementById(item.id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, [items]);

	if (items.length === 0) return null;

	return (
		<nav aria-label="Table of contents" className={`font-sans text-sm ${className}`}>
			<p className="text-xs uppercase tracking-[0.08em] text-text-subtle font-medium mb-3">
				On this page
			</p>
			<ul className="space-y-0.5">
				{items.map((item) => (
					<li key={item.id}>
						<a
							href={`#${item.id}`}
							className={`block py-1 pl-3 border-l-2 transition-colors ${
								activeId === item.id
									? "border-accent text-accent font-medium"
									: "border-transparent text-text-muted hover:text-text hover:border-border-strong"
							}`}
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
