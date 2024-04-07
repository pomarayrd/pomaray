"use client";
import { Container } from "@/components/container";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container size="5xl">
			<article className="mt-12 py-12 space-y-6">{children}</article>
		</Container>
	);
}
