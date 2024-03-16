"use client";
import { Container } from "@/components/container";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container className="max-w-5xl">
			<article>{children}</article>
		</Container>
	);
}
