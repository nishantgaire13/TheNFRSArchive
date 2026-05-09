import type { StandardPageData } from "./types";

export const nas8: StandardPageData = {
	slug: "nas-8",
	nfrsNumber: "NAS 8",
	ifrsEquivalent: "IAS 8",
	title: "Accounting Policies, Changes in Accounting Estimates and Errors",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "compass",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Hierarchy for Selecting Accounting Policies",
				ifrs: "When no IFRS specifically applies, management uses judgement applying the hierarchy: similar IFRS, Conceptual Framework, then other standard-setters' pronouncements (IAS 8.10–12)",
				nfrs: "Same hierarchy adopted. In practice, Nepali entities often default to Indian Accounting Standards (Ind AS) or previous Nepal GAAP practices when no specific NAS/NFRS guidance exists",
				nepalImpact: "During NFRS transition, many entities relied on Ind AS interpretations due to familiarity and availability of Hindi/English guidance material. This created inconsistency where some entities followed Ind AS carve-outs that Nepal did not adopt",
				significance: "high",
			},
			{
				topic: "Retrospective Application of Policy Changes",
				ifrs: "Voluntary changes in accounting policy must be applied retrospectively, restating comparatives as if the new policy had always been applied (IAS 8.19–22)",
				nfrs: "Same requirement. Practical challenge in Nepal: many entities lack historical data to perform retrospective restatement, particularly for pre-NFRS periods. Impracticability exemption is frequently invoked",
				nepalImpact: "During NFRS first-time adoption, entities transitioning from Nepal GAAP often could not obtain historical fair values or actuarial data. The impracticability exemption in NAS 8.23–27 was widely used but not always properly justified",
				significance: "high",
			},
			{
				topic: "Prospective Application of Estimate Changes",
				ifrs: "Changes in accounting estimates are applied prospectively — affecting current and future periods only (IAS 8.36–40)",
				nfrs: "Same treatment. Common estimate changes in Nepal include: revised useful lives of assets after earthquake damage assessment, updated ECL models for BFIs, and revised actuarial assumptions for gratuity obligations",
				nepalImpact: "BFIs frequently revise ECL model parameters (PD, LGD, EAD) as NRB updates guidelines. Each revision is a change in estimate applied prospectively, but some entities incorrectly restate prior period provisions",
				significance: "medium",
			},
			{
				topic: "Correction of Prior Period Errors",
				ifrs: "Material prior period errors must be corrected retrospectively by restating comparatives or, if the error predates the earliest comparative period, restating opening balances (IAS 8.42–49)",
				nfrs: "Same requirement. Nepal-specific challenge: NFRS transition itself revealed numerous errors in Nepal GAAP financial statements — incorrect asset valuations, unrecognised liabilities, and missing disclosures. Distinguishing transition adjustments from prior period errors was contentious",
				nepalImpact: "SEBON and auditors have required listed entities to restate prior periods when material errors are discovered. Some high-profile restatements in Nepali banks involved loan classification errors and incorrect interest accrual on non-performing assets",
				significance: "high",
			},
			{
				topic: "Distinguishing Policy Changes from Estimate Changes",
				ifrs: "If it is difficult to distinguish a change in policy from a change in estimate, the change is treated as a change in estimate (IAS 8.35)",
				nfrs: "Same default. In Nepal, common grey areas include: changing from straight-line to reducing balance depreciation (policy or estimate?), revising the ECL methodology framework (policy) versus updating PD/LGD inputs (estimate)",
				nepalImpact: "Entities may deliberately misclassify policy changes as estimate changes to avoid retrospective restatement. Auditors must exercise professional judgement to distinguish between the two, particularly for BFIs changing ECL approaches",
				significance: "medium",
			},
			{
				topic: "Disclosure Requirements for Changes and Errors",
				ifrs: "Extensive disclosures required: nature of change, reasons, impact on each financial statement line item, and EPS impact if applicable (IAS 8.28–31, 49)",
				nfrs: "Same disclosure requirements. Compliance is weak in Nepal — many entities provide only a generic note about a change without quantifying the impact on individual line items or disclosing the reason for the change",
				nepalImpact: "SEBON has issued directives requiring enhanced disclosure when entities restate. Some entities disclose policy changes only in the accounting policy note without showing the quantified impact on each affected line item as required",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives may effectively mandate accounting policy changes for BFIs — for example, when NRB revised loan classification norms or mandated ECL adoption timelines. When NRB directives change the measurement basis, BFIs must assess whether this constitutes a voluntary or involuntary change in accounting policy. NRB requires prior approval for significant accounting policy changes by BFIs and may direct specific transition approaches that override NAS 8 default treatment.",
		sebon: "SEBON requires listed entities to disclose all changes in accounting policies prominently in the annual report and to quantify the impact on reported profit and equity. When prior period errors result in restatement, SEBON may require the entity to issue a public clarification through NEPSE. Repeated restatements may trigger enhanced regulatory scrutiny and potential delisting review.",
		ird: "IRD treats accounting policy changes differently from NFRS: changes that reduce taxable income in the current year (e.g., adopting a more accelerated depreciation method) may not be accepted for tax purposes unless permitted by Schedule 2 of the Income Tax Act 2058. Prior period error corrections that affect taxable income of prior years may require amended tax returns and could attract penalties under Section 117.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 8 (Revised) Effective", description: "IAS 8 revised in 2003 became effective, replacing the earlier version" },
		{ date: "Jul 2018", label: "NAS 8 Effective", description: "NAS 8 adopted as part of full NFRS suite (1 Shrawan 2075 BS)" },
		{ date: "2019–2021", label: "NFRS Transition Errors", description: "Numerous prior period errors identified as entities completed their first full NFRS reporting cycles", highlight: true },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 8, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Nature of the Change",
			coreQuestion: "Is this a change in accounting policy, a change in estimate, or a correction of an error?",
			nepalExample: "Himalayan Bank switches its depreciation method for ATM machines from straight-line to reducing balance. This changes both the measurement basis (policy) and the pattern of consumption (estimate). Since it is difficult to distinguish, NAS 8.35 treats it as a change in estimate — applied prospectively.",
			paraRef: "IAS 8.5, 8.32–35",
		},
		{
			number: 2,
			name: "Determine if a Policy Change is Voluntary or Required",
			coreQuestion: "Is the change mandated by a new/revised standard, or is it voluntary?",
			nepalExample: "NRB mandates BFIs to adopt NFRS 9 ECL model replacing the incurred-loss model. This is a change required by a new standard — transitional provisions of NFRS 9 apply, not the general NAS 8 retrospective approach. Pashupati Cement voluntarily changes its inventory costing from weighted average to FIFO — this is a voluntary change requiring retrospective application.",
			paraRef: "IAS 8.14–15",
		},
		{
			number: 3,
			name: "Apply Retrospective or Prospective Treatment",
			coreQuestion: "Must the entity restate comparatives or apply the change only going forward?",
			nepalExample: "Surya Nepal voluntarily changes revenue recognition policy for long-term contracts: restates Ashad 2081 comparatives and presents a third balance sheet as at Shrawan 1, 2081. Retained earnings is adjusted for the cumulative effect. Separately, Nepal Telecom revises the estimated useful life of fibre-optic cables from 20 years to 15 years — applied prospectively from Shrawan 1, 2082 onwards.",
			paraRef: "IAS 8.19–22, 8.36–38",
		},
		{
			number: 4,
			name: "Correct Prior Period Errors",
			coreQuestion: "Was there an omission or misstatement in prior periods that is now discovered?",
			nepalExample: "Nabil Bank discovers that interest income of NPR 4,50 lakh on a restructured loan was accrued in Ashad 2081 when the loan was actually non-performing under NRB norms. This is a prior period error — Nabil restates the Ashad 2081 comparative by reducing interest income and increasing the loan loss provision. Opening retained earnings of the comparative period is adjusted.",
			paraRef: "IAS 8.42–49",
		},
		{
			number: 5,
			name: "Disclose the Change or Correction",
			coreQuestion: "Has the entity fully disclosed the nature, reason, and impact of the change or error correction?",
			nepalExample: "Sagarmatha Hotels discloses in notes: 'The company changed its depreciation method for hotel buildings from straight-line to component depreciation (NAS 16). Prior year comparatives have been restated. Effect: Ashad 2081 depreciation increased by NPR 85 lakh, profit decreased by NPR 59.5 lakh (net of tax at 30%), and retained earnings as at Shrawan 1, 2081 decreased by NPR 2,10 lakh.'",
			paraRef: "IAS 8.28–31, 8.49",
		},
	],

	inlineExamples: {
		retrospectiveChange: {
			title: "Surya Nepal — Voluntary Policy Change (Inventory Costing)",
			context: "Surya Nepal Pvt Ltd voluntarily changes its inventory costing method from weighted average to FIFO effective Shrawan 1, 2082. Management believes FIFO better reflects the physical flow of raw tobacco and packaging materials. Inventory at Ashad 2081 under weighted average was NPR 32 crore; under FIFO it would have been NPR 34,50 lakh higher. Inventory at Shrawan 1, 2081 under FIFO would have been NPR 28 lakh higher than weighted average. Tax rate is 25%.",
			steps: [
				"Step 1 — Confirm voluntary change: No new NFRS requires FIFO. Management must demonstrate FIFO provides reliable and more relevant information (NAS 8.14).",
				"Step 2 — Apply retrospectively: Restate Ashad 2081 inventory from NPR 32,00,00,000 to NPR 32,34,50,000 (increase of NPR 34,50,000). Cost of goods sold for 2081 decreases by the change in inventory difference: NPR 34,50,000 − NPR 28,00,000 = NPR 6,50,000.",
				"Step 3 — Tax effect: Profit increase for 2081 = NPR 6,50,000. Tax at 25% = NPR 1,62,500. Net impact on 2081 profit = NPR 4,87,500.",
				"Step 4 — Opening retained earnings adjustment at Shrawan 1, 2081: Increase by NPR 28,00,000 × (1 − 25%) = NPR 21,00,000.",
				"Step 5 — Present third balance sheet as at Shrawan 1, 2081 showing the adjusted opening balances. Disclose the nature, reason, and line-item impact in notes.",
			],
			journalEntries: [
				"Restatement of Shrawan 1, 2081 opening balances: Dr Inventory NPR 28,00,000 / Cr Retained Earnings NPR 21,00,000 / Cr Deferred Tax Liability NPR 7,00,000",
				"Restatement of Ashad 2081 comparative: Dr Inventory NPR 6,50,000 / Cr Cost of Goods Sold NPR 6,50,000 (in restated 2081 P&L)",
				"Tax on 2081 restatement: Dr Income Tax Expense NPR 1,62,500 / Cr Deferred Tax Liability NPR 1,62,500 (in restated 2081 P&L)",
			],
			difficulty: "medium",
		},
		errorCorrection: {
			title: "Nabil Bank — Prior Period Error Correction (Interest Accrual)",
			context: "During the Ashad 2082 audit, Nabil Bank discovers that NPR 1,85 lakh of interest income was incorrectly accrued on a loan account that had been classified as non-performing (substandard) under NRB directives since Poush 2081. Under NRB norms, interest on non-performing loans must be suspended — recognised only on cash receipt. The interest was never received. This constitutes a prior period error in the Ashad 2081 financial statements. Tax rate: 30%.",
			steps: [
				"Step 1 — Identify the error: Interest of NPR 1,85,00,000 was accrued in the Ashad 2081 P&L on a loan that should have been classified as substandard. NRB norms prohibit accrual of interest on substandard/doubtful/loss loans.",
				"Step 2 — Assess materiality: NPR 1.85 crore against Nabil's total interest income of approximately NPR 800 crore — individually not material by quantum, but NRB compliance errors are qualitatively material. Management decides to restate.",
				"Step 3 — Restate Ashad 2081 comparatives: Reduce interest income by NPR 1,85,00,000. Reduce accrued interest receivable by NPR 1,85,00,000. Increase interest suspense account by NPR 1,85,00,000.",
				"Step 4 — Tax effect: Profit decrease NPR 1,85,00,000 × 30% = NPR 55,50,000 tax reduction. Adjust deferred/current tax in comparatives accordingly.",
				"Step 5 — Disclose in notes: Nature of error (accrual of interest on non-performing loan contrary to NRB norms), the amount of correction for each affected line item, and the effect on EPS if applicable.",
			],
			journalEntries: [
				"Restatement entry (in Ashad 2081 comparatives): Dr Retained Earnings NPR 1,29,50,000 / Dr Deferred Tax Asset NPR 55,50,000 / Cr Accrued Interest Receivable NPR 1,85,00,000",
				"Alternatively (showing P&L effect in restated 2081): Dr Interest Income NPR 1,85,00,000 / Cr Accrued Interest Receivable NPR 1,85,00,000 and Dr Deferred Tax Asset NPR 55,50,000 / Cr Tax Expense NPR 55,50,000",
				"In current year (Ashad 2082), no entry needed unless the interest is subsequently received in cash — then: Dr Bank / Cr Interest Income (recognised on cash basis for non-performing loans).",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The most common exam task is to distinguish between a change in accounting policy (retrospective) and a change in accounting estimate (prospective). Key test: does the change alter how something is measured (policy) or update inputs to an existing measurement basis (estimate)?" },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates frequently forget to adjust the tax effect when applying retrospective restatement. Every prior period adjustment to profit must have a corresponding deferred tax adjustment at the applicable tax rate." },
			{ source: "Exam Technique", tip: "When a question involves both a policy change and an error correction, handle them separately. Restate the error first, then apply the policy change to the corrected figures. Show your workings in the order: error correction → policy change → final restated figures." },
			{ source: "Recurring Pattern", tip: "The third balance sheet requirement is frequently tested. Whenever a question involves retrospective restatement (whether policy change or error correction), you must present three balance sheets: current year-end, restated prior year-end, and restated opening of the earliest comparative period." },
			{ source: "Nepal-specific", tip: "NFRS transition created a wave of first-time adjustments that blur the line between transition adjustments (NFRS 1) and prior period errors (NAS 8). In exams, if the question specifies first-time adoption, apply NFRS 1 exemptions. If the question is about a post-transition discovery, apply NAS 8 error correction." },
			{ source: "Exam Technique", tip: "Impracticability exemption: if retrospective application is impracticable, apply the change prospectively from the earliest date practicable. In the exam, state this explicitly — do not simply skip the retrospective restatement without invoking the exemption." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Voluntary policy changes applied prospectively instead of retrospectively",
			description: "Entities change accounting policies voluntarily (e.g., switching depreciation methods for a class of assets) but apply the change prospectively to avoid the effort of restating comparatives. NAS 8 requires retrospective application for voluntary policy changes unless impracticable. Simply stating it is 'too difficult' without documenting specific impracticability is non-compliant.",
			sector: "Manufacturing",
		},
		{
			title: "NFRS transition adjustments misclassified as prior period errors",
			description: "During the transition from Nepal GAAP to NFRS, many adjustments were required (fair valuation, derecognition, reclassification). Some entities treated these as prior period errors under NAS 8 rather than applying NFRS 1 first-time adoption provisions. This led to incorrect restatement of pre-transition periods that should have been left under Nepal GAAP.",
			sector: "Banking",
		},
		{
			title: "ECL model parameter updates treated as policy changes",
			description: "BFIs updating probability of default (PD), loss given default (LGD), or exposure at default (EAD) parameters within their existing ECL framework sometimes treat these as policy changes requiring retrospective application. Updating inputs within the same methodology is a change in estimate (prospective). Only changing the fundamental ECL approach (e.g., moving from a simplified to a general model) is a policy change.",
			sector: "Banking",
		},
		{
			title: "Disclosure of error corrections omitted or inadequate",
			description: "Entities correct prior period errors by adjusting retained earnings but fail to disclose the nature and amount of the correction as required by NAS 8.49. Some entities bury the correction in a general retained earnings movement note without separately identifying it as a prior period error correction.",
			sector: "Listed Companies",
		},
		{
			title: "Change in useful life disclosed as a policy change",
			description: "Revising the useful life or residual value of property, plant, and equipment is a change in accounting estimate, not a policy change. Some entities disclose it as a policy change and attempt retrospective application, leading to incorrect restatement of prior period depreciation charges.",
			sector: "Hydropower",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 8 retrospective restatement triggers the third balance sheet requirement under NAS 1.10(f)",
		},
		{
			slug: "nas-10",
			nfrsNumber: "NAS 10",
			title: "Events After the Reporting Period",
			reason: "Discovery of a prior period error after the reporting date but before authorisation is an adjusting event under NAS 10",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Changes in depreciation method or useful life estimates for PPE are common NAS 8 applications",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Retrospective restatement of prior period errors and policy changes creates deferred tax adjustments accounted for under NAS 12",
		},
	],
};
