import type { StandardPageData } from "./types";

export const nfrs9: StandardPageData = {
	slug: "nfrs-9",
	nfrsNumber: "NFRS 9",
	ifrsEquivalent: "IFRS 9",
	title: "Financial Instruments",
	topic: "financial-instruments",
	effectiveDate: "2021-07-16",
	ifrsEffectiveDate: "2018-01-01",
	status: "carve-out",
	heroMotif: "chart",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","ACCA ATX","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Carve-out",
		keyDifferencesCount: 6,
		carveOutCount: 2,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Classification & Measurement",
				ifrs: "Three categories based on business model and SPPI test: amortised cost, FVOCI, FVTPL (IFRS 9.4.1)",
				nfrs: "Identical framework. Classification drives measurement — no difference in standard text",
				nepalImpact: "BFIs transitioned from NAS 39 incurred-loss model. Most Nepali bank loans pass SPPI test and are at amortised cost. Government bonds: business model determines classification — hold-to-collect vs trading",
				significance: "low",
			},
			{
				topic: "Expected Credit Loss (ECL) Model",
				ifrs: "Three-stage model: 12-month ECL (Stage 1), lifetime ECL without credit-impaired (Stage 2), lifetime ECL credit-impaired (Stage 3). Forward-looking (IFRS 9.5.5)",
				nfrs: "Same three-stage model. But NRB still maintains its own provisioning directive parallel to NFRS 9 ECL",
				nepalImpact: "BFIs must compute both NFRS 9 ECL (for financial statements) and NRB provisions (for regulatory returns). Higher of the two typically reported. Dual computation is a major compliance burden — most banks maintain parallel provisioning engines",
				significance: "high",
			},
			{
				topic: "Government Securities Measurement",
				ifrs: "Classification depends on business model — held-to-collect at amortised cost, others at fair value",
				nfrs: "Same, but Nepal's government bond market has limited secondary trading. Most BFIs hold government securities to maturity (amortised cost). NRB mandates minimum government security holdings for BFIs",
				nepalImpact: "NRB's statutory liquidity ratio requires BFIs to hold government securities — these are typically classified at amortised cost. Fair value measurement is needed for securities held for trading or available liquidity management",
				significance: "medium",
			},
			{
				topic: "Hedge Accounting",
				ifrs: "IFRS 9 simplified hedge accounting with broader eligibility and no 80–125% effectiveness bright line (IFRS 9.6.4)",
				nfrs: "Same provisions available. However, Nepal's derivative market is nascent — limited hedging instruments available",
				nepalImpact: "Few Nepali entities use hedge accounting due to absence of liquid derivative markets. Some large corporates hedge foreign currency exposure through NRB-approved instruments, but formal hedge designation is rare",
				significance: "medium",
			},
			{
				topic: "Fair Value Measurement Data",
				ifrs: "IFRS 13 fair value hierarchy (Level 1 quoted prices, Level 2 observable inputs, Level 3 unobservable)",
				nfrs: "Same hierarchy, but Nepal's equity market (NEPSE) and bond market provide limited Level 1 data. Most financial instruments require Level 2 or Level 3 measurement",
				nepalImpact: "Unlisted equity investments (substantial in Nepal's private-sector-heavy economy), corporate bonds, and structured products require Level 3 fair value estimates with significant management judgement",
				significance: "high",
			},
			{
				topic: "Transition from NAS 39",
				ifrs: "Retrospective application with certain practical expedients. Transition date: 1 January 2018 for most IFRS reporters",
				nfrs: "Same expedients available. Nepal's transition occurred alongside IFRS adoption — many entities moved directly from old Nepal GAAP to NFRS 9 without NAS 39 interim",
				nepalImpact: "BFIs that went directly from old provisioning rules to NFRS 9 ECL faced a steep learning curve. Transition adjustments to opening retained earnings were significant — some BFIs needed capital injections to absorb the impact",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB maintains its own loan classification and provisioning directives (Unified Directive Chapter 2) parallel to NFRS 9 ECL. BFIs must compute provisions under both frameworks — NRB directive uses days-past-due buckets (Pass: 0–90 days at 1%, Substandard: 91–180 days at 25%, Doubtful: 181–365 days at 50%, Loss: >365 days at 100%). Financial statements report the higher of NFRS 9 ECL and NRB provisions. NRB also sets minimum government security holdings (SLR) affecting classification decisions. Deferred tax on ECL provisions is excluded from Tier 1 capital.",
		sebon: "SEBON requires listed entities to disclose credit risk concentrations, ECL methodology, and staging migration tables in annual reports. Listed BFIs must disclose top 20 borrower exposures and sector-wise credit concentration. SEBON reviews ECL disclosures during annual report examinations and has challenged inadequate forward-looking information in ECL models.",
		ird: "IRD allows loan loss deductions only when loans are actually written off with documented recovery efforts, or meet specific criteria under the Income Tax Act 2058. NFRS 9 ECL provisions (particularly Stage 1 and Stage 2) are generally not tax-deductible, creating substantial deferred tax assets for BFIs. The gap between NFRS 9 ECL and IRD-allowed deductions is one of the largest sources of temporary differences in Nepal's banking sector.",
	},

	timeline: [
		{ date: "Jul 2014", label: "IFRS 9 Final", description: "Complete version issued by IASB" },
		{ date: "Jan 2018", label: "IFRS 9 Effective", description: "Global mandatory adoption" },
		{ date: "Jul 2021", label: "NFRS 9 Effective", description: "Nepal adoption (1 Shrawan 2078 BS)", highlight: true },
		{ date: "2021–2025", label: "ECL Deferral Period", description: "Simplified ECL approach permitted for banks during transition" },
		{ date: "2026", label: "Current", description: "Carve-outs on ECL deferral and EIR method" },
	],

	steps: [
		{
			number: 1,
			name: "Classify the Financial Asset",
			coreQuestion: "What is the business model and do cash flows pass the SPPI test?",
			nepalExample: "Nepal Commercial Bank holds government bonds in two portfolios: (a) held to maturity for SLR compliance → amortised cost, (b) actively traded for profit → FVTPL. Both are government bonds, but classification differs because the business model differs.",
			paraRef: "IFRS 9.4.1–4.4",
		},
		{
			number: 2,
			name: "Initial Measurement",
			coreQuestion: "At what amount is the instrument first recorded?",
			nepalExample: "A bank originates a NPR 1 crore term loan with 2% processing fee (NPR 2 lakh). Initial measurement at fair value = NPR 1 crore (gross) minus transaction costs. But at amortised cost, the NPR 2 lakh fee is part of the effective interest rate calculation, not immediately recognised as revenue.",
			paraRef: "IFRS 9.5.1",
		},
		{
			number: 3,
			name: "Subsequent Measurement",
			coreQuestion: "How is the instrument measured after initial recognition?",
			nepalExample: "Amortised cost loans: effective interest method. The NPR 2 lakh processing fee is spread over the loan term as part of interest income, not recognised upfront. FVTPL securities: mark to market each reporting date with gains/losses in P&L.",
			paraRef: "IFRS 9.5.2–5.4",
		},
		{
			number: 4,
			name: "Assess Credit Risk & Compute ECL",
			coreQuestion: "Has credit risk increased significantly since initial recognition?",
			nepalExample: "A borrower was rated 'A' at origination but has missed one instalment (45 days past due) and operates in a stressed sector (real estate). Significant increase in credit risk → move from Stage 1 to Stage 2 → recognise lifetime ECL instead of 12-month ECL.",
			paraRef: "IFRS 9.5.5.1–5.5.20",
		},
		{
			number: 5,
			name: "Derecognition",
			coreQuestion: "When do you remove the financial asset from the balance sheet?",
			nepalExample: "A bank sells a portfolio of performing loans to another BFI. If substantially all risks and rewards transfer (no recourse), derecognise. If the selling bank retains a first-loss guarantee (continuing involvement), partial derecognition — a common structure in Nepal's inter-bank loan sales.",
			paraRef: "IFRS 9.3.2",
		},
	],

	inlineExamples: {
		eclComputation: {
			title: "Nepal Commercial Bank — ECL Computation on Loan Portfolio",
			context: "Nepal Commercial Bank (NCB) has a corporate loan portfolio of NPR 500 crore. At Ashad end 2082, the portfolio is staged as follows: Stage 1 (performing): NPR 400 crore, Stage 2 (significant increase in credit risk): NPR 70 crore, Stage 3 (credit-impaired): NPR 30 crore. Historical PD and LGD data available from 5 years of operations.",
			steps: [
				"Step 1 — Stage 1 ECL (12-month): PD = 2%, LGD = 35%, EAD = NPR 400 crore. ECL = 400 × 2% × 35% = NPR 2.80 crore.",
				"Step 2 — Stage 2 ECL (lifetime): Lifetime PD = 12% (over remaining 4-year average tenor), LGD = 40%, EAD = NPR 70 crore. ECL = 70 × 12% × 40% = NPR 3.36 crore.",
				"Step 3 — Stage 3 ECL (lifetime, credit-impaired): Lifetime PD = 100% (already defaulted), LGD = 60% (after collateral recovery estimates), EAD = NPR 30 crore. ECL = 30 × 100% × 60% = NPR 18 crore.",
				"Step 4 — Total NFRS 9 ECL: NPR 2.80 + 3.36 + 18 = NPR 24.16 crore. Compare with NRB directive provision: Stage 1 at 1% = NPR 4 crore, Stage 2 at 25% = NPR 17.5 crore, Stage 3 at 100% = NPR 30 crore. NRB total = NPR 51.5 crore.",
				"Step 5 — Report higher: NRB provision NPR 51.5 crore > NFRS 9 ECL NPR 24.16 crore. Financial statements report NPR 51.5 crore. Deferred tax asset on non-deductible portion: (NPR 51.5 crore − IRD-allowed amount) × 30%.",
			],
			journalEntries: [
				"ECL provision (higher of NFRS 9 and NRB): Dr Impairment Loss (P&L) NPR 51,50,00,000 / Cr Loss Allowance NPR 51,50,00,000",
				"DTA on provision exceeding IRD allowance: Dr Deferred Tax Asset / Cr Income Tax Expense (P&L)",
				"Stage migration (loan moving from Stage 1 to Stage 2): Dr Impairment Loss / Cr Loss Allowance (incremental lifetime ECL recognised)",
			],
			difficulty: "pro",
		},
		sppiTest: {
			title: "Himalaya Finance — SPPI Test on Structured Loan",
			context: "Himalaya Finance Ltd originates a NPR 50 lakh loan to a real estate developer. Terms: 5-year term, interest rate = NRB base rate + 4% (floating), plus an additional 2% 'equity kicker' linked to the project's profit on completion. The equity kicker is contingent on the developer's profit margin exceeding 15%.",
			steps: [
				"Step 1 — Basic loan features: principal of NPR 50 lakh, floating interest based on NRB base rate. These are standard SPPI cash flows (time value of money + credit risk).",
				"Step 2 — Equity kicker assessment: the 2% contingent return is linked to the borrower's profit — this is an equity-linked feature, not compensation for credit risk or time value.",
				"Step 3 — SPPI test result: FAIL. The equity kicker introduces cash flows that are not solely payments of principal and interest. The return is partially linked to the borrower's equity performance.",
				"Step 4 — Classification consequence: cannot be at amortised cost or FVOCI. Must be classified at FVTPL regardless of business model.",
				"Step 5 — Impact: Himalaya Finance must fair-value this loan each reporting date. Gains/losses go to P&L — creating earnings volatility. If the equity kicker feature were removed, the loan would qualify for amortised cost.",
			],
			journalEntries: [
				"Initial recognition: Dr Loan at FVTPL NPR 50,00,000 / Cr Cash NPR 50,00,000",
				"Reporting date (fair value increases to NPR 52,00,000): Dr Loan at FVTPL NPR 2,00,000 / Cr Fair Value Gain (P&L) NPR 2,00,000",
				"Interest received: Dr Cash / Cr Interest Income (P&L) (NRB base rate + 4% portion only; equity kicker accrued separately at fair value)",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "SPPI test is the gateway: if cash flows fail SPPI, the asset goes to FVTPL regardless of business model. Test SPPI first, then business model. Candidates who reverse the order waste time and often reach wrong conclusions." },
			{ source: "Recurring Pattern", tip: "ECL staging transitions are heavily tested. Know the triggers for Stage 1 → 2 (significant increase in credit risk — not just 30 DPD, also qualitative factors like sector stress) and Stage 2 → 3 (credit-impaired — default events, 90 DPD rebuttable presumption)." },
			{ source: "Dec 2023 Examiner Report", tip: "Forward-looking information in ECL: examiners want to see macro-economic scenarios incorporated. Don't just use historical PD/LGD — state how GDP growth, inflation, or sector-specific factors adjust the base case. At minimum, discuss three scenarios (base, upside, downside)." },
			{ source: "Recurring Pattern", tip: "Modification of financial assets: if a loan is restructured, test whether it's a substantial modification (derecognise and recognise new asset) or non-substantial (adjust carrying amount). The 10% present value test is a useful bright line for debt instruments." },
			{ source: "Exam Technique", tip: "Business model assessment: 'hold to collect' doesn't mean never selling. Infrequent sales near maturity, credit-deterioration-driven sales, and portfolio rebalancing are all consistent with the amortised cost model. Know the exceptions." },
			{ source: "Nepal-specific", tip: "For CA Nepal: NRB vs NFRS 9 dual provisioning is the defining Nepal-specific topic. Know the NRB days-past-due buckets, the higher-of rule, and the deferred tax consequences. Also understand how NRB SLR requirements affect government security classification." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "NFRS 9 ECL and NRB provisions not reconciled",
			description: "BFIs compute NFRS 9 ECL and NRB provisions in separate teams using different systems, with no reconciliation between the two. The higher amount must be reported in financial statements, but the nature of any excess NRB provision over NFRS 9 ECL should be disclosed — it represents regulatory prudence beyond the accounting estimate.",
			sector: "Banking & Finance",
		},
		{
			title: "Processing fees recognised as day-one revenue",
			description: "Banks recognise loan processing fees (1–2% of principal) as revenue when the loan is disbursed. Under NFRS 9, processing fees that are integral to the effective interest rate must be deferred and spread over the loan's life as part of interest income. Upfront recognition overstates current-period revenue.",
			sector: "Banking & Finance",
		},
		{
			title: "No forward-looking information in ECL models",
			description: "Entities compute ECL using purely historical default rates without incorporating forward-looking macroeconomic scenarios. NFRS 9 explicitly requires consideration of future economic conditions — GDP growth, sectoral stress, inflation, and policy changes must adjust base-case PD and LGD estimates.",
			sector: "Banking & Finance",
		},
		{
			title: "Equity investments classified at amortised cost",
			description: "Some entities classify unlisted equity investments at amortised cost or cost-less-impairment (old NAS 39 approach). Equity instruments cannot be at amortised cost — they must be at FVTPL or, if irrevocable election is made, FVOCI (with no recycling). This error is particularly common for investments in unlisted subsidiaries and associates measured in separate financial statements.",
			sector: "Listed Companies",
		},
		{
			title: "Staging criteria based solely on days past due",
			description: "Banks use 30 DPD as the sole trigger for Stage 2 transfer and 90 DPD for Stage 3, ignoring qualitative indicators. NFRS 9 requires assessment of all available information — sector stress, collateral depreciation, borrower financial deterioration, and macro-economic forecasts — not just payment status. The DPD indicators are rebuttable presumptions, not deterministic rules.",
			sector: "Banking & Finance",
		},
	],

	relatedStandards: [
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "ECL provisions not deductible for tax create massive deferred tax assets for BFIs — the largest single source of DTAs in Nepal's banking sector",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Receivables from revenue contracts become financial assets subject to NFRS 9 ECL impairment upon recognition",
		},
		{
			slug: "nfrs-16",
			nfrsNumber: "NFRS 16",
			title: "Leases",
			reason: "Lease receivables (lessor accounting) and lease liabilities are financial instruments within NFRS 9 scope for certain measurements",
		},
		{
			slug: "nfrs-17",
			nfrsNumber: "NFRS 17",
			title: "Insurance Contracts",
			reason: "Insurance contract assets/liabilities interact with NFRS 9 — financial guarantee contracts can be within NFRS 9 or NFRS 17 scope depending on issuer election",
		},
	],
};
