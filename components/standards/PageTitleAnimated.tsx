"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

export function AnimatedCode({ children }: { children: ReactNode }) {
	return (
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		>
			{children}
		</motion.span>
	);
}

export function AnimatedTitle({ children }: { children: ReactNode }) {
	return (
		<motion.span
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" as const }}
			className="block"
		>
			{children}
		</motion.span>
	);
}

export function AnimatedBadge({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
		>
			{children}
		</motion.div>
	);
}
