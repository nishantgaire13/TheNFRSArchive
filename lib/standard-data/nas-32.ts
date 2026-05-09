import type { StandardPageData } from "./types";

export const nas32: StandardPageData = {
	slug: "nas-32",
	nfrsNumber: "NAS 32",
	ifrsEquivalent: "IAS 32",
	title: "Financial Instruments: Presentation",
	topic: "financial-instruments",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "layers",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Preference Share Classification",
				ifrs: "Preference shares classified as liability if issuer has an obligation to deliver cash (mandatory dividends, mandatory redemption). Classified as equity only if fully discretionary and non-redeemable",
				nfrs: "Same principle, but NRB-licensed BFIs issue preference shares to meet Tier 2 capital requirements. NRB requires preference shares qualifying as capital to have loss-absorption features and discretionary dividends — aligning regulatory and accounting classification",
				nepalImpact: "BFI preference shares issued for regulatory capital are typically non-redeemable with discretionary dividends (equity classification). However, some cooperative and development bank preference shares carry mandatory dividend obligations — these must be classified as liabilities, reducing reported equity and capital adequacy ratios",
				significance: "high",
			},
			{
				topic: "Compound Instruments — Convertible Debentures",
				ifrs: "Compound instruments split into liability component (present value of contractual cash flows) and equity component (residual). The 'with-and-without' method is applied",
				nfrs: "Same treatment. NEPSE-listed companies issue convertible debentures — e.g., Unilever Nepal, Bottlers Nepal. The liability component is measured at PV of interest and principal using market rate for equivalent non-convertible debt. The equity component is the residual",
				nepalImpact: "Convertible debentures listed on NEPSE require bifurcation. Nepal's relatively illiquid corporate bond market makes determining the market rate for equivalent non-convertible debt challenging — entities often use NRB base rate plus a credit spread as proxy",
				significance: "high",
			},
			{
				topic: "Treasury Shares",
				ifrs: "Own equity instruments reacquired (treasury shares) are deducted from equity at cost. No gain or loss recognised on purchase, sale, issue or cancellation of treasury shares",
				nfrs: "Same treatment. Companies Act 2063 restricts share buybacks in Nepal — entities generally cannot purchase their own shares except in limited circumstances (e.g., court-ordered reduction). Treasury shares are rare in Nepal compared to mature markets",
				nepalImpact: "Treasury share transactions are uncommon on NEPSE. When they occur (typically through court-ordered capital reduction or acquisition of subsidiary holding parent shares), entities sometimes incorrectly recognise gains or losses in P&L instead of equity adjustments",
				significance: "medium",
			},
			{
				topic: "Promoter Shares and Lock-in",
				ifrs: "No specific guidance on promoter share classification. Lock-in periods do not affect equity/liability classification — classification depends solely on the contractual terms of the instrument",
				nfrs: "Same principle. SEBON requires promoter shares to be locked in for 3 years from listing (SEBON Regulations). The lock-in restriction does not change their classification — they remain ordinary equity. However, some promoter share agreements contain put options or guaranteed return clauses that could trigger liability classification",
				nepalImpact: "NEPSE-listed companies have significant promoter holdings (often 51-70%). If promoter agreements contain put options back to the company or guaranteed minimum returns, these clauses could reclassify promoter shares from equity to financial liabilities — a material balance sheet impact",
				significance: "high",
			},
			{
				topic: "Offsetting Financial Assets and Liabilities",
				ifrs: "Financial assets and liabilities offset only when entity has a legally enforceable right to set off AND intends to settle net or simultaneously. Both conditions must be met",
				nfrs: "Same criteria. BFIs in Nepal often have bilateral arrangements with counterparties involving both lending and deposit relationships. Offsetting is only permitted if a master netting agreement provides a legally enforceable right of set-off under Nepal law (Contract Act 2056)",
				nepalImpact: "Nepal's legal framework for netting agreements is less developed than in common-law jurisdictions. The enforceability of set-off rights in insolvency (NRB's Prompt Corrective Action or liquidation) is untested, making BFIs cautious about offsetting. Most present gross amounts",
				significance: "medium",
			},
			{
				topic: "Costs of Equity Transactions",
				ifrs: "Transaction costs directly attributable to issuing equity instruments are deducted from equity (net of tax). IPO costs, rights issue costs, and share issuance expenses follow this treatment",
				nfrs: "Same treatment. NEPSE IPO costs (issue manager fees, underwriting commission, SEBON fees, CDS charges, printing costs) should be deducted from share premium. Many Nepali entities incorrectly expense IPO costs in profit or loss instead of deducting from equity",
				nepalImpact: "With frequent IPOs and rights issues on NEPSE, the treatment of issuance costs is practically important. Entities paying 3-5% of issue proceeds in fees to issue managers (e.g., NMB Capital, NIBL Capital) must debit share premium, not P&L",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB Unified Directives specify the features preference shares must have to qualify as Tier 2 regulatory capital: non-cumulative dividends, discretionary payment, subordination, and loss absorption. These features generally align with equity classification under NAS 32. NRB also prescribes minimum capital requirements where the equity/liability classification of instruments directly impacts capital adequacy ratios (CAR). Reclassification of a preference share from equity to liability can reduce a BFI's CAR below the 11% minimum.",
		sebon: "SEBON's listing regulations require disclosure of the terms and conditions of all equity and debt instruments, including convertible securities. SEBON monitors the classification of instruments and has authority to require reclassification if terms are inconsistent with reported classification. For IPOs and rights issues, SEBON requires detailed prospectus disclosure of instrument features that determine equity vs liability classification.",
		ird: "Dividends on equity-classified instruments are not deductible for tax purposes, while interest on liability-classified instruments is deductible (subject to thin capitalisation limits under Income Tax Act 2058). The classification of preference shares and compound instruments directly impacts tax deductions — interest on the liability component of convertible debentures is tax-deductible, while the equity component generates no deduction. IRD may challenge classifications that appear designed primarily for tax benefit.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 32 Revised Effective", description: "Revised standard separating presentation from recognition and measurement" },
		{ date: "Jul 2018", label: "NAS 32 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "Jan 2024", label: "IASB Amendments", description: "Amendments on classification of financial instruments with contingent settlement features" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Financial Instrument",
			coreQuestion: "Is the instrument a financial asset, financial liability, or equity instrument?",
			nepalExample: "Mega Bank issues 10,00,000 preference shares at NPR 100 each (NPR 10 crore). Terms: 8% dividend rate, non-cumulative, discretionary, non-redeemable, non-convertible. No contractual obligation to deliver cash — classified as equity instrument.",
			paraRef: "IAS 32.11",
		},
		{
			number: 2,
			name: "Assess the Contractual Obligation Test",
			coreQuestion: "Does the issuer have a contractual obligation to deliver cash or another financial asset?",
			nepalExample: "Kumari Bank issues NPR 5 crore redeemable preference shares, mandatory 7% cumulative dividend, redeemable after 7 years at par. The mandatory dividend AND mandatory redemption create a contractual obligation to deliver cash — classified as financial liability despite the name 'preference shares'.",
			paraRef: "IAS 32.16–17",
		},
		{
			number: 3,
			name: "Split Compound Instruments",
			coreQuestion: "Does the instrument contain both a liability and an equity component?",
			nepalExample: "Nepal Telecom issues NPR 50 crore convertible debentures: 6% annual coupon, 5-year maturity, convertible into ordinary shares at NPR 800 per share at holder's option. Liability component = PV of interest (NPR 3 crore × 5 years) + PV of principal (NPR 50 crore), discounted at 9% (market rate for equivalent non-convertible debt) = NPR 44.16 crore. Equity component = NPR 50 crore − NPR 44.16 crore = NPR 5.84 crore.",
			paraRef: "IAS 32.28–32",
		},
		{
			number: 4,
			name: "Evaluate Offsetting Criteria",
			coreQuestion: "Can financial assets and liabilities be presented net on the balance sheet?",
			nepalExample: "Sanima Bank has a NPR 20 crore fixed deposit placed with Global IME Bank and simultaneously owes Global IME NPR 15 crore on a term loan. Both mature on the same date. However, there is no master netting agreement providing a legally enforceable right of set-off. Result: present gross — NPR 20 crore asset and NPR 15 crore liability separately.",
			paraRef: "IAS 32.42–50",
		},
		{
			number: 5,
			name: "Account for Equity Transaction Costs",
			coreQuestion: "Have costs directly attributable to equity issuance been deducted from equity?",
			nepalExample: "Shivam Cements conducts an IPO on NEPSE, issuing 50 lakh shares at NPR 100. Total proceeds: NPR 50 crore. IPO costs: issue manager fee (NMB Capital) NPR 40 lakh, SEBON registration NPR 5 lakh, CDS fee NPR 3 lakh, printing and marketing NPR 12 lakh = total NPR 60 lakh. Debit share premium NPR 60 lakh (net of tax), NOT profit or loss.",
			paraRef: "IAS 32.37–38",
		},
	],

	inlineExamples: {
		convertibleDebenture: {
			title: "Unilever Nepal — Convertible Debenture Bifurcation",
			context: "Unilever Nepal Ltd issues NPR 30 crore of convertible debentures on NEPSE. Terms: 5-year maturity, 7% annual coupon paid semi-annually, convertible into ordinary shares at NPR 1,200 per share at the holder's option at maturity. The market rate for equivalent non-convertible debt is 10%. Face value per debenture: NPR 1,000.",
			steps: [
				"Step 1 — Identify as compound instrument: the debenture has a liability component (obligation to pay interest and principal) and an equity component (holder's option to convert to shares).",
				"Step 2 — Measure liability component: PV of interest = NPR 2.10 crore × PVAF(5%, 10 periods semi-annual) = NPR 16.22 crore in interest PV. PV of principal = NPR 30 crore × PVF(5%, 10 periods) = NPR 18.42 crore. Total liability = NPR 26.42 crore (using 5% semi-annual discount rate).",
				"Step 3 — Measure equity component as residual: NPR 30 crore − NPR 26.42 crore = NPR 3.58 crore. This represents the value of the conversion option.",
				"Step 4 — Allocate transaction costs (if any) proportionally between liability and equity components based on their relative carrying amounts.",
				"Step 5 — Subsequent measurement: liability component accretes towards NPR 30 crore over 5 years using effective interest rate (10%). The equity component remains fixed at NPR 3.58 crore — no remeasurement.",
			],
			journalEntries: [
				"Issue: Dr Cash NPR 30,00,00,000 / Cr Debenture Liability NPR 26,42,00,000 / Cr Equity — Conversion Option NPR 3,58,00,000",
				"First semi-annual interest: Dr Finance Cost NPR 1,32,10,000 (5% × 26.42 cr) / Cr Cash NPR 1,05,00,000 (3.5% × 30 cr coupon) / Cr Debenture Liability NPR 27,10,000 (accretion)",
				"If converted at maturity: Dr Debenture Liability NPR 30,00,00,000 / Dr Equity — Conversion Option NPR 3,58,00,000 / Cr Share Capital & Premium NPR 33,58,00,000",
			],
			difficulty: "medium",
		},
		preferenceShare: {
			title: "Laxmi Sunrise Bank — Preference Share Classification Analysis",
			context: "Laxmi Sunrise Bank issues two tranches of preference shares to boost Tier 2 capital. Tranche A: NPR 15 crore, 7% non-cumulative discretionary dividend, non-redeemable, non-convertible. Tranche B: NPR 10 crore, 8% cumulative mandatory dividend, redeemable at par after 10 years at the issuer's option, non-convertible. NRB requires loss-absorption features for Tier 2 capital qualification.",
			steps: [
				"Step 1 — Analyse Tranche A: No obligation to pay dividends (non-cumulative, discretionary). No obligation to redeem (non-redeemable). No contractual obligation to deliver cash → Equity classification. Qualifies as Tier 2 capital under NRB norms.",
				"Step 2 — Analyse Tranche B: Cumulative mandatory dividend creates an obligation to deliver cash. Even though redemption is at the issuer's option (not the holder's), the mandatory cumulative dividend alone triggers liability classification.",
				"Step 3 — Tranche B classification impact: NPR 10 crore moves from equity to financial liability. This reduces total equity, increases liabilities, and impacts the debt-to-equity ratio and capital adequacy ratio.",
				"Step 4 — Tranche B does NOT qualify as Tier 2 capital under NRB — mandatory dividends fail the discretionary payment condition. The bank must find alternative capital instruments.",
				"Step 5 — Tranche B interest expense: the 8% mandatory dividend (NPR 80 lakh/year) is recognised as finance cost in P&L, not as a distribution from equity. This reduces reported profit and EPS.",
			],
			journalEntries: [
				"Tranche A issue: Dr Cash NPR 15,00,00,000 / Cr Equity — Preference Share Capital NPR 15,00,00,000",
				"Tranche A dividend (when declared): Dr Retained Earnings NPR 1,05,00,000 / Cr Dividend Payable NPR 1,05,00,000",
				"Tranche B issue: Dr Cash NPR 10,00,00,000 / Cr Financial Liability — Preference Shares NPR 10,00,00,000",
				"Tranche B mandatory dividend: Dr Finance Cost (P&L) NPR 80,00,000 / Cr Cash NPR 80,00,000",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The substance-over-form principle is the foundation of NAS 32. A preference share is NOT automatically equity. A debenture is NOT automatically a liability. Classification depends on the contractual terms — mandatory cash outflows = liability, discretionary = equity. The name of the instrument is irrelevant." },
			{ source: "Dec 2024 Examiner Report", tip: "Compound instrument bifurcation is tested almost every sitting. Always measure the liability component first (PV of future cash flows at market rate for equivalent non-convertible debt). The equity component is always the residual. Never measure the equity component directly." },
			{ source: "Exam Technique", tip: "For preference shares, check THREE features: (1) dividend — mandatory or discretionary? (2) redemption — mandatory, at holder's option, or issuer's option? (3) cumulative or non-cumulative? If ANY feature creates a contractual obligation to deliver cash, the ENTIRE instrument (or that component) is a liability." },
			{ source: "Nepal-specific", tip: "NRB Tier 2 capital requirements for BFI preference shares align with equity classification under NAS 32 — both require discretionary dividends and loss absorption. If a BFI issues preference shares that qualify as regulatory capital, they should also classify as equity under NAS 32. A mismatch signals a problem with the instrument's terms." },
			{ source: "Recurring Pattern", tip: "Transaction costs on equity instruments (IPO costs, rights issue expenses) are deducted from equity, not expensed in P&L. Transaction costs on financial liabilities (debenture issue costs) are included in the liability's initial measurement and amortised using the effective interest method. This distinction is frequently tested." },
			{ source: "Exam Technique", tip: "Offsetting requires BOTH conditions simultaneously: legally enforceable right of set-off AND intention to settle net. A master netting agreement alone is insufficient if the entity settles gross. Present gross unless both conditions are definitively met — this is the safer exam answer." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Classifying all preference shares as equity without analysing contractual terms",
			description: "BFIs and companies issue preference shares with varying terms. Non-cumulative discretionary dividend shares are equity, but mandatory cumulative dividend shares are liabilities. Many Nepali entities classify all preference shares as equity based on their legal form, ignoring the substance of mandatory cash obligations embedded in the terms.",
			sector: "Banking",
		},
		{
			title: "Failing to bifurcate convertible debentures into liability and equity components",
			description: "Companies issuing convertible debentures on NEPSE often record the entire proceeds as a liability, ignoring the equity component (conversion option). This understates equity, overstates liabilities, and misstates interest expense (which should be at the effective rate, not the coupon rate).",
			sector: "Listed Companies",
		},
		{
			title: "Expensing IPO and rights issue costs in profit or loss",
			description: "Issue manager fees, SEBON registration charges, CDS fees, and prospectus printing costs for equity issuances should be deducted from share premium. Many Nepali companies, especially first-time IPO issuers, expense these costs in P&L, overstating expenses and understating equity.",
			sector: "Listed Companies",
		},
		{
			title: "Offsetting BFI interbank assets and liabilities without enforceable netting rights",
			description: "Banks with bilateral lending and deposit relationships sometimes offset interbank balances to present a cleaner balance sheet. Without a legally enforceable master netting agreement tested under Nepali law (including insolvency scenarios), gross presentation is required. Netting without legal enforceability violates NAS 32.",
			sector: "Banking",
		},
		{
			title: "Ignoring put options in promoter share agreements",
			description: "Some promoter share agreements on NEPSE-listed companies contain clauses giving promoters the right to sell shares back to the company at a predetermined price (put option). This creates a financial liability for the company equal to the present value of the put option exercise price, which must be recognised even though the shares appear as ordinary equity.",
			sector: "Listed Companies",
		},
	],

	relatedStandards: [
		{
			slug: "nfrs-9",
			nfrsNumber: "NFRS 9",
			title: "Financial Instruments",
			reason: "NFRS 9 governs recognition, measurement, and impairment of financial instruments while NAS 32 governs their presentation and equity vs liability classification",
		},
		{
			slug: "nfrs-7",
			nfrsNumber: "NFRS 7",
			title: "Financial Instruments: Disclosures",
			reason: "NFRS 7 prescribes disclosure requirements for financial instruments classified under NAS 32, including risk disclosures and fair value hierarchy",
		},
		{
			slug: "nas-33",
			nfrsNumber: "NAS 33",
			title: "Earnings Per Share",
			reason: "The equity/liability classification under NAS 32 directly impacts EPS calculation — liability-classified preference dividends reduce numerator, while equity-classified instruments may be dilutive",
		},
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "NAS 1 governs general presentation requirements while NAS 32 provides specific presentation rules for financial instruments including offsetting criteria",
		},
	],
};
