"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NavLogo } from "@/components/NavLogo";
import { search, preloadSearchIndex, type SearchEntry } from "@/lib/search";

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

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/standards", label: "Standards" },
	{ href: "/carve-outs", label: "Carve-outs" },
	{ href: "/about", label: "About" },
];

export function Header() {
	const router = useRouter();
	const pathname = usePathname();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<SearchEntry[]>([]);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [scrolled, setScrolled] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 60);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// "/" keyboard shortcut to open search
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (
				e.key === "/" &&
				!["INPUT", "TEXTAREA", "SELECT"].includes(
					(e.target as HTMLElement).tagName,
				)
			) {
				e.preventDefault();
				setSearchOpen(true);
			}
			if (e.key === "Escape") {
				setSearchOpen(false);
				setQuery("");
				setResults([]);
			}
		}
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Focus input when search opens
	useEffect(() => {
		if (searchOpen) {
			preloadSearchIndex();
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [searchOpen]);

	// Click outside to close
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setSearchOpen(false);
				setQuery("");
				setResults([]);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const doSearch = useCallback(async (q: string) => {
		if (q.length < 1) {
			setResults([]);
			return;
		}
		const hits = await search(q, 6);
		setResults(hits);
		setActiveIndex(-1);
	}, []);

	function handleChange(value: string) {
		setQuery(value);
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => doSearch(value), 60);
	}

	function navigate(slug: string) {
		setSearchOpen(false);
		setQuery("");
		setResults([]);
		router.push(`/standards/${slug}`);
	}

	function handleKeyDown(e: React.KeyboardEvent) {
		if (results.length === 0) {
			if (e.key === "Escape") {
				setSearchOpen(false);
				setQuery("");
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
				} else if (results.length > 0) {
					navigate(results[0].slug);
				}
				break;
			case "Escape":
				e.preventDefault();
				setSearchOpen(false);
				setQuery("");
				setResults([]);
				break;
		}
	}

	function isActive(href: string) {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	}

	return (
		<header
			className={`sticky top-0 z-40 transition-all duration-300 ${
				scrolled
					? "border-b border-border/50 shadow-sm"
					: "border-b border-transparent"
			}`}
			style={{
				background: scrolled ? "var(--header-scrolled-bg)" : "var(--glass-bg)",
				backdropFilter: scrolled ? "blur(10px)" : "var(--glass-backdrop)",
				WebkitBackdropFilter: scrolled ? "blur(10px)" : "var(--glass-backdrop)",
			}}
		>
			<style>{`
			@keyframes searchGlow {
				position: absolute;
				inset: 0;
				pointer-events: none;
				overflow: hidden;
				border-radius: inherit;
			}
			.nav-shimmer-track::after {
				content: "";
				position: absolute;
				top: -50%;
				left: -80%;
				width: 40%;
				height: 200%;
				background: linear-gradient(
					90deg,
					transparent 0%,
					rgba(255, 255, 255, 0.08) 40%,
					rgba(255, 255, 255, 0.15) 50%,
					rgba(255, 255, 255, 0.08) 60%,
					transparent 100%
				);
				transform: skewX(-20deg);
				animation: navShimmer 4s ease-in-out infinite;
			}
			[data-theme="dark"] .nav-shimmer-track::after {
				background: linear-gradient(
					90deg,
					transparent 0%,
					rgba(255, 255, 255, 0.04) 40%,
					rgba(255, 255, 255, 0.08) 50%,
					rgba(255, 255, 255, 0.04) 60%,
					transparent 100%
				);
			}
			@media (min-width: 769px) {
				@keyframes navLightSweep {
					0%   { left: -35%; top: -200%; }
					5%   { left: -35%; top: -200%; }
					25%  { left: 115%; top: 200%; }
					26%  { left: -35%; top: -200%; }
					100% { left: -35%; top: -200%; }
				}
				.nav-shimmer-track::before {
					content: "";
					position: absolute;
					inset: 0;
					overflow: hidden;
					border-radius: inherit;
					pointer-events: none;
					z-index: 1;
				}
				.nav-shimmer-track::before {
					width: 35%;
					height: 400%;
					background: linear-gradient(
						105deg,
						transparent 0%,
						rgba(255, 255, 255, 0.0) 35%,
						rgba(255, 255, 255, 0.11) 48%,
						rgba(255, 255, 255, 0.0) 61%,
						transparent 100%
					);
					animation: navLightSweep 12s ease-in-out infinite;
				}
				[data-theme="dark"] .nav-shimmer-track::before {
					background: linear-gradient(
						105deg,
						transparent 0%,
						rgba(255, 255, 255, 0.0) 35%,
						rgba(255, 255, 255, 0.08) 48%,
						rgba(255, 255, 255, 0.0) 61%,
						transparent 100%
					);
				}
			}
			@keyframes searchGlow {
				0% { --glow-angle: 0deg; }
				100% { --glow-angle: 360deg; }
			}
			@media (min-width: 769px) {
				.search-glow-wrap {
					position: relative;
					border-radius: 9999px;
					padding: 2px;
					background: transparent;
					transition: padding 0.2s ease;
				}
				.search-glow-wrap::before {
					content: "";
					position: absolute;
					inset: 0;
					border-radius: inherit;
					background: conic-gradient(
						from var(--glow-angle, 0deg),
						transparent 0%,
						rgba(139, 26, 26, 0.1) 15%,
						rgba(139, 26, 26, 0.7) 30%,
						rgba(60, 8, 8, 1) 42%,
						rgba(139, 26, 26, 0.7) 54%,
						rgba(139, 26, 26, 0.1) 69%,
						transparent 100%
					);
					animation: searchGlow 3.5s linear infinite;
					mask:
						linear-gradient(#fff 0 0) padding-box,
						linear-gradient(#fff 0 0);
					mask-composite: exclude;
					-webkit-mask:
						linear-gradient(#fff 0 0) padding-box,
						linear-gradient(#fff 0 0);
					-webkit-mask-composite: xor;
					pointer-events: none;
					z-index: 0;
				}
				[data-theme="dark"] .search-glow-wrap::before {
					background: conic-gradient(
						from var(--glow-angle, 0deg),
						transparent 0%,
						rgba(212, 106, 106, 0.1) 15%,
						rgba(212, 106, 106, 0.75) 30%,
						rgba(90, 20, 20, 1) 42%,
						rgba(212, 106, 106, 0.75) 54%,
						rgba(212, 106, 106, 0.1) 69%,
						transparent 100%
					);
				}
				.search-glow-wrap::after {
					content: "";
					position: absolute;
					inset: 0;
					border-radius: inherit;
					box-shadow:
						0 0 12px 2px rgba(139, 26, 26, 0.2),
						0 0 28px 5px rgba(139, 26, 26, 0.08);
					pointer-events: none;
					z-index: 0;
					animation: searchGlow 3.5s linear infinite;
					background: transparent;
				}
				[data-theme="dark"] .search-glow-wrap::after {
					box-shadow:
						0 0 12px 2px rgba(212, 106, 106, 0.25),
						0 0 28px 5px rgba(212, 106, 106, 0.1);
				}
				.search-glow-wrap:hover::before,
				.search-glow-wrap:hover::after {
					animation-duration: 1.5s;
				}
				.search-glow-wrap button {
					position: relative;
					z-index: 1;
				}
			}
		`}</style>
		<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
				<div className="h-16 flex items-center justify-between">
					{/* Wordmark */}
					<Link href="/" className="group relative">
						<NavLogo />
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center">
						<div className="relative rounded-pill bg-bg-elevated/80 shadow-clay-sm border border-border/50 px-1.5 py-1 overflow-hidden">
							<div className="nav-shimmer-track" />
							<div className="relative flex items-center gap-0.5">
								{NAV_LINKS.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={`font-sans text-sm px-3.5 py-1.5 rounded-pill transition-colors ${
											isActive(link.href)
												? "text-accent font-semibold bg-accent/5"
												: "text-text-muted hover:text-text hover:bg-bg-subtle"
										}`}
									>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					</nav>

					{/* Right side — search + theme */}
					<div className="flex items-center gap-2">
						<div ref={containerRef} className="relative">
							{searchOpen ? (
								<div className="flex items-center">
									<input
										ref={inputRef}
										type="search"
										autoComplete="off"
										placeholder="Search standards…"
										value={query}
										onChange={(e) => handleChange(e.target.value)}
										onKeyDown={handleKeyDown}
										className="w-[240px] sm:w-[300px] font-sans text-sm text-text placeholder:text-text-subtle bg-bg-elevated border border-border rounded-pill px-4 py-1.5 outline-none focus:border-accent transition-colors"
									/>

									{/* Results dropdown */}
									{results.length > 0 && (
										<ul
											role="listbox"
											className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-bg-elevated shadow-clay-lg border border-border overflow-hidden animate-[fadeIn_150ms_ease-out] max-h-[400px] overflow-y-auto"
										>
											{results.map((entry, i) => (
												<li
													key={entry.slug}
													role="option"
													aria-selected={i === activeIndex}
													className={`px-4 py-2.5 cursor-pointer transition-colors border-b border-hairline/50 last:border-0 ${
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
													<div className="flex items-center gap-2">
														<span
															className={`inline-block rounded-pill px-1.5 py-0.5 text-[10px] font-sans font-medium uppercase tracking-wider ${statusColors[entry.status] ?? "bg-bg-subtle text-text-muted"}`}
														>
															{statusLabels[entry.status] ?? entry.status}
														</span>
														<span className="font-sans text-sm font-medium text-text">
															{entry.nfrsNumber}
														</span>
													</div>
													<p className="font-serif text-xs text-text-muted leading-snug truncate mt-0.5">
														{entry.title}
													</p>
												</li>
											))}
										</ul>
									)}

									{/* No results message */}
									{query.length >= 1 && results.length === 0 && (
										<div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-bg-elevated shadow-clay-lg border border-border px-4 py-3">
											<p className="font-sans text-sm text-text-muted">
												No standards found for &ldquo;{query}&rdquo;
											</p>
										</div>
									)}
								</div>
							) : (
								<div className="search-glow-wrap">
									<button
										type="button"
										onClick={() => setSearchOpen(true)}
										className="hidden sm:flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text px-3.5 py-1.5 rounded-pill bg-bg-elevated/60 border border-border/50 shadow-clay-sm hover:shadow-clay-md transition-all"
									>
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										aria-hidden="true"
									>
										<circle cx="11" cy="11" r="8" />
										<line x1="21" y1="21" x2="16.65" y2="16.65" />
									</svg>
									<span>Search…</span>
									<kbd className="font-mono text-[10px] text-text-subtle border border-border rounded px-1 py-0.5 leading-none">
										/
									</kbd>
									</button>
								</div>
							)}
						</div>

						<ThemeToggle />

						{/* Mobile hamburger */}
						<button
							type="button"
							className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-bg-subtle transition-colors"
							onClick={() => setMobileOpen(!mobileOpen)}
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? (
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									aria-hidden="true"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							) : (
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									aria-hidden="true"
								>
									<line x1="3" y1="6" x2="21" y2="6" />
									<line x1="3" y1="12" x2="21" y2="12" />
									<line x1="3" y1="18" x2="21" y2="18" />
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile nav dropdown */}
				{mobileOpen && (
					<nav className="md:hidden pb-4 border-t border-hairline/50 pt-3 animate-[fadeIn_200ms_ease-out]">
						<div className="flex flex-col gap-1">
							{/* Mobile search */}
							<div className="px-2 pb-3">
								<div className="relative">
									<input
										type="search"
										autoComplete="off"
										placeholder="Search standards…"
										value={query}
										onChange={(e) => handleChange(e.target.value)}
										onFocus={() => preloadSearchIndex()}
										onKeyDown={handleKeyDown}
										className="w-full font-sans text-sm text-text placeholder:text-text-subtle bg-bg-elevated border border-border rounded-lg px-4 py-2.5 outline-none focus:border-accent transition-colors"
									/>
									{results.length > 0 && (
										<ul className="mt-2 rounded-lg bg-bg-elevated border border-border overflow-hidden">
											{results.map((entry, i) => (
												<li
													key={entry.slug}
													className={`px-4 py-2.5 cursor-pointer transition-colors border-b border-hairline/50 last:border-0 ${
														i === activeIndex
															? "bg-bg-subtle"
															: "hover:bg-bg-subtle/50"
													}`}
													onMouseDown={(e) => {
														e.preventDefault();
														setMobileOpen(false);
														navigate(entry.slug);
													}}
												>
													<span className="font-sans text-sm font-medium text-text">
														{entry.nfrsNumber}
													</span>
													<p className="font-serif text-xs text-text-muted truncate">
														{entry.title}
													</p>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
							{NAV_LINKS.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMobileOpen(false)}
									className={`font-sans text-base px-4 py-2.5 rounded-lg transition-colors ${
										isActive(link.href)
											? "text-accent font-semibold bg-accent/5"
											: "text-text-muted hover:text-text hover:bg-bg-subtle"
									}`}
								>
									{link.label}
								</Link>
							))}
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
