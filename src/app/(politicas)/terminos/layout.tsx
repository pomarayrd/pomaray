import { Container } from "@/components/container";

export default function AboutLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<Container size="5xl" className="pb-12">
			<article className="mx-auto mt-32 space-y-8">{children}</article>
		</Container>
	);
}
