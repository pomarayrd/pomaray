import { Text } from "@/components/text";
import locale from "@/locales/tech.json";
import { Card } from "@nextui-org/react";
import { CloseIcon } from "@nextui-org/shared-icons";
import Link from "next/link";

export default function Page() {
	return (
		<main className="max-w-5xl space-y-12">
			<section className="space-y-7">
				<Text as="h1" align="center" size="heading-5">
					{locale.HERO.TITLE}
				</Text>
				<Text align="center" size="paragraph-xl">
					{locale.HERO.DESCRIPTION}
				</Text>
			</section>

			<section className="flex justify-center items-center gap-4">
				{locale.TECHS.map((tech) => (
					<Card
						key={tech.ID}
						as={Link}
						href={`/${tech.ID}`}
						className="bg-white shadow-sm rounded-md flex flex-col justify-center items-center p-4 w-48 h-48 text-center cursor-pointer"
					>
						<CloseIcon className="text-3xl text-primary" />
						<p className="p-2">{tech.DESCRIPTION}</p>
					</Card>
				))}
			</section>
		</main>
	);
}
