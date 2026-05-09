import type { StandardPageData } from "./types";

export const nfrs16: StandardPageData = {
	slug: "nfrs-16",
	nfrsNumber: "NFRS 16",
	ifrsEquivalent: "IFRS 16",
	title: "Leases",
	topic: "leases",
	effectiveDate: "2021-07-16",
	ifrsEffectiveDate: "2019-01-01",
	status: "aligned",
	heroMotif: "key",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA TX","ACCA ATX","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Lessee — Single Model",
				ifrs: "All leases on balance sheet (ROU asset + lease liability). No operating/finance distinction for lessees (IFRS 16.22)",
				nfrs: "Identical single-model approach adopted. Major shift from NAS 17 operating/finance lease classification",
				nepalImpact: "Entities with significant operating leases (airline seat leases, retail store rentals, office spaces) saw balance sheets expand substantially. Debt covenants needed renegotiation for affected BFIs and listed entities",
				significance: "low",
			},
			{
				topic: "Discount Rate for Lessee",
				ifrs: "Rate implicit in the lease, or if not determinable, lessee's incremental borrowing rate (IBR) (IFRS 16.26)",
				nfrs: "Same hierarchy. But deriving IBR in Nepal is complex — no established yield curves for non-sovereign borrowers",
				nepalImpact: "Most Nepali lessees cannot determine the rate implicit in the lease and must estimate IBR. Banks use their cost of funds; corporates use their marginal borrowing rate. Wide variation in IBR estimates across entities affects comparability",
				significance: "medium",
			},
			{
				topic: "Lessor Accounting",
				ifrs: "Retained operating/finance lease classification for lessors. Essentially unchanged from IAS 17 (IFRS 16.61–66)",
				nfrs: "Same dual-model approach for lessors. Real estate lessors and equipment leasing companies continue classifying leases",
				nepalImpact: "Real estate companies in Kathmandu leasing commercial properties continue with operating lease treatment. Finance companies offering hire-purchase apply finance lease classification. Limited practical change for lessors",
				significance: "low",
			},
			{
				topic: "Advance Deposits (Lease Key Money)",
				ifrs: "No specific guidance — general principles apply. Deposits refundable at lease end are financial assets",
				nfrs: "Same treatment, but Nepal's commercial lease market commonly requires 6–24 months' rent as non-refundable key money (bhakal/chabi paisa)",
				nepalImpact: "Non-refundable key money is a prepayment (part of the cost of obtaining the lease) spread over the lease term. Refundable deposits are financial assets measured at amortised cost. Many entities misclassify key money as a deposit receivable",
				significance: "high",
			},
			{
				topic: "Regulatory Approval for BFI Leases",
				ifrs: "No regulatory overlay on lease decisions",
				nfrs: "NRB requires BFIs to seek approval for lease commitments above specified thresholds and include lease liabilities in capital adequacy calculations",
				nepalImpact: "BFIs leasing branch premises must factor NFRS 16 lease liabilities into their regulatory capital ratio. Large lease portfolios can materially reduce capital adequacy — a constraint on branch network expansion",
				significance: "high",
			},
			{
				topic: "Small Entity Exemption",
				ifrs: "Short-term (≤12 months) and low-value asset exemptions available (IFRS 16.5–8). No entity-size exemption",
				nfrs: "Same exemptions. Additionally, SMEs following NFRS for SMEs (Section 20) use simplified lease accounting",
				nepalImpact: "Class C and D entities under NRB classification may use NFRS for SMEs. Larger entities transitioning from SME framework to full NFRS face significant lease capitalisation adjustments",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to include NFRS 16 lease liabilities in leverage and capital adequacy calculations. BFIs must seek NRB approval for lease commitments above specified thresholds (varies by BFI class). ROU assets are risk-weighted at 100% for capital adequacy. NRB's Unified Directive requires BFIs to report lease portfolios separately in quarterly returns, distinguishing branch premises, vehicle leases, and equipment leases.",
		sebon: "SEBON requires listed entities to disclose total lease liabilities, maturity analysis, and weighted average IBR in annual reports. Material lease commitments must be reported in quarterly filings. SEBON has queried companies where transition to NFRS 16 significantly changed debt-to-equity ratios without adequate disclosure of the impact.",
		ird: "IRD treats lease payments as deductible operating expenses under Income Tax Act 2058 — the old operating lease approach. NFRS 16 depreciation of ROU assets and interest on lease liabilities do not directly correspond to IRD's deduction pattern. This creates temporary differences: NFRS 16 front-loads expense (depreciation + interest > straight-line rent in early years), while IRD allows straight-line rent deduction. Entities must track both for deferred tax purposes.",
	},

	timeline: [
		{ date: "Jan 2016", label: "IFRS 16 Issued", description: "IASB replaces IAS 17 with single lessee model" },
		{ date: "Jan 2019", label: "IFRS 16 Effective", description: "Global mandatory adoption" },
		{ date: "Jul 2021", label: "NFRS 16 Effective", description: "Nepal adoption (1 Shrawan 2078 BS)", highlight: true },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Lease",
			coreQuestion: "Does the contract contain a lease — right to control the use of an identified asset?",
			nepalExample: "Himalaya Garments rents a factory floor in Biratnagar's industrial zone. The floor is a specific, physically distinct space. Himalaya Garments directs how and when to use it, and obtains substantially all economic benefits. This is a lease. But a shared warehouse where the owner decides which bay to allocate is likely not.",
			paraRef: "IFRS 16.9–11",
		},
		{
			number: 2,
			name: "Determine the Lease Term",
			coreQuestion: "How long will the lease last, including reasonably certain extensions?",
			nepalExample: "Office lease in Kathmandu: 5-year base term with two 3-year renewal options. The lessee has invested NPR 50 lakh in leasehold improvements. Renewal is reasonably certain — use 11 years (5 + 3 + 3). But if improvements are easily removable and alternatives are available, use 5 years.",
			paraRef: "IFRS 16.18–21",
		},
		{
			number: 3,
			name: "Measure Lease Liability",
			coreQuestion: "What is the present value of future lease payments?",
			nepalExample: "Himalaya Garments: monthly rent NPR 3,00,000 for 5 years = 60 payments. IBR = 10% (based on 5-year bank loan rate). PV of annuity: NPR 3,00,000 × annuity factor (60 months, 10%/12) ≈ NPR 1,41,00,000. This is the initial lease liability.",
			paraRef: "IFRS 16.26–28",
		},
		{
			number: 4,
			name: "Recognise ROU Asset",
			coreQuestion: "What is the initial cost of the right-of-use asset?",
			nepalExample: "ROU asset = lease liability NPR 1,41,00,000 + key money (non-refundable) NPR 12,00,000 + estimated restoration costs NPR 3,00,000 = NPR 1,56,00,000. Depreciate over lease term (5 years) on straight-line basis = NPR 31,20,000/year.",
			paraRef: "IFRS 16.23–25",
		},
		{
			number: 5,
			name: "Subsequent Measurement",
			coreQuestion: "How do you account for lease payments over the lease term?",
			nepalExample: "Each monthly payment of NPR 3,00,000 is split: interest component (liability × 10%/12) and principal component (remainder reduces liability). In month 1: interest = NPR 1,41,00,000 × 10%/12 = NPR 1,17,500. Principal = NPR 3,00,000 − NPR 1,17,500 = NPR 1,82,500.",
			paraRef: "IFRS 16.36–38",
		},
	],

	inlineExamples: {
		officeLease: {
			title: "Himalaya Garments — Office Lease Capitalisation",
			context: "Himalaya Garments Pvt Ltd signs a 5-year lease for office space in Durbarmarg, Kathmandu. Monthly rent: NPR 2,50,000. Non-refundable key money: NPR 15,00,000 paid upfront. Refundable security deposit: NPR 5,00,000 (returned at lease end). IBR: 9%. No renewal option. Restoration obligation estimated at NPR 4,00,000.",
			steps: [
				"Step 1 — Lease identification: specific office floor identified, Himalaya Garments directs use, obtains all benefits. This is a lease.",
				"Step 2 — Lease liability: PV of 60 monthly payments of NPR 2,50,000 at 9%/12 = 0.75% monthly. PV = NPR 2,50,000 × [(1 − (1.0075)^−60) / 0.0075] ≈ NPR 1,20,55,000.",
				"Step 3 — ROU asset: Lease liability NPR 1,20,55,000 + key money NPR 15,00,000 + restoration NPR 4,00,000 = NPR 1,39,55,000.",
				"Step 4 — Security deposit: Separate financial asset at amortised cost. PV of NPR 5,00,000 receivable in 5 years at 9% = NPR 3,25,000. Difference NPR 1,75,000 is additional lease payment (added to ROU asset). Updated ROU = NPR 1,41,30,000.",
				"Step 5 — Annual depreciation of ROU: NPR 1,41,30,000 ÷ 5 = NPR 28,26,000/year. Monthly interest: month 1 = NPR 1,20,55,000 × 0.75% = NPR 90,413. Total first-year expense (depreciation + interest) > rent payments — front-loading effect.",
			],
			journalEntries: [
				"Commencement: Dr ROU Asset NPR 1,41,30,000 / Cr Lease Liability NPR 1,20,55,000 / Cr Cash (key money) NPR 15,00,000 / Cr Restoration Provision NPR 4,00,000 / Cr Deposit Discount NPR 1,75,000",
				"Security deposit: Dr Financial Asset (Deposit) NPR 3,25,000 / Dr ROU Asset NPR 1,75,000 / Cr Cash NPR 5,00,000",
				"Monthly payment: Dr Lease Liability (principal) / Dr Interest Expense / Cr Cash NPR 2,50,000",
				"Annual depreciation: Dr Depreciation Expense NPR 28,26,000 / Cr Accumulated Depreciation — ROU NPR 28,26,000",
			],
			difficulty: "medium",
		},
		saleAndLeaseback: {
			title: "Everest Manufacturing — Sale and Leaseback of Factory",
			context: "Everest Manufacturing Ltd sells its Hetauda factory to a real estate investor for NPR 20 crore (fair value confirmed by independent valuer). Carrying amount: NPR 12 crore. Simultaneously, Everest leases back the factory for 15 years at NPR 15,00,000/month. The transaction qualifies as a sale under NFRS 15 (buyer obtains control). IBR: 11%.",
			steps: [
				"Step 1 — Sale qualification: buyer obtains physical possession, legal title transfers, Everest has no repurchase option. Transfer of control confirmed under NFRS 15 — this is a genuine sale.",
				"Step 2 — ROU asset retained: Everest retains a right-of-use for 15 years. ROU asset = proportion of previous carrying amount × (PV of lease payments ÷ fair value). PV of lease payments at 11%: NPR 15,00,000 × annuity factor (180 months, 11%/12) ≈ NPR 12.8 crore.",
				"Step 3 — ROU asset = NPR 12 crore × (NPR 12.8 crore ÷ NPR 20 crore) = NPR 7.68 crore.",
				"Step 4 — Gain on sale: Total gain = NPR 20 crore − NPR 12 crore = NPR 8 crore. But only the portion relating to rights transferred to buyer is recognised in P&L. Gain in P&L = NPR 8 crore × (NPR 7.2 crore ÷ NPR 20 crore) = NPR 2.88 crore. (NPR 7.2 crore = NPR 20 crore − NPR 12.8 crore, the rights transferred.)",
				"Step 5 — Lease liability: NPR 12.8 crore. Everest's balance sheet now shows ROU asset NPR 7.68 crore and lease liability NPR 12.8 crore instead of PPE NPR 12 crore. Cash received: NPR 20 crore.",
			],
			journalEntries: [
				"Sale proceeds: Dr Cash NPR 20,00,00,000 / Cr Factory (PPE) NPR 12,00,00,000 / Cr Gain on Sale NPR 2,88,00,000 / Cr Lease Liability NPR 12,80,00,000 (balancing adjustments for ROU)",
				"ROU asset recognition: Dr ROU Asset NPR 7,68,00,000 (as part of the composite entry above)",
				"Monthly lease payment: Dr Lease Liability (principal) / Dr Interest Expense (NPR 12.8 crore × 11%/12) / Cr Cash NPR 15,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "Lease identification is step zero — candidates jump to measurement without establishing whether a contract contains a lease. Apply the two-test framework: (1) is there an identified asset? (2) does the customer have the right to control its use (direct use + obtain substantially all economic benefits)?" },
			{ source: "Recurring Pattern", tip: "Lease term judgement is a favourite. Don't automatically include all extension options. Assess 'reasonably certain' considering: economic incentives (leasehold improvements, relocation costs), business reasons, and past practice. Show your reasoning." },
			{ source: "Dec 2023 Examiner Report", tip: "IBR derivation: candidates state 'we use the IBR' without explaining what it is. IBR = the rate the lessee would have to pay to borrow, over a similar term and with similar security, the funds necessary to obtain an asset of similar value. Reference the entity's actual borrowing costs." },
			{ source: "Recurring Pattern", tip: "Sale-and-leaseback: the most complex IFRS 16 topic. Step 1: is there a sale (IFRS 15 control test)? Step 2: if yes, recognise only the gain relating to the rights transferred. Step 3: measure ROU asset as proportion of previous carrying amount. Candidates frequently recognise the full gain." },
			{ source: "Exam Technique", tip: "Show the split of each lease payment into principal and interest components. Examiners award marks for the amortisation table approach even if arithmetic errors exist. At minimum, show month 1 and the end-of-year-1 liability balance." },
			{ source: "Nepal-specific", tip: "For CA Nepal: non-refundable key money (bhakal/chabi paisa) treatment is a distinctive Nepal topic. Key money is a prepaid lease cost added to the ROU asset, not a receivable. Refundable deposits are financial assets at amortised cost — the discount element adjusts the ROU asset." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Non-refundable key money treated as receivable deposit",
			description: "Nepali commercial leases commonly require 6–24 months of non-refundable key money (bhakal/chabi paisa). Entities incorrectly classify this as a deposit receivable on the balance sheet. Non-refundable key money is a prepayment — part of the cost of obtaining the lease — and should be included in the ROU asset cost and depreciated over the lease term.",
			sector: "Real Estate",
		},
		{
			title: "All extension options included in lease term",
			description: "Entities automatically include all contractual extension options in the lease term, regardless of whether exercise is 'reasonably certain.' This inflates both the ROU asset and lease liability. Each extension option must be assessed individually — only include if the lessee has significant economic incentive to exercise.",
			sector: "Listed Companies",
		},
		{
			title: "Operating lease expense pattern used for NFRS 16",
			description: "Some entities continue expensing lease payments on a straight-line basis (old NAS 17 approach) instead of recognising depreciation + interest under NFRS 16. This understates assets, understates liabilities, and misstates the timing of expense recognition (NFRS 16 front-loads total expense).",
			sector: "Manufacturing",
		},
		{
			title: "Lease liabilities excluded from debt covenant calculations",
			description: "BFIs and listed companies exclude NFRS 16 lease liabilities from debt-to-equity and leverage ratio calculations, arguing they are 'not real debt.' Lease liabilities are financial liabilities — creditors and regulators include them. Covenant breaches may be missed without proper inclusion.",
			sector: "Banking & Finance",
		},
		{
			title: "Short-term exemption misapplied to rolling leases",
			description: "Entities claim the short-term lease exemption (≤12 months) for leases that are technically month-to-month but have been renewed continuously for years with no realistic prospect of termination. If the practical reality is a multi-year commitment, the short-term exemption is inappropriate — substance over form applies.",
			sector: "Retail",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Sale-and-leaseback requires NFRS 15 analysis (is there a sale?) before NFRS 16 leaseback accounting applies",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant & Equipment",
			reason: "ROU assets are depreciated using NAS 16 principles — shorter of lease term and useful life unless ownership transfers",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Lease liabilities are financial liabilities; refundable deposits are financial assets measured under NFRS 9",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "NFRS 16 expense pattern (depreciation + interest) differs from IRD deduction (straight-line rent), creating temporary differences",
		},
	],
};
