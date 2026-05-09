const iconPaths: Record<string, React.ReactNode> = {
	receipt: (
		<>
			<rect x="7" y="3" width="10" height="14" rx="1.5" fill="currentColor" opacity="0.85" />
			<rect x="7" y="17" width="10" height="2" rx="0.5" fill="currentColor" opacity="0.5" />
			<line x1="9.5" y1="7" x2="14.5" y2="7" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="9.5" y1="9.5" x2="14.5" y2="9.5" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="9.5" y1="12" x2="13" y2="12" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
		</>
	),
	key: (
		<>
			<circle cx="10" cy="8.5" r="4" fill="currentColor" opacity="0.85" />
			<circle cx="10" cy="8.5" r="1.8" fill="var(--site-bg-elevated)" />
			<rect x="9" y="12" width="2" height="7" rx="0.5" fill="currentColor" opacity="0.85" />
			<rect x="11" y="15" width="3" height="1.5" rx="0.5" fill="currentColor" opacity="0.7" />
			<rect x="11" y="17.5" width="2" height="1.5" rx="0.5" fill="currentColor" opacity="0.6" />
		</>
	),
	scale: (
		<>
			<circle cx="12" cy="5" r="2.5" fill="currentColor" opacity="0.85" />
			<rect x="11.2" y="7" width="1.6" height="10" rx="0.5" fill="currentColor" opacity="0.7" />
			<line x1="5" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			<path d="M5,9 L3,14 Q5.5,16.5 8,14 L6,9" fill="currentColor" opacity="0.6" />
			<path d="M18,9 L16,14 Q18.5,16.5 21,14 L19,9" fill="currentColor" opacity="0.6" />
			<rect x="8" y="17" width="8" height="2" rx="1" fill="currentColor" opacity="0.5" />
		</>
	),
	shield: (
		<>
			<path
				d="M12,3 L4.5,7 L4.5,12 Q4.5,17 12,21 Q19.5,17 19.5,12 L19.5,7 Z"
				fill="currentColor"
				opacity="0.85"
			/>
			<polyline
				points="8.5,12 11,14.5 15.5,9.5"
				stroke="var(--site-accent-fg)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</>
	),
	plan: (
		<>
			<rect x="5" y="8" width="14" height="11" rx="1" fill="currentColor" opacity="0.85" />
			<polygon points="12,3 5,8 19,8" fill="currentColor" opacity="0.7" />
			<rect x="8" y="11" width="3" height="4" rx="0.5" fill="var(--site-bg-elevated)" />
			<rect x="13" y="11" width="3" height="4" rx="0.5" fill="var(--site-bg-elevated)" />
			<rect x="10" y="15" width="4" height="4" rx="0.5" fill="var(--site-bg-elevated)" />
		</>
	),
	warehouse: (
		<>
			<rect x="5" y="10" width="7" height="5.5" rx="1" fill="currentColor" opacity="0.85" />
			<rect x="12" y="10" width="7" height="5.5" rx="1" fill="currentColor" opacity="0.7" />
			<rect x="6" y="5" width="7" height="5.5" rx="1" fill="currentColor" opacity="0.75" />
			<rect x="13" y="5" width="7" height="5.5" rx="1" fill="currentColor" opacity="0.6" />
			<rect x="8" y="1" width="7" height="4.5" rx="1" fill="currentColor" opacity="0.65" />
		</>
	),
	coins: (
		<>
			<ellipse cx="10" cy="14" rx="6" ry="3.5" fill="currentColor" opacity="0.55" />
			<ellipse cx="10" cy="12" rx="6" ry="3.5" fill="currentColor" opacity="0.7" />
			<ellipse cx="14" cy="10" rx="6" ry="3.5" fill="currentColor" opacity="0.55" />
			<ellipse cx="14" cy="8" rx="6" ry="3.5" fill="currentColor" opacity="0.85" />
			<text x="12" y="10.5" fontSize="6" fill="var(--site-accent-fg)" textAnchor="middle" fontWeight="700" fontFamily="serif">रु</text>
		</>
	),
	tax: (
		<>
			<rect x="5" y="4" width="14" height="16" rx="2" fill="currentColor" opacity="0.85" />
			<text x="12" y="15.5" fontSize="10" fill="var(--site-accent-fg)" textAnchor="middle" fontWeight="800" fontFamily="sans-serif">%</text>
		</>
	),
	document: (
		<>
			<path d="M7,3 L14,3 L17,6 L17,20 Q17,21 16,21 L8,21 Q7,21 7,20 Z" fill="currentColor" opacity="0.85" />
			<path d="M14,3 L14,6 L17,6" fill="none" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="9.5" y1="10" x2="14.5" y2="10" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="9.5" y1="12.5" x2="14.5" y2="12.5" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="9.5" y1="15" x2="13" y2="15" stroke="var(--site-accent-fg)" strokeWidth="1" />
		</>
	),
	flow: (
		<>
			<path d="M6,5 L6,10 L12,10 L12,14 L18,14 L18,19" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
			<polygon points="18,21 15.5,17 20.5,17" fill="currentColor" opacity="0.85" />
			<circle cx="6" cy="4" r="2" fill="currentColor" opacity="0.7" />
		</>
	),
	compass: (
		<>
			<circle cx="12" cy="12" r="8.5" fill="currentColor" opacity="0.15" />
			<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
			<polygon points="12,5 13.5,11 12,12 10.5,11" fill="currentColor" opacity="0.85" />
			<polygon points="12,19 10.5,13 12,12 13.5,13" fill="currentColor" opacity="0.5" />
			<circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.85" />
		</>
	),
	calendar: (
		<>
			<rect x="4" y="5" width="16" height="15" rx="2" fill="currentColor" opacity="0.85" />
			<rect x="4" y="5" width="16" height="4.5" rx="2" fill="currentColor" opacity="0.95" />
			<rect x="7" y="3" width="1.8" height="4" rx="0.5" fill="currentColor" />
			<rect x="15" y="3" width="1.8" height="4" rx="0.5" fill="currentColor" />
			<rect x="7" y="12" width="3" height="2.5" rx="0.5" fill="var(--site-accent-fg)" opacity="0.7" />
			<rect x="11" y="12" width="3" height="2.5" rx="0.5" fill="var(--site-accent-fg)" opacity="0.5" />
			<rect x="15" y="12" width="3" height="2.5" rx="0.5" fill="var(--site-accent-fg)" opacity="0.3" />
			<rect x="7" y="16" width="3" height="2.5" rx="0.5" fill="var(--site-accent-fg)" opacity="0.3" />
			<rect x="11" y="16" width="3" height="2.5" rx="0.5" fill="var(--site-accent-fg)" opacity="0.5" />
		</>
	),
	people: (
		<>
			<circle cx="9" cy="7" r="3" fill="currentColor" opacity="0.85" />
			<path d="M3,18 Q3,13 9,13 Q15,13 15,18" fill="currentColor" opacity="0.7" />
			<circle cx="16.5" cy="8.5" r="2.5" fill="currentColor" opacity="0.65" />
			<path d="M13,18 Q13,14 16.5,14 Q21,14 21,18" fill="currentColor" opacity="0.5" />
		</>
	),
	grant: (
		<>
			<path d="M5,7 L19,7 L19,18 Q19,19 18,19 L6,19 Q5,19 5,18 Z" fill="currentColor" opacity="0.75" />
			<rect x="5" y="5" width="14" height="3" rx="1" fill="currentColor" opacity="0.9" />
			<rect x="10" y="3" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.85" />
			<text x="12" y="15.5" fontSize="7" fill="var(--site-accent-fg)" textAnchor="middle" fontWeight="700" fontFamily="serif">रु</text>
		</>
	),
	globe: (
		<>
			<circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.2" />
			<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
			<ellipse cx="12" cy="12" rx="4" ry="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
			<line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.5" />
			<line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.5" />
		</>
	),
	interest: (
		<>
			<path d="M5,19 L19,5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
			<circle cx="7.5" cy="7.5" r="3" fill="currentColor" opacity="0.7" />
			<circle cx="7.5" cy="7.5" r="1.2" fill="var(--site-bg-elevated)" />
			<circle cx="16.5" cy="16.5" r="3" fill="currentColor" opacity="0.7" />
			<circle cx="16.5" cy="16.5" r="1.2" fill="var(--site-bg-elevated)" />
		</>
	),
	network: (
		<>
			<circle cx="12" cy="6" r="3" fill="currentColor" opacity="0.85" />
			<circle cx="5.5" cy="17" r="2.5" fill="currentColor" opacity="0.7" />
			<circle cx="18.5" cy="17" r="2.5" fill="currentColor" opacity="0.7" />
			<line x1="12" y1="9" x2="6.5" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
			<line x1="12" y1="9" x2="17.5" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
			<line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
		</>
	),
	building: (
		<>
			<rect x="5" y="6" width="14" height="15" rx="1" fill="currentColor" opacity="0.85" />
			<rect x="7" y="3" width="10" height="4" rx="0.5" fill="currentColor" opacity="0.7" />
			<rect x="8" y="9" width="3" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.6" />
			<rect x="13" y="9" width="3" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.6" />
			<rect x="8" y="14" width="3" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.6" />
			<rect x="13" y="14" width="3" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.6" />
			<rect x="10" y="18" width="4" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.8" />
		</>
	),
	handshake: (
		<>
			<path d="M3,11 L7,8 L11,11 L14,8 L18,11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
			<path d="M7,8 L7,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
			<path d="M18,11 L18,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
			<path d="M9,14 L12,17 L16,14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
		</>
	),
	chart: (
		<>
			<polyline points="3,18 7,12 11,14 15,7 20,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
			<circle cx="7" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
			<circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.7" />
			<circle cx="15" cy="7" r="2" fill="currentColor" opacity="0.85" />
			<circle cx="20" cy="10" r="1.5" fill="currentColor" opacity="0.7" />
		</>
	),
	layers: (
		<>
			<polygon points="12,3 3,8 12,13 21,8" fill="currentColor" opacity="0.85" />
			<polygon points="3,12 12,17 21,12" fill="currentColor" opacity="0.55" stroke="none" />
			<polygon points="3,15.5 12,20.5 21,15.5" fill="currentColor" opacity="0.35" stroke="none" />
		</>
	),
	percent: (
		<>
			<circle cx="8" cy="8" r="3.5" fill="currentColor" opacity="0.85" />
			<circle cx="8" cy="8" r="1.5" fill="var(--site-bg-elevated)" />
			<circle cx="16" cy="16" r="3.5" fill="currentColor" opacity="0.85" />
			<circle cx="16" cy="16" r="1.5" fill="var(--site-bg-elevated)" />
			<line x1="17" y1="5" x2="7" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
		</>
	),
	clock: (
		<>
			<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />
			<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.85" />
			<line x1="12" y1="12" x2="12" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
			<line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
			<circle cx="12" cy="12" r="1.2" fill="currentColor" opacity="0.9" />
		</>
	),
	balance: (
		<>
			<rect x="11" y="4" width="2" height="12" rx="0.5" fill="currentColor" opacity="0.7" />
			<polygon points="12,3 8,6 16,6" fill="currentColor" opacity="0.85" />
			<rect x="6" y="16" width="12" height="2.5" rx="1" fill="currentColor" opacity="0.6" />
			<path d="M4,12 L8,12 L6,8 Z" fill="currentColor" opacity="0.85" />
			<path d="M16,12 L20,12 L18,8 Z" fill="currentColor" opacity="0.85" />
			<line x1="6" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
		</>
	),
	lightbulb: (
		<>
			<path d="M12,3 Q6,3 6,9 Q6,13 9.5,14.5 L9.5,17 L14.5,17 L14.5,14.5 Q18,13 18,9 Q18,3 12,3 Z" fill="currentColor" opacity="0.85" />
			<rect x="9.5" y="17.5" width="5" height="1.5" rx="0.5" fill="currentColor" opacity="0.6" />
			<rect x="10" y="19.5" width="4" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
			<line x1="12" y1="8" x2="12" y2="13" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="9.5" y1="10.5" x2="14.5" y2="10.5" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
		</>
	),
	property: (
		<>
			<rect x="4" y="11" width="16" height="10" rx="1" fill="currentColor" opacity="0.85" />
			<polygon points="12,3 2,11 22,11" fill="currentColor" opacity="0.7" />
			<rect x="10" y="15" width="4" height="6" rx="0.5" fill="var(--site-accent-fg)" opacity="0.8" />
			<rect x="5.5" y="13" width="3" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.5" />
			<rect x="15.5" y="13" width="3" height="3" rx="0.5" fill="var(--site-accent-fg)" opacity="0.5" />
		</>
	),
	leaf: (
		<>
			<path d="M6,20 Q6,10 12,5 Q18,10 18,20" fill="currentColor" opacity="0.75" />
			<path d="M12,5 L12,18" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<path d="M12,10 L8.5,13" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<path d="M12,13 L9,16" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<path d="M12,10 L15.5,13" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<path d="M12,13 L15,16" stroke="var(--site-accent-fg)" strokeWidth="1" />
		</>
	),
	flag: (
		<>
			<rect x="5" y="3" width="2" height="18" rx="0.5" fill="currentColor" opacity="0.85" />
			<path d="M7,4 L19,4 L16,9 L19,14 L7,14 Z" fill="currentColor" opacity="0.75" />
			<line x1="9" y1="7" x2="15" y2="7" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="9" y1="9.5" x2="14" y2="9.5" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="9" y1="12" x2="13" y2="12" stroke="var(--site-accent-fg)" strokeWidth="1" />
		</>
	),
	stock: (
		<>
			<polyline points="3,17 8,12 11,15 15,8 20,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
			<polygon points="20,5 16,6 19,9" fill="currentColor" opacity="0.85" />
			<line x1="3" y1="20" x2="21" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
			<line x1="3" y1="3" x2="3" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
		</>
	),
	merge: (
		<>
			<circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.85" />
			<circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.65" />
			<circle cx="12" cy="18" r="3.5" fill="currentColor" opacity="0.85" />
			<line x1="7.5" y1="8.5" x2="11" y2="15" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
			<line x1="16.5" y1="8.5" x2="13" y2="15" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
		</>
	),
	tag: (
		<>
			<path d="M3,3 L13,3 L21,11 L11,21 L3,13 Z" fill="currentColor" opacity="0.85" />
			<circle cx="8" cy="8" r="2" fill="var(--site-bg-elevated)" />
			<line x1="12" y1="10" x2="15" y2="13" stroke="var(--site-accent-fg)" strokeWidth="1.2" strokeLinecap="round" />
			<line x1="10" y1="13" x2="13" y2="16" stroke="var(--site-accent-fg)" strokeWidth="1.2" strokeLinecap="round" />
		</>
	),
	mountain: (
		<>
			<polygon points="12,3 3,20 21,20" fill="currentColor" opacity="0.85" />
			<polygon points="12,3 9,9 15,9" fill="currentColor" opacity="0.95" />
			<polygon points="17,10 13,20 21,20" fill="currentColor" opacity="0.55" />
			<line x1="3" y1="20" x2="21" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
		</>
	),
	clipboard: (
		<>
			<rect x="5" y="4" width="14" height="17" rx="2" fill="currentColor" opacity="0.85" />
			<rect x="8" y="2" width="8" height="3.5" rx="1" fill="currentColor" opacity="0.95" />
			<line x1="8" y1="10" x2="16" y2="10" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="8" y1="13" x2="16" y2="13" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="8" y1="16" x2="13" y2="16" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
		</>
	),
	pie: (
		<>
			<circle cx="12" cy="12" r="8.5" fill="currentColor" opacity="0.25" />
			<path d="M12,12 L12,3.5 A8.5,8.5 0 0,1 20,8.5 Z" fill="currentColor" opacity="0.85" />
			<path d="M12,12 L20,8.5 A8.5,8.5 0 0,1 19,17 Z" fill="currentColor" opacity="0.65" />
			<path d="M12,12 L19,17 A8.5,8.5 0 0,1 5,17 Z" fill="currentColor" opacity="0.5" />
			<circle cx="12" cy="12" r="2" fill="var(--site-bg-elevated)" />
		</>
	),
	hierarchy: (
		<>
			<rect x="9" y="2" width="6" height="5" rx="1" fill="currentColor" opacity="0.85" />
			<rect x="2" y="15" width="6" height="5" rx="1" fill="currentColor" opacity="0.7" />
			<rect x="16" y="15" width="6" height="5" rx="1" fill="currentColor" opacity="0.7" />
			<line x1="12" y1="7" x2="12" y2="11" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
			<line x1="5" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
			<line x1="5" y1="11" x2="5" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
			<line x1="19" y1="11" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
		</>
	),
	link: (
		<>
			<path d="M10,8 L7.5,10.5 Q4,14 7.5,17.5 Q11,21 14.5,17.5 L15,17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
			<path d="M14,16 L16.5,13.5 Q20,10 16.5,6.5 Q13,3 9.5,6.5 L9,7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
		</>
	),
	magnifier: (
		<>
			<circle cx="10.5" cy="10.5" r="6.5" fill="currentColor" opacity="0.2" />
			<circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85" />
			<line x1="15.5" y1="15.5" x2="20" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
			<circle cx="10.5" cy="10.5" r="2" fill="currentColor" opacity="0.4" />
		</>
	),
	ruler: (
		<>
			<rect x="3" y="8" width="18" height="8" rx="1.5" fill="currentColor" opacity="0.85" />
			<line x1="6" y1="8" x2="6" y2="12" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="9" y1="8" x2="9" y2="14" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="12" y1="8" x2="12" y2="12" stroke="var(--site-accent-fg)" strokeWidth="1" />
			<line x1="15" y1="8" x2="15" y2="14" stroke="var(--site-accent-fg)" strokeWidth="1.2" />
			<line x1="18" y1="8" x2="18" y2="12" stroke="var(--site-accent-fg)" strokeWidth="1" />
		</>
	),
};

