"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function PriorityGrid({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-60px" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function PriorityGridItem({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<motion.div
			variants={item}
			whileHover={{ y: -3, transition: { duration: 0.2 } }}
		>
			{children}
		</motion.div>
	);
}
