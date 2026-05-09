import type { StandardPageData } from "./types";

export const nas24: StandardPageData = {
	slug: "nas-24",
	nfrsNumber: "NAS 24",
	ifrsEquivalent: "IAS 24",
	title: "Related Party Disclosures",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2011-01-01",
	status: "aligned",
	heroMotif: "network",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AA","ACCA SBL","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Related Party Definition — Family Members",
				ifrs: "Close members of the family of a person include spouse/domestic partner, children, dependants, and the same for the spouse (IAS 24.9)",
				nfrs: "Same definition. In Nepal, extended family involvement in business is pervasive — brothers, uncles, and cousins often hold significant stakes across multiple entities in a conglomerate (e.g., Chaudhary Group, Golchha Organisation, Jyoti Group)",
				nepalImpact: "Nepal's family-owned conglomerates make related party identification complex. The Panchakanya Group, for instance, has family members across construction, manufacturing, and trading entities. Determining the boundary of 'close family members' requires careful judgement",
				significance: "high",
			},
			{
				topic: "Key Management Personnel (KMP) Scope",
				ifrs: "KMP are persons having authority and responsibility for planning, directing, and controlling entity activities, including directors (IAS 24.9)",
				nfrs: "Same definition. In Nepal, the Companies Act 2063 identifies the Board of Directors, CEO, and Company Secretary as officers. NRB adds the Chief Financial Officer, Compliance Officer, and Internal Auditor for BFIs. All these positions constitute KMP for NAS 24 purposes",
				nepalImpact: "Many Nepali companies have family members serving as chairman, CEO, and directors simultaneously. KMP compensation disclosure reveals concentration of economic benefits in promoter families — a sensitive disclosure that entities sometimes resist making fully",
				significance: "high",
			},
			{
				topic: "Government-Related Entity Exemption",
				ifrs: "Partial exemption from disclosure for transactions with government-related entities — disclose only the nature and individually significant transactions (IAS 24.25–27)",
				nfrs: "Same exemption applies. In Nepal, entities like Nepal Telecom, Nepal Electricity Authority, and Rastriya Banijya Bank are government-controlled. Their transactions with other government entities (Nepal Oil Corporation, Nepal Airlines) receive the partial exemption",
				nepalImpact: "Government-controlled entities form a significant portion of Nepal's economy. The exemption reduces the disclosure burden but entities must still disclose individually significant transactions — e.g., Nepal Telecom's frequency licence fees paid to the government",
				significance: "medium",
			},
			{
				topic: "Arm's Length Assertion",
				ifrs: "Disclosure that related party transactions were on arm's length terms is permitted only if it can be substantiated (IAS 24.23)",
				nfrs: "Same restriction. In practice, many Nepali entities assert arm's length pricing without substantiation. Transfer pricing regulations under the Income Tax Act 2058 are still developing — IRD has limited capacity to challenge related party pricing",
				nepalImpact: "SEBON has flagged instances where listed entities claim arm's length terms for related party transactions but cannot provide comparable unrelated party transaction data. Auditors are increasingly challenged on this assertion",
				significance: "medium",
			},
			{
				topic: "Promoter Group Transactions",
				ifrs: "No specific concept of 'promoter group' — uses the broader control/significant influence framework (IAS 24.9–11)",
				nfrs: "Nepal's Companies Act 2063 and SEBON regulations define 'promoter' and 'promoter group' as distinct categories. Promoter shareholding is disclosed separately. Transactions with promoter group members are always related party transactions under NAS 24",
				nepalImpact: "Promoter group is a uniquely South Asian concept — families controlling 51–70% of listed companies through direct and indirect holdings. Promoter group loans, guarantees, and property transactions are the most common related party transactions scrutinised by SEBON",
				significance: "high",
			},
			{
				topic: "Single Borrower Limit and Related Party Lending",
				ifrs: "IAS 24 does not address lending limits — these are regulatory matters outside accounting standards (IAS 24 scope)",
				nfrs: "NAS 24 itself does not address lending limits, but NRB's single borrower limit (25% of core capital for fund-based, 50% for non-fund-based) must include all related party exposures. NRB requires BFIs to aggregate exposures to related parties for single borrower limit compliance",
				nepalImpact: "BFIs lending to promoter-linked entities must aggregate all exposures for NRB single borrower limit. Several BFIs have faced NRB penalties for exceeding limits when related party exposures were not properly aggregated — e.g., separate loans to different companies owned by the same promoter family",
				significance: "high",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives impose strict limits on related party lending by BFIs. Loans to directors, their family members, and entities in which directors hold significant interest are either prohibited or subject to stringent conditions (100% cash margin for director-related lending). NRB requires quarterly reporting of all related party transactions exceeding NPR 50 lakh. BFIs must maintain a related party register approved by the board, updated quarterly. Violations of related party lending norms can result in suspension of directors and management penalties.",
		sebon: "SEBON's Securities Registration and Issuance Regulation 2073 requires listed entities to obtain audit committee approval for all related party transactions exceeding NPR 50 lakh or 1% of turnover (whichever is lower). Material related party transactions require shareholder approval. SEBON mandates disclosure of all related party transactions in the annual report with full details — nature, value, outstanding balances, terms, and any guarantees. SEBON has penalised entities for failing to disclose promoter group transactions in prospectuses.",
		ird: "Transfer pricing provisions under Section 33 of the Income Tax Act 2058 allow IRD to adjust taxable income if related party transactions are not at arm's length. IRD can impute market value for goods/services transferred between related parties. Disallowance of excessive management fees, royalties, and service charges paid to related parties is a common tax adjustment. IRD maintains a list of related parties based on company registration data cross-referenced with PAN databases.",
	},

	timeline: [
		{ date: "Jan 2011", label: "IAS 24 (Revised 2009) Effective", description: "Revised definition of related parties and government-related entity exemption introduced" },
		{ date: "Jul 2018", label: "NAS 24 Effective", description: "Nepal adoption effective 1 Shrawan 2075 BS, fully aligned with IAS 24" },
		{ date: "2022", label: "SEBON Enforcement", description: "SEBON increased scrutiny of related party disclosures in annual reports of listed companies, issuing show-cause notices for non-compliance" },
		{ date: "2026", label: "Current", description: "Fully aligned, with increasing regulatory focus on promoter group transparency", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify All Related Parties",
			coreQuestion: "Who are the entity's related parties under NAS 24 — parent, subsidiaries, associates, JVs, KMP, close family members, and entities they control/jointly control?",
			nepalExample: "Nabil Bank identifies: parent (no single parent — widely held), subsidiaries (Nabil Investment Banking), associates (20% stake in a microfinance company), KMP (CEO, CFO, Company Secretary, all directors), close family members of each KMP, and entities controlled by KMP (director's family construction company, another director's trading firm).",
			paraRef: "IAS 24.9–12",
		},
		{
			number: 2,
			name: "Establish a Related Party Register",
			coreQuestion: "Does the entity maintain a comprehensive, up-to-date register of all related parties and their relationships?",
			nepalExample: "Nabil Bank maintains a board-approved register listing 85 related parties including 11 directors, their family members and controlled entities, 3 KMP and their connections, and 2 subsidiaries. The register is updated quarterly and reviewed by the audit committee before each board meeting.",
			paraRef: "IAS 24.13–18",
		},
		{
			number: 3,
			name: "Capture All Related Party Transactions During the Period",
			coreQuestion: "Have all transactions with related parties been identified — including transfers of resources, services, or obligations regardless of whether a price is charged?",
			nepalExample: "During FY 2081/82, Nabil Bank's related party transactions included: NPR 15 crore loan to a director's construction company, office lease of NPR 1.2 crore/year from the chairman's property company, IT consulting services of NPR 80 lakh from a KMP's spouse's firm, and NPR 5 crore guarantee issued for an associate's bank facility.",
			paraRef: "IAS 24.18–22",
		},
		{
			number: 4,
			name: "Disclose KMP Compensation by Category",
			coreQuestion: "Is KMP compensation disclosed in aggregate and by category — short-term benefits, post-employment benefits, other long-term benefits, termination benefits, and share-based payments?",
			nepalExample: "Nabil Bank discloses: short-term employee benefits (salary, allowances, bonuses) NPR 8,50,00,000; post-employment benefits (gratuity, provident fund) NPR 1,20,00,000; other long-term benefits (leave encashment) NPR 45,00,000. No share-based payments — ESOP schemes are rare in Nepal.",
			paraRef: "IAS 24.17",
		},
		{
			number: 5,
			name: "Present Required Disclosures in Financial Statements",
			coreQuestion: "Do disclosures include: parent name, nature of relationship, transaction amounts, outstanding balances, terms, provisions for doubtful debts, and expense recognised for bad/doubtful debts?",
			nepalExample: "Nabil Bank's related party note shows a table: party name, relationship, nature of transaction, transaction value, outstanding balance at Ashad-end, terms (interest rate, maturity, collateral), and any provision held. The audit committee confirmation that all transactions were at arm's length with substantiation is attached.",
			paraRef: "IAS 24.18–24",
		},
	],

	inlineExamples: {
		promoterTransaction: {
			title: "Jyoti Spinning Mills — Promoter Group Property Lease",
			context: "Jyoti Spinning Mills Ltd (listed on NEPSE) leases its factory premises in Biratnagar from Jyoti Properties Pvt Ltd, which is wholly owned by the family of Mr. Rajesh Jyoti, the Chairman of Jyoti Spinning Mills. The annual lease payment is NPR 2,40,00,000. Comparable industrial lease rates in Biratnagar are NPR 1,80,00,000 to NPR 2,00,00,000 per year for similar premises. Mr. Jyoti's son is also employed as Deputy General Manager at a salary of NPR 35,00,000 per year.",
			steps: [
				"Step 1 — Identify related parties: Jyoti Properties is controlled by the Chairman's family — it is a related party. The Chairman's son is a close family member of KMP — his employment terms are a related party transaction.",
				"Step 2 — Assess arm's length terms: The lease at NPR 2.4 crore exceeds market rates of NPR 1.8–2.0 crore. The entity cannot assert arm's length terms per NAS 24.23 unless it substantiates the premium (e.g., specialised modifications, superior facilities).",
				"Step 3 — Required disclosures: Nature of relationship (Chairman's family controls lessor), transaction amount (NPR 2.4 crore/year), outstanding balance (if any rent prepaid or payable), terms (10-year lease, annual escalation clause).",
				"Step 4 — KMP family member employment: Disclose the son's compensation as a related party transaction. Assess whether the salary is commensurate with the role — if significantly above market, this is an indirect benefit to the Chairman.",
				"Step 5 — SEBON and IRD implications: SEBON may require shareholder approval if the lease exceeds 1% of turnover. IRD may disallow the excess NPR 40–60 lakh as a non-arm's length deduction.",
			],
			journalEntries: [
				"Monthly lease: Dr Rent Expense NPR 20,00,000 / Cr Bank NPR 20,00,000 (NPR 2.4 cr ÷ 12)",
				"Monthly salary (DGM — Chairman's son): Dr Employee Costs NPR 2,91,667 / Cr Salary Payable NPR 2,91,667 (NPR 35 lakh ÷ 12)",
				"No separate journal entry for disclosure — related party note prepared as part of year-end financial statement preparation.",
			],
			difficulty: "medium",
		},
		bfiLending: {
			title: "Kumari Bank — Related Party Lending Compliance",
			context: "Kumari Bank Ltd has 11 directors. Director Mr. Shrestha owns 4% of the bank and controls Shrestha Construction Pvt Ltd (100% owned) and Kathmandu Suppliers Pvt Ltd (60% owned through family members). The bank has outstanding credit facilities to: Shrestha Construction NPR 12 crore (term loan for equipment), Kathmandu Suppliers NPR 5 crore (working capital), and a personal home loan to Mr. Shrestha NPR 2 crore. Kumari Bank's core capital is NPR 800 crore.",
			steps: [
				"Step 1 — Identify related party exposures: All three facilities are to related parties — Shrestha Construction (director-controlled), Kathmandu Suppliers (director's family-controlled), and personal loan (to director directly).",
				"Step 2 — NRB single borrower limit check: Aggregate exposure = NPR 12 cr + NPR 5 cr + NPR 2 cr = NPR 19 crore. Single borrower fund-based limit = 25% of core capital = NPR 200 crore. The aggregate exposure is within the limit.",
				"Step 3 — NRB director lending restrictions: NRB prohibits unsecured lending to directors and entities in which directors have significant interest. All facilities must be fully secured. Personal home loan requires 100% cash margin or property collateral at conservative valuation.",
				"Step 4 — NAS 24 disclosure: Disclose each facility — nature, amount, interest rate, collateral held, any provision for impairment, and outstanding balance. State the relationship (director/director-controlled entity).",
				"Step 5 — Audit committee review: The audit committee must have pre-approved each facility and confirmed NRB compliance. Board minutes recording the director's abstention from voting on his own facilities must be maintained.",
			],
			journalEntries: [
				"Term loan disbursement: Dr Loans & Advances — Shrestha Construction NPR 12,00,00,000 / Cr Customer Account NPR 12,00,00,000",
				"Interest accrual (quarterly): Dr Accrued Interest Receivable NPR 36,00,000 / Cr Interest Income NPR 36,00,000 (NPR 12 cr × 12% × 3/12)",
				"Provision assessment: If any related party loan shows signs of impairment, provision is recognised per NFRS 9 ECL model — Dr Impairment Loss / Cr Provision for Loan Loss.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Related party identification is frequently tested using complex family/entity structures. Draw a diagram showing all entities and individuals, then systematically assess each relationship against the NAS 24.9 definition — control, joint control, significant influence, KMP, and close family members." },
			{ source: "Exam Technique", tip: "The arm's length assertion trap: if a question states that management claims a transaction was at arm's length, check whether this can be substantiated. NAS 24.23 prohibits the assertion unless comparable unrelated party data exists. In Nepal's thin markets, substantiation is often difficult." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates forget that NAS 24 requires disclosure even when the transaction price is zero — e.g., free use of premises, guarantees provided without fee, or services rendered without charge. The absence of a price does not mean the absence of a transaction." },
			{ source: "Nepal-specific", tip: "Nepal's promoter group concept means that all entities controlled by the promoter family are related parties, even if there is no direct ownership link between them. A promoter's brother's company transacting with the listed entity is a related party transaction even if the brother has no shares in the listed entity." },
			{ source: "Recurring Pattern", tip: "KMP compensation must be disaggregated into five categories: short-term benefits, post-employment benefits, other long-term benefits, termination benefits, and share-based payments. In Nepal, share-based payments are rare — most KMP compensation is salary, bonus, and gratuity." },
			{ source: "Exam Technique", tip: "Government-related entity exemption: if the question involves a government-controlled entity transacting with another government entity, apply the partial exemption (IAS 24.25–27). Disclose the government relationship, nature and amount of individually significant transactions, and qualitative/quantitative indication of collective significance of other transactions." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Incomplete identification of related parties in family conglomerates",
			description: "Family-owned Nepali conglomerates have complex webs of cross-ownership. Entities fail to identify all related parties because they focus only on direct shareholdings and miss indirect control through family members. A director's brother-in-law controlling a supplier is a related party through the close family member connection, even without any direct shareholding link.",
			sector: "Conglomerate Groups",
		},
		{
			title: "Arm's length assertion without substantiation",
			description: "Listed companies routinely state that related party transactions were conducted at arm's length without providing comparable unrelated party transaction evidence. In Nepal's relatively thin markets, finding truly comparable transactions is difficult, making unsubstantiated assertions a compliance risk flagged by SEBON and auditors.",
			sector: "Listed Companies",
		},
		{
			title: "KMP compensation disclosure omitted or aggregated",
			description: "Entities disclose total KMP compensation as a single number without disaggregating into the five required categories. Some entities exclude non-executive director sitting fees or include only the CEO's compensation, omitting other KMP like the CFO, Company Secretary, and board members.",
			sector: "Banking",
		},
		{
			title: "Related party lending not aggregated for NRB single borrower limits",
			description: "BFIs treat loans to different entities controlled by the same director/promoter family as separate exposures rather than aggregating them for single borrower limit purposes. NRB requires aggregation of all exposures to a director, their close family members, and entities they control or have significant interest in.",
			sector: "Banking",
		},
		{
			title: "Zero-value transactions not disclosed",
			description: "Entities fail to disclose related party transactions where no consideration is exchanged — such as free use of office premises owned by a director, personal guarantees given by promoters for company loans, or secondment of staff from a related entity without charge. NAS 24 requires disclosure of the transaction regardless of whether a price is charged.",
			sector: "Manufacturing",
		},
	],

	relatedStandards: [
		{
			slug: "nas-27",
			nfrsNumber: "NAS 27",
			title: "Separate Financial Statements",
			reason: "Investments in subsidiaries reported in separate financial statements often involve the most significant related party relationships and transactions",
		},
		{
			slug: "nas-28",
			nfrsNumber: "NAS 28",
			title: "Investments in Associates and Joint Ventures",
			reason: "Associates and joint ventures are related parties by definition — transactions with these entities require full NAS 24 disclosure",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Revenue from related party contracts must be assessed for arm's length pricing — transaction price adjustments may be required if terms differ from market",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Related party loans and receivables require NFRS 9 ECL assessment — favourable terms may indicate a below-market element requiring separate recognition",
		},
	],
};
