import type { StandardPageData } from "./types";

export const nfrs12: StandardPageData = {
	slug: "nfrs-12",
	nfrsNumber: "NFRS 12",
	ifrsEquivalent: "IFRS 12",
	title: "Disclosure of Interests in Other Entities",
	topic: "consolidation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2013-01-01",
	status: "aligned",
	heroMotif: "magnifier",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AAA","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Significant Judgements and Assumptions",
				ifrs: "IFRS 12.7–9 requires disclosure of significant judgements and assumptions made in determining the nature of an interest (control, joint control, significant influence) and the type of joint arrangement",
				nfrs: "Same requirement. In Nepal, determining control over BFI subsidiaries can involve complex judgements — particularly where NRB-imposed restrictions on voting rights or board composition affect the control assessment",
				nepalImpact: "Nepali banking groups (e.g., NIC Asia, Global IME) with insurance and microfinance subsidiaries must disclose judgements about why they concluded control exists despite holding less than 50% voting rights in some cases, or why they do not have control despite holding more than 50% where NRB restrictions apply",
				significance: "high",
			},
			{
				topic: "Interests in Subsidiaries — Composition of Group",
				ifrs: "IFRS 12.10–13 requires disclosure of the composition of the group, including the name, principal place of business, proportion of ownership and voting rights, and the effect of NCI",
				nfrs: "Same disclosure. Nepali groups must disclose all subsidiaries with their registered office (often Kathmandu), ownership percentages, and any difference between ownership and voting rights. NRB requires BFIs to disclose subsidiary details in a prescribed format",
				nepalImpact: "BFI groups like Nabil Bank (with Nabil Investment Banking subsidiary) or NIC Asia (with NIC Asia Capital, NIC Asia Laghubitta) must list each subsidiary, the jurisdiction of incorporation, and whether NCI is material. Many Nepali groups have relatively simple structures compared to multinational groups",
				significance: "medium",
			},
			{
				topic: "Summarised Financial Information for Material Subsidiaries",
				ifrs: "IFRS 12.B10–B13 requires summarised financial information for each subsidiary with material NCI, including current/non-current assets and liabilities, revenue, profit, total comprehensive income, and cash flows",
				nfrs: "Same requirement. Summarised financial information must be presented before inter-company eliminations. This is particularly relevant for BFI groups where insurance or microfinance subsidiaries have material NCI",
				nepalImpact: "Nepal Insurance Company (subsidiary of a banking group) may have 30% NCI. The parent must disclose summarised balance sheet and income statement data for Nepal Insurance before eliminations, showing total assets, liabilities, revenue, profit attributable to NCI, and dividends paid to NCI",
				significance: "high",
			},
			{
				topic: "Interests in Associates and Joint Ventures",
				ifrs: "IFRS 12.20–23 requires disclosure of the nature, extent, and financial effects of interests in associates and joint ventures, including summarised financial information for material associates/JVs",
				nfrs: "Same disclosures required. In Nepal, associates are common in the financial sector — BFIs often hold 20–49% stakes in other financial institutions, insurance companies, or hydropower projects. Summarised financial information must be provided for each material associate",
				nepalImpact: "Agricultural Development Bank (ADBL) holding a 30% stake in a regional microfinance institution must disclose: carrying amount of the investment, share of profit, dividends received, and summarised financial data of the associate. Reconciliation from summarised data to carrying amount is required",
				significance: "medium",
			},
			{
				topic: "Unconsolidated Structured Entities",
				ifrs: "IFRS 12.24–31 requires disclosure of the nature and extent of interests in unconsolidated structured entities, including the nature, purpose, size, and activities of the structured entity, and the maximum exposure to loss",
				nfrs: "Same requirement, though unconsolidated structured entities are relatively rare in Nepal. Potential examples include BFI-sponsored mutual funds (managed by merchant banking subsidiaries), securitisation vehicles, and employee welfare trusts",
				nepalImpact: "Entities like Siddhartha Capital (merchant banking subsidiary of Siddhartha Bank) managing mutual fund schemes must assess whether these schemes are structured entities and, if not consolidated, disclose the nature of involvement, carrying amounts, and maximum exposure to loss",
				significance: "low",
			},
			{
				topic: "Risk Associated with Interests in Consolidated Structured Entities",
				ifrs: "IFRS 12.14–17 requires disclosure of contractual arrangements that could require the parent or subsidiaries to provide financial support to consolidated structured entities, including terms and conditions of such arrangements",
				nfrs: "Same requirement. In Nepal, banking groups providing guarantees or liquidity support to subsidiaries must disclose these arrangements. NRB monitors intra-group financial support arrangements as part of its consolidated supervision framework",
				nepalImpact: "A Nepali banking group providing a capital maintenance guarantee to its microfinance subsidiary (to meet NRB's minimum paid-up capital requirement for Class D institutions) must disclose the terms, amount, and conditions of this support. NRB's consolidated supervision directive requires such arrangements to be reported",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives on consolidated supervision require BFIs to disclose all subsidiaries, associates, and joint ventures in a prescribed format. NRB mandates disclosure of intra-group transactions, cross-holdings, and financial support arrangements. The consolidated supervision framework requires quarterly reporting of group structure changes, including acquisitions or disposals of interests in other entities. NRB may direct a BFI to deconsolidate a subsidiary or include an entity in the consolidation scope based on regulatory assessment of control.",
		sebon: "SEBON requires listed entities to publish consolidated financial statements with full NFRS 12 disclosures. Annual reports must include a group structure diagram showing all subsidiaries, associates, and joint ventures with ownership percentages. SEBON's corporate governance guidelines require audit committees to review the appropriateness of consolidation decisions and related disclosures. SEBON has issued directives requiring enhanced disclosure of related-party transactions within group structures.",
		ird: "IRD uses group structure disclosures under NFRS 12 for transfer pricing assessments. The Income Tax Act 2058 requires disclosure of transactions with associated persons (broadly defined to include entities in a group). IRD examines the consistency between NFRS 12 disclosures of group entities and the associated persons disclosed in income tax returns. Discrepancies may trigger transfer pricing audits.",
	},

	timeline: [
		{ date: "Jan 2013", label: "IFRS 12 Effective", description: "IFRS 12 became effective globally, consolidating disclosure requirements previously scattered across IAS 27, IAS 28, IAS 31, and SIC-12" },
		{ date: "Jul 2014", label: "Nepal GAAP Disclosures", description: "Disclosure of interests in other entities was governed by individual standards and NRB directives under old Nepal GAAP" },
		{ date: "Jul 2018", label: "NFRS 12 Effective", description: "NFRS 12 effective as part of full NFRS adoption (1 Shrawan 2075 BS), significantly expanding disclosure requirements for group structures" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 12, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Disclose Significant Judgements and Assumptions",
			coreQuestion: "What significant judgements were made in determining control, joint control, or significant influence?",
			nepalExample: "Global IME Bank discloses that it determined control over Global IME Capital Ltd despite holding only 51% voting rights, because the shareholders' agreement grants it the power to appoint the majority of the board and direct the relevant activities. The judgement considers NRB's approval of the subsidiary licence and the absence of substantive rights held by other shareholders to block key decisions.",
			paraRef: "IFRS 12.7–9",
		},
		{
			number: 2,
			name: "Disclose Interests in Subsidiaries",
			coreQuestion: "Have all subsidiaries been listed with ownership, voting rights, NCI information, and summarised financials for material subsidiaries?",
			nepalExample: "NIC Asia Bank discloses three subsidiaries: NIC Asia Capital Ltd (100% owned, merchant banking), NIC Asia Laghubitta Bittiya Sanstha Ltd (70% owned, microfinance, NCI 30%), and NIC Asia Securities Ltd (100% owned, stockbroking). For NIC Asia Laghubitta (material NCI), summarised financial information is provided: total assets NPR 12,50 crore, total liabilities NPR 10,80 crore, revenue NPR 2,30 crore, profit NPR 55 lakh, NCI share of profit NPR 16,50 lakh.",
			paraRef: "IFRS 12.10–13, B10–B13",
		},
		{
			number: 3,
			name: "Disclose Interests in Associates and Joint Ventures",
			coreQuestion: "Have the nature, financial effects, and summarised data been disclosed for each material associate and joint venture?",
			nepalExample: "Prabhu Bank discloses its 25% associate interest in Prabhu Insurance Ltd: carrying amount under equity method NPR 8,40 crore, share of profit NPR 1,25 crore, dividends received NPR 30 lakh. Summarised financial information (100%): total assets NPR 48 crore, total liabilities NPR 14 crore, revenue NPR 18 crore, profit NPR 5 crore. Reconciliation: 25% of net assets (NPR 34 crore) = NPR 8,50 crore; goodwill NPR (10) lakh adjustment gives carrying amount of NPR 8,40 crore.",
			paraRef: "IFRS 12.20–23, B12–B14",
		},
		{
			number: 4,
			name: "Disclose Interests in Unconsolidated Structured Entities",
			coreQuestion: "Are there structured entities that the reporting entity has sponsored or has interests in but does not consolidate?",
			nepalExample: "Siddhartha Capital Ltd (subsidiary of Siddhartha Bank) manages the Siddhartha Equity Fund (open-ended mutual fund) with net assets of NPR 2,50 crore. Siddhartha Capital does not consolidate the fund but discloses: nature of interest (fund manager, earns management fee of 1.5% per annum), total fund size, maximum exposure to loss (NPR 15 lakh seed investment plus management fee receivable), and that no financial support was provided during the period.",
			paraRef: "IFRS 12.24–31",
		},
		{
			number: 5,
			name: "Disclose Restrictions and Risks",
			coreQuestion: "Are there restrictions on the ability to access or use assets and settle liabilities of the group, or contractual obligations to provide financial support?",
			nepalExample: "Nabil Bank discloses that NRB requires its microfinance subsidiary to maintain a minimum CRR of 2% and a statutory liquidity ratio of 5%, restricting the subsidiary's ability to transfer cash to the parent. Additionally, Nabil has provided a capital maintenance guarantee of NPR 50 crore to the subsidiary to meet NRB's minimum capital requirement for Class D institutions. Total restricted net assets of subsidiaries: NPR 3,20 crore.",
			paraRef: "IFRS 12.13, 14–17",
		},
	],

	inlineExamples: {
		subsidiaryDisclosure: {
			title: "Sunrise Bank — Subsidiary and NCI Disclosure",
			context: "Sunrise Bank Ltd has two subsidiaries: Sunrise Capital Ltd (100% owned, merchant banking) and Sunrise Laghubitta Bittiya Sanstha Ltd (65% owned, microfinance). Sunrise Laghubitta has material NCI of 35%. For the year ended Ashad 2082, Sunrise Laghubitta reports: total assets NPR 8,40 crore, total liabilities NPR 7,10 crore, revenue NPR 1,85 crore, profit NPR 28 lakh, other comprehensive income NPR 5 lakh, total comprehensive income NPR 33 lakh. Dividends of NPR 8 lakh were paid to NCI during the year.",
			steps: [
				"Step 1 — Group composition disclosure: List both subsidiaries with principal place of business (Kathmandu), ownership interest (100% and 65%), voting rights (same as ownership), and whether NCI is material.",
				"Step 2 — For Sunrise Laghubitta (material NCI of 35%), present summarised financial information before inter-company eliminations: current assets NPR 6,20 crore, non-current assets NPR 2,20 crore, current liabilities NPR 5,80 crore, non-current liabilities NPR 1,30 crore.",
				"Step 3 — Income statement summary: Revenue NPR 1,85,00,000, profit NPR 28,00,000, OCI NPR 5,00,000, TCI NPR 33,00,000.",
				"Step 4 — NCI allocation: Profit attributable to NCI = 35% × NPR 28,00,000 = NPR 9,80,000. TCI attributable to NCI = 35% × NPR 33,00,000 = NPR 11,55,000. Accumulated NCI = 35% × net assets (NPR 1,30,00,000) = NPR 45,50,000.",
				"Step 5 — Cash flow summary for the subsidiary: operating NPR 22 lakh, investing (NPR 8 lakh), financing (NPR 12 lakh including NPR 8 lakh dividends to NCI).",
				"Step 6 — Disclose dividends paid to NCI: NPR 8,00,000 during the year. Disclose any restrictions: NRB requires the subsidiary to maintain minimum capital of NPR 10 crore; current paid-up capital is NPR 12 crore.",
			],
			journalEntries: [
				"NCI share of profit (consolidation): Dr Profit Attributable to NCI (P&L) NPR 9,80,000 / Cr Non-Controlling Interests (Equity) NPR 9,80,000.",
				"Dividends to NCI (consolidation): Dr Non-Controlling Interests (Equity) NPR 8,00,000 / Cr Dividends Payable to NCI NPR 8,00,000 — reduces NCI in equity.",
				"Note: These are consolidation entries, not entries in the subsidiary's own books. The subsidiary records dividends as: Dr Retained Earnings NPR 22,85,714 / Cr Dividends Payable NPR 22,85,714 (total dividend from which NPR 8 lakh goes to NCI).",
			],
			difficulty: "medium",
		},
		associateDisclosure: {
			title: "Laxmi Bank — Associate Disclosure with Summarised Financial Information",
			context: "Laxmi Bank Ltd holds a 30% interest in Laxmi Insurance Company Ltd, accounted for as an associate using the equity method. Laxmi Insurance's summarised financial information for Ashad 2082: total assets NPR 32 crore, total liabilities NPR 18 crore, revenue NPR 12 crore, profit NPR 3,20 crore, OCI NPR 40 lakh, TCI NPR 3,60 crore. Laxmi Bank's carrying amount includes goodwill of NPR 45 lakh from the original acquisition. Dividends received during the year: NPR 48 lakh.",
			steps: [
				"Step 1 — Nature of interest: Disclose that Laxmi Insurance is an associate (significant influence through 30% ownership and board representation — two out of seven directors appointed by Laxmi Bank). Principal place of business: Kathmandu. Country of incorporation: Nepal.",
				"Step 2 — Summarised financial information: Present total assets NPR 32,00,00,000, total liabilities NPR 18,00,00,000, net assets NPR 14,00,00,000, revenue NPR 12,00,00,000, profit NPR 3,20,00,000, OCI NPR 40,00,000, TCI NPR 3,60,00,000.",
				"Step 3 — Reconciliation to carrying amount: 30% of net assets = 30% × NPR 14 crore = NPR 4,20,00,000. Add goodwill NPR 45,00,000. Carrying amount = NPR 4,65,00,000.",
				"Step 4 — Share of profit and OCI: Share of profit = 30% × NPR 3,20,00,000 = NPR 96,00,000. Share of OCI = 30% × NPR 40,00,000 = NPR 12,00,000. Total share of TCI = NPR 1,08,00,000.",
				"Step 5 — Dividends received: NPR 48,00,000. This reduces the carrying amount under the equity method (not recognised as income in consolidated statements).",
				"Step 6 — Disclose any impairment: If fair value indicators suggest impairment (e.g., NEPSE quoted price below carrying amount), disclose the impairment assessment. For unlisted associates, disclose that fair value is determined using Level 3 inputs.",
			],
			journalEntries: [
				"Share of associate profit: Dr Investment in Associate NPR 96,00,000 / Cr Share of Profit of Associate (P&L) NPR 96,00,000.",
				"Share of associate OCI: Dr Investment in Associate NPR 12,00,000 / Cr Share of OCI of Associate (OCI) NPR 12,00,000.",
				"Dividends received: Dr Bank NPR 48,00,000 / Cr Investment in Associate NPR 48,00,000 — reduces carrying amount under equity method.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "NFRS 12 is a disclosure standard — it does not prescribe how to account for interests but what to disclose about them. Exam questions often combine NFRS 10/11/NAS 28 accounting with NFRS 12 disclosure requirements. Prepare disclosure notes, not journal entries, when NFRS 12 is tested." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates frequently omit the summarised financial information for material subsidiaries with NCI. Remember: you must provide current/non-current split of assets and liabilities, revenue, profit, OCI, TCI, and cash flows for each subsidiary with material NCI." },
			{ source: "Exam Technique", tip: "The reconciliation from summarised financial information to carrying amount is frequently tested for associates and joint ventures. Formula: (Reporting entity's share % × Associate's net assets) + Goodwill ± Fair value adjustments = Carrying amount." },
			{ source: "Nepal-specific", tip: "Nepali banking groups are ideal exam scenarios for NFRS 12 because they often have subsidiaries (capital, laghubitta, insurance), associates, and sometimes joint ventures. Be prepared to draft a complete group structure disclosure for a typical BFI group with 2–3 subsidiaries." },
			{ source: "Recurring Pattern", tip: "Significant judgements disclosure is tested through scenario questions where it is unclear whether an entity has control, joint control, or significant influence. You must explain the judgement and the factors considered — percentage of voting rights alone is not sufficient." },
			{ source: "Exam Technique", tip: "Unconsolidated structured entities are a less common but high-value exam topic. Key disclosure: nature and purpose, maximum exposure to loss, and whether financial support was provided. In Nepal, mutual fund schemes managed by merchant banking subsidiaries are the most likely example." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Incomplete summarised financial information for material NCI subsidiaries",
			description: "Banking groups disclose only the name and ownership percentage of subsidiaries without providing the detailed summarised financial information required by NFRS 12.B10 for subsidiaries with material NCI. The standard requires current/non-current split of assets and liabilities, revenue, profit, OCI, TCI, cash flows, and dividends paid to NCI.",
			sector: "Banking",
		},
		{
			title: "Failure to disclose significant judgements about control",
			description: "Entities with borderline control situations (e.g., holding exactly 50% or having potential voting rights) do not disclose the judgements and assumptions made in concluding whether control exists. BFIs with complex group structures involving cross-holdings or NRB-imposed restrictions must explain why specific entities are or are not consolidated.",
			sector: "Listed Companies",
		},
		{
			title: "Missing reconciliation from summarised data to carrying amount for associates",
			description: "When disclosing associate interests, entities present the share of net assets but fail to reconcile to the carrying amount by adding goodwill, fair value adjustments, and impairment. The reconciliation is a specific requirement of NFRS 12.B14 and is frequently the focus of audit observations.",
			sector: "Banking",
		},
		{
			title: "Non-disclosure of restrictions on asset transfers within the group",
			description: "Banking groups do not disclose regulatory restrictions (NRB CRR requirements, minimum capital maintenance) that limit the ability of subsidiaries to transfer funds to the parent. These restrictions affect the parent's ability to access group cash and must be disclosed with quantified amounts of restricted net assets.",
			sector: "Banking",
		},
		{
			title: "Group structure diagram omitted from annual report",
			description: "Listed entities do not include a group structure diagram despite SEBON's corporate governance guidelines requiring it. The diagram should show all subsidiaries, associates, and joint ventures with ownership percentages, country of incorporation, and principal activities. This is a basic but frequently omitted disclosure.",
			sector: "Listed Companies",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-10",
			nfrsNumber: "NFRS 10",
			title: "Consolidated Financial Statements",
			reason: "NFRS 12 requires disclosures about subsidiaries identified under NFRS 10, including the composition of the group and NCI information",
		},
		{
			slug: "nfrs-11",
			nfrsNumber: "NFRS 11",
			title: "Joint Arrangements",
			reason: "NFRS 12 prescribes disclosures for joint operations and joint ventures classified under NFRS 11",
		},
		{
			slug: "nas-28",
			nfrsNumber: "NAS 28",
			title: "Investments in Associates and Joint Ventures",
			reason: "NFRS 12 requires summarised financial information and reconciliation disclosures for associates and joint ventures accounted for under NAS 28",
		},
		{
			slug: "nas-27",
			nfrsNumber: "NAS 27",
			title: "Separate Financial Statements",
			reason: "NAS 27 governs separate financial statements where interests in subsidiaries, associates, and joint ventures are carried at cost or fair value, and NFRS 12 disclosures apply in both separate and consolidated statements",
		},
	],
};
