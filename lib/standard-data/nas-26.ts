import type { StandardPageData } from "./types";

export const nas26: StandardPageData = {
	slug: "nas-26",
	nfrsNumber: "NAS 26",
	ifrsEquivalent: "IAS 26",
	title: "Accounting and Reporting by Retirement Benefit Plans",
	topic: "retirement-benefit-plans",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1988-01-01",
	status: "aligned",
	heroMotif: "people",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Applicability — Plan vs Employer Reporting",
				ifrs: "IAS 26 applies to financial statements of retirement benefit plans as separate reporting entities (IAS 26.1–4). Employer accounting is covered by IAS 19",
				nfrs: "Same scope. NAS 26 applies to plan financial statements; NAS 19 covers employer accounting. Distinction important because Nepal's EPF, CIT, and SSF each publish their own financial statements",
				nepalImpact: "EPF publishes annual financial statements — NAS 26 governs those. Individual employers report EPF contributions as DC expense under NAS 19. Two different standards, two different perspectives on the same plan",
				significance: "high",
			},
			{
				topic: "Plan Asset Valuation — Fair Value",
				ifrs: "Plan investments shall be carried at fair value. Where fair value is not determinable, disclosure of the reason is required (IAS 26.32–33)",
				nfrs: "Same requirement. However, EPF historically carried investments at amortised cost or cost. Transition to fair value measurement revealed significant unrealised gains in EPF's government bond and equity portfolios",
				nepalImpact: "EPF holds significant government securities, bank fixed deposits, and equity investments. Fair value measurement of equity (using NEPSE prices) and government bonds (using secondary market yields) differs materially from historical cost",
				significance: "high",
			},
			{
				topic: "Actuarial Present Value — Defined Benefit Plans",
				ifrs: "For DB plans, financial statements must include the actuarial present value of promised retirement benefits (APVPRB), distinguishing vested and non-vested benefits (IAS 26.17–21)",
				nfrs: "Same requirement. SSF's pension scheme (DB element with guaranteed monthly pension after 15 years) requires APVPRB calculation — challenging due to limited actuarial data in Nepal",
				nepalImpact: "SSF, established 2017, has limited historical data for actuarial assumptions (mortality, withdrawal, salary growth). APVPRB estimates carry high estimation uncertainty. EPF's guaranteed return element also creates DB characteristics requiring APVPRB assessment",
				significance: "high",
			},
			{
				topic: "Discount Rate for Actuarial Valuation",
				ifrs: "Discount rate based on high-quality corporate bonds or government bonds where no deep corporate bond market exists (consistent with IAS 19.83 guidance applied to plan reporting)",
				nfrs: "Nepal uses government bond yields (NRB development bonds, 6–9%). For SSF's long-duration pension obligations (30–40 year horizon), extrapolation beyond available bond tenors introduces significant estimation uncertainty",
				nepalImpact: "Small discount rate changes materially affect APVPRB for long-duration pension obligations. No consensus on which government bond tenor matches SSF's obligation duration. Limited yield curve beyond 10 years",
				significance: "high",
			},
			{
				topic: "Defined Contribution Plan Disclosures",
				ifrs: "DC plan financial statements include: statement of net assets available for benefits, statement of changes in net assets, description of funding policy, and summary of significant accounting policies (IAS 26.13–16)",
				nfrs: "Same disclosures required. EPF's annual report includes these elements but format alignment with NAS 26 has been gradual. CIT retirement savings scheme disclosures also follow this framework",
				nepalImpact: "EPF and CIT have historically followed their own reporting formats prescribed by governing legislation. Alignment with NAS 26 format requirements improves comparability but requires transitional adjustments",
				significance: "medium",
			},
			{
				topic: "Availability of Qualified Actuaries",
				ifrs: "IAS 26 requires actuarial valuation for DB plans. Assumes availability of qualified actuaries in the jurisdiction",
				nfrs: "Nepal has fewer than 50 qualified actuaries. DB plan valuations often rely on Indian actuarial firms or simplified approaches. SSF pension scheme valuation requires specialised pension actuarial expertise that is particularly scarce",
				nepalImpact: "Quality of APVPRB calculations varies significantly. Some plans use internal simplified calculations rather than independent actuarial valuations, potentially understating or overstating promised benefit obligations",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB does not directly regulate retirement benefit plans, but BFI-sponsored private gratuity trusts must comply with NRB directives on related-party transactions and prudential limits. Plan investments in BFI deposits are subject to single-borrower concentration limits from the plan's perspective.",
		sebon: "CIT (Citizen Investment Trust), which operates retirement savings schemes, is a government entity whose investment activities in listed securities are subject to SEBON oversight. CIT's unit-scheme investments must comply with SEBON mutual fund regulations. SEBON also requires disclosure of plan investment holdings in listed entities.",
		ird: "Plan income (investment returns within EPF, CIT, SSF) is generally tax-exempt under the Income Tax Act 2058. Employer contributions to approved retirement funds are tax-deductible. Employee EPF contributions qualify for tax deduction under Section 63. Benefits paid to members are taxed as retirement income under specific provisions of the Act.",
	},

	timeline: [
		{ date: "Jan 1988", label: "IAS 26 Effective", description: "Original IAS 26 effective globally" },
		{ date: "2019 BS", label: "EPF Established", description: "Employees' Provident Fund established under EPF Act 2019 BS" },
		{ date: "Jul 2017", label: "Social Security Act", description: "Social Security Act 2074 BS enacted, establishing SSF" },
		{ date: "Jul 2018", label: "NAS 26 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Classify Plan Type",
			coreQuestion: "Is this a defined contribution plan or defined benefit plan?",
			nepalExample: "Sagarmatha Private Gratuity Fund: employer contributes annually based on actuarial recommendation, fund guarantees gratuity payment of 1 month salary per year of service under Labour Act 2074. Since the benefit is defined by formula (final salary × years), this is a defined benefit plan. EPF: employer and employee each contribute 10% of basic — defined contribution from employer's perspective.",
			paraRef: "IAS 26.8–12",
		},
		{
			number: 2,
			name: "Measure Plan Assets at Fair Value",
			coreQuestion: "Are all plan investments stated at fair value?",
			nepalExample: "Sagarmatha Fund holds: NPR 50 crore in government bonds (fair value using NRB secondary market yields — 3% unrealised gain vs amortised cost), NPR 20 crore in bank FDs (fair value ≈ carrying amount for short-term), NPR 10 crore in listed equity (NEPSE closing prices), NPR 5 crore in real estate (independent valuation). Total fair value: NPR 85 crore vs historical cost of NPR 80 crore.",
			paraRef: "IAS 26.32–33",
		},
		{
			number: 3,
			name: "Determine Actuarial PV of Promised Benefits (DB plans)",
			coreQuestion: "What is the present value of all future benefits already earned by plan members?",
			nepalExample: "Sagarmatha Fund actuary calculates: 200 active members, average age 38, average service 8 years, average monthly salary NPR 60,000. Projected gratuity at retirement (age 58): salary × years × growth factor, discounted at government bond rate (7%). Vested benefits: NPR 72 crore. Non-vested: NPR 8 crore. Total APVPRB: NPR 80 crore. Surplus: NPR 85 crore assets − NPR 80 crore APVPRB = NPR 5 crore.",
			paraRef: "IAS 26.17–21",
		},
		{
			number: 4,
			name: "Recognise Contributions, Benefits, and Investment Returns",
			coreQuestion: "Are all inflows, outflows, and investment returns properly recorded?",
			nepalExample: "During FY 2082/83: employer contributions received NPR 8 crore, investment income (interest + dividends) NPR 6.5 crore, unrealised fair value gain on equity NPR 1.2 crore, benefits paid to retiring/departing members NPR 4.5 crore, administrative expenses NPR 0.3 crore. Net change in assets: +NPR 10.9 crore.",
			paraRef: "IAS 26.13–16",
		},
		{
			number: 5,
			name: "Prepare Plan Financial Statements",
			coreQuestion: "Do the financial statements include all required components?",
			nepalExample: "Sagarmatha Fund FS include: (a) Statement of Net Assets Available for Benefits — investments at fair value NPR 85 crore, other assets NPR 2 crore, liabilities NPR 1 crore, net assets NPR 86 crore; (b) Statement of Changes in Net Assets — contributions, investment income, benefits paid, expenses; (c) APVPRB cross-referenced to actuarial report; (d) Accounting policies; (e) Description of plan and funding policy.",
			paraRef: "IAS 26.13, 17",
		},
	],

	inlineExamples: {
		gratuityFundFS: {
			title: "Sagarmatha Private Gratuity Fund — Plan Financial Statements",
			context: "Sagarmatha Enterprises Ltd established a separate gratuity fund trust for its 200 employees. The fund is a defined benefit plan providing gratuity of 1 month's basic salary per year of service under Labour Act 2074. Opening net assets: NPR 75,00,00,000. The fund must prepare its own financial statements under NAS 26.",
			steps: [
				"Step 1 — Classify: Defined benefit plan (benefit formula defined by law, employer bears investment risk through the fund).",
				"Step 2 — Fair value of investments: Government bonds NPR 50,00,00,000 (fair value), bank FDs NPR 20,00,00,000, equity NPR 10,00,00,000 (NEPSE prices), real estate NPR 5,00,00,000 (independent valuation). Total: NPR 85,00,00,000.",
				"Step 3 — Contributions received during year: Employer NPR 8,00,00,000 (based on actuarial recommendation).",
				"Step 4 — Investment income: Interest NPR 4,50,00,000, dividends NPR 80,00,000, unrealised gain on equity NPR 1,20,00,000. Total: NPR 6,50,00,000.",
				"Step 5 — Benefits paid to departing employees: NPR 4,50,00,000 (15 employees retired/resigned during year).",
				"Step 6 — Administrative expenses: Fund management, audit, actuarial fees: NPR 30,00,000.",
				"Step 7 — Closing net assets: NPR 75 cr + NPR 8 cr + NPR 6.5 cr − NPR 4.5 cr − NPR 0.3 cr = NPR 84,70,00,000.",
				"Step 8 — APVPRB per actuary: NPR 80,00,00,000. Surplus: NPR 4,70,00,000.",
			],
			journalEntries: [
				"Contributions: Dr Cash/Bank NPR 8,00,00,000 / Cr Contributions Received NPR 8,00,00,000",
				"Interest income: Dr Investment Income Receivable NPR 4,50,00,000 / Cr Investment Income NPR 4,50,00,000",
				"Fair value gain: Dr Equity Investments NPR 1,20,00,000 / Cr Unrealised Gain on Investments NPR 1,20,00,000",
				"Benefits paid: Dr Benefits Payable NPR 4,50,00,000 / Cr Cash/Bank NPR 4,50,00,000",
			],
			difficulty: "medium",
		},
		ssfPensionAPVPRB: {
			title: "SSF Pension Scheme — Actuarial Present Value Estimation",
			context: "Social Security Fund (SSF) pension scheme has 500,000 active contributors with average age 32 and average monthly contributing salary of NPR 35,000. The pension vests after 15 years of contribution, providing a monthly pension from age 60. The actuary must estimate the APVPRB for the scheme's NAS 26 financial statements using Nepal government bond yields and limited historical demographic data.",
			steps: [
				"Step 1 — Segment members: 200,000 members with <5 years contributions (high non-vesting probability), 200,000 with 5–10 years (moderate), 100,000 with >10 years (high vesting probability). Non-vested benefits dominate.",
				"Step 2 — Project future pension payments: For a member age 32 with 5 years' contributions and NPR 35,000 salary, project salary at age 60 using 8% annual growth → NPR 3,50,000/month. Monthly pension = 50% of average contributing salary over last 5 years.",
				"Step 3 — Apply demographic assumptions: withdrawal rate (members leaving formal sector — 8% p.a. for young workers, declining with age), mortality (Nepal life tables), disability rate (0.5% p.a.).",
				"Step 4 — Discount at government bond rate: 7% discount rate. For a member retiring in 28 years with pension payable for life expectancy of 20 years post-retirement, PV factor is significant. Total APVPRB per member varies widely — NPR 50,000 for a new joiner to NPR 15,00,000 for a near-vesting member.",
				"Step 5 — Aggregate: Total APVPRB estimated at NPR 8,000 crore with ±25% sensitivity band due to limited historical data. Disclosure emphasises estimation uncertainty.",
			],
			journalEntries: [
				"No journal entries — APVPRB is disclosed alongside or cross-referenced from the statement of net assets.",
				"Sensitivity disclosure: 1% change in discount rate changes APVPRB by approximately NPR 1,200 crore (±15%).",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Exam Technique", tip: "NAS 26 is about the PLAN's financial statements, not the EMPLOYER's. If the question says 'prepare financial statements of the pension fund,' use NAS 26. If it says 'account for pension costs in the employer's books,' use NAS 19. This distinction catches many candidates." },
			{ source: "Recurring Pattern", tip: "Plan assets must be at fair value — always. Even if the plan historically used cost or amortised cost, NAS 26 requires fair value for plan investments. Government bonds at fair value (not par), equity at NEPSE prices, real estate at independent valuation." },
			{ source: "Nepal-specific", tip: "EPF is defined contribution from the employer's perspective (10% + 10%, no further obligation). But EPF's own financial statements must address whether the guaranteed return feature creates a DB element within the plan. This nuance appears in exam questions testing understanding of plan classification." },
			{ source: "Exam Technique", tip: "For DB plan financial statements under NAS 26, remember the two presentation options: (a) APVPRB on the face of the statement showing surplus/deficit, or (b) net assets statement with cross-reference to actuarial report. Most plans use option (b) — state this in your answer." },
			{ source: "Recurring Pattern", tip: "Vested vs non-vested benefits: vested benefits are not conditional on continued employment. In Nepal, gratuity vests after 1 year (Labour Act 2074); SSF pension vests after 15 years of contributions. Always split APVPRB into these two components." },
			{ source: "Nepal-specific", tip: "The discount rate challenge applies equally to NAS 26 and NAS 19 — no deep corporate bond market in Nepal, so use government bond yields. For long-duration pension obligations like SSF (30+ years), extrapolation beyond available bond tenors introduces estimation uncertainty that must be disclosed." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Confusing NAS 26 (plan reporting) with NAS 19 (employer reporting)",
			description: "NAS 26 governs financial statements of the retirement benefit plan as a separate reporting entity. NAS 19 governs how the sponsoring employer accounts for employee benefit costs. Using NAS 19 measurement approaches (DBO, service cost, remeasurements) in plan financial statements, or vice versa, is a fundamental scope error.",
			sector: "All Sectors",
		},
		{
			title: "Plan investments not measured at fair value",
			description: "NAS 26 requires plan investments at fair value. EPF and private gratuity funds historically carried government bonds at amortised cost and real estate at historical cost. The transition to fair value may reveal significant unrealised gains or losses that affect reported plan surplus/deficit.",
			sector: "Financial Institutions",
		},
		{
			title: "APVPRB not calculated or disclosed for defined benefit plans",
			description: "Some DB plan financial statements present only net assets available for benefits without determining or disclosing the actuarial present value of promised retirement benefits. NAS 26 requires this information either on the face of the financial statements or via cross-reference to an actuarial report.",
			sector: "All Sectors",
		},
		{
			title: "EPF guaranteed return creating unrecognised DB risk",
			description: "EPF guarantees members a minimum return (historically 7–9%). If plan investments underperform, EPF bears the shortfall — a DB characteristic. EPF's own financial statements should assess whether the guaranteed return element creates a deficit that needs disclosure under NAS 26's DB plan requirements.",
			sector: "Government Entities",
		},
		{
			title: "Inadequate disclosure of actuarial assumptions and estimation uncertainty",
			description: "SSF's pension scheme has very limited historical data (established 2017). Actuarial assumptions for withdrawal, mortality, and salary growth carry high estimation uncertainty. Plans must disclose the key assumptions used, their sensitivity, and the fact that limited data increases uncertainty — many omit this critical disclosure.",
			sector: "Government Entities",
		},
	],

	relatedStandards: [
		{
			slug: "nas-19",
			nfrsNumber: "NAS 19",
			title: "Employee Benefits",
			reason: "NAS 19 covers employer accounting for employee benefits; NAS 26 covers plan-level reporting. Same plan appears in two different sets of financial statements under different standards",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "Plan financial statements must comply with general NAS 1 presentation requirements including fair presentation, going concern, and complete disclosure",
		},
		{
			slug: "nfrs-13",
			nfrsNumber: "NFRS 13",
			title: "Fair Value Measurement",
			reason: "Plan investments measured at fair value under NAS 26 must apply NFRS 13's fair value hierarchy and measurement guidance",
		},
		{
			slug: "nas-24",
			nfrsNumber: "NAS 24",
			title: "Related Party Disclosures",
			reason: "Plan transactions with the sponsoring employer, fund trustees, and investment managers are related party transactions requiring NAS 24 disclosure",
		},
	],
};
