import { Text } from "@/components/text";
import locale from "@/locales/home.json";
import { Button } from "@nextui-org/react";
import Link from "next/link";

async function HeroSection() {
	return (
		<section className="w-full py-12">
			<div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center mt-12">
				<div className="flex flex-col gap-6 ">
					<Text as="h1" size="heading-5" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
						{locale.SEO.TITLE}
					</Text>
					<Text size="paragraph-lg" className="max-w-[600px] text-gray-500 md:text-xl">
						{locale.SEO.DESCRIPTION}
					</Text>
					<div className="flex flex-col gap-2 md:flex-row">
						<Link href="/tecnicas" passHref>
							<Button color="primary" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
								{locale.SEO.BUTTON_1}
							</Button>
						</Link>
						<Link href="/contacto" passHref>
							<Button color="primary" className="inline-flex h-10 items-center justify-center rounded-md border bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 text-black">
								{locale.SEO.BUTTON_2}
							</Button>
						</Link>
					</div>
				</div>
				<img
					alt={locale.SEO.IMAGE_ALT}
					className="mx-auto aspect-video overflow-hidden mt-12 rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
					height="550"
					src={locale.SEO.IMAGE_SRC}
					width="550"
				/>
			</div>
		</section>
	);
}

export default HeroSection;
