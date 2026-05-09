import type { StandardPageData } from "./types";

export const nas2: StandardPageData = {
	slug: "nas-2",
	nfrsNumber: "NAS 2",
	ifrsEquivalent: "IAS 2",
	title: "Inventories",
	topic: "assets",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "warehouse",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FA","ACCA FR","ACCA SBR","ACCA AA","ACCA TX","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Cost Formulas",
				ifrs: "FIFO and weighted average permitted; LIFO prohibited (IAS 2.25)",
				nfrs: "Same — FIFO and weighted average only. LIFO prohibited under NAS 2",
				nepalImpact: "Entities transitioning from older Nepal GAAP that permitted LIFO had to restate opening balances. Some trading companies still informally track LIFO for management accounting, creating reconciliation burden",
				significance: "low",
			},
			{
				topic: "NRV Write-down & Reversal",
				ifrs: "Write down to NRV when cost exceeds NRV; reverse when circumstances change (IAS 2.28–33)",
				nfrs: "Same requirement, but IRD does not allow NRV write-downs as tax-deductible until actual disposal",
				nepalImpact: "Creates taxable temporary difference under NAS 12. Entities must track NRV write-downs separately for tax purposes — deferred tax asset recognised if reversal probable",
				significance: "high",
			},
			{
				topic: "Agricultural Produce at Harvest",
				ifrs: "Inventories of agricultural produce measured at fair value less costs to sell at point of harvest under IAS 41, then NRV applies subsequently",
				nfrs: "Same standard applies but fair value measurement challenging in Nepal due to limited commodity market data for tea, herbs, and specialty crops",
				nepalImpact: "Agricultural cooperatives and tea estates often default to cost due to inability to establish reliable fair values, potentially misstating inventory",
				significance: "low",
			},
			{
				topic: "Fixed Overhead Allocation",
				ifrs: "Based on normal capacity; unallocated overhead expensed. Abnormal waste excluded from cost (IAS 2.13)",
				nfrs: "Identical requirement but Nepal's seasonal manufacturing patterns (brick kilns, sugar mills) create wide capacity swings",
				nepalImpact: "Brick kilns operating only 4–5 months/year must define 'normal capacity' carefully — overallocation during peak season inflates inventory; underallocation during monsoon increases period costs",
				significance: "medium",
			},
			{
				topic: "Consignment & Bonded Warehouse Goods",
				ifrs: "Entity includes goods it controls regardless of physical location (IAS 2.6–8)",
				nfrs: "Same principle but Nepali customs-bonded warehouse arrangements create ambiguity on control transfer timing",
				nepalImpact: "Import-heavy businesses in Birgunj, Biratnagar dry ports hold inventory in customs bonds — must assess control (risks/rewards) vs legal title. Goods in transit from India/China require careful cut-off",
				significance: "medium",
			},
			{
				topic: "Tax Deductibility of Inventory Costs",
				ifrs: "Tax treatment not addressed — accounting standard only",
				nfrs: "IRD requires inventory valued at cost for tax purposes; NRV write-downs not deductible until actual loss realised through sale or write-off",
				nepalImpact: "Permanent vs temporary difference analysis required. Large trading houses with slow-moving inventory face significant deferred tax balances from NRV adjustments",
				significance: "high",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "Nepal Rastra Bank requires banks and financial institutions to value foreclosed collateral (vehicles, real estate, machinery) held as inventory-like assets at lower of carrying amount and net realisable value, with mandatory write-down if held beyond specified periods. BFIs acquiring collateral must apply NAS 2 principles to these non-standard inventory items.",
		sebon: "SEBON requires listed entities to disclose inventory composition by category (raw materials, WIP, finished goods, stores & spares) in quarterly reports. Additionally, listed manufacturing companies must disclose capacity utilisation rates that directly affect overhead allocation under NAS 2.",
		ird: "IRD follows the Income Tax Act 2058 for inventory valuation: cost basis only. NRV write-downs are not tax-deductible until actual disposal or verified destruction (with IRD officer certification). Customs duty paid on imported inventory is capitalised per both NAS 2 and tax law, but timing differences arise when customs assessments are disputed and paid under protest.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 2 Revised", description: "IASB revision eliminating LIFO" },
		{ date: "Jul 2018", label: "NAS 2 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2022", label: "IRD Clarification", description: "IRD circular on NRV write-down tax treatment" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify Inventory Items",
			coreQuestion: "What qualifies as inventory under NAS 2?",
			nepalExample: "Himal Traders imports electronics from China via Tatopani customs point. Goods in the bonded warehouse at Birgunj, goods in transit from Shenzhen, and goods on shop shelves in Kathmandu all meet the definition — held for sale in the ordinary course of business.",
			paraRef: "IAS 2.6",
		},
		{
			number: 2,
			name: "Determine Cost",
			coreQuestion: "What costs are included in inventory cost?",
			nepalExample: "A garment factory in Biratnagar imports cotton from India: purchase price NPR 40/metre + customs duty NPR 8/metre + transport to factory NPR 2/metre = total cost NPR 50/metre. Marketing costs and abnormal waste during monsoon flooding are excluded.",
			paraRef: "IAS 2.10–18",
		},
		{
			number: 3,
			name: "Select Cost Formula",
			coreQuestion: "FIFO or weighted average — which method for interchangeable items?",
			nepalExample: "A pharmaceutical distributor in Hetauda uses FIFO because drugs have expiry dates — oldest stock must be sold first. A hardware store uses weighted average for identical nuts and bolts where individual tracking is impractical.",
			paraRef: "IAS 2.23–27",
		},
		{
			number: 4,
			name: "Test NRV at Reporting Date",
			coreQuestion: "Is cost still recoverable through sale?",
			nepalExample: "A mobile phone dealer holds 200 units of an older model purchased at NPR 25,000 each. Market price has fallen to NPR 18,000. NRV = NPR 18,000 − NPR 500 selling costs = NPR 17,500. Write-down = NPR 7,500 × 200 = NPR 15,00,000.",
			paraRef: "IAS 2.28–33",
		},
		{
			number: 5,
			name: "Expense on Sale or Write-off",
			coreQuestion: "When do you remove inventory from the balance sheet?",
			nepalExample: "When Himal Traders sells 50 phones to a retailer and delivers them, control transfers. The cost of those 50 phones moves from the inventory asset to cost of goods sold expense. Revenue is recognised simultaneously under NFRS 15.",
			paraRef: "IAS 2.34",
		},
	],

	inlineExamples: {
		nrvWriteDown: {
			title: "Himal Traders — Imported Smartphone NRV Write-down",
			context: "Himal Traders Pvt Ltd imported 500 smartphones at NPR 25,000 each (total cost NPR 1,25,00,000) from China. By the reporting date (Ashad end 2082), a newer model launched and market price dropped to NPR 19,000. Estimated selling costs are NPR 1,000 per unit.",
			steps: [
				"Step 1 — Determine cost: Purchase price NPR 25,000 + customs duty NPR 3,000 + transport NPR 500 = NPR 28,500 per unit. Wait — actual landed cost was NPR 25,000 inclusive of duties per the import invoice. Use NPR 25,000.",
				"Step 2 — Calculate NRV: Estimated selling price NPR 19,000 − selling costs NPR 1,000 = NRV NPR 18,000 per unit.",
				"Step 3 — Compare: Cost NPR 25,000 > NRV NPR 18,000. Write-down required.",
				"Step 4 — Calculate loss: (NPR 25,000 − NPR 18,000) × 500 units = NPR 35,00,000 write-down.",
				"Step 5 — Tax effect: IRD does not allow NRV write-down as deduction. Deferred tax asset = NPR 35,00,000 × 25% = NPR 8,75,000 (recognised if recovery probable).",
			],
			journalEntries: [
				"Dr Inventory Write-down Expense (P&L) NPR 35,00,000 / Cr Inventory NPR 35,00,000",
				"Dr Deferred Tax Asset NPR 8,75,000 / Cr Income Tax Expense NPR 8,75,000",
				"If prices recover next year to NPR 22,000 and NRV = NPR 21,000: reversal of NPR 15,00,000 [(21,000 − 18,000) × 500] — Dr Inventory / Cr Cost of Goods Sold",
			],
			difficulty: "medium",
		},
		overheadAllocation: {
			title: "Sagarmatha Brick Factory — Seasonal Overhead Allocation",
			context: "Sagarmatha Brick Factory operates only during the dry season (October–March, 6 months). Annual fixed factory overheads are NPR 1,20,00,000. Normal capacity is 50,00,000 bricks per year. In FY 2081/82, actual production was 42,00,000 bricks due to early monsoon.",
			steps: [
				"Step 1 — Determine normal capacity: 50,00,000 bricks/year (based on average production over past 3 dry seasons).",
				"Step 2 — Fixed overhead rate: NPR 1,20,00,000 ÷ 50,00,000 = NPR 2.40 per brick.",
				"Step 3 — Allocated overhead: 42,00,000 × NPR 2.40 = NPR 1,00,80,000 capitalised to inventory.",
				"Step 4 — Unallocated overhead: NPR 1,20,00,000 − NPR 1,00,80,000 = NPR 19,20,000 expensed as period cost (not added to inventory).",
				"Step 5 — Monsoon idle months (April–September): All factory costs during idle period are period expenses, not inventory costs.",
			],
			journalEntries: [
				"Production period: Dr WIP Inventory NPR 1,00,80,000 / Cr Factory Overhead Applied NPR 1,00,80,000",
				"Unallocated overhead: Dr Cost of Goods Sold NPR 19,20,000 / Cr Factory Overhead NPR 19,20,000",
				"Idle period costs: Dr Factory Idle Cost (P&L) / Cr Cash/Payables (for caretaker wages, insurance during monsoon)",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "NRV is entity-specific, not fair value. Candidates confuse the two. NRV considers the entity's specific selling circumstances and contractual commitments — fair value is a market-based measure. Always state: 'NRV = estimated selling price less estimated costs of completion and costs to sell.'" },
			{ source: "Dec 2023 Examiner Report", tip: "Raw material write-down exception is frequently tested: do NOT write down raw materials below cost if the finished goods they will be incorporated into are expected to sell at or above cost (IAS 2.32). Many candidates write down raw materials unnecessarily." },
			{ source: "Recurring Pattern", tip: "Overhead allocation based on normal capacity is a favourite exam topic. Unallocated overhead due to low production is expensed, NOT capitalised. Conversely, high production does not allocate more than actual overhead — inventories are not valued above cost." },
			{ source: "Mar/Jun 2022 Examiner Report", tip: "Candidates miss that LIFO prohibition is absolute — no exceptions. Some candidates hedge by saying 'LIFO may be used if it better reflects physical flow.' It cannot. FIFO or weighted average only." },
			{ source: "Exam Technique", tip: "In NRV calculation questions, always present: (1) estimated selling price, (2) minus estimated completion costs (if WIP), (3) minus estimated selling costs. Show the build-up, not just the final number." },
			{ source: "Nepal-specific", tip: "For CA Nepal exams: focus on customs duty capitalisation (included in purchase cost), NRV tax treatment (creates deferred tax under NAS 12), and seasonal production overhead allocation — all three are common Nepal-specific angles." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "NRV write-down booked but no deferred tax recognised",
			description: "Trading companies write down slow-moving inventory to NRV in financial statements but forget the tax consequence. IRD does not allow NRV write-downs as deductions until actual disposal, creating a deductible temporary difference. A deferred tax asset must be recognised under NAS 12 if future taxable profits are probable.",
			sector: "Trading & Distribution",
		},
		{
			title: "Seasonal factory overhead fully capitalised to inventory",
			description: "Brick kilns, sugar mills, and seasonal processing plants operating 4–6 months/year often capitalise 100% of annual factory overheads to inventory produced during the operating season. NAS 2 requires allocation based on normal capacity — unallocated overhead must be expensed. Idle-period costs are always period expenses.",
			sector: "Manufacturing",
		},
		{
			title: "Customs-bonded goods excluded from inventory",
			description: "Importers in dry port cities (Birgunj, Biratnagar) exclude goods sitting in customs-bonded warehouses from their inventory count, even when the entity has paid for them and bears the risks. If the entity controls the goods, they are inventory regardless of whether customs clearance is complete.",
			sector: "Trading & Distribution",
		},
		{
			title: "Consignment stock counted as own inventory",
			description: "Retail chains holding goods on consignment from suppliers incorrectly include these in their own inventory. Consignment goods belong to the consignor until sale — the retailer is an agent. Conversely, goods sent on consignment to retailers must remain in the consignor's inventory until the retailer sells them.",
			sector: "Retail",
		},
		{
			title: "Fixed overhead rate not updated for capacity changes",
			description: "Manufacturing entities set an overhead absorption rate years ago and never update it for changed normal capacity. When production volumes change materially (e.g., after plant expansion or demand decline), the rate must be recalculated. Using a stale rate systematically over- or under-costs inventory.",
			sector: "Manufacturing",
		},
	],

	relatedStandards: [
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "NAS 2 NRV test is the inventory equivalent of impairment — NAS 36 explicitly excludes inventories because NAS 2 already provides the write-down mechanism",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant & Equipment",
			reason: "Spare parts and servicing equipment may be PPE (NAS 16) or inventory (NAS 2) depending on whether they meet the PPE definition",
		},
		{
			slug: "nas-12",
			nfrsNumber: "NAS 12",
			title: "Income Taxes",
			reason: "NRV write-downs not deductible for tax create temporary differences requiring deferred tax treatment under NAS 12",
		},
		{
			slug: "nfrs-15",
			nfrsNumber: "NFRS 15",
			title: "Revenue from Contracts with Customers",
			reason: "Inventory is derecognised (expensed as COGS) when revenue is recognised under NFRS 15 — the two standards operate in lockstep",
		},
	],
};
