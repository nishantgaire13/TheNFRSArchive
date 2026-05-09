"use client";

import { useState } from "react";
import Link from "next/link";
import type { CarveOutRow, ResolvedCarveOutRow } from "@/lib/standards";
import { ClayCard } from "@/components/ui/ClayCard";

type Filter = "all" | "carve-out" | "resolved" | "historical";

const filters: { value: Filter; label: string }[] = [
	{ value: "all", label: "All" },
	{ value: "carve-out", label: "Active" },
	{ value: "resolved", label: "Resolved" },
	{ value: "historical", label: "Historical" },
];

const impactColors: Record<string, string> = {
	HIGH: "text-carveout bg-carveout/15",
	MEDIUM: "text-deferred bg-deferred/15",
	LOW: "text-text-muted bg-bg-subtle",
};

const statusBadgeColors: Record<string, string> = {
	"carve-out": "text-carveout bg-carveout/15",
	resolved: "text-aligned bg-aligned/15",
	historical: "text-text-muted bg-bg-subtle",
};

export function CarveOutFilters({
	rows,
	resolvedRows,
	historicalRows,
}: {
	rows: CarveOutRow[];
	resolvedRows: ResolvedCarveOutRow[];
	historicalRows: ResolvedCarveOutRow[];
}) {
	const [active, setActive] = useState<Filter>("all");

	const activeRows = rows.filter((r) => r.status === "carve-out");
	const resolvedFiltered =
		active === "all" ? resolvedRows : active === "resolved" ? resolvedRows : [];
	const historicalFiltered =
		active === "all"
			? historicalRows
			: active === "historical"
				? historicalRows
				: [];

	return (
		<div>
			{/* Filter pills */}
			<div className="flex flex-wrap gap-2 mb-6">
				{filters.map((f) => {
					const count =
						f.value === "all"
							? rows.length + resolvedRows.length + historicalRows.length
							: f.value === "carve-out"
								? rows.length
								: f.value === "resolved"
									? resolvedRows.length
									: historicalRows.length;
					return (
						<button
							key={f.value}
							type="button"
							onClick={() => setActive(f.value)}
							className={`font-sans text-sm px-4 py-2 rounded-pill border transition-colors ${
								active === f.value
									? "bg-accent text-accent-fg border-accent"
									: "bg-bg-elevated border-border hover:border-border-strong"
							}`}
						>
							{f.label}
							<span
								className={`ml-1.5 text-xs ${
									active === f.value ? "text-accent-fg/70" : "text-text-subtle"
								}`}
							>
								{count}
							</span>
						</button>
					);
				})}
			</div>

			{/* Active carve-outs */}
			{(active === "all" || active === "carve-out") &&
				activeRows.length > 0 && (
					<div className="mb-8">
						<h2 className="font-display text-lg font-light text-text mb-3">
							Active Carve-outs
						</h2>
						<ClayCard padding="md">
							<div className="overflow-x-auto">
								<table className="w-full font-sans text-sm">
									<thead>
										<tr className="border-b border-hairline text-left">
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider">
												Standard
											</th>
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider">
												Detail
											</th>
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider hidden sm:table-cell">
												Impact
											</th>
											<th className="py-3 font-medium text-text-subtle text-xs uppercase tracking-wider hidden md:table-cell">
												Effective
											</th>
										</tr>
									</thead>
									<tbody>
										{activeRows.map((row, i) => (
											<tr
												key={`${row.slug}-${i}`}
												className="border-b border-hairline/50 last:border-0 hover:bg-bg-subtle/50 transition-colors"
											>
												<td className="py-3 pr-4">
													<Link
														href={`/standards/${row.slug}`}
														className="font-medium text-accent hover:underline whitespace-nowrap"
													>
														{row.nfrsNumber}
													</Link>
												</td>
												<td className="py-3 pr-4 text-text-muted leading-snug">
													{row.detail}
												</td>
												<td className="py-3 pr-4 hidden sm:table-cell">
													<span
														className={`inline-block rounded-pill px-2 py-0.5 text-xs font-medium ${impactColors[row.impact]}`}
													>
														{row.impact}
													</span>
												</td>
												<td className="py-3 hidden md:table-cell text-text-subtle whitespace-nowrap tabular-nums">
													{row.effectiveDate}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</ClayCard>
					</div>
				)}

			{/* Resolved carve-outs */}
			{(active === "all" || active === "resolved") &&
				resolvedFiltered.length > 0 && (
					<div className="mb-8">
						<h2 className="font-display text-lg font-light text-text mb-3">
							Previously Active, Now Resolved
						</h2>
						<ClayCard padding="md">
							<div className="overflow-x-auto">
								<table className="w-full font-sans text-sm">
									<thead>
										<tr className="border-b border-hairline text-left">
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider">
												Standard
											</th>
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider">
												Detail
											</th>
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider hidden sm:table-cell">
												Impact
											</th>
											<th className="py-3 font-medium text-text-subtle text-xs uppercase tracking-wider hidden md:table-cell">
												Resolved
											</th>
										</tr>
									</thead>
									<tbody>
										{resolvedFiltered.map((row, i) => (
											<tr
												key={`${row.slug}-${i}`}
												className="border-b border-hairline/50 last:border-0 hover:bg-bg-subtle/50 transition-colors"
											>
												<td className="py-3 pr-4">
													<Link
														href={`/standards/${row.slug}`}
														className="font-medium text-aligned hover:underline whitespace-nowrap"
													>
														{row.nfrsNumber}
													</Link>
													<span
														className={`ml-2 inline-block rounded-pill px-2 py-0.5 text-[10px] font-medium ${statusBadgeColors[row.status]}`}
													>
														Resolved
													</span>
												</td>
												<td className="py-3 pr-4 text-text-muted leading-snug">
													{row.detail}
												</td>
												<td className="py-3 pr-4 hidden sm:table-cell">
													<span
														className={`inline-block rounded-pill px-2 py-0.5 text-xs font-medium ${impactColors[row.impact]}`}
													>
														{row.impact}
													</span>
												</td>
												<td className="py-3 hidden md:table-cell text-text-subtle whitespace-nowrap tabular-nums">
													{row.effectiveDate}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</ClayCard>
					</div>
				)}

			{/* Historical */}
			{(active === "all" || active === "historical") &&
				historicalFiltered.length > 0 && (
					<div className="mb-8">
						<h2 className="font-display text-lg font-light text-text mb-3">
							Historical (Superseded by NFRS 2018)
						</h2>
						<ClayCard padding="md">
							<div className="overflow-x-auto">
								<table className="w-full font-sans text-sm">
									<thead>
										<tr className="border-b border-hairline text-left">
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider">
												Standard
											</th>
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider">
												Detail
											</th>
											<th className="py-3 pr-4 font-medium text-text-subtle text-xs uppercase tracking-wider hidden sm:table-cell">
												Impact
											</th>
											<th className="py-3 font-medium text-text-subtle text-xs uppercase tracking-wider hidden md:table-cell">
												Period
											</th>
										</tr>
									</thead>
									<tbody>
										{historicalFiltered.map((row, i) => (
											<tr
												key={`${row.slug}-${i}`}
												className="border-b border-hairline/50 last:border-0 hover:bg-bg-subtle/50 transition-colors"
											>
												<td className="py-3 pr-4">
													<Link
														href={`/standards/${row.slug}`}
														className="font-medium text-text-subtle hover:underline whitespace-nowrap"
													>
														{row.nfrsNumber}
													</Link>
													<span
														className={`ml-2 inline-block rounded-pill px-2 py-0.5 text-[10px] font-medium ${statusBadgeColors[row.status]}`}
													>
														Superseded
													</span>
												</td>
												<td className="py-3 pr-4 text-text-muted leading-snug">
													{row.detail}
												</td>
												<td className="py-3 pr-4 hidden sm:table-cell">
													<span
														className={`inline-block rounded-pill px-2 py-0.5 text-xs font-medium ${impactColors[row.impact]}`}
													>
														{row.impact}
													</span>
												</td>
												<td className="py-3 hidden md:table-cell text-text-subtle whitespace-nowrap tabular-nums">
													2018–2022
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</ClayCard>
					</div>
				)}
		</div>
	);
}
