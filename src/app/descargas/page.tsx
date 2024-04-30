import { DownloadsTable } from "@/app/descargas/_components/DownloadsTable";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import locale from "@/locales/download.json";

export default async function DescargasPage() {
	return (
		<Container size="7xl">
			<section className="flex flex-col gap-8 mt-24">
				<Text as="h1" size="heading-5" className="text-primary ">
					{locale.HERO.TITLE}
				</Text>
				<Text size="paragraph-lg" className="max-w-[70ch] text-pretty">
					{locale.HERO.SUB_TITLE}
				</Text>
			</section>
			<DownloadsTable />
		</Container>
	);
}
