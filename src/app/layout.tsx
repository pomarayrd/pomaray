import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Notify } from "@/components/notify";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Politécnico Madre Rafaela Ybarra",
	description: "Un lugar de Recreación y visión para el futuro",
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
