import type { StandardPageData } from "./types";

export const nas23: StandardPageData = {
	slug: "nas-23",
	nfrsNumber: "NAS 23",
	ifrsEquivalent: "IAS 23",
	title: "Borrowing Costs",
	topic: "assets",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2009-01-01",
	status: "aligned",
	heroMotif: "interest",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Qualifying Asset Definition",
				ifrs: "An asset that necessarily takes a substantial period of time to get ready for its intended use or sale. No specific time threshold prescribed (IAS 23.5)",
				nfrs: "Same definition. In Nepal, hydropower projects (5–10 years construction), large real estate developments, and infrastructure projects are the primary qualifying assets. NRB does not define a minimum period but expects BFIs to apply professional judgement",
				nepalImpact: "Hydropower dominates — Upper Tamakoshi (456 MW, 10+ years), Arun III (900 MW, 7 years). Even mid-sized projects like 25–50 MW run-of-river schemes take 3–5 years. Manufacturing plants and hotel construction also qualify",
				significance: "high",
			},
			{
				topic: "Capitalisation Rate for General Borrowings",
				ifrs: "Weighted average of borrowing costs on general borrowings outstanding during the period, excluding specific borrowings for qualifying assets (IAS 23.14)",
				nfrs: "Same calculation. Nepal's high interest rate environment (base rate 8–12% for commercial banks) means capitalised borrowing costs are substantial. BFIs lending to hydropower must assess whether the borrower correctly computes the capitalisation rate",
				nepalImpact: "With base rates at 8–10% and spreads of 2–4%, effective borrowing rates of 10–14% are common. On a NPR 50 crore general borrowing pool, the capitalisation rate calculation materially affects project cost and future depreciation",
				significance: "high",
			},
			{
				topic: "Commencement of Capitalisation",
				ifrs: "Capitalisation begins when: expenditures are being incurred, borrowing costs are being incurred, and activities necessary to prepare the asset are in progress (IAS 23.17)",
				nfrs: "Same three conditions. In Nepal, hydropower projects face delays in land acquisition, Environmental Impact Assessment (EIA) approval, and Power Purchase Agreement (PPA) negotiation. Capitalisation cannot begin until physical construction activities commence — not merely when the licence is obtained",
				nepalImpact: "Developers like Chilime Hydropower and Nepal Electricity Authority frequently incur borrowing costs during prolonged pre-construction phases. These must be expensed until construction activities begin, which can be 2–3 years after loan drawdown",
				significance: "high",
			},
			{
				topic: "Suspension of Capitalisation",
				ifrs: "Capitalisation is suspended during extended periods when active development is interrupted. Brief interruptions and temporary delays do not require suspension (IAS 23.20–21)",
				nfrs: "Same principle. Nepal's monsoon season (Shrawan–Bhadra) and political instability/bandhs historically caused project shutdowns. Post-earthquake reconstruction delays in 2072 BS also triggered suspension questions",
				nepalImpact: "Monsoon shutdowns of 2–3 months for hill/mountain hydropower sites are generally considered inherent to the development process and do not require suspension. However, indefinite shutdowns due to contractor disputes or community conflicts do require suspension",
				significance: "medium",
			},
			{
				topic: "Investment Income Offset",
				ifrs: "Investment income earned on temporary investment of specific borrowings must be deducted from borrowing costs eligible for capitalisation (IAS 23.12–13)",
				nfrs: "Same requirement. Hydropower SPVs that draw down large tranches from multilateral lenders (ADB, World Bank, IFC) and temporarily place funds in fixed deposits must offset the FD interest against capitalised borrowing costs",
				nepalImpact: "SPVs earning 6–8% on FDs while paying 4–5% on concessional multilateral loans creates situations where the net borrowing cost is very low or negative. Entities sometimes fail to offset, overstating the qualifying asset cost",
				significance: "medium",
			},
			{
				topic: "Cessation of Capitalisation",
				ifrs: "Capitalisation ceases when substantially all activities necessary to prepare the qualifying asset for its intended use or sale are complete (IAS 23.22–25)",
				nfrs: "Same principle. For hydropower, cessation occurs when the plant achieves Commercial Operation Date (COD) — typically after successful completion of reliability run tests. Partial completion of multi-unit projects requires unit-by-unit assessment",
				nepalImpact: "Upper Tamakoshi commissioned units progressively over 18 months. Capitalisation ceased unit-by-unit as each achieved COD. Ancillary works (transmission line, access road) completed after COD do not extend capitalisation for the main asset",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives require BFIs lending to hydropower and infrastructure projects to assess whether the borrower has correctly applied NAS 23 capitalisation in project financial statements. Over-capitalisation inflates asset values that serve as collateral. NRB stress-testing guidelines require BFIs to evaluate the impact of interest rate changes on project viability. BFIs must classify loans to projects that have suspended capitalisation for more than 12 months as substandard unless adequate justification exists.",
		sebon: "SEBON requires listed entities to disclose: total borrowing costs capitalised during the period, the capitalisation rate used, and the carrying amount of qualifying assets under construction. For hydropower IPOs, the prospectus must present a sensitivity analysis showing how changes in capitalisation rate (±2%) affect the projected asset base and future depreciation charges. SEBON has flagged instances where developers capitalised pre-construction borrowing costs to inflate asset values before listing.",
		ird: "IRD allows capitalised borrowing costs as part of the depreciable cost base under Schedule 2 of the Income Tax Act 2058. Interest expensed (not capitalised) is deductible in the period incurred, subject to thin capitalisation rules for entities with debt-to-equity ratios exceeding 3:1. Hydropower projects receive tax holidays under Section 11(3) — capitalised borrowing costs increase the depreciable base, providing higher depreciation deductions after the tax holiday period ends.",
	},

	timeline: [
		{ date: "Jan 2009", label: "IAS 23 (Revised 2007) Effective", description: "Mandatory capitalisation replaced the previous choice to capitalise or expense" },
		{ date: "Jul 2018", label: "NAS 23 Effective", description: "Nepal adoption effective 1 Shrawan 2075 BS, mandatory capitalisation for qualifying assets" },
		{ date: "2020–2024", label: "Hydropower Construction Boom", description: "Multiple 100+ MW projects under construction, making NAS 23 one of the most practically significant standards in Nepal" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 23, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify Qualifying Assets",
			coreQuestion: "Does the asset necessarily take a substantial period of time to get ready for intended use or sale?",
			nepalExample: "Sanima Hydro identifies its 30 MW Solu Khola project as a qualifying asset — construction period is 4 years from ground-breaking to COD. However, its new branch office renovation (6-month fit-out) does not qualify as it does not take a substantial period.",
			paraRef: "IAS 23.5–7",
		},
		{
			number: 2,
			name: "Identify Borrowing Costs Eligible for Capitalisation",
			coreQuestion: "Which borrowing costs are directly attributable to the qualifying asset?",
			nepalExample: "Sanima Hydro has a specific project loan of NPR 80 crore at 11% from Nabil Bank, plus general borrowings of NPR 200 crore at a weighted average rate of 9.5%. Specific loan interest (NPR 8.8 crore) is directly attributable. General borrowing costs are capitalised using the 9.5% capitalisation rate applied to project expenditures funded from general borrowings.",
			paraRef: "IAS 23.10–14",
		},
		{
			number: 3,
			name: "Determine Commencement Date",
			coreQuestion: "Are all three commencement conditions met — expenditures incurred, borrowing costs incurred, and construction activities in progress?",
			nepalExample: "Sanima Hydro obtained its generation licence in Baisakh 2079 and drew down NPR 20 crore in Jestha 2079, but physical construction began only in Shrawan 2079 after land acquisition and EIA clearance. Capitalisation commences from 1 Shrawan 2079 — borrowing costs from Jestha to Ashad 2079 (2 months) are expensed.",
			paraRef: "IAS 23.17–19",
		},
		{
			number: 4,
			name: "Assess Suspension Periods",
			coreQuestion: "Were there extended periods when active development was interrupted?",
			nepalExample: "Construction at Solu Khola was halted for 5 months (Kartik 2080 to Falgun 2080) due to a contractor dispute. This is an extended interruption requiring suspension of capitalisation. Monsoon slowdown from Shrawan to Bhadra each year is inherent to hill construction and does not require suspension.",
			paraRef: "IAS 23.20–21",
		},
		{
			number: 5,
			name: "Determine Cessation Point",
			coreQuestion: "When is the asset substantially ready for intended use?",
			nepalExample: "Solu Khola 30 MW achieves COD on 15 Poush 2083 after completing the 72-hour reliability run test. Capitalisation ceases on this date. The access road and staff quarters completed 3 months later are treated as separate assets — borrowing costs on these ancillary items are assessed independently.",
			paraRef: "IAS 23.22–25",
		},
	],

	inlineExamples: {
		hydropowerCapitalisation: {
			title: "Ridi Hydropower — Borrowing Cost Capitalisation",
			context: "Ridi Hydropower Ltd is constructing a 42 MW project with an estimated cost of NPR 420 crore. Funding: specific project loan NPR 300 crore at 10.5% from Nepal Investment Bank, and general borrowings of NPR 500 crore at a weighted average rate of 9.2%. During FY 2081/82, capital expenditure on the project was NPR 150 crore — NPR 120 crore from the specific loan and NPR 30 crore from general funds. The specific loan drawdown not yet spent (NPR 180 crore) earned FD interest of NPR 9 crore during the year.",
			steps: [
				"Step 1 — Specific borrowing costs: Interest on specific loan = NPR 300 cr × 10.5% = NPR 31.50 crore. Less: investment income on temporarily invested surplus = NPR 9 crore. Net specific borrowing cost = NPR 22.50 crore.",
				"Step 2 — General borrowing costs: Expenditure funded from general borrowings = NPR 30 crore. Capitalisation rate = 9.2%. Capitalisable amount = NPR 30 cr × 9.2% = NPR 2.76 crore.",
				"Step 3 — Total capitalised borrowing costs = NPR 22.50 cr + NPR 2.76 cr = NPR 25.26 crore. This is added to the CWIP balance of the hydropower plant.",
				"Step 4 — Remaining general borrowing costs (NPR 500 cr × 9.2% = NPR 46 cr less NPR 2.76 cr capitalised = NPR 43.24 cr) are expensed in P&L as finance costs.",
				"Step 5 — Disclosure: Total borrowing costs incurred = NPR 77.50 cr (specific NPR 31.50 cr + general NPR 46 cr). Amount capitalised = NPR 25.26 cr. Amount expensed = NPR 52.24 cr. Capitalisation rate for general borrowings = 9.2%.",
			],
			journalEntries: [
				"Dr CWIP — Ridi Hydropower Plant NPR 25,26,00,000 / Cr Interest Payable NPR 31,50,00,000 / Cr Finance Income (FD) NPR 9,00,00,000 (net specific borrowing cost portion)",
				"Dr CWIP — Ridi Hydropower Plant NPR 2,76,00,000 / Cr Interest Expense — General Borrowings NPR 2,76,00,000 (general pool capitalisation)",
				"Dr Finance Costs (P&L) NPR 43,24,00,000 / Cr Interest Payable — General Borrowings NPR 43,24,00,000 (expensed portion)",
			],
			difficulty: "pro",
		},
		realEstateProject: {
			title: "Civil Homes — Real Estate Development Borrowing Costs",
			context: "Civil Homes Pvt Ltd is developing a residential apartment complex in Bhaisepati, Lalitpur. Total project cost: NPR 45 crore. Construction period: 30 months. The company has a project-specific loan of NPR 25 crore at 12% from Prabhu Bank and general overdraft facilities averaging NPR 15 crore at 10%. During FY 2081/82, NPR 18 crore was spent on construction (NPR 15 crore from specific loan, NPR 3 crore from general funds). Construction was suspended for 4 months (Baisakh to Shrawan 2082) due to a municipal permit dispute.",
			steps: [
				"Step 1 — Identify qualifying asset: The apartment complex takes 30 months — it is a qualifying asset. Inventory under NAS 2 can also be a qualifying asset if it takes a substantial period to bring to a saleable condition.",
				"Step 2 — Calculate borrowing costs for the active period (8 months out of 12, since 4 months were suspended): Specific loan interest for active period = NPR 25 cr × 12% × 8/12 = NPR 2.00 crore.",
				"Step 3 — General borrowing capitalisation for active period: NPR 3 cr × 10% × 8/12 = NPR 0.20 crore.",
				"Step 4 — Suspended period borrowing costs (4 months): Specific loan interest = NPR 25 cr × 12% × 4/12 = NPR 1.00 crore — expensed in P&L. General borrowing costs during suspension also expensed.",
				"Step 5 — Total capitalised = NPR 2.00 cr + NPR 0.20 cr = NPR 2.20 crore added to inventory (development property). Total expensed = NPR 1.00 cr + (NPR 15 cr × 10% × 4/12 = NPR 0.50 cr) + remaining general = approximately NPR 1.80 crore to P&L.",
			],
			journalEntries: [
				"Active period: Dr Inventory — Development Property NPR 2,20,00,000 / Cr Interest Payable NPR 2,00,00,000 / Cr Overdraft Interest NPR 20,00,000",
				"Suspension period: Dr Finance Costs (P&L) NPR 1,50,00,000 / Cr Interest Payable NPR 1,00,00,000 / Cr Overdraft Interest NPR 50,00,000",
			],
			difficulty: "medium",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The three commencement conditions are a favourite ACCA topic: expenditures incurred, borrowing costs incurred, AND activities to prepare the asset are in progress. All three must be met simultaneously — missing any one means capitalisation cannot begin." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates commonly forget to deduct investment income earned on temporarily invested specific borrowings. If the question mentions surplus funds placed on deposit, you MUST offset that income against capitalisable borrowing costs." },
			{ source: "Exam Technique", tip: "When computing the capitalisation rate for general borrowings, exclude any specific borrowings for qualifying assets from the weighted average calculation. The rate applies only to the general pool of borrowings." },
			{ source: "Nepal-specific", tip: "Nepal's high interest rate environment (10–14% effective) makes borrowing cost capitalisation far more material than in developed markets. A 42 MW hydropower project capitalising NPR 25+ crore annually in borrowing costs alone significantly inflates the asset base and future depreciation." },
			{ source: "Recurring Pattern", tip: "Exchange differences on foreign currency borrowings are NOT borrowing costs under NAS 23 (even though IAS 23.6(e) acknowledges the debate). Only the interest element of foreign currency loans is eligible for capitalisation. Exchange gains/losses go to P&L under NAS 21." },
			{ source: "Exam Technique", tip: "Suspension vs cessation: suspension is temporary (development interrupted) — capitalisation resumes when activities restart. Cessation is permanent (asset is substantially complete) — capitalisation never resumes. Monsoon delays inherent to the project do NOT trigger suspension." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Capitalisation begins before construction activities commence",
			description: "Hydropower developers start capitalising borrowing costs from the date of loan drawdown or licence issuance rather than from when physical construction activities begin. Pre-construction activities like land acquisition, EIA studies, and PPA negotiation are necessary but do not meet the 'activities in progress' condition unless they involve physical preparation of the site.",
			sector: "Hydropower",
		},
		{
			title: "Investment income on surplus funds not offset against capitalised costs",
			description: "SPVs drawing large tranches from multilateral or domestic lenders place surplus funds in fixed deposits but fail to deduct FD interest income from capitalised borrowing costs. This overstates the qualifying asset cost and creates artificially high depreciation charges post-COD.",
			sector: "Infrastructure",
		},
		{
			title: "Exchange losses on foreign currency loans capitalised as borrowing costs",
			description: "Entities treat exchange losses on USD/JPY/CNY project loans as borrowing costs eligible for capitalisation. NAS 23 and IAS 23 do not include exchange differences in the definition of borrowing costs that may be capitalised — only interest and related costs qualify. Exchange differences are recognised in P&L under NAS 21.",
			sector: "Hydropower",
		},
		{
			title: "Failure to suspend capitalisation during extended construction halts",
			description: "Projects halted for months due to contractor disputes, community opposition, or political disruption continue capitalising borrowing costs without assessing whether the interruption is an extended period requiring suspension. Only brief, routine interruptions (including seasonal monsoon shutdowns inherent to the project) are exempt from suspension.",
			sector: "Construction & Real Estate",
		},
		{
			title: "Capitalisation continues after Commercial Operation Date",
			description: "Hydropower companies continue capitalising borrowing costs after the plant achieves COD, arguing that minor ancillary works (staff quarters, landscaping, permanent access road) are incomplete. NAS 23 requires cessation when substantially all activities for the main asset are complete — ancillary items should be assessed as separate assets.",
			sector: "Hydropower",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Capitalised borrowing costs form part of the cost of PPE under NAS 16, increasing the depreciable base of qualifying assets like hydropower plants",
		},
		{
			slug: "nas-21",
			nfrsNumber: "NAS 21",
			title: "The Effects of Changes in Foreign Exchange Rates",
			reason: "Exchange differences on foreign currency borrowings are treated under NAS 21, not NAS 23 — only interest costs are capitalised, not exchange losses",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Over-capitalisation of borrowing costs may result in carrying amounts exceeding recoverable amounts, triggering impairment under NAS 36",
		},
		{
			slug: "nas-2",
			nfrsNumber: "NAS 2",
			title: "Inventories",
			reason: "Borrowing costs may be capitalised for inventories that are qualifying assets (e.g., real estate development projects held as inventory for sale)",
		},
	],
};
