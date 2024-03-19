<<<<<<< HEAD
import { TechCard } from "@/components/tech/TechCard";
import { Text } from "@/components/text";
import { Computer } from "@/icons/techIcons";
import locale from "@/locales/tech.json";
=======
import { Container } from "@/components/container";
import { Text } from "@/components/text";
>>>>>>> ce9c9eae0cf82420f9916bd5a6c4d7d7a2edfad4

function TechsPage() {
	return (
<<<<<<< HEAD
		<main className="max-w-7xl space-y-12">
			<section className="space-y-7">
				<Text as="h1" align="center" size="heading-5">
					{locale.HERO.TITLE}
=======
		<Container>
			<section className="max-w-[70ch] mx-auto mt-28">
				<Text as="h1" size="heading-6" align="center">
					Lorem ipsum dolor sit.
>>>>>>> ce9c9eae0cf82420f9916bd5a6c4d7d7a2edfad4
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
<<<<<<< HEAD

			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 px-6 sm:px-10 md:px-10 xl:px-[15rem]]">
				{locale.TECHS.map((tech) => (
					<TechCard
						key={tech.ID}
						TechId={tech.ID}
						dynamicPath={`/${tech.ID}`}
						TechName={tech.NAME}
						iconElement={<Computer />}
						description={tech.DESCRIPTION}
					/>
				))}
			</section>
		</main>
=======
		</Container>
>>>>>>> ce9c9eae0cf82420f9916bd5a6c4d7d7a2edfad4
	);
}

export default TechsPage;
