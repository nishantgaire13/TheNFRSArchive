import type { StandardPageData } from "./types";

export const nas39: StandardPageData = {
	slug: "nas-39",
	nfrsNumber: "NAS 39",
	ifrsEquivalent: "IAS 39",
	title: "Financial Instruments: Recognition and Measurement",
	topic: "financial-instruments",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2001-01-01",
	status: "aligned",
	heroMotif: "scales",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned (Superseded by NFRS 9 from 16 July 2021)",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Classification — Four Categories vs Three",
				ifrs: "IAS 39 classified financial assets into four categories based on management intent: FVTPL, HTM, L&R, and AFS. Classification drove measurement (IAS 39.9)",
				nfrs: "Same four-category model applied during NAS 39's effective period (2075–2078 BS). Nepal BFIs classified loan portfolios as L&R, government securities as HTM or AFS, and trading portfolios as FVTPL",
				nepalImpact: "Intent-based classification allowed BFIs to manage earnings through classification choices. Government securities could be HTM (no fair value volatility) or AFS (fair value in OCI) depending on intent — NRB scrutinised reclassifications closely",
				significance: "high",
			},
			{
				topic: "HTM Tainting Provision",
				ifrs: "Selling more than an insignificant amount of HTM investments taints the entire HTM category — all must be reclassified to AFS for two years (IAS 39.9)",
				nfrs: "Same tainting rule. NRB liquidity requirements sometimes forced BFIs to sell government securities classified as HTM, inadvertently triggering tainting. This was a major pain point in Nepal's banking sector",
				nepalImpact: "BFIs caught between NRB liquidity requirements (sell bonds to meet CRR/SLR) and NAS 39 tainting rules. Tainting reclassified entire HTM portfolio to AFS, introducing P&L/OCI volatility from fair value changes on government bonds",
				significance: "high",
			},
			{
				topic: "Incurred Loss Impairment Model",
				ifrs: "Impairment recognised only when objective evidence of a loss event existed — trigger-based, backward-looking (IAS 39.58–62). Expected future losses not recognised until loss event occurred",
				nfrs: "Same incurred loss model. In Nepal, this meant BFIs recognised loan losses only after borrower default or significant delinquency. Losses during economic stress (earthquake 2015, COVID-19) were recognised 'too little, too late'",
				nepalImpact: "Transition from incurred loss (NAS 39) to expected credit loss (NFRS 9) increased aggregate banking sector provisions by NPR 20–30 billion. The ECL model captures forward-looking information and macroeconomic scenarios",
				significance: "high",
			},
			{
				topic: "AFS Reserve — Recycling to P&L",
				ifrs: "Unrealised gains/losses on AFS instruments recognised in OCI (AFS reserve). On disposal, cumulative OCI recycled to P&L. AFS equity impairment not reversed through P&L (IAS 39.67–70)",
				nfrs: "Same treatment. Nepal BFIs held significant equity portfolios as AFS. NEPSE price movements created volatile AFS reserves. On selling shares, recycling could generate large P&L gains — used by some BFIs to manage quarterly profits",
				nepalImpact: "AFS recycling became a tool for earnings management in Nepal's banking sector. BFIs could time share sales to recognise recycled gains in weaker quarters. NFRS 9 eliminated recycling for equity instruments elected at FVOCI",
				significance: "medium",
			},
			{
				topic: "Hedge Accounting — 80–125% Effectiveness Band",
				ifrs: "Hedge accounting required prospective and retrospective effectiveness within 80%–125% band. Three hedge types: fair value, cash flow, net investment (IAS 39.88–102)",
				nfrs: "Same rules. Virtually no Nepali entity applied NAS 39 hedge accounting — derivative markets are nascent, NRB restricted derivatives to plain-vanilla forwards and swaps for BFIs",
				nepalImpact: "Hedge accounting was academic in Nepal during NAS 39 era. NFRS 9's simplified hedge accounting (no 80–125% test, risk component hedging) may encourage future adoption as derivative markets develop",
				significance: "low",
			},
			{
				topic: "Embedded Derivative Bifurcation",
				ifrs: "Embedded derivatives not closely related to host contract must be bifurcated and measured at FVTPL, unless entire hybrid instrument is at FVTPL (IAS 39.10–13)",
				nfrs: "Same bifurcation requirement. Relevant in Nepal for convertible debentures, structured deposits with equity-linked returns. NFRS 9 simplified this for financial asset hosts — no bifurcation, classify whole instrument",
				nepalImpact: "Bifurcation required fair value measurement of embedded derivatives — often impossible in Nepal's thin markets where pricing models and observable inputs were limited. NFRS 9's elimination of bifurcation for financial assets was widely welcomed",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB issued transitional circulars for NAS 39 to NFRS 9 migration. BFIs were allowed phased recognition of additional ECL provisions over two years (FY 2078/79 and 2079/80) for capital adequacy purposes. NRB prescribed minimum impairment percentages under directive-based provisioning that sometimes exceeded NAS 39 incurred loss provisions. Dual reporting (NRB directive-based and NAS 39/NFRS 9) was required during transition.",
		sebon: "SEBON required listed BFIs to disclose the impact of transitioning from NAS 39 to NFRS 9 in their annual reports. Reclassification tables showing migration of financial assets from NAS 39 categories to NFRS 9 categories were mandatory disclosures. Material changes in impairment provisions had to be separately disclosed.",
		ird: "IRD scrutinised the NAS 39 to NFRS 9 transition carefully — additional ECL provisions under NFRS 9 were significantly higher than incurred loss provisions, creating larger deductible temporary differences and deferred tax assets. IRD's acceptance of ECL-based provisions for tax deduction purposes was a contentious issue during transition.",
	},

	timeline: [
		{ date: "Jan 2001", label: "IAS 39 Effective", description: "IAS 39 (revised 2000) effective globally" },
		{ date: "Jul 2014", label: "IFRS 9 Published", description: "IFRS 9 published as replacement for IAS 39" },
		{ date: "Jul 2018", label: "NAS 39 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "Jul 2021", label: "NAS 39 Superseded", description: "NFRS 9 replaces NAS 39 (1 Shrawan 2078 BS)", highlight: true },
		{ date: "2026", label: "Current", description: "NAS 39 fully superseded — NFRS 9 applies for all periods" },
	],

	steps: [
		{
			number: 1,
			name: "Classify Financial Assets into Four Categories",
			coreQuestion: "Based on management intent and instrument characteristics, which of the four categories applies?",
			nepalExample: "Machhapuchchhre Bank classifies: listed equity bought for short-term trading = FVTPL; NRB development bonds intended to hold until maturity = HTM; customer loans and advances = L&R; listed equity not held for trading and not HTM/L&R = AFS. Classification determines measurement.",
			paraRef: "IAS 39.9",
		},
		{
			number: 2,
			name: "Initial Recognition at Fair Value",
			coreQuestion: "What is the fair value at initial recognition, and are transaction costs included?",
			nepalExample: "Machhapuchchhre Bank buys NPR 100 crore government bonds at 98 (2% discount) with NPR 0.1 crore brokerage. FVTPL: recognise at NPR 98 crore, expense NPR 0.1 crore brokerage. HTM: recognise at NPR 98 crore + NPR 0.1 crore = NPR 98.1 crore, amortise discount over bond life using EIR.",
			paraRef: "IAS 39.43",
		},
		{
			number: 3,
			name: "Subsequent Measurement by Category",
			coreQuestion: "How is each category measured at reporting date?",
			nepalExample: "At Ashad-end: FVTPL trading shares = NEPSE closing price (changes in P&L). HTM bonds = amortised cost using EIR (discount amortised, interest accrued). L&R loans = amortised cost (principal + accrued interest − impairment). AFS shares = NEPSE closing price (unrealised change in OCI/AFS reserve).",
			paraRef: "IAS 39.46",
		},
		{
			number: 4,
			name: "Test for Impairment — Incurred Loss Model",
			coreQuestion: "Is there objective evidence that a loss event has occurred?",
			nepalExample: "Machhapuchchhre Bank's loan portfolio: borrower Himalayan Cement defaults on 3 consecutive instalments (objective evidence). Individual assessment: outstanding NPR 5 crore, estimated recoverable (collateral + expected payments) NPR 3.5 crore. Impairment: NPR 1.5 crore. For performing portfolio: use historical loss rates (2–3%) applied to groups with similar risk characteristics.",
			paraRef: "IAS 39.58–62",
		},
		{
			number: 5,
			name: "Transition to NFRS 9 — Reclassify and Remeasure",
			coreQuestion: "How do NAS 39 categories map to NFRS 9?",
			nepalExample: "Machhapuchchhre Bank transition: L&R loans (business model = hold to collect, SPPI test passed) → NFRS 9 amortised cost. HTM bonds → amortised cost (same outcome). AFS equity → FVOCI with irrevocable election (no recycling). AFS debt → amortised cost or FVOCI depending on business model. FVTPL trading → FVTPL (unchanged). ECL provision increases by NPR 1.2 billion vs NAS 39 incurred loss.",
			paraRef: "IFRS 9.7.2",
		},
	],

	inlineExamples: {
		transitionImpact: {
			title: "Machhapuchchhre Bank — NAS 39 to NFRS 9 Transition Disclosure",
			context: "Machhapuchchhre Bank Ltd, a Class A commercial bank, transitions from NAS 39 to NFRS 9 on 1 Shrawan 2078 (16 July 2021). The bank must prepare a reconciliation table showing reclassification of financial assets and the impact of moving from incurred loss to ECL impairment. Key portfolio: total financial assets NPR 150,00,00,00,000 (NPR 150 arba).",
			steps: [
				"Step 1 — Reclassification: L&R loans NPR 120 arba → amortised cost (SPPI test passed for standard loan agreements). HTM government bonds NPR 15 arba → amortised cost. AFS equity NPR 5 arba → FVOCI (irrevocable election). AFS government bonds NPR 8 arba → amortised cost (business model: hold to collect). FVTPL trading NPR 2 arba → FVTPL (no change).",
				"Step 2 — ECL calculation (Stage 1 — performing): 12-month ECL on performing loans using PD × LGD × EAD. Base PD derived from NRB sector-wise default data. Stage 1 provision: NPR 1.5 arba (vs NPR 0.3 arba general provision under NAS 39).",
				"Step 3 — ECL calculation (Stage 2 — SICR): Loans with significant increase in credit risk (30+ DPD, sector distress, restructured). Lifetime ECL applied. Stage 2 provision: NPR 2.8 arba (vs NPR 1.2 arba watch-list provision under NAS 39).",
				"Step 4 — ECL calculation (Stage 3 — credit-impaired): Non-performing loans. Lifetime ECL on gross carrying amount. Stage 3 provision: NPR 4.5 arba (vs NPR 3.8 arba specific provision under NAS 39 — difference due to forward-looking scenarios).",
				"Step 5 — Total transition impact: ECL provisions NPR 8.8 arba vs NAS 39 provisions NPR 5.3 arba. Additional provision of NPR 3.5 arba recognised in opening retained earnings. NRB allows phased capital adequacy impact over two years.",
			],
			journalEntries: [
				"Transition adjustment: Dr Retained Earnings NPR 3,50,00,00,000 / Cr Expected Credit Loss Provision NPR 3,50,00,00,000",
				"Reclassification of AFS reserve: Dr AFS Reserve (OCI) NPR 85,00,00,000 / Cr FVOCI Reserve NPR 85,00,00,000",
				"Deferred tax on additional ECL: Dr Deferred Tax Asset NPR 87,50,00,000 / Cr Retained Earnings NPR 87,50,00,000 (at 25% tax rate)",
			],
			difficulty: "pro",
		},
		afsEquityImpairment: {
			title: "Nepal Bank — AFS Equity Impairment under NAS 39",
			context: "Nepal Bank Ltd holds 500,000 shares of Himalayan General Insurance Company as AFS, purchased at NPR 1,000 per share (total cost: NPR 50,00,00,000). NEPSE price at reporting date: NPR 600 per share. The price has been below cost for 18 months. Management must assess whether impairment is required under NAS 39.",
			steps: [
				"Step 1 — Objective evidence test: Significant or prolonged decline in fair value below cost is objective evidence of impairment for equity instruments (IAS 39.61). Price at NPR 600 vs cost NPR 1,000 = 40% decline, sustained for 18 months. Both significant (>20%) and prolonged (>12 months) — impairment required.",
				"Step 2 — Carrying amount: Cost NPR 50,00,00,000. Cumulative fair value loss in OCI (AFS reserve): NPR 20,00,00,000 (500,000 × NPR 400 decline).",
				"Step 3 — Impairment recognition: Reclassify cumulative loss from OCI to P&L: NPR 20,00,00,000.",
				"Step 4 — Key point: Under NAS 39, impairment of AFS equity instruments is NEVER reversed through P&L. If the share price later recovers to NPR 800, the NPR 10,00,00,000 recovery goes to OCI — never P&L. This is different from AFS debt instruments where reversal through P&L is permitted.",
			],
			journalEntries: [
				"Impairment reclassification: Dr Impairment Loss (P&L) NPR 20,00,00,000 / Cr AFS Reserve (OCI) NPR 20,00,00,000",
				"If price recovers to NPR 800: Dr AFS Investment NPR 10,00,00,000 / Cr AFS Reserve (OCI) NPR 10,00,00,000 — NO P&L impact",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Four NAS 39 categories: FVTPL (fair value, P&L), HTM (amortised cost), L&R (amortised cost), AFS (fair value, OCI with recycling). Under NFRS 9, these collapse to three: amortised cost, FVOCI, FVTPL — driven by business model and SPPI test, not intent." },
			{ source: "Exam Technique", tip: "NAS 39 impairment = incurred loss (backward-looking, trigger event required). NFRS 9 impairment = expected credit loss (forward-looking, no trigger needed). The shift from 'has a loss occurred?' to 'is a loss expected?' is the conceptual core tested in exams." },
			{ source: "Dec 2023 Examiner Report", tip: "AFS equity impairment under NAS 39 is never reversed through P&L — only through OCI. AFS debt impairment CAN be reversed through P&L if conditions improve. Candidates frequently miss this asymmetry." },
			{ source: "Nepal-specific", tip: "HTM tainting was a real-world issue for Nepali BFIs: NRB liquidity requirements forced bond sales that triggered reclassification of entire HTM portfolios. Understand the two-year tainting period and its exceptions (maturity within 3 months, nearly all principal repaid, isolated non-recurring event beyond entity's control)." },
			{ source: "Recurring Pattern", tip: "Transaction costs: included in initial measurement for HTM, L&R, and AFS. Excluded (expensed immediately) for FVTPL. Under NFRS 9: included for amortised cost and FVOCI, excluded for FVTPL. Same principle, different labels." },
			{ source: "Exam Technique", tip: "NAS 39 to NFRS 9 transition: show the reclassification table (old category → new category), quantify the ECL impact (additional provisions), and identify the equity impact (retained earnings adjustment). This three-part structure scores well." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Incurred loss model delays impairment recognition",
			description: "Under NAS 39, losses were only recognised when objective evidence of a loss event existed. For Nepal's banking sector, this meant loan losses during economic stress (earthquake 2015, COVID-19) were recognised 'too little, too late.' The ECL model under NFRS 9 addresses this by requiring forward-looking provisioning.",
			sector: "Banking",
		},
		{
			title: "HTM tainting from forced liquidity sales",
			description: "NRB liquidity requirements (CRR/SLR) sometimes forced BFIs to sell government securities classified as HTM. Under NAS 39, this triggered tainting — the entire HTM portfolio had to be reclassified to AFS for two years, introducing fair value volatility. BFIs that did not anticipate this were caught with significant AFS fair value changes in their financial statements.",
			sector: "Banking",
		},
		{
			title: "AFS reserve used for earnings management",
			description: "BFIs could time the sale of AFS equity investments to recycle accumulated OCI gains into P&L in quarters where other income was weak. While technically compliant with NAS 39, this practice obscured underlying operating performance. NFRS 9 eliminated recycling for equity instruments elected at FVOCI.",
			sector: "Banking",
		},
		{
			title: "Embedded derivative bifurcation ignored",
			description: "Convertible debentures and structured deposits with equity-linked returns contained embedded derivatives that NAS 39 required to be bifurcated and separately measured at FVTPL. Many entities ignored this requirement due to the difficulty of valuing embedded derivatives in Nepal's thin markets, leading to material measurement errors.",
			sector: "Listed Companies",
		},
		{
			title: "Transition ECL provisions inadequately calculated",
			description: "The NAS 39 to NFRS 9 transition required forward-looking ECL models incorporating macroeconomic scenarios, probability of default (PD), loss given default (LGD), and exposure at default (EAD). Some BFIs used oversimplified models without proper macroeconomic overlays, resulting in understated ECL provisions that required subsequent correction.",
			sector: "Banking",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "NFRS 9 superseded NAS 39 from 16 July 2021. Understanding NAS 39 is essential for interpreting historical financial statements and the NFRS 9 transition",
		},
		{
			slug: "nfrs-7",
			nfrsNumber: "NFRS 7",
			title: "Financial Instruments: Disclosures",
			reason: "NFRS 7 provides disclosure requirements that accompanied NAS 39's recognition and measurement rules — risk disclosures, fair value hierarchy, sensitivity analysis",
		},
		{
			slug: "nfrs-13",
			nfrsNumber: "NFRS 13",
			title: "Fair Value Measurement",
			reason: "Fair value measurement for FVTPL and AFS instruments under NAS 39 followed NFRS 13's hierarchy and measurement guidance",
		},
		{
			slug: "nas-32",
			nfrsNumber: "NAS 32",
			title: "Financial Instruments: Presentation",
			reason: "NAS 32 addresses presentation and offsetting of financial instruments — works alongside NAS 39's recognition and measurement rules",
		},
	],
};
