import type { StandardPageData } from "./types";

export const nas21: StandardPageData = {
	slug: "nas-21",
	nfrsNumber: "NAS 21",
	ifrsEquivalent: "IAS 21",
	title: "The Effects of Changes in Foreign Exchange Rates",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "globe",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA FR","ACCA SBR","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Functional Currency Determination",
				ifrs: "Functional currency is the currency of the primary economic environment in which the entity operates. Multiple indicators assessed (IAS 21.9–12)",
				nfrs: "Same principle applies. In practice nearly all Nepali entities determine NPR as their functional currency because sales, costs, and financing are denominated in NPR",
				nepalImpact: "Hydropower projects with USD-denominated loan agreements and PPA revenue linked to USD indices sometimes argue for USD functional currency, but NRB requires BFI reporting in NPR. Determination must be substance-based, not regulation-driven",
				significance: "high",
			},
			{
				topic: "Exchange Rate Source",
				ifrs: "IAS 21 does not prescribe a specific exchange rate source. Entities use spot rates or average rates as approximation (IAS 21.22–26)",
				nfrs: "NRB publishes daily buying and selling rates for major currencies. NRB mid-rate is the de facto standard for translation. For INR, the pegged rate of NPR 1.60 = INR 1 is used",
				nepalImpact: "The INR peg simplifies Indian-origin transactions but creates issues when the peg rate diverges from market realities. Entities importing from India via informal channels may face different effective rates",
				significance: "medium",
			},
			{
				topic: "Monetary vs Non-monetary Classification",
				ifrs: "Monetary items are translated at closing rate; non-monetary items at historical rate (cost model) or closing rate (fair value model) (IAS 21.23)",
				nfrs: "Same classification and translation rules. Advance payments to foreign suppliers are non-monetary items — a frequent source of error when importing capital goods for hydropower or manufacturing projects",
				nepalImpact: "Import-heavy entities like Surya Nepal, Unilever Nepal, and hydropower SPVs hold significant foreign currency payables. Misclassifying advance payments as monetary items inflates exchange differences",
				significance: "medium",
			},
			{
				topic: "Foreign Currency Borrowings",
				ifrs: "Exchange differences on foreign currency borrowings are recognised in profit or loss. Capitalisation is only permitted under IAS 23 for qualifying assets (IAS 21.28)",
				nfrs: "Same treatment. Nepal's hydropower sector relies heavily on foreign currency loans (USD, JPY, CNY) from multilateral lenders. Exchange losses during construction may be capitalised under NAS 23 if criteria met",
				nepalImpact: "Upper Tamakoshi, Arun III, and similar mega-projects face NPR 100+ crore exchange fluctuations annually on USD/JPY loans. The interaction between NAS 21 and NAS 23 is critical for determining project cost",
				significance: "high",
			},
			{
				topic: "Remittance Inflows and Revenue Recognition",
				ifrs: "Foreign currency transactions are recorded at spot rate on transaction date. Exchange differences on settlement recognised in P&L (IAS 21.21–22)",
				nfrs: "Same principle. Remittance companies (Prabhu Money Transfer, IME) receive USD/GBP/MYR and convert to NPR at NRB rates. The spread between buying and selling rates is service revenue, not exchange gain",
				nepalImpact: "Remittance is approximately 25% of GDP. Remittance operators must distinguish commission income from exchange gains — NRB and IRD treat these differently for regulatory capital and tax purposes",
				significance: "high",
			},
			{
				topic: "Translation of Foreign Operations",
				ifrs: "Assets and liabilities at closing rate, income and expenses at transaction-date rates (or average as proxy). Exchange differences to OCI — Foreign Currency Translation Reserve (IAS 21.39–42)",
				nfrs: "Same method applies. Very few Nepali entities have foreign operations, but Chaudhary Group (CG) subsidiaries in FMCG across South Asia and Soaltee Hotel in India require group-level translation",
				nepalImpact: "Limited practical relevance currently, but as Nepali conglomerates expand regionally (CG Foods in Bangladesh, NCell parent reporting), translation of foreign subsidiaries into NPR becomes important for consolidated financial statements",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB publishes daily foreign exchange rates (buying/selling) for all convertible currencies. BFIs must use NRB mid-rates for translation of foreign currency assets and liabilities. NRB caps open foreign currency positions for BFIs — net open position must not exceed 30% of core capital. Foreign currency loans to domestic borrowers require NRB approval. Revaluation gains on foreign currency holdings are not distributable as dividends until realised.",
		sebon: "Listed entities with significant foreign currency transactions must disclose: functional currency determination rationale, exchange rates used, net foreign currency gains/losses in P&L, and foreign currency risk management policies. SEBON requires sensitivity analysis showing impact of ±5% NPR movement on profit and equity for entities with material foreign currency exposures.",
		ird: "Exchange gains on foreign currency transactions are taxable as ordinary income under the Income Tax Act 2058. Exchange losses are deductible when realised. Unrealised exchange gains/losses are included in taxable income only for BFIs — other entities may defer unrealised gains per IRD practice. Import duties are calculated at Nepal Customs exchange rates on the date of customs declaration, which may differ from NRB rates used in books.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 21 (Revised 2003) Effective", description: "Current version effective globally with net investment and monetary item guidance" },
		{ date: "Jul 2018", label: "NAS 21 Effective", description: "Nepal adoption effective 1 Shrawan 2075 BS, fully aligned with IAS 21" },
		{ date: "2022", label: "NPR Volatility Period", description: "NPR depreciated ~15% against USD in FY 2078/79, highlighting foreign currency translation impacts on BFI balance sheets" },
		{ date: "2026", label: "Current", description: "Fully aligned, NRB daily rate publication used as de facto standard", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Determine the Functional Currency",
			coreQuestion: "What is the currency of the primary economic environment in which the entity operates?",
			nepalExample: "Butwal Power Company assesses: revenues are NPR-denominated (PPA with NEA in NPR), operating costs are in NPR, financing is partly in USD (IFC loan) but mostly NPR bank loans. Primary indicators point to NPR as functional currency despite USD loan component.",
			paraRef: "IAS 21.9–14",
		},
		{
			number: 2,
			name: "Record Foreign Currency Transactions at Spot Rate",
			coreQuestion: "Has each foreign currency transaction been recorded at the exchange rate on the transaction date?",
			nepalExample: "Unilever Nepal imports raw materials worth USD 500,000 on 1 Magh 2082. NRB mid-rate on that date is NPR 133.50/USD. Record: Dr Inventory NPR 6,67,50,000 / Cr Trade Payable NPR 6,67,50,000. The average rate for the month may be used if rates do not fluctuate significantly.",
			paraRef: "IAS 21.21–22",
		},
		{
			number: 3,
			name: "Retranslate Monetary Items at Closing Rate",
			coreQuestion: "Have all foreign currency monetary assets and liabilities been retranslated at the closing rate?",
			nepalExample: "At Ashad-end 2082, Unilever Nepal still owes USD 500,000. Closing NRB rate is NPR 135.20/USD. Payable retranslated to NPR 6,76,00,000. Exchange loss = NPR 6,76,00,000 − NPR 6,67,50,000 = NPR 8,50,000 recognised in P&L.",
			paraRef: "IAS 21.23(a)",
		},
		{
			number: 4,
			name: "Determine Treatment of Non-monetary Items",
			coreQuestion: "Are non-monetary items translated at historical rate (cost) or closing rate (fair value)?",
			nepalExample: "Nepal Electricity Authority paid USD 2 million advance for a Chinese turbine in Kartik 2081 at NPR 131.00/USD. The advance is non-monetary — it remains at NPR 2,62,00,000 regardless of subsequent rate changes. No exchange difference arises until the goods are delivered and the advance is applied.",
			paraRef: "IAS 21.23(b)–(c)",
		},
		{
			number: 5,
			name: "Translate Foreign Operation Financial Statements",
			coreQuestion: "Have foreign operation results been translated using closing rate (B/S) and average rate (P&L)?",
			nepalExample: "CG Foods (Bangladesh) Pvt Ltd reports in BDT. For CG Corp consolidation: assets/liabilities at Ashad-end NPR/BDT closing rate, income/expenses at weighted average rate for the year. Translation difference of NPR 3,50,00,000 is recognised in OCI (Foreign Currency Translation Reserve), not P&L.",
			paraRef: "IAS 21.39–42",
		},
	],

	inlineExamples: {
		importPayable: {
			title: "Himalayan Distillery — Import Payable Retranslation",
			context: "Himalayan Distillery Ltd imports glass bottles worth EUR 200,000 from Germany on 15 Mangsir 2082. NRB mid-rate on transaction date is NPR 143.60/EUR. Payment is due in 90 days. At Ashad-end 2082 (reporting date), the outstanding balance is EUR 200,000 and the NRB closing rate is NPR 146.80/EUR. Payment is made on 28 Shrawan 2082 at NPR 145.50/EUR.",
			steps: [
				"Step 1 — Initial recognition (15 Mangsir 2082): Record purchase at spot rate. Dr Inventory NPR 2,87,20,000 / Cr Trade Payable (EUR) NPR 2,87,20,000 (EUR 200,000 × 143.60).",
				"Step 2 — Reporting date retranslation (Ashad-end 2082): Retranslate payable at closing rate. Payable = EUR 200,000 × 146.80 = NPR 2,93,60,000. Exchange loss = NPR 2,93,60,000 − NPR 2,87,20,000 = NPR 6,40,000 to P&L.",
				"Step 3 — Settlement (28 Shrawan 2082): Payment at NPR 145.50/EUR. Amount paid = EUR 200,000 × 145.50 = NPR 2,91,00,000. Exchange gain in new period = NPR 2,93,60,000 − NPR 2,91,00,000 = NPR 2,60,000 to P&L.",
				"Step 4 — Note: Inventory remains at NPR 2,87,20,000 (historical cost). Exchange differences relate to the monetary payable, not the non-monetary inventory.",
			],
			journalEntries: [
				"15 Mangsir 2082: Dr Inventory NPR 2,87,20,000 / Cr Trade Payable (EUR) NPR 2,87,20,000",
				"Ashad-end 2082: Dr Exchange Loss NPR 6,40,000 / Cr Trade Payable (EUR) NPR 6,40,000",
				"28 Shrawan 2082: Dr Trade Payable (EUR) NPR 2,93,60,000 / Cr Bank (NPR) NPR 2,91,00,000 / Cr Exchange Gain NPR 2,60,000",
			],
			difficulty: "medium",
		},
		hydropowerLoan: {
			title: "Upper Marsyangdi — Foreign Currency Loan Translation",
			context: "Upper Marsyangdi Hydropower Ltd has a USD 50 million loan from Asian Development Bank for construction of a 600 MW project. The loan was drawn on 1 Shrawan 2080 at NPR 130.00/USD. At Ashad-end 2081, the rate is NPR 133.50/USD. At Ashad-end 2082, the rate is NPR 136.80/USD. The project is a qualifying asset under NAS 23 and construction is ongoing. Annual interest rate is 4.5%.",
			steps: [
				"Step 1 — Initial recognition (1 Shrawan 2080): Dr Bank NPR 650,00,00,000 / Cr USD Loan NPR 650,00,00,000 (USD 50M × 130.00).",
				"Step 2 — Year 1 retranslation (Ashad-end 2081): Loan retranslated to NPR 667,50,00,000 (USD 50M × 133.50). Exchange loss = NPR 17,50,00,000. Since the project is a qualifying asset under NAS 23, assess whether this exchange loss relates to an adjustment to borrowing costs.",
				"Step 3 — NAS 23 interaction: Under IFRS/NAS 23, exchange differences on foreign currency borrowings are NOT capitalised — they are recognised in P&L. Only the interest component (USD 50M × 4.5% = USD 2.25M translated at average rate) is capitalised as part of borrowing costs. The exchange loss of NPR 17.5 crore goes to P&L.",
				"Step 4 — Year 2 retranslation (Ashad-end 2082): Loan = NPR 684,00,00,000 (USD 50M × 136.80). Additional exchange loss = NPR 16,50,00,000 to P&L. Cumulative exchange loss over two years = NPR 34,00,00,000.",
				"Step 5 — Impact assessment: The NPR 34 crore exchange loss materially affects profitability during construction phase. Management discloses foreign currency risk and sensitivity analysis per NFRS 7.",
			],
			journalEntries: [
				"Ashad-end 2081: Dr Exchange Loss NPR 17,50,00,000 / Cr USD Loan NPR 17,50,00,000",
				"Ashad-end 2081 (interest capitalised): Dr CWIP — Hydropower Plant NPR 29,25,00,000 / Cr Interest Payable (USD) NPR 29,25,00,000 (USD 2.25M × avg rate ~130.00)",
				"Ashad-end 2082: Dr Exchange Loss NPR 16,50,00,000 / Cr USD Loan NPR 16,50,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Functional currency determination is a favourite SBR topic. Apply the primary indicators (sales prices, costs, financing) before secondary indicators. Do not assume functional currency equals local currency or reporting currency — analyse substance." },
			{ source: "Exam Technique", tip: "Always distinguish monetary items (cash, receivables, payables, loans) from non-monetary items (inventory, PPE, advances). Advances paid in foreign currency are non-monetary — a common trap in MCQs and constructed response questions." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates frequently capitalise exchange losses on foreign currency borrowings during construction. Under IAS 23/NAS 23, only the interest element of borrowing costs is capitalised — exchange differences go to P&L regardless of whether the asset is qualifying." },
			{ source: "Nepal-specific", tip: "The NPR-INR peg at 1.60:1 means Indian-origin transactions have no exchange risk. However, USD and other currencies fluctuate freely against NPR. In exam scenarios involving Nepal, check whether the transaction is in INR (pegged) or other currencies (floating)." },
			{ source: "Recurring Pattern", tip: "For translation of foreign operations: assets/liabilities at closing rate, income/expenses at average rate, equity at historical rate. The resulting translation difference goes to OCI. On disposal of the foreign operation, cumulative OCI is reclassified to P&L." },
			{ source: "Exam Technique", tip: "When a question involves both NAS 21 and NFRS 9 (hedging), remember: hedge accounting under NFRS 9 can defer exchange differences on hedging instruments to OCI, but the hedged item's exchange differences follow NAS 21. Keep the two standards' requirements separate in your answer." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Advances to foreign suppliers treated as monetary items",
			description: "Entities retranslate advance payments to foreign suppliers at the closing rate, creating spurious exchange gains/losses. Advance payments are non-monetary items because they represent a right to receive goods/services, not cash. They must remain at the historical rate until the goods are delivered and the advance is derecognised.",
			sector: "Manufacturing",
		},
		{
			title: "Exchange losses on foreign currency loans capitalised during construction",
			description: "Hydropower companies capitalise exchange losses on USD/JPY loans as part of project cost, arguing they are borrowing costs under NAS 23. IAS 23/NAS 23 explicitly excludes exchange differences from the definition of borrowing costs eligible for capitalisation. Only the interest component qualifies.",
			sector: "Hydropower",
		},
		{
			title: "NRB rate vs customs rate vs bank rate inconsistencies",
			description: "Entities use different exchange rates for the same transaction — NRB published rate for books, customs rate for import duty calculation, and commercial bank rate for actual payment. The accounting entry should use the rate at which the transaction could be settled (typically NRB mid-rate on transaction date), with any difference on settlement recognised as exchange gain/loss.",
			sector: "Import/Export",
		},
		{
			title: "Remittance commission income mixed with exchange gains",
			description: "Remittance operators record the gross spread between buying and selling rates as exchange gain rather than separating commission/service income from exchange differences. NRB and IRD require distinct classification — commission is service revenue subject to VAT, while exchange gains are financial income with different regulatory treatment.",
			sector: "Remittance & Finance",
		},
		{
			title: "Foreign currency translation reserve not reclassified on disposal of subsidiary",
			description: "On disposal or partial disposal of a foreign operation, the cumulative foreign currency translation reserve in OCI must be reclassified to P&L as part of the gain/loss on disposal. Nepali groups with overseas subsidiaries sometimes retain the FCTR in equity after disposal, understating the disposal gain/loss.",
			sector: "Conglomerate Groups",
		},
	],

	relatedStandards: [
		{
			slug: "nas-23",
			nfrsNumber: "NAS 23",
			title: "Borrowing Costs",
			reason: "Exchange differences on foreign currency borrowings interact with NAS 23 capitalisation — only interest, not exchange losses, is capitalised for qualifying assets",
		},
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "NFRS 9 hedge accounting may be applied to foreign currency exposures, affecting where exchange differences are recognised (P&L vs OCI)",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "Exchange differences on translation of foreign operations are presented in OCI per NAS 1 presentation requirements",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "Foreign currency assets may trigger impairment testing when exchange rate movements reduce recoverable amount below carrying amount",
		},
	],
};
