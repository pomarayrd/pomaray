"use client";
import { Container } from "@/components/container";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container>
			<article>{children}</article>
		</Container>
	);
}
