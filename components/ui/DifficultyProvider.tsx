"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type DifficultyLevel = "beginner" | "medium" | "pro";

interface DifficultyContextValue {
	level: DifficultyLevel;
	setLevel: (level: DifficultyLevel) => void;
}

const STORAGE_KEY = "nfrs-difficulty-level";
const VALID_LEVELS: DifficultyLevel[] = ["beginner", "medium", "pro"];

const DifficultyContext = createContext<DifficultyContextValue>({
	level: "medium",
	setLevel: () => {},
});

export function useDifficulty() {
	return useContext(DifficultyContext);
}

export function DifficultyProvider({ children }: { children: ReactNode }) {
	const [level, setLevelState] = useState<DifficultyLevel>("medium");

	useEffect(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored && VALID_LEVELS.includes(stored as DifficultyLevel)) {
				setLevelState(stored as DifficultyLevel);
			}
		} catch {}
	}, []);

	const setLevel = (newLevel: DifficultyLevel) => {
		setLevelState(newLevel);
		try {
			localStorage.setItem(STORAGE_KEY, newLevel);
		} catch {}
	};

	return (
		<DifficultyContext.Provider value={{ level, setLevel }}>
			{children}
		</DifficultyContext.Provider>
	);
}
