import type { StandardPageData } from "./types";

export const nas38: StandardPageData = {
	slug: "nas-38",
	nfrsNumber: "NAS 38",
	ifrsEquivalent: "IAS 38",
	title: "Intangible Assets",
	topic: "assets",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2004-03-31",
	status: "aligned",
	heroMotif: "lightbulb",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA FR","ACCA SBR","ACCA FM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Software Capitalisation",
				ifrs: "Internally developed software capitalised during development phase if criteria met (IAS 38.57). Purchased software capitalised at cost",
				nfrs: "Same criteria. BFIs invest heavily in core banking systems (NPR 10–50 crore). Telecom companies capitalise network management software",
				nepalImpact: "Core banking software (Finacle, Flexcube) is the largest intangible for BFIs. Classification between development (capitalise) and maintenance (expense) requires judgment. Annual maintenance contracts are typically expensed",
				significance: "high",
			},
			{
				topic: "Telecom Licences",
				ifrs: "Licences acquired in a business combination or separately capitalised at cost/fair value. Finite life = amortise (IAS 38.97)",
				nfrs: "Same treatment. Nepal Telecommunications Authority (NTA) grants spectrum and operating licences with specific durations (typically 15–25 years)",
				nepalImpact: "Nepal Telecom, Ncell, and SmartTel capitalise licence fees and amortise over the licence period. Renewal costs may be capitalised if they extend the licence term; otherwise expensed",
				significance: "medium",
			},
			{
				topic: "Hydropower Licences",
				ifrs: "Survey and generation licences capitalised as intangible if they meet recognition criteria. Amortised over licence period",
				nfrs: "Same approach. Nepal's Department of Electricity Development issues generation licences for 25–35 years. Survey licences (5 years) may be capitalised during exploration",
				nepalImpact: "Hydropower companies capitalise licence costs but often fail to separately identify them from broader project development costs. Amortisation should match the licence period, not the asset's physical life",
				significance: "medium",
			},
			{
				topic: "Research vs Development Distinction",
				ifrs: "Research costs always expensed. Development costs capitalised only when six criteria are met (IAS 38.57)",
				nfrs: "Same rule. Nepal's pharmaceutical sector (e.g., Nepal Pharma Lab, Lomus Pharma) has limited R&D spend. Most 'research' is formulation adaptation rather than original research",
				nepalImpact: "Few Nepali entities have material development costs to capitalise. The distinction is most relevant for IT companies and fintech startups, where app development costs may qualify for capitalisation",
				significance: "low",
			},
			{
				topic: "Internally Generated Brands and Customer Lists",
				ifrs: "Internally generated brands, mastheads, publishing titles, customer lists cannot be capitalised — cannot be distinguished from cost of developing the business overall (IAS 38.63–64)",
				nfrs: "Same prohibition. Despite strong brand values (Surya Nepal, Wai Wai, CG), internally generated brands are not recognised as intangible assets",
				nepalImpact: "Nepali conglomerates with valuable brands (CG Group, Chaudhary Group) cannot recognise these on the balance sheet. Only brands acquired in business combinations (NFRS 3) are capitalised",
				significance: "low",
			},
			{
				topic: "Tax Amortisation vs Accounting",
				ifrs: "Amortisation based on estimated useful life (IAS 38.97). No prescribed tax rates",
				nfrs: "NAS 38 uses useful life. Income Tax Act 2058 prescribes 25% declining balance for intangibles. Software may qualify under different pool rates",
				nepalImpact: "Accounting amortisation (straight-line, 5–15 years) differs from tax depreciation (25% DDB), creating temporary differences. BFI core banking systems amortised over 5–8 years for accounting vs 25% DDB for tax",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to capitalise core banking system costs and amortise over the shorter of licence period and 5 years (conservative). Software maintenance and upgrade costs must be carefully evaluated — only costs that significantly enhance functionality may be capitalised. NRB prescribes minimum intangible asset disclosures in BFI financial statements.",
		sebon: "SEBON requires listed entities to disclose intangible assets by category (software, licences, goodwill, development costs) with movement schedules showing additions, amortisation, and impairment. Material intangible investments must be separately disclosed in annual reports.",
		ird: "Income Tax Act 2058 allows depreciation on intangible assets at 25% declining balance under the 'intangible property' pool. This rate applies to software, licences, patents, and other intangibles. Goodwill from mergers is not deductible. The tax-accounting amortisation gap creates temporary differences under NAS 12.",
	},

	timeline: [
		{ date: "Mar 2004", label: "IAS 38 Revised", description: "Revised standard on intangible assets" },
		{ date: "Jan 2005", label: "IAS 38 Effective", description: "Revised standard effective globally" },
		{ date: "Jul 2018", label: "NAS 38 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Intangible",
			coreQuestion: "Is the item identifiable, non-monetary, and without physical substance?",
			nepalExample: "Nepal Telecom acquires 4G spectrum from NTA for NPR 25 crore. The licence is identifiable (contractual right), non-monetary, and has no physical substance. It meets the intangible asset definition.",
			paraRef: "IAS 38.8–17",
		},
		{
			number: 2,
			name: "Check Recognition Criteria",
			coreQuestion: "Are future economic benefits probable and can cost be measured reliably?",
			nepalExample: "Nepal Telecom expects 4G revenue of NPR 5 crore/year from the licence. Cost is reliably measured at NPR 25 crore (auction price). Both criteria met — recognise as intangible asset. Compare: staff training costs of NPR 50 lakh are NOT capitalisable (future benefits not controlled by the entity).",
			paraRef: "IAS 38.21–23",
		},
		{
			number: 3,
			name: "Measure at Cost Initially",
			coreQuestion: "What costs are included in initial measurement?",
			nepalExample: "Himalayan Bank implements a new core banking system. Cost: software licence NPR 15 crore + customisation NPR 3 crore + testing and parallel running NPR 1 crore + data migration NPR 50 lakh = NPR 19.5 crore total capitalised. Staff training NPR 1 crore is excluded. Ongoing annual maintenance fees are expensed.",
			paraRef: "IAS 38.24–32",
		},
		{
			number: 4,
			name: "Determine Useful Life and Amortise",
			coreQuestion: "Is the useful life finite or indefinite? What amortisation method?",
			nepalExample: "Nepal Telecom's 4G licence: 20-year term = finite life. Amortisation: NPR 25 crore ÷ 20 = NPR 1.25 crore/year (straight-line). Himalayan Bank's core banking software: 7-year estimated useful life = NPR 19.5 crore ÷ 7 = NPR 2.79 crore/year. Tax depreciation at 25% DDB creates a temporary difference.",
			paraRef: "IAS 38.88–99",
		},
		{
			number: 5,
			name: "Test for Impairment",
			coreQuestion: "Are there indicators that the intangible may be impaired?",
			nepalExample: "Himalayan Bank plans to replace its core banking system 2 years before the original 7-year estimate. Remaining carrying amount: NPR 19.5 cr − (5 × NPR 2.79 cr) = NPR 5.55 crore. Recoverable amount (value in use for remaining 2 years) may be lower — test under NAS 36. Indefinite-life intangibles must be tested annually.",
			paraRef: "IAS 38.111",
		},
	],

	inlineExamples: {
		coreBanking: {
			title: "Himalayan Bank — Core Banking System Capitalisation",
			context: "Himalayan Bank Ltd implements a new Finacle core banking system replacing the legacy system. Costs incurred: software licence fee NPR 15,00,00,000, customisation and configuration NPR 3,50,00,000, data migration NPR 75,00,000, parallel running and testing NPR 60,00,000, staff training NPR 1,20,00,000, project management NPR 90,00,000. Estimated useful life: 7 years. Tax rate: 30%.",
			steps: [
				"Step 1 — Identify capitalisable costs: Licence fee NPR 15 cr + customisation NPR 3.5 cr + data migration NPR 0.75 cr + testing NPR 0.6 cr + project management NPR 0.9 cr = NPR 20,75,00,000.",
				"Step 2 — Exclude non-capitalisable: Staff training NPR 1.2 crore → expense in P&L (IAS 38.69(b)).",
				"Step 3 — Annual amortisation: NPR 20,75,00,000 ÷ 7 years = NPR 2,96,42,857/year (straight-line).",
				"Step 4 — Tax depreciation: 25% DDB. Year 1: NPR 20,75,00,000 × 25% = NPR 5,18,75,000. Temporary difference year 1: NPR 5,18,75,000 − NPR 2,96,42,857 = NPR 2,22,32,143 (accelerated tax deduction).",
				"Step 5 — Deferred tax: DTL = NPR 2,22,32,143 × 30% = NPR 66,69,643 in year 1.",
			],
			journalEntries: [
				"Capitalisation: Dr Intangible Asset — Software NPR 20,75,00,000 / Cr Cash/Payable NPR 20,75,00,000",
				"Training expense: Dr Staff Training Expense NPR 1,20,00,000 / Cr Cash NPR 1,20,00,000",
				"Year 1 amortisation: Dr Amortisation Expense NPR 2,96,42,857 / Cr Accumulated Amortisation NPR 2,96,42,857",
			],
			difficulty: "medium",
		},
		developmentPhase: {
			title: "Nimbus Fintech — App Development Cost Capitalisation",
			context: "Nimbus Fintech Pvt Ltd (a Kathmandu-based fintech) develops a mobile payment app. Phase 1 (research/feasibility, Shrawan–Kartik): market research NPR 25,00,000, technology assessment NPR 15,00,000. Phase 2 (development, Mangsir–Chaitra): developer salaries NPR 80,00,000, cloud infrastructure for development NPR 20,00,000, UI/UX design NPR 15,00,000. Phase 3 (post-launch, Baisakh onwards): marketing NPR 30,00,000, customer support setup NPR 10,00,000.",
			steps: [
				"Step 1 — Phase 1 (research): All NPR 40,00,000 expensed. Cannot capitalise research phase costs regardless of outcome (IAS 38.54).",
				"Step 2 — Phase 2 (development): Check six criteria — (a) technical feasibility demonstrated after Phase 1, (b) intention to complete, (c) ability to use/sell, (d) probable future economic benefits (revenue projections show NPR 2 cr/year), (e) adequate resources available, (f) costs reliably measurable. All met from Mangsir onwards.",
				"Step 3 — Capitalise development costs: NPR 80 lakh + NPR 20 lakh + NPR 15 lakh = NPR 1,15,00,000.",
				"Step 4 — Phase 3 (post-launch): Marketing NPR 30 lakh and support setup NPR 10 lakh are expensed — post-launch costs cannot be capitalised (IAS 38.71).",
				"Step 5 — Amortisation begins when app is available for use. Estimated useful life: 4 years. Annual amortisation: NPR 1,15,00,000 ÷ 4 = NPR 28,75,000. Review for impairment annually if revenue targets are not met.",
			],
			journalEntries: [
				"Research phase: Dr Research Expense NPR 40,00,000 / Cr Cash NPR 40,00,000",
				"Development capitalisation: Dr Intangible Asset — App Development NPR 1,15,00,000 / Cr Cash/Accruals NPR 1,15,00,000",
				"Post-launch expense: Dr Marketing & Support Expense NPR 40,00,000 / Cr Cash NPR 40,00,000",
				"Amortisation: Dr Amortisation Expense NPR 28,75,000 / Cr Accumulated Amortisation NPR 28,75,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Six development criteria must ALL be met simultaneously for capitalisation: technical feasibility, intention to complete, ability to use/sell, probable future economic benefits, adequate resources, reliable measurement. If ANY ONE fails, expense the costs. Research phase costs are ALWAYS expensed." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates incorrectly capitalise staff training costs, marketing costs, and post-launch costs as part of intangible assets. These are explicitly excluded by IAS 38. Only costs directly attributable to preparing the asset for intended use are capitalised." },
			{ source: "Exam Technique", tip: "Internally generated brands, customer lists, and publishing titles can NEVER be capitalised — IAS 38.63–64 specifically prohibits this. Only brands acquired in a business combination under NFRS 3 appear on the balance sheet." },
			{ source: "Recurring Pattern", tip: "Finite life intangibles are amortised. Indefinite life intangibles are NOT amortised but tested for impairment annually under NAS 36. 'Indefinite' does not mean 'infinite' — it means there is no foreseeable limit to the period of expected benefit." },
			{ source: "Nepal-specific", tip: "Core banking software is the largest intangible for Nepali BFIs. Know the capitalisation criteria: licence fee + customisation + testing = capitalise. Training + maintenance fees = expense. Tax depreciation at 25% DDB vs accounting amortisation creates deferred tax." },
			{ source: "Exam Technique", tip: "Website development: planning phase = expense (like research). App/infrastructure development = capitalise. Content development = usually expense unless it creates revenue-generating functionality. Operating costs = always expense." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Training and implementation costs capitalised as part of software",
			description: "Entities capitalise staff training, change management, and user acceptance testing costs as part of core banking or ERP system implementation. NAS 38 only allows capitalisation of costs directly attributable to preparing the asset for use — training costs are specifically excluded regardless of their size.",
			sector: "Banking",
		},
		{
			title: "Research and development phases not distinguished",
			description: "Entities capitalise all R&D expenditure without distinguishing the research phase (always expensed) from the development phase (capitalised if six criteria met). The burden of proof lies with the entity to demonstrate when the development phase begins.",
			sector: "Pharmaceuticals",
		},
		{
			title: "Software maintenance costs capitalised instead of expensed",
			description: "Annual software maintenance contracts (AMC) are capitalised as additions to the software intangible. Maintenance costs that maintain existing functionality are period expenses. Only enhancements that significantly increase capabilities or extend useful life may be capitalised.",
			sector: "Banking & Telecom",
		},
		{
			title: "Licence renewal costs automatically capitalised",
			description: "When telecom or hydropower licences are renewed, entities capitalise the renewal fee without assessing whether it extends the existing licence or merely maintains it. Only renewal costs that extend the licence term beyond the original period create a new asset component.",
			sector: "Telecom & Hydropower",
		},
		{
			title: "Goodwill amortised instead of tested for impairment",
			description: "Some entities amortise goodwill arising from business combinations over an arbitrary period (5–10 years). Under NFRS, goodwill has an indefinite life and must be tested annually for impairment under NAS 36 — it is never amortised.",
			sector: "Banking (post-merger)",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "NAS 16 covers tangible assets; NAS 38 covers intangible. Items with both physical and intangible elements require judgment on which standard applies (e.g., software embedded in hardware)",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Intangible assets with indefinite useful lives must be tested annually for impairment under NAS 36. Finite-life intangibles are tested when impairment indicators exist",
		},
		{
			slug: "nfrs-3",
			nfrsNumber: "NFRS 3",
			title: "Business Combinations",
			reason: "Intangible assets acquired in business combinations (brands, customer relationships, licences) are recognised separately from goodwill at fair value under NFRS 3",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Amortisation differences between NAS 38 (straight-line) and Income Tax Act (25% DDB) create temporary differences generating deferred tax under NAS 12",
		},
	],
};
