import type { StandardPageData } from "./types";

export const nfrs10: StandardPageData = {
	slug: "nfrs-10",
	nfrsNumber: "NFRS 10",
	ifrsEquivalent: "IFRS 10",
	title: "Consolidated Financial Statements",
	topic: "consolidation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2013-01-01",
	status: "aligned",
	heroMotif: "hierarchy",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","ACCA AAA","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Control Definition — Power + Returns + Linkage",
				ifrs: "IFRS 10.5–9 defines control as: (a) power over the investee, (b) exposure to variable returns, and (c) ability to use power to affect returns. All three must be present simultaneously",
				nfrs: "Same three-element control definition. Nepal does not modify the control model — power, variable returns, and the linkage between them must all exist",
				nepalImpact: "The control model is well understood for straightforward majority-owned subsidiaries (common in Nepal). Challenges arise with complex structures: BFI group structures where NRB-imposed restrictions may limit the parent's ability to direct the subsidiary's relevant activities despite holding >50% voting rights",
				significance: "high",
			},
			{
				topic: "De Facto Control — Less Than 50% Voting Rights",
				ifrs: "IFRS 10.B41–B46 acknowledges that an investor can have power with less than a majority of voting rights (de facto control) if other vote-holders' interests are dispersed and passive",
				nfrs: "Same principle applies. De facto control assessment considers: relative size of the investor's holding, dispersion of other shareholders' holdings, contractual arrangements, and voting patterns at previous AGMs",
				nepalImpact: "De facto control situations arise in Nepal with promoter groups holding 40–49% of a listed company where remaining shares are dispersed among thousands of retail investors. At AGMs, retail investor attendance is typically low, giving the promoter effective control. SEBON monitors such arrangements for investor protection",
				significance: "medium",
			},
			{
				topic: "Structured Entities (SPEs)",
				ifrs: "IFRS 10.B2–B4 addresses entities designed so that voting rights are not the dominant factor — control is assessed through contractual arrangements, involvement in design, and exposure to variability of returns",
				nfrs: "Same assessment framework for structured entities. Nepal's use of structured entities is limited compared to developed markets, but some arrangements exist",
				nepalImpact: "Structured entity-like arrangements in Nepal include: trust-based employee benefit schemes controlled by the sponsoring BFI, special purpose vehicles created for infrastructure project financing (e.g., hydropower SPVs), and NRB-mandated Deprived Sector Lending funds that may need consolidation assessment. These are not common but appear in complex BFI group structures",
				significance: "low",
			},
			{
				topic: "Consolidation Procedures — Elimination of Intra-group",
				ifrs: "IFRS 10.B86 requires elimination of intra-group assets, liabilities, equity, income, expenses, and cash flows in full. Unrealised intra-group profits must be eliminated completely",
				nfrs: "Same requirement for full elimination. In Nepal, BFI groups with subsidiary banks, insurance companies, and finance companies must eliminate inter-company deposits, loans, guarantee fees, and dividend income",
				nepalImpact: "BFI group consolidation is complex: a parent bank may place deposits with a subsidiary finance company, which then lends to customers. The deposit, interest income/expense, and any impairment must all be eliminated. NRB reviews consolidated financial statements of BFI groups for regulatory capital adequacy on a consolidated basis",
				significance: "high",
			},
			{
				topic: "Non-controlling Interests (NCI)",
				ifrs: "IFRS 10.B94–B96 requires NCI to be presented within equity, separately from parent's equity. Profit or loss and each component of OCI must be attributed to parent and NCI even if this results in NCI having a deficit balance",
				nfrs: "Same treatment of NCI. Losses can be allocated to NCI even if the NCI balance becomes negative — this changed from the old NAS 27 approach where losses were capped at the NCI's share of equity",
				nepalImpact: "NCI deficits occur in Nepal when loss-making subsidiaries continue to operate — common in BFI groups where NRB requires minimum capitalisation but a subsidiary may be reporting losses. Entities transitioning from old NAS 27 had to adjust for previously unrecognised losses allocated to minority shareholders",
				significance: "medium",
			},
			{
				topic: "Investment Entity Exemption",
				ifrs: "IFRS 10.27–33 exempts investment entities from consolidation — they measure subsidiaries at fair value through profit or loss instead. An entity must meet all three criteria: obtains funds for investment, commits to invest solely for capital appreciation/income, and measures performance on a fair value basis",
				nfrs: "Same investment entity exemption available. However, this exemption has very limited practical application in Nepal",
				nepalImpact: "Nepal has very few entities that would qualify as investment entities under the strict three-criteria test. Merchant banking arms of BFIs (e.g., NMB Capital, Siddhartha Capital) are typically subsidiaries of commercial banks and do not meet all three criteria. Private equity and venture capital are nascent in Nepal — the exemption is rarely applied in practice",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires all BFIs with subsidiaries to prepare consolidated financial statements in addition to standalone financial statements. NRB Unified Directives mandate consolidated supervision — regulatory capital adequacy ratios (CAR) must be computed on both standalone and consolidated bases, with the lower ratio being binding. NRB reviews group structures to identify entities that should be consolidated, including entities created for deprived sector lending mandates. BFI mergers directed by NRB (particularly among finance companies and development banks) require careful consolidation accounting in the year of merger. NRB also requires disclosure of group structure diagrams showing all subsidiaries and their ownership percentages.",
		sebon: "SEBON requires listed parent entities to publish both standalone and consolidated annual audited financial statements. SEBON listing regulations mandate that consolidated financial statements be prepared in accordance with NFRS 10. For group structures where the parent is not listed but a subsidiary is, SEBON may request consolidated information during its annual report examination. SEBON has issued guidance emphasising that material intra-group transactions must be disclosed even in standalone financials (related party disclosure under NAS 24).",
		ird: "IRD assesses income tax on a standalone entity basis — Nepal does not have a tax consolidation regime. Each entity in a group files separate tax returns under the Income Tax Act 2058. However, IRD uses consolidated financial statements for transfer pricing analysis of intra-group transactions (management fees, inter-company loans, service charges) to ensure these are at arm's length. Dividends received from subsidiaries are subject to dividend distribution tax provisions, and the interaction between subsidiary-level tax and parent-level dividend taxation creates planning complexities.",
	},

	timeline: [
		{ date: "May 2011", label: "IFRS 10 Issued", description: "IASB issued IFRS 10 replacing the consolidation parts of IAS 27" },
		{ date: "Jan 2013", label: "IFRS 10 Effective", description: "IFRS 10 became effective globally" },
		{ date: "Jul 2018", label: "NFRS 10 Effective", description: "NFRS 10 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "2018–2024", label: "BFI Consolidation Wave", description: "NRB-directed mergers of development banks and finance companies triggered complex consolidation exercises" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 10, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Assess Whether Control Exists",
			coreQuestion: "Does the investor have power over the investee, exposure to variable returns, and ability to use power to affect those returns?",
			nepalExample: "Nabil Bank holds 70% of Nabil Investment Banking Ltd. Power: Nabil appoints 5 of 7 board members and directs investment strategy. Variable returns: Nabil receives dividends, management fees, and benefits from cross-selling. Linkage: Nabil's board-appointed directors direct the subsidiary's relevant activities (investment decisions) that affect returns. All three elements present — control exists.",
			paraRef: "IFRS 10.5–9",
		},
		{
			number: 2,
			name: "Identify All Subsidiaries in the Group",
			coreQuestion: "Which entities are controlled directly or indirectly by the parent?",
			nepalExample: "Nepal Investment Mega Bank group structure: parent holds 80% of NI Capital (direct subsidiary), 60% of NI Life Insurance (direct subsidiary), and NI Capital holds 55% of NI Microfinance (indirect subsidiary through NI Capital). All three are subsidiaries that must be consolidated. NRB requires a group structure diagram in the annual report.",
			paraRef: "IFRS 10.B2–B4",
		},
		{
			number: 3,
			name: "Perform Consolidation — Combine and Eliminate",
			coreQuestion: "How do you combine the financial statements line by line and eliminate intra-group transactions?",
			nepalExample: "Himalayan Bank consolidates its subsidiary Himalayan General Insurance: combine assets line by line (bank assets NPR 2,50,000 crore + insurance assets NPR 5,800 crore). Eliminate: inter-company deposit of NPR 200 crore (asset in insurance, liability in bank), dividend income of NPR 15 crore received by bank from insurance (eliminated against subsidiary's equity), and management fee of NPR 2 crore (revenue for bank, expense for insurance — eliminated on consolidation).",
			paraRef: "IFRS 10.B86–B87",
		},
		{
			number: 4,
			name: "Calculate and Present Non-controlling Interests",
			coreQuestion: "What is the NCI's share of the subsidiary's net assets and profit or loss?",
			nepalExample: "Sanima Bank holds 75% of Sanima Life Insurance. Subsidiary's net assets at year-end: NPR 800 crore. NCI (25%) share of net assets: NPR 200 crore — presented within equity, separate from parent's equity. Subsidiary's profit for the year: NPR 120 crore. NCI share of profit: NPR 30 crore — shown separately in the consolidated statement of profit or loss. Even if the subsidiary were loss-making, the full 25% loss is allocated to NCI.",
			paraRef: "IFRS 10.B94–B96",
		},
		{
			number: 5,
			name: "Account for Changes in Ownership Without Loss of Control",
			coreQuestion: "How do you account for additional purchases or partial disposals while retaining control?",
			nepalExample: "Kumari Bank acquires an additional 10% in its subsidiary Kumari Capital (from 70% to 80%) for NPR 50 crore. The subsidiary's total net assets are NPR 400 crore, so 10% = NPR 40 crore book value. The difference (NPR 50 crore paid − NPR 40 crore book value = NPR 10 crore premium) is deducted from parent's equity. No goodwill arises — changes in ownership without loss of control are equity transactions.",
			paraRef: "IFRS 10.23, B96",
		},
	],

	inlineExamples: {
		basicConsolidation: {
			title: "Nabil Bank — Consolidation of Wholly-owned Subsidiary",
			context: "Nabil Bank Ltd acquired 100% of Nabil Investment Banking Ltd three years ago for NPR 150 crore. At acquisition, Nabil Investment's identifiable net assets had a fair value of NPR 120 crore, giving rise to goodwill of NPR 30 crore. At the current year-end (Ashad 2082), Nabil Investment's net assets are NPR 180 crore and profit for the year is NPR 25 crore. During the year, Nabil Investment paid a dividend of NPR 8 crore to Nabil Bank, and Nabil Bank charged a management fee of NPR 3 crore to Nabil Investment.",
			steps: [
				"Step 1 — Combine line by line: add Nabil Bank's assets and Nabil Investment's assets line by line. Add liabilities line by line. Do not include the parent's 'investment in subsidiary' (NPR 150 crore) — replace it with the subsidiary's individual assets and liabilities.",
				"Step 2 — Recognise goodwill: cost of investment NPR 150 crore − fair value of net assets at acquisition NPR 120 crore = goodwill NPR 30 crore. Test goodwill for impairment annually per NAS 36. Assume no impairment — goodwill remains at NPR 30 crore in consolidated balance sheet.",
				"Step 3 — Eliminate intra-group dividend: Nabil Bank recorded dividend income of NPR 8 crore from Nabil Investment. Eliminate: Dr Dividend Income NPR 8 crore / Cr Retained Earnings (subsidiary) NPR 8 crore. This prevents double-counting — the subsidiary's profit is already consolidated line by line.",
				"Step 4 — Eliminate management fee: Nabil Bank recorded fee income NPR 3 crore, Nabil Investment recorded management expense NPR 3 crore. Consolidation elimination: Dr Fee Income NPR 3 crore / Cr Management Expense NPR 3 crore. Net effect on consolidated profit: nil.",
				"Step 5 — No NCI: Nabil Bank holds 100%, so no non-controlling interest exists. All of Nabil Investment's profit (NPR 25 crore) is attributed to the parent.",
				"Step 6 — Consolidated equity: Parent's share capital + parent's retained earnings + post-acquisition retained earnings of subsidiary (NPR 180 crore − NPR 120 crore = NPR 60 crore post-acquisition increase) + goodwill NPR 30 crore.",
			],
			journalEntries: [
				"Elimination of investment: Dr Share Capital (subsidiary) NPR 50 crore / Dr Retained Earnings at acquisition (subsidiary) NPR 70 crore / Dr Goodwill NPR 30 crore / Cr Investment in Subsidiary NPR 150 crore",
				"Elimination of intra-group dividend: Dr Dividend Income (parent P&L) NPR 8,00,00,000 / Cr Dividend Paid (subsidiary equity) NPR 8,00,00,000",
				"Elimination of management fee: Dr Management Fee Income (parent P&L) NPR 3,00,00,000 / Cr Management Expense (subsidiary P&L) NPR 3,00,00,000",
			],
			difficulty: "medium",
		},
		nciAndPartialOwnership: {
			title: "Sanima Bank — Consolidation with Non-controlling Interest",
			context: "Sanima Bank Ltd holds 75% of Sanima Life Insurance Ltd, acquired two years ago for NPR 225 crore when the subsidiary's identifiable net assets had a fair value of NPR 280 crore. NCI was measured at its proportionate share of net assets (NCI's 25% × NPR 280 crore = NPR 70 crore). Goodwill: NPR 225 crore − 75% × NPR 280 crore = NPR 15 crore. At current year-end, the subsidiary's net assets are NPR 350 crore and profit for the year is NPR 45 crore. During the year, the subsidiary paid an intra-group reinsurance premium of NPR 5 crore to an entity within the consolidated group.",
			steps: [
				"Step 1 — Combine line by line: add all assets and liabilities of Sanima Bank and Sanima Life Insurance. Eliminate the parent's investment in subsidiary (NPR 225 crore) and replace with the subsidiary's net assets plus goodwill.",
				"Step 2 — Calculate NCI at year-end: NCI share of subsidiary's current net assets = 25% × NPR 350 crore = NPR 87.5 crore. Present within equity, separately from parent's equity in the consolidated balance sheet.",
				"Step 3 — Allocate profit to parent and NCI: Subsidiary profit NPR 45 crore — parent's share 75% = NPR 33.75 crore, NCI share 25% = NPR 11.25 crore. Both amounts shown separately in the consolidated statement of profit or loss.",
				"Step 4 — Eliminate intra-group reinsurance premium: Dr Insurance Premium Income (group entity) NPR 5 crore / Cr Insurance Premium Expense (Sanima Life) NPR 5 crore. The consolidated group should not show revenue and expense for transactions between group members.",
				"Step 5 — Goodwill impairment test: Goodwill of NPR 15 crore allocated to the Sanima Life CGU. Compare recoverable amount (value in use based on future cash flows from insurance operations) with carrying amount. If recoverable amount exceeds carrying amount, no impairment.",
				"Step 6 — Present consolidated equity: parent's equity + goodwill NPR 15 crore + post-acquisition retained earnings (parent's 75% share of NPR 70 crore increase = NPR 52.5 crore). NCI presented separately at NPR 87.5 crore.",
			],
			journalEntries: [
				"Elimination of investment and recognition of NCI and goodwill: Dr Share Capital (subsidiary) / Dr Retained Earnings at acquisition (subsidiary) / Dr Goodwill NPR 15,00,00,000 / Cr Investment in Subsidiary NPR 225,00,00,000 / Cr NCI (at acquisition) NPR 70,00,00,000",
				"Allocation of current year profit to NCI: Dr Profit attributable to NCI (consolidated P&L) NPR 11,25,00,000 / Cr NCI (consolidated equity) NPR 11,25,00,000",
				"Elimination of intra-group reinsurance: Dr Insurance Premium Income NPR 5,00,00,000 / Cr Insurance Premium Expense NPR 5,00,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The three elements of control (power, variable returns, linkage) are tested in every SBR sitting. For straightforward majority ownership, state all three briefly. For complex scenarios (de facto control, potential voting rights, structured entities), analyse each element separately with evidence." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates lose marks by not eliminating ALL intra-group transactions. Common items missed: management fees, intra-group interest, guarantee fees, and unrealised profit on inventory sold between group members. Create a checklist: dividends, interest, fees, goods/services, unrealised inventory profit." },
			{ source: "Exam Technique", tip: "NCI can be measured at either fair value (full goodwill method) or proportionate share of net assets (partial goodwill method) at acquisition date — this is a one-time election per business combination. Know how each method affects goodwill and subsequent impairment testing." },
			{ source: "Recurring Pattern", tip: "Changes in ownership without loss of control are equity transactions — no goodwill, no gain/loss in P&L. The difference between consideration and book value of NCI acquired/disposed goes to parent's equity. This is commonly tested with step-up acquisitions (e.g., 60% to 80%)." },
			{ source: "Nepal-specific", tip: "NRB requires consolidated financial statements for BFI groups and computes consolidated capital adequacy. In Nepal-context questions, note that NRB may direct mergers of weaker BFIs — the acquirer must apply NFRS 3 (business combination) and NFRS 10 (consolidation) simultaneously. Also note Nepal has no tax consolidation — each entity files separately with IRD." },
			{ source: "Exam Technique", tip: "Loss of control triggers deconsolidation: derecognise subsidiary's assets, liabilities, NCI, and goodwill. Recognise any retained interest at fair value. Any gain/loss goes to P&L. This is a complete 'deemed disposal and reacquisition' — do not simply adjust the NCI percentage." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Failure to consolidate controlled entities",
			description: "Parent entities fail to consolidate subsidiaries where they hold majority voting rights, sometimes claiming the subsidiary operates independently or in a different sector (e.g., a bank not consolidating its insurance subsidiary). NFRS 10 has no exemption based on dissimilar activities — all controlled entities must be consolidated regardless of industry. NRB specifically requires BFIs to consolidate all subsidiaries including non-financial subsidiaries.",
			sector: "Banking & Finance",
		},
		{
			title: "Intra-group transactions not fully eliminated",
			description: "Groups eliminate inter-company dividends but fail to eliminate other intra-group transactions: management fees charged by parent to subsidiaries, interest on inter-company loans, guarantee fees for credit enhancements, and unrealised profit on goods sold between group members. Every rupee of intra-group revenue in one entity must be eliminated against the corresponding expense in the other entity.",
			sector: "Listed Companies",
		},
		{
			title: "Goodwill not tested for impairment annually",
			description: "Entities carry goodwill from business combinations at cost indefinitely without performing the annual impairment test required by NAS 36. Goodwill must be allocated to cash-generating units and tested at least annually — more frequently if indicators of impairment exist. In Nepal's post-merger BFI environment, deteriorating asset quality of acquired entities may trigger impairment that management is reluctant to recognise.",
			sector: "Banking & Finance",
		},
		{
			title: "NCI losses capped at zero under old NAS 27 practice",
			description: "Entities continue the pre-NFRS 10 practice of limiting loss allocation to NCI to the extent of NCI's equity balance, with excess losses allocated entirely to the parent. Under NFRS 10, losses must be allocated to NCI in proportion to their ownership percentage even if the NCI balance becomes negative. This change from old NAS 27 was not retrospectively adjusted by some entities during NFRS transition.",
			sector: "Listed Companies",
		},
		{
			title: "De facto control situations not identified",
			description: "Entities holding 40–49% of voting rights with dispersed remaining holdings fail to assess whether de facto control exists. In Nepal, where retail shareholding is highly fragmented and AGM attendance by minority shareholders is low, a 45% holding with no other significant shareholder often constitutes de facto control. The entity should consolidate rather than equity-account, but management may prefer the equity method to avoid balance sheet grossing-up.",
			sector: "Listed Companies",
		},
	],

	relatedStandards: [
		{
			slug: "nas-27",
			nfrsNumber: "NAS 27",
			title: "Separate Financial Statements",
			reason: "NAS 27 governs standalone financial statements where investments in subsidiaries are carried at cost or fair value — NFRS 10 governs the consolidated financial statements that replace this with line-by-line combination",
		},
		{
			slug: "nas-28",
			nfrsNumber: "NAS 28",
			title: "Investments in Associates and Joint Ventures",
			reason: "When an investor does not have control (only significant influence or joint control), NAS 28 applies instead of NFRS 10 — the boundary between control and significant influence determines whether to consolidate or equity-account",
		},
		{
			slug: "nfrs-3",
			nfrsNumber: "NFRS 3",
			title: "Business Combinations",
			reason: "NFRS 3 governs the acquisition accounting (purchase price allocation, goodwill recognition, fair value of net assets) that precedes consolidation under NFRS 10",
		},
		{
			slug: "nfrs-12",
			nfrsNumber: "NFRS 12",
			title: "Disclosure of Interests in Other Entities",
			reason: "NFRS 12 prescribes the disclosures required for interests in subsidiaries consolidated under NFRS 10, including the nature and extent of significant restrictions and risks associated with interests in consolidated entities",
		},
	],
};
