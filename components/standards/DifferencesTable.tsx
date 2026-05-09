import type { DifferenceRow } from "@/lib/standard-data/types";

const badgeColors: Record<string, string> = {
	high: "bg-[#8b1a1a] text-white",
	medium: "bg-[#c88a2e] text-white",
	low: "bg-[#4a6b3f] text-white",
};

const badgeColorsDark: Record<string, string> = {
	high: "bg-[#d46a6a] text-[#1a1612]",
	medium: "bg-[#e0a060] text-[#1a1612]",
	low: "bg-[#8fbb7c] text-[#1a1612]",
};

export function DifferencesTable({ rows }: { rows: DifferenceRow[] }) {
	return (
		<div className="overflow-x-auto mb-8 rounded-lg border border-border">
			<table className="w-full font-sans text-sm">
				<thead>
					<tr className="bg-bg-subtle border-b border-border">
						<th className="text-left px-4 py-3 font-medium text-text-subtle w-8">#</th>
						<th className="text-left px-4 py-3 font-medium text-text-subtle">Topic</th>
						<th className="text-left px-4 py-3 font-medium text-text-subtle hidden lg:table-cell">IFRS</th>
						<th className="text-left px-4 py-3 font-medium text-text-subtle hidden lg:table-cell">NFRS</th>
						<th className="text-left px-4 py-3 font-medium text-text-subtle">Nepal Impact</th>
						<th className="text-center px-4 py-3 font-medium text-text-subtle w-24">Level</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => (
						<tr key={row.topic} className="group border-b border-hairline last:border-0 hover:bg-accent/[0.04] transition-colors duration-150">
							<td className="px-4 py-3 text-text-subtle font-mono text-xs">{i + 1}</td>
							<td className="px-4 py-3 font-medium text-text">{row.topic}</td>
							<td className="px-4 py-3 text-text-muted hidden lg:table-cell">{row.ifrs}</td>
							<td className="px-4 py-3 text-text-muted hidden lg:table-cell">{row.nfrs}</td>
							<td className="px-4 py-3 text-text-muted">{row.nepalImpact}</td>
							<td className="px-4 py-3 text-center">
								<span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize transition-transform duration-150 group-hover:scale-105 ${badgeColors[row.significance]}`}>
									{row.significance}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
