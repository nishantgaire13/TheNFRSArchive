import type { StandardPageData } from "./types";

export const nfrs8: StandardPageData = {
	slug: "nfrs-8",
	nfrsNumber: "NFRS 8",
	ifrsEquivalent: "IFRS 8",
	title: "Operating Segments",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2009-01-01",
	status: "aligned",
	heroMotif: "pie",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA APM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Management Approach — Identifying Segments",
				ifrs: "IFRS 8.5–10 requires operating segments to be identified based on internal reports regularly reviewed by the Chief Operating Decision Maker (CODM) for allocating resources and assessing performance",
				nfrs: "Same management approach. The key challenge in Nepal is identifying who the CODM is — in many Nepali companies, the board of directors, CEO, or a management committee may serve this role depending on the governance structure",
				nepalImpact: "Family-controlled listed companies (common in Nepal) often have the promoter-chairman acting as de facto CODM even if a professional CEO is appointed. Auditors must look through formal titles to substance — who actually allocates resources and reviews segment performance?",
				significance: "high",
			},
			{
				topic: "BFI Segment Identification",
				ifrs: "IFRS 8 does not prescribe specific segments — it follows whatever internal reporting structure the CODM uses",
				nfrs: "Same principle. NRB does not mandate specific segments but requires BFIs to present business segment information in prescribed quarterly and annual reporting formats",
				nepalImpact: "Most Nepali commercial banks report segments as: retail banking, corporate banking, treasury operations, and trade finance. Development banks and finance companies with simpler structures may report fewer segments. Some BFIs aggregate retail and corporate banking, reducing disclosure granularity",
				significance: "high",
			},
			{
				topic: "Aggregation Criteria",
				ifrs: "IFRS 8.12 permits aggregation of operating segments with similar economic characteristics and similar in nature of products/services, production processes, customer type, distribution methods, and regulatory environment",
				nfrs: "Same five aggregation criteria. In Nepal, aggregation is frequently applied by manufacturing conglomerates to combine product lines with similar margins and risk profiles",
				nepalImpact: "Surya Nepal Ltd (Nepal's largest listed manufacturer) reports cigarettes and agri-inputs as separate segments because they have different economic characteristics, production processes, and regulatory environments. However, smaller manufacturers often aggregate all product lines into a single segment, potentially obscuring meaningful differences",
				significance: "medium",
			},
			{
				topic: "Entity-wide Geographic Disclosures",
				ifrs: "IFRS 8.33 requires disclosure of revenues from external customers attributed to the entity's country of domicile and all foreign countries in total (and individually if material)",
				nfrs: "Same requirement. However, the vast majority of Nepali entities operate exclusively within Nepal, making geographic disclosure trivial — 100% domestic revenue",
				nepalImpact: "Geographic disclosures are meaningful only for entities with cross-border operations: Nepali banks with India remittance corridors (e.g., Nepal SBI Bank), carpet and garment exporters, and hydropower companies selling electricity to India. Most listed entities simply state 'all operations are within Nepal' and provide no geographic breakdown",
				significance: "low",
			},
			{
				topic: "Major Customer Disclosure",
				ifrs: "IFRS 8.34 requires disclosure if revenue from any single external customer is 10% or more of total entity revenue, without naming the customer",
				nfrs: "Same 10% threshold and disclosure requirement. Customer identity need not be disclosed — only the amount and which segment earns the revenue",
				nepalImpact: "Major customer concentration is common in Nepal: Nepal Electricity Authority is a dominant customer for hydropower companies (often 100% of revenue), government contracts dominate for construction companies like Pappu Construction, and a handful of distributors account for the majority of FMCG revenue for companies like Bottlers Nepal",
				significance: "medium",
			},
			{
				topic: "Reconciliation to Financial Statements",
				ifrs: "IFRS 8.28 requires reconciliation of total segment revenues, total segment profit or loss, total segment assets, and other material items to corresponding amounts in the entity's financial statements",
				nfrs: "Same reconciliation requirement. Reconciling items typically include head office costs, inter-segment eliminations, and items not allocated to segments",
				nepalImpact: "Nepali BFIs often have significant unallocated items — head office costs (including board expenses, regulatory compliance costs, and CSR expenditure), inter-branch eliminations, and treasury gains/losses that cross segment boundaries. Poor reconciliation practices make it difficult for analysts to assess true segment profitability",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to present segment information in quarterly and annual financial statements using its prescribed formats. NRB's reporting templates distinguish between business segments (retail, corporate, treasury, trade finance) and do not require geographic segmentation given the domestic focus of Nepali banking. BFIs must report segment-wise interest income, interest expense, non-interest income, operating profit, and total assets. NRB uses segment data to monitor concentration risk — excessive reliance on a single business line may trigger supervisory review.",
		sebon: "SEBON requires all listed entities to include segment information in annual reports as per NFRS 8. SEBON has emphasised that entities with diverse business lines must not aggregate all operations into a single segment — this has been flagged in review letters to conglomerates with distinct product divisions. SEBON uses segment disclosures to assess whether cross-subsidisation within conglomerates disadvantages minority shareholders.",
		ird: "IRD uses segment reporting data to verify that transfer pricing between segments (particularly between domestic operations and any cross-border transactions) is at arm's length. For conglomerates operating in multiple sectors with different tax incentives (e.g., manufacturing vs trading), IRD cross-references segment profitability with sector-specific tax returns to identify potential profit shifting between taxable and tax-exempt activities.",
	},

	timeline: [
		{ date: "Nov 2006", label: "IFRS 8 Issued", description: "IASB issued IFRS 8 replacing IAS 14 Segment Reporting" },
		{ date: "Jan 2009", label: "IFRS 8 Effective", description: "IFRS 8 became effective globally" },
		{ date: "Jul 2018", label: "NFRS 8 Effective", description: "NFRS 8 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 8, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Chief Operating Decision Maker",
			coreQuestion: "Who allocates resources and assesses performance of the entity's components?",
			nepalExample: "At Chaudhary Group's listed subsidiary CG Foods, the CODM is the Group CEO who reviews monthly management reports for each product division: instant noodles (Wai Wai), beverages, and confectionery. The board reviews aggregated results — the CEO is the operational decision maker allocating production capacity and marketing budgets across divisions.",
			paraRef: "IFRS 8.7",
		},
		{
			number: 2,
			name: "Identify Operating Segments",
			coreQuestion: "What components does the CODM regularly review that earn revenue and incur expenses?",
			nepalExample: "Nepal Investment Mega Bank's CODM (CEO and management committee) reviews four internal reports: retail banking (consumer loans, deposits, cards), corporate banking (project finance, working capital), treasury (government securities, inter-bank, forex), and trade finance (LCs, guarantees, remittance). Each has discrete financial information and a dedicated department head.",
			paraRef: "IFRS 8.5–6",
		},
		{
			number: 3,
			name: "Apply Quantitative Thresholds",
			coreQuestion: "Does the segment meet the 10% threshold for revenue, profit/loss, or assets?",
			nepalExample: "Surya Nepal identifies three components: cigarettes, agri-inputs, and a small trading division. Trading division revenue is NPR 45 crore against total revenue NPR 2,800 crore (1.6%) — below 10%. It does not meet any threshold and need not be reported separately. Cigarettes (NPR 2,500 crore, 89%) and agri-inputs (NPR 255 crore, 9.1%) — agri-inputs is below 10% revenue but exceeds 10% of total segment profit, so it qualifies as a reportable segment.",
			paraRef: "IFRS 8.13",
		},
		{
			number: 4,
			name: "Disclose Segment Information",
			coreQuestion: "What financial data must be disclosed for each reportable segment?",
			nepalExample: "For Himalayan Bank's corporate banking segment: external revenue (interest income from corporate loans) NPR 12,500 crore, inter-segment revenue (interest on funds provided to treasury) NPR 800 crore, segment profit NPR 3,200 crore, segment assets (corporate loan book) NPR 85,000 crore, segment liabilities (corporate deposits) NPR 42,000 crore. Basis of measurement: internal transfer pricing rate for inter-segment funds.",
			paraRef: "IFRS 8.23–24",
		},
		{
			number: 5,
			name: "Reconcile to Financial Statements and Provide Entity-wide Disclosures",
			coreQuestion: "Do segment totals reconcile to the financial statements? Are entity-wide disclosures complete?",
			nepalExample: "Nepal Telecom reconciles: total segment revenue NPR 4,200 crore + unallocated revenue NPR 80 crore − inter-segment eliminations NPR 150 crore = reported revenue NPR 4,130 crore. Entity-wide: geographic disclosure — 98% domestic, 2% international (ISD revenue). Major customers — Nepal government entities contribute NPR 620 crore (15% of revenue), disclosed without naming.",
			paraRef: "IFRS 8.28, 32–34",
		},
	],

	inlineExamples: {
		segmentIdentification: {
			title: "Surya Nepal — Identifying and Reporting Operating Segments",
			context: "Surya Nepal Ltd (listed on NEPSE) manufactures cigarettes and agri-inputs (seeds, pesticides). The company also has a small trading division importing and distributing consumer goods. The CEO reviews monthly reports for each division showing revenue, gross margin, operating profit, and assets employed. Total revenue: cigarettes NPR 2,500 crore, agri-inputs NPR 255 crore, trading NPR 45 crore. Total entity revenue: NPR 2,800 crore.",
			steps: [
				"Step 1 — Identify CODM: The CEO reviews divisional performance reports monthly and makes resource allocation decisions (e.g., capital expenditure for new cigarette production lines vs agri-input warehouse expansion). The CEO is the CODM.",
				"Step 2 — Identify operating segments: Three components — cigarettes, agri-inputs, trading — each has discrete financial information reviewed by the CODM and a dedicated divisional head. All three are operating segments.",
				"Step 3 — Apply 10% quantitative thresholds: Revenue test — cigarettes NPR 2,500 cr (89%) passes, agri-inputs NPR 255 cr (9.1%) does not pass, trading NPR 45 cr (1.6%) does not pass. Profit test — agri-inputs operating profit NPR 38 crore against combined segment profit NPR 310 crore (12.3%) — passes 10%. Trading profit NPR 3 crore (1%) — does not pass any threshold.",
				"Step 4 — Reportable segments: Cigarettes and agri-inputs are reportable. Trading is below all thresholds — include in 'all other segments' category. Check 75% rule: reportable segment revenue = NPR 2,755 crore / NPR 2,800 crore = 98% — exceeds 75%, so no additional segments need to be reported.",
				"Step 5 — Disclose for each reportable segment: Cigarettes — revenue NPR 2,500 cr, operating profit NPR 275 cr, assets NPR 800 cr, depreciation NPR 45 cr, capital expenditure NPR 120 cr. Agri-inputs — revenue NPR 255 cr, operating profit NPR 38 cr, assets NPR 180 cr, depreciation NPR 12 cr, capital expenditure NPR 25 cr.",
				"Step 6 — Entity-wide disclosures: Geographic — 100% domestic (Nepal). Major customers — no single customer exceeds 10% of revenue (cigarettes distributed through hundreds of dealers). Products — cigarettes contribute 89% of revenue.",
			],
			journalEntries: [
				"No journal entries arise from segment reporting — NFRS 8 is a disclosure standard. Segment information is derived from the internal management reporting system and presented in the notes to the financial statements.",
				"Inter-segment transactions (e.g., agri-inputs division supplying tobacco leaf to cigarettes division at NPR 15 crore) are eliminated in reconciliation: the transfer price is reported as inter-segment revenue for agri-inputs and inter-segment cost for cigarettes, then eliminated to arrive at consolidated entity revenue.",
			],
			difficulty: "medium",
		},
		codmIdentification: {
			title: "Prabhu Group — Identifying the CODM in a Nepali Conglomerate",
			context: "Prabhu Bank Ltd is part of the Prabhu Group with interests in banking, insurance, media, and remittance. The bank's board has 9 members (4 promoter-directors, 3 independent, 2 professional). The CEO manages day-to-day operations. However, the promoter-chairman reviews weekly business unit reports and directs capital allocation between retail expansion and treasury operations. The management committee (CEO, CFO, CRO, heads of retail, corporate, treasury) meets fortnightly to review segment performance.",
			steps: [
				"Step 1 — Assess who allocates resources: The promoter-chairman directs strategic capital allocation (e.g., NPR 500 crore for branch network expansion vs NPR 200 crore for government bond portfolio). However, the management committee allocates operational resources (staff deployment, marketing budgets) between segments fortnightly.",
				"Step 2 — Assess who reviews performance: The management committee reviews detailed segment P&L, NPA ratios, and deposit growth by business unit every two weeks. The chairman reviews summary dashboards weekly. The full board reviews quarterly consolidated results.",
				"Step 3 — Determine CODM: NFRS 8 says the CODM is a function, not necessarily a single person. Here, the management committee is the CODM — it reviews discrete financial information for each operating segment and makes resource allocation decisions at the operational level. The chairman's strategic oversight does not replace the committee's role as CODM.",
				"Step 4 — Identify operating segments from CODM's internal reports: The management committee reviews four reports — retail banking, corporate banking, treasury, and trade finance/remittance. These are the four operating segments.",
				"Step 5 — Document the judgement: Disclose in accounting policies that the management committee is identified as the CODM and that operating segments correspond to internal business unit reports reviewed fortnightly. This judgement is subject to auditor scrutiny under NAS 1.122 (disclosure of significant judgements).",
			],
			journalEntries: [
				"No journal entries — segment identification and CODM determination are disclosure matters. The accounting policy note should state: 'The management committee has been identified as the chief operating decision maker. Operating segments are determined based on reports reviewed by the management committee.'",
				"Inter-segment pricing for funds transfer (retail deposits funding corporate loans) uses an internal transfer pricing rate — this pricing affects reported segment profitability but does not generate external journal entries.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The management approach is the foundation of NFRS 8. Exam questions often describe a company's internal reporting structure and ask you to identify operating segments. Focus on what the CODM reviews — not what management thinks the segments should be for external reporting purposes." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates confuse operating segments with reportable segments. All reportable segments are operating segments, but not all operating segments are reportable — the 10% quantitative thresholds (revenue, profit/loss, assets) and 75% sufficiency test determine which operating segments must be separately disclosed." },
			{ source: "Exam Technique", tip: "The aggregation criteria in NFRS 8.12 require BOTH similar economic characteristics AND similarity across ALL five qualitative factors (products, processes, customers, distribution, regulation). Meeting only one factor is insufficient. Examiners test whether candidates can correctly deny aggregation when products have different risk profiles." },
			{ source: "Recurring Pattern", tip: "Entity-wide disclosures apply even to entities with a single reportable segment. Products and services revenue breakdown, geographic information, and major customer disclosures are required regardless of segment structure." },
			{ source: "Nepal-specific", tip: "For Nepal questions: BFI segments typically follow retail/corporate/treasury/trade finance lines. Geographic disclosures are minimal (domestic only). Major customer concentration appears in hydropower (NEA as sole buyer), construction (government contracts), and telecoms (Nepal government as major customer)." },
			{ source: "Exam Technique", tip: "When a question asks you to reconcile segment information to the financial statements, remember to account for: unallocated head office costs, inter-segment eliminations, and items measured differently for segment reporting vs financial statements (e.g., segment profit may exclude certain central costs that are included in reported operating profit)." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Single-segment reporting despite diverse operations",
			description: "Conglomerates with clearly distinct business lines (e.g., manufacturing and real estate, or banking and insurance) report all operations as a single segment, claiming the CODM reviews only consolidated results. This is rarely credible — if the entity has separate divisions with dedicated management, the CODM almost certainly reviews divisional performance. Auditors should challenge single-segment assertions by examining internal management reports.",
			sector: "Listed Companies",
		},
		{
			title: "CODM identification based on title rather than function",
			description: "Entities designate the CEO as CODM by default without assessing who actually allocates resources and reviews segment performance. In Nepali family-controlled companies, the promoter-chairman or a family member may exercise the CODM function informally. NFRS 8 requires substance over form — the CODM is identified by function, not job title.",
			sector: "Listed Companies",
		},
		{
			title: "Inappropriate aggregation of dissimilar segments",
			description: "Entities aggregate operating segments that fail the similarity criteria — for example, combining a high-margin retail banking segment with a low-margin microfinance segment because both 'serve individual customers'. NFRS 8.12 requires similar economic characteristics AND similarity across all five qualitative factors. Different margin profiles and risk characteristics should preclude aggregation.",
			sector: "Banking & Finance",
		},
		{
			title: "Geographic disclosures omitted for entities with cross-border revenue",
			description: "Entities with material cross-border revenue (carpet exporters, hydropower companies selling electricity to India, BFIs with remittance operations) fail to provide geographic revenue and asset disclosures. While most Nepali entities are domestic-only, those with foreign revenue must disclose it by country if material under NFRS 8.33.",
			sector: "Import/Export",
		},
		{
			title: "Major customer disclosure missed for hydropower companies",
			description: "Hydropower companies that sell 100% of output to Nepal Electricity Authority (NEA) under power purchase agreements fail to disclose NEA as a major customer contributing more than 10% of revenue. NFRS 8.34 does not require naming the customer, but the amount and segment must be disclosed. This applies to virtually all Nepali independent power producers.",
			sector: "Hydropower & Energy",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 1 sets the overall financial statement presentation framework — NFRS 8 segment disclosures form part of the notes required by NAS 1",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Revenue disclosed by segment must be consistent with revenue recognised under NFRS 15 — disaggregation of revenue under NFRS 15.114 often aligns with segment revenue disclosures",
		},
		{
			slug: "nas-33",
			nfrsNumber: "NAS 33",
			title: "Earnings Per Share",
			reason: "NAS 33 requires EPS to be presented for the entity as a whole — NFRS 8 segment disclosures provide the underlying disaggregated performance that drives consolidated EPS",
		},
		{
			slug: "nas-24",
			nfrsNumber: "NAS 24",
			title: "Related Party Disclosures",
			reason: "Inter-segment transactions within a group often involve related parties — NAS 24 disclosure requirements apply to transfer pricing and transactions between segments controlled by related parties",
		},
	],
};
