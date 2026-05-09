import type { StandardPageData } from "./types";

export const nas16: StandardPageData = {
	slug: "nas-16",
	nfrsNumber: "NAS 16",
	ifrsEquivalent: "IAS 16",
	title: "Property, Plant and Equipment",
	topic: "assets",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "plan",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA FR","ACCA SBR","ACCA AA","ACCA TX","ACCA ATX","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Measurement Models",
				ifrs: "Cost model or revaluation model — free choice per class of asset (IAS 16.29–31)",
				nfrs: "Same choice available. NRB mandates revaluation model for BFI land and buildings per Unified Directive Chapter 11",
				nepalImpact: "BFIs revalue properties every 3–5 years, inflating asset bases and triggering NAS 12 deferred tax. Other sectors predominantly use cost model, creating comparability gaps",
				significance: "low",
			},
			{
				topic: "Tax Depreciation vs Accounting",
				ifrs: "Depreciation based on useful life and residual value (entity-specific estimates)",
				nfrs: "Accounting depreciation per NAS 16, but Income Tax Act 2058 prescribes declining-balance rates: buildings 5%, vehicles 20%, computers 25%, furniture 15%",
				nepalImpact: "Every entity with PPE faces depreciation differences generating deferred tax. Tax depreciation is front-loaded (declining balance) while accounting depreciation is typically straight-line",
				significance: "high",
			},
			{
				topic: "Revaluation Frequency",
				ifrs: "Sufficient regularity that carrying amount does not differ materially from fair value (IAS 16.31)",
				nfrs: "Same principle, but NRB requires BFI revaluation at least every 5 years. No prescribed frequency for non-BFI entities — leads to stale revaluations",
				nepalImpact: "Non-regulated entities may carry revalued amounts for 10+ years without updating, especially for land in Kathmandu Valley where prices have appreciated significantly",
				significance: "medium",
			},
			{
				topic: "Registered Valuers",
				ifrs: "Valuation by qualified independent valuers — no global registry prescribed",
				nfrs: "NRB requires BFI valuations by NRB-approved registered valuers. ICAN Nepal has a separate panel. Valuer supply is limited outside Kathmandu",
				nepalImpact: "Limited valuer availability in rural Nepal means revaluations of provincial assets (hydropower sites, rural BFI branches) may lack rigour or face delays",
				significance: "medium",
			},
			{
				topic: "Component Accounting",
				ifrs: "Each significant part depreciated separately (IAS 16.43–47). Inspection costs capitalised as a component",
				nfrs: "Same requirement but adoption has been slow. Many Nepali entities depreciate entire assets as single units",
				nepalImpact: "Hydropower plants, hotels, and manufacturing plants should componentise (turbines, civil works, transmission lines) but often use single useful lives, misstating depreciation",
				significance: "high",
			},
			{
				topic: "Bearer Plants",
				ifrs: "Bearer plants (tea bushes, fruit trees) within IAS 16 scope since 2016 amendment. Produce remains under IAS 41",
				nfrs: "Same amendment adopted. Nepal's tea estates and fruit orchards must capitalise bearer plants under NAS 16, not NAS 41",
				nepalImpact: "Tea estates in Ilam and Jhapa historically expensed bush maintenance — must now capitalise and depreciate bearer plants over productive life (30–50 years for tea bushes)",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directive Chapter 11 requires BFIs to revalue land and buildings using NRB-approved registered valuers at least every 5 years. Revaluation surplus is credited to a non-distributable revaluation reserve. NRB caps the revaluation surplus that can be included in Tier 2 capital at 50% (after deferred tax). BFIs must submit valuation reports to NRB during on-site inspections.",
		sebon: "SEBON requires listed entities to disclose all PPE additions, disposals, and revaluation movements in quarterly filings. Property revaluations by listed companies must be performed by ICAN-registered valuers and disclosed with methodology details. SEBON has the authority to challenge revaluations that appear aggressive or unsupported.",
		ird: "IRD prescribes depreciation rates under Income Tax Act 2058 Schedule 2 by asset pool (buildings 5%, vehicles 20%, computers 25%, plant & machinery 15%, furniture 15%). Revaluation gains are not taxable until the asset is sold. Disposal proceeds are compared against tax written-down value — profit is taxable, loss is deductible. The tax-accounting depreciation gap is the primary source of deferred tax liabilities across all Nepali entities.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 16 Revised", description: "Component approach, bearer plants excluded" },
		{ date: "Jan 2016", label: "Bearer Plant Amendment", description: "Bearer plants moved into IAS 16 from IAS 41" },
		{ date: "Jul 2018", label: "NAS 16 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Recognise the Asset",
			coreQuestion: "Does the item meet the PPE definition and recognition criteria?",
			nepalExample: "Pashupati Cement purchases a new clinker grinding mill for NPR 15 crore. The mill is tangible, held for use in production (not for sale), and expected to be used for more than one period. Future economic benefits are probable and cost is reliably measurable. Recognise as PPE.",
			paraRef: "IAS 16.7",
		},
		{
			number: 2,
			name: "Measure at Cost",
			coreQuestion: "What is the initial cost of the asset?",
			nepalExample: "Mill cost: purchase price NPR 14 crore + customs duty NPR 50 lakh + installation & commissioning NPR 40 lakh + site preparation NPR 10 lakh = NPR 15 crore. Staff training costs of NPR 5 lakh are excluded (not directly attributable).",
			paraRef: "IAS 16.15–22",
		},
		{
			number: 3,
			name: "Choose Measurement Model",
			coreQuestion: "Cost model or revaluation model for this class?",
			nepalExample: "Pashupati Cement uses cost model for plant & machinery (consistent with industry practice). For its head office land in Kathmandu, it uses the revaluation model (land has appreciated significantly and the entity wants to reflect fair value).",
			paraRef: "IAS 16.29–31",
		},
		{
			number: 4,
			name: "Depreciate Systematically",
			coreQuestion: "Over what period and using what method?",
			nepalExample: "The grinding mill has 20-year useful life, NPR 50 lakh residual value. Annual depreciation: (NPR 15,00,00,000 − NPR 50,00,000) ÷ 20 = NPR 72,50,000 per year. Tax depreciation at 15% DDB: Year 1 = NPR 2,25,00,000 — creating a temporary difference.",
			paraRef: "IAS 16.50–62",
		},
		{
			number: 5,
			name: "Derecognise on Disposal or No Future Benefits",
			coreQuestion: "When do you remove the asset from the books?",
			nepalExample: "After 12 years, Pashupati Cement sells the old mill for NPR 3 crore. Carrying amount: NPR 15 crore − (NPR 72,50,000 × 12) = NPR 6,30,00,000. Gain/(loss) on disposal: NPR 3,00,00,000 − NPR 6,30,00,000 = (NPR 3,30,00,000) loss, recognised in P&L.",
			paraRef: "IAS 16.67–72",
		},
	],

	inlineExamples: {
		revaluation: {
			title: "Pashupati Cement — Land Revaluation with Deferred Tax",
			context: "Pashupati Cement Ltd owns land at its factory site in Dhangadhi, carried at historical cost of NPR 2,00,00,000 (purchased 2065 BS). An independent registered valuer assesses fair value at NPR 12,00,00,000 in Ashad 2082. The company elects to revalue the entire land class. Tax rate: 25%.",
			steps: [
				"Step 1 — Revaluation surplus: Fair value NPR 12,00,00,000 − carrying amount NPR 2,00,00,000 = NPR 10,00,00,000 surplus.",
				"Step 2 — Deferred tax on revaluation: Taxable temporary difference = NPR 10,00,00,000. DTL = NPR 10,00,00,000 × 25% = NPR 2,50,00,000. Recognised in OCI, not P&L.",
				"Step 3 — Net revaluation surplus in equity: NPR 10,00,00,000 − NPR 2,50,00,000 = NPR 7,50,00,000.",
				"Step 4 — Entire 'Land' class must be revalued: if Pashupati also owns land in Kathmandu, that too must be revalued (cannot selectively revalue within a class).",
				"Step 5 — Future considerations: revaluation surplus is non-distributable. If land is later sold, surplus transfers to retained earnings. Revaluation must be kept current — not left for 10+ years.",
			],
			journalEntries: [
				"Revaluation: Dr Land NPR 10,00,00,000 / Cr Revaluation Surplus (OCI) NPR 10,00,00,000",
				"DTL on revaluation: Dr Revaluation Surplus (OCI) NPR 2,50,00,000 / Cr Deferred Tax Liability NPR 2,50,00,000",
				"If subsequent revaluation shows decline to NPR 9,00,00,000: Dr Revaluation Surplus NPR 3,00,00,000 / Cr Land NPR 3,00,00,000 (reversal within surplus)",
			],
			difficulty: "medium",
		},
		componentAccounting: {
			title: "Koshi Hydropower — Component Depreciation",
			context: "Koshi Hydropower Ltd commissions a 25 MW run-of-river plant. Total capitalised cost: NPR 250 crore. The plant has distinct components with different useful lives: civil works (dam, canal, powerhouse) 60 years, electromechanical equipment (turbines, generators) 25 years, transmission line 40 years, control systems 10 years.",
			steps: [
				"Step 1 — Identify components: Civil works NPR 120 crore (48%), E&M equipment NPR 80 crore (32%), transmission NPR 35 crore (14%), control systems NPR 15 crore (6%).",
				"Step 2 — Depreciate each component separately: Civil = NPR 120 crore ÷ 60 = NPR 2 crore/year. E&M = NPR 80 crore ÷ 25 = NPR 3.2 crore/year. Transmission = NPR 35 crore ÷ 40 = NPR 87.5 lakh/year. Controls = NPR 15 crore ÷ 10 = NPR 1.5 crore/year.",
				"Step 3 — Total annual depreciation: NPR 7.575 crore. Compare with single-life approach: NPR 250 crore ÷ 35 years (blended) = NPR 7.14 crore. The difference grows over time as shorter-life components are fully depreciated.",
				"Step 4 — Major inspection: Turbine overhaul at year 12 costs NPR 5 crore. The remaining carrying amount of the previous overhaul component is derecognised, and NPR 5 crore is capitalised as a new component.",
				"Step 5 — Tax treatment: IRD treats the entire plant as 'plant & machinery' at 15% DDB — no componentisation for tax. Massive temporary differences arise.",
			],
			journalEntries: [
				"Annual depreciation: Dr Depreciation Expense NPR 7,57,50,000 / Cr Accumulated Depreciation — Civil NPR 2,00,00,000, E&M NPR 3,20,00,000, Transmission NPR 87,50,000, Controls NPR 1,50,00,000",
				"Turbine overhaul (year 12): Dr PPE — E&M (new component) NPR 5,00,00,000 / Cr Cash NPR 5,00,00,000. Dr Accumulated Depreciation / Dr Loss on Disposal / Cr PPE — E&M (old overhaul component)",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "Revaluation accounting remains weak among candidates. Remember: first revaluation gain → OCI (revaluation surplus). Subsequent loss → first reverse OCI surplus, then excess to P&L. Gain after a previous P&L loss → first reverse P&L loss, then excess to OCI." },
			{ source: "Recurring Pattern", tip: "Component accounting questions test whether candidates can identify distinct components and depreciate separately. Don't depreciate an entire hotel building at one rate — structure, lifts, HVAC, and fit-out have different lives." },
			{ source: "Dec 2023 Examiner Report", tip: "Costs included in PPE initial measurement: candidates incorrectly capitalise staff training, opening ceremony costs, and relocation expenses. Only costs directly attributable to bringing the asset to working condition for its intended use are capitalised." },
			{ source: "Recurring Pattern", tip: "Change in depreciation method or useful life is a change in accounting estimate (prospective), not a change in accounting policy (retrospective). Many candidates treat it as retrospective — this is wrong." },
			{ source: "Exam Technique", tip: "Disposal gains/losses: always show the calculation — proceeds minus carrying amount at disposal date. Remember to update depreciation to the disposal date before calculating carrying amount." },
			{ source: "Nepal-specific", tip: "For CA Nepal: the depreciation difference between NAS 16 (SLM, entity-specific life) and Income Tax Act (DDB, prescribed rates) is the single most common deferred tax exam question. Be ready to calculate both depreciations and the resulting temporary difference." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Entire asset depreciated as single unit — no componentisation",
			description: "Hotels, hydropower plants, and manufacturing facilities depreciate the entire asset at a single rate instead of componentising. A hotel building should have separate components for structure (50 years), lifts (20 years), HVAC (15 years), and interior fit-out (7 years). Single-rate depreciation understates early-year charges and overstates later charges.",
			sector: "Hydropower & Hospitality",
		},
		{
			title: "Revaluation surplus treated as distributable",
			description: "Companies include revaluation surplus in distributable reserves and pay dividends from it. Revaluation surplus is unrealised — it cannot be distributed as dividends. Transfer to retained earnings is only permitted through use (depreciation of revalued amount) or on disposal.",
			sector: "Real Estate",
		},
		{
			title: "Tax depreciation rates used for accounting",
			description: "To avoid maintaining two depreciation schedules, entities use Income Tax Act rates (5% buildings, 20% vehicles) for financial reporting. NAS 16 requires depreciation based on the asset's useful life, not tax rates. Using tax rates violates NAS 16 and likely misstates depreciation expense.",
			sector: "Manufacturing",
		},
		{
			title: "Revaluations not kept current",
			description: "Entities perform one revaluation and then never update it. A land revaluation done in 2070 BS (2013) in Kathmandu Valley could be understated by 3–5x given subsequent price appreciation. NAS 16 requires revaluations at sufficient regularity that carrying amount does not differ materially from fair value.",
			sector: "Listed Companies",
		},
		{
			title: "Borrowing costs on qualifying assets capitalised incorrectly",
			description: "Entities capitalise interest on all loans rather than only on qualifying assets (assets that take a substantial period to get ready). Interest on general borrowings must use a capitalisation rate, not the rate on any specific loan. Over-capitalisation inflates PPE and understates finance costs.",
			sector: "Construction",
		},
	],

	relatedStandards: [
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "PPE must be tested for impairment when indicators exist — carrying amount compared to recoverable amount under NAS 36",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Depreciation differences between NAS 16 and Income Tax Act create the largest source of deferred tax liabilities in Nepal",
		},
		{
			slug: "nas-2",
			nfrsNumber: "NAS 2",
			title: "Inventories",
			reason: "Spare parts and servicing equipment may be PPE or inventory — classification affects measurement and depreciation",
		},
		{
			slug: "nfrs-16",
			nfrsNumber: "NFRS 16",
			title: "Leases",
			reason: "Right-of-use assets under NFRS 16 are depreciated similarly to owned PPE under NAS 16",
		},
	],
};
