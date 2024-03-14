"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Chip, Tab, Tabs } from "@nextui-org/react";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="container max-w-5xl mx-auto px-6 sm:px-12 py-6">
			<div className="flex w-full flex-col">
				<Tabs
					aria-label="Options"
					color="primary"
					variant="underlined"
					classNames={{
						tabList:
							"gap-6 w-full relative rounded-none p-0 border-b border-divider",
						cursor: "w-full bg-[#22d3ee]",
						tab: "max-w-fit px-0 h-12",
						tabContent: "group-data-[selected=true]:text-[#06b6d4]",
					}}
				>
					<Tab
						key="historia"
						title={
							<div className="flex items-center space-x-2">
								<span>Historia</span>
							</div>
						}
					/>
					<Tab
						key="filosofia"
						title={
							<div className="flex items-center space-x-2">
								<span>Filosofía</span>
							</div>
						}
					/>
					<Tab
						key="objetivos"
						title={
							<div className="flex items-center space-x-2">
								<span>Objetivos</span>
							</div>
						}
					/>
				</Tabs>
			</div>
			<article>{children}</article>
		</main>
	);
}
