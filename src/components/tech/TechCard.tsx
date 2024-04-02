import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { cloneElement } from "react";

export function TechCard({
	dynamicPath,
	TechId,
	TechName,
	iconElement,
	description,
}: {
	dynamicPath: string;
	TechId: string;
	TechName: string;
	iconElement?: JSX.Element;
	description: string;
}) {
	return (
		<Card
			as={Link}
			href={`${dynamicPath}/${TechId.toLowerCase()}`}
			isPressable
			shadow="none"
			className="xl:p-6 hover:bg-default-200 bg-default-100 h-full shadow-sm text-foreground transition-colors"
		>
			<CardHeader className="flex items-center justify-center pt-5 sm:pt-10">
				<div className="p-4 rounded-full border-2 border-primary">
					{iconElement &&
						cloneElement(iconElement, {
							className: "lg:w-8 lg:h-8 text-primary",
						})}
				</div>
			</CardHeader>
			<CardBody className="text-center pb-8">
				<h3 className="md:text-md text-lg font-bold mt-4 mb-2">{TechName}</h3>
				<p className="text-sm">{description}</p>
			</CardBody>
		</Card>
	);
}
