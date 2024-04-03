"use client";
import { Container } from "@/components/container";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container size="7xl">
			<article>{children}</article>
		</Container>
	);
}
