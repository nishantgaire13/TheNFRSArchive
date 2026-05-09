import type { StandardPageData } from "./types";

export const nfrs11: StandardPageData = {
	slug: "nfrs-11",
	nfrsNumber: "NFRS 11",
	ifrsEquivalent: "IFRS 11",
	title: "Joint Arrangements",
	topic: "consolidation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2013-01-01",
	status: "aligned",
	heroMotif: "link",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 5,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Classification of Joint Arrangements",
				ifrs: "IFRS 11.14–19 requires classification as either a joint operation or a joint venture based on the rights and obligations of the parties, considering the structure, legal form, contractual terms, and other facts and circumstances",
				nfrs: "Same classification framework. In Nepal, hydropower joint arrangements between Nepali promoters and foreign investors (Indian, Chinese) must be carefully assessed. Many are structured through a separate vehicle (SPV) but may still be joint operations if parties have direct rights to assets",
				nepalImpact: "Nepali entities frequently default to joint venture classification based on legal form (separate company) without analysing whether the arrangement gives parties direct rights to assets and obligations for liabilities. NRB and SEBON have not issued additional guidance on classification",
				significance: "high",
			},
			{
				topic: "Joint Operations — Recognising Own Assets and Liabilities",
				ifrs: "IFRS 11.20 requires a joint operator to recognise its own assets (including its share of jointly held assets), liabilities (including its share of jointly incurred liabilities), revenue, and expenses",
				nfrs: "Same treatment. In Nepal, joint operations in infrastructure projects (e.g., road construction under Department of Roads contracts) require each operator to recognise its share of assets, liabilities, revenue, and expenses line by line in its own financial statements",
				nepalImpact: "Construction companies like Pappu Construction or Kalika Construction entering joint bid arrangements for government contracts must determine whether the arrangement is a joint operation. If so, proportionate line-by-line recognition is required rather than equity method",
				significance: "high",
			},
			{
				topic: "Joint Ventures — Equity Method",
				ifrs: "IFRS 11.24 requires a joint venturer to account for its interest using the equity method in accordance with IAS 28",
				nfrs: "Same treatment under NAS 28. Nepali entities with joint venture interests must apply the equity method in consolidated financial statements. In separate financial statements, NAS 27 permits cost or fair value",
				nepalImpact: "BFIs holding joint venture interests in insurance companies or fintech entities must apply equity method in consolidated statements. Nepal Life Insurance and Nepal Insurance Company have joint venture relationships with banking groups",
				significance: "high",
			},
			{
				topic: "Separate Vehicle Assessment",
				ifrs: "IFRS 11.B21–B33 requires that even when a joint arrangement is structured through a separate vehicle, the parties must look beyond legal form to determine whether they have direct rights to assets and obligations for liabilities",
				nfrs: "Same substance-over-form analysis required. Hydropower SPVs in Nepal (e.g., Upper Tamakoshi Hydropower Company) are incorporated as separate entities but the arrangement terms — output sharing, asset ownership on licence expiry, government obligations — may indicate a joint operation",
				nepalImpact: "Nepal Electricity Authority (NEA) and Independent Power Producers (IPPs) enter Build-Own-Operate-Transfer (BOOT) arrangements that create separate vehicles. The transfer clause and output sharing terms may cause reclassification from joint venture to joint operation",
				significance: "medium",
			},
			{
				topic: "Transition from Proportionate Consolidation",
				ifrs: "IFRS 11.C2–C5 required entities previously using proportionate consolidation under IAS 31 to transition to equity method for joint ventures on adoption, with specific transitional provisions",
				nfrs: "Same transitional provisions applied when NFRS was adopted in 2075 BS (2018 AD). Entities that previously applied proportionate consolidation under old Nepal GAAP had to restate comparatives using the equity method for joint ventures",
				nepalImpact: "Several Nepali entities, particularly in the construction and hydropower sectors, had been using proportionate consolidation. The transition required restating the opening balance sheet and recognising a single-line equity investment instead of line-by-line asset/liability recognition",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives require BFIs to disclose all joint arrangements in their annual reports, including the nature, purpose, and financial effect. BFIs entering joint venture arrangements for payment systems, card operations (e.g., SCT consortium for ATM networks), or microfinance subsidiaries must obtain prior NRB approval. NRB monitors concentration risk arising from joint arrangements with related parties.",
		sebon: "SEBON requires listed entities involved in joint arrangements to disclose the classification (joint operation vs joint venture), the principal place of business, proportion of ownership interests, and summarised financial information. SEBON's listing regulations require prior approval for material joint arrangement transactions exceeding 10% of net worth.",
		ird: "IRD treats each party to a joint arrangement as a separate taxpayer. For joint operations, each party reports its share of revenue and expenses in its own income tax return. For joint ventures accounted for under the equity method, the share of profit is not taxable until dividend is actually received — creating a book-tax temporary difference.",
	},

	timeline: [
		{ date: "Jan 2013", label: "IFRS 11 Effective", description: "IFRS 11 replaced IAS 31 Interests in Joint Ventures globally" },
		{ date: "Jul 2014", label: "Nepal GAAP", description: "Joint ventures accounted for under old Nepal GAAP using proportionate consolidation or equity method" },
		{ date: "Jul 2018", label: "NFRS 11 Effective", description: "NFRS 11 effective as part of full NFRS adoption (1 Shrawan 2075 BS), eliminating proportionate consolidation for joint ventures" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 11, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Joint Arrangement",
			coreQuestion: "Does a contractual arrangement exist where two or more parties have joint control?",
			nepalExample: "Nepal Electricity Authority (NEA) and Sutlej Jal Vidyut Nigam (SJVN) of India enter a contractual arrangement for the 900 MW Arun-3 Hydropower Project. The project agreement specifies that key decisions about the project (design, construction timeline, power purchase terms) require unanimous consent of both parties, establishing joint control.",
			paraRef: "IFRS 11.4–6",
		},
		{
			number: 2,
			name: "Classify as Joint Operation or Joint Venture",
			coreQuestion: "Do the parties have direct rights to assets and obligations for liabilities (joint operation) or rights to net assets (joint venture)?",
			nepalExample: "For Arun-3: SJVN holds 100% equity in the SPV (Arun-3 Power Development Company), but the project agreement gives NEA rights to a fixed percentage of output (free power and equity shares). Analysis of the BOOT structure, output sharing, and asset transfer on licence expiry determines whether this is a joint operation (direct rights to assets) or joint venture (rights to net assets only).",
			paraRef: "IFRS 11.14–19",
		},
		{
			number: 3,
			name: "Account for Joint Operations",
			coreQuestion: "Has each joint operator recognised its own assets, liabilities, revenue, and expenses (including its share of jointly held items)?",
			nepalExample: "Pappu Construction and Kalika Construction form a joint operation to build a section of the Kathmandu–Terai Fast Track. Each party recognises its share: Pappu recognises its 60% share of construction equipment (NPR 18 crore), revenue from Department of Roads billings (NPR 45 crore), and construction costs (NPR 38 crore) line by line in its own financial statements.",
			paraRef: "IFRS 11.20–23",
		},
		{
			number: 4,
			name: "Account for Joint Ventures Using Equity Method",
			coreQuestion: "Has the joint venturer applied the equity method per NAS 28 in its consolidated financial statements?",
			nepalExample: "Nabil Bank holds a 40% interest in Nabil Investment Banking Ltd, classified as a joint venture (jointly controlled with another banking group). In consolidated financial statements, Nabil recognises its initial investment at cost (NPR 10 crore) and adjusts for its 40% share of post-acquisition profits. Share of profit for the year: NPR 1,60 lakh. In separate financial statements, Nabil carries the investment at cost under NAS 27.",
			paraRef: "IFRS 11.24",
		},
		{
			number: 5,
			name: "Disclose Under NFRS 12",
			coreQuestion: "Have all required disclosures about joint arrangements been made per NFRS 12?",
			nepalExample: "Upper Tamakoshi Hydropower Company discloses in its notes: nature and purpose of the joint arrangement, registered office (Kathmandu), proportion of ownership interest held by each party (NEA 41%, Nepal Army 6%, other promoters 53%), summarised financial information including total assets NPR 1,20 arba, total liabilities NPR 85 arba, revenue NPR 15 arba, and profit NPR 6 arba.",
			paraRef: "NFRS 12.20–23",
		},
	],

	inlineExamples: {
		jointOperationAccounting: {
			title: "Mechi-Mahakali Construction JV — Joint Operation Line-by-Line Recognition",
			context: "Mechi Construction Pvt Ltd and Mahakali Builders Pvt Ltd form a joint operation (not a separate legal entity) to construct a 25 km section of the Mid-Hill Highway for the Department of Roads. The contract value is NPR 1,20 crore. Mechi holds a 55% interest and Mahakali holds 45%. During the year ended Ashad 2082, total revenue billed is NPR 48 crore, total costs incurred are NPR 40 crore, and jointly held equipment costs NPR 8 crore. Each party recognises its proportionate share.",
			steps: [
				"Step 1 — Identify the arrangement: Mechi and Mahakali have a contractual agreement requiring unanimous consent for key decisions (scope changes, subcontractor appointments). This establishes joint control. No separate vehicle is created — it is an unincorporated JV.",
				"Step 2 — Classify: Since no separate vehicle exists and each party has direct rights to its share of assets and direct obligations for its share of liabilities, this is a joint operation under NFRS 11.15.",
				"Step 3 — Mechi recognises its 55% share: Revenue NPR 26,40,00,000 (55% of NPR 48 crore), costs NPR 22,00,00,000 (55% of NPR 40 crore), equipment NPR 4,40,00,000 (55% of NPR 8 crore). Profit contribution: NPR 4,40,00,000.",
				"Step 4 — Mahakali recognises its 45% share: Revenue NPR 21,60,00,000 (45% of NPR 48 crore), costs NPR 18,00,00,000 (45% of NPR 40 crore), equipment NPR 3,60,00,000 (45% of NPR 8 crore). Profit contribution: NPR 3,60,00,000.",
				"Step 5 — Each party reports these amounts line by line in its own financial statements. There is no single-line equity investment. The Department of Roads contract receivable is split: Mechi shows NPR 5,28 crore receivable, Mahakali shows NPR 4,32 crore receivable.",
			],
			journalEntries: [
				"Mechi — Revenue recognition: Dr Contract Receivable NPR 26,40,00,000 / Cr Revenue NPR 26,40,00,000.",
				"Mechi — Cost recognition: Dr Construction Costs NPR 22,00,00,000 / Cr Bank / Payables NPR 22,00,00,000.",
				"Mechi — Equipment share: Dr Plant and Equipment NPR 4,40,00,000 / Cr Bank NPR 4,40,00,000.",
			],
			difficulty: "medium",
		},
		jointVentureEquityMethod: {
			title: "Kumari Bank — Equity Method for Joint Venture in Insurance",
			context: "Kumari Bank Ltd holds a 35% interest in Sagar Insurance Company Ltd, classified as a joint venture (jointly controlled with Sagar Group holding 35% and other promoters holding 30%, with a shareholders' agreement requiring unanimous consent from Kumari and Sagar for key decisions). Kumari's initial investment was NPR 7 crore. During the year ended Ashad 2082, Sagar Insurance reported profit of NPR 4,80 crore and declared a dividend of NPR 1,20 crore.",
			steps: [
				"Step 1 — Confirm joint control: Kumari (35%) and Sagar Group (35%) have a shareholders' agreement requiring unanimous consent for operating and financial decisions. Neither party has unilateral control. Joint control exists under NFRS 11.7.",
				"Step 2 — Classify: Sagar Insurance is a separate legal entity. The parties have rights to net assets (dividends, residual interest) rather than direct rights to individual assets. Classification: joint venture under NFRS 11.16.",
				"Step 3 — Apply equity method (NAS 28): Opening carrying amount: NPR 7,00,00,000. Share of profit: 35% × NPR 4,80,00,000 = NPR 1,68,00,000. Share of dividend: 35% × NPR 1,20,00,000 = NPR 42,00,000 (reduces carrying amount).",
				"Step 4 — Closing carrying amount: NPR 7,00,00,000 + NPR 1,68,00,000 − NPR 42,00,000 = NPR 8,26,00,000.",
				"Step 5 — Presentation: In Kumari Bank's consolidated statement of financial position, the joint venture appears as a single line 'Investment in Joint Venture' at NPR 8,26,00,000. In the consolidated statement of profit or loss, 'Share of profit of joint venture' of NPR 1,68,00,000 is recognised.",
				"Step 6 — Separate financial statements: Under NAS 27, Kumari Bank may carry the investment at cost (NPR 7 crore) or at fair value through profit or loss.",
			],
			journalEntries: [
				"Share of profit: Dr Investment in Joint Venture NPR 1,68,00,000 / Cr Share of Profit of Joint Venture (P&L) NPR 1,68,00,000.",
				"Dividend received: Dr Bank NPR 42,00,000 / Cr Investment in Joint Venture NPR 42,00,000 — dividend reduces the carrying amount under equity method, it is not recognised as income.",
				"In separate financial statements (cost method): Dr Bank NPR 42,00,000 / Cr Dividend Income NPR 42,00,000 — dividend recognised as income since equity method is not applied.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The classification question — joint operation vs joint venture — is the most frequently tested aspect of IFRS 11. Remember: it is based on the rights and obligations of the parties, not the legal form. A separate vehicle can still be a joint operation if parties have direct rights to assets." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates often incorrectly apply the equity method to joint operations. A joint operator must recognise its share of assets, liabilities, revenue, and expenses line by line — not as a single-line investment. Only joint ventures use the equity method." },
			{ source: "Exam Technique", tip: "When given a scenario, follow a structured approach: (1) identify joint control (unanimous consent requirement), (2) check whether a separate vehicle exists, (3) if yes, analyse whether parties have direct rights to assets (joint operation) or rights to net assets (joint venture), (4) apply the correct accounting." },
			{ source: "Nepal-specific", tip: "Hydropower joint arrangements are commonly tested in Nepal CA exams. Upper Tamakoshi and Arun-3 are real examples. Analyse the BOOT terms carefully — the transfer clause and output sharing arrangements determine whether the SPV is a joint operation or joint venture." },
			{ source: "Recurring Pattern", tip: "IFRS 11 eliminated proportionate consolidation for joint ventures. If a question gives you a joint venture and asks about proportionate consolidation, it is testing whether you know this method is no longer permitted — only the equity method under NAS 28 applies to joint ventures." },
			{ source: "Exam Technique", tip: "Watch for transactions between a joint operator and the joint operation. A joint operator selling assets to the joint operation recognises gains/losses only to the extent of other parties' interests (IFRS 11.22). This is a common computational element in SBR questions." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Classification based on legal form rather than substance",
			description: "Entities classify all joint arrangements structured through a separate company as joint ventures without analysing whether parties have direct rights to assets and obligations for liabilities. In Nepal, hydropower SPVs often have contractual terms (output sharing, asset transfer clauses) that indicate a joint operation despite the separate legal entity. This leads to incorrect application of the equity method instead of line-by-line recognition.",
			sector: "Hydropower",
		},
		{
			title: "Proportionate consolidation still applied for joint ventures",
			description: "Some Nepali entities, particularly construction companies that adopted NFRS late, continue to apply proportionate consolidation for joint ventures — a method that was permitted under old IAS 31 but eliminated by NFRS 11. Only the equity method under NAS 28 is permitted for joint ventures.",
			sector: "Construction",
		},
		{
			title: "Failure to assess joint control vs significant influence",
			description: "Entities holding 40–50% interests assume joint control exists without verifying that a contractual arrangement requires unanimous consent for key decisions. If the arrangement only provides significant influence (not joint control), NAS 28 applies (associate accounting) rather than NFRS 11. The distinction between joint control and significant influence must be based on contractual rights, not just percentage ownership.",
			sector: "Banking",
		},
		{
			title: "Non-disclosure of joint arrangement commitments",
			description: "Entities fail to disclose commitments relating to joint arrangements, including capital commitments, contingent liabilities, and guarantees provided. BFIs with joint ventures in insurance or microfinance subsidiaries must disclose all commitments even if not recognised on the balance sheet, as required by NFRS 12.",
			sector: "Listed Companies",
		},
		{
			title: "Incorrect elimination of intra-arrangement transactions",
			description: "Joint operators selling goods or services to the joint operation recognise full profit on the transaction instead of eliminating the portion attributable to their own interest. For example, a 60% joint operator selling construction materials at a mark-up to the joint operation should eliminate 60% of the unrealised profit.",
			sector: "Construction",
		},
	],

	relatedStandards: [
		{
			slug: "nas-28",
			nfrsNumber: "NAS 28",
			title: "Investments in Associates and Joint Ventures",
			reason: "Joint ventures identified under NFRS 11 are accounted for using the equity method prescribed by NAS 28",
		},
		{
			slug: "nfrs-10",
			nfrsNumber: "NFRS 10",
			title: "Consolidated Financial Statements",
			reason: "NFRS 10 determines whether an entity has control (subsidiary) as opposed to joint control (NFRS 11) — the boundary between consolidation and equity method",
		},
		{
			slug: "nfrs-12",
			nfrsNumber: "NFRS 12",
			title: "Disclosure of Interests in Other Entities",
			reason: "NFRS 12 prescribes the comprehensive disclosure requirements for interests in joint arrangements identified under NFRS 11",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 1 governs the overall presentation framework within which joint operation assets/liabilities and joint venture equity-method investments are presented",
		},
	],
};
