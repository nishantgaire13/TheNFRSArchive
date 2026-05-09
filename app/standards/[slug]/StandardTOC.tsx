"use client";

import { TOC, type TOCItem } from "@/components/ui/TOC";

export function StandardTOC({ items }: { items: TOCItem[] }) {
	return <TOC items={items} />;
}
