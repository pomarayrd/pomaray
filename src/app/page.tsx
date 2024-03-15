import { Carousel } from "@/components/carousel";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import locale from "@/locales/home.json"

export default function Home() {
	return (
		<Container>
			<Carousel className="flex flex-col gap-8 justify-center items-center h-screen" images={
				locale.SEO.IMAGES
			}>
				<div className="flex flex-col gap-5 max-w-[70ch] text-white">
					<Text
						as="h1"
						align="center"
						size="heading-5"
					>
						{locale.SEO.TITLE}
					</Text>
					<Text align="center" size="paragraph-xl" className="italic">
						{locale.SEO.SLOGAN}
					</Text>
				</div>
			</Carousel>
		</Container>
	);
}
