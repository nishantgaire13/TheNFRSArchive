import type { StandardPageData } from "./types";

export const nas41: StandardPageData = {
	slug: "nas-41",
	nfrsNumber: "NAS 41",
	ifrsEquivalent: "IAS 41",
	title: "Agriculture",
	topic: "industry",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2003-01-01",
	status: "aligned",
	heroMotif: "leaf",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Scope — Biological Assets",
				ifrs: "IAS 41 applies to biological assets, agricultural produce at the point of harvest, and government grants related to biological assets (IAS 41.1)",
				nfrs: "Same scope. In Nepal, biological assets include tea bushes in Ilam, sugarcane in the Terai, and livestock (cattle, poultry, goats). Post-harvest processing (e.g., tea leaves to processed tea) falls under NAS 2 Inventories",
				nepalImpact: "Agriculture contributes approximately 25% of Nepal's GDP. Many agricultural entities are unorganised or cooperative-based, limiting the practical reach of NAS 41 to larger commercial farms, tea estates, and sugar mills",
				significance: "high",
			},
			{
				topic: "Fair Value Measurement of Biological Assets",
				ifrs: "IAS 41 requires biological assets to be measured at fair value less costs to sell, unless fair value cannot be measured reliably on initial recognition (IAS 41.12–13, 30)",
				nfrs: "Same requirement. However, active markets for many biological assets in Nepal are limited or non-existent. For example, there is no organised spot market for standing tea bushes or immature sugarcane. Entities must use Level 2 or Level 3 inputs under NFRS 13",
				nepalImpact: "Fair value measurement is the single largest challenge for Nepali agricultural entities. Valuers with agricultural expertise are scarce. Many entities default to cost less accumulated depreciation for bearer plants, citing the fair value reliability exception",
				significance: "high",
			},
			{
				topic: "Bearer Plants vs Agricultural Produce",
				ifrs: "Bearer plants (e.g., tea bushes, fruit trees) are accounted for under IAS 16 after maturity. Only the produce growing on bearer plants remains under IAS 41 (IAS 41.5A)",
				nfrs: "Same distinction. Tea bushes in Ilam estates are PPE under NAS 16 once mature. Tea leaves (the produce) are measured at fair value less costs to sell at the point of harvest under NAS 41, then transferred to NAS 2 for processing",
				nepalImpact: "Nepali tea estates historically treated entire plantations as a single biological asset. The bearer plant amendment required reclassification of mature tea bushes to PPE, creating significant transition adjustments for companies like Nepal Tea Development Corporation",
				significance: "high",
			},
			{
				topic: "Government Grants for Agriculture",
				ifrs: "Government grants related to biological assets measured at fair value less costs to sell are recognised as income when the grant becomes receivable (IAS 41.34). No conditions-based deferral as in IAS 20",
				nfrs: "Same treatment. Nepal government provides subsidies for improved seeds, livestock breeding, and irrigation through the Ministry of Agriculture. Grants must be recognised in profit or loss when receivable, cross-referenced to NAS 20 for non-biological asset grants",
				nepalImpact: "Agricultural subsidies are common but documentation is often informal. Entities struggle to determine the point when a grant becomes 'receivable' because government disbursement timelines are unpredictable. Some entities recognise grants on a cash basis, which conflicts with NAS 41",
				significance: "medium",
			},
			{
				topic: "Gain or Loss on Initial Recognition",
				ifrs: "A gain or loss arising on initial recognition of a biological asset at fair value less costs to sell, and from a change in fair value less costs to sell, is included in profit or loss (IAS 41.26)",
				nfrs: "Same treatment. Unrealised gains from biological transformation (e.g., growth of sugarcane, weight gain of livestock) are recognised in the income statement. This can cause significant profit volatility for Nepali agricultural entities",
				nepalImpact: "IRD does not accept unrealised biological gains as taxable income under the Income Tax Act 2058. This creates a temporary difference requiring deferred tax accounting under NAS 12. Many entities fail to recognise the deferred tax liability on fair value gains",
				significance: "medium",
			},
			{
				topic: "Disclosure Requirements",
				ifrs: "IAS 41 requires extensive disclosures including description of biological assets, methods and assumptions for fair value, reconciliation of carrying amounts, and restrictions on biological assets (IAS 41.40–57)",
				nfrs: "Same disclosure requirements. Nepali entities must disclose the nature and extent of biological assets, valuation techniques used, and any government grants recognised. Disclosures for livestock include herd size, mortality rates, and breeding programme details",
				nepalImpact: "Disclosure quality is generally poor among Nepali agricultural entities. Many provide only a single-line description of biological assets without the required reconciliation or fair value hierarchy disclosures mandated by NAS 41 read with NFRS 13",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB does not directly regulate agricultural entities, but BFIs lending to the agriculture sector must assess the fair value of biological assets pledged as collateral. NRB's Unified Directives require agricultural lending portfolios to be classified under priority sector lending (minimum 15% of total lending). BFIs must evaluate impairment of agricultural loans considering crop failure risk and seasonal cash flow patterns.",
		sebon: "SEBON requires listed agricultural companies to disclose the nature and fair value of biological assets in quarterly and annual filings. Sugar mills listed on NEPSE (e.g., Lumbini Sugar Mills) must provide harvest-season production data and sugarcane procurement volumes. SEBON has noted deficiencies in biological asset disclosures in its annual review of listed entity financial statements.",
		ird: "IRD does not tax unrealised gains on biological assets. Income from agriculture is taxable under the Income Tax Act 2058 — commercial farming income is subject to a concessional rate of 15% for entities registered as agricultural enterprises. Subsidies and grants received from the government for agricultural purposes are treated as taxable income unless specifically exempt. Depreciation on bearer plants follows the rates prescribed in Schedule 2 of the Income Tax Act.",
	},

	timeline: [
		{ date: "Jan 2003", label: "IAS 41 Effective", description: "IAS 41 Agriculture became effective globally" },
		{ date: "Jan 2016", label: "Bearer Plant Amendment", description: "Amendment to IAS 41 to exclude bearer plants from its scope, moving them to IAS 16" },
		{ date: "Jul 2018", label: "NAS 41 Effective", description: "NAS 41 effective as part of full NFRS adoption in Nepal (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 41, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify Biological Assets and Agricultural Produce",
			coreQuestion: "Does the entity control a living animal or plant as a result of past events, and is future economic benefit probable?",
			nepalExample: "Ilam Tea Estate Ltd manages 200 hectares of tea plantations and a herd of 50 dairy cattle. The tea bushes (bearer plants) fall under NAS 16, the tea leaves (produce) fall under NAS 41 at harvest, and the dairy cattle (consumable biological assets) are measured under NAS 41 throughout their life.",
			paraRef: "IAS 41.5–11",
		},
		{
			number: 2,
			name: "Measure Biological Assets at Fair Value Less Costs to Sell",
			coreQuestion: "Can fair value be measured reliably? If so, what valuation inputs are available?",
			nepalExample: "Terai Sugarcane Cooperative measures standing sugarcane at NPR 2,85 lakh per bigha based on Nepal Sugar Mills Association procurement prices less estimated harvesting and transport costs of NPR 15,000 per bigha. No active market exists for standing cane, so the entity uses Level 2 inputs — observable prices of harvested sugarcane adjusted for growth stage.",
			paraRef: "IAS 41.12–16",
		},
		{
			number: 3,
			name: "Recognise Gains and Losses from Fair Value Changes",
			coreQuestion: "Has the fair value less costs to sell of the biological asset changed since last measurement?",
			nepalExample: "Himalayan Livestock Pvt Ltd holds 500 goats for commercial sale. At Shrawan 1, the herd was valued at NPR 62,50,000. At Ashad-end, the herd (now 520 goats after births and deaths) is valued at NPR 70,20,000. The gain of NPR 7,70,000 (from price changes, natural growth, and births net of deaths) is recognised in profit or loss.",
			paraRef: "IAS 41.26–29",
		},
		{
			number: 4,
			name: "Account for Agricultural Produce at Harvest",
			coreQuestion: "What is the fair value less costs to sell of produce at the point of harvest?",
			nepalExample: "Ilam Tea Estate harvests 4,000 kg of green tea leaves in Baisakh. Fair value at the point of plucking is NPR 180 per kg (based on Kolkata auction prices adjusted for Nepali orthodox tea premium) less costs to sell of NPR 12 per kg. Produce is recognised at NPR 6,72,000 (4,000 kg x NPR 168). Post-harvest, the leaves move to NAS 2 as inventory for processing.",
			paraRef: "IAS 41.13, 32",
		},
		{
			number: 5,
			name: "Recognise Government Grants and Disclose",
			coreQuestion: "Has the entity received or become entitled to government grants related to biological assets measured at fair value?",
			nepalExample: "Nepal Government provides a subsidy of NPR 8,00,000 to Karnali Dairy Farm for improved cattle breeds under the Prime Minister Agriculture Modernization Programme. The grant is unconditional and receivable upon delivery of cattle. Dr Grant Receivable NPR 8,00,000 / Cr Government Grant Income NPR 8,00,000 — recognised immediately in profit or loss per NAS 41.34. Full disclosure of grant terms is required in the notes.",
			paraRef: "IAS 41.34–38, 57",
		},
	],

	inlineExamples: {
		biologicalAssetFairValue: {
			title: "Terai Sugarcane Mills — Fair Value of Standing Sugarcane Crop",
			context: "Terai Sugarcane Mills Ltd operates 500 bigha of sugarcane farmland in Sarlahi district. At Ashad-end 2082, the sugarcane is 8 months into a 12-month growing cycle. The Nepal Sugar Mills Association published a procurement price of NPR 545 per quintal for mature sugarcane. Expected yield is 350 quintals per bigha. Costs to sell include harvesting cost of NPR 8,000 per bigha and transport cost of NPR 3,500 per bigha. The crop was valued at NPR 7,20,00,000 at the beginning of the year.",
			steps: [
				"Step 1 — Estimate fair value at maturity: 500 bigha x 350 quintals x NPR 545 = NPR 9,53,75,000.",
				"Step 2 — Deduct costs to sell: harvesting NPR 8,000 x 500 = NPR 40,00,000 + transport NPR 3,500 x 500 = NPR 17,50,000 = NPR 57,50,000 total.",
				"Step 3 — Fair value less costs to sell at maturity: NPR 9,53,75,000 - NPR 57,50,000 = NPR 8,96,25,000.",
				"Step 4 — Adjust for growth stage (8/12 complete): NPR 8,96,25,000 x 8/12 = NPR 5,97,50,000 (Level 3 estimate — no active market for immature standing crop).",
				"Step 5 — Recognise fair value change: closing fair value NPR 5,97,50,000 - opening carrying amount NPR 7,20,00,000 = loss of NPR 1,22,50,000 (new crop cycle started after last harvest). Adjust for the fact that opening value related to the prior crop harvested mid-year. Actual gain/loss depends on when the prior crop was harvested and the new planting began.",
			],
			journalEntries: [
				"Initial recognition of new crop (planting cost): Dr Biological Asset — Sugarcane NPR 5,97,50,000 / Cr Fair Value Gain on Biological Assets NPR 5,97,50,000 (assuming new crop started at nil after prior harvest).",
				"If prior crop was partially valued at opening: Dr Fair Value Loss on Biological Assets NPR 1,22,50,000 / Cr Biological Asset — Sugarcane NPR 1,22,50,000 — to adjust carrying amount to current fair value less costs to sell.",
				"Deferred tax on unrealised gain: Dr Income Tax Expense (Deferred) / Cr Deferred Tax Liability — at the applicable rate under Income Tax Act 2058, because IRD does not tax unrealised biological gains until harvest and sale.",
			],
			difficulty: "pro",
		},
		livestockFairValue: {
			title: "Himalayan Livestock — Fair Value of Dairy Cattle Herd",
			context: "Himalayan Livestock Pvt Ltd operates a commercial dairy farm in Chitwan with 200 Holstein-cross dairy cows. At Shrawan 1, 2082 the herd was valued at NPR 3,20,00,000 (200 cows x NPR 1,60,000 each). During the year: 15 calves were born (fair value at birth NPR 25,000 each), 8 cows died (carrying value NPR 1,28,000 each, no salvage), 10 mature cows were sold for NPR 1,40,000 each. At Ashad-end, the remaining 197 cows are valued at NPR 1,75,000 each based on comparable sales at Bharatpur livestock market.",
			steps: [
				"Step 1 — Opening herd value: 200 cows x NPR 1,60,000 = NPR 3,20,00,000.",
				"Step 2 — Additions: 15 calves born at fair value NPR 25,000 each = NPR 3,75,000 (gain from biological transformation recognised in P&L).",
				"Step 3 — Disposals: 10 cows sold for NPR 1,40,000 each = NPR 14,00,000 proceeds. Carrying value at date of sale assumed NPR 1,60,000 each = NPR 16,00,000. Loss on sale NPR 2,00,000.",
				"Step 4 — Deaths: 8 cows with carrying value NPR 1,28,000 each = NPR 10,24,000 loss recognised in P&L.",
				"Step 5 — Fair value adjustment on remaining herd: 197 animals (200 + 15 - 10 - 8) at closing fair value NPR 1,75,000 each = NPR 34,47,500. Carrying value before revaluation = NPR 3,20,00,000 + NPR 3,75,000 - NPR 16,00,000 - NPR 10,24,000 = NPR 2,97,51,000. Fair value gain = NPR 34,47,500 - NPR 29,75,100... (reconcile: 197 x NPR 1,75,000 = NPR 3,44,75,000 vs NPR 2,97,51,000 = gain of NPR 47,24,000).",
			],
			journalEntries: [
				"Birth of calves: Dr Biological Asset — Dairy Cattle NPR 3,75,000 / Cr Gain from Biological Transformation NPR 3,75,000.",
				"Sale of cows: Dr Bank NPR 14,00,000 / Dr Loss on Disposal of Biological Assets NPR 2,00,000 / Cr Biological Asset — Dairy Cattle NPR 16,00,000.",
				"Death of cows: Dr Loss on Death of Livestock NPR 10,24,000 / Cr Biological Asset — Dairy Cattle NPR 10,24,000.",
				"Fair value adjustment at year-end: Dr Biological Asset — Dairy Cattle NPR 47,24,000 / Cr Fair Value Gain on Biological Assets NPR 47,24,000.",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The distinction between bearer plants (NAS 16) and agricultural produce (NAS 41) is a favourite exam topic. Remember: a tea bush is PPE under NAS 16, but the tea leaves growing on it are a biological asset under NAS 41 until harvest. After harvest, the leaves become inventory under NAS 2." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates often forget to deduct costs to sell when measuring biological assets at fair value. The standard requires fair value LESS costs to sell — not just fair value. Costs to sell include transport to market, broker commissions, and levies but exclude finance costs and income taxes." },
			{ source: "Exam Technique", tip: "When given a question on livestock, always reconcile the herd: opening number + births + purchases - sales - deaths = closing number. Then apply fair value to the closing herd and recognise the net gain/loss in profit or loss, splitting it into price changes and physical changes if required." },
			{ source: "Nepal-specific", tip: "Nepal lacks active markets for many biological assets. In exam questions, if fair value cannot be reliably measured for a biological asset on initial recognition, cost less depreciation and impairment is permitted until fair value becomes reliably measurable. State the presumption is rebuttable." },
			{ source: "Recurring Pattern", tip: "Government grants for biological assets measured at fair value follow NAS 41.34, NOT NAS 20. The key difference: unconditional grants are recognised when receivable; conditional grants are recognised only when conditions are met. Do not defer and amortise agricultural grants over the asset life." },
			{ source: "Exam Technique", tip: "Always address the deferred tax implications of fair value gains on biological assets. Since IRD taxes agricultural income on realisation (sale/harvest), unrealised fair value gains create a taxable temporary difference requiring a deferred tax liability under NAS 12." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Bearer plants measured at fair value instead of under NAS 16",
			description: "Tea estates and fruit orchards incorrectly continue measuring mature bearer plants at fair value under NAS 41 instead of reclassifying them to PPE under NAS 16. Since the 2016 amendment, bearer plants must be accounted for as property, plant and equipment once mature. Only the produce growing on them remains under NAS 41.",
			sector: "Agriculture",
		},
		{
			title: "Fair value gains on biological assets treated as taxable income",
			description: "Entities include unrealised fair value gains on biological assets in their taxable income computation, overpaying income tax. The Income Tax Act 2058 taxes agricultural income upon realisation (sale or harvest), not upon biological transformation. A deferred tax liability should be recognised instead of paying current tax on unrealised gains.",
			sector: "Agriculture",
		},
		{
			title: "Government grants deferred and amortised instead of immediate recognition",
			description: "Agricultural entities apply NAS 20 grant accounting (deferral and amortisation approach) to grants related to biological assets measured at fair value. NAS 41.34 requires immediate recognition in profit or loss when the grant becomes receivable — the NAS 20 deferral model does not apply to these grants.",
			sector: "Agriculture",
		},
		{
			title: "Costs to sell not deducted from fair value",
			description: "Entities report biological assets at fair value without deducting estimated costs to sell. Harvesting labour, transport from farm to market, broker commissions, and cooperative levies must all be deducted. This overstatement is common among sugarcane and livestock entities in the Terai region.",
			sector: "Listed Companies",
		},
		{
			title: "No reconciliation of biological asset carrying amounts disclosed",
			description: "Entities provide only a single closing balance for biological assets without the reconciliation required by NAS 41.50–53. The standard mandates disclosure of opening balance, additions (purchases and births), disposals (sales and deaths), fair value changes, and closing balance. Sugar mills and dairy farms frequently omit this reconciliation entirely.",
			sector: "Agriculture",
		},
	],

	relatedStandards: [
		{
			slug: "nas-2",
			nfrsNumber: "NAS 2",
			title: "Inventories",
			reason: "Agricultural produce becomes inventory under NAS 2 after the point of harvest — the handover point from NAS 41 to NAS 2",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Bearer plants (tea bushes, fruit trees) are accounted for under NAS 16 after maturity, not NAS 41",
		},
		{
			slug: "nas-20",
			nfrsNumber: "NAS 20",
			title: "Accounting for Government Grants and Disclosure of Government Assistance",
			reason: "Government grants for biological assets at fair value follow NAS 41.34, but grants for non-biological agricultural assets follow NAS 20",
		},
		{
			slug: "nfrs-13",
			nfrsNumber: "NFRS 13",
			title: "Fair Value Measurement",
			reason: "Fair value hierarchy and measurement techniques for biological assets must comply with NFRS 13, especially when active markets are absent",
		},
	],
};
