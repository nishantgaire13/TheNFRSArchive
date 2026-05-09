import type { StandardPageData } from "./types";

export const nas33: StandardPageData = {
	slug: "nas-33",
	nfrsNumber: "NAS 33",
	ifrsEquivalent: "IAS 33",
	title: "Earnings Per Share",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "percent",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA FM","ACCA AFM","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Bonus Shares Impact",
				ifrs: "Bonus issues (stock dividends) treated as if they occurred at the beginning of the earliest period presented — retrospective adjustment of WANOS (IAS 33.28)",
				nfrs: "Same treatment. Bonus shares are extremely common in Nepal — NEPSE investors prefer bonus shares over cash dividends. This creates significant EPS adjustments each year",
				nepalImpact: "BFIs and listed companies regularly issue 20–50% bonus shares. EPS must be retrospectively adjusted for all periods presented, but many entities only adjust the current year, making year-on-year comparison misleading",
				significance: "high",
			},
			{
				topic: "Rights Issue at Below Market Price",
				ifrs: "Rights issue at below market price contains a bonus element. Adjustment factor applied to WANOS for all periods before the rights issue (IAS 33.27)",
				nfrs: "Same treatment. Nepal's frequent rights issues (to meet NRB minimum capital requirements for BFIs) often have a bonus element when issued at par (NPR 100) while market price is higher",
				nepalImpact: "BFIs regularly issue rights shares at par value (NPR 100) when market price is NPR 200–400. The bonus element is significant and must adjust prior-period WANOS. Many entities miss this adjustment",
				significance: "high",
			},
			{
				topic: "Dilutive Instruments",
				ifrs: "Potential ordinary shares (convertible bonds, options, warrants) included in diluted EPS calculation if dilutive (IAS 33.41–44)",
				nfrs: "Same framework. Nepal has limited dilutive instruments — some BFIs have issued convertible debentures (listed on NEPSE). Employee stock options are rare but emerging",
				nepalImpact: "Diluted EPS is often identical to basic EPS because few Nepali entities have dilutive instruments. When convertible debentures exist, entities sometimes fail to compute diluted EPS properly",
				significance: "medium",
			},
			{
				topic: "EPS as Market Metric",
				ifrs: "EPS is a mandatory disclosure for listed entities. Comparability is the objective (IAS 33.1)",
				nfrs: "Same requirement. EPS is the single most watched metric on NEPSE. Retail investors make buy/sell decisions primarily on EPS and P/E ratio",
				nepalImpact: "EPS significance in Nepal far exceeds its role in developed markets. Errors in EPS calculation directly affect NEPSE share prices and investor decisions. SEBON scrutinises EPS disclosures closely",
				significance: "medium",
			},
			{
				topic: "Interim EPS",
				ifrs: "Interim EPS uses year-to-date earnings and WANOS for the interim period (IAS 33.A14)",
				nfrs: "Same approach. SEBON requires quarterly EPS disclosure. Many entities annualise quarterly EPS (multiply by 4), which is misleading for seasonal businesses",
				nepalImpact: "Tourism and agriculture sectors have highly seasonal earnings. Quarterly EPS for Q1 (Shrawan–Ashoj, monsoon) is not comparable to Q2 (Kartik–Poush, tourist season). Annualising misrepresents annual performance",
				significance: "low",
			},
			{
				topic: "Presentation on Face of P&L",
				ifrs: "Basic and diluted EPS presented on the face of the statement of profit or loss for both continuing and discontinued operations (IAS 33.66–69)",
				nfrs: "Same requirement. Continuing operations EPS is mandatory on the face. Discontinued operations EPS can be in notes or on the face",
				nepalImpact: "Many entities present EPS only in notes rather than on the face of P&L. Some entities calculate EPS on total comprehensive income rather than profit attributable to ordinary shareholders",
				significance: "low",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB monitors BFI EPS as part of financial health assessment. Minimum EPS thresholds are not prescribed, but consistently declining EPS triggers NRB supervisory attention. NRB requires BFIs to disclose annualised EPS in quarterly reports and basic EPS in published results.",
		sebon: "SEBON requires listed entities to present both basic and diluted EPS on the face of P&L. Quarterly EPS must be disclosed within 30 days of quarter-end. SEBON has the authority to challenge EPS calculations that appear inconsistent with NFRS and may request restatement. EPS is a key metric in SEBON's listing and delisting criteria.",
		ird: "EPS has no direct tax implication. However, the earnings (numerator) must be based on profit calculated in accordance with NFRS before tax adjustments. Dividend decisions based on EPS affect dividend distribution tax obligations. Bonus shares are not taxable to recipients at issuance but affect per-share tax basis.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 33 Revised Effective", description: "Revised standard with diluted EPS requirements" },
		{ date: "Jul 2018", label: "NAS 33 Effective", description: "Nepal adoption (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Determine Earnings (Numerator)",
			coreQuestion: "What profit figure is used for EPS?",
			nepalExample: "Nabil Bank reports profit after tax of NPR 5,00,00,00,000. Preference dividends: nil (no preference shares). Profit attributable to ordinary shareholders = NPR 5,00,00,00,000. For diluted EPS, add back interest on convertible debentures (if any) after tax.",
			paraRef: "IAS 33.12–18",
		},
		{
			number: 2,
			name: "Calculate Weighted Average Number of Ordinary Shares (WANOS)",
			coreQuestion: "What is the time-weighted number of shares outstanding?",
			nepalExample: "Nabil Bank: opening shares 1,00,00,000. On 1 Poush, issued 20,00,000 rights shares. WANOS = (1,00,00,000 × 6/12) + (1,20,00,000 × 6/12) = 50,00,000 + 60,00,000 = 1,10,00,000. If a 30% bonus was issued in Jestha, retrospectively adjust ALL periods by multiplying by 1.30.",
			paraRef: "IAS 33.19–26",
		},
		{
			number: 3,
			name: "Adjust for Bonus Shares",
			coreQuestion: "Were bonus shares (stock dividends) issued during or after the period?",
			nepalExample: "Nabil Bank issued 30% bonus shares in Jestha 2082. WANOS must be adjusted as if the bonus occurred at the start of the earliest period. Adjusted WANOS: 1,10,00,000 × 1.30 = 1,43,00,000. Prior year comparatives must also be adjusted by 1.30.",
			paraRef: "IAS 33.28",
		},
		{
			number: 4,
			name: "Compute Basic EPS",
			coreQuestion: "Earnings ÷ WANOS?",
			nepalExample: "Basic EPS = NPR 5,00,00,00,000 ÷ 1,43,00,000 = NPR 349.65 per share. Prior year restated: NPR 4,20,00,00,000 ÷ (90,00,000 × 1.30) = NPR 4,20,00,00,000 ÷ 1,17,00,000 = NPR 358.97 per share.",
			paraRef: "IAS 33.10",
		},
		{
			number: 5,
			name: "Compute Diluted EPS",
			coreQuestion: "Are there any potentially dilutive ordinary shares?",
			nepalExample: "Nabil Bank has NPR 1 arba convertible debentures at 8% convertible into 5,00,000 shares. Adjusted earnings: NPR 500 cr + (NPR 8 cr interest × 0.70 after-tax) = NPR 505.6 cr. Adjusted WANOS: 1,43,00,000 + 5,00,000 = 1,48,00,000. Diluted EPS: NPR 505.6 cr ÷ 1,48,00,000 = NPR 341.62. Since lower than basic (NPR 349.65), the debentures are dilutive — report diluted EPS.",
			paraRef: "IAS 33.41–44",
		},
	],

	inlineExamples: {
		bonusShareAdjustment: {
			title: "NIC Asia Bank — Bonus Share EPS Adjustment",
			context: "NIC Asia Bank Ltd had 2,00,00,000 shares outstanding at the start of Shrawan 2081. It issued 25% bonus shares on 1 Magh 2082. Profit for 2081/82: NPR 3,50,00,00,000. Prior year profit: NPR 3,00,00,00,000 with 2,00,00,000 shares outstanding throughout.",
			steps: [
				"Step 1 — Bonus shares: 2,00,00,000 × 25% = 50,00,000 new shares. Total after bonus: 2,50,00,000.",
				"Step 2 — Bonus adjustment is retroactive. WANOS for current year: 2,00,00,000 × 1.25 = 2,50,00,000 for the ENTIRE year (bonus treated as if always outstanding).",
				"Step 3 — Current year basic EPS: NPR 3,50,00,00,000 ÷ 2,50,00,000 = NPR 140.00.",
				"Step 4 — Prior year must be restated: NPR 3,00,00,00,000 ÷ (2,00,00,000 × 1.25) = NPR 3,00,00,00,000 ÷ 2,50,00,000 = NPR 120.00 (was originally reported as NPR 150.00).",
				"Step 5 — Presentation: show NPR 140.00 current year and NPR 120.00 comparative. The prior year EPS of NPR 150.00 is replaced — not shown alongside.",
			],
			journalEntries: [
				"No journal entry for EPS calculation — it is a disclosure. Bonus share issuance entry:",
				"Bonus issue: Dr Retained Earnings NPR 50,00,00,000 / Cr Share Capital NPR 50,00,00,000 (at par NPR 100 × 50,00,000 shares)",
			],
			difficulty: "medium",
		},
		rightsIssueBonus: {
			title: "Global IME Bank — Rights Issue with Bonus Element",
			context: "Global IME Bank has 5,00,00,000 shares at 1 Shrawan 2082. Market price: NPR 350. On 1 Poush 2082, it issues 1:5 rights at NPR 100 (par value). Profit: NPR 4,00,00,00,000.",
			steps: [
				"Step 1 — Rights: 5,00,00,000 ÷ 5 = 1,00,00,000 new shares at NPR 100 (vs market NPR 350).",
				"Step 2 — Theoretical ex-rights price (TERP): (5,00,00,000 × NPR 350 + 1,00,00,000 × NPR 100) ÷ 6,00,00,000 = (NPR 1,750 cr + NPR 100 cr) ÷ 6,00,00,000 = NPR 308.33.",
				"Step 3 — Adjustment factor: NPR 350 ÷ NPR 308.33 = 1.1351.",
				"Step 4 — WANOS: Pre-rights (Shrawan–Mangsir, 5 months): 5,00,00,000 × 1.1351 × 5/12 = 2,36,47,917. Post-rights (Poush–Ashad, 7 months): 6,00,00,000 × 7/12 = 3,50,00,000. Total WANOS = 5,86,47,917.",
				"Step 5 — Basic EPS: NPR 4,00,00,00,000 ÷ 5,86,47,917 = NPR 68.20. Prior year comparative also adjusted by factor 1.1351.",
			],
			journalEntries: [
				"Rights issue: Dr Cash NPR 1,00,00,00,000 / Cr Share Capital NPR 1,00,00,00,000 (1,00,00,000 shares × NPR 100)",
				"EPS calculation is disclosure only — no separate journal entry required.",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "Bonus shares adjust WANOS retrospectively as if they existed at the start of the earliest period. No weighting needed — multiply all pre-bonus shares by the bonus factor. Prior year comparatives must also be restated." },
			{ source: "Dec 2024 Examiner Report", tip: "Rights issue at below market price has TWO components: (1) the bonus element (adjustment factor = cum-rights price ÷ TERP) applied to pre-rights periods, and (2) the new shares weighted from the date of issue. Candidates frequently miss the adjustment factor." },
			{ source: "Exam Technique", tip: "Diluted EPS: include potentially dilutive instruments ONLY if they reduce EPS. If including convertible debentures increases EPS (anti-dilutive), exclude them. Always test: does adding back interest (after tax) and adding shares to denominator reduce EPS?" },
			{ source: "Recurring Pattern", tip: "Numerator for basic EPS = profit attributable to ordinary equity holders of the parent. Deduct preference dividends (whether declared or not for cumulative preference shares). Do NOT use total comprehensive income — use profit from continuing operations." },
			{ source: "Nepal-specific", tip: "Nepal bonus shares: very common (20–50% annual bonuses at major BFIs). Know that bonus share adjustment is ALWAYS retrospective and affects ALL prior periods displayed. NEPSE investors watch EPS closely — errors directly affect share prices." },
			{ source: "Exam Technique", tip: "Ordering for diluted EPS with multiple dilutive instruments: rank by dilutive effect (increase in EPS per incremental share) from most dilutive to least. Include in sequence until EPS stops decreasing. Instruments that are anti-dilutive at any point are excluded from that point forward." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Bonus share adjustment not applied to prior year comparatives",
			description: "Entities adjust current year WANOS for bonus shares but fail to restate prior year EPS. NAS 33 requires retrospective adjustment of all periods presented. Without this, year-on-year EPS comparison is meaningless — it appears EPS dropped when it may have grown.",
			sector: "Banking",
		},
		{
			title: "Rights issue bonus element ignored",
			description: "When rights shares are issued below market price, entities simply time-weight the new shares without applying the adjustment factor (cum-rights price ÷ TERP) to the pre-rights period. This understates the denominator and overstates EPS for periods before the rights issue.",
			sector: "Banking",
		},
		{
			title: "EPS calculated on total comprehensive income",
			description: "Entities use total comprehensive income (including OCI items like revaluation gains and actuarial movements) as the numerator instead of profit attributable to ordinary shareholders. EPS must be based on profit from continuing operations.",
			sector: "Listed Companies",
		},
		{
			title: "Diluted EPS not computed when convertible instruments exist",
			description: "Entities with convertible debentures or employee stock options report only basic EPS, omitting the required diluted EPS disclosure. Both basic and diluted EPS must be presented on the face of the P&L statement.",
			sector: "Banking",
		},
		{
			title: "Quarterly EPS annualised for seasonal businesses",
			description: "Listed companies with seasonal earnings (tourism, agriculture) report quarterly EPS and some analysts annualise it (multiply by 4). This misrepresents expected annual performance. NAS 33 requires year-to-date EPS for interim periods, not annualised.",
			sector: "Hospitality",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "Basic and diluted EPS must be presented on the face of the statement of profit or loss, as required by NAS 1's presentation framework",
		},
		{
			slug: "nas-32",
			nfrsNumber: "NAS 32",
			title: "Financial Instruments: Presentation",
			reason: "NAS 32 determines whether an instrument is equity or liability — this classification affects both the numerator (preference dividends) and denominator (potential ordinary shares) of EPS",
		},
		{
			slug: "nas-34",
			nfrsNumber: "NAS 34",
			title: "Interim Financial Reporting",
			reason: "Interim EPS follows NAS 33 principles using year-to-date earnings and WANOS for the interim period",
		},
		{
			slug: "nfrs-2",
			nfrsNumber: "NFRS 2",
			title: "Share-based Payment",
			reason: "Employee stock options under NFRS 2 are potentially dilutive instruments included in diluted EPS calculation",
		},
	],
};