export interface StandardIconProps {
	motif: string;
	className?: string;
}

export function StandardIcon({ motif, className = "" }: StandardIconProps) {
	const paths = iconPaths[motif];
	if (!paths) return null;

	return (
		<div
			className={`relative inline-flex items-center justify-center rounded-xl text-accent ${className}`}
			style={{
				width: 56,
				height: 56,
				background: "var(--glass-bg)",
				backdropFilter: "blur(12px) saturate(1.2)",
				WebkitBackdropFilter: "blur(12px) saturate(1.2)",
				boxShadow:
					"0 2px 8px rgba(139,26,26,0.10), 0 8px 24px rgba(90,60,30,0.08), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 2px rgba(139,26,26,0.04)",
				border: "1px solid var(--glass-border)",
			}}
		>
			<div
				className="absolute inset-0 rounded-xl"
				style={{
					background:
						"linear-gradient(135deg, rgba(139,26,26,0.08) 0%, transparent 60%)",
				}}
			/>
			<svg
				viewBox="0 0 24 24"
				width={28}
				height={28}
				fill="none"
				className="relative z-10"
			>
				{paths}
			</svg>
		</div>
	);
}

export function StandardIconSvg({ motif, className }: { motif: string; className?: string }) {
	const paths = iconPaths[motif];
	if (!paths) return null;

	return (
		<svg viewBox="0 0 24 24" fill="none" className={className}>
			{paths}
		</svg>
	);
}
