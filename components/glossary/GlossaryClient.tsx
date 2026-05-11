"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { glossaryEntries, generalGlossaryEntries, tagLabels, tagColors, type TagType } from "@/data/glossary";

const allEntries = [...glossaryEntries, ...generalGlossaryEntries];

type FilterType = "all" | TagType;

const FILTER_CHIPS: { value: FilterType; label: string }[] = [
	{ value: "all", label: "All" },
	{ value: "general", label: "General" },
	{ value: "nepal-specific", label: "Nepal-Specific" },
	{ value: "exam-trap", label: "Exam Trap" },
	{ value: "regulatory", label: "Regulatory" },
	{ value: "standard-reference", label: "Standard Reference" },
];

const ALL_LETTERS = Array.from(
	new Set(allEntries.map((e) => e.term[0].toUpperCase()))
).sort();

export function GlossaryClient() {
	const [query, setQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState<FilterType>("all");

	const filtered = useMemo(() => {
		let entries = allEntries;

		if (activeFilter !== "all") {
			entries = entries.filter((e) => e.tags.includes(activeFilter as TagType));
		}

		if (query.trim()) {
			const q = query.toLowerCase();
			entries = entries.filter(
				(e) =>
					e.term.toLowerCase().includes(q) ||
					e.definition.toLowerCase().includes(q) ||
					e.nepalContext.toLowerCase().includes(q)
			);
		}

		return entries;
	}, [query, activeFilter]);

	const grouped = useMemo(() => {
		const groups: Record<string, typeof filtered> = {};
		for (const entry of filtered) {
			const letter = entry.term[0].toUpperCase();
			if (!groups[letter]) groups[letter] = [];
			groups[letter].push(entry);
		}
		return groups;
	}, [filtered]);

	const letters = Object.keys(grouped).sort();

	const scrollToLetter = useCallback((letter: string) => {
		const el = document.getElementById(`letter-${letter}`);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	return (
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pb-16">
			{/* Search + filters */}
			<div className="sticky top-16 z-30 py-4 -mx-5 px-5 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 max-md:overflow-hidden" style={{ background: "var(--glass-bg)" }}>
				<div className="max-w-[720px]">
					<div className="relative mb-3">
						<svg
							className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle"
							width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
						>
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
						<input
							type="search"
							placeholder="Search terms, definitions, or context…"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="w-full font-sans text-sm text-text placeholder:text-text-subtle bg-bg-elevated border border-border rounded-lg pl-11 pr-4 py-2.5 outline-none focus:border-accent transition-colors"
						/>
					</div>
					<div className="flex flex-wrap gap-2">
						{FILTER_CHIPS.map((chip) => (
							<button
								key={chip.value}
								type="button"
								onClick={() => setActiveFilter(chip.value)}
								className={`font-sans text-xs px-3 py-1 rounded-full border transition-colors ${
									activeFilter === chip.value
										? "bg-accent text-accent-fg border-accent"
										: "bg-bg-elevated text-text-muted border-border hover:border-accent/40 hover:text-text"
								}`}
							>
								{chip.label}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Letter index (desktop sidebar) */}
			<div className="hidden lg:flex items-start gap-8 mt-8">
				<aside className="sticky top-24 flex-shrink-0 w-10">
					<div className="flex flex-col gap-0.5">
						{ALL_LETTERS.map((letter) => (
							<button
								key={letter}
								type="button"
								onClick={() => scrollToLetter(letter)}
								className="font-sans text-xs text-text-subtle hover:text-accent transition-colors text-center py-0.5"
							>
								{letter}
							</button>
						))}
					</div>
				</aside>

				{/* Main content */}
				<div className="flex-1 min-w-0">
					<p className="font-sans text-sm text-text-muted mb-6">
						Showing <span className="font-medium text-text">{filtered.length}</span> of{" "}
						{glossaryEntries.length + generalGlossaryEntries.length} terms
					</p>

					{filtered.length === 0 && (
						<div className="text-center py-16">
							<p className="font-serif text-lg text-text-muted">
								No terms found for &ldquo;{query}&rdquo;
							</p>
							<button
								type="button"
								onClick={() => { setQuery(""); setActiveFilter("all"); }}
								className="mt-3 font-sans text-sm text-accent hover:underline"
							>
								Clear search
							</button>
						</div>
					)}

					{letters.map((letter) => (
						<div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-24">
							<div className="flex items-center gap-4 mb-4">
								<span className="font-display text-4xl text-accent/20 font-light">
									{letter}
								</span>
								<div className="flex-1 h-px bg-border" />
							</div>
							<div className="space-y-4">
								{grouped[letter].map((entry) => (
									<div
										key={entry.id}
										id={entry.id}
										className="rounded-lg border border-border p-5 shadow-clay-sm scroll-mt-24"
										style={{ background: "var(--site-bg-elevated)" }}
									>
										<div className="flex flex-wrap items-start justify-between gap-3 mb-3">
											<h2 className="font-display text-xl font-normal text-text">
												{entry.term}
											</h2>
											{entry.standardSlug && (
												<Link
													href={`/standards/${entry.standardSlug}`}
													className="font-sans text-xs text-accent hover:underline shrink-0"
												>
													See standard page →
												</Link>
											)}
										</div>

										<div className="flex flex-wrap gap-1.5 mb-3">
											{entry.tags.map((tag) => (
												<span
													key={tag}
													className={`inline-block font-sans text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border ${tagColors[tag]}`}
												>
													{tagLabels[tag]}
												</span>
											))}
										</div>

										<p className="font-serif text-sm text-text leading-relaxed mb-3">
											{entry.definition}
										</p>

										<div className="rounded-md border border-accent/15 bg-accent/5 px-4 py-3 mb-3">
											<p className="font-sans text-[10px] uppercase tracking-wider text-accent font-medium mb-1.5">
												Nepal Context
											</p>
											<p className="font-serif text-sm text-text leading-relaxed">
												{entry.nepalContext}
											</p>
										</div>

										{entry.standardRef && (
											<p className="font-mono text-xs text-text-muted mb-2">
												Ref: {entry.standardRef}
											</p>
										)}

										{entry.commonMistake && (
											<div className="rounded-md border border-deferred/20 bg-deferred/5 px-4 py-3">
												<p className="font-sans text-[10px] uppercase tracking-wider text-deferred font-medium mb-1">
													Common Mistake
												</p>
												<p className="font-serif text-sm text-text leading-relaxed">
													{entry.commonMistake}
												</p>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile layout */}
			<div className="lg:hidden mt-6">
				<p className="font-sans text-sm text-text-muted mb-6">
					Showing <span className="font-medium text-text">{filtered.length}</span> of{" "}
					{glossaryEntries.length + generalGlossaryEntries.length} terms
				</p>

				{filtered.length === 0 && (
					<div className="text-center py-16">
						<p className="font-serif text-lg text-text-muted">
							No terms found for &ldquo;{query}&rdquo;
						</p>
						<button
							type="button"
							onClick={() => { setQuery(""); setActiveFilter("all"); }}
							className="mt-3 font-sans text-sm text-accent hover:underline"
						>
							Clear search
						</button>
					</div>
				)}

				{letters.map((letter) => (
					<div key={letter} id={`letter-${letter}`} className="mb-8">
						<div className="flex items-center gap-3 mb-3">
							<span className="font-display text-3xl text-accent/20 font-light">
								{letter}
							</span>
							<div className="flex-1 h-px bg-border" />
						</div>
						<div className="space-y-3">
							{grouped[letter].map((entry) => (
								<details
									key={entry.id}
									id={entry.id}
									className="rounded-lg border border-border shadow-clay-sm bg-bg-elevated group"
								>
									<summary className="px-4 py-3.5 cursor-pointer list-none flex items-start justify-between gap-3">
										<div className="flex-1 min-w-0">
											<div className="flex flex-wrap items-center gap-1.5 mb-1.5">
												{entry.tags.map((tag) => (
													<span
														key={tag}
														className={`inline-block font-sans text-[9px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${tagColors[tag]}`}
													>
														{tagLabels[tag]}
													</span>
												))}
											</div>
											<h2 className="font-display text-base font-normal text-text">
												{entry.term}
											</h2>
										</div>
										<svg
											className="flex-shrink-0 mt-1 text-text-subtle transition-transform group-open:rotate-180"
											width="14" height="14" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round"
											aria-hidden="true"
										>
											<polyline points="6 9 12 15 18 9" />
										</svg>
									</summary>
									<div className="px-4 pb-4 border-t border-border/50 pt-3">
										<p className="font-serif text-sm text-text leading-relaxed mb-3">
											{entry.definition}
										</p>
										<div className="rounded-md border border-accent/15 bg-accent/5 px-3 py-2.5 mb-3">
											<p className="font-sans text-[10px] uppercase tracking-wider text-accent font-medium mb-1">
												Nepal Context
											</p>
											<p className="font-serif text-sm text-text leading-relaxed">
												{entry.nepalContext}
											</p>
										</div>
										{entry.standardRef && (
											<p className="font-mono text-xs text-text-muted mb-2">
												Ref: {entry.standardRef}
											</p>
										)}
										{entry.standardSlug && (
											<Link
												href={`/standards/${entry.standardSlug}`}
												className="inline-block font-sans text-xs text-accent hover:underline mb-2"
											>
												See standard page →
											</Link>
										)}
										{entry.commonMistake && (
											<div className="rounded-md border border-deferred/20 bg-deferred/5 px-3 py-2.5">
												<p className="font-sans text-[10px] uppercase tracking-wider text-deferred font-medium mb-1">
													Common Mistake
												</p>
												<p className="font-serif text-sm text-text leading-relaxed">
													{entry.commonMistake}
												</p>
											</div>
										)}
									</div>
								</details>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
