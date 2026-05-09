import type { StandardPageData } from "./types";

export const nfrs15: StandardPageData = {
	slug: "nfrs-15",
	nfrsNumber: "NFRS 15",
	ifrsEquivalent: "IFRS 15",
	title: "Revenue from Contracts with Customers",
	topic: "revenue",
	effectiveDate: "2021-07-16",
	ifrsEffectiveDate: "2018-01-01",
	status: "aligned",
	heroMotif: "receipt",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA FR","ACCA SBR","ACCA AA","ACCA TX","ACCA ATX","ACCA FM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Substantially Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Entity Scope",
				ifrs: "Applies globally to all entities preparing IFRS financial statements",
				nfrs: "Applies to Class A and B licensed entities in Nepal; SMEs follow NFRS for SMEs (Section 23)",
				nepalImpact: "Smaller Nepali entities may not apply full NFRS 15, creating a two-tier reporting environment",
				significance: "high",
			},
			{
				topic: "Variable Consideration Constraint",
				ifrs: "'Highly probable' no significant reversal — standard global interpretation",
				nfrs: "Same wording but ASB Nepal interprets conservatively for construction sector per 2021 guidance note",
				nepalImpact: "Construction companies may need to constrain revenue estimates more aggressively than global peers",
				significance: "medium",
			},
			{
				topic: "Licences of IP",
				ifrs: "Detailed right-to-use vs right-to-access guidance with specific application examples",
				nfrs: "Retains same text but ASB has issued no supplementary guidance; rarely applied in Nepal",
				nepalImpact: "Limited practical impact — few Nepali entities have significant IP licensing arrangements",
				significance: "low",
			},
			{
				topic: "Sale-and-Leaseback Cross-reference",
				ifrs: "Cross-refers to IFRS 16 (both effective from 2018/2019)",
				nfrs: "Cross-refers to NFRS 16 but NFRS 16 effective date was later, creating a compliance gap 2019–2021",
				nepalImpact: "During gap period, entities had to apply NFRS 15 sale requirements without corresponding NFRS 16 leaseback rules",
				significance: "medium",
			},
			{
				topic: "Disclosure Disaggregation",
				ifrs: "Extensive disaggregation required by nature, timing, geography, and contract type",
				nfrs: "Same NFRS requirement, but NEPSE-listed entities face additional SEBON disclosure overlay on top",
				nepalImpact: "Listed companies must satisfy both NFRS 15 and SEBON disaggregation — higher compliance burden",
				significance: "high",
			},
			{
				topic: "Effective Date & Transition",
				ifrs: "Mandatory 1 January 2018 with modified retrospective or full retrospective options",
				nfrs: "Nepal adopted ~2020–2021 (1 Shrawan 2078 BS) with both transition methods permitted",
				nepalImpact: "3-year delayed adoption; dual-reporting period created comparability challenges",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "Nepal Rastra Bank (NRB) imposes additional revenue-timing directives for banks and financial institutions. Interest income recognition must comply with both NFRS 15 and NRB Unified Directive Chapter 4. Where NRB directives are more conservative (e.g., requiring suspension of interest recognition on NPAs after 90 days past due), the NRB rule prevails in regulatory returns. Financial statements may show different revenue figures under NFRS 15 vs NRB reporting — entities must reconcile both.",
		sebon: "Securities Board of Nepal (SEBON) requires listed companies to disaggregate revenue beyond NFRS 15 minimums. SEBON's financial reporting directive mandates segment-level revenue disclosure by product line, geography (domestic vs export), and customer concentration (top 5 customers as % of revenue). These additional disclosures are enforced during annual report review and non-compliance can trigger SEBON queries.",
		ird: "Inland Revenue Department (IRD) follows the Income Tax Act 2058 for revenue timing, which diverges from NFRS 15 in key areas: (1) Advance payments received are taxable when received, not when performance obligations are satisfied; (2) Percentage-of-completion contracts may be taxed on a milestone basis per IRD rules rather than the continuous over-time model of NFRS 15; (3) Variable consideration is not constrained for tax — the full invoiced amount is typically the tax base. These gaps create temporary differences requiring deferred tax treatment under NAS 12.",
	},

	timeline: [
		{ date: "Jan 2018", label: "IFRS 15 Effective", description: "Global mandatory adoption" },
		{ date: "2019", label: "Gap Period Begins", description: "Nepal has not yet adopted NFRS 15", highlight: true },
		{ date: "Jul 2021", label: "NFRS 15 Effective", description: "Nepal adoption (1 Shrawan 2078 BS)" },
		{ date: "2026", label: "Current", description: "Fully enforced, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Contract",
			coreQuestion: "Is there an enforceable agreement with a customer?",
			nepalExample: "A Kathmandu IT company signs a software development agreement with a government ministry. The contract is approved by both parties, rights and payment terms are specified, and the project has commercial substance. The five criteria at NFRS 15.9 are met — a valid contract exists.",
			paraRef: "NFRS 15.9",
		},
		{
			number: 2,
			name: "Identify Performance Obligations",
			coreQuestion: "What distinct promises have you made to the customer?",
			nepalExample: "A Nepali telecom company sells a handset bundled with a 2-year service plan. These are two distinct obligations: the handset (customer benefits from it independently) and the connectivity service (separately identifiable). Each gets its own revenue allocation.",
			paraRef: "NFRS 15.22–30",
		},
		{
			number: 3,
			name: "Determine the Transaction Price",
			coreQuestion: "How much consideration do you expect to receive?",
			nepalExample: "A road construction contractor signs a NPR 50 crore government contract with a 5% penalty clause for late delivery and a 3% bonus for early completion. The transaction price must be estimated including variable consideration — constrained to amounts highly probable of not reversing.",
			paraRef: "NFRS 15.47–72",
		},
		{
			number: 4,
			name: "Allocate the Transaction Price",
			coreQuestion: "How do you split the price across multiple obligations?",
			nepalExample: "Himalaya Textiles sells 10,000 uniforms (NPR 2.4 crore) plus design services (NPR 5 lakh) in one contract. Stand-alone selling prices: design NPR 6 lakh, uniforms NPR 2.4 crore. Allocate NPR 2.45 crore proportionally: design gets 6/246 = 2.4%, uniforms get 97.6%.",
			paraRef: "NFRS 15.73–86",
		},
		{
			number: 5,
			name: "Recognise Revenue",
			coreQuestion: "When does control transfer to the customer?",
			nepalExample: "A Nepali construction company building a hydropower access road recognises revenue over time because: the customer controls the work in progress (government land), the asset has no alternative use, and the entity has an enforceable right to payment for work completed to date.",
			paraRef: "NFRS 15.31–45",
		},
	],

	inlineExamples: {
		recognition: {
			title: "Himalaya Textiles — Full 5-Step Walkthrough",
			context: "Himalaya Textiles Pvt Ltd signs a 2-year contract with Nepal Retail Co.: 10,000 uniforms at NPR 2,400/unit (NPR 2,40,00,000) plus a one-time design service (NPR 5,00,000).",
			steps: [
				"Step 1 — Contract: Approved, rights identifiable, payment net-60, commercial substance, collectability probable. ✓",
				"Step 2 — Performance obligations: (a) Design service — distinct (Nepal Retail could use designs with another manufacturer). (b) Uniform supply — distinct (standard goods).",
				"Step 3 — Transaction price: NPR 2,45,00,000 (fixed, no variable consideration).",
				"Step 4 — Allocation: SSP design NPR 6,00,000; SSP uniforms NPR 2,40,00,000. Ratio: design 6/246 ≈ 2.4%. Allocated: design NPR 6,01,626; uniforms NPR 2,38,98,374.",
				"Step 5 — Recognition: Design revenue at delivery (point in time). Uniform revenue per batch delivered and accepted (point in time, per unit).",
			],
			journalEntries: [
				"On design delivery: Dr Receivable NPR 6,01,626 / Cr Revenue – Design NPR 6,01,626",
				"On each uniform batch (e.g., 1,000 units): Dr Receivable NPR 23,89,837 / Cr Revenue – Uniforms NPR 23,89,837",
				"On cash receipt: Dr Cash / Cr Receivable (for amount received)",
			],
			difficulty: "medium",
		},
		construction: {
			title: "Nepal Road Builders — Over-Time Recognition with Variable Consideration",
			context: "Nepal Road Builders Pvt Ltd wins a NPR 50 crore government contract to build a 12km rural road in Province 5. Terms: milestone payments at 25%, 50%, 75%, 100% completion. 5% penalty for delays beyond 18 months, 3% early completion bonus.",
			steps: [
				"Step 1 — Contract: Government tender awarded, PPMO-approved, payment terms clear, enforceable under Public Procurement Act. ✓",
				"Step 2 — Performance obligation: Single obligation — the completed road. Construction activities are highly interdependent; individual segments have no standalone value.",
				"Step 3 — Transaction price: Base NPR 50 crore. Variable: penalty risk estimated at 20% probability (NPR 2.5 crore × 20% = NPR 50 lakh expected deduction). Bonus estimated at 40% probability but constrained — not included (not highly probable). Transaction price: NPR 49,50,00,000.",
				"Step 4 — Allocation: Single obligation — entire transaction price allocated to the road.",
				"Step 5 — Recognition: Over time. Customer controls asset (government land), no alternative use, enforceable right to payment for work completed. Revenue recognised using cost-to-cost input method: costs incurred / total estimated costs × transaction price.",
			],
			journalEntries: [
				"Quarter 1 (costs NPR 8 crore of estimated NPR 40 crore = 20%): Dr Contract Asset NPR 9,90,00,000 / Cr Revenue NPR 9,90,00,000",
				"Quarter 1 costs: Dr COS NPR 8,00,00,000 / Cr Materials/Labour/Subcontractors NPR 8,00,00,000",
				"On milestone 1 invoice (25%): Dr Receivable NPR 12,50,00,000 / Cr Contract Asset NPR 12,50,00,000",
				"If delay penalty becomes probable at Q3: Dr Revenue adjustment / Cr Contract liability (remeasure variable consideration)",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Dec 2025 Examiner Report", tip: "Candidates incorrectly identified performance obligations — many asserted obligations existed without applying the 'distinct' test at IFRS 15.27. Always test: (a) can the customer benefit independently? AND (b) is the promise separately identifiable?" },
			{ source: "Dec 2023 Examiner Report", tip: "When revenue spans two accounting periods, candidates forgot to split correctly. One month of a 12-month contract falling in the current period means 1/12 revenue recognised now — many candidates deferred the entire amount." },
			{ source: "Mar/Jun 2022 Examiner Report", tip: "Principal vs agent analysis remains poorly handled. The key test: does the entity control the good before transfer? Fewer candidates identified agent relationships, and most missed gross vs net revenue implications." },
			{ source: "Recurring Pattern", tip: "Contract modifications are the worst-performing IFRS 15 topic. Know the two paths: (a) modification as a separate contract (additional distinct goods at SSP), or (b) cumulative catch-up adjustment on the existing contract." },
			{ source: "Recurring Pattern", tip: "Stand-alone selling price allocation — stronger candidates identify that combined SSPs exceed the contract price and proceed to proportionate allocation. Weaker candidates waste time on unnecessary side calculations." },
			{ source: "Exam Technique", tip: "Variable consideration constraint: examiners want you to state the 'highly probable' threshold explicitly and apply it — don't just assert 'include' or 'exclude' without the reasoning chain." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Construction penalty clauses ignored in Step 3",
			description: "Government infrastructure contracts routinely include 5–10% penalty clauses for late delivery. Many construction companies set transaction price at the full contract amount without estimating variable consideration for likely penalties. Under NFRS 15.56, penalties are variable consideration that must be constrained using the 'highly probable' threshold.",
			sector: "Construction",
		},
		{
			title: "Real estate revenue at project completion",
			description: "Real estate developers in Kathmandu Valley commonly recognise revenue only when the apartment is handed over. However, if the buyer controls the land and the developer has an enforceable right to payment for work completed, over-time recognition may be required. Each contract's terms must be analysed against the three over-time criteria at NFRS 15.35.",
			sector: "Real Estate",
		},
		{
			title: "Free delivery not separated as distinct obligation",
			description: "Trading companies bundling 'free delivery' with product sales fail to evaluate whether delivery is a separate performance obligation. If the customer could arrange delivery independently and the entity's promise is separately identifiable, delivery is a distinct obligation requiring its own allocation of transaction price.",
			sector: "Trading & Distribution",
		},
		{
			title: "Software maintenance treated as single obligation",
			description: "Kathmandu-based software companies selling annual licences with maintenance often treat the bundle as a single obligation. If maintenance is a stand-ready obligation (the customer benefits from it over time), it must be separated and revenue recognised over the maintenance period, not at software delivery.",
			sector: "Technology",
		},
		{
			title: "SEBON disaggregation overlay missed",
			description: "NEPSE-listed companies prepare NFRS 15 disclosures but omit SEBON's additional disaggregation requirements: revenue by product line, geography, and customer concentration. This creates regulatory risk during SEBON's annual report review process.",
			sector: "Listed Companies",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-16",
			nfrsNumber: "NFRS 16",
			title: "Leases",
			reason: "Sale-and-leaseback transactions require joint analysis under NFRS 15 (is there a sale?) and NFRS 16 (leaseback accounting)",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Receivables from contracts with customers are financial assets subject to NFRS 9 ECL impairment",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "IRD timing differences on advance payments and percentage-of-completion create deferred tax under NAS 12",
		},
		{
			slug: "nfrs-17",
			nfrsNumber: "NFRS 17",
			title: "Insurance Contracts",
			reason: "Scope exclusion — contracts transferring insurance risk are outside NFRS 15, within NFRS 17",
		},
	],
};
