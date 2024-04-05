import type { PomarayComponent } from "@/components/types";
import { cn } from "@/lib/utils";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { tv } from "tailwind-variants";

const textVariant = tv({
	base: "absolute flex flex-col flex-center gap-4 w-[200px] h-[170px] shadow-sm bg-primary text-white text-center hover:scale-90 transition-transform cursor-pointer",
	variants: {
		vertical: {
			top: "top-28",
			center: "",
			bottom: "bottom-28",
		},
		horizontal: {
			left: "-left-20",
			right: "right-20",
		},
	},
	defaultVariants: {
		vertical: "center",
		horizontal: "left",
	},
});

interface HeroCardProps extends PomarayComponent {
	vertical?: keyof typeof textVariant.variants.vertical;
	horizontal?: keyof typeof textVariant.variants.horizontal;
	rotate?: number;
	href?: string;
}

function HeroCard({
	children,
	className,
	rotate,
	href = "/",
	vertical,
	horizontal,
}: HeroCardProps) {
	const variantClasses = textVariant({ vertical, horizontal });
	const rotateDeg = `${rotate}deg`;
	return (
		<Card
			as={Link}
			href={href}
			radius="sm"
			className={cn(className, variantClasses)}
			style={{
				rotate: rotateDeg,
			}}
		>
			{children}
		</Card>
	);
}

export default HeroCard;
