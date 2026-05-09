import type { DifferenceRow } from "@/lib/standard-data/types";

const badgeColors: Record<string, string> = {
	high: "bg-[#8b1a1a] text-white",
	medium: "bg-[#c88a2e] text-white",
	low: "bg-[#4a6b3f] text-white",
};

export function DifferencesTable({ rows }: { rows: DifferenceRow[] }) {
	return (
		<div className="overflow-x-auto mb-8 rounded-lg border border-border">
			<table className="w-full font-sans text-xs">
				<thead>
					<tr className="bg-bg-subtle border-b border-border">
						<th className="text-left px-2 py-3 font-medium text-text-subtle w-6">#</th>
						<th className="text-left px-2 py-3 font-medium text-text-subtle">Topic</th>
						<th className="text-left px-2 py-3 font-medium text-text-subtle">IFRS</th>
						<th className="text-left px-2 py-3 font-medium text-text-subtle">NFRS</th>
						<th className="text-left px-2 py-3 font-medium text-text-subtle">Nepal Impact</th>
						<th className="text-center px-2 py-3 font-medium text-text-subtle w-14">Level</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => (
						<tr key={row.topic} className="group border-b border-hairline last:border-0 hover:bg-accent/[0.04] transition-colors duration-150">
							<td className="px-2 py-3 text-text-subtle font-mono align-top">{i + 1}</td>
							<td className="px-2 py-3 font-medium text-text align-top">{row.topic}</td>
							<td className="px-2 py-3 text-text-muted align-top">{row.ifrs}</td>
							<td className="px-2 py-3 text-text-muted align-top">{row.nfrs}</td>
							<td className="px-2 py-3 text-text-muted align-top">{row.nepalImpact}</td>
							<td className="px-2 py-3 text-center align-top">
								<span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${badgeColors[row.significance]}`}>
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
