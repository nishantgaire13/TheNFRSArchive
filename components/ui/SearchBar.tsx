"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { search, preloadSearchIndex, type SearchEntry } from "@/lib/search";

export interface SearchBarProps {
	placeholder?: string;
	className?: string;
}

const statusLabels: Record<string, string> = {
	aligned: "Aligned",
	"carve-out": "Carve-out",
	deferred: "Deferred",
	"not-adopted": "Not adopted",
};

const statusColors: Record<string, string> = {
	aligned: "bg-aligned/15 text-aligned",
	"carve-out": "bg-carveout/15 text-carveout",
	deferred: "bg-deferred/15 text-deferred",
	"not-adopted": "bg-not-adopted/15 text-not-adopted",
};

const suggestions = ["revenue", "leases", "carve-outs", "NAS 16", "NFRS 9", "impairment"];

export function SearchBar({
	placeholder = "Search standards…",
	className = "",
}: SearchBarProps) {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<SearchEntry[]>([]);
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [focused, setFocused] = useState(false);
	const [typedPlaceholder, setTypedPlaceholder] = useState("");
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (focused || query.length > 0) return;
		let idx = 0;
		let charIdx = 0;
		let deleting = false;
		let timer: ReturnType<typeof setTimeout>;

		function tick() {
			const word = suggestions[idx];
			if (!deleting) {
				charIdx++;
				setTypedPlaceholder(`Try: ${word.slice(0, charIdx)}`);
				if (charIdx >= word.length) {
					timer = setTimeout(() => { deleting = true; tick(); }, 1800);
					return;
				}
				timer = setTimeout(tick, 80);
			} else {
				charIdx--;
				setTypedPlaceholder(charIdx > 0 ? `Try: ${word.slice(0, charIdx)}` : "");
				if (charIdx <= 0) {
					deleting = false;
					idx = (idx + 1) % suggestions.length;
					timer = setTimeout(tick, 300);
					return;
				}
				timer = setTimeout(tick, 40);
			}
		}
		timer = setTimeout(tick, 1000);
		return () => clearTimeout(timer);
	}, [focused, query]);

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (
				e.key === "/" &&
				!["INPUT", "TEXTAREA", "SELECT"].includes(
					(e.target as HTMLElement).tagName,
				)
			) {
				e.preventDefault();
				inputRef.current?.focus();
			}
		}
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const doSearch = useCallback(async (q: string) => {
		if (q.length < 1) {
			setResults([]);
			setOpen(false);
			return;
		}
		const hits = await search(q, 8);
		setResults(hits);
		setOpen(hits.length > 0);
		setActiveIndex(-1);
	}, []);

	function handleChange(value: string) {
		setQuery(value);
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => doSearch(value), 60);
	}

	function navigate(slug: string) {
		setOpen(false);
		setQuery("");
		setResults([]);
		router.push(`/standards/${slug}`);
	}

	function handleKeyDown(e: React.KeyboardEvent) {
		if (!open || results.length === 0) {
			if (e.key === "Escape") {
				inputRef.current?.blur();
			}
			return;
		}

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setActiveIndex((i) => (i < results.length - 1 ? i + 1 : 0));
				break;
			case "ArrowUp":
				e.preventDefault();
				setActiveIndex((i) => (i > 0 ? i - 1 : results.length - 1));
				break;
			case "Enter":
				e.preventDefault();
				if (activeIndex >= 0 && results[activeIndex]) {
					navigate(results[activeIndex].slug);
				}
				break;
			case "Escape":
				e.preventDefault();
				setOpen(false);
				inputRef.current?.blur();
				break;
		}
	}

	return (
		<div ref={containerRef} className={`relative ${className}`}>
			<form
				role="search"
				className={`flex items-center rounded-pill bg-bg-elevated shadow-clay-md border overflow-hidden transition-all duration-200 ${
					focused ? "border-accent shadow-clay-lg scale-[1.02]" : "border-transparent"
				}`}
				onSubmit={(e) => {
					e.preventDefault();
					if (activeIndex >= 0 && results[activeIndex]) {
						navigate(results[activeIndex].slug);
					} else if (results.length > 0) {
						navigate(results[0].slug);
					}
				}}
			>
				<label htmlFor="search-input" className="sr-only">
					Search standards
				</label>
				<input
					ref={inputRef}
					id="search-input"
					type="search"
					autoComplete="off"
					placeholder={typedPlaceholder || placeholder}
					value={query}
					onChange={(e) => handleChange(e.target.value)}
					onFocus={() => {
						setFocused(true);
						preloadSearchIndex();
						if (results.length > 0) setOpen(true);
					}}
					onBlur={() => setFocused(false)}
					onKeyDown={handleKeyDown}
					aria-expanded={open}
					aria-controls="search-results"
					aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
					className="flex-1 bg-transparent font-sans text-base text-text placeholder:text-text-subtle px-5 py-3 outline-none min-w-0"
				/>
				<kbd className="hidden sm:inline-flex items-center font-mono text-xs text-text-subtle border border-border rounded-sm px-1.5 py-0.5 mr-2">
					/
				</kbd>
				<button
					type="submit"
					className="bg-accent text-accent-fg font-sans text-sm font-medium px-5 py-3 hover:bg-accent-hover transition-colors min-h-[44px]"
					aria-label="Search"
				>
					Search
				</button>
			</form>

			{open && results.length > 0 && (
				<ul
					id="search-results"
					role="listbox"
					className="absolute z-50 left-0 right-0 mt-2 rounded-lg bg-bg-elevated shadow-clay-lg border border-border overflow-hidden animate-[fadeIn_200ms_ease-out]"
				>
					{results.map((entry, i) => (
						<li
							key={entry.slug}
							id={`search-result-${i}`}
							role="option"
							aria-selected={i === activeIndex}
							className={`px-4 py-3 cursor-pointer transition-colors border-b border-hairline/50 last:border-0 ${
								i === activeIndex
									? "bg-bg-subtle"
									: "hover:bg-bg-subtle/50"
							}`}
							onMouseEnter={() => setActiveIndex(i)}
							onMouseDown={(e) => {
								e.preventDefault();
								navigate(entry.slug);
							}}
						>
							<div className="flex items-center gap-2 mb-0.5">
								<span
									className={`inline-block rounded-pill px-1.5 py-0.5 text-[10px] font-sans font-medium uppercase tracking-wider ${statusColors[entry.status] ?? "bg-bg-subtle text-text-muted"}`}
								>
									{statusLabels[entry.status] ?? entry.status}
								</span>
								<span className="font-sans text-sm font-medium text-text">
									{entry.nfrsNumber} — {entry.title}
								</span>
							</div>
							<p className="font-serif text-xs text-text-muted leading-snug truncate">
								{entry.summary}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
