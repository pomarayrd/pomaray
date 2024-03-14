import { Container } from "@/components/container";
import { Text } from "@/components/text";

export default function Home() {
	return (
		<Container>
			<Text as="h1" aling="center" variant={{
				sm: "heading-3",
				"2xl": "heading-5",
				md: "heading-4"
			}}>
				Aprende con el politecnico Madre Rafela Ybarra
			</Text>
			<Text variant={"paragraph-lg"}>No se cansen de hacer el bien</Text>
		</Container>
	);
}
