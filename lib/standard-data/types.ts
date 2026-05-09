export interface DifferenceRow {
	topic: string;
	ifrs: string;
	nfrs: string;
	nepalImpact: string;
	significance: "high" | "medium" | "low";
}

export interface TimelineEvent {
	date: string;
	label: string;
	description?: string;
	highlight?: boolean;
}

export interface StepData {
	number: number;
	name: string;
	coreQuestion: string;
	nepalExample: string;
	paraRef: string;
}

export interface ExamTip {
	source: string;
	tip: string;
}

export interface PitfallData {
	title: string;
	description: string;
	sector: string;
}

export interface RelatedStandardLink {
	slug: string;
	nfrsNumber: string;
	title: string;
	reason: string;
}

export interface RegulatoryOverlay {
	nrb?: string;
	sebon?: string;
	ird?: string;
}

export interface DifferencesData {
	alignmentStatus: string;
	keyDifferencesCount: number;
	carveOutCount: number;
	lastReviewed: string;
	rows: DifferenceRow[];
}

export interface ExampleData {
	title: string;
	context: string;
	steps: string[];
	journalEntries?: string[];
	difficulty: "beginner" | "medium" | "pro";
}

export interface StandardPageData {
	slug: string;
	nfrsNumber: string;
	ifrsEquivalent: string;
	title: string;
	topic: string;
	effectiveDate: string;
	ifrsEffectiveDate: string;
	status: "aligned" | "carve-out" | "deferred" | "not-adopted";
	heroMotif: string;
	lastReviewed: string;
	examRelevance: string[];
	differences: DifferencesData;
	regulatoryOverlay: RegulatoryOverlay;
	timeline: TimelineEvent[];
	steps?: StepData[];
	inlineExamples?: Record<string, ExampleData>;
	examTips: {
		acca: ExamTip[];
		ican: ExamTip[] | null;
	};
	pitfalls: PitfallData[];
	relatedStandards: RelatedStandardLink[];
}
