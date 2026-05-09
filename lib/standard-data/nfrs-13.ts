import type { StandardPageData } from "./types";

export const nfrs13: StandardPageData = {
	slug: "nfrs-13",
	nfrsNumber: "NFRS 13",
	ifrsEquivalent: "IFRS 13",
	title: "Fair Value Measurement",
	topic: "measurement",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2013-01-01",
	status: "aligned",
	heroMotif: "ruler",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AA","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Fair Value Definition — Exit Price",
				ifrs: "IFRS 13.9 defines fair value as the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date (exit price)",
				nfrs: "Same definition. In Nepal, the exit price concept is challenging because many assets (unlisted shares, real estate, specialised plant) do not have observable exit markets. Entities must estimate what a market participant would pay, not what the entity would accept",
				nepalImpact: "Nepali entities sometimes confuse fair value with replacement cost or book value. For unlisted BFI shares, the exit price must reflect what a willing buyer would pay in the principal market (if one exists) or the most advantageous market — not simply net asset value per share",
				significance: "high",
			},
			{
				topic: "Principal vs Most Advantageous Market",
				ifrs: "IFRS 13.16–21 requires that fair value be measured using the price in the principal market (greatest volume and level of activity) or, in its absence, the most advantageous market (maximises the amount received or minimises the amount paid, after transaction costs)",
				nfrs: "Same hierarchy. In Nepal, NEPSE is the principal market for listed securities. For unlisted securities, real estate, and commodities, identifying the principal or most advantageous market requires judgement. Transaction costs are excluded from fair value but transport costs are included",
				nepalImpact: "For listed shares, NEPSE closing price is the Level 1 fair value. However, NEPSE is a thin market — some scrips trade fewer than 100 shares per day. Entities must assess whether the quoted price represents fair value or whether adjustments are needed for illiquidity (rare in practice, as IFRS 13 generally accepts quoted prices without adjustment)",
				significance: "medium",
			},
			{
				topic: "Fair Value Hierarchy — Level 1 Inputs",
				ifrs: "IFRS 13.76–80 defines Level 1 inputs as quoted prices (unadjusted) in active markets for identical assets or liabilities that the entity can access at the measurement date",
				nfrs: "Same definition. NEPSE provides Level 1 inputs for listed equity securities. Government bond yields published by NRB provide Level 1 or Level 2 inputs for government securities depending on the activity of the secondary market",
				nepalImpact: "NEPSE lists approximately 230 companies. For listed BFI shares, the closing price on NEPSE is Level 1. However, corporate bonds and debentures listed on NEPSE rarely trade — their quoted prices may not represent Level 1 inputs if the market is not active",
				significance: "high",
			},
			{
				topic: "Fair Value Hierarchy — Level 2 Inputs",
				ifrs: "IFRS 13.81–85 defines Level 2 inputs as inputs other than quoted prices in Level 1 that are observable, either directly (prices) or indirectly (derived from prices). Includes quoted prices for similar assets, interest rates, yield curves, credit spreads",
				nfrs: "Same definition. In Nepal, government bond fair values are typically Level 2 — derived from NRB's published yield curve rather than active secondary market trading. Inter-bank lending rates (published by NRB) provide Level 2 inputs for short-term financial instruments",
				nepalImpact: "BFIs holding large portfolios of government bonds (development bonds, treasury bills) use NRB's published yield curves to derive fair values. These are Level 2 because the inputs (yield curves) are observable but the specific bond may not trade actively. Corporate bond valuations using credit spreads over the risk-free rate also qualify as Level 2",
				significance: "medium",
			},
			{
				topic: "Fair Value Hierarchy — Level 3 Inputs",
				ifrs: "IFRS 13.86–90 defines Level 3 inputs as unobservable inputs used when observable inputs are not available. Includes the entity's own data, adjusted for market participant assumptions. Requires extensive disclosure",
				nfrs: "Same definition. Level 3 measurements are common in Nepal due to the limited depth of capital markets. Unlisted shares, investment property in secondary cities, specialised assets (hydropower turbines), and loan portfolios measured at fair value all typically require Level 3 inputs",
				nepalImpact: "BFI investment portfolios include unlisted shares of subsidiaries, associates, and promoter group companies — all requiring Level 3 fair value measurement. Common approaches: adjusted net asset value method, discounted cash flow using Nepal-specific discount rates (NRB's base rate + risk premium), or comparable transaction method using recent private placements",
				significance: "high",
			},
			{
				topic: "Valuation Techniques",
				ifrs: "IFRS 13.61–66 identifies three valuation approaches: market approach (using prices and other relevant information from market transactions involving identical or comparable assets), income approach (converting future amounts to a single present amount), and cost approach (current replacement cost)",
				nfrs: "Same three approaches. In Nepal, the market approach is feasible only for NEPSE-listed securities and commodities with published prices. The income approach (DCF) is widely used for hydropower projects, BFI valuations, and investment property. The cost approach is used for specialised assets like manufacturing plant where no market exists",
				nepalImpact: "Valuation practitioners in Nepal face challenges: discount rates must reflect Nepal-specific risk (country risk premium, political risk, regulatory risk), comparable transactions are scarce for the market approach, and replacement cost data for the cost approach is often outdated. The Institute of Chartered Accountants of Nepal (ICAN) has not issued specific valuation guidance beyond NFRS 13",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to measure financial instruments at fair value in accordance with NFRS 9 and NFRS 13. NRB's Financial Reporting Directives specify that listed equity investments must be marked to NEPSE closing prices (Level 1). Government bonds must be valued using NRB-published yield curves (Level 2). For unlisted investments, BFIs must obtain independent valuations at least annually. NRB has expressed concern about Level 3 measurement subjectivity and requires BFIs to disclose the valuation methodology, key assumptions, and sensitivity analysis for material Level 3 financial assets.",
		sebon: "SEBON requires listed entities to disclose the fair value of all financial instruments, including those measured at amortised cost, in the notes to the financial statements. SEBON's financial reporting framework requires disclosure of the fair value hierarchy classification for all assets and liabilities measured at fair value. SEBON has issued guidance on using NEPSE closing prices for fair value measurement and has cautioned entities against adjusting Level 1 prices for illiquidity without strong justification.",
		ird: "IRD does not accept fair value adjustments for tax purposes unless they result in realised gains or losses. Unrealised fair value gains on FVTPL financial assets create taxable temporary differences under NAS 12. For transfer pricing purposes, IRD may challenge the fair value of intra-group transactions if the valuation methodology does not reflect arm's length pricing. The Income Tax Act 2058 uses 'market value' rather than 'fair value' — the two concepts are similar but not identical, potentially causing disputes.",
	},

	timeline: [
		{ date: "Jan 2013", label: "IFRS 13 Effective", description: "IFRS 13 became effective globally, providing a single framework for fair value measurement previously scattered across multiple standards" },
		{ date: "Jul 2014", label: "Nepal GAAP Fair Value", description: "Fair value measurement under old Nepal GAAP was not comprehensively defined — individual standards contained their own measurement guidance" },
		{ date: "Jul 2018", label: "NFRS 13 Effective", description: "NFRS 13 effective as part of full NFRS adoption (1 Shrawan 2075 BS), introducing the three-level hierarchy and exit price definition to Nepal" },
		{ date: "2026", label: "Current", description: "Fully aligned with IFRS 13, no carve-outs", highlight: true },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Asset or Liability Being Measured",
			coreQuestion: "What is the unit of account — the specific asset or liability to be measured at fair value, considering its characteristics?",
			nepalExample: "Siddhartha Bank measures its investment portfolio at fair value at Ashad-end 2082. The portfolio includes: 50,000 listed shares of Nepal Telecom (unit of account = each share), NPR 5 crore government development bonds (unit of account = the bond holding), and 10% unlisted shares of Siddhartha Insurance (unit of account = the shareholding block, considering any control premium or minority discount).",
			paraRef: "IFRS 13.11–14",
		},
		{
			number: 2,
			name: "Determine the Principal or Most Advantageous Market",
			coreQuestion: "In which market would the transaction to sell the asset or transfer the liability take place?",
			nepalExample: "For Nepal Telecom shares, NEPSE is the principal market (highest volume of trading). For government bonds, NRB's primary auction and the inter-bank secondary market are assessed — the inter-bank market is the principal market for secondary trading. For Siddhartha Insurance unlisted shares, there is no organised market — the most advantageous market would be a negotiated private sale to a willing buyer.",
			paraRef: "IFRS 13.16–21",
		},
		{
			number: 3,
			name: "Select the Valuation Technique",
			coreQuestion: "Which valuation approach(es) — market, income, or cost — is most appropriate given available inputs?",
			nepalExample: "Nepal Telecom shares: market approach using NEPSE closing price (Level 1, no valuation technique needed beyond quoting the price). Government bonds: income approach using discounted cash flow with NRB-published yield curve (Level 2). Siddhartha Insurance unlisted shares: income approach using DCF with projected cash flows at a discount rate of 14% (Nepal risk-free rate 8% + equity risk premium 4% + company-specific risk 2%), cross-checked with adjusted net asset value method (Level 3).",
			paraRef: "IFRS 13.61–66",
		},
		{
			number: 4,
			name: "Classify Within the Fair Value Hierarchy",
			coreQuestion: "Is the fair value measurement Level 1, Level 2, or Level 3 based on the lowest-level significant input?",
			nepalExample: "Siddhartha Bank classifies: Nepal Telecom shares at NPR 820 per share — Level 1 (NEPSE closing price). Government development bonds at NPR 5,12 crore — Level 2 (NRB yield curve, observable input). Siddhartha Insurance shares at NPR 3,40 crore — Level 3 (DCF using unobservable discount rate and growth assumptions). The entire portfolio is disclosed by hierarchy level in the notes.",
			paraRef: "IFRS 13.72–90",
		},
		{
			number: 5,
			name: "Disclose Fair Value Measurements",
			coreQuestion: "Have all required disclosures been made, including hierarchy classification, valuation techniques, and Level 3 sensitivity analysis?",
			nepalExample: "Siddhartha Bank discloses in notes: fair value hierarchy table showing Level 1 (NPR 4,10 crore listed equities), Level 2 (NPR 18,50 crore government bonds), Level 3 (NPR 6,80 crore unlisted investments). For Level 3: valuation technique (DCF), key unobservable inputs (discount rate 14%, terminal growth rate 3%), sensitivity (±1% change in discount rate changes fair value by ±NPR 52 lakh). Transfers between levels: none during the year.",
			paraRef: "IFRS 13.91–99",
		},
	],

	inlineExamples: {
		listedSecuritiesFairValue: {
			title: "Himalayan Bank — Fair Value of Listed Equity Portfolio (Level 1)",
			context: "Himalayan Bank Ltd holds a portfolio of listed equity securities classified as FVTOCI under NFRS 9. At Ashad-end 2082, the portfolio includes: 1,00,000 shares of Chilime Hydropower (NEPSE closing price NPR 520), 50,000 shares of Nepal Life Insurance (NEPSE closing price NPR 1,280), and 75,000 shares of Butwal Power Company (NEPSE closing price NPR 385). The original cost of the portfolio was NPR 12,50,00,000.",
			steps: [
				"Step 1 — Identify the principal market: NEPSE is the principal market for all three listed securities. The entity can access NEPSE at the measurement date.",
				"Step 2 — Obtain Level 1 inputs: Chilime closing price NPR 520, Nepal Life NPR 1,280, Butwal Power NPR 385. No adjustment to quoted prices is permitted for Level 1.",
				"Step 3 — Calculate fair values: Chilime = 1,00,000 × NPR 520 = NPR 5,20,00,000. Nepal Life = 50,000 × NPR 1,280 = NPR 6,40,00,000. Butwal Power = 75,000 × NPR 385 = NPR 2,88,75,000. Total fair value = NPR 14,48,75,000.",
				"Step 4 — Measure the gain: Total fair value NPR 14,48,75,000 − Cost NPR 12,50,00,000 = Unrealised gain NPR 1,98,75,000. Since classified as FVTOCI, the gain is recognised in OCI (not P&L).",
				"Step 5 — Hierarchy classification: All three investments are Level 1 (quoted prices in an active market for identical assets).",
				"Step 6 — Disclose: Fair value hierarchy table shows Level 1 equity investments at NPR 14,48,75,000. No transfers between levels. No Level 3 inputs used.",
			],
			journalEntries: [
				"Fair value adjustment: Dr Equity Investments — FVTOCI NPR 1,98,75,000 / Cr Other Comprehensive Income — Fair Value Reserve NPR 1,98,75,000.",
				"Note: Under FVTOCI for equity instruments, the cumulative OCI gain is never recycled to P&L — even on disposal, the gain transfers within equity (from OCI reserve to retained earnings).",
				"Deferred tax on OCI gain: Dr OCI — Deferred Tax NPR 49,68,750 / Cr Deferred Tax Liability NPR 49,68,750 (at 25% corporate tax rate). The deferred tax follows the underlying item into OCI.",
			],
			difficulty: "medium",
		},
		unlistedSharesFairValue: {
			title: "Machhapuchchhre Bank — Fair Value of Unlisted Insurance Subsidiary (Level 3)",
			context: "Machhapuchchhre Bank Ltd holds a 60% controlling interest in Machhapuchchhre Insurance Ltd (unlisted). For NFRS 13 disclosure purposes and impairment testing under NAS 36, management must determine the fair value of the subsidiary. The subsidiary's financials for Ashad 2082: total assets NPR 28 crore, total liabilities NPR 16 crore, net assets NPR 12 crore, profit NPR 2,40 crore. No quoted price exists. Management uses two valuation approaches.",
			steps: [
				"Step 1 — Confirm no Level 1 or Level 2 inputs: Machhapuchchhre Insurance is not listed on NEPSE. No quoted price exists for identical or similar instruments. No recent arm's length transactions in the shares are available. Level 3 measurement is required.",
				"Step 2 — Income approach (DCF): Project free cash flows for 5 years based on insurance premium growth of 12% per annum (consistent with Nepal insurance industry growth), claims ratio of 62%, and investment income yield of 7%. Terminal value using Gordon growth model at 4% perpetual growth. Discount rate: 15% (risk-free rate 8% from NRB T-bill rate + equity risk premium 5% + insurance sector risk 2%).",
				"Step 3 — DCF result: Present value of projected cash flows NPR 8,40 crore + present value of terminal value NPR 13,20 crore = Enterprise value NPR 21,60 crore. Less: net debt NPR 4 crore. Equity value (100%) = NPR 17,60 crore. Machhapuchchhre Bank's 60% share = NPR 10,56 crore.",
				"Step 4 — Market approach (adjusted net asset value): Net assets NPR 12 crore. Apply a price-to-book multiple of 1.4x (based on listed insurance companies on NEPSE: Shikhar Insurance 1.5x, Sagarmatha Insurance 1.3x average). Adjusted equity value = NPR 16,80 crore. 60% share = NPR 10,08 crore.",
				"Step 5 — Conclude on fair value: Management weighs the DCF (60% weight) and adjusted NAV (40% weight). Weighted fair value of 60% interest = (60% × NPR 10,56 crore) + (40% × NPR 10,08 crore) = NPR 6,34 crore + NPR 4,03 crore = NPR 10,37 crore.",
				"Step 6 — Sensitivity analysis: ±1% change in discount rate changes 60% equity value by ±NPR 68 lakh. ±1% change in terminal growth rate changes value by ±NPR 45 lakh. Disclose both sensitivities in Level 3 disclosure notes.",
			],
			journalEntries: [
				"No journal entry arises from fair value measurement for disclosure purposes alone. Fair value is disclosed in notes alongside the carrying amount.",
				"If impairment is indicated (carrying amount exceeds fair value less costs of disposal): Dr Impairment Loss NPR [amount] / Cr Investment in Subsidiary NPR [amount] — under NAS 36 in the parent's separate financial statements.",
				"In consolidated financial statements, the impairment test applies to the subsidiary's CGU including goodwill, not the investment account directly.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The fair value hierarchy is tested almost every session. Remember: Level 1 = quoted prices in active markets (NEPSE closing price for listed shares), Level 2 = observable inputs other than Level 1 (NRB yield curves for government bonds, interest rate swaps), Level 3 = unobservable inputs (DCF for unlisted shares). Classification is based on the lowest-level significant input." },
			{ source: "Jun 2024 Examiner Report", tip: "Candidates confuse fair value with carrying amount or historical cost. Fair value is the exit price — what a market participant would pay to buy the asset, not what the entity paid for it. This distinction is critical when measuring impairment (NAS 36) or investment property (NAS 40)." },
			{ source: "Exam Technique", tip: "When calculating Level 3 fair value using DCF, always state your assumptions: discount rate (build-up from risk-free rate + premiums), growth rate, projection period, and terminal value methodology. Examiners award marks for the methodology even if the arithmetic has minor errors." },
			{ source: "Nepal-specific", tip: "Nepal's thin capital market means Level 3 measurements are disproportionately common compared to developed markets. Be prepared to discuss the challenges: lack of comparable transactions, limited valuation expertise, absence of published credit spreads, and reliance on NRB base rates as proxies for risk-free rates." },
			{ source: "Recurring Pattern", tip: "Transaction costs are excluded from fair value but included in initial measurement under NFRS 9 (for amortised cost and FVTOCI instruments). Transport costs are included in fair value if location is a characteristic of the asset. This distinction is a common MCQ trap." },
			{ source: "Exam Technique", tip: "For disclosure questions, structure your answer using the hierarchy: first classify all items into Level 1/2/3, then for Level 3 items describe the valuation technique, key unobservable inputs, and provide sensitivity analysis. This mirrors the IFRS 13.93 disclosure checklist." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Using net asset value as fair value without adjustment",
			description: "Entities measure unlisted investments at book value (net asset value per share from the investee's financial statements) and call this 'fair value'. Net asset value is not necessarily fair value — fair value requires consideration of market participant assumptions, including control premiums, minority discounts, illiquidity discounts, and the earning capacity of the investee. A profitable BFI's fair value typically exceeds its net asset value.",
			sector: "Banking",
		},
		{
			title: "Adjusting Level 1 prices for illiquidity without justification",
			description: "Some entities adjust NEPSE closing prices downward citing 'thin trading' or 'illiquidity discount'. IFRS 13 generally requires Level 1 quoted prices to be used unadjusted. An adjustment for illiquidity would move the measurement to Level 2 and requires strong justification that the quoted price does not represent fair value in an orderly transaction. SEBON has cautioned against such adjustments.",
			sector: "Listed Companies",
		},
		{
			title: "Inconsistent discount rates in Level 3 DCF valuations",
			description: "Entities use different discount rates for similar assets without justification. For example, a BFI values two unlisted insurance subsidiaries using discount rates of 12% and 18% without explaining the difference. The discount rate must reflect the risk of the specific cash flows being discounted, and the build-up (risk-free rate + premiums) must be disclosed and internally consistent.",
			sector: "Banking",
		},
		{
			title: "No sensitivity analysis for Level 3 measurements",
			description: "Entities disclose Level 3 fair value amounts but omit the required sensitivity analysis showing how fair value would change if key unobservable inputs were altered. NFRS 13.93(h) requires quantified sensitivity disclosure for recurring Level 3 measurements, including the effect of reasonably possible changes in unobservable inputs.",
			sector: "Listed Companies",
		},
		{
			title: "Confusing fair value with replacement cost for investment property",
			description: "Entities measuring investment property under the fair value model (NAS 40) use replacement cost or government-assessed land values (recorded at Land Revenue Office) instead of exit price fair value. NFRS 13 requires the price a market participant would pay for the property in its highest and best use, which may differ significantly from the government valuation or construction cost.",
			sector: "Real Estate",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "NFRS 9 requires fair value measurement for financial assets classified as FVTPL and FVTOCI, and NFRS 13 provides the measurement framework",
		},
		{
			slug: "nas-40",
			nfrsNumber: "NAS 40",
			title: "Investment Property",
			reason: "NAS 40 permits the fair value model for investment property, with fair value determined in accordance with NFRS 13",
		},
		{
			slug: "nas-16",
			nfrsNumber: "NAS 16",
			title: "Property, Plant and Equipment",
			reason: "NAS 16 permits the revaluation model where fair value is determined using NFRS 13 principles, particularly relevant for land and buildings in Nepal",
		},
		{
			slug: "nas-36",
			nfrsNumber: "NAS 36",
			title: "Impairment of Assets",
			reason: "NAS 36 uses fair value less costs of disposal as one measure of recoverable amount, with fair value determined under NFRS 13",
		},
	],
};
