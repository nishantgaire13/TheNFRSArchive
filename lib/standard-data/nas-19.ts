import type { StandardPageData } from "./types";

export const nas19: StandardPageData = {
	slug: "nas-19",
	nfrsNumber: "NAS 19",
	ifrsEquivalent: "IAS 19",
	title: "Employee Benefits",
	topic: "employee-benefits",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2013-01-01",
	status: "aligned",
	heroMotif: "people",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","ACCA ATX","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Statutory Gratuity",
				ifrs: "No specific gratuity requirement — IAS 19 provides general defined benefit framework (IAS 19.55–98)",
				nfrs: "Same framework, but Nepal Labour Act 2074 mandates gratuity at 1 month's basic salary per year of service (effectively 8.33% of basic salary) after completing 1 year of continuous service",
				nepalImpact: "Every employer in Nepal must provide for gratuity. This is the most common defined benefit obligation. Actuarial valuation is required under NAS 19 but many SMEs use simplistic calculations instead",
				significance: "high",
			},
			{
				topic: "Provident Fund — Defined Contribution",
				ifrs: "Defined contribution plans — employer recognises contribution as expense when employee renders service (IAS 19.50–54)",
				nfrs: "Same treatment. Nepal's Employees Provident Fund (EPF) requires 10% employer + 10% employee contribution. This is a defined contribution plan — no actuarial valuation needed",
				nepalImpact: "EPF contributions are straightforward DC accounting. However, some entities with private PF trusts may inadvertently create defined benefit obligations if the trust guarantees a return",
				significance: "medium",
			},
			{
				topic: "Actuarial Valuation Availability",
				ifrs: "Actuarial assumptions must be unbiased and mutually compatible (IAS 19.75–98). Qualified actuary involvement expected",
				nfrs: "Same requirement, but Nepal has very few qualified actuaries (estimated <20 practising). Most are based in Kathmandu with limited capacity for all entities requiring valuations",
				nepalImpact: "Many entities use simplistic gratuity calculations instead of proper actuarial valuations. Some rely on Indian actuarial firms. Quality and timeliness of valuations vary significantly",
				significance: "high",
			},
			{
				topic: "Discount Rate",
				ifrs: "Discount rate based on high-quality corporate bonds, or government bonds where no deep corporate bond market exists (IAS 19.83)",
				nfrs: "Nepal has no deep corporate bond market. Discount rate uses Nepal government bond yields — typically NRB development bond rates (6–9%)",
				nepalImpact: "Government bond rate selection significantly affects DBO calculation. Small changes (1%) can swing gratuity liability by 10–15%. No consensus on which government bond tenor to use",
				significance: "high",
			},
			{
				topic: "Actuarial Gains/Losses in OCI",
				ifrs: "Remeasurements (actuarial gains/losses, return on plan assets excluding interest) recognised in OCI, never reclassified to P&L (IAS 19.120)",
				nfrs: "Same treatment. Many Nepali entities incorrectly recognised actuarial gains/losses in P&L during early NFRS adoption, especially in gratuity calculations",
				nepalImpact: "OCI treatment of actuarial gains/losses was a major NFRS transition adjustment for BFIs. Some entities still misclassify, affecting both P&L and equity presentation",
				significance: "medium",
			},
			{
				topic: "Leave Encashment",
				ifrs: "Short-term compensated absences — accrue when employees render service creating entitlement (IAS 19.13–16). Long-term = other long-term benefits",
				nfrs: "Same framework. Labour Act 2074 allows accumulation of up to 90 days home leave. Leave encashment on separation can create significant liabilities",
				nepalImpact: "Classification matters: if leave can be carried beyond 12 months and encashed on retirement, it is an other long-term benefit requiring actuarial valuation — not a simple accrual",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to provide actuarial valuations for gratuity and leave encashment obligations. BFIs must use qualified actuaries approved by the Insurance Board or ICAN. NRB Unified Directives prescribe minimum employee benefit provisions. Gratuity expense is a deductible cost for BFI profitability calculations. Staff bonus (per Bonus Act 2030) of 10% of net profit is also a significant employee cost for BFIs.",
		sebon: "SEBON requires listed entities to disclose employee benefit obligations, including assumptions used for actuarial valuations (discount rate, salary growth, attrition). Material changes in actuarial assumptions must be disclosed. Listed companies must also disclose key management personnel compensation as required by NAS 24.",
		ird: "Gratuity provisions are tax-deductible when actually paid to employees, not when provided. This creates a deductible temporary difference and deferred tax asset under NAS 12. EPF employer contributions (10%) are deductible when paid. Staff bonus under the Bonus Act is deductible. Leave encashment is deductible on payment basis.",
	},

	timeline: [
		{ date: "Jun 2011", label: "IAS 19 Revised", description: "Eliminated corridor approach, mandated OCI for remeasurements" },
		{ date: "Jan 2013", label: "IAS 19 (2011) Effective", description: "Revised standard effective globally" },
		{ date: "Jul 2018", label: "NAS 19 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Classify the Benefit",
			coreQuestion: "Is this a short-term benefit, post-employment benefit, other long-term benefit, or termination benefit?",
			nepalExample: "Himalayan Bank classifies: monthly salary and dashain bonus = short-term; EPF contribution = post-employment (defined contribution); gratuity = post-employment (defined benefit); accumulated leave encashable after 12 months = other long-term benefit; VRS payments = termination benefits.",
			paraRef: "IAS 19.5–8",
		},
		{
			number: 2,
			name: "Account for Defined Contribution Plans",
			coreQuestion: "What is the employer's contribution obligation?",
			nepalExample: "Himalayan Bank contributes 10% of basic salary to EPF for each employee. Monthly contribution for 500 employees averaging NPR 50,000 basic: 500 × NPR 50,000 × 10% = NPR 25,00,000/month. Recognised as expense when employees render service. No actuarial valuation needed.",
			paraRef: "IAS 19.50–54",
		},
		{
			number: 3,
			name: "Measure Defined Benefit Obligation (DBO)",
			coreQuestion: "What is the present value of future benefit payments earned to date?",
			nepalExample: "Nabil Bank has 1,200 employees eligible for gratuity under Labour Act 2074. Actuary projects total future gratuity payments using: current salary levels, assumed salary growth (8% p.a.), attrition rates (5–10% by age band), mortality (Nepal life tables), and discounts at government bond rate (7%). DBO at Ashad-end: NPR 85 crore.",
			paraRef: "IAS 19.67–69",
		},
		{
			number: 4,
			name: "Recognise Components in P&L and OCI",
			coreQuestion: "What goes to profit or loss vs OCI?",
			nepalExample: "Nabil Bank's gratuity cost: current service cost NPR 12 crore (P&L), net interest cost NPR 5 crore (P&L, DBO × discount rate less return on plan assets), actuarial loss from salary increase assumption change NPR 3 crore (OCI). Past service cost from policy enhancement NPR 1 crore (P&L immediately).",
			paraRef: "IAS 19.120–130",
		},
		{
			number: 5,
			name: "Disclose Key Assumptions and Sensitivity",
			coreQuestion: "Are all material assumptions and their sensitivities disclosed?",
			nepalExample: "Nabil Bank discloses: discount rate 7% (1% increase reduces DBO by NPR 8 crore), salary growth 8% (1% increase raises DBO by NPR 9 crore), attrition rate 7% average, expected remaining service life 15 years. Maturity profile of benefit payments over next 5 years also disclosed.",
			paraRef: "IAS 19.144–147",
		},
	],

	inlineExamples: {
		gratuityValuation: {
			title: "Nabil Bank — Gratuity DBO Calculation",
			context: "Nabil Bank Ltd has a gratuity obligation under Labour Act 2074 for 1,200 employees. Opening DBO: NPR 80,00,00,000. Discount rate: 7%. Current service cost determined by actuary: NPR 12,00,00,000. Benefits paid during the year: NPR 5,00,00,000. Actuarial loss from experience adjustments: NPR 3,50,00,000. No plan assets (unfunded).",
			steps: [
				"Step 1 — Opening DBO: NPR 80,00,00,000.",
				"Step 2 — Current service cost (P&L): NPR 12,00,00,000. This is the increase in DBO from one additional year of employee service.",
				"Step 3 — Interest cost (P&L): NPR 80,00,00,000 × 7% = NPR 5,60,00,000. Since no plan assets, net interest = full interest on DBO.",
				"Step 4 — Benefits paid: (NPR 5,00,00,000). Reduces the DBO when gratuity is actually paid to departing employees.",
				"Step 5 — Actuarial loss (OCI): NPR 3,50,00,000. Arises because actual salary increases exceeded assumptions, or fewer employees left than assumed.",
				"Step 6 — Closing DBO: NPR 80 cr + NPR 12 cr + NPR 5.6 cr − NPR 5 cr + NPR 3.5 cr = NPR 96,10,00,000.",
			],
			journalEntries: [
				"Service cost: Dr Employee Benefit Expense (P&L) NPR 12,00,00,000 / Cr Gratuity Obligation NPR 12,00,00,000",
				"Interest cost: Dr Finance Cost (P&L) NPR 5,60,00,000 / Cr Gratuity Obligation NPR 5,60,00,000",
				"Benefits paid: Dr Gratuity Obligation NPR 5,00,00,000 / Cr Cash NPR 5,00,00,000",
				"Actuarial loss: Dr OCI — Remeasurement NPR 3,50,00,000 / Cr Gratuity Obligation NPR 3,50,00,000",
			],
			difficulty: "medium",
		},
		sensitivityAnalysis: {
			title: "Everest Finance — Discount Rate Sensitivity on Gratuity",
			context: "Everest Finance Ltd (a Class C finance company) has 150 employees with a gratuity DBO of NPR 8,50,00,000. The actuary provides sensitivity analysis for three key assumptions: discount rate (base 7%), salary growth rate (base 8%), and employee turnover (base 10%). Management needs to understand the impact of +/- 1% changes.",
			steps: [
				"Step 1 — Discount rate sensitivity: +1% (to 8%): DBO decreases to NPR 7,65,00,000 (−10%). −1% (to 6%): DBO increases to NPR 9,52,00,000 (+12%). Higher discount rate = lower PV of future payments.",
				"Step 2 — Salary growth sensitivity: +1% (to 9%): DBO increases to NPR 9,44,00,000 (+11%). −1% (to 7%): DBO decreases to NPR 7,73,00,000 (−9%). Salary growth and discount rate have roughly offsetting effects.",
				"Step 3 — Turnover sensitivity: +2% (to 12%): DBO decreases to NPR 7,82,00,000 (−8%). Higher turnover means fewer employees reach full gratuity entitlement.",
				"Step 4 — Maturity profile: 40% of DBO expected to be paid within 5 years (employees nearing retirement), 35% in 5–10 years, 25% beyond 10 years.",
				"Step 5 — Weighted average duration of DBO: 8.5 years. This determines sensitivity to discount rate changes — longer duration = higher sensitivity.",
			],
			journalEntries: [
				"No journal entries — sensitivity analysis is disclosure only in notes.",
				"If assumptions change at next valuation, the change flows through OCI as an actuarial gain/loss, not P&L.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Three components of defined benefit cost: (1) service cost → P&L, (2) net interest on net defined benefit liability → P&L, (3) remeasurements (actuarial gains/losses) → OCI. Never mix them up. The corridor approach is DEAD since IAS 19 (2011)." },
			{ source: "Dec 2023 Examiner Report", tip: "Candidates confuse defined contribution and defined benefit plans. DC = fixed employer contribution, no further obligation. DB = employer promises a specific benefit level. Nepal's EPF is DC; gratuity is DB. If the question says 'guarantees a return' on a PF trust, it's DB." },
			{ source: "Exam Technique", tip: "DBO roll-forward: Opening DBO + current service cost + interest cost + past service cost − benefits paid ± remeasurements = Closing DBO. Always show this reconciliation in exam answers." },
			{ source: "Recurring Pattern", tip: "Discount rate must use government bond rate in Nepal (no deep corporate bond market). Select a tenor matching the duration of the obligation. If DBO duration is 10 years, use 10-year government bond rate." },
			{ source: "Nepal-specific", tip: "Labour Act 2074 gratuity: 1 month basic salary per year after 1 year of service. This creates a DB obligation for every Nepal employer. Actuarial valuation is required under NAS 19 — simplistic accrual (just multiplying current salary × years) does not comply." },
			{ source: "Exam Technique", tip: "Past service cost is recognised immediately in P&L when the plan amendment occurs — no spreading. Curtailment gains/losses are also P&L. Only remeasurements go to OCI." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Gratuity calculated without actuarial valuation",
			description: "Entities calculate gratuity provision by simply multiplying current salary by years of service, ignoring actuarial factors (salary growth, attrition, mortality, discounting). NAS 19 requires projected unit credit method with actuarial assumptions. The simplistic approach typically understates the obligation by 20–40%.",
			sector: "Manufacturing",
		},
		{
			title: "Actuarial gains/losses recognised in P&L instead of OCI",
			description: "Entities recognise all changes in the gratuity obligation through profit or loss, including actuarial remeasurements that NAS 19 requires to be in OCI. This overstates P&L volatility and misclassifies equity movements. The OCI treatment was new for Nepal in 2018.",
			sector: "Banking",
		},
		{
			title: "Leave encashment treated as short-term when it is long-term",
			description: "Accumulated leave that can be carried forward beyond 12 months and encashed on retirement is an other long-term benefit requiring actuarial valuation — not a simple year-end accrual. Many entities treat all leave provisions as short-term, understating the liability.",
			sector: "All Sectors",
		},
		{
			title: "EPF treated as defined benefit when it is defined contribution",
			description: "Some entities perform actuarial valuations on EPF contributions, treating EPF as a defined benefit plan. Nepal's EPF is a government-managed defined contribution scheme — the employer's obligation is limited to the 10% contribution. No actuarial valuation is needed unless the entity operates a private trust guaranteeing returns.",
			sector: "Listed Companies",
		},
		{
			title: "Sensitivity analysis on key actuarial assumptions omitted",
			description: "NAS 19 requires disclosure of sensitivity analysis for each significant actuarial assumption (discount rate, salary growth, mortality/attrition). Many entities disclose only base assumptions without showing how changes would affect the DBO. This is a mandatory disclosure, not optional.",
			sector: "All Sectors",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "Actuarial remeasurements are presented in OCI under NAS 1's requirements for the statement of profit or loss and other comprehensive income",
		},
		{
			slug: "nas-37",
			nfrsNumber: "NAS 37",
			title: "Provisions, Contingent Liabilities and Contingent Assets",
			reason: "NAS 37 does not apply to employee benefits — NAS 19 is the specific standard. However, both create non-current provisions on the balance sheet",
		},
		{
			slug: "nfrs-2",
			nfrsNumber: "NFRS 2",
			title: "Share-based Payment",
			reason: "Share-based employee benefits (stock options) fall under NFRS 2, not NAS 19. The two standards complement each other for total employee compensation",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Gratuity provisions create deductible temporary differences (deductible when paid, not when provided) generating deferred tax assets under NAS 12",
		},
	],
};
