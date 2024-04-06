import { Text } from "@/components/text";
import locale from "@/locales/home.json";

function MapSection() {
	return (
		<section className="flex flex-col flex-center gap-9 w-full">
			<Text as="h2" size="heading-4">
				{locale.SECTION4.TITLE}
			</Text>
			<iframe
				loading="lazy"
				aria-label={locale.SECTION4.IFRAME_ARIA_LABEL}
				title={locale.SECTION4.IFRAME_TITLE}
				className="aspect-video w-full h-[50vh] rounded-2xl border-primary"
				src={locale.SECTION4.IFRAME_SRC}
				allowFullScreen
			/>
		</section>
	);
}

export default MapSection;
