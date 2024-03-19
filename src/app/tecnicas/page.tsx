import { TechCard } from "@/components/tech/TechCard";
import { Text } from "@/components/text";
import { Computer } from "@/icons/techIcons";
import locale from "@/locales/tech.json";

export default function Page() {
	return (
		<main className="max-w-7xl space-y-12">
			<section className="space-y-7">
				<Text as="h1" align="center" size="heading-5">
					{locale.HERO.TITLE}
				</Text>
				<Text align="center" size="paragraph-xl">
					{locale.HERO.DESCRIPTION}
				</Text>
			</section>

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
	);
}
