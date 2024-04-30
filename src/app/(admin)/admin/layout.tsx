"use client";
import { Container } from "@/components/container";
import AdminHeader from "./_components/AdminHeader";

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container size="7xl">
			<AdminHeader />
			<div>{children}</div>
		</Container>
	);
}
