"use client";

import { useDifficulty, type DifficultyLevel } from "./DifficultyProvider";

const levels: { key: DifficultyLevel; label: string; icon: string }[] = [
	{ key: "beginner", label: "Beginner", icon: "📖" },
	{ key: "medium", label: "Standard", icon: "📘" },
	{ key: "pro", label: "Advanced", icon: "🎓" },
];

export function DifficultySelector({ className = "" }: { className?: string }) {
	const { level, setLevel } = useDifficulty();

	return (
		<div className={`font-sans ${className}`}>
			<p className="text-[10px] uppercase tracking-[0.12em] text-text-subtle font-medium mb-2">
				Explain as
			</p>
			<div className="flex flex-col gap-1">
				{levels.map((l) => (
					<button
						key={l.key}
						type="button"
						onClick={() => setLevel(l.key)}
						className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-left transition-colors ${
							level === l.key
								? "bg-accent text-accent-fg font-medium"
								: "text-text-muted hover:bg-bg-subtle hover:text-text"
						}`}
					>
						<span className="text-xs">{l.icon}</span>
						{l.label}
					</button>
				))}
			</div>
		</div>
	);
}
