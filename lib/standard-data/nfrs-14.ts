import type { StandardPageData } from "./types";

export const nfrs14: StandardPageData = {
	slug: "nfrs-14",
	nfrsNumber: "NFRS 14",
	ifrsEquivalent: "IFRS 14",
	title: "Regulatory Deferral Accounts",
	topic: "regulatory-deferral-accounts",
	effectiveDate: "2021-07-16",
	ifrsEffectiveDate: "2016-01-01",
	status: "aligned",
	heroMotif: "scales",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Narrow Scope — First-time Adopters Only",
				ifrs: "IFRS 14 applies only to first-time IFRS adopters with rate-regulated activities that recognised regulatory deferral balances under previous GAAP (IFRS 14.5–8)",
				nfrs: "Same restriction. In Nepal, primarily affects NEA (Nepal Electricity Authority) and NTC (Nepal Telecom) on NFRS first-time adoption. Cannot be applied by entities already reporting under NFRS",
				nepalImpact: "Very narrow applicability — only a handful of Nepali entities conduct rate-regulated activities AND were first-time NFRS adopters. NEA is the most significant user. NTC's regulatory deferral balances are smaller but still relevant",
				significance: "high",
			},
			{
				topic: "Continuation of Previous GAAP Policy",
				ifrs: "Entity may continue previous GAAP accounting policy for regulatory deferral balances, including recognition, measurement, and impairment (IFRS 14.11)",
				nfrs: "Same permission. NEA continued recognising regulatory assets (costs recoverable through future tariffs) and regulatory liabilities (amounts to be returned through future tariff reductions) using previous accounting policies",
				nepalImpact: "NEA's previous GAAP (Nepal Accounting Standards based on older Indian GAAP) recognised regulatory deferrals. Without NFRS 14, NEA would have had to derecognise these on NFRS adoption — dramatically distorting its financial position",
				significance: "high",
			},
			{
				topic: "Separate Presentation in Financial Statements",
				ifrs: "Regulatory deferral account debit/credit balances presented as separate line items after total assets/total liabilities. Net movements shown separately after P&L subtotal (IFRS 14.20–26)",
				nfrs: "Same presentation requirements. Ensures users can identify and remove the effect of rate regulation from the financial statements if they choose. Separate subtotal showing 'profit or loss and net movement in regulatory deferral accounts'",
				nepalImpact: "NEA's financial statements clearly distinguish regulatory deferral effects from regular NFRS amounts. Analysts can assess NEA's financial position with or without regulatory balances — important for creditworthiness assessment",
				significance: "high",
			},
			{
				topic: "Rate Regulation Framework in Nepal",
				ifrs: "IFRS 14 requires the rate regulator to be a body empowered by statute to set prices designed to recover entity's costs plus a return (IFRS 14.Appendix A)",
				nfrs: "NERC (Nepal Electricity Regulatory Commission) under the Electricity Regulatory Commission Act 2074 regulates NEA tariffs. NTA (Nepal Telecommunications Authority) under Telecommunications Act 2053 regulates NTC tariffs. Both are statutory bodies meeting NFRS 14's definition",
				nepalImpact: "NERC is relatively new (established 2019) and still developing its tariff-setting methodology. The evolution from cost-plus to incentive-based regulation could affect the recoverability of existing regulatory deferral balances",
				significance: "medium",
			},
			{
				topic: "Impairment of Regulatory Deferral Account Debit Balances",
				ifrs: "Regulatory deferral account debit balances (assets) must be assessed for impairment when indicators suggest the regulator may not allow full recovery (IFRS 14.16–17)",
				nfrs: "Same requirement. For NEA, impairment indicators include: NERC policy shifts, government directives limiting tariff increases (political sensitivity of electricity prices), and declining customer demand in specific categories",
				nepalImpact: "Electricity tariffs in Nepal are politically sensitive. If NERC disallows recovery of certain costs (e.g., foreign exchange losses on power imports deemed excessive), the related regulatory deferral debit balance becomes impaired",
				significance: "medium",
			},
			{
				topic: "Interaction with Other NFRS",
				ifrs: "NFRS 14 interacts with NFRS 1 (first-time adoption), NAS 1 (presentation), NAS 8 (accounting policies), NAS 12 (income taxes), NAS 16 (property), NAS 36 (impairment) — but regulatory deferral balances are measured under previous GAAP, not under these standards (IFRS 14.7, B3)",
				nfrs: "Same interaction framework. Regulatory deferral balances exist in a 'parallel universe' — measured under previous GAAP while all other items follow NFRS. Tax effects of regulatory deferral balances are included in the separate line items, not in the regular tax line",
				nepalImpact: "Creates dual-track accounting within single financial statements. Users must understand that regulatory deferral balances follow different rules. NAS 12 deferred tax on regulatory balances is presented within the regulatory deferral line items",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB has no direct involvement — NFRS 14 applies to rate-regulated entities (NEA, NTC), not BFIs. However, BFI lending to NEA/NTC requires understanding of regulatory deferral balances when assessing creditworthiness. Loan covenants referencing balance sheet ratios should specify whether regulatory deferral balances are included or excluded.",
		sebon: "If NEA or NTC were to be listed (NTC is listed on NEPSE), SEBON would require compliance with NFRS 14 presentation requirements. NTC's financial statements must clearly separate regulatory deferral balances. SEBON scrutinises whether the separate presentation requirements are properly applied and whether impairment indicators have been adequately assessed.",
		ird: "Tax treatment of regulatory deferral balances follows general income tax principles: costs are deductible when incurred for tax purposes regardless of regulatory deferral treatment. This creates temporary differences — the regulatory deferral debit balance (asset) has no tax base (already deducted), generating a deferred tax liability. NFRS 14 requires this tax effect to be presented within the regulatory deferral line items, not in the regular tax line.",
	},

	timeline: [
		{ date: "Jan 2014", label: "IFRS 14 Issued", description: "IASB issues narrow interim standard" },
		{ date: "Jan 2016", label: "IFRS 14 Effective", description: "IFRS 14 effective for first-time IFRS adopters" },
		{ date: "Jul 2019", label: "NERC Established", description: "Nepal Electricity Regulatory Commission established under ERC Act 2074" },
		{ date: "Jul 2021", label: "NFRS 14 Effective", description: "Nepal adoption (1 Shrawan 2078 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned. IASB comprehensive rate-regulation project ongoing" },
	],

	steps: [
		{
			number: 1,
			name: "Confirm Eligibility",
			coreQuestion: "Is the entity a first-time NFRS adopter with rate-regulated activities that recognised regulatory deferrals under previous GAAP?",
			nepalExample: "NEA adopts NFRS for the first time. NEA is regulated by NERC under the Electricity Regulatory Commission Act 2074. Under previous GAAP (Nepal Accounting Standards), NEA recognised regulatory deferral assets for costs approved by NERC for recovery through future tariffs. All three criteria met — NFRS 14 applies.",
			paraRef: "IFRS 14.5–8",
		},
		{
			number: 2,
			name: "Identify Regulatory Deferral Account Balances",
			coreQuestion: "What amounts were recognised under previous GAAP that would not be recognised under other NFRS?",
			nepalExample: "NEA identifies: (a) Deferred fuel/power purchase costs NPR 15 arba (excess costs from Indian power imports due to NPR/INR exchange rate movements, approved by NERC for tariff recovery over 3 years); (b) Deferred system loss costs NPR 3 arba (actual losses exceeding NERC target, partially recoverable); (c) Regulatory liability NPR 2 arba (tariff overrecovery to be returned through future reductions).",
			paraRef: "IFRS 14.9–11",
		},
		{
			number: 3,
			name: "Continue Previous GAAP Measurement",
			coreQuestion: "Are regulatory deferral balances measured consistently with previous GAAP?",
			nepalExample: "NEA continues measuring regulatory deferral debit balances at cost (the amount of excess cost incurred), adjusted for amounts recovered through tariffs during the period. No fair value measurement required. Annual recovery: NPR 5 arba deducted from deferred fuel costs as tariff surcharges collect the amounts. Closing balance: NPR 10 arba.",
			paraRef: "IFRS 14.11",
		},
		{
			number: 4,
			name: "Assess Impairment Indicators",
			coreQuestion: "Are there indicators that regulatory deferral debit balances may not be fully recoverable?",
			nepalExample: "NEA assesses: NERC has signalled interest in moving from cost-plus to performance-based regulation (indicator of potential non-recovery). Government directive freezing tariff increases for 2 years due to political considerations (indicator). However, NERC formally confirmed recoverability of existing deferred balances in its latest tariff order. Conclusion: no impairment required, but enhanced disclosure of risk.",
			paraRef: "IFRS 14.16–17",
		},
		{
			number: 5,
			name: "Present Separately in Financial Statements",
			coreQuestion: "Are regulatory deferral balances presented as required by NFRS 14?",
			nepalExample: "NEA's statement of financial position: ... Total assets NPR 200 arba → then separate line 'Regulatory deferral account debit balances NPR 13 arba.' Total liabilities NPR 150 arba → then separate line 'Regulatory deferral account credit balances NPR 2 arba.' P&L: Profit for the year NPR 8 arba → separate line 'Net movement in regulatory deferral accounts NPR (5) arba' → Profit after regulatory deferral NPR 3 arba.",
			paraRef: "IFRS 14.20–26",
		},
	],

	inlineExamples: {
		neaRegulatoryAsset: {
			title: "Nepal Electricity Authority — Regulatory Deferral Asset for Power Import Costs",
			context: "NEA imports electricity from India under cross-border power purchase agreements denominated in INR. During FY 2081/82, NPR depreciated against INR by 5%, increasing NEA's power purchase costs by NPR 3,00,00,00,000 (NPR 3 arba) above the amount embedded in current tariffs. NERC has approved recovery of this excess cost through a tariff surcharge over the next 3 years.",
			steps: [
				"Step 1 — Identify the regulatory deferral: Excess power purchase cost NPR 3,00,00,00,000 due to exchange rate movement. Under regular NFRS, this is a period expense. Under NFRS 14, NEA can continue recognising it as a regulatory deferral debit balance (asset) because previous GAAP allowed this and NERC has approved future recovery.",
				"Step 2 — Initial recognition: Regulatory deferral account debit balance NPR 3,00,00,00,000.",
				"Step 3 — Recovery in Year 1: NERC tariff surcharge collects NPR 1,00,00,00,000 from customers. Regulatory deferral balance reduces to NPR 2,00,00,00,000.",
				"Step 4 — Recovery in Year 2: Another NPR 1,00,00,00,000 collected. Balance: NPR 1,00,00,00,000.",
				"Step 5 — Recovery in Year 3: Final NPR 1,00,00,00,000 collected. Balance: Nil. Full recovery achieved.",
				"Step 6 — Presentation: Debit balance shown as separate line item after total assets. Net movement (initial deferral less recovery) shown as separate line after P&L subtotal.",
			],
			journalEntries: [
				"Initial deferral: Dr Regulatory Deferral Account (separate line in SFP) NPR 3,00,00,00,000 / Cr Net Movement in Regulatory Deferral (separate line in P&L) NPR 3,00,00,00,000",
				"Year 1 recovery: Dr Net Movement in Regulatory Deferral NPR 1,00,00,00,000 / Cr Regulatory Deferral Account NPR 1,00,00,00,000",
				"The power purchase cost itself is recognised as a regular expense: Dr Power Purchase Cost (P&L) NPR 3,00,00,00,000 / Cr Cash/Payable NPR 3,00,00,00,000",
			],
			difficulty: "medium",
		},
		ntcUniversalService: {
			title: "Nepal Telecom — Regulatory Deferral for Universal Service Obligation",
			context: "Nepal Telecom (NTC) is required by NTA to extend telecommunications services to uneconomic rural areas under its universal service obligation. The incremental cost of rural network expansion (NPR 2,00,00,00,000 above commercial returns) is approved by NTA for recovery through the Rural Telecommunications Development Fund surcharge on urban customers over 5 years.",
			steps: [
				"Step 1 — Eligibility: NTC is a first-time NFRS adopter regulated by NTA (statutory body under Telecommunications Act 2053). Universal service costs recognised as regulatory deferral asset under previous GAAP. NFRS 14 criteria met.",
				"Step 2 — Regulatory deferral debit balance: NPR 2,00,00,00,000 (incremental rural expansion costs above commercial returns).",
				"Step 3 — Annual recovery: NTA-approved surcharge generates approximately NPR 40,00,00,000 per year. Full recovery expected in 5 years.",
				"Step 4 — Impairment assessment: NTA recently increased the surcharge rate (positive indicator). However, migration from voice to data in rural areas may reduce long-term revenue base (negative indicator but not yet triggering impairment). No impairment recognised.",
				"Step 5 — Presentation: Separate line item after total assets. Disclosure: nature of universal service obligation, recovery mechanism, remaining recovery period, and risk factors.",
			],
			journalEntries: [
				"Initial recognition: Dr Regulatory Deferral Account NPR 2,00,00,00,000 / Cr Net Movement in Regulatory Deferral NPR 2,00,00,00,000",
				"Annual recovery: Dr Net Movement in Regulatory Deferral NPR 40,00,00,000 / Cr Regulatory Deferral Account NPR 40,00,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Exam Technique", tip: "NFRS 14 has the narrowest scope of any NFRS — first-time adopters only, with rate-regulated activities, who recognised regulatory deferrals under previous GAAP. Three criteria, all must be met. If any criterion fails, NFRS 14 does not apply and the entity cannot recognise regulatory deferral balances under NFRS." },
			{ source: "Recurring Pattern", tip: "Presentation is the examinable heart of NFRS 14: separate line items after total assets (debit balances) and after total liabilities (credit balances). Net movement after P&L subtotal. Tax on regulatory deferral included in regulatory deferral line, not regular tax. Always show this in your answer layout." },
			{ source: "Nepal-specific", tip: "NEA and NTC are the primary Nepali entities applying NFRS 14. NEA is regulated by NERC (electricity tariffs), NTC by NTA (telecom tariffs). Both are statutory regulators meeting NFRS 14's definition. Use these as examples in answers." },
			{ source: "Dec 2023 Examiner Report", tip: "Candidates confuse NFRS 14 with NAS 37 provisions. Regulatory deferral balances are NOT provisions — they are amounts that would not meet the asset/liability definition under the NFRS Conceptual Framework but are permitted as an interim measure. A provision is a liability of uncertain timing or amount; a regulatory deferral asset is a cost permitted by the regulator for future recovery." },
			{ source: "Recurring Pattern", tip: "NFRS 14 is an interim standard — the IASB's comprehensive rate-regulated activities project will eventually replace it. State this context in exam answers to show awareness of the standard's temporary nature and the IASB's broader agenda." },
			{ source: "Exam Technique", tip: "Impairment of regulatory deferral debit balances: look for indicators that the regulator may not allow recovery — policy shifts from cost-plus to incentive regulation, political interference in tariff-setting, declining demand. If impaired, present within the regulatory deferral line items, not in regular operating expenses." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Applying NFRS 14 to entities that are not first-time adopters",
			description: "NFRS 14 is exclusively for first-time NFRS adopters. An entity already reporting under NFRS cannot begin applying NFRS 14, even if it subsequently becomes rate-regulated. This is the most fundamental scope error — the standard's eligibility is frozen at the point of first NFRS adoption.",
			sector: "Utilities",
		},
		{
			title: "Regulatory deferral balances not presented separately",
			description: "NFRS 14 requires regulatory deferral debit and credit balances to be presented as separate line items in the statement of financial position — not commingled with regular assets/liabilities. Similarly, net movements must be a separate line in P&L. Failing to present separately defeats the standard's transparency objective.",
			sector: "Utilities",
		},
		{
			title: "Tax effects of regulatory deferral included in regular tax line",
			description: "Income tax effects attributable to regulatory deferral account balances must be presented within the regulatory deferral line items, not in the entity's regular income tax expense/benefit line. This allows users to see the pre-tax and after-tax effects of regulatory deferral in one place.",
			sector: "Utilities",
		},
		{
			title: "Impairment indicators for regulatory deferral assets ignored",
			description: "Regulatory deferral debit balances must be assessed for impairment when indicators arise — such as regulator policy changes, political interference in tariff-setting, or declining demand. In Nepal, electricity tariffs are politically sensitive, and NERC may face pressure to limit tariff increases, potentially impairing NEA's regulatory deferral assets.",
			sector: "Utilities",
		},
		{
			title: "Creating new regulatory deferral balances not in previous GAAP",
			description: "NFRS 14 only permits continuation of regulatory deferral balances recognised under previous GAAP. The entity cannot create new types of regulatory deferral balances after NFRS adoption just because the regulator permits cost recovery. This constraint is frequently misunderstood.",
			sector: "Utilities",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-1",
			nfrsNumber: "NFRS 1",
			title: "First-time Adoption of NFRS",
			reason: "NFRS 14 works alongside NFRS 1 — it provides an additional exemption for first-time adopters, allowing continuation of previous GAAP treatment for regulatory deferral balances",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NFRS 14's presentation requirements (separate line items) interact with NAS 1's general presentation requirements for the statement of financial position and profit or loss",
		},
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "Changes in regulatory deferral account policies follow NAS 8. The previous GAAP anchor means changes must be assessed against the previous GAAP policy, not general NFRS principles",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Rate-regulated entities like NEA have significant PP&E (power plants, transmission lines). The regulatory asset base often includes PP&E carrying amounts that feed into tariff calculations",
		},
	],
};
