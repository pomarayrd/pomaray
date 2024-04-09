import { Container } from "@/components/container";

export default function AboutLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<Container className="max-w-5xl pb-12 ">
			<article className="mx-auto space-y-8 pt-24 text-start">{children}</article>
		</Container>
	);
}
