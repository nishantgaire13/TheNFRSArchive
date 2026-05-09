import type { StandardPageData } from "./types";

export const nas40: StandardPageData = {
	slug: "nas-40",
	nfrsNumber: "NAS 40",
	ifrsEquivalent: "IAS 40",
	title: "Investment Property",
	topic: "assets",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "property",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Fair Value vs Cost Model",
				ifrs: "IAS 40 allows a choice between fair value model (changes through P&L) and cost model with fair value disclosure. Choice applies to all investment property (IAS 40.30)",
				nfrs: "Same policy choice available. However, NRB Unified Directives require BFIs holding foreclosed property to carry it at lower of cost or NRV, effectively overriding the fair value option for those assets",
				nepalImpact: "Most Nepali entities use the cost model due to limited availability of qualified valuers and thin market data. Kathmandu Valley land appreciation of 15-25% annually goes unrecognised under the cost model",
				significance: "high",
			},
			{
				topic: "Transfer Triggers",
				ifrs: "Transfers to/from investment property only when there is a change in use evidenced by commencement/end of owner-occupation, operating lease, or construction/development (IAS 40.57)",
				nfrs: "Same transfer criteria. In Nepal, mixed-use buildings in Kathmandu (ground floor leased to shops, upper floors owner-occupied) require proportional classification which is frequently misapplied",
				nepalImpact: "Entities with mixed-use commercial complexes in Durbar Marg or New Baneshwor often classify the entire building as PPE or investment property rather than splitting proportionally, misstating both asset categories",
				significance: "medium",
			},
			{
				topic: "Valuation in Thin Markets",
				ifrs: "Fair value under IFRS 13 hierarchy. Level 1 inputs preferred but Level 3 may be used when market data is limited (IAS 40.45, IFRS 13.61)",
				nfrs: "Same framework applies. Nepal lacks a centralised property transaction database. Land prices in Kathmandu Valley differ dramatically between registered value (raji namadari) and actual market value",
				nepalImpact: "Government minimum valuation rates (nyunatam mulya) are used for registration tax purposes but significantly understate market value. Entities using fair value model struggle to obtain Level 1 or Level 2 inputs, relying entirely on Level 3 unobservable inputs",
				significance: "high",
			},
			{
				topic: "Land Banking",
				ifrs: "Land held for undetermined future use is classified as investment property if the entity is unable to determine its future use (IAS 40.8(b))",
				nfrs: "Same classification. Nepali conglomerates and BFIs hold significant land banks, especially in emerging areas like Bhaktapur, Lalitpur periphery, and Lumbini corridor",
				nepalImpact: "Land banking is a common strategy among Nepali business groups. These parcels often remain idle for years, carried at historical cost under the cost model, with market values many multiples of carrying amount. NRB restricts BFI land holdings to operational need",
				significance: "medium",
			},
			{
				topic: "BFI Foreclosed Properties",
				ifrs: "No specific IFRS guidance on foreclosed properties. Generally classified as held for sale (IFRS 5) if disposal criteria are met, or as investment property if held for rental income or capital appreciation (IAS 40.6)",
				nfrs: "NRB Unified Directives require BFIs to dispose of foreclosed assets within 7 years. Such assets are carried at lower of cost or NRV, not at fair value. NRB mandates provisioning if not disposed within the timeframe",
				nepalImpact: "Several BFIs — particularly development banks and finance companies — hold large portfolios of foreclosed property from defaulted borrowers. NRB provisioning timelines create pressure to dispose at below-market prices, often conflicting with NAS 40 fair value measurements",
				significance: "high",
			},
			{
				topic: "Rental Income Disclosures",
				ifrs: "Disclose rental income, direct operating expenses arising from investment property that generated/did not generate rental income, and any restrictions on realisability (IAS 40.75)",
				nfrs: "Same disclosures required. Many entities in Nepal do not separately disclose operating expenses for investment property that did not generate rental income during the period",
				nepalImpact: "Listed entities with rental property portfolios (e.g., commercial complexes in Kamaladi, Thamel) often aggregate investment property income with other income rather than providing the detailed breakdowns NAS 40 requires",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives restrict BFI investment in immovable property to amounts necessary for business operations. Foreclosed property must be disposed within 7 years; progressive provisioning applies from year 3 (20%), year 5 (50%), year 7 (100%). BFIs cannot revalue foreclosed assets above cost. Property acquired for staff housing or branch premises is PPE, not investment property.",
		sebon: "SEBON requires listed entities to disclose the fair value of investment property even if the cost model is used. Annual valuation reports from registered valuers must be filed with annual reports. Any change in classification between PPE and investment property must be disclosed with rationale. SEBON has flagged inadequate disclosure of vacant investment property in listed company reviews.",
		ird: "IRD allows depreciation on buildings classified as investment property at the rates prescribed under Schedule 2 of the Income Tax Act 2058. Rental income from investment property is assessable under the head 'income from investments'. Capital gains on disposal of investment property held for more than 5 years are taxed at 10%; otherwise, gains are added to business income at the applicable rate (25% or 30%).",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 40 Revised Effective", description: "Revised standard incorporating fair value model effective globally" },
		{ date: "Jul 2018", label: "NAS 40 Effective", description: "Nepal adoption as part of full NFRS suite (1 Shrawan 2075 BS)" },
		{ date: "2020", label: "NRB Foreclosure Directive Updated", description: "NRB tightened provisioning timelines for foreclosed property held by BFIs", highlight: true },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 40. Most entities use cost model in practice" },
	],

	steps: [
		{
			number: 1,
			name: "Identify Investment Property",
			coreQuestion: "Is the property held for rental income, capital appreciation, or both — rather than for owner-occupation or sale in the ordinary course?",
			nepalExample: "Nabil Bank owns a commercial complex in Durbar Marg. The ground floor is leased to retail tenants; the upper floors house the bank's head office. The leased portion qualifies as investment property. The owner-occupied portion is PPE under NAS 16.",
			paraRef: "IAS 40.5–8",
		},
		{
			number: 2,
			name: "Recognise at Cost on Initial Measurement",
			coreQuestion: "What is the cost of the investment property including transaction costs?",
			nepalExample: "Himalayan Bank acquires a foreclosed commercial property in Putalisadak for NPR 12 crore (loan default recovery). Cost includes the court-assessed value of NPR 12 crore plus NPR 40 lakh in registration fees and legal costs. Total initial cost = NPR 12.40 crore.",
			paraRef: "IAS 40.20–23",
		},
		{
			number: 3,
			name: "Choose Accounting Policy — Fair Value or Cost Model",
			coreQuestion: "Will the entity measure all investment property at fair value through P&L, or use the cost model with depreciation and impairment?",
			nepalExample: "Surya Nepal chooses the cost model for its warehouse property in Biratnagar leased to a third party. The building cost NPR 8 crore, useful life 40 years, residual value NPR 1 crore. Annual depreciation = NPR 17.5 lakh. Fair value of NPR 14 crore is disclosed in notes.",
			paraRef: "IAS 40.30–35",
		},
		{
			number: 4,
			name: "Account for Transfers",
			coreQuestion: "Has the use of the property changed, triggering a transfer to or from investment property?",
			nepalExample: "NIC Asia Bank begins occupying a previously leased floor of its Babarmahal property for a new department. The occupied portion transfers from investment property to PPE. Under the fair value model, the fair value at transfer date (NPR 6 crore) becomes the deemed cost for PPE purposes.",
			paraRef: "IAS 40.57–65",
		},
		{
			number: 5,
			name: "Disclose Carrying Amount, Fair Value, and Rental Income",
			coreQuestion: "Has the entity provided all required disclosures including fair value (if cost model used), rental income, and operating expenses?",
			nepalExample: "Nepal Telecom discloses its investment property portfolio: carrying amount NPR 45 crore (cost model), fair value NPR 120 crore (independent valuation by a SEBON-registered valuer), rental income NPR 3.5 crore, and direct operating expenses NPR 85 lakh. Vacant property expenses of NPR 20 lakh are separately disclosed.",
			paraRef: "IAS 40.74–79",
		},
	],

	inlineExamples: {
		fairValueVsCost: {
			title: "Himalayan Bank — Foreclosed Property Measurement",
			context: "Himalayan Bank Ltd acquires a commercial property in Kathmandu through foreclosure on a defaulted loan of NPR 18 crore. The court-assessed value is NPR 15 crore. Registration and legal fees total NPR 60 lakh. The current market value (based on comparable transactions in the area) is NPR 22 crore. NRB requires disposal within 7 years. The bank uses the cost model for investment property.",
			steps: [
				"Step 1 — Classify the asset: The property is not for the bank's own use and is not being developed for sale. It is held pending disposal, but since it may generate rental income in the interim, classify as investment property under NAS 40 (NRB foreclosure rules also apply).",
				"Step 2 — Measure at cost on initial recognition: Cost = court-assessed value NPR 15 crore + registration/legal fees NPR 60 lakh = NPR 15.60 crore. The original loan balance of NPR 18 crore is irrelevant to the property's cost.",
				"Step 3 — Apply NRB overlay: NRB requires carrying at lower of cost or NRV. NRV (NPR 22 crore less estimated selling expenses of NPR 1 crore) = NPR 21 crore. Lower of cost (NPR 15.60 crore) and NRV (NPR 21 crore) = NPR 15.60 crore. No write-down needed.",
				"Step 4 — Annual depreciation (building component only): Building portion NPR 10 crore, life 40 years, depreciation = NPR 25 lakh per year. Land portion NPR 5.60 crore is not depreciated.",
				"Step 5 — Disclose fair value in notes: Even though the cost model is used, NAS 40 requires fair value disclosure. Disclose NPR 22 crore market value, valuation method, and key assumptions. Also disclose NRB disposal timeline (7-year limit) and provisioning requirements.",
			],
			journalEntries: [
				"Initial recognition: Dr Investment Property — Land NPR 5,60,00,000 / Dr Investment Property — Building NPR 10,00,00,000 / Cr Non-Performing Loan NPR 15,00,00,000 / Cr Cash (registration & legal) NPR 60,00,000",
				"Loss on foreclosure: Dr Loss on Foreclosure NPR 2,40,00,000 / Cr Non-Performing Loan NPR 2,40,00,000 (difference between loan NPR 18 crore and recovery NPR 15.60 crore)",
				"Annual depreciation: Dr Depreciation Expense NPR 25,00,000 / Cr Accumulated Depreciation — Investment Property NPR 25,00,000",
			],
			difficulty: "medium",
		},
		transferToOccupied: {
			title: "NIC Asia — Transfer from Investment Property to PPE",
			context: "NIC Asia Bank holds a four-storey building in Babarmahal. Two floors are leased to external tenants (investment property) and two floors are used by the bank (PPE). The bank decides to occupy one additional floor for a new digital banking division. The bank applies the fair value model to investment property. The floor being transferred has a carrying amount (fair value) of NPR 6 crore. The previous fair value gain recognised in P&L on this floor was NPR 1.5 crore.",
			steps: [
				"Step 1 — Identify the transfer trigger: The bank commences owner-occupation of the floor, evidenced by staff moving in and the floor being used for the digital banking division. This is a change in use per NAS 40.57(a).",
				"Step 2 — Determine transfer date: The date of change in use is when the floor is physically occupied for the bank's operations — 1 Magh 2082 (mid-January 2026).",
				"Step 3 — Under fair value model, the deemed cost for PPE is the fair value at the date of transfer: NPR 6 crore. No revaluation surplus arises on transfer — previous fair value gains were already in P&L.",
				"Step 4 — Reclassify in the books: Transfer NPR 6 crore from Investment Property to PPE — Building. Going forward, depreciate under NAS 16 over remaining useful life (say 30 years). Annual depreciation = NPR 20 lakh.",
				"Step 5 — Update disclosures: Reduce investment property carrying amount, increase PPE. Disclose the transfer, its date, the fair value at transfer, and the reason. Rental income disclosures should reflect only the one remaining leased floor going forward.",
			],
			journalEntries: [
				"Transfer: Dr PPE — Building NPR 6,00,00,000 / Cr Investment Property NPR 6,00,00,000",
				"Subsequent depreciation: Dr Depreciation Expense NPR 20,00,000 / Cr Accumulated Depreciation — PPE NPR 20,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The fair value model vs cost model choice must be applied consistently to ALL investment property. You cannot use fair value for one property and cost for another. If cost model is chosen, fair value must still be disclosed in notes." },
			{ source: "Exam Technique", tip: "When a question involves property partially occupied and partially leased, split the property proportionally. Only the leased portion qualifies as investment property — unless the owner-occupied portion is insignificant." },
			{ source: "Nepal-specific", tip: "BFI foreclosed properties are a favourite exam scenario. Remember NRB's 7-year disposal rule and progressive provisioning (20% from year 3, 50% from year 5, 100% at year 7). These override NAS 40 fair value gains." },
			{ source: "Recurring Pattern", tip: "Transfers between investment property and PPE require careful treatment of gains. Under fair value model transferring TO PPE: fair value = deemed cost. Under cost model transferring FROM PPE to investment property: no gain until revaluation at fair value (if fair value model adopted for IP)." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates frequently misclassify property under construction intended for future lease as investment property. NAS 40 does include property under construction for future use as investment property, but only if the intended use is clearly for rental income or capital appreciation." },
			{ source: "Exam Technique", tip: "Land held for undetermined future use is investment property per NAS 40.8(b). This is a common trap — candidates classify it as PPE. If the entity has not determined whether it will use the land for owner-occupation or sell it in the ordinary course, it is investment property." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Entire mixed-use building classified as one category",
			description: "Entities classify entire buildings as either investment property or PPE when floors are used for different purposes. NAS 40 requires proportional classification — leased portions are investment property, owner-occupied portions are PPE. Only if the owner-occupied portion is insignificant can the entire building be treated as investment property.",
			sector: "Banking",
		},
		{
			title: "Foreclosed property not provisioned per NRB timelines",
			description: "BFIs hold foreclosed properties for years without applying NRB's progressive provisioning requirements. From year 3 of holding, 20% provision is required, increasing to 50% at year 5 and 100% at year 7. Failure to provision results in overstated assets and understated expenses.",
			sector: "Banking",
		},
		{
			title: "Fair value disclosure omitted under cost model",
			description: "Entities using the cost model fail to disclose fair value of investment property in the notes. NAS 40.79(e) explicitly requires fair value disclosure even when the cost model is used. Without this disclosure, users cannot assess unrealised appreciation — particularly significant for Kathmandu Valley properties.",
			sector: "Listed Companies",
		},
		{
			title: "Government registration value used as fair value",
			description: "Entities use the government minimum valuation rate (nyunatam mulya) as a proxy for fair value. These rates are set for stamp duty purposes and are typically 30-60% below actual market transaction prices. Fair value under NFRS 13 requires market participant assumptions, not administered government rates.",
			sector: "Real Estate",
		},
		{
			title: "Land banking not classified as investment property",
			description: "Conglomerates and holding companies classify idle land parcels held for future appreciation as PPE or inventory. If the entity has not determined the future use of the land, NAS 40.8(b) requires classification as investment property. Misclassification affects depreciation, impairment testing, and disclosure requirements.",
			sector: "Conglomerates",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Owner-occupied property is accounted for under NAS 16. Transfers between NAS 16 and NAS 40 occur when use changes",
		},
		{
			slug: "nfrs-13",
			nfrsNumber: "NFRS 13",
			title: "Fair Value Measurement",
			reason: "NFRS 13 provides the framework for measuring and disclosing fair value of investment property, including the three-level hierarchy",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Investment property measured under the cost model must be tested for impairment under NAS 36 when indicators exist",
		},
		{
			slug: "nfrs-16",
			nfrsNumber: "NFRS 16",
			title: "Leases",
			reason: "Right-of-use assets arising from leases may meet the definition of investment property if subletting criteria under NAS 40 are satisfied",
		},
	],
};
