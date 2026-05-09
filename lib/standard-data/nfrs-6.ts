import type { StandardPageData } from "./types";

export const nfrs6: StandardPageData = {
	slug: "nfrs-6",
	nfrsNumber: "NFRS 6",
	ifrsEquivalent: "IFRS 6",
	title: "Exploration for and Evaluation of Mineral Resources",
	topic: "industry",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2006-01-01",
	status: "aligned",
	heroMotif: "mountain",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Scope and Applicability",
				ifrs: "IFRS 6 applies to expenditures incurred in the exploration for and evaluation of mineral resources — from the point at which the entity obtains the legal right to explore until technical feasibility and commercial viability are demonstrable (IFRS 6.3–5)",
				nfrs: "Same scope. In Nepal, the Department of Mines and Geology (DMG) issues exploration licences under the Mines and Minerals Act 2042. The licence date triggers the start of NFRS 6 applicability. Exploration expenditures incurred before obtaining the licence are expensed",
				nepalImpact: "Nepal's mining sector is small but includes cement companies with quarry licences (Hetauda Cement, Udayapur Cement, Hongshi Shivam Cement) and entities exploring for gold, copper, and iron in the mid-hills. Limited geological survey data from DMG means entities incur significant expenditure on basic geological mapping before evaluation can begin",
				significance: "medium",
			},
			{
				topic: "Accounting Policy Choice for E&E Expenditures",
				ifrs: "IFRS 6.9 permits an entity to develop its own accounting policy for E&E assets — it may capitalise or expense E&E expenditures. The policy must be applied consistently and must be relevant and reliable per IAS 8 hierarchy",
				nfrs: "Same policy choice. Nepali entities typically capitalise E&E expenditures because the amounts are significant relative to their total assets. Cement companies capitalise geological survey costs, drilling costs, and licence fees as E&E assets until commercial viability is established",
				nepalImpact: "Most Nepali mining entities choose capitalisation because the alternative — expensing — would reduce reported profits during the exploration phase, making it harder to raise capital from Nepali investors or secure bank loans from BFIs which assess lending capacity based on reported profits",
				significance: "high",
			},
			{
				topic: "Classification of E&E Assets",
				ifrs: "E&E assets are classified as either tangible or intangible depending on their nature. Drilling rigs and vehicles are tangible; mining rights and licences are intangible (IFRS 6.15–16)",
				nfrs: "Same classification. In Nepal, exploration licences issued by DMG are classified as intangible E&E assets. Core drilling equipment and geological survey vehicles are classified as tangible E&E assets. Some entities incorrectly lump all E&E expenditures into a single 'Exploration Assets' category without distinguishing tangible from intangible",
				nepalImpact: "The tangible vs intangible classification matters because tangible E&E assets are subsequently measured under NAS 16 (cost or revaluation model) and intangible under NAS 38 (cost or revaluation model), and each has different depreciation/amortisation rules once the E&E phase ends",
				significance: "medium",
			},
			{
				topic: "Impairment Indicators for E&E Assets",
				ifrs: "IFRS 6.18–20 lists specific impairment indicators for E&E assets: (a) exploration rights expiry, (b) no further E&E planned, (c) no commercially viable quantities discovered, (d) carrying amount unlikely to be recovered from development or sale",
				nfrs: "Same indicators. In Nepal, exploration licences from DMG have a fixed validity period (typically 2–4 years with possible extensions). Expiry of the licence without renewal is a clear impairment indicator. Additionally, if preliminary geological surveys indicate insufficient mineral deposits for commercial extraction at Nepali market prices, the E&E asset must be tested for impairment",
				nepalImpact: "Nepal's geological complexity (Himalayan geology with significant tectonic activity) means exploration results are often uncertain. Companies exploring for minerals in the mid-hills of Kavre or Sindhupalchowk may find promising initial samples but fail to establish commercially viable quantities, triggering impairment",
				significance: "high",
			},
			{
				topic: "Transition from Exploration to Development",
				ifrs: "Once technical feasibility and commercial viability are demonstrated, E&E assets are reclassified. IFRS 6 no longer applies — the entity applies NAS 16 or NAS 38 going forward, and tests for impairment under NAS 36 at the point of reclassification (IFRS 6.17)",
				nfrs: "Same transition requirement. In Nepal, the transition occurs when DMG approves the mining licence (as distinct from the exploration licence). At this point, the entity must test E&E assets for impairment and reclassify them as mine development assets under NAS 16 or NAS 38",
				nepalImpact: "The transition from exploration licence to mining licence with DMG involves environmental impact assessment (EIA) approval from the Ministry of Forests and Environment, adding time and cost. Some entities delay the transition point inappropriately to continue capitalising costs under the more flexible NFRS 6 regime",
				significance: "medium",
			},
			{
				topic: "Disclosure Requirements",
				ifrs: "IFRS 6.23–25 requires disclosure of accounting policies for E&E expenditures, amounts of E&E assets, and any impairment losses. The entity must also disclose the basis for determining the level at which E&E assets are tested for impairment",
				nfrs: "Same disclosure requirements. Nepali entities with E&E activities must disclose: the policy choice (capitalise or expense), categories of E&E assets, carrying amounts, impairment losses, and the cash-generating unit level used for impairment testing. DMG licence details (licence number, validity, area covered) are typically disclosed as additional context",
				nepalImpact: "Disclosure quality for E&E assets in Nepal is often weak because the mining sector is small and auditors may lack industry-specific expertise. Some entities disclose E&E assets only as a single line in the balance sheet without the detailed policy and impairment disclosures required by NFRS 6",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB does not have specific directives for mining companies as they are not BFIs. However, BFIs lending to mining companies must assess E&E assets as collateral with caution — NRB Directive 2 requires that intangible assets (including exploration rights) are generally not accepted as primary collateral for loan security. BFIs must apply higher risk weights to loans secured primarily by mining assets due to the inherent uncertainty of exploration outcomes.",
		sebon: "SEBON requires listed entities with E&E activities to disclose the nature and extent of mineral exploration, the accounting policy for E&E expenditures, and any material uncertainties regarding the recoverability of capitalised E&E assets. SEBON's listing rules require entities in the extractive sector to provide additional disclosure on licence status, environmental compliance, and community impact as part of corporate governance reporting.",
		ird: "IRD allows capitalised E&E expenditures to be amortised for tax purposes once commercial production begins, using the unit-of-production method or straight-line over the licence period. Exploration expenditures that are expensed under the entity's accounting policy are deductible in the year incurred, subject to the requirement that they were incurred for the purpose of generating taxable income. Licence fees paid to DMG are deductible as business expenses. Royalties paid on extracted minerals are deductible and also subject to withholding provisions under the Income Tax Act 2058.",
	},

	timeline: [
		{ date: "Jan 2006", label: "IFRS 6 Effective", description: "IFRS 6 became effective globally as an interim standard pending the IASB's comprehensive extractive activities project" },
		{ date: "2042 BS", label: "Mines and Minerals Act", description: "Nepal's Mines and Minerals Act 2042 (1985 AD) established the legal framework for exploration and mining licences issued by DMG" },
		{ date: "Jul 2018", label: "NFRS 6 Effective", description: "NFRS 6 effective as part of full NFRS adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 6, no carve-outs. Limited practical application given Nepal's small mining sector", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Determine Whether the Entity Has Legal Rights to Explore",
			coreQuestion: "Has the entity obtained an exploration licence from the Department of Mines and Geology?",
			nepalExample: "Hongshi Shivam Cement obtains an exploration licence from DMG for a limestone quarry area in Dhading district covering 250 hectares, valid for 3 years from Baisakh 2081 BS. Expenditures incurred from this date onwards on geological surveys and test drilling within the licensed area qualify for NFRS 6 treatment. Costs incurred before the licence date (feasibility study, DMG application fees) are expensed.",
			paraRef: "IFRS 6.3–5",
		},
		{
			number: 2,
			name: "Choose and Apply Accounting Policy for E&E Expenditures",
			coreQuestion: "Will the entity capitalise or expense E&E expenditures?",
			nepalExample: "Hongshi Shivam Cement adopts a policy of capitalising all E&E expenditures directly attributable to the licensed area. During the year ended Ashad 2082: geological survey costs NPR 1,20 lakh, core drilling costs NPR 4,80 lakh, geologist consultancy fees NPR 2,50 lakh, and DMG licence renewal fee NPR 35 lakh are capitalised as E&E assets totalling NPR 8,85 lakh. General administrative overheads are not capitalised.",
			paraRef: "IFRS 6.8–11",
		},
		{
			number: 3,
			name: "Classify E&E Assets as Tangible or Intangible",
			coreQuestion: "Is the asset a physical asset (tangible) or a right/licence (intangible)?",
			nepalExample: "Hongshi Shivam Cement classifies: DMG exploration licence NPR 35 lakh as intangible E&E asset (an exploration right), core drilling equipment purchased for NPR 12 lakh as tangible E&E asset (physical asset used in exploration), and geological survey data/reports NPR 3,70 lakh as intangible E&E asset. Each category is presented separately in the notes.",
			paraRef: "IFRS 6.15–16",
		},
		{
			number: 4,
			name: "Assess Impairment Indicators at Each Reporting Date",
			coreQuestion: "Are there any indicators that the E&E asset may be impaired?",
			nepalExample: "At Ashad 2082, Hongshi Shivam reviews impairment indicators: (a) exploration licence is valid until 2084 — no expiry concern, (b) further drilling is planned for the next season, (c) initial core samples show limestone of sufficient quality and quantity for cement production, (d) no indication that carrying amount is unrecoverable. No impairment test is required. If core samples had shown insufficient limestone, an impairment test under NAS 36 would be triggered.",
			paraRef: "IFRS 6.18–20",
		},
		{
			number: 5,
			name: "Transition to Development Phase When Commercial Viability is Demonstrated",
			coreQuestion: "Is technical feasibility and commercial viability established?",
			nepalExample: "After 2 years of exploration, Hongshi Shivam completes a Definitive Feasibility Study confirming 50 million tonnes of extractable limestone. DMG approves the mining licence. At this point, E&E assets of NPR 18 lakh are tested for impairment under NAS 36, then reclassified to 'Mine Development Assets' under NAS 16 (tangible) and NAS 38 (intangible). NFRS 6 no longer applies. Subsequent development costs (road construction, processing facility) are capitalised under NAS 16.",
			paraRef: "IFRS 6.17",
		},
	],

	inlineExamples: {
		explorationCapitalisation: {
			title: "Udayapur Cement — Capitalisation of Limestone Quarry Exploration Costs",
			context: "Udayapur Cement Ltd holds a DMG exploration licence for a limestone quarry in Udayapur district. During the fiscal year ended Ashad 2082, the company incurs: geological survey by a private firm NPR 6,50,000, core drilling (10 boreholes) NPR 18,40,000, DMG licence renewal fee NPR 2,00,000, access road construction to the exploration site NPR 8,20,000, salary of site geologist (3 months) NPR 3,60,000, head office administrative costs allocated to the project NPR 1,80,000. The company's policy is to capitalise directly attributable E&E expenditures.",
			steps: [
				"Step 1 — Identify directly attributable costs: geological survey NPR 6,50,000, core drilling NPR 18,40,000, DMG licence fee NPR 2,00,000, site geologist salary NPR 3,60,000 are all directly attributable to exploration. Total = NPR 30,50,000.",
				"Step 2 — Assess the access road: NPR 8,20,000 for the access road is a tangible asset that will be used during both exploration and future development/extraction. Capitalise as a tangible E&E asset under NAS 16 (or as PPE if it will have use beyond exploration).",
				"Step 3 — Exclude head office costs: NPR 1,80,000 administrative overhead is not directly attributable to the exploration area — expense in the period under NFRS 6.11.",
				"Step 4 — Classify E&E assets: Intangible E&E assets = DMG licence NPR 2,00,000 + geological survey NPR 6,50,000 + geologist salary NPR 3,60,000 = NPR 12,10,000. Tangible E&E assets = core drilling equipment/costs NPR 18,40,000 + access road NPR 8,20,000 = NPR 26,60,000.",
				"Step 5 — Assess impairment indicators: Licence is valid, further exploration is planned, initial results are promising. No impairment test required at Ashad 2082.",
				"Step 6 — Disclose: Accounting policy for E&E assets, carrying amounts by category, DMG licence details (licence number, area, validity), and statement that no impairment indicators were identified.",
			],
			journalEntries: [
				"Capitalise geological survey: Dr Intangible E&E Assets NPR 6,50,000 / Cr Bank/Payables NPR 6,50,000.",
				"Capitalise core drilling: Dr Tangible E&E Assets NPR 18,40,000 / Cr Bank/Payables NPR 18,40,000.",
				"Capitalise DMG licence: Dr Intangible E&E Assets NPR 2,00,000 / Cr Bank NPR 2,00,000.",
				"Capitalise access road: Dr Tangible E&E Assets NPR 8,20,000 / Cr Bank/Payables NPR 8,20,000.",
				"Capitalise site geologist salary: Dr Intangible E&E Assets NPR 3,60,000 / Cr Salaries Payable NPR 3,60,000.",
				"Expense head office allocation: Dr Administrative Expenses NPR 1,80,000 / Cr Allocated Costs NPR 1,80,000.",
			],
			difficulty: "medium",
		},
		impairmentTest: {
			title: "Mid-Hills Mining — Impairment of Copper Exploration Assets",
			context: "Mid-Hills Mining Pvt Ltd holds a DMG exploration licence for a copper deposit in Sindhupalchowk district. The company has capitalised E&E assets of NPR 42 lakh over 2 years (geological surveys NPR 15 lakh, drilling NPR 22 lakh, licence fees NPR 5 lakh). At Ashad 2082, the company's geologist reports that core samples indicate copper concentration of only 0.3% — below the 0.5% threshold considered commercially viable for small-scale extraction in Nepal. The DMG licence expires in Poush 2082 and the company has decided not to renew.",
			steps: [
				"Step 1 — Identify impairment indicators: Two indicators are present — (a) the exploration licence will expire in Poush 2082 and the entity will not renew (IFRS 6.20(a)), (b) exploration results indicate insufficient copper for commercial extraction (IFRS 6.20(c)).",
				"Step 2 — Test for impairment under NAS 36: Determine the recoverable amount of the E&E assets. Fair value less costs of disposal is negligible — the geological data has limited value to third parties and the physical drilling assets are specialised. Value in use is nil — no future cash flows expected from the deposit.",
				"Step 3 — Recognise impairment: Recoverable amount = NPR 0. Carrying amount = NPR 42,00,000. Impairment loss = NPR 42,00,000. Write off entire E&E asset balance to profit or loss.",
				"Step 4 — Allocate impairment: First to intangible E&E assets (licence NPR 5,00,000 + surveys NPR 15,00,000 = NPR 20,00,000), then to tangible E&E assets (drilling costs NPR 22,00,000). Both are written down to zero.",
				"Step 5 — Disclose: Nature of the impairment event (unsuccessful exploration, licence not renewed), amount of impairment loss, and the cash-generating unit to which the E&E assets were allocated.",
			],
			journalEntries: [
				"Impairment of intangible E&E assets: Dr Impairment Loss — E&E Assets NPR 20,00,000 / Cr Intangible E&E Assets NPR 20,00,000.",
				"Impairment of tangible E&E assets: Dr Impairment Loss — E&E Assets NPR 22,00,000 / Cr Tangible E&E Assets NPR 22,00,000.",
				"Total impairment loss of NPR 42,00,000 is presented within operating expenses in the statement of profit or loss for the year ended Ashad 2082.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "IFRS 6 is an interim standard with significant policy flexibility. In exam questions, always state the entity's accounting policy choice (capitalise or expense) and note that the policy must be applied consistently under the NAS 8 hierarchy." },
			{ source: "Exam Technique", tip: "Know the four specific impairment indicators in IFRS 6.20: (a) licence expiry or expected expiry, (b) no further E&E budgeted or planned, (c) quantities found are not commercially viable, (d) carrying amount unlikely to be recovered. Listing these indicators earns marks even if the question does not specifically ask for them." },
			{ source: "Recurring Pattern", tip: "The transition point from E&E to development is critical — IFRS 6 stops applying and NAS 16/NAS 38 take over. At transition, test for impairment immediately. This is a common exam scenario: calculate whether any impairment exists at the point of reclassification." },
			{ source: "Nepal-specific", tip: "Nepal's mining sector is small, so NFRS 6 questions may focus on cement companies with quarry licences (Hetauda Cement, Udayapur Cement, Hongshi Shivam Cement) rather than traditional oil-and-gas exploration. The principles are the same but the scale is much smaller — think NPR lakh rather than NPR arba." },
			{ source: "Exam Technique", tip: "General administrative overheads are never capitalised as E&E assets. Only costs directly attributable to the exploration area (geological surveys, drilling, licence fees, site-specific personnel) qualify. Head office allocations must be expensed. This is a common exam trap." },
			{ source: "Exam Technique", tip: "Remember that IFRS 6 does not apply before obtaining the legal right to explore or after demonstrating commercial viability. Pre-licence costs are expensed. Post-feasibility development costs follow NAS 16/NAS 38. IFRS 6 only governs the window in between." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Capitalising pre-licence expenditures as E&E assets",
			description: "Entities capitalise feasibility study costs and DMG application expenses incurred before the exploration licence is granted. NFRS 6 only applies from the date the entity obtains the legal right to explore. All pre-licence expenditures must be expensed in the period incurred, regardless of the entity's general E&E capitalisation policy.",
			sector: "Mining",
		},
		{
			title: "Not testing for impairment when indicators exist",
			description: "Entities continue to carry E&E assets at cost even when clear impairment indicators are present — such as expiry of the exploration licence without renewal, decision to cease exploration, or geological results showing insufficient mineral deposits. NFRS 6 requires an impairment test under NAS 36 whenever indicators are present, not just at the transition to development.",
			sector: "Mining",
		},
		{
			title: "Failing to distinguish tangible from intangible E&E assets",
			description: "Entities lump all E&E expenditures into a single 'Exploration Assets' category without classifying them as tangible or intangible. This affects subsequent measurement because tangible E&E assets follow NAS 16 and intangible E&E assets follow NAS 38 after transition. The distinction also matters for disclosure and for applying the correct depreciation/amortisation method post-transition.",
			sector: "Mining",
		},
		{
			title: "Capitalising general administrative overheads as E&E assets",
			description: "Entities allocate head office costs (rent, management salaries, IT costs) to E&E assets on the basis that these overheads support the exploration project. NFRS 6.11 explicitly states that expenditures not directly related to specific exploration activities are excluded from E&E assets. Only costs directly attributable to the exploration area qualify for capitalisation.",
			sector: "Mining",
		},
		{
			title: "Delaying transition from exploration to development",
			description: "After commercial viability is demonstrated and the mining licence is obtained from DMG, some entities continue to apply NFRS 6's flexible capitalisation policy instead of transitioning to NAS 16/NAS 38. This avoids the mandatory impairment test at transition and allows continued capitalisation of costs that may not meet the stricter capitalisation criteria under NAS 16 or NAS 38.",
			sector: "Mining",
		},
	],

	relatedStandards: [
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "Tangible E&E assets are reclassified to NAS 16 when technical feasibility and commercial viability are demonstrated",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "E&E assets must be tested for impairment under NAS 36 when NFRS 6 impairment indicators are present and at the point of transition to development",
		},
		{
			slug: "nas-38",
			nfrsNumber: "NAS 38",
			title: "Intangible Assets",
			reason: "Intangible E&E assets (exploration licences, geological data) are reclassified to NAS 38 after the exploration phase ends",
		},
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "The accounting policy for E&E expenditures must satisfy the NAS 8 hierarchy requirements of relevance and reliability",
		},
	],
};
