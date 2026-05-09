import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-border mt-20">
			<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-10 text-center">
				<p className="font-serif text-sm text-text-muted max-w-[680px] mx-auto leading-relaxed">
					The content here is original commentary for educational purposes. It
					is not, and should not be treated as, the authoritative text of any
					accounting standard. For authoritative guidance refer to{" "}
					<a
						href="https://en.ican.org.np"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent hover:text-accent-hover underline underline-offset-2"
					>
						ICAN
					</a>{" "}
					and the{" "}
					<a
						href="https://www.ifrs.org"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent hover:text-accent-hover underline underline-offset-2"
					>
						IFRS Foundation
					</a>
					.
				</p>

				<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 font-sans text-sm text-text-subtle">
					<Link href="/disclaimer" className="hover:text-text transition-colors">
						Disclaimer
					</Link>
					<Link href="/privacy" className="hover:text-text transition-colors">
						Privacy
					</Link>
					<Link href="/about" className="hover:text-text transition-colors">
						About
					</Link>
					<a
						href="https://docs.google.com/forms/d/e/placeholder/viewform"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-text transition-colors"
					>
						Suggest a correction
					</a>
				</div>

				<p className="font-sans text-xs text-text-subtle mt-6">
					&copy; {new Date().getFullYear()} The NFRS Archive. All original
					content is independently authored.
				</p>
			</div>
		</footer>
	);
}
