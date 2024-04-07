import { Text } from "@/components/text";
import locale from "@/locales/home.json";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

async function HeroSection() {
	return (
		<section className="w-full py-12">
			<div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center mt-32">
				<div className="flex flex-col gap-6 ">
					<Text as="h1" size="heading-5" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
						{locale.SEO.TITLE}
					</Text>
					<Text size="paragraph-lg" className="max-w-[600px] md:text-xl">
						{locale.SEO.DESCRIPTION}
					</Text>
					<div className="flex flex-col gap-2 md:flex-row">
						<Button as={Link} href="/tecnicas" color="primary" fullWidth radius="sm">
							{locale.SEO.BUTTON_1}
						</Button>
						<Button as={Link} href="/contacto" variant="flat" fullWidth radius="sm">
							{locale.SEO.BUTTON_2}
						</Button>
					</div>
				</div>
				<Image
					alt={locale.SEO.IMAGE_ALT}
					className="sm:w-full lg:order-last min-h-[450px]"
					src={locale.SEO.IMAGE_SRC}
					isZoomed
				/>
			</div>
		</section>
	);
}

export default HeroSection;
