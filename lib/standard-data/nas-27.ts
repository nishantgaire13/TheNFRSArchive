import type { StandardPageData } from "./types";

export const nas27: StandardPageData = {
	slug: "nas-27",
	nfrsNumber: "NAS 27",
	ifrsEquivalent: "IAS 27",
	title: "Separate Financial Statements",
	topic: "consolidation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2011-01-01",
	status: "aligned",
	heroMotif: "building",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Accounting Policy Choice for Subsidiaries",
				ifrs: "IAS 27.10 permits a parent to account for investments in subsidiaries at cost, using the equity method (per IAS 28), or at fair value through profit or loss (per IFRS 9) in its separate financial statements",
				nfrs: "Same three options available under NAS 27. In practice, most Nepali BFIs and listed holding entities use the cost method because NRB templates and SEBON filings are structured around cost-based carrying values for subsidiary investments",
				nepalImpact: "The cost method dominates in Nepal because it is simpler and avoids the complexity of equity method adjustments. However, cost-method investors may fail to detect impairment triggers in subsidiaries without active monitoring",
				significance: "high",
			},
			{
				topic: "Dividend Income from Subsidiaries",
				ifrs: "Under the cost method, dividends received from subsidiaries are recognised in profit or loss unless the dividend exceeds the subsidiary's post-acquisition comprehensive income, which may indicate impairment (IAS 27.12)",
				nfrs: "Same treatment. Nepali parent entities recognise dividend income from subsidiaries in the P&L. BFIs receiving dividends from subsidiary insurance companies or microfinance institutions must assess whether the dividend represents a return of capital",
				nepalImpact: "In Nepal, subsidiaries frequently distribute large dividends to meet parent company cash flow needs. Some BFIs have received dividends exceeding the subsidiary's cumulative post-acquisition earnings, triggering impairment analysis of the investment",
				significance: "high",
			},
			{
				topic: "Equity Method in Separate FS",
				ifrs: "IAS 27.10(b) permits the equity method in separate financial statements following the procedures in IAS 28. This option was added by amendments effective 1 January 2016",
				nfrs: "Same option available. Very few Nepali entities elect the equity method in separate FS because it requires maintaining two sets of records — equity-adjusted figures for separate FS and consolidated figures for group FS",
				nepalImpact: "ICAN guidance has not specifically promoted the equity method option. Auditors generally advise clients to use cost method for simplicity. The equity method in separate FS would require BFIs to adjust for their share of subsidiary profits quarterly, adding reporting complexity",
				significance: "medium",
			},
			{
				topic: "Fair Value Option (NFRS 9)",
				ifrs: "IAS 27.10(c) permits measurement at fair value through profit or loss per IFRS 9. This requires reliable fair value measurement and applies IFRS 9's recognition and measurement requirements",
				nfrs: "Same option available under NAS 27 read with NFRS 9. Rarely used in Nepal because most subsidiary shares are not publicly traded, making fair value determination difficult. Where subsidiaries are listed on NEPSE, fair value is observable but creates earnings volatility",
				nepalImpact: "Nepali parent entities holding subsidiaries listed on NEPSE could use quoted prices but prefer cost method to avoid quarterly P&L volatility from share price fluctuations. Unlisted subsidiaries require Level 3 valuation inputs, which most entities lack capacity to perform",
				significance: "medium",
			},
			{
				topic: "Preparation Requirement for Separate FS",
				ifrs: "IAS 27 does not require an entity to produce separate financial statements. They are voluntary unless required by local regulation (IAS 27.6)",
				nfrs: "NRB Unified Directives require all BFIs with subsidiaries to prepare both consolidated and separate financial statements. SEBON also requires listed parent entities to submit separate FS alongside consolidated FS in annual reports",
				nepalImpact: "In Nepal, separate FS are effectively mandatory for regulated entities, not voluntary. BFIs must submit separate FS to NRB for prudential assessment — capital adequacy, single borrower limits, and dividend distribution capacity are assessed on a standalone basis",
				significance: "high",
			},
			{
				topic: "Disclosure of Subsidiary Investments",
				ifrs: "IAS 27.16–17 requires disclosure of a list of significant subsidiaries, the method used to account for each, and the nature and extent of restrictions on transferring funds from subsidiaries",
				nfrs: "Same disclosures required. Additional NRB requirements for BFIs: disclose the nature of each subsidiary's business, regulatory status, and any NRB approval conditions for the subsidiary investment. SEBON requires disclosure of cross-holdings among group entities",
				nepalImpact: "Nepali group structures such as CG Group or Nabil Group have multiple subsidiaries across banking, insurance, and microfinance. Disclosure of intercompany restrictions is critical because NRB limits fund transfers between a BFI and its non-banking subsidiaries",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives require BFIs with subsidiaries to prepare separate financial statements alongside consolidated statements. Capital adequacy ratios, single borrower limits, and statutory reserve requirements are assessed on the separate (standalone) FS of the BFI. NRB must approve any investment by a BFI in a subsidiary exceeding 10% of its core capital. Dividend distribution capacity of the parent BFI is assessed using separate FS profits, not consolidated profits. NRB restricts fund transfers between a BFI parent and its non-banking subsidiaries to prevent regulatory capital arbitrage.",
		sebon: "SEBON requires listed parent entities to publish both separate and consolidated financial statements in their annual reports. SEBON's listing regulations require disclosure of all subsidiaries including their financial performance, percentage ownership, and any changes during the year. The separate FS of the parent entity are used to determine distributable profits for dividend purposes under the Companies Act 2063. SEBON monitors related-party transactions between parents and subsidiaries reported in the separate FS.",
		ird: "IRD assesses income tax on the separate entity basis — each legal entity files its own tax return regardless of group structure. Dividend income received from subsidiaries is subject to inter-corporate dividend tax at 5% under the Income Tax Act 2058 unless exempt under specific provisions. Transfer pricing provisions apply to transactions between parents and subsidiaries recorded in separate FS. Capital gains on disposal of subsidiary investments are taxable based on the carrying amount in the separate FS.",
	},

	timeline: [
		{ date: "Jan 2011", label: "IAS 27 (Revised) Effective", description: "IAS 27 revised to cover only separate financial statements after IFRS 10 took over consolidated FS requirements" },
		{ date: "Jul 2014", label: "Nepal GAAP Period", description: "Nepali entities followed Nepal Accounting Standards for standalone financial statements prior to NFRS adoption" },
		{ date: "Jul 2018", label: "NAS 27 Effective", description: "NAS 27 effective as part of full NFRS adoption for all listed and public interest entities (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 27, no carve-outs. NRB and SEBON mandate separate FS for regulated entities", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Determine Whether Separate FS Are Required",
			coreQuestion: "Is the entity required or does it elect to prepare separate financial statements?",
			nepalExample: "Nabil Bank has subsidiaries including Nabil Investment Banking Ltd and Nabil Securities Ltd. NRB requires Nabil to prepare separate FS alongside consolidated FS. Even if NFRS 10 exemption applied for consolidation, NRB would still require separate FS for prudential reporting.",
			paraRef: "IAS 27.6–8",
		},
		{
			number: 2,
			name: "Select Accounting Policy for Investments",
			coreQuestion: "Will the entity measure investments in subsidiaries, associates, and JVs at cost, equity method, or fair value?",
			nepalExample: "Himalayan Bank chooses the cost method for its investment in Himalayan Life Insurance (subsidiary). The investment is carried at original acquisition cost of NPR 45 crore. This avoids quarterly earnings volatility that the fair value option would create from NEPSE price fluctuations.",
			paraRef: "IAS 27.10",
		},
		{
			number: 3,
			name: "Recognise Dividend Income",
			coreQuestion: "How should dividends received from subsidiaries be recognised in separate FS?",
			nepalExample: "CG Group's parent entity receives a cash dividend of NPR 12 crore from its subsidiary CG Foods. Under cost method, this is recognised as income: Dr Bank NPR 12 crore / Cr Dividend Income NPR 12 crore. Management must verify cumulative dividends do not exceed post-acquisition retained earnings of CG Foods.",
			paraRef: "IAS 27.12",
		},
		{
			number: 4,
			name: "Test for Impairment of Investment",
			coreQuestion: "Are there indicators that the carrying amount of the subsidiary investment exceeds its recoverable amount?",
			nepalExample: "A BFI parent carries its investment in a microfinance subsidiary at cost of NPR 25 crore. The subsidiary has reported losses for three consecutive years and its net assets have fallen to NPR 15 crore. Impairment indicator exists — the parent applies NAS 36 to determine recoverable amount and recognises impairment loss of NPR 10 crore.",
			paraRef: "IAS 27.12, NAS 36",
		},
		{
			number: 5,
			name: "Prepare Disclosures",
			coreQuestion: "Has the entity disclosed all required information about its subsidiary investments and policy choices?",
			nepalExample: "Nabil Bank discloses: list of subsidiaries (Nabil Investment Banking, Nabil Securities), ownership percentage (100%, 51%), accounting method (cost), carrying amount (NPR 45 crore, NPR 8 crore), nature of restrictions on fund transfers (NRB limits on intercompany lending), and NRB approval details for each investment.",
			paraRef: "IAS 27.16–17",
		},
	],

	inlineExamples: {
		costMethodDividend: {
			title: "Nabil Bank — Cost Method with Dividend Income from Subsidiary",
			context: "Nabil Bank Ltd holds 100% of Nabil Investment Banking Ltd, acquired for NPR 30 crore in 2076 BS. During the year ended Ashad 2082, Nabil Investment Banking declared and paid a dividend of NPR 4 crore. Post-acquisition retained earnings of the subsidiary total NPR 18 crore. Nabil Bank prepares separate FS using the cost method.",
			steps: [
				"Step 1 — Verify accounting policy: Nabil Bank uses the cost method for subsidiary investments in separate FS. The investment is carried at acquisition cost of NPR 30,00,00,000.",
				"Step 2 — Recognise dividend income: The dividend of NPR 4,00,00,000 does not exceed cumulative post-acquisition retained earnings of NPR 18,00,00,000. Recognise as income in P&L.",
				"Step 3 — Check impairment indicators: Subsidiary's net assets (NPR 48 crore) exceed carrying amount (NPR 30 crore). No impairment indicator. No further action required.",
				"Step 4 — Disclosure: Nabil Bank discloses: subsidiary name, ownership %, cost of investment NPR 30 crore, dividend income NPR 4 crore, and NRB approval reference number for the investment.",
				"Step 5 — Tax impact: Inter-corporate dividend of NPR 4 crore is subject to 5% tax under Income Tax Act 2058. TDS of NPR 20 lakh is deducted by the subsidiary before remittance.",
			],
			journalEntries: [
				"At acquisition: Dr Investment in Subsidiary (Nabil Investment Banking) NPR 30,00,00,000 / Cr Bank NPR 30,00,00,000.",
				"Dividend received: Dr Bank NPR 3,80,00,000 / Dr TDS Receivable NPR 20,00,000 / Cr Dividend Income NPR 4,00,00,000 — dividend recognised in P&L, net of 5% TDS withheld by subsidiary.",
				"Year-end: No impairment entry required. Investment continues to be carried at cost of NPR 30,00,00,000 in the statement of financial position.",
			],
			difficulty: "medium",
		},
		impairmentOfSubsidiary: {
			title: "BFI Parent — Impairment of Investment in Loss-Making Microfinance Subsidiary",
			context: "Kantipur Development Bank holds 70% of Kantipur Microfinance Ltd, acquired for NPR 20 crore in 2077 BS. By Ashad 2082, the microfinance subsidiary has accumulated losses of NPR 12 crore, its net assets have dropped to NPR 11 crore (70% share = NPR 7.70 crore), and NRB has placed it under enhanced regulatory supervision. The parent uses the cost method in its separate FS.",
			steps: [
				"Step 1 — Identify impairment indicators: subsidiary has reported losses for four consecutive years, net assets have declined significantly, and NRB has imposed enhanced supervision. Multiple indicators exist per NAS 36.",
				"Step 2 — Determine recoverable amount: Value in use is estimated using discounted future cash flows of the subsidiary. Management projects a five-year turnaround plan discounted at 14% (Nepal risk-adjusted rate). VIU = NPR 9,50,00,000. Fair value less costs of disposal estimated at NPR 8,00,00,000 (based on recent comparable microfinance transactions). Recoverable amount = higher of the two = NPR 9,50,00,000.",
				"Step 3 — Compare with carrying amount: Carrying amount NPR 20,00,00,000 vs recoverable amount NPR 9,50,00,000. Impairment loss = NPR 10,50,00,000.",
				"Step 4 — Recognise impairment: Recognise impairment loss of NPR 10,50,00,000 in profit or loss of the parent's separate FS. This reduces the investment carrying amount to NPR 9,50,00,000.",
				"Step 5 — Regulatory impact: The impairment loss reduces the parent BFI's profit, affecting capital adequacy ratio. NRB must be notified of the write-down. The parent may need to raise additional capital if CAR falls below NRB minimum thresholds.",
				"Step 6 — Future reversal: If the subsidiary's financial position improves, impairment reversal is permitted under NAS 36 (up to original cost of NPR 20 crore). Monitor at each reporting date.",
			],
			journalEntries: [
				"Impairment recognition: Dr Impairment Loss on Investment in Subsidiary NPR 10,50,00,000 / Cr Investment in Subsidiary (Kantipur Microfinance) NPR 10,50,00,000.",
				"Tax effect (if applicable): Dr Deferred Tax Asset NPR 2,62,50,000 / Cr Tax Benefit NPR 2,62,50,000 — at 25% rate, if the entity expects to realise the tax benefit from the impairment loss against future taxable profits. Subject to IRD acceptance.",
				"Subsequent reversal (if conditions improve in future year): Dr Investment in Subsidiary NPR X / Cr Reversal of Impairment Loss NPR X — limited to original cost of NPR 20,00,00,000.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Separate FS questions typically require you to contrast the cost method with the equity method. Know that under cost method, only dividends received affect P&L, while under equity method, the investor's share of the subsidiary's profit is recognised — leading to different reported profits in the parent's separate FS." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates often confuse separate financial statements with consolidated financial statements. Remember: NAS 27 governs SEPARATE (individual entity) FS only. NFRS 10 governs consolidated FS. A parent may need to prepare both, and the accounting treatment of subsidiary investments differs between them." },
			{ source: "Exam Technique", tip: "When a question specifies 'separate financial statements', do NOT consolidate. Under the cost method, show the investment as a single line item at cost and recognise only dividend income. Under equity method, adjust the investment balance for the investor's share of profit and other comprehensive income." },
			{ source: "Recurring Pattern", tip: "Impairment of subsidiary investments in separate FS is a favourite exam topic. The impairment test follows NAS 36: compare carrying amount with recoverable amount (higher of VIU and FVLCD). A dividend exceeding post-acquisition profits is an impairment indicator, not an impairment per se." },
			{ source: "Nepal-specific", tip: "NRB requires BFIs to prepare separate FS and assesses capital adequacy on a standalone basis. In exam scenarios involving Nepali banks, separate FS are mandatory, not optional. Impairment of subsidiary investments directly impacts the parent BFI's regulatory capital ratios." },
			{ source: "Exam Technique", tip: "If asked to prepare extracts of separate FS, present: (1) Investment in subsidiaries at cost or equity-adjusted amount in the statement of financial position, (2) Dividend income or share of profit in the income statement, (3) Detailed disclosures of subsidiaries in notes. Always state the accounting policy chosen." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Dividends exceeding post-acquisition profits not investigated",
			description: "Parent entities receive large dividends from subsidiaries and recognise full dividend income without checking whether cumulative dividends exceed the subsidiary's post-acquisition retained earnings. When dividends exceed post-acquisition profits, this may indicate a return of capital and trigger impairment assessment of the investment under NAS 36.",
			sector: "Banking",
		},
		{
			title: "Confusing separate FS treatment with consolidated FS treatment",
			description: "Preparers apply consolidation adjustments (elimination of intercompany balances, goodwill recognition) in separate financial statements. In separate FS, the subsidiary investment appears as a single line item — no consolidation adjustments are made. This error is common when a single accounting team prepares both sets of statements.",
			sector: "Listed Companies",
		},
		{
			title: "Failing to impair subsidiary investments when indicators exist",
			description: "Parent entities continue to carry subsidiary investments at historical cost even when the subsidiary has reported sustained losses, net assets have declined below cost, or the subsidiary faces regulatory action. NAS 36 requires impairment testing whenever indicators exist. BFI parents with loss-making microfinance or insurance subsidiaries are particularly prone to this error.",
			sector: "Banking",
		},
		{
			title: "Inconsistent accounting policy across subsidiary investments",
			description: "An entity uses the cost method for some subsidiary investments and the equity method for others without a clear rationale. NAS 27 requires the same accounting policy for each category of investment (subsidiaries, associates, JVs). An entity cannot selectively apply different methods to different subsidiaries within the same category.",
			sector: "Conglomerates",
		},
		{
			title: "Omitting NRB-required disclosures for subsidiary investments",
			description: "BFIs disclose the minimum required by NAS 27 but omit NRB-mandated disclosures such as: NRB approval reference for the subsidiary investment, restrictions on fund transfers between parent and subsidiary, and the regulatory status of each subsidiary. These omissions lead to qualified audit observations and NRB supervisory letters.",
			sector: "Banking",
		},
	],

	relatedStandards: [
		{
			slug: "nas-28",
			nfrsNumber: "NAS 28",
			title: "Investments in Associates and Joint Ventures",
			reason: "NAS 27 permits the equity method (per NAS 28) as one of three measurement options for subsidiary investments in separate FS",
		},
		{
			slug: "nfrs-10",
			nfrsNumber: "NFRS 10",
			title: "Consolidated Financial Statements",
			reason: "NFRS 10 governs consolidated FS while NAS 27 governs separate FS — a parent with subsidiaries typically prepares both",
		},
		{
			slug: "nfrs-3",
			nfrsNumber: "NFRS 3",
			title: "Business Combinations",
			reason: "The initial cost of a subsidiary investment in separate FS is determined by the acquisition-date consideration transferred under NFRS 3",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Investments in subsidiaries carried at cost in separate FS must be tested for impairment under NAS 36 when indicators exist",
		},
	],
};
