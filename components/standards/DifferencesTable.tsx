import type { DifferenceRow } from "@/lib/standard-data/types";

const badgeColors: Record<string, string> = {
	high: "bg-[#8b1a1a] text-white",
	medium: "bg-[#c88a2e] text-white",
	low: "bg-[#4a6b3f] text-white",
};

export function DifferencesTable({ rows }: { rows: DifferenceRow[] }) {
	return (
		<div className="mb-8 -mx-5 md:mx-0">
			<div className="overflow-x-auto md:rounded-lg md:border md:border-border">
				<table className="w-full min-w-[600px] font-sans text-sm md:bg-bg md:shadow-sm">
					<thead>
						<tr className="bg-bg-subtle border-b border-border">
							<th className="text-left px-3 py-3 font-medium text-text-subtle text-xs w-8 whitespace-nowrap">#</th>
							<th className="text-left px-3 py-3 font-medium text-text-subtle text-xs">Topic</th>
							<th className="text-left px-3 py-3 font-medium text-text-subtle text-xs hidden md:table-cell">IFRS</th>
							<th className="text-left px-3 py-3 font-medium text-text-subtle text-xs hidden md:table-cell">NFRS</th>
							<th className="text-left px-3 py-3 font-medium text-text-subtle text-xs">Nepal Impact</th>
							<th className="text-center px-3 py-3 font-medium text-text-subtle text-xs w-16">Level</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row, i) => (
							<tr key={row.topic} className="group border-b border-hairline last:border-0 hover:bg-accent/[0.04] transition-colors duration-150">
								<td className="px-3 py-3 text-text-subtle font-mono text-xs align-top whitespace-nowrap">{i + 1}</td>
								<td className="px-3 py-3 font-medium text-text align-top text-sm">{row.topic}</td>
								<td className="px-3 py-3 text-text-muted hidden md:table-cell align-top text-xs leading-relaxed">{row.ifrs}</td>
								<td className="px-3 py-3 text-text-muted hidden md:table-cell align-top text-xs leading-relaxed">{row.nfrs}</td>
								<td className="px-3 py-3 text-text-muted align-top text-sm leading-relaxed">{row.nepalImpact}</td>
								<td className="px-3 py-3 text-center align-top">
									<span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize transition-transform duration-150 group-hover:scale-105 ${badgeColors[row.significance]}`}>
										{row.significance}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
