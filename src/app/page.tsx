import { Container } from "@/components/container";
import { Text } from "@/components/text";

export default function Home() {
	return (
		<Container>
			<section className="flex flex-col gap-8 justify-center items-center h-screen">
				<div className="flex flex-col gap-5 max-w-[70ch]">
					<Text
						as="h1"
						align="center"
						size="heading-5"
						className="text-primary"
					>
						Aprende con el Politecnico Madre Rafela Ybarra
					</Text>
					<Text align="center" size="paragraph-xl" className="italic">
						No se cansen de hacer el bien
					</Text>
				</div>
				<div>{"<Card/>"}</div>
			</section>
		</Container>
	);
}
