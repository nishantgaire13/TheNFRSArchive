import type { StandardPageData } from "./types";

export const nas7: StandardPageData = {
	slug: "nas-7",
	nfrsNumber: "NAS 7",
	ifrsEquivalent: "IAS 7",
	title: "Statement of Cash Flows",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "1994-01-01",
	status: "aligned",
	heroMotif: "flow",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA FR","ACCA SBR","ACCA FM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Direct vs Indirect Method",
				ifrs: "IAS 7 encourages the direct method but permits the indirect method for operating activities (IAS 7.18–19)",
				nfrs: "Same choice available. In practice, nearly all Nepali entities use the indirect method. NRB templates for BFIs are structured around the indirect method",
				nepalImpact: "Auditors rarely encounter the direct method in Nepal. Entities lack the accounting systems to capture gross cash receipts and payments, making the indirect method the de facto standard",
				significance: "medium",
			},
			{
				topic: "Interest Paid Classification",
				ifrs: "Interest paid may be classified as operating or financing activity. Policy choice must be consistent (IAS 7.33)",
				nfrs: "Same policy choice. NRB Unified Directives require BFIs to classify interest paid as operating activity because interest expense is a core banking cost",
				nepalImpact: "Non-BFI entities sometimes inconsistently classify interest between periods. BFIs must follow NRB's operating classification, which aligns with the nature of banking operations",
				significance: "high",
			},
			{
				topic: "Dividend Paid Classification",
				ifrs: "Dividends paid may be classified as operating or financing activity (IAS 7.34)",
				nfrs: "Same choice. Most Nepali entities classify dividends paid as financing activity. BFIs follow NRB templates which classify dividends paid under financing",
				nepalImpact: "Dividend distribution in Nepal requires AGM approval and is subject to IRD withholding tax at 5%. Timing of cash outflow often differs from the declaration date due to procedural delays",
				significance: "medium",
			},
			{
				topic: "Interest and Dividend Received",
				ifrs: "Interest received and dividends received may each be classified as operating or investing activity (IAS 7.33)",
				nfrs: "Same choice. BFIs classify interest received as operating (core business). Non-financial entities typically classify interest received as investing",
				nepalImpact: "BFIs earn the majority of revenue from interest, so operating classification is appropriate. Manufacturing companies like Surya Nepal classify interest income from short-term deposits as investing",
				significance: "medium",
			},
			{
				topic: "Non-cash Transactions Disclosure",
				ifrs: "Non-cash investing and financing transactions must be excluded from the cash flow statement but disclosed elsewhere (IAS 7.43–44)",
				nfrs: "Same requirement. Common non-cash items in Nepal include bonus share issuance (stock dividends), conversion of debentures to equity, and right-of-use asset recognition under NFRS 16",
				nepalImpact: "Bonus shares are extremely common in Nepali banking — entities frequently issue 20–30% bonus shares. These must be excluded from cash flows but disclosed. Some entities incorrectly include bonus share issuance in financing activities",
				significance: "high",
			},
			{
				topic: "Bank Overdraft as Cash Equivalent",
				ifrs: "Bank overdrafts repayable on demand that form an integral part of cash management may be included as a component of cash and cash equivalents (IAS 7.8)",
				nfrs: "Same treatment permitted. Nepal-specific issue: many SMEs rely heavily on overdraft facilities. Including overdrafts as negative cash equivalents can produce a negative opening/closing cash position that confuses users",
				nepalImpact: "Some entities inconsistently include or exclude overdrafts between periods. NRB requires BFIs to report gross cash balances separately from overdraft facilities in regulatory returns, creating reconciliation needs",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives mandate that BFIs prepare the cash flow statement using the indirect method in the prescribed template. Interest paid and interest received must be classified as operating activities for BFIs. NRB requires quarterly cash flow statements as part of interim reporting within 30 days of quarter-end. BFIs must disclose cash and cash equivalents composition separately showing balances with NRB, balances with other banks, and money at call and short notice.",
		sebon: "SEBON requires listed entities to publish annual audited cash flow statements and quarterly unaudited cash flow summaries. Cash flow from operations is a key metric in SEBON's financial health assessment for continued listing. SEBON has flagged entities whose reported operating cash flows are persistently negative while reporting profits — requiring enhanced disclosure of the divergence.",
		ird: "IRD does not directly prescribe cash flow statement formats but uses cash flow data for transfer pricing analysis and tax audit purposes. Significant divergence between reported profits and operating cash flows may trigger IRD scrutiny. Interest income classification in the cash flow statement must be consistent with treatment in the Income Tax Act 2058 return.",
	},

	timeline: [
		{ date: "Jan 1994", label: "IAS 7 Effective", description: "IAS 7 (Revised 1992) became effective globally" },
		{ date: "Jul 2014", label: "Nepal GAAP Cash Flow", description: "Nepal Accounting Standard on Cash Flow Statements was in use prior to NFRS adoption" },
		{ date: "Jul 2018", label: "NAS 7 Effective", description: "NAS 7 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 7, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Classify Activities",
			coreQuestion: "Is each cash flow from operating, investing, or financing activity?",
			nepalExample: "Himalayan Bank classifies: interest received from loans (operating — core BFI business), purchase of government bonds (investing), issuance of debentures raising NPR 3 arba (financing). NRB directive requires interest received/paid as operating for BFIs.",
			paraRef: "IAS 7.10–17",
		},
		{
			number: 2,
			name: "Choose Direct or Indirect Method for Operating Activities",
			coreQuestion: "Will the entity report gross cash receipts/payments (direct) or reconcile from profit (indirect)?",
			nepalExample: "Nabil Bank uses the indirect method: starts with profit before tax of NPR 6,25 crore, adds back depreciation NPR 1,10 crore, loan loss provision NPR 2,80 crore, removes investment gains NPR 45 lakh, and adjusts for working capital changes to arrive at cash generated from operations.",
			paraRef: "IAS 7.18–20",
		},
		{
			number: 3,
			name: "Report Investing Activities",
			coreQuestion: "What cash was spent on or received from long-term assets and investments?",
			nepalExample: "Nepal Telecom reports: purchase of telecom towers and fibre-optic infrastructure NPR 8,50 crore (outflow), proceeds from sale of old switching equipment NPR 35 lakh (inflow), purchase of treasury bills NPR 2,00 crore (outflow classified as investing since maturity exceeds 3 months).",
			paraRef: "IAS 7.21–25",
		},
		{
			number: 4,
			name: "Report Financing Activities",
			coreQuestion: "What cash flows changed the size and composition of equity and borrowings?",
			nepalExample: "Pashupati Cement reports: proceeds from rights issue NPR 50 crore (inflow), repayment of term loan to NMB Bank NPR 15 crore (outflow), dividend paid to shareholders NPR 8 crore (outflow, net of TDS withheld). Bonus shares of 20% are disclosed as non-cash and excluded from the statement.",
			paraRef: "IAS 7.26–30",
		},
		{
			number: 5,
			name: "Reconcile and Disclose",
			coreQuestion: "Does opening cash plus net cash flows equal closing cash? Are non-cash items disclosed?",
			nepalExample: "Surya Nepal reconciles: opening cash and cash equivalents NPR 12 crore + operating NPR 28 crore − investing NPR 18 crore − financing NPR 10 crore = closing NPR 12 crore. Non-cash disclosure: right-of-use asset of NPR 4,50 lakh recognised under NFRS 16 for warehouse lease.",
			paraRef: "IAS 7.43–45",
		},
	],

	inlineExamples: {
		indirectMethod: {
			title: "Nabil Bank — Indirect Method Operating Cash Flow",
			context: "Nabil Bank Ltd prepares its cash flow statement for the year ended Ashad 2082 using the indirect method. Profit before tax is NPR 6,25 crore. Non-cash adjustments include: depreciation NPR 1,10 crore, amortisation NPR 15 lakh, loan loss provision NPR 2,80 crore, gain on sale of investments NPR 45 lakh, interest expense on subordinated debentures NPR 1,20 crore (classified as financing). Working capital changes: increase in loans and advances NPR 85 crore, increase in customer deposits NPR 1,10 crore, decrease in other assets NPR 5 crore.",
			steps: [
				"Step 1 — Start with profit before tax: NPR 6,25,00,000 (NPR 6.25 crore).",
				"Step 2 — Add back non-cash expenses: depreciation NPR 1,10,00,000 + amortisation NPR 15,00,000 + loan loss provision NPR 2,80,00,000 = NPR 4,05,00,000.",
				"Step 3 — Remove items not from operations: deduct investment gain NPR 45,00,000. Add back debenture interest NPR 1,20,00,000 (will appear in financing).",
				"Step 4 — Adjust for working capital: loans and advances increase (NPR 85,00,00,000) outflow + deposits increase NPR 1,10,00,00,000 inflow + other assets decrease NPR 5,00,00,000 inflow.",
				"Step 5 — Cash generated from operations = NPR 6.25 cr + NPR 4.05 cr − NPR 0.45 cr + NPR 1.20 cr − NPR 85 cr + NPR 110 cr + NPR 5 cr = NPR 41.05 crore. Deduct income tax paid NPR 2,10 crore. Net operating cash flow = NPR 38.95 crore.",
			],
			journalEntries: [
				"No journal entries arise from the cash flow statement itself — it is a reporting schedule derived from balance sheet movements and P&L items.",
				"Loan loss provision adjustment: already recorded as Dr Impairment Loss NPR 2,80,00,000 / Cr Allowance for Impairment NPR 2,80,00,000 — added back in indirect reconciliation because it is non-cash.",
				"Investment gain reversal: Dr Gain on Investments NPR 45,00,000 / Cr (deducted from operating, shown instead in investing when proceeds are received).",
			],
			difficulty: "medium",
		},
		interestClassification: {
			title: "Koshi Hydropower — Interest and Dividend Classification",
			context: "Koshi Hydropower Ltd is a non-financial listed company. During the year ended Ashad 2082 it paid interest of NPR 3,40 crore on project loans, received interest of NPR 18 lakh on fixed deposits, received dividends of NPR 12 lakh from equity investments in a subsidiary, and paid a final dividend of NPR 2 crore to its own shareholders. Management must decide on classification policies for each.",
			steps: [
				"Step 1 — Interest paid NPR 3,40 crore: Management elects financing activity classification because the loans fund the hydropower project (a capital asset). This is permitted under IAS 7.33.",
				"Step 2 — Interest received NPR 18 lakh: Management classifies as investing activity because surplus cash is temporarily invested in fixed deposits — not a core operating activity for a hydropower company.",
				"Step 3 — Dividends received NPR 12 lakh: Classified as investing activity — the return on an equity investment in a subsidiary.",
				"Step 4 — Dividends paid NPR 2 crore: Classified as financing activity — a distribution to equity holders. TDS at 5% (NPR 10 lakh) was deducted and remitted to IRD separately.",
				"Step 5 — Consistency: These classification policies must be applied consistently in all future periods. Disclose the policy choices in accounting policy notes per NAS 7.33.",
				"Step 6 — Present net cash: Operating section excludes all four items. Investing shows: interest received NPR 18 lakh inflow, dividends received NPR 12 lakh inflow. Financing shows: interest paid NPR 3,40 crore outflow, dividends paid NPR 2 crore outflow.",
			],
			journalEntries: [
				"Interest paid (cash): Dr Interest Expense NPR 3,40,00,000 / Cr Bank NPR 3,40,00,000 — reported under financing activities.",
				"Dividend paid (cash): Dr Retained Earnings NPR 2,00,00,000 / Cr Bank NPR 1,90,00,000 / Cr TDS Payable NPR 10,00,000 — net cash outflow of NPR 1,90,00,000 in financing; TDS remittance shown separately or combined.",
				"Dividend received: Dr Bank NPR 12,00,000 / Cr Dividend Income NPR 12,00,000 — reported under investing activities.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The indirect method reconciliation is tested almost every session. Start with profit before tax, add back non-cash charges (depreciation, impairment, provisions), remove investing/financing items (gains on disposal, interest if classified elsewhere), then adjust for working capital movements." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates frequently mishandle interest classification. Remember: the standard allows choice, but the entity must be consistent. For BFIs, interest paid/received is almost always operating. For non-financial entities, interest paid can be financing and interest received can be investing." },
			{ source: "Exam Technique", tip: "Always reconcile your closing cash figure to the balance sheet. If your number does not match, check: have you double-counted items already in working capital? Have you included non-cash items like bonus shares or ROU assets?" },
			{ source: "Recurring Pattern", tip: "Non-cash transactions are a favourite trap. Bonus share issuances, conversion of debt to equity, and acquisition of assets by assuming liabilities must be excluded from the cash flow statement but disclosed in notes." },
			{ source: "Nepal-specific", tip: "NRB requires BFIs to use the indirect method and classify interest paid/received as operating. In exam questions involving Nepali banks, follow NRB's requirement — do not present interest paid as financing for a BFI." },
			{ source: "Exam Technique", tip: "Tax paid is always operating (no choice). Calculate it as: opening tax liability + tax expense for the year − closing tax liability = cash tax paid. Watch for deferred tax adjustments — only current tax movements affect cash." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Bonus shares included in financing cash flows",
			description: "Entities incorrectly show bonus share issuance as a cash inflow (equity issued) and outflow (dividend paid) in financing activities. Bonus shares are a non-cash capitalisation of reserves — no cash changes hands. They must be excluded from the cash flow statement entirely and disclosed as a non-cash transaction in the notes.",
			sector: "Banking",
		},
		{
			title: "Inconsistent interest classification between periods",
			description: "Non-BFI entities change the classification of interest paid between operating and financing activities from one year to the next without treating this as a change in accounting policy. IAS 7.33 requires consistent classification. Any change must be accounted for under NAS 8.",
			sector: "Manufacturing",
		},
		{
			title: "Working capital adjustments calculated incorrectly",
			description: "Entities compute working capital changes using the wrong direction: an increase in receivables is a cash outflow (not inflow), and an increase in payables is a cash inflow (not outflow). This error is especially common when entities have large seasonal fluctuations in trade receivables around the Dashain festival period.",
			sector: "Listed Companies",
		},
		{
			title: "Foreign currency cash flows not translated at transaction-date rates",
			description: "Companies with foreign currency transactions (e.g., import-based manufacturers) translate foreign currency cash flows at the closing rate rather than the rate at the date of the cash flow. IAS 7.25–26 requires transaction-date rates, with unrealised exchange differences reported separately as a reconciling item.",
			sector: "Import/Export",
		},
		{
			title: "Restricted cash not separately disclosed",
			description: "BFIs hold mandatory balances with NRB (Cash Reserve Ratio deposits) that are not available for general use. These restricted balances should be disclosed separately and may not qualify as cash equivalents. Some entities include CRR deposits in cash equivalents without disclosure, overstating available liquidity.",
			sector: "Banking",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "The cash flow statement is one of the five components of a complete set of financial statements required by NAS 1",
		},
		{
			slug: "nas-10",
			nfrsNumber: "NAS 10",
			title: "Events After the Reporting Period",
			reason: "Post-reporting events like dividend declarations affect cash flow classification timing and disclosure",
		},
		{
			slug: "nfrs-16",
			nfrsNumber: "NFRS 16",
			title: "Leases",
			reason: "NFRS 16 lease payments are split between interest (operating or financing) and principal repayment (financing) in the cash flow statement",
		},
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "A change in interest/dividend classification policy in the cash flow statement must be accounted for under NAS 8",
		},
	],
};
