import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Notify } from "@/components/notify";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { NavbarContent } from "@nextui-org/navbar";
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
			<body
				className={cn(
					"max-w-screen overflow-x-hidden text-foreground",
					inter.className,
				)}
			>
				<Providers>
					<Header>
						<Notify />
					</Header>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
