import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Notify } from "@/components/notify";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import locale from "@/locales/root.json";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: locale.WEBSITE.NAME,
	description: locale.WEBSITE.DESCRIPTION,
	category: locale.WEBSITE.CATEGORY,
	keywords: locale.WEBSITE.TAGS,
	openGraph: {
		title: locale.WEBSITE.NAME,
		description: locale.WEBSITE.DESCRIPTION,
		images: locale.WEBSITE.BANNER,
	},
	metadataBase: new URL("https://pomaray.vercel.app/"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es-DO">
			<head>
				<meta name="theme-color" content="#387040" />
				<link rel="icon" type="image/x-icon" href="images/icons/favicon.ico" />
			</head>
			<body
				className={cn(
					"max-w-screen overflow-x-hidden text-foreground",
					inter.className,
				)}
			>
				<Analytics />
				<Providers>
					<Header>
						<Notify />
						<SpeedInsights />
					</Header>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
