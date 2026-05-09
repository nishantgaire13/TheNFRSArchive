import type { StandardPageData } from "./types";

export const nas36: StandardPageData = {
	slug: "nas-36",
	nfrsNumber: "NAS 36",
	ifrsEquivalent: "IAS 36",
	title: "Impairment of Assets",
	topic: "assets",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2004-03-31",
	status: "aligned",
	heroMotif: "coins",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Annual Goodwill Testing",
				ifrs: "Mandatory annual impairment test for goodwill regardless of indicators (IAS 36.10)",
				nfrs: "Same requirement. However, goodwill from Nepali bank mergers (NRB-directed) is often modest and testing rigour varies",
				nepalImpact: "NRB-directed bank mergers may produce goodwill that entities test superficially. Given post-merger integration challenges, rigorous CGU-level testing is essential",
				significance: "low",
			},
			{
				topic: "Value-in-Use Discount Rate",
				ifrs: "Pre-tax rate reflecting time value of money and asset-specific risks not already adjusted in cash flows (IAS 36.55)",
				nfrs: "Same requirement, but Nepal's shallow capital market provides limited data for CAPM-based discount rates",
				nepalImpact: "Entities struggle to derive appropriate discount rates — Nepal has limited listed companies for beta estimation, sovereign yields are used as risk-free proxies, and equity risk premium data is scarce",
				significance: "high",
			},
			{
				topic: "CGU Identification",
				ifrs: "Smallest identifiable group of assets generating largely independent cash inflows (IAS 36.66)",
				nfrs: "Same definition, but Nepali conglomerates with shared infrastructure make CGU boundaries difficult to draw",
				nepalImpact: "Vertically integrated groups (tea estate + processing + export) and hotels with shared kitchens/laundry across properties must carefully analyse cash flow independence to define CGUs",
				significance: "high",
			},
			{
				topic: "Banking Mergers — Goodwill",
				ifrs: "Goodwill allocated to CGUs expected to benefit from synergies (IAS 36.80)",
				nfrs: "Same treatment. NRB-directed mergers of weaker BFIs into stronger ones create goodwill that must be allocated and tested annually",
				nepalImpact: "Post-merger, acquirer must identify CGUs benefiting from synergies (branch networks, customer base). If synergies fail to materialise, goodwill impairment follows — a significant P&L hit for acquiring banks",
				significance: "high",
			},
			{
				topic: "Hydropower Tariff Risk",
				ifrs: "VIU projections must use reasonable assumptions about future cash flows (IAS 36.33)",
				nfrs: "Same, but hydropower VIU is heavily dependent on Power Purchase Agreements (PPAs) with Nepal Electricity Authority (NEA)",
				nepalImpact: "Hydropower assets with expired or unfavourable PPAs face impairment risk. PPA renegotiations, seasonal flow variations, and NEA payment delays all affect VIU calculations",
				significance: "medium",
			},
			{
				topic: "Impairment Reversal",
				ifrs: "Reversal permitted for all assets except goodwill. Cannot exceed original carrying amount without impairment (IAS 36.117–124)",
				nfrs: "Identical treatment. Reversal particularly relevant for hospitality sector post-COVID recovery and hydropower plants after PPA renegotiation",
				nepalImpact: "Hotels that recognised impairment during COVID-era travel bans may reverse losses as occupancy recovers — but cannot exceed pre-impairment carrying amount",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to assess impairment of goodwill from merger/acquisition transactions annually and report results to NRB. For stressed BFIs, NRB may direct impairment testing on specific asset portfolios. NRB-mandated provisions on non-performing loans interact with NAS 36 when loan portfolios form part of a CGU's recoverable amount assessment. BFIs must demonstrate that carrying amounts of investments in subsidiaries/associates are supported by recoverable amounts.",
		sebon: "SEBON requires listed entities to disclose impairment losses in quarterly and annual reports with explanations of triggering events. Material impairments of goodwill or other assets trigger SEBON's immediate disclosure requirements — entities must notify the exchange within 24 hours of recognising a significant impairment. SEBON reviews impairment disclosures during annual report reviews and may challenge inadequate testing.",
		ird: "IRD does not recognise impairment losses as tax-deductible. Assets are depreciated for tax purposes at prescribed rates regardless of impairment. An impairment loss creates a deductible temporary difference (carrying amount < tax base) and a deferred tax asset under NAS 12. Impairment is only tax-relevant when the asset is disposed of — the tax loss on disposal is then computed against the tax written-down value.",
	},

	timeline: [
		{ date: "Mar 2004", label: "IAS 36 Revised", description: "Goodwill testing strengthened, CGU guidance expanded" },
		{ date: "Jul 2018", label: "NAS 36 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2020–2022", label: "COVID Impairments", description: "Hospitality and aviation sectors triggered widespread impairment indicators", highlight: true },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify Impairment Indicators",
			coreQuestion: "Are there signs that an asset may have lost value?",
			nepalExample: "A Pokhara hotel sees occupancy drop from 80% to 35% after a regional travel advisory. External indicator: market decline. Internal indicator: cash flows from hotel operations are significantly below budget. Impairment testing is triggered.",
			paraRef: "IAS 36.12",
		},
		{
			number: 2,
			name: "Define the CGU",
			coreQuestion: "What is the smallest asset group generating independent cash flows?",
			nepalExample: "A hotel chain has three properties: Kathmandu, Pokhara, and Chitwan. Each hotel generates its own room revenue and has its own cost structure. Each is a separate CGU. But the central reservation system and corporate headquarters are shared assets allocated across CGUs.",
			paraRef: "IAS 36.66–73",
		},
		{
			number: 3,
			name: "Calculate Recoverable Amount",
			coreQuestion: "What is the higher of fair value less costs of disposal (FVLCD) and value in use (VIU)?",
			nepalExample: "Pokhara hotel: FVLCD = NPR 18 crore (recent comparable hotel sale minus 5% disposal costs). VIU = NPR 15 crore (discounted cash flows at 14% pre-tax rate over 10-year projection). Recoverable amount = higher of the two = NPR 18 crore.",
			paraRef: "IAS 36.18–57",
		},
		{
			number: 4,
			name: "Compare and Recognise Loss",
			coreQuestion: "Does carrying amount exceed recoverable amount?",
			nepalExample: "Pokhara hotel carrying amount: NPR 22 crore. Recoverable amount: NPR 18 crore. Impairment loss = NPR 4 crore. If the hotel was revalued, loss first reduces revaluation surplus (say NPR 1.5 crore in OCI), remainder NPR 2.5 crore in P&L.",
			paraRef: "IAS 36.59–64",
		},
		{
			number: 5,
			name: "Allocate CGU Impairment",
			coreQuestion: "How is the loss distributed among assets in the CGU?",
			nepalExample: "If the Pokhara CGU includes goodwill (NPR 1 crore from a previous acquisition), the NPR 4 crore loss is allocated: first NPR 1 crore to goodwill (written down to zero), then remaining NPR 3 crore pro-rata to the building, furniture, and equipment (but not below individual FVLCD).",
			paraRef: "IAS 36.104–108",
		},
	],

	inlineExamples: {
		hotelImpairment: {
			title: "Sagarmatha Hotels — CGU Impairment Testing",
			context: "Sagarmatha Hotels Ltd operates a 4-star hotel in Chitwan with carrying amounts: Land NPR 5 crore, Building NPR 12 crore, Furniture & Fixtures NPR 2 crore, Goodwill NPR 1.5 crore (from acquiring a competitor). Total CGU carrying amount: NPR 20.5 crore. Occupancy has dropped to 30% and management forecasts slow recovery.",
			steps: [
				"Step 1 — Indicators present: occupancy decline (external market), cash flow below budget (internal). Annual goodwill test also due. Testing required.",
				"Step 2 — VIU calculation: 5-year cash flow projection (year 1: NPR 80 lakh, year 2: NPR 1.2 crore, year 3: NPR 1.8 crore, year 4: NPR 2.2 crore, year 5: NPR 2.5 crore). Terminal value: NPR 2.5 crore ÷ (14% − 3%) = NPR 22.73 crore. PV of all cash flows at 14% discount rate = NPR 16 crore.",
				"Step 3 — FVLCD: No recent comparable transactions in Chitwan. FVLCD not reliably determinable. Use VIU = NPR 16 crore as recoverable amount.",
				"Step 4 — Impairment loss: Carrying NPR 20.5 crore − recoverable NPR 16 crore = NPR 4.5 crore impairment loss.",
				"Step 5 — Allocation: First to goodwill: NPR 1.5 crore (goodwill reduced to zero, never reversed). Remaining NPR 3 crore allocated pro-rata: Building gets 12/19 × 3 crore = NPR 1.89 crore. Furniture gets 2/19 × 3 crore = NPR 31.6 lakh. Land gets 5/19 × 3 crore = NPR 78.9 lakh (but check FVLCD floor for each asset).",
			],
			journalEntries: [
				"Goodwill: Dr Impairment Loss (P&L) NPR 1,50,00,000 / Cr Goodwill NPR 1,50,00,000",
				"Building: Dr Impairment Loss (P&L) NPR 1,89,47,368 / Cr Accumulated Impairment — Building NPR 1,89,47,368",
				"Furniture: Dr Impairment Loss (P&L) NPR 31,57,895 / Cr Accumulated Impairment — Furniture NPR 31,57,895",
				"Land: Dr Impairment Loss (P&L) NPR 78,94,737 / Cr Land NPR 78,94,737",
				"DTA on impairment: Dr Deferred Tax Asset NPR 1,12,50,000 / Cr Income Tax Expense NPR 1,12,50,000 (NPR 4.5 crore × 25%)",
			],
			difficulty: "pro",
		},
		hydropowerVIU: {
			title: "Langtang Hydropower — Value in Use with PPA Risk",
			context: "Langtang Hydropower Ltd operates a 10 MW run-of-river plant. Carrying amount: NPR 80 crore. Current PPA with NEA at NPR 8.40/kWh expires in 3 years. Expected renewal rate: NPR 5.50/kWh (NEA has been reducing PPA rates). Annual generation: 55 GWh (seasonal variation: 70% wet season, 30% dry).",
			steps: [
				"Step 1 — Impairment indicator: PPA rate expected to decline by 35% on renewal. This is a significant external indicator requiring impairment testing.",
				"Step 2 — VIU projections: Years 1–3 at NPR 8.40/kWh: revenue = 5.5 crore × 8.40 = NPR 46.2 crore total. Years 4–30 (remaining licence) at NPR 5.50/kWh: revenue = 5.5 crore × 5.50 = NPR 30.25 crore/year.",
				"Step 3 — Operating costs: NPR 5 crore/year (maintenance, staff, insurance, royalty to government). Net cash flow years 1–3: ~NPR 10.4 crore/year. Years 4–30: ~NPR 25.25 crore/year (lower after PPA rate drop) — wait, revenue NPR 30.25 crore minus costs NPR 5 crore = NPR 25.25 crore? Recalculate: 55 GWh = 5,50,00,000 kWh. Revenue = 5.5 crore units × NPR 5.50 = NPR 30.25 crore. Net = NPR 25.25 crore. Discount at 12% pre-tax.",
				"Step 4 — PV computation yields VIU of approximately NPR 190 crore. VIU exceeds carrying amount of NPR 80 crore — no impairment. But sensitivity analysis shows impairment if generation drops below 35 GWh (drought scenario).",
				"Step 5 — Disclosure: Entity must disclose key assumptions (PPA rate, generation volume, discount rate) and sensitivity analysis showing headroom.",
			],
			journalEntries: [
				"No impairment journal needed — VIU exceeds carrying amount.",
				"But if drought scenario materialises: Dr Impairment Loss / Cr Accumulated Impairment — Plant (for the shortfall between carrying amount and reduced VIU)",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "CGU identification is the most commonly tested aspect. Always state the definition first: 'the smallest identifiable group of assets that generates cash inflows that are largely independent of cash inflows from other assets.' Then apply to the scenario — don't assume each division or subsidiary is automatically a CGU." },
			{ source: "Recurring Pattern", tip: "Goodwill impairment allocation is mechanical but candidates make errors. Sequence: (1) write down goodwill first, (2) remaining loss pro-rata to other assets, (3) but never below each asset's individual FVLCD. Many candidates skip step 3." },
			{ source: "Dec 2023 Examiner Report", tip: "Discount rate: must be pre-tax and reflect risks not already in the cash flows. If cash flows are nominal, use nominal rate. If real, use real rate. Candidates frequently double-count risk by adjusting both cash flows and discount rate for the same factor." },
			{ source: "Recurring Pattern", tip: "Reversal of impairment: test for both recognition of reversal AND the ceiling. Reversed carrying amount cannot exceed what would have existed without impairment (i.e., cost less depreciation that would have been charged). Goodwill impairment is NEVER reversed." },
			{ source: "Exam Technique", tip: "VIU calculations: show your working. Present the cash flow projections, the discount rate justification, and the PV computation. Examiners give method marks even if arithmetic is wrong. Don't just state 'VIU is NPR X' without showing how you got there." },
			{ source: "Nepal-specific", tip: "For CA Nepal: hydropower impairment is a high-frequency topic. Know PPA structures, NEA tariff trends, seasonal generation patterns, and how to build a VIU model for a run-of-river plant. Discount rate derivation in Nepal's market is also commonly tested." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "No impairment testing despite clear indicators",
			description: "Hotels with declining occupancy, factories operating below capacity, and businesses losing key customers fail to perform impairment tests. NAS 36 requires assessment of indicators at each reporting date — management cannot ignore signals and hope for recovery.",
			sector: "Hospitality & Manufacturing",
		},
		{
			title: "Discount rate copied from previous year without update",
			description: "Entities use the same discount rate year after year for VIU calculations without reassessing market conditions. Interest rates, risk premiums, and industry risk profiles change — the discount rate must be re-derived annually based on current conditions.",
			sector: "Hydropower",
		},
		{
			title: "Goodwill not allocated to CGUs at acquisition",
			description: "BFIs acquiring other banks through NRB-directed mergers fail to allocate goodwill to CGUs at the acquisition date. Without allocation, annual impairment testing cannot be performed properly. Goodwill 'sitting' at entity level is a compliance failure.",
			sector: "Banking & Finance",
		},
		{
			title: "Cash flow projections beyond 5 years without justification",
			description: "Hydropower projects with 25–30 year licences use detailed projections beyond the standard's 5-year maximum. Projections beyond 5 years must use steady or declining growth rates unless a longer period can be justified. Aggressive long-term growth assumptions overstate VIU and mask impairment.",
			sector: "Hydropower",
		},
		{
			title: "Impairment loss not reversed when conditions improve",
			description: "Hotels and tourism businesses that recognised impairment during COVID downturns fail to reassess and reverse losses as occupancy and revenue recover. If conditions that caused impairment reverse, the loss must be reversed (except for goodwill) up to the pre-impairment carrying amount.",
			sector: "Hospitality",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant & Equipment",
			reason: "PPE is the most common asset class tested for impairment — carrying amounts under NAS 16 are compared to recoverable amounts under NAS 36",
		},
		{
			slug: "nas-2",
			nfrsNumber: "NAS 2",
			title: "Inventories",
			reason: "Inventories are explicitly excluded from NAS 36 — NAS 2 has its own write-down mechanism (NRV test) that serves the same purpose",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Impairment losses create deductible temporary differences (carrying amount below tax base) requiring deferred tax asset recognition",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Financial assets are excluded from NAS 36 — NFRS 9 has its own impairment model (ECL). But investments in subsidiaries at cost are tested under NAS 36",
		},
	],
};
