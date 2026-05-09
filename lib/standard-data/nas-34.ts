import type { StandardPageData } from "./types";

export const nas34: StandardPageData = {
	slug: "nas-34",
	nfrsNumber: "NAS 34",
	ifrsEquivalent: "IAS 34",
	title: "Interim Financial Reporting",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1999-01-01",
	status: "aligned",
	heroMotif: "clock",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Condensed vs Complete Interim Statements",
				ifrs: "IAS 34.8–10 permits entities to publish either condensed or complete financial statements for interim periods. Condensed statements include, at minimum, each heading from the most recent annual FS plus selected explanatory notes",
				nfrs: "Same option available. In practice, NRB prescribes a condensed format template for BFIs' quarterly reports that includes specific line items mandated by NRB Unified Directives. SEBON also accepts condensed statements for quarterly filings by listed entities",
				nepalImpact: "Most Nepali entities publish condensed interim FS because complete FS require significant preparation effort. NRB's quarterly template for BFIs is a standardised condensed format — entities cannot deviate from it without NRB approval",
				significance: "medium",
			},
			{
				topic: "Same Accounting Policies as Annual",
				ifrs: "IAS 34.28 requires interim financial statements to apply the same accounting policies as the annual financial statements. If a policy change occurs during the year, all interim periods are restated retrospectively",
				nfrs: "Same requirement. Nepali entities must use the same recognition, measurement, and classification policies in Q1–Q3 interim reports as they will apply in the annual Ashad year-end FS. This creates challenges when NFRS amendments take effect mid-year (e.g., 1 Shrawan)",
				nepalImpact: "Nepal's fiscal year runs Shrawan–Ashad (mid-July to mid-July). New NFRS standards effective from 1 Shrawan apply from Q1 of the new fiscal year. Entities must ensure interim reports from Q1 onwards already reflect the new policies, including restating Q1 if the change is identified late",
				significance: "high",
			},
			{
				topic: "Interim Tax Expense — Discrete vs Integral Approach",
				ifrs: "IAS 34.B12–B22 requires the integral approach: interim tax expense is based on the estimated average annual effective tax rate applied to interim pre-tax income. The rate should reflect expected annual tax credits, graduated rates, and deferred tax changes",
				nfrs: "Same integral approach required. In Nepal, the standard corporate tax rate is 25% (30% for BFIs, telecom, and cigarette manufacturers). Entities must estimate the full-year effective rate including permanent differences such as non-deductible expenses under Income Tax Act 2058",
				nepalImpact: "Many Nepali entities incorrectly apply the discrete approach — computing tax as 25% or 30% of interim profit without considering full-year estimates. This leads to material restatements when Q4 actuals differ significantly from Q1–Q3 estimates, particularly for entities with seasonal income patterns",
				significance: "high",
			},
			{
				topic: "Seasonal Revenue Recognition",
				ifrs: "IAS 34.37–39 prohibits deferring or accruing revenue at interim dates if it would not be deferred or accrued at year-end. Seasonal revenue is recognised when it occurs — it cannot be spread across interim periods",
				nfrs: "Same prohibition. This is critical in Nepal where tourism revenue concentrates in October–November (Dashain/Tihar season) and March–April (spring season). Agricultural revenue from tea and paddy harvests also clusters in specific quarters",
				nepalImpact: "Hotel and tourism companies like Soaltee Hotel report substantially higher Q2 revenue (Kartik–Poush) compared to monsoon Q1 (Shrawan–Ashoj). Spreading this revenue across quarters to smooth earnings is prohibited. Users must understand seasonality when comparing interim results",
				significance: "high",
			},
			{
				topic: "Interim Period Reporting Frequency",
				ifrs: "IAS 34 does not mandate interim reporting — it only prescribes how to prepare interim FS when an entity is required or elects to publish them (IAS 34.1)",
				nfrs: "NAS 34 similarly does not mandate interim reporting, but NRB Unified Directives require BFIs to publish quarterly financial statements within 30 days of quarter-end. SEBON requires listed entities to publish quarterly unaudited results within 30 days and half-yearly reviewed results within 45 days",
				nepalImpact: "In Nepal, interim reporting is effectively mandatory for all BFIs and listed entities through NRB and SEBON regulations. Non-listed entities are not required to prepare interim FS unless specified by their regulator or articles of association",
				significance: "medium",
			},
			{
				topic: "Materiality for Interim Reporting",
				ifrs: "IAS 34.23 requires materiality assessments for interim reporting to be based on the interim period data, not projected annual figures. What is material in an interim period may not be material at year-end, and vice versa",
				nfrs: "Same approach. Nepali auditors reviewing interim FS must set materiality relative to interim period revenue, profit, and total assets — not annualised figures. This results in lower absolute materiality thresholds for quarterly reports compared to annual audits",
				nepalImpact: "ICAN's auditing guidance for interim reviews follows NAS 34's materiality principle. BFI auditors performing quarterly reviews for NRB must assess materiality at the quarter level, which means smaller misstatements may require adjustment in interim FS than would be tolerated in annual FS",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives require all BFIs to publish quarterly financial statements (unaudited) within 30 days of each quarter-end (Ashoj, Poush, Chaitra, Ashad). Half-yearly FS must be reviewed by auditors and published within 45 days. NRB prescribes a standardised condensed format for quarterly BFI reporting that includes: condensed statement of financial position, condensed income statement, capital adequacy ratios, NPL ratios, and sector-wise credit concentration. Quarterly FS must be published in at least one national daily newspaper and on the BFI's website.",
		sebon: "SEBON requires all listed entities to publish quarterly unaudited financial results within 30 days of quarter-end and half-yearly auditor-reviewed results within 45 days. SEBON monitors compliance with interim reporting deadlines — failure to publish within the prescribed timeframe results in trading suspension. SEBON requires that interim reports include a management discussion and analysis section highlighting material changes from the prior period. Quarterly FS must be submitted to SEBON electronically and published on the entity's website.",
		ird: "IRD requires advance tax payments based on estimated annual income, with instalments due at the end of each quarter (Poush, Chaitra, Ashad). Interim financial results directly inform advance tax calculations — entities base their quarterly advance tax instalments on estimated annual taxable income derived from interim FS. Significant variance between advance tax paid and final tax liability (exceeding 10%) may result in interest charges under the Income Tax Act 2058.",
	},

	timeline: [
		{ date: "Jan 1999", label: "IAS 34 Effective", description: "IAS 34 became effective globally, establishing the framework for interim financial reporting" },
		{ date: "Jul 2014", label: "Nepal GAAP Period", description: "Nepal had no specific interim reporting standard — BFIs followed NRB-prescribed quarterly formats under earlier regulatory directives" },
		{ date: "Jul 2018", label: "NAS 34 Effective", description: "NAS 34 effective as part of full NFRS adoption, formalising interim reporting requirements for all entities (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 34, no carve-outs. NRB and SEBON actively enforce quarterly reporting deadlines", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Determine Reporting Obligation and Format",
			coreQuestion: "Is the entity required to prepare interim FS, and should they be condensed or complete?",
			nepalExample: "Nepal Telecom, as a listed entity on NEPSE, is required by SEBON to publish quarterly results within 30 days. Management elects condensed format: condensed statement of financial position, condensed income statement, condensed cash flow statement, condensed statement of changes in equity, and selected notes. The notes must explain significant events and transactions since the last annual report.",
			paraRef: "IAS 34.8–10",
		},
		{
			number: 2,
			name: "Apply Same Accounting Policies as Annual FS",
			coreQuestion: "Are the recognition, measurement, and classification policies consistent with the most recent annual FS?",
			nepalExample: "Nabil Bank ensures that its Q1 (Shrawan–Ashoj 2082) interim report uses the same loan impairment model (NFRS 9 ECL) and revenue recognition policies (NFRS 15) as its annual Ashad 2082 FS. If a new NFRS amendment becomes effective from 1 Shrawan 2083, the Q1 report of 2083 must reflect the new policy from day one.",
			paraRef: "IAS 34.28–29",
		},
		{
			number: 3,
			name: "Compute Interim Tax Using the Integral Approach",
			coreQuestion: "Has tax expense been calculated using the estimated average annual effective tax rate?",
			nepalExample: "Surya Nepal estimates full-year profit of NPR 200 crore with a statutory rate of 25%. Estimated permanent differences (non-deductible entertainment expenses NPR 2 crore, exempt dividend income NPR 1 crore) yield an estimated annual effective rate of 25.25%. Q1 profit is NPR 40 crore, so Q1 tax = 25.25% x NPR 40 crore = NPR 10.10 crore. The rate is re-estimated each quarter as actuals develop.",
			paraRef: "IAS 34.B12–B22",
		},
		{
			number: 4,
			name: "Recognise Seasonal Revenue Without Smoothing",
			coreQuestion: "Is revenue being recognised when earned, without artificial deferral or accrual to smooth interim results?",
			nepalExample: "Soaltee Hotel earns 55% of annual room revenue during the October–December peak tourist season (Q2: Kartik–Poush). Q1 interim report shows only NPR 8 crore room revenue vs Q2's NPR 22 crore. Management cannot defer Q2 revenue to later quarters or accrue Q1 revenue above actual bookings. Seasonal explanation is provided in interim notes.",
			paraRef: "IAS 34.37–39",
		},
		{
			number: 5,
			name: "Prepare Selected Explanatory Notes",
			coreQuestion: "Do the interim notes explain significant changes, events, and estimates since the last annual FS?",
			nepalExample: "Himalayan Bank's Q2 (Poush 2082) interim notes include: change in NRB-directed provisioning rate from 1.3% to 1.5% for performing loans (event since annual FS), issuance of NPR 5 arba debentures in Kartik (significant financing event), seasonal increase in remittance-driven deposits during Dashain, and reconciliation of advance tax paid to date vs estimated annual tax liability.",
			paraRef: "IAS 34.15–15C",
		},
	],

	inlineExamples: {
		integralTaxApproach: {
			title: "Surya Nepal — Integral Approach to Interim Tax Expense",
			context: "Surya Nepal Pvt Ltd (a cigarette and FMCG manufacturer) reports quarterly to SEBON. For the year ending Ashad 2083, management estimates total annual revenue of NPR 800 crore and profit before tax of NPR 200 crore. The statutory tax rate is 30% (cigarette manufacturers). Estimated permanent differences: non-deductible CSR expenditure NPR 3 crore, tax-exempt income NPR 1 crore. Q1 (Shrawan–Ashoj) actual profit before tax is NPR 42 crore.",
			steps: [
				"Step 1 — Estimate the annual effective tax rate: Estimated taxable income = NPR 200 cr + NPR 3 cr (non-deductible CSR) − NPR 1 cr (exempt income) = NPR 202 cr. Estimated tax = 30% x NPR 202 cr = NPR 60,60,00,000. Effective rate = NPR 60.60 cr / NPR 200 cr = 30.30%.",
				"Step 2 — Apply to Q1 pre-tax profit: Q1 tax expense = 30.30% x NPR 42,00,00,000 = NPR 12,72,60,000 (approximately NPR 12.73 crore).",
				"Step 3 — Q2 (Kartik–Poush) update: Revised full-year profit estimate increases to NPR 220 crore due to stronger Dashain-season sales. Revised effective rate = 30% x (NPR 220 cr + NPR 3 cr − NPR 1 cr) / NPR 220 cr = 30.27%. Cumulative H1 tax = 30.27% x NPR 105 cr (H1 profit) = NPR 31,78,35,000. Q2 tax = NPR 31.78 cr − NPR 12.73 cr = NPR 19.05 crore.",
				"Step 4 — Advance tax payment: IRD requires quarterly advance tax. Q1 payment = NPR 12.73 crore. Any shortfall vs. final assessment (exceeding 10% variance) will attract interest at 15% per annum under Income Tax Act 2058.",
				"Step 5 — Year-end reconciliation: If actual annual effective rate differs from the estimated rate, Q4 tax expense absorbs the cumulative difference. No restatement of prior quarters unless there is an error.",
			],
			journalEntries: [
				"Q1 interim tax: Dr Income Tax Expense NPR 12,72,60,000 / Cr Current Tax Payable NPR 12,72,60,000 — computed using 30.30% estimated annual effective rate applied to Q1 pre-tax profit.",
				"Q1 advance tax payment: Dr Current Tax Payable NPR 12,72,60,000 / Cr Bank NPR 12,72,60,000 — quarterly advance tax remitted to IRD by Poush-end deadline.",
				"Q2 tax adjustment: Dr Income Tax Expense NPR 19,05,75,000 / Cr Current Tax Payable NPR 19,05,75,000 — Q2 charge is the residual after deducting Q1 cumulative tax from the revised cumulative H1 tax.",
			],
			difficulty: "medium",
		},
		seasonalRevenueReporting: {
			title: "Soaltee Hotel — Seasonal Revenue in Interim Reporting",
			context: "Soaltee Hotel Ltd is a listed hotel company in Kathmandu. Its revenue is highly seasonal: 55% of annual room revenue is earned in Q2 (Kartik–Poush, Oct–Dec peak tourist season), 25% in Q3 (Magh–Chaitra, spring season), and only 10% each in Q1 (Shrawan–Ashoj, monsoon) and Q4 (Baisakh–Ashad, pre-monsoon). Annual room revenue is estimated at NPR 40 crore. Fixed costs (staff, property maintenance, depreciation) are NPR 7 crore per quarter.",
			steps: [
				"Step 1 — Q1 revenue recognition: Room revenue earned in Q1 = NPR 4,00,00,000 (10% of annual). Recognise only actual revenue earned — do not accrue or defer. Q1 fixed costs = NPR 7,00,00,000. Q1 operating loss = NPR 3,00,00,000.",
				"Step 2 — Q2 revenue recognition: Room revenue earned in Q2 = NPR 22,00,00,000 (55% of annual). Recognise the full amount in Q2. Q2 fixed costs = NPR 7,00,00,000. Q2 operating profit = NPR 15,00,00,000. Management cannot defer Q2 revenue to Q3/Q4 to smooth results.",
				"Step 3 — Seasonal disclosure: NAS 34.16A(b) requires disclosure of the seasonal nature of operations. Soaltee's Q1 interim notes state: 'The hotel industry in Nepal is highly seasonal. The majority of room revenue is earned during the peak tourist season (October–December). Q1 results are not indicative of full-year performance.'",
				"Step 4 — Fixed cost treatment: Depreciation on hotel building (NPR 3,50,00,000 per quarter) is recognised evenly — it is not deferred to match revenue. Maintenance costs incurred in Q1 (monsoon repairs NPR 1,20,00,000) are expensed as incurred — not spread to Q2 when revenue is higher.",
				"Step 5 — Comparability: Present Q1 results alongside prior year Q1 results (not Q2 or Q4) to enable meaningful comparison. SEBON requires quarter-on-quarter and year-on-year comparative data in interim filings.",
				"Step 6 — Interim tax: Even though Q1 shows a loss, the estimated annual effective tax rate (25%) is applied to cumulative year-to-date results. If cumulative result is a loss, no tax expense is recognised unless a deferred tax asset is recognised for the interim loss.",
			],
			journalEntries: [
				"Q1 room revenue: Dr Trade Receivables / Bank NPR 4,00,00,000 / Cr Room Revenue NPR 4,00,00,000 — actual revenue earned during monsoon quarter, no smoothing.",
				"Q2 room revenue: Dr Trade Receivables / Bank NPR 22,00,00,000 / Cr Room Revenue NPR 22,00,00,000 — peak season revenue recognised in full when earned.",
				"Q1 depreciation: Dr Depreciation Expense NPR 3,50,00,000 / Cr Accumulated Depreciation NPR 3,50,00,000 — hotel building depreciation recognised evenly regardless of seasonal revenue patterns.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The integral approach to interim tax is tested frequently. Remember: calculate the estimated average annual effective tax rate (considering permanent differences, graduated rates, and tax credits) and apply it to interim pre-tax profit. Do NOT simply apply the statutory rate to each quarter's profit independently." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates struggle with seasonal revenue in interim reports. The rule is simple: recognise revenue when earned, even if this produces an interim loss. Revenue cannot be deferred to future quarters or accrued in advance. Costs that benefit the full year (like annual insurance) can be allocated, but revenue cannot be smoothed." },
			{ source: "Exam Technique", tip: "When asked about condensed vs complete interim FS, remember the minimum contents of condensed interim FS: each heading from the most recent annual FS (not every line item), selected explanatory notes explaining significant events since the last annual report, and basic EPS. You do not need to reproduce the full annual FS." },
			{ source: "Recurring Pattern", tip: "Costs that are incurred unevenly during the year receive different treatment depending on their nature. Annual costs that benefit the full year (e.g., annual bonus accrual, property tax) should be allocated across interim periods. Costs incurred irregularly but not benefiting future periods (e.g., major repairs) are expensed when incurred — not deferred." },
			{ source: "Nepal-specific", tip: "NRB and SEBON mandate quarterly reporting for BFIs and listed entities in Nepal with strict 30-day deadlines. In exam questions set in Nepal, interim reporting is mandatory — not voluntary. The Nepal fiscal year (Shrawan–Ashad) means Q1 is Shrawan–Ashoj, Q2 is Kartik–Poush, Q3 is Magh–Chaitra, and Q4 is Baisakh–Ashad." },
			{ source: "Exam Technique", tip: "Same accounting policies must apply to interim FS as annual FS. If a question describes a policy change mid-year, all prior interim periods must be restated retrospectively under NAS 8. A common exam trap is an entity that adopts a new standard from Q3 — the correct treatment is to restate Q1 and Q2 as if the new policy had always applied." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Using the discrete method instead of integral method for interim tax",
			description: "Entities compute each quarter's tax expense by applying the statutory rate (25% or 30%) to that quarter's profit in isolation, ignoring the integral approach required by NAS 34. The correct method estimates the average annual effective tax rate and applies it to cumulative year-to-date profit. The discrete approach causes material quarterly fluctuations and incorrect cumulative tax expense, particularly when permanent differences or tax incentives apply unevenly across quarters.",
			sector: "Listed Companies",
		},
		{
			title: "Smoothing seasonal revenue across interim periods",
			description: "Tourism and agriculture companies artificially spread seasonal revenue across quarters to present more stable interim results. Hotels defer peak-season Q2 revenue to show balanced quarterly performance. NAS 34.37 explicitly prohibits this — revenue must be recognised when earned. Entities must instead disclose the seasonal nature of operations in interim notes so users understand the pattern.",
			sector: "Tourism & Agriculture",
		},
		{
			title: "Changing accounting policies between interim periods without restatement",
			description: "Entities adopt a new measurement approach from Q2 or Q3 without restating earlier interim periods. NAS 34.43 requires the same policies throughout the year and retrospective restatement of prior interim periods if a policy change occurs. This error is common when entities adopt a new NFRS amendment mid-year or change an accounting estimate and incorrectly treat it as a policy change.",
			sector: "Banking",
		},
		{
			title: "Missing SEBON quarterly filing deadlines",
			description: "Listed entities fail to publish quarterly financial results within SEBON's mandatory 30-day window after quarter-end. This results in automatic trading suspension of the entity's shares on NEPSE, reputational damage, and potential penalties. Common causes include delays in subsidiary data collection for group reporting and auditor resource constraints during peak reporting season (Ashoj and Ashad quarter-ends).",
			sector: "Listed Companies",
		},
		{
			title: "Inadequate interim disclosures of significant events",
			description: "Entities publish condensed interim FS with minimal or no explanatory notes, omitting material events since the last annual report. NAS 34.15–15C requires selected notes covering: changes in accounting policies, seasonal factors, unusual items, changes in estimates, issuances/repurchases of equity or debt, dividends, segment information, and events after the interim period. Many Nepali entities treat interim notes as optional, providing only financial tables without narrative context.",
			sector: "Manufacturing",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 1 prescribes the full set of financial statements — NAS 34 allows condensed versions of these for interim reporting while maintaining the same recognition and measurement principles",
		},
		{
			slug: "nas-33",
			nfrsNumber: "NAS 33",
			title: "Earnings Per Share",
			reason: "NAS 34 requires interim FS to present basic and diluted EPS for the interim period. EPS calculations follow NAS 33 methodology applied to interim period earnings",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "The integral approach to interim tax expense requires estimating the annual effective tax rate, which involves NAS 12 concepts including deferred tax, permanent differences, and tax rate changes",
		},
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "If accounting policies change during the year, NAS 8's retrospective application requirements apply to all interim periods — requiring restatement of prior quarterly reports",
		},
	],
};
