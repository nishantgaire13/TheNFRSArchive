import Link from "next/link";

export interface BreadcrumbItem {
	label: string;
	href: string;
}

export interface BreadcrumbsProps {
	items: BreadcrumbItem[];
	className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.label,
			item: item.href,
		})),
	};

	return (
		<nav aria-label="Breadcrumb" className={`font-sans text-sm ${className}`}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<ol className="flex items-center gap-1.5 text-text-muted">
				{items.map((item, i) => (
					<li key={item.href} className="flex items-center gap-1.5">
						{i > 0 && <span aria-hidden="true" className="text-text-subtle">›</span>}
						{i === items.length - 1 ? (
							<span className="text-text font-medium" aria-current="page">
								{item.label}
							</span>
						) : (
							<Link
								href={item.href}
								className="hover:text-accent transition-colors"
							>
								{item.label}
							</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
