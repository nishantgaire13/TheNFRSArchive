import type { StandardPageData } from "./types";

export const nfrs1: StandardPageData = {
	slug: "nfrs-1",
	nfrsNumber: "NFRS 1",
	ifrsEquivalent: "IFRS 1",
	title: "First-time Adoption of Nepal Financial Reporting Standards",
	topic: "transition",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2004-01-01",
	status: "aligned",
	heroMotif: "flag",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Date of Transition and Opening Balance Sheet",
				ifrs: "IFRS 1 requires an entity to prepare an opening IFRS balance sheet at the date of transition — the beginning of the earliest comparative period presented (IFRS 1.6–7)",
				nfrs: "Same requirement. For BFIs transitioning from Nepal Accounting Standards, the date of transition was 1 Shrawan 2071 (July 2014) for Class A and B banks. Other entities transitioning from 2018/19 used 1 Shrawan 2074 as the date of transition",
				nepalImpact: "Nepal's phased transition meant different entities had different transition dates. BFIs had to prepare opening NFRS balance sheets years before non-financial entities, creating a two-tier reporting environment during the transition window",
				significance: "high",
			},
			{
				topic: "Mandatory Exceptions",
				ifrs: "IFRS 1 requires retrospective application of all IFRSs with certain mandatory exceptions — including estimates, derecognition of financial assets/liabilities, hedge accounting, and non-controlling interests (IFRS 1.14, B2–B5)",
				nfrs: "Same mandatory exceptions apply. The estimates exception was critical in Nepal — entities could not use hindsight to revise estimates made under Nepal Accounting Standards. For example, loan impairment estimates made under the incurred-loss model could not be retrospectively restated using expected credit loss information",
				nepalImpact: "BFIs that had made loan loss provisions under NRB directives (which were rules-based, not principles-based) could not retrospectively adjust those estimates. However, the opening balance sheet still required remeasurement of provisions under the NFRS framework prospectively from the transition date",
				significance: "high",
			},
			{
				topic: "Optional Exemptions — Deemed Cost for PPE",
				ifrs: "IFRS 1 permits an entity to use fair value at the date of transition as deemed cost for property, plant and equipment (IFRS 1.D5–D6)",
				nfrs: "Same exemption available. Many Nepali entities — particularly manufacturing companies and hydropower plants — elected deemed cost for land and buildings because historical cost records were incomplete or unreliable. Revaluation-based deemed cost was common for entities with significantly appreciated real estate",
				nepalImpact: "Land prices in Kathmandu Valley and Terai industrial corridors had appreciated 5–10x over the preceding decade. Entities like Bottlers Nepal and Unilever Nepal elected fair value as deemed cost, resulting in significant upward restatement of PPE and a corresponding credit to retained earnings in the opening NFRS balance sheet",
				significance: "high",
			},
			{
				topic: "Optional Exemptions — Cumulative Translation Differences",
				ifrs: "IFRS 1 permits an entity to reset cumulative translation differences for foreign operations to zero at the date of transition (IFRS 1.D12–D13)",
				nfrs: "Same exemption available. Few Nepali entities have material foreign operations, but entities like Chaudhary Group (with overseas subsidiaries) could elect to reset cumulative translation reserves to zero, simplifying the transition",
				nepalImpact: "Limited practical impact because most Nepali entities operate domestically. However, entities with subsidiaries in India or the Gulf region found this exemption useful as historical translation records under Nepal Accounting Standards were often incomplete",
				significance: "low",
			},
			{
				topic: "Derecognition of Items Not Qualifying Under NFRS",
				ifrs: "IFRS 1 requires derecognition of assets and liabilities recognised under previous GAAP that do not qualify for recognition under IFRS (IFRS 1.10)",
				nfrs: "Same requirement. Major items derecognised in Nepal included: deferred revenue expenditure (advertising costs capitalised under Nepal GAAP), self-generated goodwill, provisions not meeting NAS 37 criteria, and regulatory reserves mandated by NRB that did not meet liability recognition criteria under NFRS",
				nepalImpact: "BFIs had to derecognise NRB-mandated general loan loss provisions that did not meet the definition of a liability under the NFRS framework. This was controversial because NRB continued to require these provisions for regulatory purposes, creating a dual-reporting requirement",
				significance: "high",
			},
			{
				topic: "Reconciliation Disclosures",
				ifrs: "IFRS 1 requires reconciliations of equity at the date of transition and end of the last period under previous GAAP, and a reconciliation of total comprehensive income for the last period under previous GAAP (IFRS 1.24–25)",
				nfrs: "Same reconciliation disclosures required. Nepali entities had to show how equity changed from Nepal GAAP to NFRS and explain every adjustment line by line. These reconciliations were published in the first NFRS financial statements",
				nepalImpact: "The reconciliations revealed massive adjustments for BFIs — particularly from loan impairment remeasurement (incurred loss to expected credit loss), employee benefit remeasurement (gratuity and leave encashment actuarial valuations), and PPE deemed cost elections. Some banks saw equity decrease by 15–20% on transition",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB issued specific circulars for the NFRS transition for BFIs. NRB allowed a phased implementation: Class A and B banks from FY 2071/72, Class C from 2072/73, and Class D from 2073/74. NRB prescribed additional regulatory adjustments on top of NFRS — for example, maintaining general loan loss provisions for regulatory capital purposes even if derecognised under NFRS. NRB also mandated that transition adjustments reducing regulatory capital be phased over three years to prevent sudden capital adequacy ratio deterioration.",
		sebon: "SEBON required all listed entities to adopt NFRS by FY 2075/76 (2018/19). SEBON issued circulars mandating that entities publish both Nepal GAAP and NFRS financial statements in the transition year for comparability. SEBON reviewed the opening NFRS balance sheets of listed entities to ensure compliance with NFRS 1 reconciliation requirements. Entities that failed to transition by the deadline faced penalties including trading suspension warnings.",
		ird: "IRD maintained the Income Tax Act 2058 framework throughout the NFRS transition. Transition adjustments — such as deemed cost revaluation of PPE — do not create taxable income or deductible expenses under the Income Tax Act. IRD issued clarifications that NFRS adoption does not change the basis of taxation, and entities must continue maintaining tax books based on Income Tax Act rules. Deferred tax assets/liabilities arising from transition adjustments must be recognised under NAS 12.",
	},

	timeline: [
		{ date: "Jan 2004", label: "IFRS 1 Effective", description: "IFRS 1 became effective globally, replacing SIC-8" },
		{ date: "Jul 2014", label: "BFI Transition Begins", description: "Class A and B banks began transitioning to NFRS from 1 Shrawan 2071 BS" },
		{ date: "Jul 2018", label: "Full NFRS Adoption", description: "All entities required to adopt NFRS from 1 Shrawan 2075 BS, with NFRS 1 governing first-time adoption" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 1, no carve-outs. Most entities have completed transition", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Determine the Date of Transition",
			coreQuestion: "What is the beginning of the earliest comparative period that will be presented in the first NFRS financial statements?",
			nepalExample: "Muktinath Bikas Bank's first NFRS financial statements are for FY 2072/73 (ending Ashad 2073). The entity presents one year of comparatives. The date of transition is 1 Shrawan 2071 (mid-July 2014). An opening NFRS balance sheet must be prepared at this date.",
			paraRef: "IFRS 1.6–7",
		},
		{
			number: 2,
			name: "Apply NFRS Retrospectively with Mandatory Exceptions",
			coreQuestion: "Which standards must be applied retrospectively, and which mandatory exceptions prevent retrospective application?",
			nepalExample: "Prabhu Bank applies all NFRSs retrospectively to the opening balance sheet, except: (a) estimates — the bank cannot revise loan loss estimates using information obtained after the transition date, and (b) derecognition — financial assets derecognised before the transition date under Nepal GAAP are not re-recognised even if they would qualify under NFRS 9.",
			paraRef: "IFRS 1.13–17, B2–B5",
		},
		{
			number: 3,
			name: "Elect Optional Exemptions",
			coreQuestion: "Which optional exemptions does the entity elect to simplify transition?",
			nepalExample: "Nepal Lever Ltd (FMCG manufacturer) elects: (a) deemed cost for its Hetauda factory land at NPR 42 crore (fair value) vs historical cost of NPR 85 lakh; (b) cumulative translation differences reset to zero for its Indian marketing subsidiary; (c) designation of previously recognised financial instruments at fair value through profit or loss. Each election is irrevocable and disclosed in notes.",
			paraRef: "IFRS 1.18, D1–D35",
		},
		{
			number: 4,
			name: "Derecognise Items Not Qualifying Under NFRS",
			coreQuestion: "Are there assets or liabilities recognised under Nepal GAAP that fail NFRS recognition criteria?",
			nepalExample: "Sagarmatha Insurance had deferred revenue expenditure of NPR 1,80 lakh (marketing costs capitalised under Nepal GAAP). Under NFRS, these must be expensed. Also, a general catastrophe provision of NPR 5,00,00,000 is derecognised because it does not meet the NAS 37 criteria for a provision (no present obligation from a past event). Both adjustments reduce opening retained earnings.",
			paraRef: "IFRS 1.10–11",
		},
		{
			number: 5,
			name: "Prepare Reconciliation Disclosures",
			coreQuestion: "How does equity and total comprehensive income under Nepal GAAP reconcile to NFRS?",
			nepalExample: "Nepal Investment Bank discloses: equity under Nepal GAAP at transition date NPR 14,20 crore. Adjustments: loan impairment remeasurement (NPR -3,50 crore), employee benefit actuarial remeasurement (NPR -85 lakh), deemed cost of land (NPR +8,40 crore), deferred tax on adjustments (NPR -1,20 crore), derecognition of regulatory reserves (NPR +2,10 crore). Equity under NFRS: NPR 19,15 crore. Each line item is explained in the notes.",
			paraRef: "IFRS 1.23–28",
		},
	],

	inlineExamples: {
		deemedCostElection: {
			title: "Bottlers Nepal — Deemed Cost Election for Factory Land",
			context: "Bottlers Nepal (Terai) Ltd is preparing its opening NFRS balance sheet at 1 Shrawan 2074 BS. The entity owns factory land in Bharatpur purchased in 2048 BS (1991) for NPR 22 lakh. A certified valuer assesses the current fair value at NPR 18,50,00,000. The entity elects to use fair value as deemed cost under NFRS 1.D5. The entity also owns factory buildings with Nepal GAAP net book value of NPR 3,40,00,000 and fair value of NPR 5,20,00,000 — management elects deemed cost for buildings too.",
			steps: [
				"Step 1 — Identify assets eligible for deemed cost: Land (NPR 22,00,000 historical cost vs NPR 18,50,00,000 fair value) and Factory Building (NPR 3,40,00,000 NBV vs NPR 5,20,00,000 fair value).",
				"Step 2 — Measure at fair value as deemed cost at the transition date: Land NPR 18,50,00,000 and Building NPR 5,20,00,000. The deemed cost replaces the previous carrying amount entirely.",
				"Step 3 — Calculate the adjustment to retained earnings: Land uplift = NPR 18,50,00,000 - NPR 22,00,000 = NPR 18,28,00,000. Building uplift = NPR 5,20,00,000 - NPR 3,40,00,000 = NPR 1,80,00,000. Total credit to opening retained earnings (pre-tax) = NPR 20,08,00,000.",
				"Step 4 — Recognise deferred tax liability: The uplift creates a taxable temporary difference. Deferred tax at 25% = NPR 20,08,00,000 x 25% = NPR 5,02,00,000. Net impact on retained earnings = NPR 15,06,00,000.",
				"Step 5 — Disclose: The notes must disclose the election of deemed cost, the fair value used, the carrying amount under Nepal GAAP, and the impact on retained earnings. The valuation report must be from an NRB/SEBON-approved valuer.",
			],
			journalEntries: [
				"Land revaluation: Dr Land NPR 18,28,00,000 / Cr Retained Earnings (NFRS Transition Adjustment) NPR 18,28,00,000.",
				"Building revaluation: Dr Building NPR 1,80,00,000 / Cr Retained Earnings (NFRS Transition Adjustment) NPR 1,80,00,000.",
				"Deferred tax on deemed cost uplift: Dr Retained Earnings (NFRS Transition Adjustment) NPR 5,02,00,000 / Cr Deferred Tax Liability NPR 5,02,00,000.",
			],
			difficulty: "pro",
		},
		loanImpairmentTransition: {
			title: "Prabhu Bank — Loan Impairment Transition Adjustment",
			context: "Prabhu Bank Ltd is transitioning to NFRS at 1 Shrawan 2071 BS. Under Nepal GAAP, the bank maintained loan loss provisions as per NRB Directive 2 — a rules-based approach with prescribed percentages (1% for pass, 5% for substandard, 25% for doubtful, 100% for loss). Total NRB-mandated provisions were NPR 4,80 crore on a gross loan portfolio of NPR 52,00 crore. Under NFRS 9, the bank must apply the expected credit loss (ECL) model. The ECL assessment determines that total impairment allowance should be NPR 7,15 crore — significantly higher because ECL captures forward-looking credit deterioration, particularly in the real estate and margin lending portfolios.",
			steps: [
				"Step 1 — Identify the gap: Nepal GAAP provisions NPR 4,80,00,00,000 vs NFRS 9 ECL NPR 7,15,00,00,000. Additional provision required = NPR 2,35,00,00,000.",
				"Step 2 — Apply the mandatory exception for estimates: The entity cannot use hindsight. The ECL at the transition date must be calculated using information available at that date — not information obtained subsequently about actual defaults.",
				"Step 3 — Adjust the opening balance sheet: Increase loan loss allowance by NPR 2,35 crore. Debit retained earnings NPR 2,35,00,00,000 / Credit Allowance for Impairment Losses NPR 2,35,00,00,000.",
				"Step 4 — Recognise deferred tax asset on the additional provision: NPR 2,35,00,00,000 x 30% (BFI tax rate) = NPR 70,50,00,000. Dr Deferred Tax Asset / Cr Retained Earnings.",
				"Step 5 — NRB regulatory capital impact: NRB allows phasing of transition adjustments over 3 years for regulatory capital calculation. Year 1: NPR 78,33,00,000, Year 2: NPR 78,33,00,000, Year 3: NPR 78,34,00,000. This prevents a sudden drop in the Capital Adequacy Ratio below the NRB minimum of 11%.",
			],
			journalEntries: [
				"Additional loan loss provision: Dr Retained Earnings (NFRS Transition) NPR 2,35,00,00,000 / Cr Allowance for Impairment Losses NPR 2,35,00,00,000.",
				"Deferred tax on additional provision: Dr Deferred Tax Asset NPR 70,50,00,000 / Cr Retained Earnings (NFRS Transition) NPR 70,50,00,000.",
				"Net impact on opening retained earnings: reduction of NPR 1,64,50,00,000 (NPR 2,35 crore less deferred tax benefit of NPR 70.5 lakh = NPR 1,64.5 crore net).",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "NFRS 1 questions almost always require you to identify which adjustments hit opening retained earnings. Remember: retrospective application means restating the opening balance sheet as if NFRS had always applied — unless a mandatory exception or optional exemption modifies this." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates confuse mandatory exceptions with optional exemptions. Mandatory exceptions CANNOT be overridden (e.g., estimates, derecognition). Optional exemptions are a CHOICE the entity makes and must disclose. Know at least five of each for the exam." },
			{ source: "Exam Technique", tip: "When preparing the opening balance sheet, always work in a structured table: Asset/Liability, Nepal GAAP amount, NFRS adjustment (with brief explanation), NFRS amount. This systematic approach prevents missed items and earns method marks even if individual figures are wrong." },
			{ source: "Nepal-specific", tip: "Nepal's phased transition is unique. BFIs transitioned from 2014/15, other listed entities from 2018/19. In exam questions involving Nepali entities, identify the correct transition date based on entity type. Class A banks had a 4-year head start over manufacturing companies." },
			{ source: "Recurring Pattern", tip: "Deemed cost for PPE is the most commonly tested optional exemption. The entity can choose fair value or a previous GAAP revaluation as deemed cost. This is an item-by-item election — the entity can use deemed cost for land but keep historical cost for machinery. Always compute the deferred tax impact of the uplift." },
			{ source: "Exam Technique", tip: "The reconciliation disclosure is high-marks territory. Practice preparing a two-column reconciliation (Nepal GAAP equity vs NFRS equity) with at least 6–8 adjustment lines. Common adjustments: PPE deemed cost, employee benefits (actuarial), loan impairment, deferred tax, derecognition of deferred revenue expenditure, and lease remeasurement." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Using hindsight to revise estimates at the transition date",
			description: "Entities use information available after the transition date to revise estimates in the opening NFRS balance sheet. NFRS 1 contains a mandatory exception: estimates at the transition date must reflect conditions existing at that date. For example, a BFI cannot use 2016 default data to recalculate 2014 loan loss provisions. This violation overstates or understates the transition adjustment.",
			sector: "Banking",
		},
		{
			title: "Applying deemed cost to all PPE without item-by-item assessment",
			description: "Entities apply deemed cost as a blanket election to all items of PPE, including items where historical cost is readily available and reliable (e.g., vehicles purchased two years before transition). The deemed cost exemption should be applied selectively where it genuinely simplifies transition — not as a tool to inflate asset values across the board.",
			sector: "Manufacturing",
		},
		{
			title: "Failing to derecognise deferred revenue expenditure",
			description: "Under Nepal GAAP, entities commonly capitalised advertising, preliminary expenses, and share issue costs as deferred revenue expenditure. Under NFRS, these items do not meet the asset recognition criteria and must be derecognised against opening retained earnings. Many entities carried forward these balances into their first NFRS financial statements without adjustment.",
			sector: "Listed Companies",
		},
		{
			title: "Incomplete reconciliation disclosures",
			description: "Entities provide a summary reconciliation showing only the net adjustment to equity without line-by-line explanations. NFRS 1 requires sufficient detail to enable users to understand the material adjustments made to the balance sheet and income statement. Regulators have flagged Nepali entities for inadequate transition disclosures.",
			sector: "Listed Companies",
		},
		{
			title: "NRB regulatory provisions maintained in NFRS financial statements",
			description: "BFIs continue to recognise NRB-mandated general loan loss provisions (e.g., 1% on all pass loans) as liabilities in the NFRS balance sheet even though they do not meet the NAS 37 or NFRS 9 recognition criteria. These provisions must be derecognised for NFRS purposes and maintained only in regulatory capital computations reported separately to NRB.",
			sector: "Banking",
		},
	],

	relatedStandards: [
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "NFRS 1 transition adjustments are not changes in accounting policy under NAS 8 — they are governed exclusively by NFRS 1 in the first adoption year",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "The deemed cost exemption under NFRS 1.D5 directly affects opening PPE balances measured under NAS 16",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Transition from incurred-loss provisioning under Nepal GAAP to the expected credit loss model under NFRS 9 created the largest transition adjustments for BFIs",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Deferred tax assets and liabilities must be recognised on all transition adjustments, including deemed cost uplifts and additional loan impairment provisions",
		},
	],
};
