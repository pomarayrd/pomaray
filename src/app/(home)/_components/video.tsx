import { Text } from "@/components/text";
import locale from "@/locales/home.json";
import { Image } from "@nextui-org/react";

function VideoSection() {
	return (
		<section className="flex flex-col lg:flex-row flex-center gap-x-44 gap-y-12 justify-between items-center min-h-[70vh] pt-20">
			<div className="flex flex-col gap-5 sm:max-w-full">
				<Text as="h2" size="heading-4" align="center" className="max-w-[40ch]">
					{locale.SECTION1.TITLE}
				</Text>
				<Text size="paragraph-lg" align="center" className="max-w-[40ch]">
					{locale.SECTION1.DESCRIPTION}
				</Text>
			</div>
			<Image
				loading="lazy"
				className="aspect-video"
				width={600}
				alt={locale.SECTION1.IMAGE_ALT}
				src={locale.SECTION1.IMAGE_SRC}
			/>
		</section>
	);
}

export default VideoSection;
