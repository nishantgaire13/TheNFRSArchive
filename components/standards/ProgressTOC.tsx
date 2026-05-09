"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface TOCItem {
	id: string;
	label: string;
}

interface ProgressTOCProps {
	items: TOCItem[];
	storageKey: string;
}

export function ProgressTOC({ items, storageKey }: ProgressTOCProps) {
	const [activeId, setActiveId] = useState<string>("");
	const [understood, setUnderstood] = useState<Record<string, boolean>>({});
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		try {
			const stored = localStorage.getItem(`toc-progress-${storageKey}`);
			if (stored) setUnderstood(JSON.parse(stored));
		} catch {}
	}, [storageKey]);

	const toggleUnderstood = useCallback(
		(id: string) => {
			setUnderstood((prev) => {
				const next = { ...prev, [id]: !prev[id] };
				try {
					localStorage.setItem(`toc-progress-${storageKey}`, JSON.stringify(next));
				} catch {}
				return next;
			});
		},
		[storageKey],
	);

	useEffect(() => {
		observerRef.current?.disconnect();

		const headings = items
			.map((item) => document.getElementById(item.id))
			.filter(Boolean) as HTMLElement[];

		if (headings.length === 0) return;

		observerRef.current = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((e) => e.isIntersecting);
				if (visible.length > 0) {
					const sorted = visible.sort(
						(a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
					);
					setActiveId(sorted[0].target.id);
				}
			},
			{ rootMargin: "-80px 0px -60% 0px", threshold: 0 },
		);

		headings.forEach((h) => observerRef.current!.observe(h));
		return () => observerRef.current?.disconnect();
	}, [items]);

	const understoodCount = items.filter((item) => understood[item.id]).length;
	const progress = items.length > 0 ? (understoodCount / items.length) * 100 : 0;

	return (
		<div>
			<p className="font-sans text-[10px] uppercase tracking-[0.1em] text-text-subtle mb-3">
				On this page
			</p>

			{/* Progress bar */}
			<div className="mb-3">
				<div className="flex items-center justify-between mb-1">
					<span className="font-sans text-[10px] text-text-subtle">Progress</span>
					<span className="font-mono text-[10px] text-text-subtle">
						{understoodCount}/{items.length}
					</span>
				</div>
				<div className="h-1 bg-border rounded-full overflow-hidden">
					<div
						className="h-full bg-accent rounded-full transition-all duration-300"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			{/* TOC items */}
			<nav>
				<ul className="space-y-0.5">
					{items.map((item) => (
						<li key={item.id} className="flex items-center gap-1.5">
							<button
								type="button"
								onClick={() => toggleUnderstood(item.id)}
								className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
									understood[item.id]
										? "bg-accent border-accent"
										: "border-border-strong hover:border-accent/50"
								}`}
								aria-label={`Mark ${item.label} as ${understood[item.id] ? "not understood" : "understood"}`}
							>
								{understood[item.id] && (
									<svg className="w-2.5 h-2.5 text-accent-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								)}
							</button>
							<a
								href={`#${item.id}`}
								onClick={(e) => {
									e.preventDefault();
									document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
								}}
								className={`relative font-sans text-xs py-1 pl-2 transition-colors truncate ${
									activeId === item.id
										? "text-accent font-medium"
										: "text-text-muted hover:text-text"
								}`}
							>
								{activeId === item.id && (
									<motion.div
										layoutId="toc-active-indicator"
										className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent rounded-full"
										transition={{ type: "spring", stiffness: 400, damping: 30 }}
									/>
								)}
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
