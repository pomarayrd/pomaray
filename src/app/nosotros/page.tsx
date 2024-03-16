import { Carousel } from "@/components/carousel";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import locale from "@/locales/nosotros.json";

export default function Nosotros() {
	return (
		<Container>
			<section className="">
				<div className="max-w-4xl mx-auto">
					<Text
						as="h1"
						align="center"
						size="heading-5"
						className="font-extrabold mb-4 text-primary"
					>
						{locale.TITLE}
					</Text>
					<Text align="center" size="paragraph-sm" className="italic">
						{locale.SLOGAN}
					</Text>
				</div>
			</section>

			<section className="py-8">
				<div className="max-w-4xl mx-auto">
					<Text as="h2" size="heading-3" className="text-primary mb-4">
						{locale.LEGADO.TITLE}
					</Text>
					<div className="text-gray-700">
						{Array.isArray(locale.LEGADO.CONTENT) &&
							locale.LEGADO.CONTENT.map((paragraph) => (
								<div key={paragraph} className="mb-4">
									{paragraph}
								</div>
							))}
					</div>
				</div>
			</section>

			<section className="py-8">
				<div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
					{locale.LEGADO.IMAGES.map((image, index) => (
						<div key={image} className="rounded-xl overflow-hidden">
							<img
								src={image}
								alt={`Imagen ${index + 1}`}
								className="h-full w-full object-cover"
							/>
						</div>
					))}
				</div>
			</section>

			<section className="py-4">
				<div className="max-w-4xl mx-auto">
					<Text
						as="h2"
						size="heading-6lg"
						className="text-primary font-extrabold mb-4"
					>
						{locale.OBJETIVO_GENERAL.TITLE}
					</Text>
					<Text size="paragraph-md" className="text-gray-700">
						{locale.OBJETIVO_GENERAL.CONTENT}
					</Text>
				</div>
			</section>

			<section className="py-4 ">
				<div className="max-w-4xl mx-auto">
					<Text
						as="h2"
						size="heading-lg"
						className="text-primary font-extrabold mb-4"
					>
						{locale.MISION.TITLE}
					</Text>
					<Text size="paragraph-md" className="text-gray-700">
						{locale.MISION.CONTENT}
					</Text>
				</div>
			</section>

			<section className="py-4">
				<div className="max-w-4xl mx-auto">
					<Text
						as="h2"
						size="heading-lg"
						className="text-primary font-extrabold mb-4"
					>
						{locale.VISION.TITLE}
					</Text>
					<Text size="paragraph-md" className="text-gray-700">
						{locale.VISION.CONTENT}
					</Text>
				</div>
			</section>

			<section className="py-8">
				<div className="max-w-4xl mx-auto">
					<Text as="h2" size="heading-3" className="text-primary mb-4">
						Técnicas
					</Text>
					<Text size="paragraph-md" className="text-gray-700 mb-4">
						{locale.TECNICAS.INTRODUCCION}
					</Text>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{locale.TECNICAS.TECNICAS.map((tecnica, index) => (
							<a href={tecnica.URL} key={`tecnica_${tecnica}`}>
								<div className="border border-gray-300 rounded-md overflow-hidden">
									<img
										src={tecnica.IMAGEN}
										alt={tecnica.NOMBRE}
										className="w-full h-auto"
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</Container>
	);
}
