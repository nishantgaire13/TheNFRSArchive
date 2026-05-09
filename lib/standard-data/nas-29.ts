import type { StandardPageData } from "./types";

export const nas29: StandardPageData = {
	slug: "nas-29",
	nfrsNumber: "NAS 29",
	ifrsEquivalent: "IAS 29",
	title: "Financial Reporting in Hyperinflationary Economies",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1990-01-01",
	status: "aligned",
	heroMotif: "chart",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Applicability in Nepal",
				ifrs: "Applied when cumulative inflation over 3 years approaches or exceeds 100%. Qualitative and quantitative indicators are assessed",
				nfrs: "NAS 29 is adopted in full but has never been applicable. Nepal's inflation has remained in the 5-8% range (NRB CPI data). Cumulative 3-year inflation has never exceeded 25%",
				nepalImpact: "Purely theoretical in Nepal. No Nepali entity has ever restated financial statements under NAS 29. Standard exists for completeness and exam purposes only",
				significance: "high",
			},
			{
				topic: "General Price Index Selection",
				ifrs: "Requires use of a general price index. Entities in the same economy should use the same index for consistency",
				nfrs: "Nepal Rastra Bank publishes the National Urban Consumer Price Index (CPI). This would be the designated index if NAS 29 were ever applied. No official GDP deflator series is published with sufficient frequency",
				nepalImpact: "NRB CPI would serve as the general price index. However, Nepal lacks the statistical infrastructure for the granular monthly indices required for mid-year restatement adjustments",
				significance: "medium",
			},
			{
				topic: "Restatement of Non-Monetary Items",
				ifrs: "Non-monetary items carried at historical cost are restated using the change in the general price index from acquisition date to reporting date",
				nfrs: "Same treatment. For Nepali entities, this would require restating property, plant and equipment, inventories, equity, and retained earnings. Land revaluation (common in Nepal under NAS 16) complicates the restatement as revalued amounts replace historical cost",
				nepalImpact: "Nepali entities hold significant land and buildings at revalued amounts. If NAS 29 were applied, revalued assets already at current value would not need further restatement, but historical cost assets would require adjustment",
				significance: "medium",
			},
			{
				topic: "Monetary vs Non-Monetary Gain/Loss",
				ifrs: "Gain or loss on net monetary position is recognised in profit or loss. Holding monetary assets during inflation causes purchasing power loss",
				nfrs: "Same treatment. In Nepal, BFIs hold large net monetary asset positions (loans receivable exceed deposits in NPR terms after netting). A hyperinflationary scenario would create massive purchasing power losses for banks and gains for net borrowers",
				nepalImpact: "Nepal's BFI-dominated economy means the monetary gain/loss calculation would disproportionately affect banks. Depositors (monetary liability holders for banks) would bear implicit purchasing power losses",
				significance: "high",
			},
			{
				topic: "Comparative Period Restatement",
				ifrs: "Comparative figures are restated to current purchasing power using the general price index. All amounts are expressed in the measuring unit current at the reporting date",
				nfrs: "Same requirement. If ever applicable, Nepali entities would need to restate all prior year comparatives to Ashad-end purchasing power. This includes restating revenue, expenses, and cash flows",
				nepalImpact: "Restating Shrawan-Ashad fiscal year comparatives would require monthly CPI data aligned to the Nepali fiscal calendar — a practical challenge since NRB publishes CPI on a Gregorian calendar basis",
				significance: "low",
			},
			{
				topic: "Subsidiary in Hyperinflationary Economy",
				ifrs: "When a subsidiary operates in a hyperinflationary economy, its financial statements are restated under IAS 29 before translation under IAS 21. Resulting differences go to OCI",
				nfrs: "Same treatment. Relevant if a Nepali parent consolidates a subsidiary in a hyperinflationary economy (e.g., a Nepali bank with operations in a hyperinflationary country). No known Nepali group has faced this scenario",
				nepalImpact: "Nepali conglomerates with foreign subsidiaries (e.g., Chaudhary Group operations abroad) would need to apply NAS 29 if a subsidiary's functional currency becomes hyperinflationary. Currently theoretical",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB monitors inflation through the Consumer Price Index and maintains an inflation targeting framework of 6-7%. Nepal has never experienced hyperinflation. NRB's monetary policy explicitly targets price stability. If hyperinflationary conditions were ever approached, NRB would likely intervene with monetary tightening before NAS 29 triggers were met.",
		sebon: "SEBON has no specific guidance on hyperinflationary reporting as it has never been applicable. Listed entities on NEPSE report in nominal NPR. If NAS 29 were ever triggered, SEBON would need to issue circulars on restated financial statement filing requirements and EPS recalculation for trading purposes.",
		ird: "IRD tax computations are based on nominal NPR amounts under the Income Tax Act 2058. There is no provision for inflation-adjusted tax computation. If NAS 29 were applied for financial reporting, a significant book-tax difference would arise as IRD would continue taxing nominal amounts while financial statements reflect purchasing-power-adjusted figures.",
	},

	timeline: [
		{ date: "Jan 1990", label: "IAS 29 Effective", description: "Original standard issued for hyperinflationary economies" },
		{ date: "Jul 2018", label: "NAS 29 Effective", description: "Nepal adoption (1 Shrawan 2075 BS) — never triggered" },
		{ date: "2024", label: "Nepal Inflation 5.4%", description: "CPI inflation remains well below hyperinflationary thresholds", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Assess Hyperinflationary Indicators",
			coreQuestion: "Does the economy exhibit hyperinflationary characteristics (cumulative 100% over 3 years)?",
			nepalExample: "Nepal's CPI inflation for FY 2079/80 was 7.7%, FY 2080/81 was 5.4%, and FY 2081/82 is projected at 6.0%. Cumulative 3-year inflation ≈ 20%. This is far below the 100% threshold. NAS 29 is NOT applicable.",
			paraRef: "IAS 29.3",
		},
		{
			number: 2,
			name: "Identify Monetary vs Non-Monetary Items",
			coreQuestion: "Which items are monetary (fixed NPR amounts) and which are non-monetary (require restatement)?",
			nepalExample: "Himalayan Bank: Monetary items — cash NPR 2 crore, loans receivable NPR 500 crore, deposits payable NPR 450 crore. Non-monetary items — land NPR 10 crore (historical cost), building NPR 25 crore, equity share capital NPR 50 crore. Only non-monetary items would be restated.",
			paraRef: "IAS 29.12–14",
		},
		{
			number: 3,
			name: "Restate Non-Monetary Items",
			coreQuestion: "What conversion factor applies to each non-monetary item based on its acquisition date?",
			nepalExample: "If land was purchased in 2065 BS when CPI was 120 and current CPI is 240, the conversion factor is 240/120 = 2.0. Land at historical cost NPR 10 crore would be restated to NPR 20 crore. However, if land is carried at revalued amount (common in Nepal), restatement may not be needed if revaluation reflects current prices.",
			paraRef: "IAS 29.15–28",
		},
		{
			number: 4,
			name: "Calculate Net Monetary Gain or Loss",
			coreQuestion: "What is the purchasing power gain or loss from holding net monetary assets/liabilities?",
			nepalExample: "Nabil Bank holds net monetary assets of NPR 30 crore (loans minus deposits). If prices doubled, the real value of these monetary assets halved — a purchasing power loss of NPR 15 crore recognised in profit or loss. Conversely, a net borrower like a manufacturing company with NPR 20 crore net monetary liabilities would recognise a gain.",
			paraRef: "IAS 29.27–28",
		},
		{
			number: 5,
			name: "Restate Comparatives and Disclose",
			coreQuestion: "Have prior period comparatives been restated to current purchasing power?",
			nepalExample: "If NAS 29 were applied for Ashad-end 2082, all FY 2080/81 comparatives would be restated using the CPI movement from Ashad 2081 to Ashad 2082. Revenue of NPR 100 crore (FY 2080/81) with 8% inflation becomes NPR 108 crore in restated terms. Disclosure includes the fact of restatement, the price index used, and whether statements are at historical cost or current cost.",
			paraRef: "IAS 29.39–40",
		},
	],

	inlineExamples: {
		restatement: {
			title: "Sagarmatha Trading — Restating Historical Cost Financial Statements",
			context: "Sagarmatha Trading Ltd operates in a hypothetical scenario where Nepal experiences cumulative inflation of 110% over 3 years. CPI at the start of the 3-year period was 200, and at Ashad-end 2082 is 420. The entity holds land purchased in 2075 BS (CPI 180) at NPR 5 crore, inventory purchased 6 months ago (CPI 380) at NPR 2 crore, and share capital issued in 2070 BS (CPI 150) at NPR 10 crore. Net monetary assets are NPR 3 crore.",
			steps: [
				"Step 1 — Confirm hyperinflation: cumulative 3-year CPI increase = (420 - 200)/200 = 110%. Exceeds 100% threshold. NAS 29 applies.",
				"Step 2 — Restate land: Conversion factor = 420/180 = 2.333. Restated land = NPR 5 crore × 2.333 = NPR 11.67 crore.",
				"Step 3 — Restate inventory: Conversion factor = 420/380 = 1.105. Restated inventory = NPR 2 crore × 1.105 = NPR 2.21 crore.",
				"Step 4 — Restate equity: Conversion factor = 420/150 = 2.8. Restated share capital = NPR 10 crore × 2.8 = NPR 28 crore.",
				"Step 5 — Net monetary loss: Holding NPR 3 crore net monetary assets during 110% inflation. Purchasing power loss recognised in P&L. Exact calculation requires weighted-average approach considering timing of monetary flows.",
			],
			journalEntries: [
				"Restatement of land: Dr Land NPR 6,67,00,000 / Cr Restatement Reserve (Equity) NPR 6,67,00,000",
				"Restatement of inventory: Dr Inventory NPR 21,00,000 / Cr Restatement Reserve (Equity) NPR 21,00,000",
				"Net monetary loss: Dr Monetary Loss (P&L) NPR 3,30,00,000 / Cr Restatement Reserve (Equity) NPR 3,30,00,000",
			],
			difficulty: "medium",
		},
		foreignSub: {
			title: "Chaudhary Group — Consolidating a Foreign Subsidiary in Hyperinflationary Economy",
			context: "Chaudhary Group (Nepal) holds 100% of CG Foods Zimbabwe Ltd. Zimbabwe's economy is hyperinflationary (cumulative inflation exceeds 200%). CG Foods Zimbabwe has total assets of ZWL 500 million, revenue of ZWL 1.2 billion, and net profit of ZWL 300 million. The Zimbabwe CPI was 1,000 at the subsidiary's year-end. The exchange rate at reporting date is ZWL 1,000 = NPR 1. The parent's functional currency is NPR.",
			steps: [
				"Step 1 — Confirm Zimbabwe is hyperinflationary: cumulative inflation >200% over 3 years. NAS 29 applies to CG Foods Zimbabwe's local financial statements.",
				"Step 2 — Restate ZWL financial statements: all non-monetary items are restated to current purchasing power using Zimbabwe CPI. Revenue and expenses restated using monthly/quarterly conversion factors.",
				"Step 3 — Translate restated statements under NAS 21: all items (including comparatives) translated at the closing exchange rate (ZWL 1,000 = NPR 1). Total assets = ZWL 800 million restated ÷ 1,000 = NPR 8 lakh.",
				"Step 4 — Exchange differences from translation of restated amounts go to OCI (translation reserve), not P&L.",
				"Step 5 — Disclose in consolidated notes: the fact that subsidiary's statements were restated under NAS 29, the price index used, the level of inflation, and the exchange rate applied.",
			],
			journalEntries: [
				"Consolidation — translate restated assets: Dr Total Assets (Consolidated) NPR 8,00,000 / Cr Investment in CG Foods Zimbabwe NPR 5,00,000 / Cr Translation Reserve (OCI) NPR 3,00,000",
				"Consolidation — translate restated P&L: Dr Revenue (Consolidated) NPR 15,00,000 / Cr Net Profit (CG Zimbabwe contribution) NPR 4,50,000 / Cr Cost of Sales & Expenses NPR 10,50,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The 100% cumulative inflation over 3 years is the quantitative trigger, but IAS 29 also lists qualitative indicators: people hold wealth in non-monetary assets or foreign currency, prices quoted in a stable foreign currency, credit sales at prices compensating for expected inflation. Exam questions often test whether you can identify BOTH quantitative and qualitative factors." },
			{ source: "Exam Technique", tip: "In SBR, NAS 29/IAS 29 typically appears as a subsidiary consolidation question: parent in a stable economy, subsidiary in a hyperinflationary economy. Remember: restate first (IAS 29), then translate (IAS 21) at closing rate for ALL items including comparatives." },
			{ source: "Recurring Pattern", tip: "Monetary vs non-monetary classification is critical. Cash, receivables, payables, loans, bonds, deferred tax — all monetary. PPE, inventory, equity, goodwill, intangibles — all non-monetary. Deferred revenue can be tricky — it is non-monetary if settled by delivering goods/services." },
			{ source: "Nepal-specific", tip: "Nepal is NOT hyperinflationary and has never been. If an exam question asks about NAS 29 applicability in Nepal, the answer is always NO. Nepal's inflation has remained in the 5-8% range. The standard is adopted for completeness and for Nepali groups with foreign subsidiaries in hyperinflationary economies." },
			{ source: "Exam Technique", tip: "Net monetary gain/loss calculation: entities holding net monetary assets lose purchasing power during inflation (loss in P&L). Entities with net monetary liabilities gain (gain in P&L). Banks with large loan books suffer; heavily leveraged manufacturers benefit. This counterintuitive result is frequently tested." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates frequently confuse the treatment of revalued assets under IAS 29. If an asset is already carried at current value (e.g., fair value or revalued amount under IAS 16), no further IAS 29 restatement is needed. Only historical cost amounts require indexation." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Assuming NAS 29 is applicable in Nepal",
			description: "Students and practitioners sometimes attempt to apply NAS 29 adjustment techniques to Nepali financial statements citing rising food or fuel prices. Nepal's 5-8% inflation is nowhere near the 100% cumulative 3-year threshold. The standard is purely theoretical in the Nepali context and should not be applied.",
			sector: "All Sectors",
		},
		{
			title: "Confusing inflation adjustment with revaluation",
			description: "NAS 29 restatement (indexing historical cost to current purchasing power) is fundamentally different from NAS 16 revaluation (adjusting to fair value). They serve different purposes: IAS 29 restores comparability across time periods, while revaluation reflects market value. An asset revalued to fair value does not need further IAS 29 indexation.",
			sector: "Listed Companies",
		},
		{
			title: "Failing to identify monetary items correctly",
			description: "Deferred tax assets/liabilities are monetary items (settled in fixed NPR amounts) and should NOT be restated under NAS 29. Conversely, deferred revenue for advance service contracts is non-monetary (settled by delivering goods/services) and must be restated. Misclassification leads to incorrect net monetary gain/loss.",
			sector: "All Sectors",
		},
		{
			title: "Translating hyperinflationary subsidiary at average rate",
			description: "When consolidating a subsidiary in a hyperinflationary economy, all items (including income statement) must be translated at the closing exchange rate — NOT the average rate. This is a specific exception under NAS 21 for hyperinflationary subsidiaries. Using average rate for revenue and expenses would distort the consolidated results.",
			sector: "Conglomerates",
		},
		{
			title: "Ignoring disclosure requirements for near-hyperinflationary economies",
			description: "Even when NAS 29 is not formally triggered, entities operating in economies approaching hyperinflationary thresholds should disclose the inflation environment and its impact on financial statements. While not applicable in Nepal currently, Nepali groups with subsidiaries in high-inflation countries should monitor and disclose.",
			sector: "Multinational Groups",
		},
	],

	relatedStandards: [
		{
			slug: "nas-21",
			nfrsNumber: "NAS 21",
			title: "The Effects of Changes in Foreign Exchange Rates",
			reason: "NAS 21 governs translation of foreign subsidiary financial statements. For hyperinflationary subsidiaries, restate under NAS 29 first, then translate all items at closing rate under NAS 21",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 29 modifies the presentation of financial statements by requiring restatement to current purchasing power, overriding NAS 1 historical cost presentation for affected entities",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Assets carried at revalued amounts under NAS 16 are already at current value and do not require further NAS 29 restatement — only historical cost items need indexation",
		},
		{
			slug: "nas-34",
			nfrsNumber: "NAS 34",
			title: "Interim Financial Reporting",
			reason: "In hyperinflationary economies, interim financial statements must also be restated under NAS 29. The general price index at the interim date is used for restatement",
		},
	],
};
