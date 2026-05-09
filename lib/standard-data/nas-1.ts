import type { StandardPageData } from "./types";

export const nas1: StandardPageData = {
	slug: "nas-1",
	nfrsNumber: "NAS 1",
	ifrsEquivalent: "IAS 1",
	title: "Presentation of Financial Statements",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2009-01-01",
	status: "aligned",
	heroMotif: "document",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA SBR","ACCA SBL","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Financial Statement Formats",
				ifrs: "IAS 1 prescribes minimum line items but does not mandate a specific format (IAS 1.54–55)",
				nfrs: "Same principle, but NRB Unified Directives prescribe mandatory templates for BFIs. SEBON also prescribes formats for listed companies",
				nepalImpact: "BFIs follow NRB templates which may differ in layout from IAS 1 illustrative examples but must still include all minimum line items. Dual compliance creates formatting challenges",
				significance: "medium",
			},
			{
				topic: "Reporting Period",
				ifrs: "Annual reporting with comparatives. No specific fiscal year prescribed",
				nfrs: "Nepal fiscal year runs Shrawan to Ashad (mid-July to mid-July). All NFRS-reporting entities use this fiscal year as mandated by Companies Act 2063",
				nepalImpact: "Multinational subsidiaries with different parent fiscal years must prepare two sets of accounts or adjust for consolidation within the three-month window permitted by NFRS 10",
				significance: "medium",
			},
			{
				topic: "OCI Presentation",
				ifrs: "Single statement or two-statement approach. OCI items split into reclassifiable and non-reclassifiable (IAS 1.81A–81B)",
				nfrs: "Same choice available. Most BFIs use single statement. Many entities struggled with OCI concept during NFRS transition — particularly revaluation gains and NFRS 9 FVOCI movements",
				nepalImpact: "OCI was a new concept for many Nepali entities transitioning from Nepal GAAP. Actuarial gains/losses on gratuity and FVOCI debt instrument movements are common OCI items misclassified",
				significance: "high",
			},
			{
				topic: "Going Concern Assessment",
				ifrs: "Management assesses going concern for at least 12 months from the reporting date. Disclose material uncertainties (IAS 1.25–26)",
				nfrs: "Same requirement. Nepal's economic environment — political instability, earthquake risk, COVID-19 impact on tourism — makes going concern particularly relevant for hotel and aviation sectors",
				nepalImpact: "Hotel companies during COVID-19, airlines facing regulatory challenges, and BFIs under NRB corrective action face going concern questions. Many entities inadequately disclosed material uncertainties",
				significance: "high",
			},
			{
				topic: "Current/Non-current Classification",
				ifrs: "Current/non-current classification required unless liquidity-based presentation provides more reliable information (IAS 1.60)",
				nfrs: "BFIs typically use mixed presentation per NRB templates — current/non-current for some items, liquidity-based for others. Non-BFI entities use standard current/non-current",
				nepalImpact: "NRB templates blend liquidity and current/non-current presentation, creating interpretation challenges. Some BFIs inconsistently classify items between periods",
				significance: "low",
			},
			{
				topic: "Third Balance Sheet",
				ifrs: "Required when entity applies accounting policy retrospectively, restates retrospectively, or reclassifies items — present opening balance sheet of earliest comparative period (IAS 1.10(f))",
				nfrs: "Same requirement but widely ignored in practice. During NFRS first-time adoption, many entities omitted the third balance sheet when restating comparatives",
				nepalImpact: "Auditors and SEBON have flagged non-compliance. Entities applying NAS 8 retrospective changes or correcting prior-period errors frequently omit this requirement",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives prescribe mandatory financial statement formats for BFIs (balance sheet, P&L, OCI statement, equity statement, cash flow statement). BFIs must submit audited annual accounts within Kartik (4 months of fiscal year-end). NRB requires quarterly unaudited financial statements within 30 days of quarter-end. BFIs under corrective action must provide enhanced going concern disclosures.",
		sebon: "SEBON requires listed entities to publish quarterly unaudited and annual audited financial statements. Annual accounts must be filed within 6 months of fiscal year-end. SEBON prescribes presentation formats and mandates disclosure of any departure from NFRS with quantified impact. Financial statements must be approved by the board and signed by the CEO, CFO, and chairman.",
		ird: "IRD does not prescribe financial statement formats but requires tax returns to be reconciled to audited financial statements. Schedule 1 of the Income Tax Act 2058 defines assessable income starting from accounting profit, with adjustments for disallowed expenses and exempt income. Entities must file tax returns within Poush (6 months of fiscal year-end).",
	},

	timeline: [
		{ date: "Sep 2007", label: "IAS 1 Revised", description: "Major revision introducing OCI, single/two-statement option" },
		{ date: "Jan 2009", label: "IAS 1 (2007) Effective", description: "Revised standard effective globally" },
		{ date: "Jul 2018", label: "NAS 1 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Prepare Complete Set of Financial Statements",
			coreQuestion: "Does the entity have all five components plus notes?",
			nepalExample: "Himalayan Bank prepares: Statement of Financial Position, Statement of Profit or Loss and OCI (single statement), Statement of Changes in Equity, Statement of Cash Flows, and Notes including accounting policies. NRB template adds schedules for sector-specific disclosures.",
			paraRef: "IAS 1.10",
		},
		{
			number: 2,
			name: "Assess Going Concern",
			coreQuestion: "Is the entity a going concern for at least 12 months from reporting date?",
			nepalExample: "Sagarmatha Hotels assesses going concern at Ashad-end 2082. Despite occupancy dropping to 30% during monsoon season, forward bookings for tourist season, confirmed credit facilities, and asset base support going concern. Management discloses seasonal cash flow uncertainty in notes.",
			paraRef: "IAS 1.25–26",
		},
		{
			number: 3,
			name: "Apply Accrual Basis and Materiality",
			coreQuestion: "Are transactions recorded when they occur? Are material items separately disclosed?",
			nepalExample: "Nepal Telecom records revenue when service is provided (not when cash is collected). Material items like NPR 2 arba tower construction expenditure are disclosed separately, while NPR 5 lakh stationery expenses are aggregated with administrative costs.",
			paraRef: "IAS 1.27–31",
		},
		{
			number: 4,
			name: "Classify Current vs Non-current",
			coreQuestion: "Is each asset/liability correctly classified as current or non-current?",
			nepalExample: "Surya Nepal classifies: inventory (current — sold within 12 months), factory building (non-current — used over 25 years), bank overdraft (current — repayable on demand), long-term loan with NPR 1 crore instalment due within 12 months (current portion separated from non-current).",
			paraRef: "IAS 1.60–76",
		},
		{
			number: 5,
			name: "Present Comparative Information",
			coreQuestion: "Does every amount in the current period have a corresponding comparative?",
			nepalExample: "Nabil Bank presents Ashad-end 2082 figures alongside Ashad-end 2081 comparatives for all statements. When it changed its ECL methodology (accounting policy change under NAS 8), it also presented a third balance sheet as at Shrawan 1, 2081.",
			paraRef: "IAS 1.38–44",
		},
	],

	inlineExamples: {
		ociPresentation: {
			title: "Himalayan Bank — OCI Statement Preparation",
			context: "Himalayan Bank Ltd prepares its statement of profit or loss and other comprehensive income for the year ended Ashad 2082. Profit for the year is NPR 4,50,00,00,000. During the year: FVOCI debt instruments had fair value gains of NPR 35,00,00,000; revaluation surplus on head office building increased by NPR 1,20,00,00,000; actuarial loss on gratuity obligation was NPR 8,00,00,000. Tax rate: 30%.",
			steps: [
				"Step 1 — Classify OCI items: FVOCI debt gains will be reclassified to P&L on disposal/maturity. Revaluation surplus and actuarial losses will NOT be reclassified.",
				"Step 2 — Tax on OCI items: FVOCI gain tax = NPR 35 cr × 30% = NPR 10.5 cr. Revaluation tax = NPR 120 cr × 30% = NPR 36 cr. Actuarial loss tax benefit = NPR 8 cr × 30% = NPR 2.4 cr.",
				"Step 3 — Present OCI after tax: Items that will be reclassified: FVOCI gain NPR 24.5 cr net. Items that will NOT be reclassified: revaluation surplus NPR 84 cr net + actuarial loss (NPR 5.6 cr) net = NPR 78.4 cr net.",
				"Step 4 — Total comprehensive income = NPR 450 cr + NPR 24.5 cr + NPR 78.4 cr = NPR 552.9 cr.",
				"Step 5 — Attribute between parent shareholders and NCI if consolidated.",
			],
			journalEntries: [
				"FVOCI gain: Dr Investment Securities NPR 35,00,00,000 / Cr OCI — FVOCI Reserve NPR 35,00,00,000",
				"Tax on FVOCI: Dr OCI — FVOCI Reserve NPR 10,50,00,000 / Cr Deferred Tax Liability NPR 10,50,00,000",
				"Actuarial loss: Dr OCI — Remeasurement NPR 8,00,00,000 / Cr Gratuity Obligation NPR 8,00,00,000",
			],
			difficulty: "medium",
		},
		goingConcern: {
			title: "Sagarmatha Hotels — Going Concern Assessment",
			context: "Sagarmatha Hotels Ltd operates three hotels in Pokhara and Chitwan. For the year ended Ashad 2082, revenue dropped 40% due to reduced Chinese tourist arrivals. The entity has NPR 15 crore in bank loans maturing within 12 months, cash reserves of NPR 3 crore, and undrawn credit facilities of NPR 8 crore. The peak tourist season (October–March) is expected to generate NPR 20 crore revenue.",
			steps: [
				"Step 1 — Assess whether the entity can continue for at least 12 months from Ashad-end 2082 (i.e., until at least Ashad 2083).",
				"Step 2 — Cash flow projection: Operating cash inflow (Oct–Mar peak) NPR 12 cr + (Apr–Sep low) NPR 4 cr = NPR 16 cr. Debt repayment NPR 15 cr. Operating costs NPR 14 cr. Cash shortfall = NPR 16 cr + NPR 3 cr + NPR 8 cr − NPR 15 cr − NPR 14 cr = deficit of NPR 2 cr.",
				"Step 3 — Mitigating factors: management is negotiating loan rescheduling (lender has indicated willingness), and one underperforming hotel site in Chitwan has received a purchase offer of NPR 25 crore.",
				"Step 4 — Conclusion: Going concern basis is appropriate but material uncertainty exists. Management must disclose the uncertainty prominently per IAS 1.25.",
				"Step 5 — Auditor should include an Emphasis of Matter paragraph. If loan rescheduling fails and asset sale does not proceed, going concern basis may be inappropriate.",
			],
			journalEntries: [
				"No journal entry — going concern is an assessment, not a transaction. Disclosure in notes required.",
				"If going concern basis is NOT appropriate: assets measured at NRV, liabilities at settlement amounts, provisions for restructuring costs recognised.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "OCI classification is frequently tested. Remember: revaluation surplus (NAS 16), actuarial gains/losses (NAS 19), and FVOCI equity instruments do NOT reclassify to P&L. FVOCI debt instruments, cash flow hedges, and foreign currency translation DO reclassify." },
			{ source: "Dec 2024 Examiner Report", tip: "Going concern assessment must cover at least 12 months from the reporting date — not 12 months from the date financial statements are authorised. Candidates frequently confuse these two dates." },
			{ source: "Exam Technique", tip: "When asked about presentation, always check: complete set of 5 statements + notes, comparative information, consistent classification, and proper disclosure of accounting policies." },
			{ source: "Recurring Pattern", tip: "The third balance sheet requirement under NAS 8 retrospective restatement is commonly missed. If the question involves a change in accounting policy with retrospective application, you need three columns in the balance sheet." },
			{ source: "Nepal-specific", tip: "Nepal fiscal year (Shrawan–Ashad) means reporting date is mid-July. Going concern assessment must look forward to at least mid-July of the following year. BFI templates from NRB must still comply with NAS 1 minimum line items." },
			{ source: "Exam Technique", tip: "Offsetting is prohibited unless specifically required by another NFRS. Common error: netting trade receivables against trade payables, or netting gains and losses on disposal of PPE against each other." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "OCI items misclassified between reclassifiable and non-reclassifiable",
			description: "Entities group all OCI items together without distinguishing between those that will be reclassified to P&L in subsequent periods and those that will not. NAS 1 requires separate presentation of these two categories. Revaluation surplus and actuarial gains/losses never reclassify; FVOCI debt gains and foreign currency translation differences do reclassify.",
			sector: "Banking",
		},
		{
			title: "Going concern disclosures omitted despite material uncertainty",
			description: "Hotel companies, airlines, and entities under financial stress omit going concern disclosures. NAS 1.25 requires disclosure of material uncertainties that may cast significant doubt on going concern. The absence of explicit disclosure when indicators exist is a compliance failure flagged by auditors and SEBON.",
			sector: "Hospitality & Aviation",
		},
		{
			title: "Comparative information not restated after accounting policy change",
			description: "When entities change accounting policies (e.g., switching from cost model to revaluation model for a class of PPE), comparatives must be restated retrospectively under NAS 8. Many entities only apply the change prospectively and fail to present the required third balance sheet.",
			sector: "Listed Companies",
		},
		{
			title: "NRB templates treated as overriding NFRS",
			description: "BFIs sometimes follow NRB template formats without ensuring all NAS 1 minimum line items are present. NRB formats are regulatory requirements but cannot override NFRS — if an NAS 1 minimum line item is missing from the NRB template, the entity must add it.",
			sector: "Banking",
		},
		{
			title: "Accounting policy disclosures are boilerplate rather than entity-specific",
			description: "Entities copy generic accounting policy notes from templates or other companies without tailoring them to their actual circumstances. NAS 1 requires disclosure of significant accounting policies that are specific to the entity and relevant to understanding its financial statements — not a generic recitation of NFRS requirements.",
			sector: "Manufacturing",
		},
	],

	relatedStandards: [
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "NAS 8 determines when retrospective restatement triggers the third balance sheet requirement under NAS 1",
		},
		{
			slug: "nas-7",
			nfrsNumber: "NAS 7",
			title: "Statement of Cash Flows",
			reason: "Cash flow statement is one of the five components of a complete set of financial statements under NAS 1",
		},
		{
			slug: "nas-34",
			nfrsNumber: "NAS 34",
			title: "Interim Financial Reporting",
			reason: "NAS 34 prescribes condensed interim statements that must be consistent with annual NAS 1 presentation",
		},
		{
			slug: "nas-10",
			nfrsNumber: "NAS 10",
			title: "Events After the Reporting Period",
			reason: "Post-reporting events may affect going concern assessment and disclosure requirements under NAS 1",
		},
	],
};
