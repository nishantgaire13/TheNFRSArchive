import type { StandardPageData } from "./types";

export const nfrs3: StandardPageData = {
	slug: "nfrs-3",
	nfrsNumber: "NFRS 3",
	ifrsEquivalent: "IFRS 3",
	title: "Business Combinations",
	topic: "consolidation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2004-03-31",
	status: "aligned",
	heroMotif: "merge",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA AA","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Acquisition Method",
				ifrs: "IFRS 3 requires the acquisition method for all business combinations — identify the acquirer, determine the acquisition date, recognise and measure identifiable assets, liabilities, and goodwill (IFRS 3.4–5)",
				nfrs: "Same requirement. All business combinations in Nepal must use the acquisition method. NRB-directed bank mergers still apply the acquisition method even though the combination is mandated by the regulator",
				nepalImpact: "NRB-directed mergers create complexity in identifying the acquirer because both parties may be unwilling. Entities must still follow NFRS 3 guidance on identifying the acquirer based on relative size, board composition, and which entity issues equity",
				significance: "high",
			},
			{
				topic: "Identifying the Acquirer",
				ifrs: "The acquirer is the entity that obtains control of the acquiree. IFRS 3.B13–B18 provides guidance including relative voting rights, board composition, and which entity pays consideration",
				nfrs: "Same guidance. In NRB-directed mergers (e.g., NIC and Asia Bank → NIC Asia), the acquirer must be identified even though neither party initiated the combination. Typically, the entity whose shareholders hold the majority of voting rights in the combined entity is the acquirer",
				nepalImpact: "Nepal has seen several NRB-directed mergers where smaller BFIs are absorbed by larger ones. In Global IME Bank's absorption of Janata Bank and Commerz & Trust Bank, Global IME was clearly the acquirer based on relative size and continuation of brand, management, and listing status",
				significance: "high",
			},
			{
				topic: "Consideration Transferred",
				ifrs: "Consideration is measured at fair value and includes cash, equity instruments, contingent consideration, and assets transferred (IFRS 3.37–40)",
				nfrs: "Same measurement. In Nepali bank mergers, consideration is typically share-swap based — the acquirer issues new shares to acquiree shareholders at an agreed swap ratio. SEBON approves the swap ratio. Contingent consideration is rare in Nepal",
				nepalImpact: "Share swap ratios in Nepali bank mergers are negotiated based on net asset value per share rather than market capitalisation, often leading to disagreements. For example, in the NMB Bank and Sagarmatha Development Bank merger, the swap ratio was determined based on adjusted book values reviewed by independent valuers",
				significance: "high",
			},
			{
				topic: "Goodwill Recognition",
				ifrs: "Goodwill is measured as the excess of consideration transferred over the net identifiable assets acquired. Goodwill is not amortised but tested annually for impairment under IAS 36 (IFRS 3.32)",
				nfrs: "Same treatment. Goodwill arising from Nepali bank mergers is recognised and tested for impairment under NAS 36. However, NRB Directive 4 requires banks to deduct goodwill from core capital (Tier 1) for capital adequacy purposes",
				nepalImpact: "Goodwill from bank mergers has a direct impact on regulatory capital. NRB requires full deduction of goodwill from Tier 1 capital, which can significantly reduce capital adequacy ratios. This creates tension between NFRS 3 recognition and regulatory capital treatment",
				significance: "high",
			},
			{
				topic: "Bargain Purchase",
				ifrs: "If the net identifiable assets exceed consideration transferred, the acquirer recognises a gain in profit or loss. Before recognising, the acquirer must reassess identification and measurement of assets and liabilities (IFRS 3.34–36)",
				nfrs: "Same requirement. Bargain purchases have occurred in NRB-directed mergers where a distressed BFI's net assets at fair value exceeded the share swap consideration — particularly when loan portfolios were conservatively provisioned by the acquiree",
				nepalImpact: "Some NRB-directed mergers of weaker institutions with stronger banks resulted in bargain purchase gains. Auditors must exercise heightened scepticism and reassess all fair values before recognising a gain, as loan portfolio impairment may be understated in the acquiree's books",
				significance: "medium",
			},
			{
				topic: "Measurement Period Adjustments",
				ifrs: "The acquirer may adjust provisional amounts recognised at acquisition date during a measurement period not exceeding 12 months from the acquisition date (IFRS 3.45–50)",
				nfrs: "Same 12-month measurement period. In Nepal, fair value assessments of acquired BFI loan portfolios often require the full measurement period because loan files are voluminous and independent credit assessments take time",
				nepalImpact: "Acquirers in Nepali bank mergers frequently use the measurement period to refine loan portfolio fair values. Provisional goodwill may be adjusted significantly when detailed credit reviews reveal additional non-performing loans in the acquired portfolio. NRB expects the acquirer to complete fair value assessment within the measurement period",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB has actively directed bank mergers under the Bank and Financial Institution Act 2073 and the NRB Merger Bylaws 2068 to strengthen the banking sector. NRB prescribes a merger facilitation framework and may direct mergers of weak BFIs with stronger ones. Goodwill arising from mergers must be deducted from Tier 1 core capital for capital adequacy computation under NRB Directive 1. NRB requires combined financial statements to be prepared within 90 days of the effective merger date. The merged entity must submit a revised capital plan showing compliance with minimum capital requirements post-merger.",
		sebon: "SEBON approves the share swap ratio in mergers involving listed entities. SEBON requires detailed disclosures in the combined entity's first annual report, including fair values of identifiable assets and liabilities, goodwill or bargain purchase amount, and the swap ratio methodology. SEBON monitors post-merger trading of the combined entity's shares and may impose a temporary trading halt during the integration period. Listed acquirers must make immediate material information disclosures upon signing the MoU for the merger.",
		ird: "IRD treats the merged entity as a successor for tax purposes. Accumulated tax losses of the acquiree cannot generally be carried forward to offset the acquirer's taxable income unless the merger is approved under the Income Tax Act 2058 provisions for amalgamation. Capital gains arising on share swaps may be taxable for acquiree shareholders at 5–10% depending on holding period. Depreciation on revalued assets recognised at fair value on acquisition is not deductible for tax purposes — creating a temporary difference under NAS 12.",
	},

	timeline: [
		{ date: "Mar 2004", label: "IFRS 3 Effective", description: "IFRS 3 (Revised 2004) became effective globally, replacing IAS 22" },
		{ date: "Jan 2008", label: "IFRS 3 Revised", description: "IFRS 3 (Revised 2008) became effective globally with significant changes to step acquisitions and non-controlling interest measurement" },
		{ date: "2068 BS", label: "NRB Merger Bylaws", description: "NRB issued Merger Bylaws 2068 to facilitate consolidation of the banking sector" },
		{ date: "Jul 2018", label: "NFRS 3 Effective", description: "NFRS 3 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "2018–2025", label: "Major Mergers", description: "Wave of NRB-directed and voluntary bank mergers: NIC Asia, Global IME, Himalayan Bank–Civil Bank, Kumari–Nepal Credit and Commerce" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 3, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Acquirer",
			coreQuestion: "Which entity obtains control of the other?",
			nepalExample: "In the NIC Bank and Bank of Asia merger, NIC Bank was identified as the acquirer because NIC shareholders held approximately 60% of voting rights in the combined entity, NIC's management occupied the majority of board positions, and the combined entity operated under NIC's banking licence (later rebranded NIC Asia Bank).",
			paraRef: "IFRS 3.6–7, B13–B18",
		},
		{
			number: 2,
			name: "Determine the Acquisition Date",
			coreQuestion: "On what date does the acquirer obtain control?",
			nepalExample: "Global IME Bank obtained control of Janata Bank on the NRB-approved effective date of 1 Shrawan 2078 BS (mid-July 2021). This is the date on which Global IME legally obtained control of Janata Bank's operations, even though operational integration continued for several months.",
			paraRef: "IFRS 3.8–9",
		},
		{
			number: 3,
			name: "Recognise and Measure Identifiable Assets and Liabilities at Fair Value",
			coreQuestion: "What is the fair value of each identifiable asset and liability of the acquiree?",
			nepalExample: "When Himalayan Bank acquired Civil Bank, identifiable assets included: loan portfolio at fair value NPR 42 arba (adjusted downward by NPR 2,80 crore for expected credit losses), fixed assets at NPR 3,10 crore (revalued from book value of NPR 2,40 crore), customer relationship intangible at NPR 85 lakh (not previously recognised by Civil Bank), and deposits liability at NPR 48 arba (at fair value approximating carrying amount).",
			paraRef: "IFRS 3.10–31",
		},
		{
			number: 4,
			name: "Measure Consideration Transferred",
			coreQuestion: "What is the acquisition-date fair value of consideration given?",
			nepalExample: "Himalayan Bank issued 1,50,00,000 new shares at a SEBON-approved swap ratio of 100:72 (100 Civil Bank shares exchanged for 72 Himalayan Bank shares). Fair value of consideration = 1,50,00,000 shares × NPR 580 (Himalayan Bank share price on acquisition date) = NPR 87 arba. No cash consideration or contingent consideration was involved.",
			paraRef: "IFRS 3.37–40",
		},
		{
			number: 5,
			name: "Recognise Goodwill or Bargain Purchase Gain",
			coreQuestion: "Does consideration exceed net identifiable assets (goodwill), or is it less (bargain purchase)?",
			nepalExample: "Goodwill = Consideration NPR 87 arba − Fair value of net identifiable assets NPR 81 arba = NPR 6 arba. This goodwill of NPR 6 arba is recognised on Himalayan Bank's consolidated balance sheet and tested annually for impairment under NAS 36. For NRB capital adequacy, the NPR 6 arba is deducted from Tier 1 core capital.",
			paraRef: "IFRS 3.32–36",
		},
	],

	inlineExamples: {
		bankMerger: {
			title: "Kumari Bank — Acquisition of Nepal Credit and Commerce Bank",
			context: "Kumari Bank Ltd acquires Nepal Credit and Commerce Bank (NCC Bank) in a NRB-directed merger effective 1 Magh 2080 BS. The swap ratio approved by SEBON is 100:55 (100 NCC shares for 55 Kumari shares). Kumari Bank's share price on acquisition date is NPR 310. NCC Bank's identifiable net assets at fair value total NPR 18,50 crore. Kumari issues 2,20,00,000 new shares. NCC Bank's loan portfolio requires NPR 3,80 crore additional impairment provision at fair value.",
			steps: [
				"Step 1 — Identify the acquirer: Kumari Bank is the acquirer — its shareholders hold 62% of combined voting rights, its management retains control of the board, and the entity continues under Kumari Bank's licence and brand.",
				"Step 2 — Determine acquisition date: 1 Magh 2080 BS (mid-January 2024), the NRB-approved effective date when Kumari obtains legal control of NCC Bank's operations.",
				"Step 3 — Measure consideration transferred: 2,20,00,000 shares × NPR 310 = NPR 68,20,00,000 (NPR 68.20 crore). No cash or contingent consideration.",
				"Step 4 — Recognise identifiable net assets at fair value: NPR 18,50 crore. Key adjustments from book value: loan portfolio reduced by NPR 3,80 crore for additional impairment, fixed assets increased by NPR 1,20 crore on revaluation, customer relationship intangible of NPR 60 lakh recognised.",
				"Step 5 — Calculate goodwill: Consideration NPR 68.20 crore − Net identifiable assets NPR 18.50 crore = Goodwill NPR 49.70 crore.",
				"Step 6 — Regulatory impact: Goodwill of NPR 49.70 crore is deducted from Kumari Bank's Tier 1 core capital for NRB capital adequacy. Kumari must demonstrate continued compliance with minimum capital of NPR 8 arba after the deduction.",
			],
			journalEntries: [
				"Dr Loans and Advances (at fair value) NPR 82,00,00,000 / Dr Fixed Assets NPR 4,20,00,000 / Dr Customer Relationship Intangible NPR 60,00,000 / Dr Goodwill NPR 49,70,00,000 / Cr Customer Deposits NPR 95,50,00,000 / Cr Other Liabilities NPR 8,80,00,000 / Cr Share Capital NPR 22,00,00,000 / Cr Share Premium NPR 10,20,00,000 — entry to record the business combination on the acquisition date.",
				"Impairment adjustment to NCC Bank's loan portfolio: Dr Impairment Allowance (fair value adjustment) NPR 3,80,00,000 — reflected in the fair value of loans acquired, not as a separate journal entry post-acquisition.",
				"Goodwill impairment test (annual): If recoverable amount of the cash-generating unit falls below carrying amount including goodwill, Dr Impairment Loss / Cr Goodwill.",
			],
			difficulty: "pro",
		},
		bargainPurchase: {
			title: "Prabhu Bank — Bargain Purchase in Merger with Kist Bank",
			context: "Prabhu Bank acquires Kist Bank in a merger effective Shrawan 2079 BS. Kist Bank's identifiable net assets at fair value are NPR 12,80 crore. The SEBON-approved swap ratio results in consideration transferred of NPR 10,50 crore (Prabhu Bank issues 1,40,00,000 shares at NPR 75 each). The fair value of net assets exceeds consideration, indicating a potential bargain purchase of NPR 2,30 crore.",
			steps: [
				"Step 1 — Identify the acquirer: Prabhu Bank is the acquirer based on relative size, board control, and continuation of Prabhu Bank's licence.",
				"Step 2 — Before recognising a bargain purchase gain, Prabhu Bank must reassess: (a) completeness of identifiable assets and liabilities, (b) fair value measurements of all recognised items, (c) consideration transferred measurement.",
				"Step 3 — After reassessment, the bargain purchase is confirmed. Key driver: Kist Bank had conservatively provisioned its loan portfolio, and fair value assessment revealed the portfolio was worth more than book value after adjusting for actual credit quality.",
				"Step 4 — Recognise bargain purchase gain of NPR 2,30 crore in profit or loss for the year ended Ashad 2080 BS.",
				"Step 5 — Disclose in notes: the amount of gain, reasons for the bargain purchase (NRB-directed merger of a distressed institution at a swap ratio favourable to the acquirer), and the line item in the statement of profit or loss where the gain is recognised.",
			],
			journalEntries: [
				"Dr Net Identifiable Assets (at fair value) NPR 12,80,00,000 / Cr Share Capital NPR 7,00,00,000 / Cr Share Premium NPR 3,50,00,000 / Cr Gain on Bargain Purchase (P&L) NPR 2,30,00,000 — entry to record the business combination with a bargain purchase gain.",
				"The bargain purchase gain of NPR 2,30 crore is presented as 'Other Income' in the statement of profit or loss and is subject to income tax at the applicable corporate rate of 30% for BFIs.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The acquisition method is the only method permitted under IFRS 3. There is no pooling of interests or merger accounting. Every business combination (except those under common control) must follow the five-step acquisition method." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates often fail to correctly identify the acquirer in NRB-directed mergers. Even though the regulator mandates the merger, one party must be identified as the acquirer using IFRS 3.B13–B18 criteria. The entity whose shareholders hold the majority of combined voting rights is typically the acquirer." },
			{ source: "Exam Technique", tip: "Calculate goodwill step by step: (1) Consideration transferred at fair value, (2) Plus non-controlling interest (if partial acquisition), (3) Plus fair value of previously held equity interest (if step acquisition), (4) Less net identifiable assets at fair value. Present each component clearly." },
			{ source: "Recurring Pattern", tip: "Fair value adjustments to the acquiree's assets create temporary differences under NAS 12. A revaluation of land upward on acquisition creates a deferred tax liability. Remember to account for deferred tax on fair value adjustments when calculating net identifiable assets." },
			{ source: "Nepal-specific", tip: "In Nepali bank mergers, goodwill is deducted from Tier 1 capital for NRB capital adequacy. This does not change the NFRS 3 accounting treatment but is a critical regulatory overlay that examiners may test as a discussion point." },
			{ source: "Exam Technique", tip: "Bargain purchase requires reassessment before recognition. Never jump to recognising a gain without stating that you have reassessed (a) identification of all assets/liabilities, (b) fair value measurements, and (c) consideration transferred. This reassessment step earns marks." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Failure to recognise intangible assets separately from goodwill",
			description: "Acquirers in Nepali bank mergers often fail to separately identify and measure intangible assets such as customer relationships, core deposit intangibles, and brand value. These assets are subsumed into goodwill, inflating the goodwill figure and resulting in non-compliance with NFRS 3.13 which requires recognition of identifiable intangible assets meeting the definition in NAS 38.",
			sector: "Banking",
		},
		{
			title: "Using book values instead of fair values for acquired assets",
			description: "Some entities record acquired assets and liabilities at the acquiree's book values rather than at acquisition-date fair values. This is particularly common for loan portfolios where the acquirer continues using the acquiree's provision levels rather than performing an independent fair value assessment. NFRS 3 requires all identifiable assets and liabilities to be measured at fair value on the acquisition date.",
			sector: "Banking",
		},
		{
			title: "Incorrect treatment of merger-related costs",
			description: "Entities capitalise merger-related advisory fees, legal costs, and due diligence expenses as part of the cost of the business combination. Under NFRS 3.53, acquisition-related costs must be expensed in the period incurred, except for costs of issuing equity instruments (which follow NAS 32) and costs of issuing debt instruments (which follow NFRS 9).",
			sector: "Listed Companies",
		},
		{
			title: "Not deducting goodwill from regulatory capital",
			description: "BFIs recognise goodwill on the balance sheet under NFRS 3 but fail to deduct it from Tier 1 core capital in the NRB capital adequacy computation. This overstates the capital adequacy ratio and may result in regulatory sanctions. While this is a regulatory compliance issue rather than an accounting error, it is a common oversight during post-merger integration.",
			sector: "Banking",
		},
		{
			title: "Measurement period adjustments treated as current-period changes",
			description: "When new information about acquisition-date conditions emerges during the 12-month measurement period, entities record adjustments as current-period gains or losses instead of retrospectively adjusting the provisional amounts recognised at the acquisition date. NFRS 3.45 requires measurement period adjustments to be recognised as if the accounting had been completed at the acquisition date.",
			sector: "Listed Companies",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-10",
			nfrsNumber: "NFRS 10",
			title: "Consolidated Financial Statements",
			reason: "NFRS 10 defines control and requires consolidation of subsidiaries acquired through business combinations",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Goodwill recognised under NFRS 3 must be tested annually for impairment under NAS 36",
		},
		{
			slug: "nas-38",
			nfrsNumber: "NAS 38",
			title: "Intangible Assets",
			reason: "Identifiable intangible assets acquired in a business combination must meet the recognition criteria in NAS 38",
		},
		{
			slug: "nas-27",
			nfrsNumber: "NAS 27",
			title: "Separate Financial Statements",
			reason: "Investment in subsidiaries acquired through business combinations is accounted for in the acquirer's separate financial statements under NAS 27",
		},
	],
};
