import type { StandardPageData } from "./types";

export const nfrs2: StandardPageData = {
	slug: "nfrs-2",
	nfrsNumber: "NFRS 2",
	ifrsEquivalent: "IFRS 2",
	title: "Share-based Payment",
	topic: "employee-benefits",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "stock",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA ATX","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Scope — Equity-settled Share-based Payments",
				ifrs: "IFRS 2 applies to transactions where the entity receives goods or services in exchange for its equity instruments, including employee stock options and share purchase plans (IFRS 2.1–2)",
				nfrs: "Same scope. In Nepal, employee stock option plans (ESOPs) are emerging primarily at BFIs and IT companies. SEBON's ESOP Guidelines 2078 govern the regulatory framework for listed entities issuing shares to employees",
				nepalImpact: "Share-based payments remain rare in Nepal. NEPSE-listed entities have limited history of ESOPs. However, some BFIs like Kumari Bank and IT companies like F1Soft have introduced ESOPs, requiring NFRS 2 accounting for the first time",
				significance: "high",
			},
			{
				topic: "Scope — Cash-settled Share-based Payments",
				ifrs: "IFRS 2 applies to cash-settled transactions where the entity pays cash based on the price or value of its shares or other equity instruments (IFRS 2.30–33)",
				nfrs: "Same scope. Cash-settled share appreciation rights (SARs) are virtually non-existent in Nepal. If introduced, the liability must be remeasured at each reporting date at fair value, with changes recognised in profit or loss",
				nepalImpact: "No known Nepali entity has implemented cash-settled SARs as of 2082 BS. The concept is unfamiliar to most Nepali finance teams. If a cash-settled plan is designed, the ongoing fair value remeasurement requirement would be operationally challenging given the illiquidity of NEPSE",
				significance: "low",
			},
			{
				topic: "Fair Value Measurement of Share Options",
				ifrs: "IFRS 2 requires measurement at the grant-date fair value for equity-settled transactions, typically using the Black-Scholes or binomial option pricing model (IFRS 2.10–13)",
				nfrs: "Same measurement requirement. In Nepal, applying Black-Scholes requires inputs that are difficult to obtain: expected volatility of NEPSE-listed shares (historical data is shallow), risk-free rate (Nepal Government bond yields), expected dividend yield, and expected option term",
				nepalImpact: "NEPSE is relatively illiquid with high volatility. Historical share price data may span only a few years for many companies. Valuers often use simplified assumptions that may not withstand scrutiny. The lack of established option pricing expertise in Nepal increases the risk of measurement error",
				significance: "high",
			},
			{
				topic: "Vesting Conditions — Service and Performance",
				ifrs: "IFRS 2 distinguishes between service conditions, performance conditions (market and non-market), and non-vesting conditions. Only service and non-market performance conditions affect the number of instruments expected to vest (IFRS 2.19–21)",
				nfrs: "Same treatment. Nepali ESOPs typically have service conditions (e.g., 3-year cliff vesting) and occasionally non-market performance conditions (e.g., achieving NPR 1 arba in net profit). Market conditions (e.g., share price exceeding NPR 500) are rare but would be factored into grant-date fair value",
				nepalImpact: "SEBON's ESOP Guidelines 2078 require a minimum vesting period of 3 years for listed entities. This regulatory floor aligns with typical IFRS 2 vesting periods. Entities must estimate forfeitures based on historical employee turnover data, which is often poorly tracked in Nepal",
				significance: "medium",
			},
			{
				topic: "Modification of Terms",
				ifrs: "IFRS 2 requires that modifications which increase fair value are recognised as additional expense. Modifications that reduce fair value are ignored — the original grant-date fair value continues to be recognised (IFRS 2.26–29)",
				nfrs: "Same treatment. In Nepal, modifications are likely when share prices decline significantly (NEPSE corrections of 30–40% are not uncommon). Entities may be tempted to reprice options or extend vesting periods to retain employees",
				nepalImpact: "SEBON must approve any modification to ESOP terms for listed entities. If an entity reprices options after a market downturn, the incremental fair value (new fair value minus old fair value at modification date) must be recognised over the remaining vesting period. Entities that cancel and reissue options must recognise the full remaining expense immediately",
				significance: "medium",
			},
			{
				topic: "Disclosure Requirements",
				ifrs: "IFRS 2 requires disclosure of the nature and extent of share-based payment arrangements, how fair value was determined, and the effect on profit or loss and financial position (IFRS 2.44–52)",
				nfrs: "Same disclosure requirements. Nepali entities must disclose the number and weighted average exercise price of options outstanding, the model used for fair value measurement (e.g., Black-Scholes), key inputs (volatility, risk-free rate, expected life), and the total expense recognised in the period",
				nepalImpact: "Disclosure quality is expected to be weak initially because ESOPs are new in Nepal. Entities may omit key inputs like expected volatility or disclose inputs without explaining the basis. SEBON's review of annual reports is expected to focus on ESOP disclosures as plans become more common",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB permits BFIs to implement ESOPs subject to prior approval and compliance with the Company Act 2063 and SEBON guidelines. NRB requires that the total shares issued under ESOP do not exceed 5% of paid-up capital. The ESOP expense recognised under NFRS 2 is deducted from distributable profit for the purpose of calculating maximum dividend payable. NRB monitors the impact of ESOPs on regulatory capital — the equity credit from ESOP recognition increases share capital, which counts towards Tier 1 capital.",
		sebon: "SEBON issued ESOP Guidelines 2078 (2021) regulating listed entities' employee stock option schemes. Key provisions: minimum vesting period of 3 years, maximum ESOP pool of 5% of issued capital, options must be approved by AGM special resolution, exercise price cannot be below par value (NPR 100 per share), and employees must be permanent staff with minimum 1 year of service. SEBON requires quarterly disclosure of ESOP status including options granted, exercised, forfeited, and outstanding.",
		ird: "Under the Income Tax Act 2058, the tax treatment of ESOPs is not explicitly addressed in detail. Generally, the benefit received by the employee on exercise (market price minus exercise price) is treated as perquisite income taxable under employment income at the applicable slab rate. The employer entity's NFRS 2 expense is not explicitly allowed as a tax deduction — IRD considers it a notional cost. This creates a permanent difference between accounting profit and taxable income. Capital gains on subsequent sale of shares by employees are taxable at 5% (for listed shares held over 365 days) or 7.5% (for shares held less than 365 days).",
	},

	timeline: [
		{ date: "Jan 2005", label: "IFRS 2 Effective", description: "IFRS 2 became effective globally for share-based payment transactions with a grant date after 7 November 2002" },
		{ date: "2021", label: "SEBON ESOP Guidelines", description: "SEBON issued ESOP Guidelines 2078 establishing the regulatory framework for listed entity ESOPs in Nepal" },
		{ date: "Jul 2018", label: "NFRS 2 Effective", description: "NFRS 2 effective as part of full NFRS adoption in Nepal (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 2, no carve-outs. Practical application growing as more entities adopt ESOPs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Share-based Payment Arrangement",
			coreQuestion: "Has the entity entered into a transaction where it receives goods or services in exchange for its equity instruments or cash payments based on share price?",
			nepalExample: "Kumari Bank Ltd grants 2,00,000 share options to senior management on 1 Shrawan 2081 BS. Each option entitles the holder to purchase one ordinary share at NPR 250 (exercise price) after a 3-year vesting period. The grant requires AGM approval and SEBON notification under ESOP Guidelines 2078.",
			paraRef: "IFRS 2.1–6",
		},
		{
			number: 2,
			name: "Determine Whether Equity-settled or Cash-settled",
			coreQuestion: "Will the entity settle the obligation by issuing shares (equity-settled) or by paying cash based on share value (cash-settled)?",
			nepalExample: "Kumari Bank's plan is equity-settled — employees will receive actual shares upon exercise. If the plan instead offered a cash payment equal to the share price appreciation (SAR), it would be cash-settled and measured at fair value at each reporting date. Nepal has no known SARs in practice.",
			paraRef: "IFRS 2.10, 30",
		},
		{
			number: 3,
			name: "Measure Fair Value at Grant Date",
			coreQuestion: "What is the fair value of each share option at the grant date using an appropriate pricing model?",
			nepalExample: "Kumari Bank engages a SEBON-registered valuer to apply the Black-Scholes model. Inputs: share price at grant date NPR 380, exercise price NPR 250, expected volatility 35% (based on 3-year historical NEPSE data for banking sector), risk-free rate 8% (Nepal Government 5-year bond yield), expected dividend yield 4%, expected option life 4 years (3-year vest + 1-year exercise window). Fair value per option = NPR 165.",
			paraRef: "IFRS 2.10–13, B1–B41",
		},
		{
			number: 4,
			name: "Recognise the Expense Over the Vesting Period",
			coreQuestion: "How is the total expense allocated over the service/vesting period, and how are forfeitures handled?",
			nepalExample: "Total ESOP expense: 2,00,000 options x NPR 165 = NPR 3,30,00,000 over 3 years. Annual expense = NPR 1,10,00,000 (assuming no forfeitures). At end of Year 1, management estimates 10% forfeiture based on staff turnover. Revised total: 1,80,000 options x NPR 165 = NPR 2,97,00,000. Year 1 cumulative charge: NPR 2,97,00,000 x 1/3 = NPR 99,00,000. Dr Employee Benefit Expense / Cr Share Options Reserve.",
			paraRef: "IFRS 2.14–15, 19–21",
		},
		{
			number: 5,
			name: "Account for Exercise, Expiry, or Modification",
			coreQuestion: "What happens when options are exercised, lapse unexercised, or terms are modified?",
			nepalExample: "At end of Year 3, 1,70,000 options vest (30,000 forfeited vs 20,000 estimated). Actual cumulative expense = 1,70,000 x NPR 165 = NPR 2,80,50,000. When employees exercise 1,50,000 options: Dr Bank (1,50,000 x NPR 250 = NPR 3,75,00,000) + Dr Share Options Reserve (1,50,000 x NPR 165 = NPR 2,47,50,000) / Cr Share Capital (1,50,000 x NPR 100 = NPR 1,50,00,000) / Cr Share Premium NPR 4,72,50,000. The 20,000 unexercised options are transferred from Share Options Reserve to Retained Earnings — never reversed through profit or loss.",
			paraRef: "IFRS 2.22–29",
		},
	],

	inlineExamples: {
		equitySettledEsop: {
			title: "Kumari Bank — Equity-settled Employee Stock Option Plan",
			context: "Kumari Bank Ltd grants 2,00,000 share options to 50 senior managers on 1 Shrawan 2081 BS. Exercise price is NPR 250 per share. The 3-year cliff vesting requires continuous service. The Black-Scholes fair value is NPR 165 per option. Management estimates that 10% of employees will leave during the vesting period. At the end of Year 1, 5 managers have left and management revises the forfeiture estimate to 12%. At Year 2 end, 2 more managers leave and estimate is revised to 14%. At Year 3 end, 1 more manager leaves — total departed: 8 managers (16%), leaving 42 managers with 1,68,000 options vesting.",
			steps: [
				"Step 1 — Grant date measurement: 2,00,000 options x NPR 165 = NPR 3,30,00,000 total fair value. Initial estimate: 90% vest = 1,80,000 options.",
				"Step 2 — Year 1 expense: Revised estimate 88% vest = 1,76,000 options. Cumulative expense Year 1 = 1,76,000 x NPR 165 x 1/3 = NPR 96,80,000. Dr Employee Benefit Expense NPR 96,80,000 / Cr Share Options Reserve NPR 96,80,000.",
				"Step 3 — Year 2 expense: Revised estimate 86% vest = 1,72,000 options. Cumulative expense Year 2 = 1,72,000 x NPR 165 x 2/3 = NPR 1,89,20,000. Year 2 charge = NPR 1,89,20,000 - NPR 96,80,000 = NPR 92,40,000.",
				"Step 4 — Year 3 expense: Actual vest = 42 managers x 4,000 options each = 1,68,000 options. Cumulative expense = 1,68,000 x NPR 165 = NPR 2,77,20,000. Year 3 charge = NPR 2,77,20,000 - NPR 1,89,20,000 = NPR 88,00,000.",
				"Step 5 — Exercise (assume all 1,68,000 exercised at NPR 250): Dr Bank NPR 4,20,00,000 + Dr Share Options Reserve NPR 2,77,20,000 / Cr Share Capital NPR 1,68,00,000 (at par NPR 100) / Cr Share Premium NPR 5,29,20,000.",
			],
			journalEntries: [
				"Year 1: Dr Employee Benefit Expense NPR 96,80,000 / Cr Share Options Reserve NPR 96,80,000.",
				"Year 2: Dr Employee Benefit Expense NPR 92,40,000 / Cr Share Options Reserve NPR 92,40,000.",
				"Year 3: Dr Employee Benefit Expense NPR 88,00,000 / Cr Share Options Reserve NPR 88,00,000.",
				"Exercise: Dr Bank NPR 4,20,00,000 / Dr Share Options Reserve NPR 2,77,20,000 / Cr Share Capital NPR 1,68,00,000 / Cr Share Premium NPR 5,29,20,000.",
			],
			difficulty: "pro",
		},
		modificationRepricing: {
			title: "TechNepal Software — Option Repricing After Market Downturn",
			context: "TechNepal Software Ltd (NEPSE-listed IT company) granted 50,000 share options to employees on 1 Shrawan 2080 BS with a 3-year vesting period and exercise price of NPR 600. Grant-date fair value was NPR 210 per option. After a 40% NEPSE correction, the share price falls to NPR 350 by end of Year 1. Management reprices the exercise price to NPR 350 (approved by AGM and notified to SEBON). The fair value of the original option at modification date is NPR 45, and the fair value of the modified option is NPR 130.",
			steps: [
				"Step 1 — Continue recognising the original grant-date fair value: 50,000 x NPR 210 / 3 years = NPR 35,00,000 per year. The original expense is never reduced even though the option is underwater.",
				"Step 2 — Calculate incremental fair value from modification: Fair value of modified option NPR 130 - Fair value of original option at modification date NPR 45 = NPR 85 incremental fair value per option.",
				"Step 3 — Recognise incremental expense over remaining vesting period: 50,000 x NPR 85 = NPR 42,50,000 spread over 2 remaining years = NPR 21,25,000 per year additional expense.",
				"Step 4 — Year 1 total expense: NPR 35,00,000 (original). Year 2 total expense: NPR 35,00,000 (original) + NPR 21,25,000 (incremental) = NPR 56,25,000. Year 3 total expense: same NPR 56,25,000.",
				"Step 5 — Total expense over 3 years: NPR 35,00,000 + NPR 56,25,000 + NPR 56,25,000 = NPR 1,47,50,000 (vs NPR 1,05,00,000 without modification). The NPR 42,50,000 excess is the cost of management's decision to reprice.",
			],
			journalEntries: [
				"Year 1 (pre-modification): Dr Employee Benefit Expense NPR 35,00,000 / Cr Share Options Reserve NPR 35,00,000.",
				"Year 2 (post-modification): Dr Employee Benefit Expense NPR 56,25,000 / Cr Share Options Reserve NPR 56,25,000 — includes original NPR 35,00,000 plus incremental NPR 21,25,000.",
				"Year 3: Dr Employee Benefit Expense NPR 56,25,000 / Cr Share Options Reserve NPR 56,25,000.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "NFRS 2 equity-settled questions always require three calculations: (1) grant-date fair value per option, (2) estimated number of options vesting (adjusting for forfeitures), and (3) cumulative expense allocation over the vesting period. The cumulative catch-up approach means Year 2 expense = (cumulative charge to Year 2) minus (Year 1 charge already recognised)." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates consistently fail to adjust for revised forfeiture estimates. When actual or expected leavers change, you must recalculate the cumulative expense based on the revised number of options expected to vest — do not simply recognise a flat annual charge based on the original estimate." },
			{ source: "Exam Technique", tip: "For modification questions, always compute two components separately: (1) the original grant-date fair value expense continues regardless of modification, and (2) the incremental fair value (modified FV minus original FV at modification date) is spread over the remaining vesting period. Beneficial modifications increase total expense; adverse modifications are ignored." },
			{ source: "Nepal-specific", tip: "SEBON's ESOP Guidelines 2078 set a minimum 3-year vesting period and maximum 5% ESOP pool. Exercise price cannot be below par value (NPR 100). In exam questions set in Nepal, these regulatory constraints narrow the possible plan designs — for example, deep-discount options below par are prohibited." },
			{ source: "Recurring Pattern", tip: "On exercise, the journal entry moves Share Options Reserve to Share Capital and Share Premium — no profit or loss impact. If options expire unexercised, the reserve is transferred to Retained Earnings, NOT reversed through profit or loss. This is a frequent exam trap." },
			{ source: "Exam Technique", tip: "Cash-settled share-based payments (SARs) require remeasurement at EVERY reporting date until settlement. The liability is marked to market. Contrast with equity-settled where grant-date fair value is locked in. If the question asks you to compare the two methods, highlight: timing of expense recognition, balance sheet treatment (equity vs liability), and volatility of P&L impact." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "ESOP expense not recognised because no cash outflow occurs",
			description: "Entities argue that equity-settled share-based payments do not involve a cash cost and therefore no expense should be recognised. NFRS 2 is clear: the fair value of services received is recognised as an expense with a corresponding credit to equity. The expense reflects the economic cost of dilution borne by existing shareholders, regardless of cash flow.",
			sector: "Banking",
		},
		{
			title: "Using exercise-date fair value instead of grant-date fair value for equity-settled plans",
			description: "Entities measure the ESOP expense using the share price at the date employees exercise their options rather than at the grant date. For equity-settled transactions, NFRS 2 requires grant-date fair value — the fair value is locked in and never subsequently adjusted for share price movements. Only the estimated number of instruments vesting is updated.",
			sector: "Listed Companies",
		},
		{
			title: "Forfeiture estimates not revised at each reporting date",
			description: "Entities set a forfeiture estimate at the grant date and never revise it, even as actual employee turnover data becomes available. NFRS 2 requires the entity to revise the estimate of the number of equity instruments expected to vest at each reporting date. The cumulative expense is adjusted to reflect actual and revised estimated forfeitures.",
			sector: "IT Companies",
		},
		{
			title: "Modification benefit recognised as income",
			description: "When an entity modifies option terms in a way that decreases fair value (e.g., shortening the exercise window), some entities recognise the reduction as a gain in profit or loss. NFRS 2 prohibits this — the minimum expense is always the original grant-date fair value. Only beneficial modifications (increasing fair value) result in additional expense recognition.",
			sector: "Listed Companies",
		},
		{
			title: "Tax deduction claimed on NFRS 2 expense without IRD basis",
			description: "Entities claim a tax deduction for the NFRS 2 share-based payment expense in their income tax return. Under the Income Tax Act 2058, the expense is considered notional (no cash outflow to the entity) and is generally not deductible. This creates a permanent difference. Entities must adjust taxable income to add back the NFRS 2 expense when computing tax under the Income Tax Act.",
			sector: "Banking",
		},
	],

	relatedStandards: [
		{
			slug: "nas-19",
			nfrsNumber: "NAS 19",
			title: "Employee Benefits",
			reason: "NAS 19 covers other forms of employee compensation (gratuity, leave encashment, provident fund) and must be read alongside NFRS 2 for total employee remuneration accounting",
		},
		{
			slug: "nas-33",
			nfrsNumber: "NAS 33",
			title: "Earnings Per Share",
			reason: "Share options outstanding have a dilutive effect on EPS. NAS 33 requires inclusion of dilutive potential ordinary shares from ESOPs in diluted EPS calculation using the treasury stock method",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Cash-settled share-based payment liabilities are financial liabilities measured at fair value through profit or loss under NFRS 9 principles",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "The NFRS 2 expense creates a permanent difference if not tax-deductible under Income Tax Act 2058, or a temporary difference if future tax deduction is based on intrinsic value at exercise date",
		},
	],
};
