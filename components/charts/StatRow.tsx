import { StatCard, type StatCardProps } from "@/components/ui/StatCard";

export interface StatRowProps {
	stats: StatCardProps[];
	className?: string;
}

export function StatRow({ stats, className = "" }: StatRowProps) {
	return (
		<div
			className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
		>
			{stats.map((stat) => (
				<StatCard key={stat.label} {...stat} />
			))}
		</div>
	);
}
