import { Text } from "@/components/text";
import locale from "@/locales/home.json";
import { Image } from "@nextui-org/react";

function CollageSection() {
	return (
		<section className="flex flex-col justify-between items-center gap-12">
			<Text as="h2" size="heading-4" align="center">
				{locale.SECTION2.TITLE}
			</Text>
			<Text size="paragraph-lg" align="center" className="max-w-[50ch]">
				{locale.SECTION2.DESCRIPTION}
			</Text>
			<div className="bg-primary h-full flex flex-col overflow-hidden rounded-xl">
				{locale.SECTION3.COLLAGE.map((item, index) => (
					<aside key={item.IMAGE} className={"grid grid-cols-1 sm:grid-cols-2"}>
						<div
							className={`h-full ${index % 2 === 0 ? "order-2" : "order-1"}`}
						>
							<Image
								loading="lazy"
								radius="none"
								src={item.IMAGE}
								alt={item.TITLE}
								classNames={{
									img: "w-full h-full object-cover",
									wrapper: "!max-w-full h-ful",
								}}
							/>
						</div>
						<div
							className={`flex flex-col flex-center p-10  h-full mb-6 ${
								index % 2 === 0 ? "sm:order-1 order-2" : "order-2"
							}`}
						>
							<h3 className="text-xl sm:text-3xl font-bold text-white text-center">
								{item.TITLE}
							</h3>
							<p className="text-gray-200 text-center mt-6">
								{item.DESCRIPTION}
							</p>
						</div>
					</aside>
				))}
			</div>
		</section>
	);
}

export default CollageSection;
