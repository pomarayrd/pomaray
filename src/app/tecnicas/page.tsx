import { Container } from "@/components/container";
import { Text } from "@/components/text";

function TechsPage() {
	return (
		<Container>
			<section className="max-w-[70ch] mx-auto mt-28">
				<Text as="h1" size="heading-6" align="center">
					Lorem ipsum dolor sit.
				</Text>
				<Text
					className="mt-6 mx-auto max-w-[60vh]"
					size="paragraph-lg"
					align="center"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nisi
					nostrum, aspernatur facilis molestias nesciunt.
				</Text>
			</section>
		</Container>
	);
}

export default TechsPage;
