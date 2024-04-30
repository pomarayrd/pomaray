import { TechCard } from "@/components/tech/TechCard";
import { TechIcons } from "@/icons/TechniqueIcons";
import locale from "@/locales/tech.json";
import { Button } from "@nextui-org/react";
import Link from "next/link";

function TechSection() {
	const viewTechs = locale.TECHS.slice(0, 4);

	return (
		<section className="flex flex-col gap-6 w-full py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 px-6 sm:px-10 md:px-10 xl:px-[15rem]]">
				{viewTechs.map((tech) => {
					const iconElement = TechIcons.find(
						(icon) => Object.keys(icon)[0] === tech.ID,
					)?.[tech.ID];

					return (
						<TechCard
							key={tech.ID}
							techId={tech.ID}
							techName={tech.NAME}
							iconElement={iconElement}
							description={tech.DESCRIPTION}
						/>
					);
				})}
			</div>
			<div className="w-full flex flex-center py-6">
				<Button color="primary" radius="sm" as={Link} href="/tecnicas">
					{locale.VIEW_MORE}
				</Button>
			</div>
		</section>
	);
}

export default TechSection;
