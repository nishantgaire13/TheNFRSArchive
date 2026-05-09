import type { StandardPageData } from "./types";

export const nas10: StandardPageData = {
	slug: "nas-10",
	nfrsNumber: "NAS 10",
	ifrsEquivalent: "IAS 10",
	title: "Events After the Reporting Period",
	topic: "presentation",
	effectiveDate: "2018-07-16",
	ifrsEffectiveDate: "2005-01-01",
	status: "aligned",
	heroMotif: "calendar",
	lastReviewed: "2026-04-20",
	examRelevance: ["ACCA SBR","ACCA AA","CA Nepal Inter","CA Nepal Final"],

	differences: {
		alignmentStatus: "Fully Aligned",
		keyDifferencesCount: 6,
		carveOutCount: 0,
		lastReviewed: "2026-04-20",
		rows: [
			{
				topic: "Adjusting vs Non-adjusting Events",
				ifrs: "Adjusting events provide evidence of conditions existing at the reporting date. Non-adjusting events indicate conditions arising after the reporting date (IAS 10.3)",
				nfrs: "Same definitions. Nepal-specific challenge: the reporting date is Ashad-end (mid-July) and AGMs typically occur in Kartik–Mangsir (Oct–Dec). The 3–5 month gap creates a longer window for post-reporting events compared to December year-end jurisdictions",
				nepalImpact: "The extended gap between Ashad-end and AGM approval date means more events may require assessment. Natural disasters during monsoon season (Shrawan–Bhadra, Aug–Sep) fall in the post-reporting window and are frequently non-adjusting",
				significance: "high",
			},
			{
				topic: "Dividend Declaration After Reporting Date",
				ifrs: "Dividends declared after the reporting date are non-adjusting — not recognised as a liability at the reporting date but disclosed (IAS 10.12–13)",
				nfrs: "Same treatment. In Nepal, dividends must be approved at the AGM per Companies Act 2063. Since AGMs occur after Ashad-end, dividends proposed by the board before year-end but approved at AGM are non-adjusting",
				nepalImpact: "Many Nepali entities incorrectly recognise proposed dividends as a liability at Ashad-end. NRB directives require BFIs to appropriate profits to reserves before dividend distribution, adding a regulatory step before declaration. Dividend proposals that have not received AGM approval are not obligations at the reporting date",
				significance: "high",
			},
			{
				topic: "Natural Disaster Events — Earthquake",
				ifrs: "A natural disaster occurring after the reporting date is a non-adjusting event — disclose the nature and estimated financial effect if material (IAS 10.21–22)",
				nfrs: "Same treatment. Nepal's 2015 earthquake (Baisakh 2072) and subsequent aftershocks provided a real-world application. Entities with Ashad 2072 year-ends had to assess whether earthquake damage was adjusting (damage to assets existing at Chaitra 2071 year-end) or non-adjusting",
				nepalImpact: "Insurance claims, government reconstruction grants, and asset impairments related to earthquake damage required careful dating. BFIs had to assess whether borrower creditworthiness deterioration was a condition existing at the reporting date or arose from the earthquake",
				significance: "high",
			},
			{
				topic: "Going Concern Assessment After Reporting Date",
				ifrs: "If management determines after the reporting date that the entity is no longer a going concern, financial statements must not be prepared on a going concern basis (IAS 10.14–16)",
				nfrs: "Same requirement. Relevant in Nepal for entities affected by prolonged political disruptions (bandhs), border blockades, or sudden regulatory changes (e.g., NRB placing a BFI under corrective action or initiating merger proceedings after year-end)",
				nepalImpact: "NRB has authority to revoke BFI licences or force mergers after the reporting date. If such action occurs before financial statement authorisation, management must reassess going concern. Several development banks faced this scenario during NRB-mandated mergers in 2075–2077 BS",
				significance: "medium",
			},
			{
				topic: "Date of Authorisation for Issue",
				ifrs: "Entity must disclose the date financial statements were authorised for issue and who gave authorisation. Events after this date are not reflected (IAS 10.17)",
				nfrs: "Same disclosure. In Nepal, the board authorises financial statements for issue, but the AGM approves them. NAS 10 requires disclosure of the board authorisation date — not the AGM date. Events between board authorisation and AGM are not adjusted",
				nepalImpact: "Some entities confuse the board authorisation date with the AGM date, leading to an incorrectly extended assessment window. Companies Act 2063 requires board approval before auditor sign-off, creating a clear authorisation date",
				significance: "medium",
			},
			{
				topic: "Court Cases Settled After Reporting Date",
				ifrs: "Settlement of a court case after the reporting date that confirms an obligation existed at the reporting date is an adjusting event (IAS 10.9(b))",
				nfrs: "Same treatment. Nepal's slow judicial system means many cases remain pending for years. A Supreme Court or appellate decision after Ashad-end confirming a liability that was contingent at year-end is adjusting",
				nepalImpact: "Tax disputes with IRD often take years to resolve through the Revenue Tribunal. A tribunal decision after Ashad-end confirming a tax liability is an adjusting event requiring provision recognition. Entities sometimes fail to adjust because the tribunal decision is received months after year-end",
				significance: "medium",
			},
		],
	},

	regulatoryOverlay: {
		nrb: "NRB requires BFIs to submit audited financial statements within Kartik (4 months of Ashad-end). Events occurring between Ashad-end and Kartik-end must be assessed under NAS 10. NRB-directed mergers, corrective actions, or licence revocations during this period may trigger going concern reassessment. NRB also requires BFIs to report any material adverse event (fraud, significant loan default, system failure) immediately — these may constitute post-reporting events requiring disclosure.",
		sebon: "SEBON requires listed entities to file annual reports within 6 months of Ashad-end. Material events after the reporting date must be disclosed through NEPSE's company disclosure platform (Mero Share). SEBON's listing rules require immediate public disclosure of price-sensitive information — including post-reporting events such as major contracts, litigation outcomes, or natural disaster damage. Failure to disclose is a listing violation.",
		ird: "IRD filing deadline is Poush-end (approximately 6 months after Ashad-end). Tax assessments or appeals decided by the Revenue Tribunal after the reporting date may constitute adjusting events if they confirm conditions existing at the reporting date. Entities must assess whether IRD reassessments relate to pre-existing or post-existing conditions. Self-assessment amendments filed after the reporting date do not change the financial statements unless they correct a pre-existing error.",
	},

	timeline: [
		{ date: "Jan 2005", label: "IAS 10 (Revised) Effective", description: "IAS 10 revised in 2003 became effective globally" },
		{ date: "Apr 2015", label: "Nepal Earthquake", description: "Major earthquake tested NAS 10 application for entities with Chaitra 2071 and Ashad 2072 year-ends", highlight: true },
		{ date: "Jul 2018", label: "NAS 10 Effective", description: "NAS 10 adopted as part of full NFRS suite (1 Shrawan 2075 BS)" },
		{ date: "2026", label: "Current", description: "Fully aligned with IAS 10, no carve-outs" },
	],

	steps: [
		{
			number: 1,
			name: "Identify the Reporting Date and Authorisation Date",
			coreQuestion: "What is the window within which post-reporting events must be assessed?",
			nepalExample: "Himalayan Bank's reporting date is Ashad-end 2082 (mid-July 2025). The board authorises financial statements for issue on Ashwin 15, 2082 (early October 2025). All events between mid-July and early October must be assessed. Events after Ashwin 15 — even if before the AGM in Mangsir — are not considered.",
			paraRef: "IAS 10.3, 10.17",
		},
		{
			number: 2,
			name: "Classify Each Event as Adjusting or Non-adjusting",
			coreQuestion: "Did the condition exist at the reporting date, or did it arise after?",
			nepalExample: "On Bhadra 10, 2082 (late August), a major borrower of Nabil Bank defaults on a NPR 15 crore loan. Assessment: the borrower had been classified as 'watchlist' at Ashad-end with deteriorating financials. The default confirms a condition existing at the reporting date — this is an adjusting event. Nabil must recognise increased impairment in the Ashad 2082 financial statements.",
			paraRef: "IAS 10.8–9",
		},
		{
			number: 3,
			name: "Adjust Financial Statements for Adjusting Events",
			coreQuestion: "Have the amounts in the financial statements been updated to reflect adjusting events?",
			nepalExample: "Pashupati Cement had a pending tax appeal at Ashad-end 2082 with a contingent liability of NPR 2,50 lakh disclosed. In Bhadra 2082, the Revenue Tribunal rules against Pashupati, confirming a tax liability of NPR 2,30 lakh. Adjusting event: reclassify from contingent liability to provision, recognise NPR 2,30 lakh as a tax expense and payable in the Ashad 2082 statements.",
			paraRef: "IAS 10.8",
		},
		{
			number: 4,
			name: "Disclose Non-adjusting Events",
			coreQuestion: "Is the event material enough that non-disclosure could influence user decisions?",
			nepalExample: "On Ashwin 5, 2082, a flood damages Nepal Telecom's Birgunj exchange facility — estimated loss NPR 8 crore. This arose after the reporting date and the flood condition did not exist at Ashad-end. Non-adjusting: do not change the financial statements but disclose the nature of the event and the estimated financial effect of NPR 8 crore in the notes.",
			paraRef: "IAS 10.21–22",
		},
		{
			number: 5,
			name: "Reassess Going Concern",
			coreQuestion: "Do post-reporting events indicate that going concern basis is no longer appropriate?",
			nepalExample: "After Ashad-end 2082, NRB places a development bank under corrective action and initiates merger proceedings with a larger commercial bank. Management must reassess going concern: if the merger will dissolve the entity, going concern basis is inappropriate and assets must be measured at realisable values. Disclose the NRB action and its impact.",
			paraRef: "IAS 10.14–16",
		},
	],

	inlineExamples: {
		earthquakeScenario: {
			title: "Sagarmatha Hotels — Earthquake After Reporting Date",
			context: "Sagarmatha Hotels Ltd has a reporting date of Ashad-end 2082 (mid-July 2025). On Bhadra 2, 2082 (mid-August 2025), a major earthquake measuring 6.8 on the Richter scale strikes the Gorkha region, severely damaging Sagarmatha's Pokhara hotel. Estimated damage: building structural damage NPR 12 crore, furniture and equipment destroyed NPR 3 crore, business interruption losses estimated at NPR 5 crore over 6 months. The hotel was fully operational at Ashad-end. Insurance covers NPR 8 crore of property damage. The board authorises financial statements on Kartik 5, 2082.",
			steps: [
				"Step 1 — Classify the event: The earthquake occurred on Bhadra 2, 2082 — after the reporting date of Ashad-end 2082. The hotel was operational at the reporting date with no pre-existing structural issues. This is a non-adjusting event (IAS 10.21).",
				"Step 2 — Do NOT adjust Ashad 2082 financial statements: The building remains at its carrying amount as at Ashad-end (no impairment). PPE is not written down. No provision for repair costs is recognised at the reporting date.",
				"Step 3 — Assess going concern: Total damage NPR 15 crore, insurance recovery NPR 8 crore, net exposure NPR 7 crore plus NPR 5 crore business interruption. Sagarmatha has net assets of NPR 35 crore and credit facilities of NPR 10 crore. Going concern basis remains appropriate, but disclose uncertainty.",
				"Step 4 — Disclose: Nature of the event (earthquake on Bhadra 2, damage to Pokhara property), estimated financial effect (NPR 15 crore damage, NPR 8 crore insured, NPR 5 crore business interruption), and management's response (insurance claim filed, reconstruction plan initiated).",
				"Step 5 — The Ashad 2083 financial statements will reflect the actual impact: impairment of damaged assets, insurance receivable, repair costs, and reduced revenue.",
			],
			journalEntries: [
				"At Ashad-end 2082: No journal entries. The earthquake had not occurred. Disclosure only.",
				"In Shrawan 2082 (next period, when earthquake occurred): Dr Earthquake Loss — Building NPR 12,00,00,000 / Cr Building (PPE) NPR 12,00,00,000",
				"Insurance claim recognition: Dr Insurance Receivable NPR 8,00,00,000 / Cr Earthquake Loss Recovery NPR 8,00,00,000",
				"Equipment write-off: Dr Earthquake Loss — Equipment NPR 3,00,00,000 / Cr Equipment (PPE) NPR 3,00,00,000",
			],
			difficulty: "medium",
		},
		dividendDeclaration: {
			title: "Nabil Bank — Dividend Proposed After Reporting Date",
			context: "Nabil Bank Ltd's reporting date is Ashad-end 2082. The board meeting on Bhadra 25, 2082 proposes a cash dividend of 30% (NPR 30 per share) and a bonus share of 15%. Total issued shares: 1,00,00,000 shares of NPR 100 par value. Total proposed cash dividend: NPR 3 crore. Bonus shares: 15,00,000 new shares. The AGM is scheduled for Kartik 20, 2082. NRB requires minimum capital adequacy and reserve appropriation before dividend distribution. The board authorises financial statements on Ashwin 10, 2082.",
			steps: [
				"Step 1 — Classify the dividend proposal: The board proposed the dividend on Bhadra 25, 2082 — after the reporting date of Ashad-end 2082. Under NAS 10.12, dividends declared after the reporting date are non-adjusting events. No liability is recognised at Ashad-end.",
				"Step 2 — Check legal obligation at reporting date: Under Companies Act 2063, dividends require AGM approval. At Ashad-end 2082, no obligation existed — neither the board had proposed nor the AGM had approved. Therefore, no liability or provision for dividend.",
				"Step 3 — Disclosure: Disclose in notes to the Ashad 2082 financial statements: 'Subsequent to the reporting date, the board has proposed a cash dividend of NPR 30 per share (total NPR 3,00,00,000) and a 15% bonus share issue (15,00,000 shares). The dividend is subject to AGM approval and NRB clearance.'",
				"Step 4 — NRB regulatory check: Nabil must confirm that post-dividend capital adequacy ratio remains above the NRB minimum (currently 11% for commercial banks). NRB may block the dividend if CAR falls below the threshold.",
				"Step 5 — Record in next period: Cash dividend recognised as a liability only when approved at AGM on Kartik 20, 2082. Bonus shares are a non-cash capitalisation of reserves, disclosed as a non-cash transaction.",
			],
			journalEntries: [
				"At Ashad-end 2082: No journal entry for proposed dividend. Disclosure only in notes.",
				"At AGM date (Kartik 20, 2082) — Cash dividend approved: Dr Retained Earnings NPR 3,00,00,000 / Cr Dividend Payable NPR 3,00,00,000",
				"TDS on dividend payment (5%): Dr Dividend Payable NPR 3,00,00,000 / Cr Bank NPR 2,85,00,000 / Cr TDS Payable to IRD NPR 15,00,000",
				"Bonus share issue: Dr Retained Earnings NPR 15,00,00,000 / Cr Share Capital NPR 15,00,00,000 (non-cash — excluded from cash flow statement)",
			],
			difficulty: "pro",
		},
	},

	examTips: {
		acca: [
			{ source: "Recurring Pattern", tip: "The adjusting vs non-adjusting classification is tested in almost every SBR exam. The key date is the reporting date — not the board meeting date or AGM date. Ask: did the condition exist at the reporting date? If yes, it is adjusting regardless of when the evidence was obtained." },
			{ source: "Dec 2024 Examiner Report", tip: "Candidates incorrectly recognise proposed dividends as liabilities at the reporting date. Dividends are recognised as liabilities only when a legal or constructive obligation exists — in Nepal, this is the AGM approval date, not the board proposal date." },
			{ source: "Exam Technique", tip: "For each post-reporting event in a question, state three things: (1) classification (adjusting/non-adjusting), (2) the accounting treatment (adjust amounts or disclose only), and (3) the specific paragraph reference. This structured approach scores maximum marks." },
			{ source: "Recurring Pattern", tip: "Going concern reassessment after the reporting date is a high-value topic. If post-reporting events indicate the entity will cease operations, you must abandon going concern basis entirely — this is not merely a disclosure issue but changes the measurement basis for all assets and liabilities." },
			{ source: "Nepal-specific", tip: "Nepal's fiscal year (Ashad-end, mid-July) means the monsoon season falls immediately after the reporting date. Flood and landslide damage in Shrawan–Bhadra are classic non-adjusting events because the damage arose after the reporting date. But if the asset was already impaired at Ashad-end, the flood merely confirms a pre-existing condition." },
			{ source: "Exam Technique", tip: "Always identify the authorisation date in the question. Events after authorisation for issue are beyond the NAS 10 window — even if the AGM has not occurred. If the question does not state the authorisation date, assume it is the date the board approves the financial statements." },
		],
		ican: null,
	},

	pitfalls: [
		{
			title: "Proposed dividends recognised as liabilities at reporting date",
			description: "Board-proposed dividends that have not yet received AGM approval are frequently recognised as current liabilities at the reporting date. Under NAS 10.12, dividends declared (i.e., approved by shareholders) after the reporting date do not create an obligation at the reporting date. The board proposal alone does not create a present obligation under the Companies Act 2063.",
			sector: "Banking",
		},
		{
			title: "Non-adjusting events not disclosed when material",
			description: "Entities fail to disclose material non-adjusting events in the notes, particularly natural disaster damage, major contract losses, or regulatory actions. NAS 10.21 requires disclosure of the nature and estimated financial effect of material non-adjusting events. Omitting this disclosure leaves financial statement users without critical post-reporting information.",
			sector: "Listed Companies",
		},
		{
			title: "Authorisation date confused with AGM date",
			description: "Some entities treat the AGM date as the cut-off for NAS 10 assessment, extending the post-reporting event window by 2–3 months beyond the board authorisation date. NAS 10.17 is clear: the relevant date is when financial statements are authorised for issue (board approval), not when they are approved by shareholders (AGM).",
			sector: "Manufacturing",
		},
		{
			title: "Earthquake damage treated as adjusting when conditions arose post-reporting",
			description: "After the 2015 Nepal earthquake, some entities with Ashad year-ends adjusted their pre-earthquake financial statements to reflect earthquake damage. If the earthquake occurred after the reporting date and the asset had no pre-existing impairment, the damage is non-adjusting. Only if the asset was already impaired or the earthquake provides evidence of pre-existing structural weakness is it adjusting.",
			sector: "Hospitality & Aviation",
		},
		{
			title: "Court settlements affecting pre-existing disputes not recognised",
			description: "When a court case pending at the reporting date is settled after the reporting date but before authorisation, entities sometimes treat the settlement as non-adjusting and merely update the contingent liability disclosure. If the settlement confirms an obligation that existed at the reporting date, it is adjusting — the contingent liability should be reclassified as a provision.",
			sector: "Hydropower",
		},
	],

	relatedStandards: [
		{
			slug: "nas-1",
			nfrsNumber: "NAS 1",
			title: "Presentation of Financial Statements",
			reason: "Going concern assessment under NAS 1 must consider post-reporting events identified under NAS 10",
		},
		{
			slug: "nas-37",
			nfrsNumber: "NAS 37",
			title: "Provisions, Contingent Liabilities and Contingent Assets",
			reason: "Post-reporting settlement of court cases may require reclassification from contingent liability (NAS 37) to provision",
		},
		{
			slug: "nas-8",
			nfrsNumber: "NAS 8",
			title: "Accounting Policies, Changes in Accounting Estimates and Errors",
			reason: "Discovery of prior period errors after the reporting date is an adjusting event requiring NAS 8 restatement",
		},
		{
			slug: "nas-7",
			nfrsNumber: "NAS 7",
			title: "Statement of Cash Flows",
			reason: "Non-adjusting events like dividends declared after reporting date affect cash flow classification in the subsequent period",
		},
	],
};
