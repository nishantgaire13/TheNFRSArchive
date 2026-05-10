"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeToggleProps {
	className?: string;
}

function applyTheme(mode: ThemeMode) {
	const root = document.documentElement;
	if (mode === "system") {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		root.setAttribute("data-theme", prefersDark ? "dark" : "light");
	} else {
		root.setAttribute("data-theme", mode);
	}
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
	const [mode, setMode] = useState<ThemeMode>("system");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme") as ThemeMode | null;
		if (stored) {
			setMode(stored);
			applyTheme(stored);
		} else {
			// Always default to light on first visit
			setMode("light");
			applyTheme("light");
		}

		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = () => {
			if ((localStorage.getItem("theme") || "system") === "system") {
				applyTheme("system");
			}
		};
		mql.addEventListener("change", handler);
		return () => mql.removeEventListener("change", handler);
	}, []);

	function cycle() {
		const next: ThemeMode = mode === "dark" ? "light" : "dark";
		setMode(next);
		localStorage.setItem("theme", next);
		applyTheme(next);
	}

	const icons: Record<Exclude<ThemeMode, "system">, React.ReactNode> = {
		light: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="5" />
				<line x1="12" y1="1" x2="12" y2="3" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
				<line x1="1" y1="12" x2="3" y2="12" />
				<line x1="21" y1="12" x2="23" y2="12" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
			</svg>
		),
		dark: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</svg>
		),
		system: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
				<line x1="8" y1="21" x2="16" y2="21" />
				<line x1="12" y1="17" x2="12" y2="21" />
			</svg>
		),
	};

	return (
		<button
			type="button"
			onClick={cycle}
			className={`w-9 h-9 flex items-center justify-center rounded-md hover:bg-bg-subtle transition-colors focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)] ${className}`}
			aria-label={`Theme: ${mode}. Click to change.`}
			title={`Theme: ${mode}`}
		>
			{mounted ? icons[mode] : <div className="w-[18px] h-[18px]" />}
		</button>
	);
}
