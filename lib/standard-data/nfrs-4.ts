import type { StandardPageData } from "./types";

export const nfrs4: StandardPageData = {
	slug: "nfrs-4",
	nfrsNumber: "NFRS 4",
	ifrsEquivalent: "IFRS 4",
	title: "Insurance Contracts",
	topic: "insurance",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "shield",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned (Superseded by NFRS 17 from 17 July 2024)",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Interim Nature — Continuation of Existing Policies",
				ifrs: "IFRS 4 permitted insurers to continue pre-existing accounting policies for insurance contracts, subject to a liability adequacy test and prohibition on catastrophe/equalisation reserves (IFRS 4.13–14, 25)",
				nfrs: "Same permission. Nepal insurers continued Beema Samiti-prescribed accounting formats and Insurance Act 2049 practices during NFRS 4 period. NFRS 4 was a thin overlay on existing regulatory accounting",
				nepalImpact: "Limited immediate impact on insurer financial statements — the real change came with NFRS 17. NFRS 4 essentially said 'keep doing what you are doing, but do a liability adequacy test'",
				significance: "high",
			},
			{
				topic: "Liability Adequacy Test (LAT)",
				ifrs: "At each reporting date, insurer must assess whether recognised insurance liabilities are adequate using current estimates of future cash flows. Deficiency recognised in P&L immediately (IFRS 4.15–19)",
				nfrs: "Same requirement. For life insurers, LAT compared actuarial reserves against best-estimate liabilities using current assumptions (mortality, persistency, investment returns). For non-life, URR tested against expected future claims",
				nepalImpact: "LAT was the primary NFRS 4 safeguard. Nepal's high lapse rates (15–25% in first two years for individual life policies) and concentrated catastrophic risk exposure (earthquakes, floods) made current-estimate testing particularly important",
				significance: "high",
			},
			{
				topic: "Prohibition on Catastrophe and Equalisation Provisions",
				ifrs: "NFRS 4 prohibited provisions for possible future claims under contracts not yet in existence (catastrophe reserves) and provisions to equalise claims across years (IFRS 4.14(a))",
				nfrs: "Same prohibition. However, Beema Samiti's regulatory solvency framework still required catastrophe reserves for regulatory reporting. This created a gap between NFRS financial statements and regulatory returns",
				nepalImpact: "Non-life insurers had to maintain two sets of provisions: NFRS-compliant (no catastrophe reserves) and Beema Samiti-compliant (with catastrophe reserves). The NFRS figure was typically lower, creating confusion about 'true' solvency",
				significance: "medium",
			},
			{
				topic: "Significant Insurance Risk Test",
				ifrs: "A contract is within IFRS 4 scope only if it transfers significant insurance risk — risk other than financial risk (IFRS 4.Appendix A, B22–B28)",
				nfrs: "Same test. Relevant in Nepal for unit-linked products where insurance element may be trivial relative to investment element. Micro-insurance products (crop, livestock insurance) clearly transfer significant insurance risk",
				nepalImpact: "Classification boundary affected measurement: insurance contracts under NFRS 4 vs investment contracts under NAS 39/NFRS 9. Some endowment policies straddled the boundary depending on guaranteed maturity value relative to sum assured",
				significance: "medium",
			},
			{
				topic: "Reinsurance Accounting",
				ifrs: "Ceding company recognises reinsurance asset, tested for impairment. No offsetting of gross and ceded amounts (IFRS 4.14(d), 20)",
				nfrs: "Same treatment. Nepal's mandatory cession to Nepal Reinsurance Company (20%) plus international reinsurance arrangements created significant reinsurance assets. Presentation always gross — premium and claims shown separately for direct and reinsured portions",
				nepalImpact: "Nepal Re (established 2015) is the only domestic reinsurer. Mandatory 20% cession means every insurer has reinsurance receivables from Nepal Re. Credit risk assessment of Nepal Re as a counterparty was a practical NFRS 4 implementation issue",
				significance: "medium",
			},
			{
				topic: "Transition to NFRS 17",
				ifrs: "IFRS 17 replaced IFRS 4 effective 1 January 2023 globally. Comprehensive measurement model replacing the interim grandfathering approach",
				nfrs: "NFRS 17 effective 17 July 2024 (1 Shrawan 2081 BS). Beema Samiti mandated adoption for all insurance companies. Transition requires CSM calculation, annual cohort grouping, and current discount rates",
				nepalImpact: "NFRS 17 transition is the largest accounting change in Nepal's insurance sector history. Challenges: data gaps for retrospective calculation, fewer than 50 qualified actuaries in Nepal, system limitations for sub-annual cohort tracking, illiquid yield curve for discount rates",
				significance: "high",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB relevance is indirect — through bancassurance. BFIs distributing insurance products (agency arrangements) do not take on insurance risk and are not within NFRS 4 scope. However, BFI investments in insurance company shares/debentures are financial instruments under NAS 39/NFRS 9 from the BFI's perspective. NRB monitors BFI exposure to insurance sector risk.",
		sebon: "SEBON requires listed insurance companies to comply with NFRS, including NFRS 4 (now NFRS 17). Quarterly financial statements must be filed. SEBON scrutinises LAT adequacy, reinsurance asset recoverability, and the impact of NFRS 17 transition on reported equity. Material changes in insurance liabilities must be disclosed with explanation.",
		ird: "Insurance companies pay income tax on taxable income. Premium income is recognised for tax purposes when received (cash basis for life) or on risk inception (non-life). Claims are deductible when incurred. The difference between NFRS timing (accrual, LAT-adjusted) and tax timing creates temporary differences and deferred tax under NAS 12. Beema Samiti-mandated reserves (catastrophe, unexpired risk) may or may not be tax-deductible depending on IRD interpretation.",
	},

	timeline: [
		{ date: "Mar 2004", label: "IFRS 4 Issued", description: "IASB issues IFRS 4 as interim standard" },
		{ date: "Jan 2005", label: "IFRS 4 Effective", description: "IFRS 4 effective globally" },
		{ date: "May 2017", label: "IFRS 17 Issued", description: "IASB publishes comprehensive replacement" },
		{ date: "Jul 2018", label: "NFRS 4 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "Jul 2024", label: "NFRS 4 Superseded", description: "NFRS 17 replaces NFRS 4 (1 Shrawan 2081 BS)", highlight: true },
		{ date: "2026", label: "Current", description: "NFRS 17 applies — NFRS 4 relevant for historical periods and transition understanding" },
	],

	steps: [
		{
			number: 1,
			name: "Identify Insurance Contracts",
			coreQuestion: "Does the contract transfer significant insurance risk?",
			nepalExample: "Nepal Life Insurance issues an endowment policy: sum assured NPR 10,00,000 on death at any time during 20-year term, maturity value NPR 12,00,000 if alive at term end. Guaranteed maturity value close to sum assured → insurance element is significant (death benefit exceeds investment return). This is an insurance contract within NFRS 4.",
			paraRef: "IFRS 4.Appendix A, B22",
		},
		{
			number: 2,
			name: "Continue Existing Accounting Policies",
			coreQuestion: "What existing practices does the entity use, and are they permitted under NFRS 4?",
			nepalExample: "Nepal Life continues recognising premiums when due (life premium accounting), maintaining actuarial reserves using net premium valuation method (as prescribed by Beema Samiti), and recognising claims on intimation with IBNR provision. NFRS 4 permits continuation of these practices as long as LAT is applied.",
			paraRef: "IFRS 4.13",
		},
		{
			number: 3,
			name: "Perform Liability Adequacy Test (LAT)",
			coreQuestion: "Are recognised insurance liabilities adequate based on current estimates?",
			nepalExample: "Nepal Life's actuarial reserve (net premium method): NPR 500 crore. LAT using current estimates: update mortality (recent Nepal Life mortality experience shows improvement vs valuation tables), update lapse rates (actual 18% vs assumed 10%), update investment returns (current Nepal government bond yield 7% vs assumed 8%). Best-estimate liability: NPR 520 crore. Deficiency: NPR 20 crore → recognised in P&L immediately.",
			paraRef: "IFRS 4.15–19",
		},
		{
			number: 4,
			name: "Account for Reinsurance",
			coreQuestion: "Is the reinsurance asset properly recognised and not offset against gross liabilities?",
			nepalExample: "Nepal Life cedes 20% of all term life policies to Nepal Re (mandatory cession) and 30% of large-sum policies to Swiss Re. Reinsurance asset: NPR 80 crore (recoverable from reinsurers for outstanding claims + unearned ceded premiums). Presented separately — not offset against gross insurance liabilities. Nepal Re credit risk assessed: government-backed, no impairment indicator.",
			paraRef: "IFRS 4.14(d), 20",
		},
		{
			number: 5,
			name: "Prepare for NFRS 17 Transition",
			coreQuestion: "What data, systems, and actuarial resources are needed for NFRS 17?",
			nepalExample: "Nepal Life's transition plan: (a) Group contracts into annual cohorts by profitability (onerous, profitable, other). (b) Choose measurement model — BBA (building block approach) for long-term life, PAA (premium allocation approach) for short-term non-life subsidiary. (c) Calculate CSM for each group. (d) Determine discount rates from Nepal government bond yield curve. (e) Engage actuarial firm for full retrospective calculation where data available, modified retrospective for older cohorts.",
			paraRef: "IFRS 17.C1–C28",
		},
	],

	inlineExamples: {
		liabilityAdequacyTest: {
			title: "Nepal Life Insurance — Liability Adequacy Test",
			context: "Nepal Life Insurance Company has recognised insurance liabilities of NPR 500,00,00,000 (NPR 500 crore) based on the net premium valuation method prescribed by Beema Samiti. At the reporting date (Ashad-end 2081 BS), management must perform the LAT under NFRS 4 using current estimates of future cash flows.",
			steps: [
				"Step 1 — Identify recognised liabilities: Actuarial reserve NPR 500 crore (net premium valuation). Less: deferred acquisition costs NPR 15 crore. Net amount to test: NPR 485 crore.",
				"Step 2 — Current estimate of future cash flows: Project future death claims, maturity payments, surrender values, and annuity payments using current assumptions. Mortality: updated Nepal Life experience tables (slightly lower than valuation tables). Lapse rates: actual experience 18% (higher than 10% assumed in valuation — reduces future obligations). Investment return: 7% (current government bond yield, lower than 8% assumed — increases liability).",
				"Step 3 — Best-estimate liability: NPR 505 crore (lapse effect reduces liability by NPR 30 crore, but lower investment return increases it by NPR 50 crore, net increase NPR 20 crore).",
				"Step 4 — LAT result: Best estimate NPR 505 crore > Recognised liability (net of DAC) NPR 485 crore. Deficiency: NPR 20 crore.",
				"Step 5 — Recognise deficiency: Entire NPR 20 crore recognised in P&L immediately. Insurance liabilities increased from NPR 500 crore to NPR 520 crore.",
			],
			journalEntries: [
				"LAT deficiency: Dr Insurance Contract Expense (P&L) NPR 20,00,00,000 / Cr Insurance Contract Liabilities NPR 20,00,00,000",
				"No recycling — the deficiency is a P&L charge, not OCI.",
			],
			difficulty: "medium",
		},
		nfrs17Transition: {
			title: "Nepal Life Insurance — NFRS 17 Transition from NFRS 4",
			context: "Nepal Life Insurance transitions from NFRS 4 to NFRS 17 on 1 Shrawan 2081 BS (17 July 2024). The company must establish the contractual service margin (CSM) for existing contracts and regroup contracts into annual cohorts. The largest portfolio is individual endowment policies issued over the past 15 years.",
			steps: [
				"Step 1 — Choose transition approach: Full retrospective for cohorts issued in last 5 years (good data). Modified retrospective for cohorts 5–10 years old (partial data). Fair value approach for cohorts >10 years old (insufficient data).",
				"Step 2 — Annual cohort grouping: Group endowment policies by year of issue and profitability. FY 2079/80 cohort: 12,000 policies, profitable at inception (low guaranteed rates). FY 2070/71 cohort: 8,000 policies, potentially onerous (high guaranteed rates of 9% vs current yield 7%).",
				"Step 3 — Full retrospective (FY 2079/80 cohort): Recalculate as if NFRS 17 had always applied. Present value of future cash inflows (premiums) less outflows (claims, expenses) at inception = day-1 CSM of NPR 12 crore. Unwind CSM for 2 years of service already provided → remaining CSM: NPR 10 crore.",
				"Step 4 — Fair value approach (FY 2070/71 cohort): Fair value of insurance liabilities at transition date NPR 45 crore. Fulfilment cash flows at transition NPR 42 crore. CSM = NPR 45 crore − NPR 42 crore = NPR 3 crore (if positive). If negative (onerous), no CSM — loss component recognised.",
				"Step 5 — Aggregate transition impact: Total CSM established: NPR 85 crore across all cohorts. Opening retained earnings adjustment: increase in insurance liabilities NPR 40 crore (NFRS 17 vs NFRS 4 carrying amount), partially offset by CSM recognition pattern change. Net equity impact: decrease of NPR 25 crore.",
			],
			journalEntries: [
				"Transition adjustment: Dr Retained Earnings NPR 25,00,00,000 / Cr Insurance Contract Liabilities (net of CSM) NPR 25,00,00,000",
				"CSM is not a separate journal entry — it is a component of the insurance contract liability measured under NFRS 17.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "NFRS 4 was an INTERIM standard — it grandfathered existing accounting policies. The only hard requirements were: (1) Liability Adequacy Test, (2) no catastrophe/equalisation reserves, (3) significant insurance risk test for scope. If the question asks what NFRS 4 required, these three are the answer." },
			{ source: "Exam Technique", tip: "LAT is the heart of NFRS 4 questions. Structure: identified recognised liabilities (net of DAC), calculated best-estimate using current assumptions, compared, recognised deficiency in P&L if inadequate. Show the comparison and the P&L charge explicitly." },
			{ source: "Nepal-specific", tip: "Nepal's insurance market has ~40 companies (19 life, 21 non-life). Beema Samiti regulates. Mandatory 20% cession to Nepal Re. These facts provide context for exam answers about Nepali insurance accounting — show you understand the market structure." },
			{ source: "Dec 2023 Examiner Report", tip: "The significant insurance risk test determines whether a contract is within NFRS 4 or NAS 39/NFRS 9. A contract with trivial insurance risk (e.g., investment-heavy unit-linked policy with minimal death cover) is a financial instrument, not an insurance contract. Candidates must apply the test, not assume all insurer contracts are insurance contracts." },
			{ source: "Recurring Pattern", tip: "NFRS 17 replaced NFRS 4 from July 2024. Key differences: NFRS 17 prescribes specific measurement models (BBA, VFA, PAA), requires annual cohort grouping, introduces CSM, uses current discount rates, and recognises insurance revenue differently. Exam questions increasingly test the transition." },
			{ source: "Exam Technique", tip: "Reinsurance under NFRS 4: always gross presentation (no offsetting). Reinsurance asset is separate from insurance liability. Test reinsurance asset for impairment if the reinsurer is in financial difficulty. State 'gross presentation required' in every reinsurance answer." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "LAT not performed or performed using stale assumptions",
			description: "Some insurers performed the LAT using the same assumptions as the actuarial valuation rather than current estimates. NFRS 4 requires current estimates — if mortality, lapse, or investment return assumptions have changed since the valuation, the LAT must use updated figures. Using stale assumptions defeats the purpose of the test.",
			sector: "Insurance",
		},
		{
			title: "Catastrophe reserves maintained in NFRS financial statements",
			description: "Non-life insurers maintaining catastrophe reserves in their NFRS financial statements despite NFRS 4's explicit prohibition. These reserves are appropriate for regulatory solvency calculations (Beema Samiti framework) but must be excluded from NFRS-compliant financial statements.",
			sector: "Insurance",
		},
		{
			title: "Unit-linked products classified as insurance without applying significant insurance risk test",
			description: "Some unit-linked products have minimal mortality charges relative to the investment component. If the insurance risk is not significant, the contract should be unbundled or treated as a financial instrument under NAS 39/NFRS 9 — not as an insurance contract under NFRS 4. Failing to test leads to incorrect classification and measurement.",
			sector: "Insurance",
		},
		{
			title: "Reinsurance asset and insurance liability offset in presentation",
			description: "NFRS 4 prohibits offsetting reinsurance assets against insurance liabilities. Some insurers present net figures, understating both total assets and total liabilities. Gross presentation is mandatory — show insurance liabilities in full and reinsurance recoverable as a separate asset.",
			sector: "Insurance",
		},
		{
			title: "Inadequate NFRS 17 transition preparation",
			description: "NFRS 17 requires historical data for retrospective CSM calculation, annual cohort grouping, and current discount rates. Insurers that delayed preparation face data gaps forcing them to use the fair value approach (less precise) for older cohorts. Actuarial capacity constraints in Nepal compound the challenge — fewer than 50 qualified actuaries for 40 insurance companies.",
			sector: "Insurance",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-17",
			nfrsNumber: "NFRS 17",
			title: "Insurance Contracts",
			reason: "NFRS 17 superseded NFRS 4 from 17 July 2024. Comprehensive measurement model replacing the interim grandfathering approach",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Investment contracts without significant insurance risk fall under NFRS 9, not NFRS 4. The classification boundary between insurance and financial instruments is critical",
		},
		{
			slug: "nfrs-7",
			nfrsNumber: "NFRS 7",
			title: "Financial Instruments: Disclosures",
			reason: "NFRS 7 provides risk disclosure requirements for financial instruments held by insurers that are outside NFRS 4 scope",
		},
		{
			slug: "nfrs-13",
			nfrsNumber: "NFRS 13",
			title: "Fair Value Measurement",
			reason: "Fair value measurement of insurance contract liabilities and plan assets follows NFRS 13 hierarchy and measurement guidance",
		},
	],
};
