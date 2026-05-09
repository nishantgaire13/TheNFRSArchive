"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

const word = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

function AnimatedWord({ children }: { children: ReactNode }) {
	return (
		<motion.span variants={word} className="inline-block">
			{children}
		</motion.span>
	);
}

export function HeroTitle() {
	return (
		<motion.h1
			variants={container}
			initial="hidden"
			animate="visible"
			className="font-display text-[clamp(40px,10vw,72px)] leading-[1.05] font-light tracking-tight"
		>
			<AnimatedWord>Decoding</AnimatedWord>{" "}
			<AnimatedWord>
				<span className="text-accent font-normal">NFRS</span>
			</AnimatedWord>
			<br />
			<AnimatedWord>
				<em className="italic">side</em>
			</AnimatedWord>{" "}
			<AnimatedWord>
				<em className="italic">by</em>
			</AnimatedWord>{" "}
			<AnimatedWord>
				<em className="italic">side</em>
			</AnimatedWord>
			<br />
			<AnimatedWord>with</AnimatedWord>{" "}
			<AnimatedWord>
				<em className="italic text-accent font-normal">IFRS</em>
			</AnimatedWord>
			<AnimatedWord>.</AnimatedWord>
		</motion.h1>
	);
}

export function HeroDescription({ children }: { children: ReactNode }) {
	return (
		<motion.p
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
			className="font-serif text-lg text-text-muted mt-6 max-w-[540px] leading-relaxed"
		>
			{children}
		</motion.p>
	);
}

export function HeroSearchWrapper({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
			className="mt-8 max-w-md"
		>
			{children}
		</motion.div>
	);
}

export function HeroIllustration({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.3 }}
			className="w-full max-w-[560px] lg:max-w-none"
		>
			<motion.div
				animate={{ y: [0, -8, 0] }}
				transition={{
					duration: 4,
					ease: "easeInOut" as const,
					repeat: Infinity,
					repeatType: "loop",
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
