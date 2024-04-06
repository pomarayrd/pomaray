import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { cloneElement } from "react";
import type { PomarayComponent } from "../types";

interface TechCardProps extends PomarayComponent {
	dynamicPath?: string;
	techId: string;
	techName: string;
	iconElement: JSX.Element;
	description: string;
}
export function TechCard({
	className,
	dynamicPath = "/tecnicas",
	techId,
	techName,
	iconElement,
	description,
}: TechCardProps) {
	return (
		<Card
			as={Link}
			href={`${dynamicPath}/${techId.toLowerCase()}`}
			isPressable
			shadow="none"
			className={cn("xl:p-6 hover:bg-default-200 bg-default-100 h-full shadow-sm text-foreground transition-colors", className)}
		>
			<CardHeader className="flex items-center justify-center pt-5 sm:pt-10">
				<div className="p-4 rounded-full border-2 border-primary aspect-square">
					{iconElement &&
						cloneElement(iconElement, {
							className: "lg:w-8 lg:h-8 text-primary max-w-[60px] max-h-[60px]",
						})}
				</div>
			</CardHeader>
			<CardBody className="text-center pb-8">
				<h3 className="md:text-md text-lg font-bold mt-4 mb-2">{techName}</h3>
				<p className="text-sm">{description}</p>
			</CardBody>
		</Card >
	);
}
