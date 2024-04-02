import { Container } from "@/components/container";
import { Text } from "@/components/text";
import locale from "@/locales/home.json";
import { Button, Card, Image } from "@nextui-org/react";
import { CloseIcon } from "@nextui-org/shared-icons";
import Link from "next/link";

export default function Home() {
	return (
		<Container size="7xl" className="gap-32">
			<section className="flex flex-col gap-8 flex-center min-h-[85vh]">
				<div className="flex flex-col gap-5 max-w-[70ch] mt-20">
					<Text as="h1" align="center" size="heading-5">
						{locale.SEO.TITLE}
					</Text>
					<Text align="center" size="paragraph-xl" className="italic">
						{locale.SEO.SLOGAN}
					</Text>
				</div>
				<div className="flex gap-6 mt-20">
					{Array.from({ length: 3 }).map((_, index) => (
						<Card
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							as={Link}
							href="/card-1"
							shadow="none"
							radius="sm"
							className="bg-white shadow-sm  flex flex-col flex-center gap-4 w-[200px] h-[170px] text-center hover:opacity-55 transition-opacity cursor-pointer"
						>
							<CloseIcon className="text-3xl text-primary" />
							<p className="p-2">{"<Card/>"}</p>
						</Card>
					))}
				</div>
			</section>
			<section className="flex justify-between items-center gap-12 h-[50vh] ">
				<div className="flex flex-col gap-5 max-w-[40ch]">
					<Text as="h2" size="heading-4">
						{locale.SECTION1.TITLE}
					</Text>
					<Text size="paragraph-lg">{locale.SECTION1.DESCRIPTION}</Text>
				</div>
				<div>
					<Image
						loading="lazy"
						className="aspect-video"
						width={600}
						alt={locale.SECTION1.IMAGE_ALT}
						src={locale.SECTION1.IMAGE_SRC}
					/>
				</div>
			</section>
			<section className="flex flex-col justify-between items-center gap-12">
				<Text as="h2" size="heading-4" align="center">
					{locale.SECTION2.TITLE}
				</Text>
				<Text size="paragraph-lg" align="center" className="max-w-[50ch]">
					{locale.SECTION2.DESCRIPTION}
				</Text>
				<div className="bg-primary h-full flex flex-col overflow-hidden rounded-xl">
					{locale.SECTION3.COLLAGE.map((item, index) => (
						<aside
							key={item.IMAGE}
							className={"grid grid-cols-1 sm:grid-cols-2"}
						>
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
								className={`flex flex-col flex-center p-10  h-full mb-6 ${index % 2 === 0 ? "sm:order-1 order-2" : "order-2"
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
			<section
				className="flex flex-col flex-center gap-9 w-full"
			>
				<Text as="h2" size="heading-4">
					{locale.SECTION4.TITLE}
				</Text>
				<iframe
					loading="lazy"
					aria-label={locale.SECTION4.IFRAME_ARIA_LABEL}
					title={locale.SECTION4.IFRAME_TITLE}
					className="aspect-video w-full h-[50vh]"
					src={locale.SECTION4.IFRAME_SRC}
					allowFullScreen
				/>
			</section>
			<section className="relative flex flex-center w-full min-h-[50vh]">
				<div className="absolute flex-col flex-center w-full min-h-[70vh] bg-primary rounded-xl p-20 -bottom-16 text-white">
					<Text as="h2" size="heading-4" className="text-white">
						{locale.SECTION5.TITLE}
					</Text>
					<Button>Ver las ultimas noticias!</Button>
				</div>
			</section>
		</Container>
	);
}
