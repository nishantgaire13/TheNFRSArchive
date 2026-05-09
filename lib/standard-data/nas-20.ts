import type { StandardPageData } from "./types";

export const nas20: StandardPageData = {
	slug: "nas-20",
	nfrsNumber: "NAS 20",
	ifrsEquivalent: "IAS 20",
	title: "Accounting for Government Grants and Disclosure of Government Assistance",
	topic: "revenue",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1984-01-01",
	status: "aligned",
	heroMotif: "grant",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA TX","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Interest Subsidy Grants",
				ifrs: "Government grants recognised when reasonable assurance of compliance and receipt (IAS 20.7)",
				nfrs: "Same principle. NRB operates refinance facilities providing interest subsidies to BFIs for priority sector lending (agriculture, SMEs, women entrepreneurs)",
				nepalImpact: "BFIs receive interest subsidies at 2–5% below market rate on priority sector loans. Must recognise subsidy income systematically over the loan period, not on cash receipt basis",
				significance: "high",
			},
			{
				topic: "Agriculture Subsidies",
				ifrs: "Grants related to income recognised as income over the periods matching related costs (IAS 20.12)",
				nfrs: "Nepal government provides fertiliser subsidies, seed subsidies, and irrigation grants to farmers and agribusinesses through district agriculture offices",
				nepalImpact: "Tea estates, sugarcane farms, and agribusinesses receiving government subsidies must match grant income against related costs. Many recognise grants on receipt rather than matching basis",
				significance: "medium",
			},
			{
				topic: "Grants Related to Assets",
				ifrs: "Two methods permitted: deduct from asset cost (net method) or recognise as deferred income (gross method) (IAS 20.24–28)",
				nfrs: "Same choice. Hydropower projects receiving government viability gap funding typically use the deferred income approach to maintain transparency",
				nepalImpact: "Choice of method affects reported asset values, depreciation charges, and return on assets. No mandatory method — entities choose, creating comparability issues within the same sector",
				significance: "medium",
			},
			{
				topic: "Below-Market-Rate Loans",
				ifrs: "Benefit of below-market-rate government loan measured as difference between proceeds and fair value of loan (IAS 20.10A)",
				nfrs: "Same treatment. Nepal government provides concessional loans for hydropower, tourism, and export-oriented manufacturing at below-market rates",
				nepalImpact: "Concessional loans from Nepal Industrial Development Corporation (NIDC) or refinance facilities at 2–4% vs market 10–12% create significant grant components that entities often fail to recognise separately",
				significance: "medium",
			},
			{
				topic: "COVID-Era Subsidies",
				ifrs: "Same recognition framework applies to emergency subsidies if conditions are met",
				nfrs: "Nepal government provided wage subsidies, loan moratoriums, and tax deferrals during COVID-19. NRB directed BFIs to defer interest collection and provide relief",
				nepalImpact: "COVID-era subsidies created classification challenges — some were grants (wage subsidies), others were loan modifications (moratoriums under NFRS 9), and some were tax deferrals (NAS 12). Entities mixed up the accounting treatments",
				significance: "low",
			},
			{
				topic: "Grant Repayment",
				ifrs: "Repayment of grant treated as change in accounting estimate (IAS 20.32). Asset grants: increase carrying amount or reduce deferred income. Income grants: offset first against unamortised deferred credit, then expense",
				nfrs: "Same treatment. Nepal government may claw back grants if conditions are violated (e.g., hydropower project not completed within stipulated time, agriculture output targets not met)",
				nepalImpact: "Grant clawback is rare but possible. Entities must assess the probability of meeting conditions at each reporting date and adjust deferred income or asset carrying amounts if conditions are no longer expected to be met",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB operates refinance facilities providing concessional funding to BFIs for priority sector lending. BFIs receive interest subsidies on these loans and must account for the subsidy as a government grant. NRB also provides subsidised lending through directed credit programmes for agriculture, hydropower, and SME sectors.",
		sebon: "SEBON requires listed entities to separately disclose government grants received, their nature and conditions, and the accounting method adopted (gross vs net for asset-related grants). Material grants must be disclosed individually with unfulfilled conditions.",
		ird: "Government grants are generally taxable income unless specifically exempted by the Income Tax Act 2058. Agricultural income (including subsidised agricultural income) is exempt up to NPR 2,00,000 for individuals. Corporate recipients of government grants include them in assessable income.",
	},

	timeline: [
		{ date: "Jan 1984", label: "IAS 20 Effective", description: "Original standard on government grants" },
		{ date: "Jan 2009", label: "Below-Market Loan Amendment", description: "IAS 20.10A added — recognise benefit of below-market government loans" },
		{ date: "Jul 2018", label: "NAS 20 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Grant",
			coreQuestion: "Is there a transfer of resources from government in return for compliance with conditions?",
			nepalExample: "Koshi Hydropower receives NPR 5 crore viability gap funding from Investment Board Nepal for a rural hydropower project. The grant requires completion of a 5 MW plant within 3 years and supply of 10% electricity to the local grid at subsidised rates.",
			paraRef: "IAS 20.3",
		},
		{
			number: 2,
			name: "Assess Recognition Conditions",
			coreQuestion: "Is there reasonable assurance of compliance with conditions and that the grant will be received?",
			nepalExample: "Koshi Hydropower assesses: construction is on track (60% complete), financing secured, local grid connection feasible. Reasonable assurance exists that conditions will be met and grant received. Recognise the grant.",
			paraRef: "IAS 20.7",
		},
		{
			number: 3,
			name: "Classify as Asset-Related or Income-Related",
			coreQuestion: "Is the grant for purchasing/constructing an asset or for compensating expenses?",
			nepalExample: "The NPR 5 crore grant is for constructing the hydropower plant (asset-related). An NRB interest subsidy of 3% on a priority sector loan would be income-related (compensates for interest expense).",
			paraRef: "IAS 20.12, 24",
		},
		{
			number: 4,
			name: "Apply Appropriate Accounting Method",
			coreQuestion: "Deferred income method or deduct from asset cost?",
			nepalExample: "Koshi Hydropower uses deferred income method: Dr Cash NPR 5,00,00,000 / Cr Deferred Grant Income NPR 5,00,00,000. The deferred income is released to P&L over the asset's useful life (25 years) = NPR 20,00,000/year, matching the depreciation pattern.",
			paraRef: "IAS 20.24–28",
		},
		{
			number: 5,
			name: "Disclose Grant Details",
			coreQuestion: "Has the entity disclosed the nature, extent, and unfulfilled conditions of grants?",
			nepalExample: "Koshi Hydropower discloses: NPR 5 crore grant from Investment Board Nepal, deferred income method adopted, NPR 3 crore remaining unamortised balance, condition to supply 10% electricity at subsidised rates for 15 years. Also discloses any other forms of government assistance (tax holidays, duty exemptions) that are not grants.",
			paraRef: "IAS 20.39",
		},
	],

	inlineExamples: {
		assetGrant: {
			title: "Koshi Hydropower — Viability Gap Funding",
			context: "Koshi Hydropower Ltd receives NPR 10,00,00,000 from Investment Board Nepal as viability gap funding for a 5 MW rural hydropower project. Total project cost: NPR 50 crore. Plant useful life: 25 years. The entity elects the deferred income (gross) method.",
			steps: [
				"Step 1 — Recognise grant: Dr Cash NPR 10,00,00,000 / Cr Deferred Grant Income NPR 10,00,00,000.",
				"Step 2 — Capitalise full asset cost: Dr PPE — Hydropower Plant NPR 50,00,00,000 / Cr Cash/Loans NPR 50,00,00,000.",
				"Step 3 — Annual depreciation: NPR 50,00,00,000 ÷ 25 = NPR 2,00,00,000/year.",
				"Step 4 — Annual grant income release: NPR 10,00,00,000 ÷ 25 = NPR 40,00,000/year. Credited to 'Other income' or netted against depreciation.",
				"Step 5 — Net annual cost to P&L: NPR 2,00,00,000 − NPR 40,00,000 = NPR 1,60,00,000. Compare with net method where asset is recorded at NPR 40 crore and depreciated at NPR 1,60,00,000/year — same net P&L effect.",
			],
			journalEntries: [
				"Grant receipt: Dr Cash NPR 10,00,00,000 / Cr Deferred Grant Income (Liability) NPR 10,00,00,000",
				"Annual release: Dr Deferred Grant Income NPR 40,00,000 / Cr Grant Income (P&L) NPR 40,00,000",
				"If net method chosen instead: Dr Cash NPR 10,00,00,000 / Cr PPE NPR 10,00,00,000 (reduce asset to NPR 40 crore)",
			],
			difficulty: "medium",
		},
		interestSubsidy: {
			title: "Everest Finance — NRB Interest Subsidy on Priority Lending",
			context: "Everest Finance Ltd receives NRB refinance for agriculture lending at 3% interest rate (market rate: 11%). It lends NPR 20 crore to farmers at 5% (subsidised). NRB provides the 8% interest differential on the refinance portion. Loan term: 5 years.",
			steps: [
				"Step 1 — Identify grant: NRB provides refinance at 3% vs market rate of 11%. The 8% differential on NPR 20 crore = NPR 1,60,00,000/year interest subsidy.",
				"Step 2 — Below-market-rate loan treatment: loan recognised at fair value. Difference between proceeds and FV = grant. FV of loan at market rate 11% vs contracted 3% creates NPR 6.2 crore PV differential over 5 years.",
				"Step 3 — Grant recognition: NPR 6.2 crore recognised as deferred income, released to P&L over 5 years matching the interest differential.",
				"Step 4 — Annual interest expense: recognise at effective interest rate (market rate 11%), not contractual rate (3%). The difference is offset by grant income release.",
				"Step 5 — Net effect: P&L shows interest expense at 11% and grant income — transparently showing both the market cost of borrowing and the subsidy received.",
			],
			journalEntries: [
				"Loan receipt: Dr Cash NPR 20,00,00,000 / Cr Financial Liability (at fair value) NPR 13,80,00,000 / Cr Deferred Grant Income NPR 6,20,00,000",
				"Annual interest (effective rate): Dr Interest Expense NPR 1,51,80,000 / Cr Financial Liability NPR 91,80,000 / Cr Cash (3% paid) NPR 60,00,000",
				"Annual grant release: Dr Deferred Grant Income NPR 1,24,00,000 / Cr Grant Income NPR 1,24,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Two methods for asset-related grants: (1) deferred income (gross) — asset at full cost, release grant over useful life; (2) deduct from asset (net) — reduced asset cost, lower depreciation. Both produce the same net P&L effect. Know both methods and be able to show they are equivalent." },
			{ source: "Exam Technique", tip: "Recognition timing: grants are recognised when there is reasonable assurance of compliance AND receipt — not when cash is received. If conditions are not yet met, defer recognition regardless of cash position." },
			{ source: "Dec 2023 Examiner Report", tip: "Below-market-rate government loans (IAS 20.10A) are frequently tested. The grant component equals proceeds minus fair value of the loan at market rate. Candidates often forget to measure the loan at fair value initially." },
			{ source: "Recurring Pattern", tip: "Grant repayment: treated as a change in estimate (prospective), not an error correction. For asset grants: increase carrying amount or reduce deferred income balance. For income grants: apply against unamortised credit first, then expense the excess." },
			{ source: "Nepal-specific", tip: "NRB refinance interest subsidies are the most common government grant for BFIs in Nepal. Know the below-market-rate loan accounting: effective interest method at market rate + deferred grant income release." },
			{ source: "Exam Technique", tip: "Government assistance (tax holidays, free technical advice) that cannot be reasonably valued is not a grant — disclose only. Do not confuse government assistance with government grants." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Grants recognised on cash receipt basis",
			description: "Entities recognise government grants as income when cash is received rather than matching them to the related costs or asset useful lives. This front-loads grant income and misstates periodic profit. Grant income must be matched to the expenses or depreciation it is intended to compensate.",
			sector: "Agriculture",
		},
		{
			title: "Below-market-rate loan subsidy not separately recognised",
			description: "Entities account for below-market-rate government loans at their contractual rate without recognising the grant component. The loan should be measured at fair value (market rate), with the difference recognised as deferred grant income.",
			sector: "Hydropower",
		},
		{
			title: "Unfulfilled conditions not assessed at each reporting date",
			description: "Entities recognise grants upfront without reassessing whether conditions are still likely to be met. If a hydropower project falls behind schedule and may not meet the completion deadline, the grant (or portion thereof) may need to be provided for as a potential repayment.",
			sector: "Manufacturing",
		},
		{
			title: "Gross vs net method applied inconsistently within same asset class",
			description: "Entities use deferred income for some grants and deduction from asset cost for others within the same class of assets. NAS 20 requires consistency in method selection to ensure comparability.",
			sector: "Infrastructure",
		},
		{
			title: "Tax implications of grants not considered",
			description: "Entities fail to recognise that government grants are taxable income under Income Tax Act 2058 (unless specifically exempted). The deferred tax impact of grants — particularly where grant income recognition timing differs between NFRS and tax — creates temporary differences.",
			sector: "All Sectors",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Asset-related grants affect the carrying amount of PPE under the net method or create deferred income matched to PPE depreciation under the gross method",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Government grants are not revenue from contracts with customers — NAS 20 applies instead. However, government contracts for services follow NFRS 15",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Below-market-rate government loans are measured at fair value under NFRS 9, with the grant component recognised under NAS 20",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "Grants are generally taxable. Timing differences between grant income recognition under NFRS and tax recognition create temporary differences under NAS 12",
		},
	],
};
