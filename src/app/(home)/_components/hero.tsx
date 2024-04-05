import { Text } from "@/components/text";
import locale from "@/locales/home.json";
import { EyeIcon } from "@nextui-org/shared-icons";
import HeroCard from "./hero-card";

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
			<HeroCard vertical="center" horizontal="left" rotate={-10}>
				<EyeIcon className="text-3xl" />
				<p className="p-2">Lorem ipsum dolor sit.</p>
			</HeroCard>
			<HeroCard vertical="top" horizontal="right" rotate={5}>
				<EyeIcon className="text-3xl" />
				<p className="p-2">Lorem ipsum dolor sit amet consectetur.</p>
			</HeroCard>
			<HeroCard vertical="bottom" horizontal="right" rotate={-5}>
				<EyeIcon className="text-3xl" />
				<p className="p-2">Lorem ipsum dolor sit amet.</p>
			</HeroCard>
		</section>
	);
}

export default HeroSection;
