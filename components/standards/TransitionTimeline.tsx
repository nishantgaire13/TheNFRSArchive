import type { TimelineEvent } from "@/lib/standard-data/types";

export function TransitionTimeline({ events }: { events: TimelineEvent[] }) {
	return (
		<div className="mb-8">
			<p className="font-sans text-xs uppercase tracking-[0.1em] text-text-subtle font-medium mb-4">Transition Timeline</p>
			<div className="relative flex items-start justify-between gap-2 px-2">
				{/* Connecting line */}
				<div className="absolute top-3 left-6 right-6 h-0.5 bg-border" />

				{events.map((e, i) => {
					const isHighlight = e.highlight;
					const isLast = i === events.length - 1;
					return (
						<div key={e.date} className="relative flex flex-col items-center text-center flex-1 min-w-0">
							<div
								className={`w-6 h-6 rounded-full border-2 z-10 flex items-center justify-center ${
									isHighlight
										? "border-accent bg-accent"
										: isLast
											? "border-accent bg-bg"
											: "border-border-strong bg-bg-elevated"
								}`}
							>
								{isLast && <div className="w-2 h-2 rounded-full bg-accent" />}
							</div>
							<p className={`font-sans text-xs font-medium mt-2 ${isHighlight ? "text-accent" : "text-text"}`}>
								{e.date}
							</p>
							<p className="font-sans text-[11px] text-text-muted mt-0.5 leading-tight max-w-[120px]">{e.label}</p>
							{e.description && (
								<p className="font-sans text-[10px] text-text-subtle mt-0.5 leading-tight max-w-[120px]">{e.description}</p>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
