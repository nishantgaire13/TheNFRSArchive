import type { StandardPageData } from "./types";

export const nfrs7: StandardPageData = {
	slug: "nfrs-7",
	nfrsNumber: "NFRS 7",
	ifrsEquivalent: "IFRS 7",
	title: "Financial Instruments: Disclosures",
	topic: "financial-instruments",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2007-01-01",
	status: "aligned",
	heroMotif: "clipboard",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Credit Risk Disclosures — ECL Staging",
				ifrs: "IFRS 7.35A–35N requires disclosure of ECL amounts by stage, reconciliation of loss allowances, and information about credit quality of financial assets (including staging migration tables)",
				nfrs: "Same requirements. BFIs must disclose ECL by stage along with gross carrying amounts per stage. NRB additionally requires sector-wise and geography-wise credit concentration disclosures in prescribed formats",
				nepalImpact: "BFIs face a dual disclosure burden: NFRS 7 staging tables plus NRB's directive-based provisioning disclosures. Most banks present both in annual reports. Stage migration information (e.g., NPR 12 crore of loans moving from Stage 1 to Stage 2) is critical for analysts assessing asset quality deterioration",
				significance: "high",
			},
			{
				topic: "Liquidity Risk — Maturity Analysis",
				ifrs: "IFRS 7.39 requires a maturity analysis of non-derivative financial liabilities showing remaining contractual maturities, using undiscounted cash flows",
				nfrs: "Same requirement. BFIs must present maturity buckets aligned with NRB's Asset-Liability Management (ALM) guidelines: up to 1 month, 1–3 months, 3–6 months, 6 months–1 year, 1–5 years, over 5 years",
				nepalImpact: "Nepal's banking sector is heavily reliant on short-term deposits (typically 3–12 months) funding longer-term loans (up to 25 years for housing). The maturity mismatch disclosed under NFRS 7 often reveals significant structural liquidity risk — NRB monitors this through its ALM framework",
				significance: "high",
			},
			{
				topic: "Market Risk — Interest Rate Sensitivity",
				ifrs: "IFRS 7.40–42 requires sensitivity analysis showing how profit or equity would change with reasonably possible changes in each risk variable (e.g., interest rate shifts of ±100 bps)",
				nfrs: "Same sensitivity analysis required. Nepali BFIs typically disclose the impact of ±1% and ±2% interest rate shifts on net interest income and equity",
				nepalImpact: "NRB's base rate mechanism and spread rate caps mean that BFIs' interest rate risk profile is partly regulated. Sensitivity disclosures must reflect the impact of NRB base rate changes — for instance, a 1% increase in base rate could reduce net interest margin for banks with significant fixed-rate lending books like Nabil Bank",
				significance: "medium",
			},
			{
				topic: "Market Risk — Foreign Exchange Exposure",
				ifrs: "IFRS 7.40 requires disclosure of currency risk exposure and sensitivity to exchange rate movements for each currency to which the entity has significant exposure",
				nfrs: "Same requirement. Nepal's foreign exchange market is controlled by NRB — the NPR is pegged to INR at 1.60 and managed against USD. BFIs must disclose open foreign currency positions by major currency",
				nepalImpact: "Due to the INR peg, INR exposure carries negligible currency risk for disclosure purposes. USD and other convertible currency exposures are more meaningful. NRB limits single-currency open positions to 5% of core capital and aggregate open positions to 15%, which constrains the range of forex sensitivity disclosures",
				significance: "medium",
			},
			{
				topic: "Fair Value Hierarchy Disclosures",
				ifrs: "IFRS 7.25–30 (read with IFRS 13) requires disclosure of fair value measurements by level of the fair value hierarchy (Level 1, 2, 3) and transfers between levels",
				nfrs: "Same three-level hierarchy disclosure. Nepal's NEPSE provides Level 1 prices for listed equity investments. Government bonds and most debt securities require Level 2 or Level 3 measurement due to illiquid secondary markets",
				nepalImpact: "Nepali entities have a disproportionately large share of Level 3 measurements compared to developed markets. Unlisted equity investments, inter-bank placements with bespoke terms, and corporate bonds all require Level 3 valuation. Auditors frequently challenge the reasonableness of Level 3 assumptions used by BFIs",
				significance: "high",
			},
			{
				topic: "Significance of Financial Instruments to Financial Position",
				ifrs: "IFRS 7.7–19 requires disclosure of carrying amounts by category, gains/losses recognised, and qualitative information about how financial instruments affect the entity's financial position",
				nfrs: "Same requirements. BFIs must disclose carrying amounts by NFRS 9 classification category: amortised cost, FVOCI, FVTPL. Cross-referencing with NRB's balance sheet categories (e.g., loans classified as 'pass', 'substandard', 'doubtful', 'loss') is also required",
				nepalImpact: "For BFIs, financial instruments dominate the balance sheet — typically 85–90% of total assets and liabilities. The NFRS 7 disclosure note on financial instruments is often the single largest note in the annual report, running 15–25 pages for major commercial banks like Nepal Bank Limited",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives require BFIs to provide extensive credit risk disclosures beyond NFRS 7, including sector-wise loan concentration (agriculture, real estate, manufacturing, wholesale/retail), geography-wise concentration (province-level), single borrower group exposure relative to core capital, and loan-to-value ratios for secured lending. NRB also mandates disclosure of related-party lending (including loans to directors, promoters, and their affiliated entities) with prescribed formats. BFIs must publish quarterly financial statements with condensed NFRS 7 disclosures within 30 days of quarter-end.",
		sebon: "SEBON requires listed entities to disclose financial instrument risks in the annual report and in quarterly interim reports. For listed BFIs, SEBON reviews the adequacy of credit risk and liquidity risk disclosures during annual report examinations. SEBON has issued directives requiring enhanced disclosure of related-party financial instrument transactions, particularly guarantees and inter-company loans within group structures.",
		ird: "IRD does not prescribe financial instrument disclosures but uses NFRS 7 disclosures (particularly credit risk staging and ECL data) as audit evidence during tax assessments. Where disclosures reveal large ECL provisions, IRD cross-checks whether corresponding tax deductions have been claimed — since only actual write-offs are deductible under the Income Tax Act 2058, provisional ECL amounts disclosed under NFRS 7 often trigger IRD scrutiny.",
	},

	timeline: [
		{ date: "Aug 2005", label: "IFRS 7 Issued", description: "IASB issued IFRS 7 replacing IAS 30 and disclosure parts of IAS 32" },
		{ date: "Jan 2007", label: "IFRS 7 Effective", description: "IFRS 7 became effective globally" },
		{ date: "Jul 2018", label: "NFRS 7 Effective", description: "NFRS 7 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "Jul 2021", label: "NFRS 9 Adoption", description: "NFRS 9 adoption triggered enhanced NFRS 7 disclosure requirements (ECL staging, credit quality tables)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 7, supplemented by NRB-specific disclosure requirements", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify Financial Instruments on the Balance Sheet",
			coreQuestion: "What financial assets and financial liabilities does the entity hold, and how are they classified?",
			nepalExample: "Himalayan Bank lists: loans and advances at amortised cost NPR 1,45,000 crore, government bonds at FVOCI NPR 18,500 crore, equity investments at FVTPL NPR 1,200 crore, customer deposits at amortised cost NPR 1,62,000 crore, subordinated debentures at amortised cost NPR 4,000 crore. Each category requires separate NFRS 7 disclosure.",
			paraRef: "IFRS 7.7–8",
		},
		{
			number: 2,
			name: "Disclose Credit Risk Information",
			coreQuestion: "What is the maximum exposure to credit risk, and how is credit quality managed?",
			nepalExample: "Nabil Bank discloses: maximum credit exposure NPR 2,15,000 crore (gross loans + commitments + guarantees). ECL staging: Stage 1 NPR 1,85,000 crore (loss allowance NPR 1,850 crore), Stage 2 NPR 22,000 crore (loss allowance NPR 3,300 crore), Stage 3 NPR 8,000 crore (loss allowance NPR 4,800 crore). Concentration: real estate sector 22%, wholesale/retail 18%, manufacturing 15%.",
			paraRef: "IFRS 7.35A–38",
		},
		{
			number: 3,
			name: "Disclose Liquidity Risk Maturity Analysis",
			coreQuestion: "What are the contractual maturities of financial liabilities using undiscounted cash flows?",
			nepalExample: "Nepal Investment Mega Bank discloses undiscounted maturity analysis: deposits maturing within 1 month NPR 18,000 crore, 1–3 months NPR 25,000 crore, 3–12 months NPR 65,000 crore, 1–5 years NPR 12,000 crore, over 5 years NPR 2,000 crore. The analysis reveals a significant short-term maturity concentration — typical for Nepali BFIs relying on rollover of short-term deposits.",
			paraRef: "IFRS 7.39",
		},
		{
			number: 4,
			name: "Disclose Market Risk Sensitivity",
			coreQuestion: "How would reasonably possible changes in market variables affect profit and equity?",
			nepalExample: "Kumari Bank discloses interest rate sensitivity: a 1% increase in market rates would increase net interest income by NPR 85 crore (positive gap in short-term buckets). Foreign currency sensitivity: a 5% depreciation of NPR against USD would reduce profit by NPR 12 crore based on net open USD position of NPR 240 crore.",
			paraRef: "IFRS 7.40–42",
		},
		{
			number: 5,
			name: "Disclose Fair Value Hierarchy",
			coreQuestion: "At which level of the fair value hierarchy are financial instruments measured, and what are the Level 3 inputs?",
			nepalExample: "Sanima Bank discloses: Level 1 (NEPSE-listed equities) NPR 350 crore, Level 2 (government bonds valued using NRB yield curve) NPR 12,000 crore, Level 3 (unlisted equity investments valued using discounted cash flow) NPR 180 crore. Level 3 key inputs: discount rate 14–16%, long-term growth rate 4–5%. No transfers between levels during the year.",
			paraRef: "IFRS 7.25–30, IFRS 13",
		},
	],

	inlineExamples: {
		creditRiskDisclosure: {
			title: "Global IME Bank — Credit Risk ECL Staging Disclosure",
			context: "Global IME Bank Ltd prepares NFRS 7 credit risk disclosures for the year ended Ashad 2082. Total gross loans: NPR 2,80,000 crore. Management must prepare the ECL staging table with reconciliation of loss allowances from opening to closing balances, including stage migrations, new originations, and write-offs during the year.",
			steps: [
				"Step 1 — Present gross carrying amounts by stage: Stage 1 NPR 2,35,000 crore, Stage 2 NPR 32,000 crore, Stage 3 NPR 13,000 crore. Total NPR 2,80,000 crore.",
				"Step 2 — Present ECL loss allowances by stage: Stage 1 NPR 2,350 crore (1% coverage), Stage 2 NPR 4,800 crore (15% coverage), Stage 3 NPR 7,800 crore (60% coverage). Total allowance NPR 14,950 crore.",
				"Step 3 — Reconcile loss allowance movements: Opening balance NPR 12,200 crore + new originations NPR 1,500 crore + stage transfers (net increase) NPR 2,800 crore − write-offs NPR 1,200 crore − recoveries NPR 350 crore = Closing NPR 14,950 crore.",
				"Step 4 — Disclose stage migration: NPR 8,500 crore transferred from Stage 1 to Stage 2 during the year (significant credit risk increase), NPR 2,100 crore from Stage 2 to Stage 3 (credit-impaired). NPR 3,200 crore cured from Stage 2 back to Stage 1.",
				"Step 5 — Disclose credit concentration by sector: real estate and housing 24%, wholesale and retail trade 19%, manufacturing 16%, agriculture 8%, hydropower and energy 7%, others 26%. NRB's sector-wise disclosure format requires this breakdown.",
				"Step 6 — Compare with NRB provisioning: NRB directive provisions total NPR 22,800 crore (higher than NFRS 9 ECL of NPR 14,950 crore). The excess NPR 7,850 crore represents regulatory prudence — disclosed as an additional reserve in equity notes.",
			],
			journalEntries: [
				"No journal entries arise from NFRS 7 disclosures — these are note disclosures, not recognition or measurement entries.",
				"The underlying ECL provision was already recorded: Dr Impairment Loss (P&L) / Cr Loss Allowance (contra-asset) — NFRS 7 requires disclosure of the movement reconciliation of this allowance account.",
				"Write-off during the year: Dr Loss Allowance NPR 1,200 crore / Cr Gross Loans NPR 1,200 crore — removes both the asset and allowance from the balance sheet. Disclosed in the NFRS 7 reconciliation table.",
			],
			difficulty: "pro",
		},
		liquidityRisk: {
			title: "Prabhu Bank — Liquidity Risk Maturity Analysis",
			context: "Prabhu Bank Ltd prepares the NFRS 7 liquidity risk disclosure for Ashad end 2082. The bank must present a maturity analysis of financial liabilities showing undiscounted contractual cash flows in time bands aligned with NRB's ALM framework. Total financial liabilities: NPR 1,85,000 crore (predominantly customer deposits and inter-bank borrowings).",
			steps: [
				"Step 1 — Identify financial liabilities: customer deposits NPR 1,65,000 crore (demand, savings, fixed), inter-bank borrowings NPR 8,500 crore, subordinated debentures NPR 3,000 crore, lease liabilities NPR 1,500 crore, other payables NPR 7,000 crore.",
				"Step 2 — Allocate to maturity buckets using undiscounted cash flows (including future interest): On demand NPR 45,000 crore (demand and savings deposits), up to 3 months NPR 38,000 crore, 3–12 months NPR 72,000 crore, 1–5 years NPR 28,000 crore, over 5 years NPR 8,500 crore.",
				"Step 3 — Note that undiscounted total (NPR 1,91,500 crore) exceeds carrying amount (NPR 1,85,000 crore) because future interest payments are included in the maturity analysis. Disclose this reconciliation.",
				"Step 4 — Present corresponding asset maturity profile to show the net liquidity gap: assets maturing within 3 months NPR 55,000 crore vs liabilities NPR 83,000 crore — net gap of NPR 28,000 crore (negative). This structural mismatch is typical for Nepali BFIs.",
				"Step 5 — Disclose liquidity management strategy: NRB CRR (cash reserve ratio) at 3% of total deposits maintained at all times. SLR (statutory liquidity ratio) at 10% met through government securities. Committed credit lines from NRB lender-of-last-resort facility available as backstop.",
			],
			journalEntries: [
				"No journal entries arise from the liquidity risk maturity analysis — this is a disclosure exercise based on contractual terms of existing financial liabilities.",
				"Underlying deposit liability already recorded: Dr Cash (on deposit receipt) / Cr Customer Deposits — the maturity analysis discloses when these contractual obligations fall due.",
				"Interest on fixed deposits accrued: Dr Interest Expense / Cr Interest Payable — the undiscounted maturity analysis includes these future interest cash flows in the relevant time bands.",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "NFRS 7 is primarily a disclosure standard — no recognition or measurement. Exam questions typically provide financial data and ask you to prepare or critique note disclosures. Focus on completeness: credit risk, liquidity risk, market risk, and fair value hierarchy are the four pillars of NFRS 7 disclosure." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates frequently omit the maturity analysis of financial liabilities. Remember: NFRS 7 requires undiscounted contractual cash flows (not discounted carrying amounts). The total in the maturity table will exceed the balance sheet amount because future interest is included." },
			{ source: "Exam Technique", tip: "When preparing ECL staging disclosures, always reconcile the opening and closing loss allowance balances. Show: opening + new provisions + stage transfers − write-offs − recoveries ± other movements = closing. This reconciliation is heavily examined." },
			{ source: "Recurring Pattern", tip: "Fair value hierarchy: Level 1 requires quoted prices in active markets. NEPSE-listed shares qualify as Level 1 in Nepal. Government bonds are typically Level 2 (observable yield curves but limited trading). Unlisted equity investments are Level 3. Know how to classify and what Level 3 disclosures are required (sensitivity of fair value to changes in key inputs)." },
			{ source: "Nepal-specific", tip: "For Nepal-context questions: NRB supplements NFRS 7 with additional disclosure requirements including sector-wise loan concentration, single borrower exposure limits, and related-party lending disclosures. These are regulatory add-ons — not part of IFRS 7 itself but examinable in CA Nepal papers." },
			{ source: "Exam Technique", tip: "Sensitivity analysis for market risk: show the impact of a reasonably possible change (e.g., ±1% interest rate, ±5% forex rate) on both profit and equity. Do not forget the equity impact via FVOCI instruments — a rate change affects the fair value of FVOCI bonds which flows to OCI, not P&L." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "ECL staging disclosures omitted or incomplete",
			description: "BFIs disclose total ECL provisions but fail to break them down by stage (Stage 1, 2, 3) with corresponding gross carrying amounts. NFRS 7.35H requires a reconciliation from opening to closing ECL allowance by stage, including amounts transferred between stages, new originations, derecognitions, and write-offs. Without this breakdown, users cannot assess credit quality trends.",
			sector: "Banking & Finance",
		},
		{
			title: "Maturity analysis uses discounted carrying amounts instead of undiscounted cash flows",
			description: "Entities present the liquidity risk maturity analysis using balance sheet carrying amounts (which are discounted) rather than undiscounted contractual cash flows including future interest payments. This understates liquidity risk — particularly for long-term fixed deposits where the difference between carrying amount and total contractual outflows (principal plus interest) can be substantial.",
			sector: "Banking & Finance",
		},
		{
			title: "No sensitivity analysis for market risk",
			description: "Listed entities disclose that they are 'exposed to interest rate risk and foreign currency risk' qualitatively but fail to provide the quantitative sensitivity analysis required by NFRS 7.40. Management must quantify the impact of reasonably possible changes in each risk variable on profit and equity — for example, the NPR impact of a 1% interest rate shift on net interest income.",
			sector: "Listed Companies",
		},
		{
			title: "Fair value hierarchy level misclassification",
			description: "Entities classify investments in unlisted companies as Level 2 (observable inputs) when they should be Level 3 (significant unobservable inputs). In Nepal, where secondary markets for most non-equity instruments are inactive, the default assumption should be Level 3 unless entity can demonstrate observable market inputs. Misclassification understates measurement uncertainty.",
			sector: "Banking & Finance",
		},
		{
			title: "NRB-specific disclosures not reconciled with NFRS 7",
			description: "BFIs present NRB-mandated disclosures (sector-wise loan concentration, provisioning by NRB classification) and NFRS 7 disclosures (ECL staging, credit quality) as entirely separate sections with no cross-referencing or reconciliation. Users struggle to understand the relationship between NRB provisions and NFRS 9 ECL. Best practice is to include a reconciliation showing how NRB classification maps to NFRS 9 stages.",
			sector: "Banking & Finance",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "NFRS 9 provides the recognition and measurement framework — NFRS 7 provides the corresponding disclosure requirements for financial instruments classified and measured under NFRS 9",
		},
		{
			slug: "nas-32",
			nfrsNumber: "NAS 32",
			title: "Financial Instruments: Presentation",
			reason: "NAS 32 addresses presentation (classification as debt or equity, offsetting) — NFRS 7 requires disclosure of how presentation choices affect the financial statements",
		},
		{
			slug: "nfrs-13",
			nfrsNumber: "NFRS 13",
			title: "Fair Value Measurement",
			reason: "NFRS 13 defines the fair value hierarchy that NFRS 7 requires entities to disclose — Level 1, 2, and 3 measurement inputs and transfers between levels",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 1 sets the overall framework for financial statement presentation within which NFRS 7 disclosures are presented as part of the notes",
		},
	],
};
