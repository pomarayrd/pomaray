"use client";

import { Text } from "@/components/text"; // Importamos el componente Text
import i18n from "@/locales/tecnicas[id].json";
import { Button, Card, Chip, Divider, Image } from "@nextui-org/react";
import { notFound, useParams } from "next/navigation";

export default function TechniquePage() {
	const { id } = useParams<{ id: string }>();
	const technique = i18n.DATA[id as keyof typeof i18n.DATA];

	const mailTo = () => {
		const subject = i18n.SEND_MAIL.SUBJECT.replace("%s", technique.NAME);
		const body = i18n.SEND_MAIL.MESSAGE.replace("%s", technique.NAME);
		const mailtoLink = `mailto:${
			i18n.SEND_MAIL.MAIL
		}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoLink;
	};

	if (!technique) notFound();

	return (
		<main className="min-h-screen">
			<article className="max-w-5xl mx-auto overflow-hidden px-6 sm:px-12 py-6">
				<section className="flex flex-col items-center">
					<div>
						<Image src={technique.BANNER} width={1440} alt={technique.TITLE} />
					</div>
					<div className="flex flex-col justify-center items-start py-8 w-full">
						<Chip
							color="primary"
							variant="bordered"
							size="lg"
							className="mb-2 max-w-full text-ellipsis overflow-hidden"
							classNames={{
								content: "text-ellipsis  overflow-hidden",
							}}
						>
							{technique.NAME}
						</Chip>
						<Text size="heading-4" className="mb-2">
							{technique.TITLE}
						</Text>
						{technique.DESCRIPTION.map((desc) => (
							<Text
								key={desc}
								size="paragraph-base"
								className="mb-4 text-pretty"
							>
								{desc}
							</Text>
						))}
						<div className="print:hidden grid grid-cols-2 gap-4 mt-4">
							<Button
								fullWidth
								onClick={() => {
									print();
								}}
								color="primary"
								className="sm:text-md text-sm"
							>
								{i18n.DOWNLOAD_BTN}
							</Button>
							<Button
								fullWidth
								onClick={mailTo}
								color="primary"
								variant="bordered"
								className="sm:text-md text-sm"
							>
								{i18n.REQUEST_BTN}
							</Button>
						</div>
					</div>
				</section>

				{technique.INFORMATION.map((item, index) => {
					if (index === 1) {
						return (
							<section key={item.TITLE} className="print:py-2 py-8">
								<Text size="heading-3" className="my-4 text-primary">
									{technique.GALLERY_TITLE}
								</Text>
								<Divider className="h-1 mt-2 bg-primary rounded-full" />
								<div className="grid grid-cols-12 gap-4 pt-6">
									{technique.IMAGES.map((image, imageIndex) => (
										<Card
											shadow="none"
											key={image.trim()}
											className="lg:col-span-4 sm:col-span-6 col-span-12 h-[300px]"
										>
											<Image
												removeWrapper
												alt={`Image ${imageIndex + 1}`}
												className="z-0 w-full h-full object-cover hover:scale-125 transition-transform"
												src={image}
											/>
										</Card>
									))}
								</div>
							</section>
						);
					}
					return (
						<section
							key={item.TITLE}
							className="print:py-2 sm:py-6 py-2 sm:px-0"
						>
							<Text size="heading-3" className="my-4 text-primary">
								{item.TITLE}
							</Text>
							<Divider className="h-1 mt-2 bg-primary rounded-full" />
							{item.PARAGRAPHS.map((paragraph) => (
								<Text
									key={paragraph}
									size="paragraph-base"
									className="my-4 text-pretty"
								>
									{paragraph}
								</Text>
							))}
						</section>
					);
				})}
			</article>
		</main>
	);
}
