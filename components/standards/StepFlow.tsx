"use client";

import { motion } from "framer-motion";
import type { StepData } from "@/lib/standard-data/types";

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
	hidden: { opacity: 0, x: 40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const numberPop = {
	hidden: { scale: 1.3, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export function StepFlow({ steps }: { steps: StepData[] }) {
	return (
		<div className="mb-8">
			<p className="font-sans text-xs uppercase tracking-[0.1em] text-text-subtle font-medium mb-6">
				Recognition Steps
			</p>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-40px" }}
				className="space-y-4"
			>
				{steps.map((step, i) => {
					const isLast = i === steps.length - 1;
					return (
						<motion.div key={step.number} variants={item} className="relative">
							{!isLast && (
								<div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border -translate-x-1/2" />
							)}
							<div className="flex gap-4">
								<motion.div
									variants={numberPop}
									className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-fg flex items-center justify-center font-display text-lg font-light z-10"
								>
									{step.number}
								</motion.div>
								<div
									className="flex-1 rounded-lg border border-border p-4"
									style={{ background: "var(--glass-bg)", backdropFilter: "var(--glass-backdrop)" }}
								>
									<div className="flex items-baseline gap-2 mb-1">
										<h4 className="font-display text-base font-normal text-text">
											{step.name}
										</h4>
										<span className="font-mono text-[10px] text-text-subtle">
											{step.paraRef}
										</span>
									</div>
									<p className="font-sans text-sm text-accent italic mb-2">
										{step.coreQuestion}
									</p>
									<p className="font-serif text-sm text-text-muted leading-relaxed">
										{step.nepalExample}
									</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
