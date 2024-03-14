"use client";
import { Container } from "@/components/container";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Chip, Tab, Tabs } from "@nextui-org/react";

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
