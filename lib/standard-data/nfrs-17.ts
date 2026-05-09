import type { StandardPageData } from "./types";

export const nfrs17: StandardPageData = {
	slug: "nfrs-17",
	nfrsNumber: "NFRS 17",
	ifrsEquivalent: "IFRS 17",
	title: "Insurance Contracts",
	topic: "insurance",
	effectiveDate: "2024-07-16",
	ifrsEffectiveDate: "2023-01-01",
	status: "deferred",
	heroMotif: "shield",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AAA","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Deferred",
		keyDifferencesCount: 6,
		carveOutCount: 1,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Measurement Models",
				ifrs: "General Measurement Model (GMM/BBA), Variable Fee Approach (VFA) for direct participation, Premium Allocation Approach (PAA) for short-duration (IFRS 17.29–71)",
				nfrs: "Same three models available. Nepal's non-life insurers predominantly use PAA; life insurers must implement GMM/VFA",
				nepalImpact: "Non-life sector (motor, fire, marine) finds PAA manageable. Life insurers face the full complexity of GMM — estimating future cash flows, risk adjustment, and CSM for 20–30 year endowment and whole-life products",
				significance: "low",
			},
			{
				topic: "Beema Samiti Solvency vs NFRS 17",
				ifrs: "IFRS 17 is the accounting standard; solvency regulation is separate (jurisdiction-specific)",
				nfrs: "Beema Samiti (Insurance Board) maintains its own solvency framework with prescribed reserving requirements that predate NFRS 17",
				nepalImpact: "Insurers must maintain dual reporting: NFRS 17 for financial statements and Beema Samiti prescribed reserves for regulatory returns. Where Beema Samiti requirements are more conservative, regulatory reserves may exceed NFRS 17 liabilities — creating regulatory capital friction",
				significance: "high",
			},
			{
				topic: "Life Insurance Mortality Tables",
				ifrs: "Entities use best-estimate assumptions reflecting expected mortality/morbidity (IFRS 17.33)",
				nfrs: "Same requirement, but Nepal lacks a Nepal-specific mortality table. Insurers use Indian LIC tables (1994–96 or 2006–08) as proxies",
				nepalImpact: "Using Indian tables introduces basis risk — Nepali mortality experience may differ from Indian data. Beema Samiti has initiated development of a Nepal-specific table but it is not yet complete. This affects discount rates, risk adjustments, and CSM calculations",
				significance: "high",
			},
			{
				topic: "Contractual Service Margin (CSM)",
				ifrs: "CSM represents unearned profit, released to P&L as services are provided (IFRS 17.44–46)",
				nfrs: "Same concept — entirely new for Nepal's insurance industry which previously recognised premium income on a written or earned basis",
				nepalImpact: "Transition to CSM fundamentally changed when profit is recognised. Previously, first-year premium on a life policy was largely in year-1 revenue. Under NFRS 17, profit is spread over the 20–30 year coverage period via CSM amortisation",
				significance: "medium",
			},
			{
				topic: "Reinsurance Contracts Held",
				ifrs: "Separate measurement of reinsurance held; loss recovery recognised immediately when underlying contracts are onerous (IFRS 17.62–70)",
				nfrs: "Same treatment. Nepal's reinsurers are predominantly international (Munich Re, Swiss Re, etc.) with contracts denominated in USD",
				nepalImpact: "Foreign currency reinsurance creates additional complexity — reinsurance assets must be translated at reporting-date rates. Nepal's limited reinsurance market means most significant risks are placed internationally, and NRB exchange rate policies affect reinsurance asset measurements",
				significance: "medium",
			},
			{
				topic: "Effective Date & Transition",
				ifrs: "Mandatory 1 January 2023. Full retrospective, modified retrospective, or fair value approach for transition (IFRS 17.C1–C28)",
				nfrs: "Nepal adopted from 1 Shrawan 2080 BS (July 2023) — simultaneous with global IFRS 17 adoption",
				nepalImpact: "Nepal's early adoption (no lag unlike other NFRS) was driven by international reinsurer requirements. However, most Nepali life insurers opted for modified retrospective approach due to insufficient historical data for full retrospective",
				significance: "high",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB plays an indirect role: BFIs that own insurance subsidiaries must consolidate NFRS 17 results. NRB requires that insurance subsidiary financial statements be prepared under full NFRS (including NFRS 17) for consolidated group reporting. NRB also reviews insurance company investments as part of financial sector stability monitoring.",
		sebon: "SEBON requires listed insurers to disclose NFRS 17 transition impacts, CSM movements, risk adjustment methodology, and insurance revenue disaggregation in annual reports. SEBON has extended filing deadlines for the first two years of NFRS 17 adoption, recognising implementation complexity. Listed insurers must present the new NFRS 17 performance statement format (insurance revenue, insurance service expenses, insurance finance income/expenses).",
		ird: "IRD continues to follow the Insurance Act 2049 and Income Tax Act 2058 for taxable income computation. Tax treatment of insurance income diverges significantly from NFRS 17: premium income is taxable when written (not when earned under CSM release), claims are deductible when paid or properly provisioned under Beema Samiti rules (not when the insurance service expense is recognised). These timing differences create substantial deferred tax assets and liabilities that must be tracked at a granular level.",
	},

	timeline: [
		{ date: "May 2017", label: "IFRS 17 Issued", description: "IASB issues after 20+ years of development" },
		{ date: "Jan 2023", label: "IFRS 17 Effective", description: "Global mandatory adoption" },
		{ date: "Jul 2023", label: "Original Nepal Date", description: "Initially scheduled for 1 Shrawan 2080 BS" },
		{ date: "Jul 2024", label: "NFRS 17 Effective", description: "ASB Nepal deferred to 1 Shrawan 2081 BS", highlight: true },
		{ date: "2025–2026", label: "First Filings", description: "First full annual reports under NFRS 17 by Nepali insurers" },
		{ date: "2026", label: "Current", description: "Second year of reporting; bedding down" },
	],

	steps: [
		{
			number: 1,
			name: "Identify Insurance Contracts",
			coreQuestion: "Does the contract transfer significant insurance risk?",
			nepalExample: "Nepal Life Insurance issues a 20-year endowment policy: if the policyholder dies, the sum assured (NPR 20 lakh) is paid; if they survive, maturity benefit (NPR 25 lakh) is paid. Significant insurance risk exists — the death benefit creates meaningful downside for the insurer. This is an insurance contract under NFRS 17.",
			paraRef: "IFRS 17.2–7",
		},
		{
			number: 2,
			name: "Separate Components",
			coreQuestion: "Are there embedded derivatives, investment components, or goods/services to separate?",
			nepalExample: "A unit-linked insurance plan (ULIP) sold by a Nepali life insurer has an investment component (linked to fund performance) and an insurance component (mortality risk). The investment component is separated if it is distinct. If the insurer issues a pure investment product with no mortality risk, it falls under NFRS 9, not NFRS 17.",
			paraRef: "IFRS 17.10–13",
		},
		{
			number: 3,
			name: "Select Measurement Model",
			coreQuestion: "GMM, VFA, or PAA — which applies to this group of contracts?",
			nepalExample: "Motor insurance (1-year term): PAA eligible because coverage period ≤ 1 year. Whole-life insurance: GMM (default model for long-duration). ULIP with fund-linked returns: VFA (direct participation features — insurer promises return based on underlying items).",
			paraRef: "IFRS 17.29–71",
		},
		{
			number: 4,
			name: "Measure Fulfilment Cash Flows",
			coreQuestion: "What are the expected future cash flows, discount rate, and risk adjustment?",
			nepalExample: "20-year endowment (1,000 policies, NPR 20 lakh SA): estimate claim cash flows (using Indian LIC mortality table as proxy), expense cash flows, and premium receipts. Discount at risk-free rate + illiquidity premium. Add risk adjustment (confidence level approach: 75th percentile of claims distribution). Residual = CSM (unearned profit).",
			paraRef: "IFRS 17.33–37",
		},
		{
			number: 5,
			name: "Recognise Insurance Revenue",
			coreQuestion: "How is premium income recognised over the coverage period?",
			nepalExample: "Under NFRS 17, insurance revenue is NOT equal to premiums collected. Revenue = expected claims + expenses allocated to the period + risk adjustment release + CSM amortisation. For the endowment, revenue is recognised over 20 years as services are provided — fundamentally different from the old 'premium written' basis.",
			paraRef: "IFRS 17.83–86",
		},
	],

	inlineExamples: {
		endowmentPortfolio: {
			title: "Nepal Life Insurance — Endowment Portfolio under GMM",
			context: "Nepal Life Insurance Ltd issues a group of 500 identical 20-year endowment policies on 1 Shrawan 2081. Sum assured: NPR 10 lakh each. Annual premium: NPR 45,000. Expected mortality: 3 per 1,000 per year (Indian LIC 2006–08 table). Risk-free rate: 8%. Risk adjustment: NPR 50 per policy per year.",
			steps: [
				"Step 1 — Future cash inflows: Premiums = 500 × NPR 45,000 × 20 years = NPR 45,00,00,000 (undiscounted). PV at 8% ≈ NPR 22,10,00,000.",
				"Step 2 — Future cash outflows: Death claims = 500 × 3/1000 × NPR 10,00,000 ≈ 1.5 deaths/year × NPR 10 lakh = NPR 15,00,000/year. Maturity claims (year 20): surviving policyholders × NPR 10,00,000. Expenses: acquisition + maintenance. PV of all outflows ≈ NPR 18,50,00,000.",
				"Step 3 — Risk adjustment: NPR 50 × 500 × 20 years, PV ≈ NPR 4,90,000.",
				"Step 4 — CSM at inception: PV(premiums) − PV(claims + expenses) − risk adjustment = NPR 22,10,00,000 − NPR 18,50,00,000 − NPR 4,90,000 = NPR 3,55,10,000. This is the expected unearned profit.",
				"Step 5 — Year 1 insurance revenue: allocated claims + expenses for year 1 + risk adjustment release (1/20) + CSM amortisation (based on coverage units). Revenue ≈ NPR 15,00,000 claims + expenses + NPR 24,500 RA release + ~NPR 17,75,000 CSM release = significantly less than cash premium of NPR 2,25,00,000 collected.",
			],
			journalEntries: [
				"Premium received: Dr Cash NPR 2,25,00,000 / Cr Insurance Contract Liability NPR 2,25,00,000",
				"Insurance revenue (year 1): Dr Insurance Contract Liability / Cr Insurance Revenue (allocated per coverage units)",
				"Claims paid: Dr Insurance Service Expense NPR 15,00,000 / Cr Cash NPR 15,00,000",
				"CSM amortisation: Dr Insurance Contract Liability (CSM component) / Cr Insurance Revenue (part of revenue recognition)",
			],
			difficulty: "pro",
		},
		motorPAA: {
			title: "Sagarmatha Non-Life — Motor Insurance under PAA",
			context: "Sagarmatha Non-Life Insurance Ltd writes 10,000 annual motor insurance policies effective 1 Shrawan 2082. Total annual premium: NPR 5,00,00,000. Expected claims ratio: 65%. Acquisition costs (commissions): 15% of premium. Policy term: 12 months.",
			steps: [
				"Step 1 — PAA eligibility: coverage period ≤ 12 months, and PAA measurement would not produce materially different results from GMM. PAA is appropriate.",
				"Step 2 — Initial recognition: liability for remaining coverage (LRC) = premium received minus acquisition costs (if expensed). If commissions deferred: LRC = NPR 5,00,00,000. Acquisition costs NPR 75,00,000 are recognised as part of the LRC or immediately expensed (policy choice).",
				"Step 3 — Revenue recognition: straight-line over 12 months (even coverage). Monthly revenue = NPR 5,00,00,000 ÷ 12 ≈ NPR 41,67,000. After 6 months (Poush end): revenue = NPR 2,50,00,000, remaining LRC = NPR 2,50,00,000.",
				"Step 4 — Claims incurred: 65% × NPR 5,00,00,000 = NPR 3,25,00,000 expected. Actual claims through 6 months: NPR 1,80,00,000 paid + NPR 40,00,000 IBNR provision = NPR 2,20,00,000. This forms the liability for incurred claims (LIC).",
				"Step 5 — Onerous test: if floods in Terai cause claim surge, check whether remaining coverage is onerous (expected claims > remaining LRC). If yes, recognise loss immediately — do not wait until claims are reported.",
			],
			journalEntries: [
				"Premium received: Dr Cash NPR 5,00,00,000 / Cr Insurance Contract Liability (LRC) NPR 5,00,00,000",
				"Monthly revenue: Dr Insurance Contract Liability (LRC) NPR 41,67,000 / Cr Insurance Revenue NPR 41,67,000",
				"Claims paid: Dr Insurance Service Expense NPR 1,80,00,000 / Cr Cash NPR 1,80,00,000",
				"IBNR provision: Dr Insurance Service Expense NPR 40,00,000 / Cr Insurance Contract Liability (LIC) NPR 40,00,000",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "NFRS 17/IFRS 17 is now examinable. Understand the three models (GMM, VFA, PAA) and when each applies. PAA for short-duration (≤1 year), VFA for direct participation features, GMM as the default. Most exam questions focus on GMM and PAA." },
			{ source: "Recurring Pattern", tip: "CSM is the conceptual heart of IFRS 17. It represents unearned profit and is released to revenue as services are provided. Key rule: CSM cannot go negative — if expected losses exceed expected profits, the contract group is onerous and a loss is recognised immediately in P&L." },
			{ source: "Dec 2023 Examiner Report", tip: "Insurance revenue ≠ premiums. Under IFRS 17, revenue is the amount of expected claims and expenses allocated to the period, plus risk adjustment release, plus CSM amortisation. Candidates who equate revenue with premiums received get zero marks on this point." },
			{ source: "Recurring Pattern", tip: "Fulfilment cash flows have three building blocks: (1) expected future cash flows (probability-weighted), (2) discount rate adjustment (time value), (3) risk adjustment (non-financial risk). Always identify all three in your answer." },
			{ source: "Exam Technique", tip: "For PAA questions: it's essentially a simplified unearned premium approach. Revenue is the release of the liability for remaining coverage over the period. Claims create a separate liability for incurred claims. Show both components." },
			{ source: "Nepal-specific", tip: "For CA Nepal: Beema Samiti dual reporting is key. Insurers maintain regulatory reserves (Beema Samiti) alongside NFRS 17 liabilities. Where they differ, explain why — usually due to prescribed reserving methods vs best-estimate actuarial assumptions. Also discuss the mortality table issue (Indian LIC tables as proxy)." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Premium income recognised on cash/written basis",
			description: "Nepali insurers historically recognised revenue when premiums were written or collected. NFRS 17 fundamentally changes this — insurance revenue is the release of CSM, risk adjustment, and expected service costs over the coverage period. Continuing the old approach produces materially wrong revenue figures.",
			sector: "Insurance",
		},
		{
			title: "Indian mortality tables used without adjustment",
			description: "Life insurers use Indian LIC mortality tables (1994–96 or 2006–08) as direct inputs without adjusting for Nepal-specific mortality experience. While a Nepal-specific table is unavailable, insurers should analyse their own claims experience data and apply adjustments to the proxy tables — NFRS 17 requires best-estimate assumptions, not regulatory proxies.",
			sector: "Insurance",
		},
		{
			title: "CSM not updated for experience adjustments",
			description: "The CSM must be adjusted at each reporting date for changes in estimates of future service (but not for financial variables under GMM). Entities that set the CSM at inception and never update it fail to reflect changing mortality, lapse, and expense assumptions — the CSM becomes stale and profit recognition is misstated.",
			sector: "Insurance",
		},
		{
			title: "Reinsurance assets measured gross of underlying",
			description: "Insurers measure reinsurance contracts held independently from underlying direct insurance contracts but fail to recognise loss recovery when underlying contracts become onerous. NFRS 17 requires immediate recognition of the reinsurance recovery when the insurer identifies an onerous underlying group — many insurers miss this asymmetric treatment.",
			sector: "Insurance",
		},
		{
			title: "PAA applied to long-duration contracts",
			description: "Some non-life insurers apply the Premium Allocation Approach to multi-year contracts (construction all-risk, extended warranty policies) without testing whether PAA would produce materially different results from GMM. PAA is only appropriate if the coverage period is approximately one year or if the entity can demonstrate that PAA approximates GMM.",
			sector: "Insurance",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Insurance contract financial guarantees can be within NFRS 9 or NFRS 17 — issuer makes an irrevocable election. Investment components separated from insurance contracts fall under NFRS 9",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Non-insurance service components (e.g., roadside assistance in motor policies) are separated and accounted for under NFRS 15 if distinct",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Timing differences between NFRS 17 revenue recognition (CSM release) and IRD tax treatment (premium-based) create complex deferred tax computations",
		},
		{
			slug: "nfrs-16",
			nfrsNumber: "NFRS 16",
			title: "Leases",
			reason: "Insurance companies often lease branch premises — NFRS 16 lease liabilities interact with NFRS 17 fulfilment cash flow projections for expense estimation",
		},
	],
};
