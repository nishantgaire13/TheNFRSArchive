import { STANDARD_ILLUSTRATIONS } from "@/lib/standardIllustrations";

interface Props {
	slug: string;
	number: string;
	name: string;
}

function extractNumber(nfrsNumber: string): string {
	const match = nfrsNumber.match(/\d+/);
	return match ? match[0] : "";
}

export function StandardBgIllustration({ slug, number, name }: Props) {
	const Content = STANDARD_ILLUSTRATIONS[slug];
	if (!Content) return null;

	const displayNum = extractNumber(number);
	const label = `${number} · ${name.toUpperCase()}`;

	return (
		<svg
			viewBox="0 0 900 380"
			width="100%"
			fill="none"
			role="presentation"
			aria-hidden="true"
			style={{
				color: "var(--illust-color)",
				animation: "driftIn 1.4s ease both",
			}}
		>
			<text
				x="520"
				y="310"
				fontFamily="Georgia,serif"
				fontSize="260"
				fontWeight="700"
				fill="currentColor"
				opacity="0.06"
				letterSpacing="-10"
			>
				{displayNum}
			</text>

			<g opacity="0.42">
				<Content />

				<text
					x="840"
					y="370"
					textAnchor="end"
					fontFamily="Georgia,serif"
					fontSize="11"
					fill="currentColor"
					letterSpacing="3"
				>
					{label}
				</text>
			</g>
		</svg>
	);
}
