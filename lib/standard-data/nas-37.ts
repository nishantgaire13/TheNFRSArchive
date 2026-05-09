import type { StandardPageData } from "./types";

export const nas37: StandardPageData = {
	slug: "nas-37",
	nfrsNumber: "NAS 37",
	ifrsEquivalent: "IAS 37",
	title: "Provisions, Contingent Liabilities and Contingent Assets",
	topic: "liabilities",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1999-07-01",
	status: "aligned",
	heroMotif: "balance",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA FR","ACCA SBR","ACCA AA","ACCA TX","ACCA SBL","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Loan Loss Provisions vs NAS 37",
				ifrs: "Financial instrument impairment governed by IFRS 9 ECL model, not IAS 37",
				nfrs: "Same distinction, but NRB Unified Directives still prescribe separate BFI loan classification and provisioning norms alongside NFRS 9. BFIs must apply the higher of NRB provision and NFRS 9 ECL",
				nepalImpact: "BFIs maintain dual provisioning — NRB prescriptive rates and NFRS 9 ECL. NAS 37 remains relevant for non-financial obligations (legal claims, guarantees)",
				significance: "high",
			},
			{
				topic: "Tax Dispute Provisions",
				ifrs: "Provisions for tax disputes follow IAS 37 probability assessment (>50%). IFRIC 23 addresses uncertain tax positions",
				nfrs: "Same framework. Nepal's slow judicial process means tax disputes with IRD remain pending for years. Estimating probable outflow is extremely difficult when appeals to Revenue Tribunal take 5-10 years",
				nepalImpact: "Entities frequently under-provide for IRD disputes or treat them as contingent liabilities (disclosed only) when probability exceeds 50%. Material tax exposures remain off-balance-sheet",
				significance: "high",
			},
			{
				topic: "Decommissioning Obligations",
				ifrs: "Decommissioning and restoration provisions recognised at present value, with corresponding asset increase (IFRIC 1)",
				nfrs: "Same treatment. Hydropower licenses in Nepal require site restoration after license expiry (typically 25-35 years). Few hydropower companies have recognised adequate decommissioning provisions",
				nepalImpact: "Hydropower decommissioning provisions involve 25+ year estimates, significant discount rate sensitivity, and uncertain restoration technology costs. Under-provisioning is widespread",
				significance: "high",
			},
			{
				topic: "Onerous Contracts",
				ifrs: "Provision for onerous contracts where unavoidable costs exceed expected benefits. IFRS Interpretations Committee clarified 'costs of fulfilling' include directly attributable costs (2022 amendment to IAS 37)",
				nfrs: "Same treatment adopted. Relevant for entities locked into unfavourable long-term contracts — power purchase agreements, lease arrangements, supply contracts",
				nepalImpact: "Hydropower companies with below-market PPA rates and hotels with fixed lease obligations during downturns face onerous contract assessment. Cost definition includes allocation of directly attributable overheads",
				significance: "medium",
			},
			{
				topic: "Constructive Obligations",
				ifrs: "Constructive obligation arises from established pattern of past practice, published policies, or specific statements creating valid expectations (IAS 37.10)",
				nfrs: "Same concept but particularly relevant in Nepal where informal commitments to communities, employees, and stakeholders create constructive obligations despite absence of legal requirements",
				nepalImpact: "Hydropower companies making informal commitments to local communities for compensation, employment, or infrastructure create constructive obligations. Labour union agreements may create obligations beyond statutory requirements",
				significance: "medium",
			},
			{
				topic: "Restructuring Provisions",
				ifrs: "Recognised only when entity has detailed formal plan and raised valid expectation by announcing or starting implementation (IAS 37.72)",
				nfrs: "Same criteria. NRB-directed BFI mergers create restructuring provisions for branch closures, staff redundancies, and system integration costs",
				nepalImpact: "NRB's merger directives forced many BFIs to restructure. Provisions for staff redundancy, branch rationalisation, and IT system consolidation required careful timing — only when formal plan exists and valid expectation raised",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives prescribe minimum loan loss provisions for BFIs by loan classification (Pass 1%, Watch-list 5%, Substandard 25%, Doubtful 50%, Loss 100%). BFIs must apply the higher of NRB provision and NFRS 9 ECL. Non-loan provisions (legal claims, operational risk events) follow NAS 37. NRB requires BFIs to disclose all provisions exceeding NPR 1 crore individually.",
		sebon: "SEBON requires listed entities to disclose all material provisions and contingent liabilities in quarterly and annual filings. Provisions for litigation, tax disputes, and warranty claims must be disclosed individually if material. SEBON has authority to require additional provisioning where it considers existing provisions inadequate.",
		ird: "Tax provisions are a major application area. IRD assessments often differ from self-assessed returns, creating tax dispute provisions. Tax provisions are not deductible until actually paid — creating deductible temporary differences under NAS 12. Penalty and interest on tax disputes are provided at IRD-prescribed rates (15% p.a. interest, up to 100% penalty).",
	},

	timeline: [
		{ date: "Jul 1999", label: "IAS 37 Effective", description: "Original standard on provisions and contingencies" },
		{ date: "Jan 2022", label: "Onerous Contract Amendment", description: "Clarified costs of fulfilling a contract include directly attributable costs" },
		{ date: "Jul 2018", label: "NAS 37 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Obligation",
			coreQuestion: "Does the entity have a present obligation (legal or constructive) from a past event?",
			nepalExample: "Himal Cement discovers soil contamination at its Hetauda factory site from years of clinker dust settling. Environmental regulations require remediation. Past event = years of contamination. Present obligation = legal requirement to remediate. Constructive obligation also exists from published environmental policy.",
			paraRef: "IAS 37.14(a)",
		},
		{
			number: 2,
			name: "Assess Probability of Outflow",
			coreQuestion: "Is it probable (>50%) that an outflow of economic benefits will be required?",
			nepalExample: "Surya Nepal faces a product liability claim of NPR 5 crore. Legal counsel advises 60% probability of losing. Since >50%, this is probable — recognise a provision. If probability were only 30%, it would be a contingent liability (disclosed in notes only).",
			paraRef: "IAS 37.14(b)",
		},
		{
			number: 3,
			name: "Estimate the Amount",
			coreQuestion: "Can a reliable estimate be made of the obligation?",
			nepalExample: "Surya Nepal's lawyers estimate the likely settlement at NPR 3-4 crore. Best estimate = NPR 3.5 crore (midpoint for single obligation). For warranty provisions on 10,000 cigarette cartons, expected value method: 2% defect rate × NPR 500 replacement cost × 10,000 = NPR 1,00,000.",
			paraRef: "IAS 37.36–40",
		},
		{
			number: 4,
			name: "Discount if Material",
			coreQuestion: "Is the time value of money material to the provision?",
			nepalExample: "Koshi Hydropower recognises a decommissioning provision for dam removal in 30 years, estimated at NPR 50 crore in future terms. Discount rate: 8% (pre-tax rate reflecting current market risk). Present value = NPR 50 crore ÷ (1.08)^30 = NPR 4.97 crore. The discount unwinds annually as a finance cost.",
			paraRef: "IAS 37.45–47",
		},
		{
			number: 5,
			name: "Review and Adjust Each Period",
			coreQuestion: "Has the provision been updated for current best estimates?",
			nepalExample: "Everest Finance reviewed its litigation provision at Ashad-end 2082. The NPR 2 crore tax dispute provision was increased to NPR 3 crore because IRD issued an additional assessment. The NPR 50 lakh customer claim provision was reversed because the court dismissed the case in Jestha 2082.",
			paraRef: "IAS 37.59–60",
		},
	],

	inlineExamples: {
		litigation: {
			title: "Surya Nepal — Litigation Provision with Multiple Outcomes",
			context: "Surya Nepal Ltd faces a labour dispute where 200 former employees claim wrongful termination. They seek NPR 8 crore in compensation. Legal counsel assesses three possible outcomes: (1) full liability NPR 8 crore — 20% probability, (2) settlement at NPR 4 crore — 55% probability, (3) case dismissed — 25% probability. The case is expected to be resolved within 2 years.",
			steps: [
				"Step 1 — Present obligation exists: past event (terminations occurred), legal obligation (Labour Act 2074 claims).",
				"Step 2 — Probability: combined probability of some outflow = 75% (20% + 55%). Since >50%, recognise provision.",
				"Step 3 — Best estimate: for single obligation, most likely outcome = NPR 4 crore (55% probability). However, also consider expected value: (NPR 8 cr × 20%) + (NPR 4 cr × 55%) + (0 × 25%) = NPR 3.8 crore. Management uses NPR 4 crore as best estimate (most likely outcome for single claim).",
				"Step 4 — Discount: 2-year expected resolution. At 8% discount rate: NPR 4 crore ÷ (1.08)^1 = NPR 3.70 crore (approximate, using midpoint timing). Time value impact is NPR 30 lakh — material, so provision is discounted.",
				"Step 5 — Disclosure: nature of dispute, provision amount, expected timing, major assumptions. Disclose NPR 4 crore additional possible exposure (if full NPR 8 cr outcome occurs vs. the NPR 4 cr provided).",
			],
			journalEntries: [
				"Provision: Dr Legal Expense (P&L) NPR 3,70,00,000 / Cr Provision for Litigation NPR 3,70,00,000",
				"Year 2 unwinding: Dr Finance Cost NPR 29,60,000 / Cr Provision for Litigation NPR 29,60,000",
				"If case settled at NPR 4 crore: Dr Provision NPR 3,99,60,000 / Dr Legal Expense (shortfall) NPR 40,000 / Cr Cash NPR 4,00,00,000",
			],
			difficulty: "medium",
		},
		decommissioning: {
			title: "Koshi Hydropower — Decommissioning Provision",
			context: "Koshi Hydropower Ltd has a 25 MW run-of-river plant with a 35-year license from NEA. The license requires restoration of the river site upon license expiry. Estimated decommissioning cost in 35 years: NPR 80 crore (in future terms). Pre-tax discount rate: 9%. Current year is year 1 of operation. The decommissioning cost estimate is also subject to annual revision.",
			steps: [
				"Step 1 — Obligation exists: license condition creates legal obligation for site restoration. Obligating event = construction of the dam and powerhouse.",
				"Step 2 — Present value: NPR 80 crore ÷ (1.09)^35 = NPR 3.89 crore. This is the initial provision.",
				"Step 3 — Corresponding asset: Dr PPE (Decommissioning component) NPR 3.89 crore. This component is depreciated over 35 years = NPR 11.11 lakh/year.",
				"Step 4 — Annual discount unwinding: Year 1 finance cost = NPR 3.89 crore × 9% = NPR 35.01 lakh. Provision grows to NPR 4.24 crore at year-end 1.",
				"Step 5 — If estimate changes in year 5 to NPR 100 crore: recalculate present value for remaining 30 years. Adjustment goes to the PPE asset (IFRIC 1), not P&L. Revised provision changes depreciation prospectively.",
			],
			journalEntries: [
				"Initial recognition: Dr PPE — Decommissioning Component NPR 3,89,00,000 / Cr Provision for Decommissioning NPR 3,89,00,000",
				"Annual depreciation: Dr Depreciation NPR 11,11,429 / Cr Accumulated Depreciation — Decommissioning NPR 11,11,429",
				"Unwinding of discount (year 1): Dr Finance Cost NPR 35,01,000 / Cr Provision for Decommissioning NPR 35,01,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Three conditions for provision recognition must ALL be met: present obligation from past event, probable outflow, reliable estimate. If any one fails — do NOT recognise. Most common exam error: recognising a provision when outflow is only 'possible' (should be contingent liability)." },
			{ source: "Dec 2024 Examiner Report", tip: "Distinguish legal from constructive obligations. A published environmental policy creates a constructive obligation even without legal requirement. Past practice of compensating customers beyond warranty terms creates constructive obligation for future claims." },
			{ source: "Exam Technique", tip: "For best estimate of single obligation, use most likely outcome. For large population of items (warranties, returns), use expected value (probability-weighted). Many candidates use the wrong method." },
			{ source: "Recurring Pattern", tip: "Discounting is required when time value of money is material. The discount unwinds each year as a finance cost (not operating expense). This is commonly tested in decommissioning scenarios — candidates who forget discount unwinding lose marks." },
			{ source: "Nepal-specific", tip: "BFI loan loss provisions follow NFRS 9, NOT NAS 37. But non-financial provisions (litigation, tax disputes, operational losses) at banks still follow NAS 37. The interaction creates a split-regime within a single entity." },
			{ source: "Exam Technique", tip: "Contingent liabilities are disclosed, not recognised. Contingent assets are disclosed only when inflow is probable — if virtually certain, recognise as asset. Future operating losses are never provisioned — they indicate possible impairment testing under NAS 36." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Tax dispute provisions treated as contingent liabilities when probability exceeds 50%",
			description: "Entities disclose IRD tax assessments as contingent liabilities (notes only) when the probability of outflow clearly exceeds 50%. Nepal's slow legal system does not reduce probability — it only extends the expected settlement timeline. If legal counsel assesses >50% probability of losing, a provision must be recognised regardless of appeal timelines.",
			sector: "Listed Companies",
		},
		{
			title: "Decommissioning provisions not recognised for hydropower plants",
			description: "Hydropower companies ignore or significantly understate decommissioning provisions despite license conditions requiring site restoration. The long time horizon (25-35 years) results in small present values that entities consider immaterial, but failure to recognise also means the corresponding PPE component is understated.",
			sector: "Hydropower",
		},
		{
			title: "General provisions created for unspecified risks",
			description: "Entities create 'general provisions' or 'contingency reserves' without identifying specific obligations. NAS 37 requires a provision to be linked to a specific present obligation — general reserves against unspecified future risks are not provisions and should not appear as liabilities.",
			sector: "Manufacturing",
		},
		{
			title: "Restructuring provisions recognised before detailed formal plan exists",
			description: "During NRB-directed mergers, BFIs recognise restructuring provisions when merger is announced but before a detailed plan with specific actions, affected employees, and timeline is established. NAS 37 requires a detailed formal plan AND valid expectation raised in affected parties before recognition.",
			sector: "Banking",
		},
		{
			title: "Warranty provisions based on arbitrary percentages rather than historical data",
			description: "Manufacturers apply arbitrary warranty provision rates (e.g., 2% of revenue) without analysis of actual warranty claim history. NAS 37 requires the expected value method based on historical defect rates, average repair costs, and warranty period remaining. Without data analysis, provisions may be materially misstated.",
			sector: "Manufacturing",
		},
	],

	relatedStandards: [
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Provisions not tax-deductible until paid create deductible temporary differences requiring deferred tax asset recognition under NAS 12",
		},
		{
			slug: "nas-10",
			nfrsNumber: "NAS 10",
			title: "Events After the Reporting Period",
			reason: "Post-reporting events may provide evidence about provisions existing at the reporting date (adjusting events) or create new contingencies (non-adjusting)",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Financial instrument impairment (ECL) is governed by NFRS 9, not NAS 37. Financial guarantee contracts may fall under either standard depending on classification",
		},
		{
			slug: "nas-19",
			nfrsNumber: "NAS 19",
			title: "Employee Benefits",
			reason: "Employee benefit obligations (gratuity, leave encashment) are governed by NAS 19, not NAS 37, though both create non-current provisions on the balance sheet",
		},
	],
};
