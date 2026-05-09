"use client";

import { useDifficulty, type DifficultyLevel } from "./DifficultyProvider";
import type { ReactNode } from "react";

interface DifficultyContentProps {
	level: DifficultyLevel;
	children: ReactNode;
}

export function DifficultyContent({ level, children }: DifficultyContentProps) {
	const { level: current } = useDifficulty();

	if (current !== level) return null;

	return <>{children}</>;
}
