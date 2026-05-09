"use client";

import { type ReactNode, type CSSProperties } from "react";
import {
	motion,
	AnimatePresence,
	type Variants,
	type Transition,
} from "framer-motion";

/* ─── Stagger container + children ─── */

const staggerContainer: Variants = {
	hidden: {},
	visible: (stagger: number = 0.06) => ({
		transition: { staggerChildren: stagger },
	}),
};

const staggerItem: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function StaggerContainer({
	children,
	stagger = 0.06,
	className,
	delay = 0,
}: {
	children: ReactNode;
	stagger?: number;
	className?: string;
	delay?: number;
}) {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
			custom={stagger}
			className={className}
			style={delay ? { transitionDelay: `${delay}s` } : undefined}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.span variants={staggerItem} className={className}>
			{children}
		</motion.span>
	);
}

/* ─── Word-by-word hero text ─── */

export function WordReveal({
	text,
	className,
	stagger = 0.06,
	as: Tag = "span",
}: {
	text: string;
	className?: string;
	stagger?: number;
	as?: "span" | "h1" | "h2" | "p";
}) {
	const words = text.split(" ");
	return (
		<motion.span
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
			custom={stagger}
			className={className}
		>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					variants={staggerItem}
					className="inline-block mr-[0.3em]"
				>
					{word}
				</motion.span>
			))}
		</motion.span>
	);
}

/* ─── Scroll-triggered reveal ─── */

export function ScrollReveal({
	children,
	className,
	delay = 0,
	direction = "up",
	once = true,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
	once?: boolean;
}) {
	const offsets = {
		up: { y: 30, x: 0 },
		down: { y: -30, x: 0 },
		left: { x: 40, y: 0 },
		right: { x: -40, y: 0 },
	};
	const { x, y } = offsets[direction];
	return (
		<motion.div
			initial={{ opacity: 0, x, y }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once, margin: "-60px" }}
			transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

/* ─── Staggered grid (for card grids) ─── */

export function StaggerGrid({
	children,
	className,
	stagger = 0.04,
}: {
	children: ReactNode;
	className?: string;
	stagger?: number;
}) {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-40px" }}
			custom={stagger}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function StaggerGridItem({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			variants={staggerItem}
			whileHover={{ y: -3, transition: { duration: 0.2 } }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

/* ─── Floating animation (for hero illustration) ─── */

export function FloatingElement({
	children,
	className,
	amplitude = 8,
	duration = 4,
}: {
	children: ReactNode;
	className?: string;
	amplitude?: number;
	duration?: number;
}) {
	return (
		<motion.div
			animate={{ y: [0, -amplitude, 0] }}
			transition={{
				duration,
				ease: "easeInOut" as const,
				repeat: Infinity,
				repeatType: "loop",
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

/* ─── Tab content with AnimatePresence ─── */

export function TabContent({
	children,
	tabKey,
	className,
}: {
	children: ReactNode;
	tabKey: string;
	className?: string;
}) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={tabKey}
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 10 }}
				transition={{ duration: 0.2, ease: "easeOut" as const }}
				className={className}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

/* ─── Sliding tab indicator ─── */

export function TabIndicator({ layoutId = "tab-indicator" }: { layoutId?: string }) {
	return (
		<motion.div
			layoutId={layoutId}
			className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
			transition={{ type: "spring", stiffness: 400, damping: 30 }}
		/>
	);
}

/* ─── Spring pop (for badges) ─── */

export function SpringPop({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
				delay,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

/* ─── Re-export AnimatePresence and motion for direct use ─── */

export { motion, AnimatePresence };
