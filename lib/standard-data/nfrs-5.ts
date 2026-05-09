import type { StandardPageData } from "./types";

export const nfrs5: StandardPageData = {
	slug: "nfrs-5",
	nfrsNumber: "NFRS 5",
	ifrsEquivalent: "IFRS 5",
	title: "Non-current Assets Held for Sale and Discontinued Operations",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "tag",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Classification Criteria",
				ifrs: "A non-current asset is classified as held for sale if its carrying amount will be recovered principally through a sale transaction rather than through continuing use. The asset must be available for immediate sale and the sale must be highly probable (IFRS 5.6–8)",
				nfrs: "Same criteria. In Nepal, BFIs frequently classify foreclosed properties (non-banking assets acquired in loan recovery) as held for sale. NRB requires these assets to be disposed of within 7 years of acquisition, providing a clear regulatory expectation of sale",
				nepalImpact: "Foreclosed properties are a major category of assets held for sale in Nepali BFIs. NRB Directive 2 requires banks to acquire non-banking assets only through loan recovery and dispose of them within 7 years. If disposal does not occur within 7 years, NRB may require additional provisioning",
				significance: "high",
			},
			{
				topic: "Measurement at Lower of Carrying Amount and Fair Value Less Costs to Sell",
				ifrs: "On classification as held for sale, the asset is measured at the lower of its carrying amount and fair value less costs to sell. Any impairment loss is recognised in profit or loss (IFRS 5.15–18)",
				nfrs: "Same measurement. Nepali entities often struggle to determine fair value for foreclosed properties because the real estate market is illiquid in many districts. Valuation reports from licensed valuers are required but may use outdated comparable transactions",
				nepalImpact: "Fair value determination for foreclosed properties in rural districts of Nepal is challenging due to limited transaction data. BFIs often rely on government Minimum Reference Values (MRVs) set by the District Land Revenue Office, which may not reflect actual market values. This can lead to under- or over-statement of fair value less costs to sell",
				significance: "high",
			},
			{
				topic: "Cessation of Depreciation",
				ifrs: "Depreciation ceases on the date an asset is classified as held for sale. The asset is no longer depreciated even if still in use prior to actual sale (IFRS 5.25)",
				nfrs: "Same requirement. Nepali entities sometimes continue depreciating assets after classification as held for sale because their accounting systems are not configured to halt depreciation for specific assets. This overstates depreciation expense and understates asset carrying amounts",
				nepalImpact: "Manufacturing companies such as Unilever Nepal and Bottlers Nepal have classified specific production lines as held for sale when rationalising operations. Auditors must verify that depreciation was ceased from the classification date, particularly in ERP systems that apply depreciation automatically on a group basis",
				significance: "medium",
			},
			{
				topic: "Presentation as Current Asset",
				ifrs: "Assets classified as held for sale are presented separately as current assets on the face of the statement of financial position, not within the non-current asset category (IFRS 5.38)",
				nfrs: "Same presentation. Some Nepali entities reclassify the asset but do not present it separately on the face of the balance sheet — instead burying it within 'Other Current Assets' without adequate face-level disclosure",
				nepalImpact: "NRB financial statement templates for BFIs include a specific line item for 'Non-Banking Assets' which captures foreclosed properties. This NRB template presentation largely aligns with NFRS 5 but entities must ensure the line item covers all NFRS 5 criteria, not just foreclosed assets",
				significance: "medium",
			},
			{
				topic: "Discontinued Operations",
				ifrs: "A discontinued operation is a component of an entity that has been disposed of or is classified as held for sale and represents a separate major line of business or geographical area of operations (IFRS 5.31–32)",
				nfrs: "Same definition. Discontinued operations are less common in Nepal because most entities operate in a single geographical area. However, conglomerates like Chaudhary Group or Golchha Organisation may discontinue specific business segments",
				nepalImpact: "When Nepali conglomerates divest business lines, the discontinued operation must be presented separately in the statement of profit or loss — showing a single amount comprising post-tax profit or loss and post-tax gain or loss on disposal. Many Nepali entities incorrectly mix continuing and discontinued results",
				significance: "medium",
			},
			{
				topic: "Extended Disposal Period Exceptions",
				ifrs: "If the sale is expected to take longer than one year, costs to sell are measured at present value. IFRS 5 Appendix B provides exceptions for events beyond the entity's control that extend the disposal period (IFRS 5.9, B1)",
				nfrs: "Same exceptions apply. In Nepal, land title disputes, prolonged court proceedings, and bureaucratic delays at the Land Revenue Office frequently extend the disposal period beyond one year for foreclosed properties",
				nepalImpact: "BFIs holding foreclosed properties often face disposal delays due to encumbered titles, pending litigation, or lack of buyers in rural areas. The entity must assess at each reporting date whether the criteria for held-for-sale classification continue to be met. If NRB's 7-year deadline approaches without disposal, additional regulatory provisioning may be triggered",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Directive 2 governs non-banking assets (foreclosed properties) held by BFIs. Banks must dispose of non-banking assets within 7 years of acquisition. If not disposed of within 5 years, BFIs must provision 50% of the carrying amount; if not disposed of within 7 years, 100% provisioning is required. NRB requires a separate schedule of non-banking assets in the regulatory returns showing acquisition date, valuation, and disposal status. BFIs must obtain an updated valuation report from a licensed valuer at least every 2 years for properties held for sale.",
		sebon: "SEBON requires listed entities to disclose the nature and carrying amount of non-current assets held for sale on the face of the balance sheet. For discontinued operations, SEBON requires disclosure of the reason for discontinuation, expected timeline for completion of disposal, and the financial impact on the entity's continuing operations. SEBON monitors entities with significant held-for-sale portfolios as part of its financial health surveillance of listed companies.",
		ird: "IRD treats gains on disposal of assets held for sale as taxable income in the year of disposal. For foreclosed properties, the cost base for capital gains tax is the amount at which the BFI acquired the asset during loan recovery. Depreciation claimed prior to held-for-sale classification may need to be reversed for tax purposes if the asset is sold at a gain (depreciation recapture under Income Tax Act 2058). IRD does not recognise the held-for-sale classification for tax depreciation purposes — the asset continues in the tax depreciation pool until actual disposal.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IFRS 5 Effective", description: "IFRS 5 became effective globally, replacing IAS 35 Discontinuing Operations" },
		{ date: "Jul 2014", label: "Pre-NFRS Period", description: "Limited guidance on held-for-sale assets under Nepal GAAP. BFIs followed NRB directives for non-banking assets without formal NFRS 5 classification" },
		{ date: "Jul 2018", label: "NFRS 5 Effective", description: "NFRS 5 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 5, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Assess Held-for-Sale Classification Criteria",
			coreQuestion: "Is the asset available for immediate sale in its present condition, and is the sale highly probable?",
			nepalExample: "Nepal Bank Ltd forecloses on a commercial property in Putalisadak, Kathmandu valued at NPR 8,50 crore during loan recovery. The property is immediately available for sale — no renovation needed. Management has committed to a plan to sell and has engaged a real estate agent. The sale is expected to complete within 6 months. The asset meets NFRS 5 classification criteria on the foreclosure date.",
			paraRef: "IFRS 5.6–8",
		},
		{
			number: 2,
			name: "Measure at Lower of Carrying Amount and Fair Value Less Costs to Sell",
			coreQuestion: "What is the write-down required, if any?",
			nepalExample: "Nepal Bank acquired the foreclosed property at NPR 8,50 crore (loan recovery value). A licensed valuer determines fair value at NPR 7,80 crore based on comparable transactions in the Putalisadak area. Estimated costs to sell (agent commission 2%, legal fees, transfer taxes) total NPR 35 lakh. Fair value less costs to sell = NPR 7,45 crore. Write-down = NPR 8,50 crore − NPR 7,45 crore = NPR 1,05 crore impairment loss recognised in profit or loss.",
			paraRef: "IFRS 5.15–18",
		},
		{
			number: 3,
			name: "Cease Depreciation",
			coreQuestion: "Has depreciation been stopped from the classification date?",
			nepalExample: "Bottlers Nepal classifies a bottling line with a carrying amount of NPR 2,40 crore as held for sale on 1 Poush 2081 BS. The line was being depreciated at NPR 24 lakh per year. From 1 Poush 2081, no further depreciation is charged. The asset remains at NPR 2,40 crore (or at fair value less costs to sell if lower) until sold or reclassified.",
			paraRef: "IFRS 5.25",
		},
		{
			number: 4,
			name: "Present Separately on the Balance Sheet",
			coreQuestion: "Is the asset shown as a separate current asset line item?",
			nepalExample: "Nepal Bank presents the foreclosed property of NPR 7,45 crore as a separate line item 'Non-current Assets Held for Sale' in the current assets section of the statement of financial position for the year ended Ashad 2082. The NRB template line item 'Non-Banking Assets' may be used, with a note cross-referencing NFRS 5 classification.",
			paraRef: "IFRS 5.38",
		},
		{
			number: 5,
			name: "Assess Discontinued Operations (if applicable)",
			coreQuestion: "Does the disposal represent a separate major line of business or geographical area?",
			nepalExample: "Chaudhary Group decides to exit its cement manufacturing segment by selling Maruti Cement factory in Dhading. The cement segment constitutes a separate major line of business with its own revenue streams, assets, and management. On classification as held for sale, the cement segment is also classified as a discontinued operation. Results are presented as a single amount on the face of the income statement: post-tax loss from discontinued operation NPR 3,20 crore.",
			paraRef: "IFRS 5.31–33",
		},
	],

	inlineExamples: {
		foreclosedProperty: {
			title: "Rastriya Banijya Bank — Foreclosed Property Classification",
			context: "Rastriya Banijya Bank (RBB) forecloses on a resort property in Pokhara valued at NPR 15 crore during recovery of a non-performing hotel loan. The property is in good condition and available for immediate sale. RBB engages a real estate agent and advertises the property. A licensed valuer assesses fair value at NPR 12,80 crore. Estimated selling costs are NPR 55 lakh. RBB must account for the asset under NFRS 5 for the year ended Ashad 2082.",
			steps: [
				"Step 1 — Classification: The resort property is available for immediate sale in its present condition. Management is committed to the sale plan and has engaged an agent. Sale is expected within 12 months. Classify as held for sale.",
				"Step 2 — Initial measurement: Carrying amount on acquisition (loan recovery value) = NPR 15,00,00,000. Fair value = NPR 12,80,00,000. Costs to sell = NPR 55,00,000. Fair value less costs to sell = NPR 12,25,00,000.",
				"Step 3 — Impairment: Write-down = NPR 15,00,00,000 − NPR 12,25,00,000 = NPR 2,75,00,000. Recognise impairment loss of NPR 2,75 crore in profit or loss.",
				"Step 4 — Presentation: Present NPR 12,25 crore as 'Non-current Assets Held for Sale' in the current assets section. Also report under NRB's 'Non-Banking Assets' schedule with acquisition date, original loan details, and current valuation.",
				"Step 5 — Subsequent measurement: At next reporting date (Ashad 2083), obtain updated valuation. If fair value less costs to sell has increased to NPR 13,10 crore, reverse the impairment loss by NPR 85 lakh (but not exceeding the original NPR 15 crore carrying amount).",
				"Step 6 — NRB timeline: RBB has 7 years from foreclosure date to dispose of the property. If not sold within 5 years, provision 50% of carrying amount per NRB Directive 2.",
			],
			journalEntries: [
				"On classification: Dr Non-current Assets Held for Sale NPR 15,00,00,000 / Cr Non-Banking Assets (or Foreclosed Property) NPR 15,00,00,000 — reclassification to held for sale.",
				"Impairment loss: Dr Impairment Loss on Assets Held for Sale NPR 2,75,00,000 / Cr Non-current Assets Held for Sale NPR 2,75,00,000 — write-down to fair value less costs to sell.",
				"On disposal (assuming sold for NPR 12,50 crore net of costs): Dr Bank NPR 12,50,00,000 / Dr/Cr Gain or Loss on Disposal NPR 25,00,000 (gain) / Cr Non-current Assets Held for Sale NPR 12,25,00,000.",
			],
			difficulty: "medium",
		},
		discontinuedOperation: {
			title: "Salt Trading Corporation — Discontinued Trading Segment",
			context: "Salt Trading Corporation Ltd decides to discontinue its construction materials trading segment, which has been operating at a loss. The segment has net assets of NPR 4,20 crore, revenue of NPR 18 crore, and a pre-tax loss of NPR 2,10 crore for the year ended Ashad 2082. The segment meets the definition of a discontinued operation (separate major line of business). Management expects to complete disposal by Ashad 2083 through sale of the segment's inventory and fixed assets.",
			steps: [
				"Step 1 — Assess criteria: The construction materials segment is a separate major line of business with dedicated assets, employees, and revenue streams. It is classified as a disposal group held for sale.",
				"Step 2 — Measure the disposal group: Total assets NPR 6,80 crore (inventory NPR 3,50 crore, receivables NPR 1,90 crore, fixed assets NPR 1,40 crore). Total liabilities NPR 2,60 crore (payables NPR 2,10 crore, provisions NPR 50 lakh). Net assets = NPR 4,20 crore. Fair value less costs to sell of the disposal group = NPR 3,80 crore. Impairment of NPR 40 lakh is allocated to fixed assets first.",
				"Step 3 — Present discontinued operation on the face of the income statement: a single line showing post-tax loss from discontinued operation. Pre-tax loss NPR 2,10 crore + impairment NPR 40 lakh = NPR 2,50 crore pre-tax. Tax benefit at 25% = NPR 62.5 lakh. Post-tax loss from discontinued operation = NPR 1,87.5 lakh (NPR 1.875 crore).",
				"Step 4 — Disclose in notes: revenue NPR 18 crore, expenses NPR 20,10 crore, pre-tax loss NPR 2,10 crore, impairment NPR 40 lakh, tax benefit NPR 62.5 lakh, post-tax loss NPR 1.875 crore. Also disclose cash flows: operating NPR (80 lakh), investing NPR (20 lakh), financing nil.",
				"Step 5 — Restate prior year comparatives to separate continuing and discontinued operations in the income statement for comparability.",
			],
			journalEntries: [
				"Impairment of disposal group: Dr Impairment Loss (Discontinued Operations) NPR 40,00,000 / Cr Fixed Assets (Construction Segment) NPR 40,00,000.",
				"Reclassification: Dr Disposal Group Held for Sale NPR 6,40,00,000 / Dr Accumulated Depreciation NPR (already netted) / Cr Inventory NPR 3,50,00,000 / Cr Receivables NPR 1,90,00,000 / Cr Fixed Assets NPR 1,00,00,000 — reclassification of segment assets to held-for-sale disposal group.",
				"The loss from discontinued operations of NPR 1.875 crore is presented below 'Profit from Continuing Operations' on the face of the statement of profit or loss.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The two conditions for held-for-sale classification must both be met: (1) available for immediate sale in present condition, and (2) sale is highly probable. 'Highly probable' means significantly more likely than merely 'more likely than not'. Management must be committed to a plan to sell and actively seeking a buyer." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates frequently confuse held for sale with held for distribution. IFRS 5 also covers assets held for distribution to owners — the criteria are similar but the distribution must be highly probable and the asset must be available for immediate distribution. This distinction can earn marks if mentioned." },
			{ source: "Exam Technique", tip: "Measurement: always state both amounts — carrying amount AND fair value less costs to sell — then select the lower. Show the impairment calculation explicitly. Remember that depreciation ceases from the classification date." },
			{ source: "Recurring Pattern", tip: "Discontinued operations presentation is frequently tested. Remember: a single line on the face of the income statement showing post-tax profit/loss, with detailed disclosure in notes. Prior year comparatives must be restated to separate continuing from discontinued." },
			{ source: "Nepal-specific", tip: "Nepali BFIs hold significant foreclosed properties (non-banking assets). NRB requires disposal within 7 years with progressive provisioning — this is a favourite exam scenario combining NFRS 5 classification with NRB regulatory overlay." },
			{ source: "Exam Technique", tip: "If the sale is not completed within one year, check whether the delay exceptions in IFRS 5 Appendix B apply. The held-for-sale classification is maintained only if the delay is caused by events beyond the entity's control and the entity remains committed to the sale." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Continuing to depreciate assets classified as held for sale",
			description: "Entities classify an asset as held for sale but fail to cease depreciation in their accounting systems. This is particularly common when assets are part of a larger asset group in the fixed asset register and the system applies depreciation to the entire group. The error results in overstated depreciation expense and understated asset carrying amount.",
			sector: "Manufacturing",
		},
		{
			title: "Foreclosed properties not classified as held for sale",
			description: "BFIs acquire foreclosed properties through loan recovery but record them as 'Non-Banking Assets' under NRB classifications without assessing whether NFRS 5 held-for-sale criteria are met. If the criteria are met (which they typically are, given NRB's disposal mandate), the asset must be presented as held for sale in the current assets section, measured at the lower of carrying amount and fair value less costs to sell.",
			sector: "Banking",
		},
		{
			title: "Not performing impairment write-down on classification",
			description: "Entities classify an asset as held for sale at its existing carrying amount without comparing to fair value less costs to sell. If the fair value less costs to sell is lower, an impairment loss must be recognised immediately on classification. This is especially common for specialised assets (factory buildings, customised machinery) where fair value is significantly below depreciated cost.",
			sector: "Listed Companies",
		},
		{
			title: "Mixing continuing and discontinued operations results",
			description: "Entities present revenue and expenses from discontinued operations within the line items for continuing operations rather than presenting a single aggregated amount below the profit from continuing operations. This makes it impossible for users to assess the performance of continuing operations separately, which is the core purpose of NFRS 5 disclosure.",
			sector: "Listed Companies",
		},
		{
			title: "Failing to update fair value at subsequent reporting dates",
			description: "After initial classification as held for sale, entities do not update the fair value less costs to sell at each subsequent reporting date. Fair values of foreclosed properties can change significantly — both upward (Kathmandu property market) and downward (rural areas). NFRS 5 requires remeasurement at each reporting date, with increases limited to the cumulative impairment loss previously recognised.",
			sector: "Banking",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Non-current assets measured under NAS 16 may be reclassified to held for sale under NFRS 5, ceasing depreciation and changing measurement basis",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "NFRS 5 impairment measurement differs from NAS 36 — held-for-sale assets use fair value less costs to sell rather than the higher of fair value less costs of disposal and value in use",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NFRS 5 overrides NAS 1 presentation requirements by requiring separate disclosure of held-for-sale assets and discontinued operations on the face of financial statements",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "Financial assets are excluded from NFRS 5 scope — they continue to be measured under NFRS 9 even if held for sale",
		},
	],
};
