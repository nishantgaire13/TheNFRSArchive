import type { StandardPageData } from "./types";

export const nas28: StandardPageData = {
	slug: "nas-28",
	nfrsNumber: "NAS 28",
	ifrsEquivalent: "IAS 28",
	title: "Investments in Associates and Joint Ventures",
	topic: "consolidation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2013-01-01",
	status: "aligned",
	heroMotif: "handshake",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Significant Influence — Rebuttable Presumption",
				ifrs: "IAS 28.5–6 presumes significant influence when an investor holds 20% or more of the voting power. This can be rebutted if the investor clearly demonstrates it does not have significant influence despite the 20% threshold",
				nfrs: "Same rebuttable presumption. In Nepal, BFIs commonly hold 20–49% stakes in insurance companies, microfinance institutions, and capital market entities. NRB requires BFIs to demonstrate significant influence indicators beyond mere shareholding percentage",
				nepalImpact: "In practice, Nepali BFIs rarely rebut the presumption because board representation almost always accompanies a 20%+ stake. NRB expects BFIs to apply the equity method for all 20%+ investments unless clear evidence contradicts significant influence",
				significance: "high",
			},
			{
				topic: "Indicators of Significant Influence",
				ifrs: "IAS 28.6 lists indicators: board representation, policy-making participation, material intercompany transactions, interchange of managerial personnel, and provision of essential technical information",
				nfrs: "Same indicators. In Nepal, significant influence is commonly evidenced by: nominee directors on associate boards (required by Company Act 2063 for large shareholdings), participation in dividend policy decisions, and intercompany deposit placements between BFIs and associate entities",
				nepalImpact: "Nepali promoter groups often exercise significant influence through family and business relationships beyond formal shareholding. Auditors must look beyond legal ownership to substance — for example, a 15% shareholder who has two board seats and participates in lending policy may have significant influence",
				significance: "medium",
			},
			{
				topic: "Equity Method Mechanics",
				ifrs: "IAS 28.10–15 requires the investor to recognise its share of the associate's profit or loss in investor's P&L and adjust the carrying amount of the investment. Distributions (dividends) received reduce the carrying amount",
				nfrs: "Same mechanics apply. Nepali entities applying the equity method must obtain associate financial statements prepared using the same reporting period. If different, adjustments for significant transactions in the gap period are required. Many Nepali associates use the same Shrawan-Ashad fiscal year, simplifying alignment",
				nepalImpact: "Timing differences arise when associates follow a different fiscal year — some insurance companies under Beema Samiti use different reporting cycles. Investors must adjust for significant events occurring between the associate's and investor's reporting dates",
				significance: "high",
			},
			{
				topic: "Upstream and Downstream Transactions",
				ifrs: "IAS 28.28–30 requires elimination of unrealised profits on transactions between the investor and associate to the extent of the investor's interest. Downstream (investor to associate) and upstream (associate to investor) are both eliminated proportionally",
				nfrs: "Same elimination required. Common in Nepal: a BFI investor places deposits with an associate bank, or a manufacturing parent sells goods to an associate distributor. Only the investor's proportionate share of unrealised profit is eliminated, not the full amount",
				nepalImpact: "Nepal's interconnected business groups frequently transact with associates. Nabil Bank may place interbank deposits with an associate bank earning above-market interest — the unrealised interest margin must be eliminated proportionally. Many preparers incorrectly eliminate 100% instead of the investor's share",
				significance: "high",
			},
			{
				topic: "Impairment of Associates",
				ifrs: "IAS 28.40–43 requires the investor to apply NAS 36 impairment indicators to the entire carrying amount of the associate (including goodwill). The impairment test compares the investment's carrying amount with its recoverable amount as a single asset",
				nfrs: "Same requirement. In Nepal, impairment indicators for associates include: persistent losses, NRB regulatory action against an associate BFI, significant decline in NEPSE share price for listed associates, and loss of key operating licences",
				nepalImpact: "BFIs holding associates in troubled microfinance or insurance entities must test for impairment when NRB places the associate under corrective action. The equity-adjusted carrying amount (including embedded goodwill) is compared with recoverable amount — not just the original cost",
				significance: "high",
			},
			{
				topic: "Loss of Significant Influence",
				ifrs: "IAS 28.22–23 requires the investor to discontinue the equity method when significant influence is lost. The retained interest is remeasured at fair value and any gain or loss is recognised in profit or loss",
				nfrs: "Same treatment. In Nepal, loss of significant influence commonly occurs when: a BFI is directed by NRB to divest its associate holding, the investor's stake is diluted below 20% through a new share issuance by the associate, or the investor loses board representation",
				nepalImpact: "NRB may direct BFIs to divest associate investments that conflict with regulatory requirements. On loss of significant influence, the retained interest must be remeasured at fair value — for listed associates this uses NEPSE quoted price, for unlisted associates a valuation exercise is required",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives require BFIs to apply the equity method for all investments in associates (20–49% ownership) in consolidated financial statements, and permits cost or equity method in separate FS. NRB must approve any BFI investment in an associate exceeding prescribed limits relative to core capital. BFIs must report equity-accounted earnings from associates in quarterly prudential returns. NRB monitors concentration risk when a BFI has multiple associates in the same sector (e.g., microfinance). Impairment losses on associate investments affect the parent BFI's capital adequacy calculation.",
		sebon: "SEBON requires listed investors to disclose details of all associates: name, ownership percentage, carrying amount (equity-adjusted), and investor's share of associate profit or loss. Listed entities must reconcile the difference between cost and equity-adjusted carrying amounts in financial statement notes. SEBON's related-party transaction reporting framework captures all transactions between the investor and its associates, including intercompany deposits, loans, and service arrangements.",
		ird: "IRD taxes each entity separately — the investor's share of associate profit recognised under the equity method is not taxable until dividends are actually received. This creates a temporary difference requiring deferred tax consideration under NAS 12. Dividends received from associates are subject to inter-corporate dividend tax at 5% under Income Tax Act 2058. Transfer pricing rules apply to transactions between an investor and its associates to ensure arm's-length pricing.",
	},

	timeline: [
		{ date: "Jan 2013", label: "IAS 28 (Revised) Effective", description: "IAS 28 revised to incorporate joint ventures alongside associates following IFRS 11 issuance" },
		{ date: "Jul 2014", label: "Nepal GAAP Period", description: "Nepal Accounting Standard on investments in associates was in use prior to NFRS adoption" },
		{ date: "Jul 2018", label: "NAS 28 Effective", description: "NAS 28 effective as part of full NFRS adoption for all listed and public interest entities (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 28, no carve-outs. Equity method applied by all BFIs with associate investments", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Determine Whether Significant Influence Exists",
			coreQuestion: "Does the investor hold 20% or more of voting power, or have other indicators of significant influence?",
			nepalExample: "Nepal Telecom holds 25% of the voting shares in a regional ISP company. It has two nominee directors on a seven-member board and participates in the ISP's pricing policy decisions. Both the 20% threshold and qualitative indicators confirm significant influence — classify as an associate.",
			paraRef: "IAS 28.5–6",
		},
		{
			number: 2,
			name: "Apply the Equity Method from Acquisition Date",
			coreQuestion: "How is the initial investment recorded and subsequently adjusted for the investor's share of profits and losses?",
			nepalExample: "Himalayan Bank acquires 30% of an insurance company for NPR 50 crore. At acquisition, the associate's net assets are NPR 140 crore (30% = NPR 42 crore). Goodwill embedded in the investment = NPR 50 cr − NPR 42 cr = NPR 8 crore. In year one, the associate earns NPR 20 crore profit — Himalayan Bank recognises 30% = NPR 6 crore as share of associate profit and increases the investment carrying amount to NPR 56 crore.",
			paraRef: "IAS 28.10–15",
		},
		{
			number: 3,
			name: "Eliminate Unrealised Profits on Intercompany Transactions",
			coreQuestion: "Are there upstream or downstream transactions with unrealised profits that must be eliminated?",
			nepalExample: "Surya Nepal sells goods worth NPR 10 crore at 25% margin to an associate distributor. At year-end, 40% of goods remain unsold by the associate. Unrealised profit = NPR 10 cr x 25% x 40% = NPR 1 crore. Investor's share to eliminate = NPR 1 cr x 30% (ownership) = NPR 30 lakh. Reduce investment carrying amount and deduct from share of associate profit.",
			paraRef: "IAS 28.28–30",
		},
		{
			number: 4,
			name: "Test for Impairment",
			coreQuestion: "Are there indicators that the equity-adjusted carrying amount exceeds the recoverable amount?",
			nepalExample: "A BFI holds a 40% associate in a microfinance company. The associate has reported losses for three years, NRB has imposed a corrective action plan, and the associate's NEPSE share price has fallen 60% below the equity-adjusted carrying amount per share. Impairment indicators are present — compare carrying amount with recoverable amount (higher of VIU and FVLCD) and recognise any shortfall.",
			paraRef: "IAS 28.40–43",
		},
		{
			number: 5,
			name: "Disclose Associate Information",
			coreQuestion: "Has the entity provided all required disclosures about its associates and joint ventures?",
			nepalExample: "Nabil Bank discloses: associate name (e.g., Nabil Insurance), ownership 30%, equity-adjusted carrying amount NPR 56 crore, share of profit NPR 6 crore, share of OCI NPR 80 lakh, unrealised profit eliminations NPR 30 lakh, nature of relationship and regulatory approvals. Also discloses that NRB restricts dividend extraction from the associate to protect insurance policyholders.",
			paraRef: "IAS 28.37–38, NFRS 12",
		},
	],

	inlineExamples: {
		equityMethodApplication: {
			title: "Himalayan Bank — Equity Method for Insurance Associate",
			context: "Himalayan Bank Ltd acquired 30% of Himalayan General Insurance Ltd for NPR 50 crore on 1 Shrawan 2080. At acquisition, the associate's identifiable net assets had a fair value of NPR 140 crore (book value NPR 130 crore — the NPR 10 crore difference relates to undervalued land with a remaining useful life of 20 years). For the year ended Ashad 2082, the associate reported profit of NPR 20 crore and paid dividends of NPR 6 crore.",
			steps: [
				"Step 1 — Calculate goodwill on acquisition: Cost NPR 50,00,00,000 − share of fair value net assets (30% x NPR 140,00,00,000 = NPR 42,00,00,000) = goodwill NPR 8,00,00,000. Goodwill is embedded in the investment — not separately recognised.",
				"Step 2 — Fair value adjustments: Land undervaluation of NPR 10,00,00,000 results in excess depreciation of NPR 10,00,00,000 / 20 years = NPR 50,00,000 per year. Investor's share = 30% x NPR 50,00,000 = NPR 15,00,000 charged against share of profit.",
				"Step 3 — Share of associate profit: 30% x NPR 20,00,00,000 = NPR 6,00,00,000. Less fair value depreciation adjustment NPR 15,00,000. Adjusted share of profit = NPR 5,85,00,000.",
				"Step 4 — Dividend received from associate: 30% x NPR 6,00,00,000 = NPR 1,80,00,000 received. This reduces the carrying amount — it does not appear in P&L under the equity method.",
				"Step 5 — Closing carrying amount: NPR 50,00,00,000 (cost) + NPR 5,85,00,000 (share of profit adjusted) − NPR 1,80,00,000 (dividend) = NPR 54,05,00,000.",
			],
			journalEntries: [
				"Acquisition: Dr Investment in Associate (Himalayan General Insurance) NPR 50,00,00,000 / Cr Bank NPR 50,00,00,000.",
				"Share of profit: Dr Investment in Associate NPR 5,85,00,000 / Cr Share of Profit of Associate NPR 5,85,00,000 — recognised in P&L (after fair value depreciation adjustment of NPR 15,00,000).",
				"Dividend received: Dr Bank NPR 1,71,00,000 / Dr TDS Receivable NPR 9,00,000 / Cr Investment in Associate NPR 1,80,00,000 — dividend reduces carrying amount, not P&L. TDS at 5% deducted on gross dividend.",
			],
			difficulty: "medium",
		},
		upstreamElimination: {
			title: "CG Group — Upstream Transaction Elimination with Associate",
			context: "CG Industries (investor) holds 40% in CG Distribution Pvt Ltd (associate). During the year ended Ashad 2082, CG Distribution (associate) sold goods costing NPR 6 crore to CG Industries (investor) for NPR 8 crore (33.3% margin on cost). At year-end, 50% of these goods remain in CG Industries' inventory. CG Distribution reported total profit of NPR 15 crore for the year. This is an upstream transaction — the associate sells to the investor.",
			steps: [
				"Step 1 — Identify the upstream transaction: CG Distribution (associate) sold goods to CG Industries (investor) for NPR 8,00,00,000 at a profit of NPR 2,00,00,000.",
				"Step 2 — Calculate unrealised profit: 50% of goods remain in CG Industries' inventory. Unrealised profit = NPR 2,00,00,000 x 50% = NPR 1,00,00,000.",
				"Step 3 — Calculate investor's share of unrealised profit: 40% x NPR 1,00,00,000 = NPR 40,00,000. Only the investor's proportionate share is eliminated — not the full unrealised profit.",
				"Step 4 — Adjust share of associate profit: Gross share = 40% x NPR 15,00,00,000 = NPR 6,00,00,000. Less unrealised profit NPR 40,00,000. Adjusted share = NPR 5,60,00,000.",
				"Step 5 — Adjust inventory in investor's books: Reduce inventory by NPR 40,00,000 to eliminate the proportionate unrealised profit. The investor's inventory now reflects 40% of cost rather than 40% of the marked-up price.",
				"Step 6 — Reversal in next period: When CG Industries sells the remaining inventory to third parties, the previously eliminated profit of NPR 40,00,000 is realised and added back to share of associate profit.",
			],
			journalEntries: [
				"Share of associate profit (adjusted): Dr Investment in Associate NPR 5,60,00,000 / Cr Share of Profit of Associate NPR 5,60,00,000 — net of NPR 40,00,000 unrealised upstream profit elimination.",
				"Inventory adjustment (upstream): Dr Share of Profit of Associate NPR 40,00,000 / Cr Inventory NPR 40,00,000 — removes the investor's 40% share of unrealised profit from inventory and reduces recognised share of profit.",
				"Next period reversal (when inventory is sold): Dr Inventory NPR 40,00,000 / Cr Share of Profit of Associate NPR 40,00,000 — unrealised profit becomes realised on sale to third parties.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Equity method calculations appear in almost every SBR exam. Master the sequence: (1) cost of investment, (2) goodwill computation (cost minus share of fair value net assets), (3) share of post-acquisition profit adjusted for fair value depreciation, (4) deduct dividends received, (5) arrive at closing carrying amount." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates frequently fail to adjust for fair value differences on acquisition. If the associate's assets are undervalued at acquisition, extra depreciation/amortisation must be charged against the investor's share of profit each year. This is the most commonly missed adjustment." },
			{ source: "Exam Technique", tip: "For upstream and downstream transaction eliminations, remember: only eliminate the INVESTOR'S SHARE of the unrealised profit, not the full amount. For a 30% associate with NPR 10 lakh unrealised profit in inventory, eliminate 30% = NPR 3 lakh — not the full NPR 10 lakh." },
			{ source: "Recurring Pattern", tip: "Loss of significant influence questions require a two-step process: (1) derecognise the associate and stop equity method, (2) remeasure the retained interest at fair value with gain/loss in P&L. Remember to reclassify any amounts in OCI (e.g., revaluation surplus from the associate) to P&L on loss of significant influence." },
			{ source: "Nepal-specific", tip: "In Nepal, BFIs commonly hold 20–49% stakes in insurance, microfinance, and capital market entities. NRB requires equity method application in consolidated FS. Exam questions set in Nepal will often involve an associate that is a different type of financial institution — watch for different reporting periods requiring alignment adjustments." },
			{ source: "Exam Technique", tip: "Dividends received from an associate reduce the investment carrying amount — they do NOT appear as income in P&L when the equity method is used. This is opposite to the cost method under NAS 27. If a question says 'equity method', never credit dividend income to P&L." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Recognising dividends as income under the equity method",
			description: "Investors incorrectly credit dividend income to profit or loss when applying the equity method. Under NAS 28, dividends from associates reduce the carrying amount of the investment — they are treated as a return of the investment, not as income. The investor's income from the associate is already captured through the share of profit line. Double-counting through dividend income overstates earnings.",
			sector: "Banking",
		},
		{
			title: "Eliminating 100% of unrealised profit instead of investor's share",
			description: "Preparers eliminate the full unrealised profit on intercompany transactions with associates instead of the investor's proportionate share. Unlike a subsidiary where 100% elimination applies in consolidation, for an associate only the investor's percentage share (e.g., 30% for a 30% stake) of unrealised profit is eliminated. This error overstates the elimination and understates reported profits.",
			sector: "Manufacturing",
		},
		{
			title: "Failing to align reporting periods between investor and associate",
			description: "Investors apply the equity method using associate financial statements that are prepared for a different reporting period without making adjustments for significant transactions in the gap period. NAS 28 requires alignment — if the associate's year-end differs, the investor must adjust for significant events occurring between the two reporting dates, up to a maximum three-month gap.",
			sector: "Listed Companies",
		},
		{
			title: "Ignoring goodwill embedded in the equity-method investment",
			description: "Investors fail to compute goodwill on acquisition of the associate (cost minus share of fair value of net assets). This goodwill is embedded in the investment carrying amount and is not amortised but is included in impairment testing. Forgetting this component means fair value adjustments for depreciable assets are also missed, leading to overstated share of profit.",
			sector: "Banking",
		},
		{
			title: "Not recognising losses beyond the investment carrying amount",
			description: "When an associate reports losses that would reduce the investment carrying amount below zero, some investors continue recognising losses — driving the investment balance negative. NAS 28.38 requires the investor to discontinue recognising losses once the investment (including long-term receivables) reaches zero. Further losses are recognised only if the investor has legal or constructive obligations to fund the associate.",
			sector: "Hydropower",
		},
	],

	relatedStandards: [
		{
			slug: "nas-27",
			nfrsNumber: "NAS 27",
			title: "Separate Financial Statements",
			reason: "NAS 27 governs how associates are accounted for in separate FS (cost, equity, or fair value option), while NAS 28 governs the equity method in consolidated FS",
		},
		{
			slug: "nfrs-10",
			nfrsNumber: "NFRS 10",
			title: "Consolidated Financial Statements",
			reason: "When an investor has control (not just significant influence), NFRS 10 applies instead of NAS 28. The boundary between associate and subsidiary depends on control assessment",
		},
		{
			slug: "nfrs-11",
			nfrsNumber: "NFRS 11",
			title: "Joint Arrangements",
			reason: "NAS 28 applies the equity method to joint ventures classified under NFRS 11. Joint operations are accounted for differently — the venturer recognises its share of assets and liabilities directly",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Impairment of equity-method investments follows NAS 36 — the entire carrying amount (including embedded goodwill) is tested as a single asset against recoverable amount",
		},
	],
};
