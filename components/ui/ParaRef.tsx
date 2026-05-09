export interface ParaRefProps {
	std: string;
	para: string;
	className?: string;
}

function getHref(std: string): string {
	const upper = std.toUpperCase();
	if (upper.startsWith("IFRS") || upper.startsWith("IAS")) {
		return "https://www.ifrs.org/issued-standards/list-of-standards/";
	}
	return "https://en.ican.org.np/";
}

export function ParaRef({ std, para, className = "" }: ParaRefProps) {
	const label = `${std}.${para}`;

	return (
		<a
			href={getHref(std)}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center font-mono text-xs bg-code-bg text-code-fg rounded-pill px-2 py-0.5 hover:bg-bg-inset transition-colors ${className}`}
		>
			{label}
		</a>
	);
}
