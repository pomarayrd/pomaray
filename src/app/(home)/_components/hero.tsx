import { Text } from "@/components/text";
import locale from "@/locales/home.json";

async function HeroSection() {
	return (
		<section className="relative flex flex-col gap-8 flex-center min-h-[88vh]">
			<div className="flex flex-col gap-5 max-w-[90ch] mt-20">
				<Text as="h1" align="center" size="heading-6">
					{locale.SEO.TITLE}
				</Text>
				<Text align="center" size="paragraph-xl" className="italic">
					{locale.SEO.SLOGAN}
				</Text>
			</div>
		</section>
	);
}

export default HeroSection;
