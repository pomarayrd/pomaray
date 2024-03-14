"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="container mx-20">
			<Breadcrumbs>
				<BreadcrumbItem>Noticias</BreadcrumbItem>
				<BreadcrumbItem>{"{news_title}"}</BreadcrumbItem>
			</Breadcrumbs>
			<article>{children}</article>
		</main>
	);
}
