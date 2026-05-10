import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "The NFRS Archive",
	description:
		"Free, searchable reference comparing Nepal Financial Reporting Standards (NFRS) with IFRS. For auditors, CA/ACCA students, and accountants.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="preload"
					href="/fonts/fraunces-latin-full-normal.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/source-serif-4-latin-wght-normal.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/inter-latin-wght-normal.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</head>
			<body className="bg-bg text-text min-h-screen flex flex-col" suppressHydrationWarning>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
