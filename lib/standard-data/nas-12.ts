import type { StandardPageData } from "./types";

export const nas12: StandardPageData = {
	slug: "nas-12",
	nfrsNumber: "NAS 12",
	ifrsEquivalent: "IAS 12",
	title: "Income Taxes",
	topic: "taxes",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1998-01-01",
	status: "aligned",
	heroMotif: "tax",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","ACCA TX","ACCA ATX","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Corporate Tax Rates",
				ifrs: "Standard does not prescribe rates — entities use enacted rates in their jurisdiction",
				nfrs: "Nepal rates: 25% standard, 30% BFIs, 20% SEZ/priority sectors, with sector-specific concessions under Finance Act",
				nepalImpact: "Multi-rate environment means deferred tax must be measured at the rate expected to apply when each temporary difference reverses — not a single blended rate",
				significance: "medium",
			},
			{
				topic: "Depreciation — Tax vs Accounting",
				ifrs: "Depreciation per IAS 16 (useful life, component approach); tax depreciation varies by jurisdiction",
				nfrs: "Income Tax Act 2058 prescribes declining-balance rates by asset class (e.g., buildings 5%, vehicles 20%, computers 25%) that rarely match NAS 16 straight-line rates",
				nepalImpact: "Virtually every entity with PPE has taxable temporary differences from accelerated tax depreciation in early years. This is the single largest source of deferred tax liabilities in Nepal",
				significance: "high",
			},
			{
				topic: "ECL Provisions — Tax Deductibility",
				ifrs: "IAS 12 recognises deferred tax on provisions not yet deductible; IFRS 9 ECL is a common source",
				nfrs: "IRD allows loan loss provisions only when loans are actually written off or meet specific NRB criteria — NFRS 9 ECL provisions are generally not tax-deductible when recognised",
				nepalImpact: "BFIs carry massive deferred tax assets from ECL provisions. Recognition requires careful assessment of future taxable profits — particularly critical for stressed banks",
				significance: "high",
			},
			{
				topic: "Tax Loss Carry-forward",
				ifrs: "DTA recognised for unused tax losses if probable that future taxable profit will be available (IAS 12.34)",
				nfrs: "Nepal allows 7-year carry-forward (5 years for banking/insurance). DTA recognition requires entity-specific profitability assessment",
				nepalImpact: "Loss-making entities (airlines, struggling BFIs) must prepare detailed profit projections to support DTA recognition. Shorter carry-forward period for BFIs increases risk of expiry",
				significance: "medium",
			},
			{
				topic: "Revaluation Surplus — Deferred Tax",
				ifrs: "DTL recognised on revaluation surplus; charged to OCI, not P&L (IAS 12.61A)",
				nfrs: "Same treatment but Nepal's frequent land/building revaluations by BFIs (per NRB directive) generate large DTLs that reduce distributable reserves",
				nepalImpact: "Banks revaluing properties face significant DTLs that reduce reported equity. Some entities fail to recognise DTL on revaluation, overstating net assets",
				significance: "low",
			},
			{
				topic: "Withholding Tax on Dividends",
				ifrs: "Tax consequences of dividends recognised when dividend liability is recognised (IAS 12.52B)",
				nfrs: "Nepal imposes 5% WHT on dividends. Tax recognised when dividend declared — not when profit earned",
				nepalImpact: "Entities must not recognise DTL on undistributed profits unless dividend is declared or distribution is virtually certain. Common error: recognising WHT prematurely on retained earnings",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB directives require BFIs to recognise deferred tax on all temporary differences, including those arising from NRB-mandated provisions that exceed NFRS requirements. NRB's minimum capital adequacy calculation excludes net deferred tax assets from Tier 1 capital — creating a regulatory incentive to minimise DTAs. BFIs must reconcile NAS 12 deferred tax with NRB regulatory capital treatment in quarterly returns.",
		sebon: "SEBON requires listed entities to disclose effective tax rate reconciliation in annual reports, showing the bridge from statutory rate (25% or 30%) to effective rate. Material deferred tax balances must be explained by category. SEBON has queried companies with effective rates significantly below statutory rates — unexplained tax benefits trigger regulatory review.",
		ird: "IRD follows Income Tax Act 2058 exclusively for taxable income computation. Key divergences from NAS 12: (1) depreciation rates are prescribed and differ from accounting useful lives; (2) provisions (bad debts, warranties, leave encashment) are not deductible until paid or meeting specific criteria; (3) revaluation gains are not taxed until realised through sale. Every divergence creates a temporary difference requiring deferred tax accounting.",
	},

	timeline: [
		{ date: "Jan 1998", label: "IAS 12 Revised", description: "Balance-sheet approach replaced timing differences" },
		{ date: "Jul 2018", label: "NAS 12 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2020", label: "NRB DTA Guidance", description: "NRB circular on DTA treatment in capital adequacy", highlight: true },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Determine Tax Base",
			coreQuestion: "What does the Income Tax Act consider the value of each asset and liability?",
			nepalExample: "A machine costs NPR 50,00,000. Accounting depreciation (SLM, 10 years) = NPR 5,00,000/year. Tax depreciation (DDB 15%) = NPR 7,50,000 in year 1. After year 1: carrying amount NPR 45,00,000, tax base NPR 42,50,000.",
			paraRef: "IAS 12.7–11",
		},
		{
			number: 2,
			name: "Identify Temporary Differences",
			coreQuestion: "Where does carrying amount differ from tax base?",
			nepalExample: "Year 1 machine: carrying amount NPR 45,00,000 > tax base NPR 42,50,000 = taxable temporary difference of NPR 2,50,000. This reverses in later years when accounting depreciation exceeds tax depreciation.",
			paraRef: "IAS 12.15–18",
		},
		{
			number: 3,
			name: "Apply Recognition Criteria",
			coreQuestion: "Should a DTA or DTL be recognised?",
			nepalExample: "DTL on the machine: always recognised (no exception applies). But a loss-making airline with NPR 10 crore unused tax losses must assess whether future taxable profits in the remaining carry-forward period (7 years) make DTA recognition probable.",
			paraRef: "IAS 12.24–36",
		},
		{
			number: 4,
			name: "Measure at Expected Rate",
			coreQuestion: "Which tax rate applies when the difference reverses?",
			nepalExample: "A commercial bank (30% rate) expects to transfer a property to a subsidiary (25% rate) within 3 years. The deferred tax on that property must be measured at 25% — the rate expected at reversal, not the current 30% bank rate.",
			paraRef: "IAS 12.47–52",
		},
		{
			number: 5,
			name: "Allocate to P&L, OCI, or Equity",
			coreQuestion: "Where in the financial statements does the tax go?",
			nepalExample: "DTL arising from land revaluation surplus: recognised in OCI (not P&L). DTL from accelerated depreciation: recognised in P&L. DTL from a business combination fair value adjustment: recognised directly in equity as part of acquisition accounting.",
			paraRef: "IAS 12.57–63",
		},
	],

	inlineExamples: {
		deferredTaxComputation: {
			title: "Everest Finance — Deferred Tax Computation",
			context: "Everest Finance Ltd (a Class B BFI, 30% tax rate) has the following items at Ashad end 2082: (1) Loan loss provision per NFRS 9 ECL: NPR 8,50,00,000 (IRD allows NPR 2,00,00,000 based on actual write-offs). (2) Building carried at revalued amount NPR 25,00,00,000 (cost NPR 15,00,00,000, tax base NPR 12,00,00,000). (3) Unused tax losses: NPR 3,00,00,000 (4 years remaining).",
			steps: [
				"Step 1 — Loan loss provision: Carrying amount of loans = Gross loans − ECL provision. Tax base = Gross loans − IRD-allowed provision. Deductible temporary difference = NPR 8,50,00,000 − NPR 2,00,00,000 = NPR 6,50,00,000. DTA = NPR 6,50,00,000 × 30% = NPR 1,95,00,000.",
				"Step 2 — Revalued building: Carrying amount NPR 25,00,00,000 vs tax base NPR 12,00,00,000. Taxable temporary difference = NPR 13,00,00,000. DTL = NPR 13,00,00,000 × 30% = NPR 3,90,00,000 (recognised in OCI to match revaluation).",
				"Step 3 — Tax losses: DTA = NPR 3,00,00,000 × 30% = NPR 90,00,000. But Everest Finance must demonstrate probable future taxable profits within 4 years. Given 3-year profit history and management projections, recognition is supported.",
				"Step 4 — Net position: Total DTA = NPR 1,95,00,000 + NPR 90,00,000 = NPR 2,85,00,000. Total DTL = NPR 3,90,00,000. Net DTL = NPR 1,05,00,000 (single jurisdiction — may offset).",
				"Step 5 — NRB capital impact: Net DTA component (NPR 2,85,00,000) is excluded from Tier 1 capital per NRB directive. This affects capital adequacy ratio calculation.",
			],
			journalEntries: [
				"DTA on ECL: Dr Deferred Tax Asset NPR 1,95,00,000 / Cr Income Tax Expense (P&L) NPR 1,95,00,000",
				"DTL on revaluation: Dr Other Comprehensive Income NPR 3,90,00,000 / Cr Deferred Tax Liability NPR 3,90,00,000",
				"DTA on losses: Dr Deferred Tax Asset NPR 90,00,000 / Cr Income Tax Expense (P&L) NPR 90,00,000",
			],
			difficulty: "pro",
		},
		currentTax: {
			title: "Pashupati Trading — Current Tax with Temporary Differences",
			context: "Pashupati Trading Pvt Ltd (25% tax rate) earned accounting profit of NPR 2,00,00,000 in FY 2081/82. Adjustments: (1) Accounting depreciation NPR 15,00,000 but tax depreciation NPR 22,00,000. (2) Provision for warranty NPR 5,00,000 (not tax-deductible until paid). (3) Donation to approved charity NPR 2,00,000 (fully deductible).",
			steps: [
				"Step 1 — Start with accounting profit: NPR 2,00,00,000.",
				"Step 2 — Adjust for depreciation: Add back accounting depreciation NPR 15,00,000, deduct tax depreciation NPR 22,00,000. Net adjustment: −NPR 7,00,000.",
				"Step 3 — Adjust for warranty: Add back provision NPR 5,00,000 (not yet deductible).",
				"Step 4 — Taxable income: NPR 2,00,00,000 − NPR 7,00,000 + NPR 5,00,000 − NPR 2,00,000 = NPR 1,96,00,000.",
				"Step 5 — Current tax: NPR 1,96,00,000 × 25% = NPR 49,00,000. Deferred tax: DTL on depreciation = NPR 7,00,000 × 25% = NPR 1,75,000. DTA on warranty = NPR 5,00,000 × 25% = NPR 1,25,000.",
			],
			journalEntries: [
				"Current tax: Dr Income Tax Expense NPR 49,00,000 / Cr Current Tax Payable NPR 49,00,000",
				"DTL on depreciation: Dr Income Tax Expense NPR 1,75,000 / Cr Deferred Tax Liability NPR 1,75,000",
				"DTA on warranty: Dr Deferred Tax Asset NPR 1,25,000 / Cr Income Tax Expense NPR 1,25,000",
				"Net tax expense in P&L: NPR 49,00,000 + NPR 1,75,000 − NPR 1,25,000 = NPR 49,50,000",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "Deferred tax calculation is a guaranteed exam topic. Always use the balance-sheet approach: compare carrying amount vs tax base → temporary difference × rate. The income-statement approach (timing differences) is obsolete — never use it." },
			{ source: "Recurring Pattern", tip: "Revaluation DTL allocation is commonly tested: DTL arising from revaluation goes to OCI, not P&L. If the revalued asset is subsequently depreciated, the incremental depreciation creates a P&L deferred tax movement. Many candidates put everything in P&L." },
			{ source: "Dec 2023 Examiner Report", tip: "DTA recognition requires judgement — state the 'probable' criterion explicitly. Examiners want to see: (1) source of future taxable profit, (2) timeline for utilisation, (3) any limitations (carry-forward periods). Don't just assert 'recognise DTA' without supporting analysis." },
			{ source: "Recurring Pattern", tip: "Unused tax losses: always check expiry dates. A 5-year loss carried forward with only 1 year remaining and no expected profits → DTA should be derecognised. Show the timeline in your answer." },
			{ source: "Exam Technique", tip: "Rate changes: when a new tax rate is enacted before the reporting date, remeasure all deferred tax balances at the new rate. The adjustment goes to P&L (for P&L items) or OCI (for OCI items). State which rate you're using and why." },
			{ source: "Nepal-specific", tip: "For CA Nepal: focus on the multi-rate environment (25%/30%/20%), NRB treatment of DTAs in capital adequacy, and the interaction between NFRS 9 ECL provisions and IRD deductibility rules — all three are high-frequency topics." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "ECL provision DTA recognised without profitability assessment",
			description: "BFIs recognise large deferred tax assets on NFRS 9 ECL provisions without documenting whether future taxable profits are probable. Under NAS 12, DTA recognition requires supportable profit projections — especially critical for BFIs with deteriorating asset quality where future profits are uncertain.",
			sector: "Banking & Finance",
		},
		{
			title: "DTL on revaluation surplus not recognised",
			description: "Entities revalue land and buildings but fail to recognise the corresponding deferred tax liability. The revaluation surplus appears in equity but the related DTL is missing, overstating net assets. The DTL must be recognised in OCI and presented separately from the revaluation surplus.",
			sector: "Real Estate",
		},
		{
			title: "Single blended rate used for multi-rate entities",
			description: "Conglomerates with divisions in different tax-rate sectors (e.g., banking at 30%, manufacturing at 25%, SEZ at 20%) use a single blended rate for all deferred tax. Each temporary difference must be measured at the rate expected to apply when that specific difference reverses.",
			sector: "Listed Companies",
		},
		{
			title: "Tax losses assumed to carry forward indefinitely",
			description: "Entities recognise DTAs on tax losses without tracking the 7-year (or 5-year for BFIs) carry-forward limitation. Losses approaching expiry should be assessed individually — if utilisation before expiry is not probable, the related DTA must be derecognised.",
			sector: "Manufacturing",
		},
		{
			title: "Withholding tax recognised prematurely on retained earnings",
			description: "Companies recognise DTL for the 5% dividend WHT on their entire retained earnings balance, even though no dividend has been declared. NAS 12 requires WHT recognition only when dividend distribution is virtually certain or has been declared — not merely because profits exist.",
			sector: "Listed Companies",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant & Equipment",
			reason: "PPE depreciation differences between NAS 16 (useful life) and Income Tax Act (prescribed rates) are the most common source of deferred tax",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "ECL provisions under NFRS 9 are generally not tax-deductible until actual write-off, creating large deductible temporary differences",
		},
		{
			slug: "nas-2",
			nfrsNumber: "NAS 2",
			title: "Inventories",
			reason: "NRV write-downs not deductible for tax create deductible temporary differences requiring DTA recognition",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Revenue timing differences between NFRS 15 (performance obligation) and IRD (invoice/receipt basis) create temporary differences",
		},
	],
};
