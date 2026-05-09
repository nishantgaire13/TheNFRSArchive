export interface WarehouseMotifProps {
	className?: string;
	"aria-label"?: string;
}

export function WarehouseMotif({
	className = "text-accent",
	"aria-label": ariaLabel,
}: WarehouseMotifProps) {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label={ariaLabel}
			className={className}
		>
			{/* Stacked boxes — isometric inventory */}
			{/* Bottom row — 2 boxes */}
			<g>
				{/* Box 1 — bottom left */}
				<path d="M40,120 L80,100 L120,120 L120,155 L80,175 L40,155 Z" />
				<line x1="80" y1="100" x2="80" y2="175" opacity="0.3" />
				<line x1="40" y1="120" x2="120" y2="120" opacity="0.3" />
				{/* Tape mark */}
				<line x1="60" y1="110" x2="60" y2="165" opacity="0.25" strokeDasharray="3 4" />
			</g>
			<g>
				{/* Box 2 — bottom right */}
				<path d="M110,100 L150,80 L190,100 L190,135 L150,155 L110,135 Z" />
				<line x1="150" y1="80" x2="150" y2="155" opacity="0.3" />
				<line x1="110" y1="100" x2="190" y2="100" opacity="0.3" />
			</g>
			{/* Top box — stacked */}
			<g>
				<path d="M60,75 L100,55 L140,75 L140,110 L100,130 L60,110 Z" />
				<line x1="100" y1="55" x2="100" y2="130" opacity="0.3" />
				<line x1="60" y1="75" x2="140" y2="75" opacity="0.3" />
				{/* Open flap hint */}
				<path d="M100,55 L115,48 L130,58" opacity="0.4" />
			</g>
			{/* Small box — far left */}
			<g opacity="0.6">
				<path d="M10,140 L30,130 L50,140 L50,158 L30,168 L10,158 Z" />
				<line x1="30" y1="130" x2="30" y2="168" opacity="0.3" />
			</g>
			{/* Clipboard / inventory checklist */}
			<g transform="translate(150,120)" opacity="0.5">
				<path d="M0,15 L5,0 L30,12 L25,27 Z" />
				<line x1="8" y1="10" x2="22" y2="16" opacity="0.5" />
				<line x1="10" y1="14" x2="24" y2="20" opacity="0.5" />
				<line x1="12" y1="18" x2="20" y2="22" opacity="0.5" />
				{/* Clip */}
				<path d="M12,2 L20,6 L18,8 L10,4 Z" />
			</g>
			{/* Ground shadow */}
			<ellipse cx="110" cy="178" rx="70" ry="8" opacity="0.1" />
		</svg>
	);
}
